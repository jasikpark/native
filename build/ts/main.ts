import { PJAX, App, TransitionManager, Router, HistoryManager, PageManager, animate } from "@okikio/native";

import { Splashscreen } from "./services/Splashscreen";
import { IntroAnimation } from "./services/IntroAnimation";

import { Fade } from "./transitions/Fade";
import { BigTransition } from "./transitions/BigTransition";
import { Slide, SlideLeft, SlideRight } from "./transitions/Slide";

let splashscreen: Splashscreen;
let router: Router, pjax: PJAX;
const app: App = new App();
app
    .add(new IntroAnimation())
    .add(splashscreen = new Splashscreen())
    .set("HistoryManager", new HistoryManager())
    .set("PageManager", new PageManager())
    .set("TransitionManager", new TransitionManager([
        ["default", Fade],
        ["BigTransition", BigTransition],
        ["Slide", Slide],
        ["SlideLeft", SlideLeft],
        ["SlideRight", SlideRight]
    ]))
    .set("router", router = new Router())
    .add(pjax = new PJAX());

try {
    router = app.get("router") as Router;

    // This isn't nessceary, but it changes the nav link in focus depending on the page
    let navLink = document.querySelectorAll(".navbar .nav-link");
    for (let item of navLink) {
        let navItem = (item as HTMLAnchorElement);
        router.add({
            path: navItem.getAttribute("data-path") || navItem.pathname,
            method() {
                let isActive = navItem.classList.contains("active");
                if (!isActive) navItem.classList.add("active");
                for (let nav of navLink) {
                    if (nav !== navItem)
                        nav.classList.remove("active");
                }
            }
        });
    }

    router.add({
        path: {
            from: /(.*)/g,
            to: /\/index.html/,
        },
        method() {
            let anim = animate({
                target: ".div",
                keyframes(index, total) {
                    return [
                        { transform: "translateX(0px)", opacity: 0 },
                        { transform: "translateX(300px)", opacity: ((index + 1) / total) }
                    ]
                },

                /* You can uncomment this out, and comment the keyframes options above and still get the same animation */
                // transform: ["translateX(0px)", "translateX(300px)"],
                // opacity(index, total, element) {
                //     console.log(element);
                //     return [0, ((index + 1) / total)];
                // },

                easing: "out-cubic",
                duration(index: number) {
                    return (index + 1) * 500;
                },
                onfinish(element, index, total) {
                    element.style.opacity = `${((index + 1) / total)}`;
                    element.style.transform = "translateX(300px)";
                },
                loop: 5,
                speed: 1,
                direction: "alternate",
                delay(i: number) {
                    return i * 200;
                },
                autoplay: true
            });

            anim.then(() => {
                let el: HTMLElement = document.querySelector(".info");
                let info = "Done.";
                el.textContent = info;
                el.style.color = "red";

                console.log(info);
            });

            let progressSpan = document.querySelector(".progress");
            anim.on("change", () => {
                progressSpan.textContent = `${Math.round(anim.getProgress() * 100)}%`;
            });

            let container = document.querySelector(".animation-container");
            container.addEventListener("click", () => {
                let state = anim.getPlayState();
                if (state === "running") anim.pause();
                else if (state === "finished") anim.reset();
                else anim.play();
                console.log(state);
            });
        }
    });

    app.boot();
} catch (err) {
    splashscreen.show();
    console.warn("[App] boot failed,", err);
}
