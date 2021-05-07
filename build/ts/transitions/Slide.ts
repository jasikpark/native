import { ITransition, ITransitionData, animate } from "@okikio/native";

//== Transitions
export const Slide: ITransition = {
    name: "slide",
    duration: 500,
    direction: "right",
    scrollable: true,

    init(data: ITransition) {
        let trigger = (data.trigger as HTMLElement);
        if (trigger instanceof Node && trigger.hasAttribute("data-direction")) {
            this.direction = trigger.getAttribute("data-direction");
        } else {
            this.direction = "right";
        }
    },

    out({ from }: ITransitionData) {
        let { duration, direction } = this;
        let fromWrapper = from.wrapper;

        let anim = animate({
            target: fromWrapper,
            keyframes: [
                { transform: "translateX(0%)", opacity: 1 },
                { transform: `translateX(${direction === "left" ? "-" : ""}25%)`, opacity: 0 },
            ],
            duration,
            easing: "in-quint"
        });

        return anim.on("begin", () => {
            document.body.classList.add("no-overflow-x");
        }).then(function () {
            this.stop();
        });
    },

    in({ to, scroll }: ITransitionData) {
        let { duration } = this;
        let toWrapper = to.wrapper;

        window.scroll(scroll.x, scroll.y);
        let anim = animate({
            target: toWrapper,
            keyframes: [
                { transform: `translateX(${this.direction === "right" ? "-" : ""}25%)`, opacity: 0 },
                { transform: "translateX(0%)", opacity: 1 },
            ],
            duration,
            easing: "out-quint"
        })

        return anim.then(function () {
            document.body.classList.remove("no-overflow-x");
            this.stop();
        });
    }
};

export const SlideLeft: ITransition = {
    ...Slide,

    name: "slide-left",
    direction: "left",
    init(data: ITransition) { }
};

export const SlideRight: ITransition = {
    ...Slide,

    name: "slide-right",
    direction: "right",
    init(data: ITransition) { }
};
