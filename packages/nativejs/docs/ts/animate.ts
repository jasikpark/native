import { EventEmitter } from "./api.js";

// Based on animate-plus.js
// Get Targets
export type AnimationTarget = string | Node | NodeList;
export const getElements = (selector: string | Node): Node[] => {
    return typeof selector === "string" ? [...document.querySelectorAll(selector as string)] : [selector];
};

export const getTargets = (targets: AnimationTarget): Node[] => {
    if (typeof targets == "string" || targets instanceof Node) return getElements(targets);
    if (targets instanceof NodeList) return [...targets];
    return null;
};

// Get Value
export const getValue = (value: any, input: any) =>
    typeof value == "function" ? value(input) : value;

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

// Convert all hex color to rgb
export const parseColor = (color: string): string => {
    if (/^rgb/.test(color)) return color;
    let hex = color.replace("#", "");
    let [r, g, b] = color.match(/\w/g).map(x => parseInt(hex.length == 3 ? x + x : x, 16));
    return `rgb(${r},${g},${b})`;
};

// blur = null,
// change = null,
// Animation Engine
export interface AnimationOptions {
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
    loop: false,
    delay: 0,
    speed: 1
};

export class Animation extends EventEmitter {
    /**
     * Stores the options for the current animation
     *
     * @protected
     * @type {AnimationOptions}
     * @memberof Animation
     */
    protected options: AnimationOptions;

    /**
     * Creates an instance of Animation.
     * @param {AnimationTarget} targets
     * @param {object} properties
     * @param {AnimationOptions} options
     * @memberof Animation
     */
    constructor(
        protected targets: AnimationTarget,
        protected properties: object,
        options: AnimationOptions
    ) {
        super();
        this.options = { ...DefaultAnimationOptions, ...options };
    }

}

export const animate = (targets: AnimationTarget, properties: object, options: AnimationOptions) => { };
export default animate;