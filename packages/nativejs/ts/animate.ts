import { EventEmitter } from "./api.js";

// Based on animate-plus.js
// DOM
export type AnimationTarget = string | Node | NodeList;
export const getElements = (selector: string | Node): Node[] => {
    return typeof selector === "string" ? [...document.querySelectorAll(selector as string)] : [selector];
};

export const getTargets = (targets: AnimationTarget): Node[] => {
    if (Array.isArray(targets)) return targets;
    if (typeof targets == "string" || targets instanceof Node)
        return getElements(targets);
    if (targets instanceof NodeList) return [...targets];
    return null;
};

const accelerate = ({ style }, keyframes) =>
    style.willChange = keyframes
        ? keyframes.map(({ property }) => property).join()
        : "auto";

// Compute Value
export const computeValue = (value: any, input: any) =>
    typeof value == "function" ? value(input) : value;

// Convert all hex color to rgba
export const parseColor = (value: string): string => {
    let strValue = String(value);
    if (!strValue.startsWith("#")) return strValue;
    let hex = strValue.slice(1);
    let [r, g, b, a = 255] = hex.length < 5 ?
        hex.match(/\w/g).map(x => parseInt(x + x, 16)) :
        hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r}, ${g}, ${b}, ${a / 255})`;
};

// Easing Equations 
const pi2 = Math.PI * 2;
const getOffset = (strength, period) =>
    period / pi2 * Math.asin(1 / strength);

export const easings = {
    "linear": progress => progress,

    "in-cubic": progress => progress ** 3,
    "in-quartic": progress => progress ** 4,
    "in-quintic": progress => progress ** 5,
    "in-exponential": progress => 1024 ** (progress - 1),
    "in-circular": progress => 1 - Math.sqrt(1 - progress ** 2),
    "in-elastic": (progress, amplitude, period) => {
        const strength = Math.max(amplitude, 1);
        const offset = getOffset(strength, period);
        return -(strength * 2 ** (10 * (progress -= 1)) * Math.sin((progress - offset) * pi2 / period));
    },

    "out-cubic": progress => --progress ** 3 + 1,
    "out-quartic": progress => 1 - --progress ** 4,
    "out-quintic": progress => --progress ** 5 + 1,
    "out-exponential": progress => 1 - 2 ** (-10 * progress),
    "out-circular": progress => Math.sqrt(1 - --progress ** 2),
    "out-elastic": (progress, amplitude, period) => {
        const strength = Math.max(amplitude, 1);
        const offset = getOffset(strength, period);
        return strength * 2 ** (-10 * progress) * Math.sin((progress - offset) * pi2 / period) + 1;
    },

    "in-out-cubic": progress =>
        (progress *= 2) < 1
            ? .5 * progress ** 3
            : .5 * ((progress -= 2) * progress ** 2 + 2),
    "in-out-quartic": progress =>
        (progress *= 2) < 1
            ? .5 * progress ** 4
            : -.5 * ((progress -= 2) * progress ** 3 - 2),
    "in-out-quintic": progress =>
        (progress *= 2) < 1
            ? .5 * progress ** 5
            : .5 * ((progress -= 2) * progress ** 4 + 2),
    "in-out-exponential": progress =>
        (progress *= 2) < 1
            ? .5 * 1024 ** (progress - 1)
            : .5 * (-(2 ** (-10 * (progress - 1))) + 2),
    "in-out-circular": progress =>
        (progress *= 2) < 1
            ? -.5 * (Math.sqrt(1 - progress ** 2) - 1)
            : .5 * (Math.sqrt(1 - (progress -= 2) * progress) + 1),
    "in-out-elastic": (progress, amplitude, period) => {
        const strength = Math.max(amplitude, 1);
        const offset = getOffset(strength, period);
        return (progress *= 2) < 1
            ? -.5 * (strength * 2 ** (10 * (progress -= 1)) * Math.sin((progress - offset) * pi2 / period))
            : strength * 2 ** (-10 * (progress -= 1)) * Math.sin((progress - offset) * pi2 / period) * .5 + 1;
    }
};

const decomposeEasing = (value: string) => {
    const [easing, amplitude = 1, period = .4] = value.trim().split(" ");
    return { easing, amplitude, period };
};

const ease = ({ easing, amplitude, period }, progress: number): number =>
    easings[easing](progress, amplitude, period);


// keyframes composition
// =====================

const extractRegExp = /-?\d*\.?\d+/g;
const extractStrings = (value: string): string[] =>
    value.split(extractRegExp);
const extractNumbers = (value: string): number[] =>
    value.match(extractRegExp).map(Number);
const sanitize = (values: any[]) => values.map(parseColor);

export interface keyframes {
    property: string,
    numbers: number[][],
    strings: string[],
    round: boolean
};

const propertyKeyframes = (property: string, values: any): keyframes => {
    const animatable = sanitize(values);
    const strings = extractStrings(animatable[0]);
    const numbers = animatable.map(extractNumbers);
    const round = strings[0].startsWith("rgb");
    return { property, strings, numbers, round };
};

const createAnimationKeyframes = (animationProperties: object, index: number) =>
    Object.entries(animationProperties)
        .map(([property, values]: [string, any[]]) => {
            return propertyKeyframes(property, computeValue(values, index))
        });

const getCurrentValue = (from: number, to: number, easing: number) =>
    from + (to - from) * easing;

const recomposeValue = ([from, to]: number[][], strings: string[], round: boolean, easing: number) =>
    strings.reduce((style, string, index) => {
        const previous = index - 1;
        const value = getCurrentValue(from[previous], to[previous], easing);
        return style + (round && index < 4 ? Math.round(value) : value) + string;
    });

const createStyles = (keyframes: keyframes[], easing: number) =>
    keyframes.reduce((styles, { property, numbers, strings, round }: keyframes) => {
        styles[property] = recomposeValue(numbers, strings, round, easing);
        return styles;
    }, {});

const reverseKeyframes = keyframes =>
    keyframes.forEach(({ numbers }) => numbers.reverse());


// animation tracking
// ==================

const rAF = {
    all: new Set,
    add(object) {
        if (this.all.add(object).size < 2) requestAnimationFrame(tick);
    }
};

const paused = {};

const trackTime = (timing, now) => {
    if (!timing.startTime) timing.startTime = now;
    timing.elapsed = now - timing.startTime;
};

const resetTime = object =>
    object.startTime = 0;

const getProgress = ({ elapsed, duration }) =>
    duration > 0 ? Math.min(elapsed / duration, 1) : 1;

const setSpeed = (speed, value, index) =>
    speed > 0 ? computeValue(value, index) / speed : 0;

const addAnimations = (options, resolve) => {
    const {
        elements = null,
        easing = "out-elastic",
        duration = 1000,
        delay: timeout = 0,
        speed = 1,
        loop = false,
        optimize = false,
        direction = "normal",
        blur = null,
        change = null,
        ...rest
    } = options;

    const last = {
        totalDuration: -1
    };

    getElements(elements).forEach(async (element, index) => {
        const keyframes = createAnimationKeyframes(rest, index);
        const animation = {
            element,
            keyframes,
            loop,
            optimize,
            direction,
            change,
            easing: decomposeEasing(easing),
            duration: setSpeed(speed, duration, index)
        };

        const animationTimeout = setSpeed(speed, timeout, index);
        const totalDuration = animationTimeout + animation.duration;

        if (direction != "normal")
            reverseKeyframes(keyframes);

        if (element) {
            if (optimize)
                accelerate(element, keyframes);
        }

        if (totalDuration > last.totalDuration) {
            last.animation = animation;
            last.totalDuration = totalDuration;
        }

        if (animationTimeout) await delay(animationTimeout);
        rAF.add(animation);
    });

    const { animation } = last;
    if (!animation) return;
    animation.end = resolve;
    animation.options = options;
};

const tick = now => {
    const { all } = rAF;
    all.forEach(object => {
        trackTime(object, now);
        const progress = getProgress(object);
        const {
            element,
            keyframes,
            loop,
            optimize,
            direction,
            change,
            easing,
            duration,
            end,
            options
        } = object;

        // object is an animation
        if (direction) {
            let curve = progress;
            switch (progress) {
                case 0:
                    if (direction == "alternate") reverseKeyframes(keyframes);
                    break;
                case 1:
                    if (loop)
                        resetTime(object);
                    else {
                        all.delete(object);
                        if (optimize && element) accelerate(element);
                    }
                    if (end) end(options);
                    break;
                default:
                    curve = ease(easing, progress);
            }
            if (change && end) change(curve);
            if (element) Object.assign(element.style, createStyles(keyframes, curve));
            return;
        }

        // object is a delay
        if (progress < 1) return;
        all.delete(object);
        end(duration);
    });

    if (all.size) requestAnimationFrame(tick);
};

document.addEventListener("visibilitychange", () => {
    const now = performance.now();

    if (document.hidden) {
        const { all } = rAF;
        paused.time = now;
        paused.all = new Set(all);
        all.clear();
        return;
    }

    const { all, time } = paused;
    if (!all) return;
    const elapsed = now - time;
    requestAnimationFrame(() =>
        all.forEach(object => {
            object.startTime += elapsed;
            rAF.add(object);
        }));
});


// blur = null,
// change = null,
// Animation Engine
export interface AnimationOptions {
    animation: AnimationOptions | object,
    target: AnimationTarget,
    direction: string,
    duration: number,
    easing: string,
    loop: boolean,
    delay: number,
    speed: number
};
export const DefaultAnimationOptions: AnimationOptions = {
    easing: "out-elastic",
    direction: "normal",
    duration: 1000,
    animation: {},
    loop: false,
    target: "",
    delay: 0,
    speed: 1
};

export class Animation extends Promise<Animation> {
    /**
     * Stores the options for the current animation
     *
     * @protected
     * @type AnimationOptions
     * @memberof Animation
     */
    protected options: AnimationOptions;

    /**
     * An event emitter for an Animation
     *
     * @protected
     * @memberof Animation
     */
    protected events = new EventEmitter();

    /**
     * Creates an instance of Animation.
     * @param {object} properties
     * @memberof Animation
     */
    constructor(
        protected properties: AnimationOptions
    ) {
        super(resolve => {
            resolve();
        });
        let { animation = {}, ...rest } = properties;
        this.options = { ...DefaultAnimationOptions, ...properties, ...animation };
        // const { 

        // }
        // this.animationProperties = 
    }

}

export const animate = (targets: AnimationTarget, properties: object, options: AnimationOptions) => { };
export default animate;