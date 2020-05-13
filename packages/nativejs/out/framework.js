import { App, getConfig, Service, _URL } from "./api.js";
const app = new App();
class PJAX extends Service {
    constructor() {
        super(...arguments);
        this.ignoreURLs = [];
    }
    async boot() {
        let page = await this.PageManager.load();
        console.log(page);
    }
    initEvents() {
        let getHref = (el) => {
            if (el.tagName && el.tagName.toLowerCase() === 'a' && typeof el.href === 'string') {
                return el.href;
            }
            return null;
        };
        let getTransitionName = (el) => {
            if (!el) {
                return null;
            }
            if (el.getAttribute && typeof el.getAttribute('data-transition') === 'string') {
                return el.getAttribute('data-transition');
            }
            return null;
        };
        // Based on barbajs
        let preventLink = (el, event, href) => {
            let location = new _URL();
            let url = new _URL(href);
            let eventMutate = event.which > 1 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey;
            let newTab = el.hasAttribute('target') && el.target === '_blank';
            let crossOrigin = (el.protocol !== location.protocol) ||
                (el.hostname !== location.hostname);
            let download = typeof el.getAttribute('download') === 'string';
            let preventSelf = el.hasAttribute(getConfig("preventSelf", false));
            let preventAll = Boolean(el.closest(getConfig("preventAll")));
            let prevent = preventSelf && preventAll;
            let sameURL = location.compare(url);
            return eventMutate && newTab && crossOrigin && download && prevent && sameURL;
        };
        let getLink = (e) => {
            let el = e.target;
            while (el && !getHref(el)) {
                el = el.parentNode;
            }
            // Check prevent
            if (!el || preventLink(el, e, getHref(el))) {
                return;
            }
            return el;
        };
        let ignoredURL = ({ pathname }) => {
            return this.ignoreURLs && this.ignoreURLs.some(regex => regex.exec(pathname) !== null);
        };
        let onHover = async (event) => {
            // event.preventDefault();
            let el = getLink(event);
            if (!el)
                return;
            const url = new _URL(getHref(el));
            if (ignoredURL(url))
                return;
            // Already in cache
            if (this.PageManager.has(url.clean()))
                return;
            try {
                let page = await this.PageManager.load(url);
                console.log(page.getURL().clean());
            }
            catch (err) {
                console.warn(err);
            }
        };
        let onClick = async (event) => {
            event.preventDefault();
            let el = getLink(event);
            if (!el) {
                return;
            }
            // if (this.transitions.isRunning && this.preventRunning) {
            //     e.preventDefault();
            //     e.stopPropagation();
            //     return;
            // }
            // this.go(this.dom.getHref(el), el, e);
            // if (this.preventCheck(event, el)) {
            //   event.preventDefault();
            //   this.linkHash = el.hash.split('#')[1];
            //   const href = this.getHref(el);
            //   const transitionName = this.getTransitionName(el);
            //   const cursorPosition = {
            //     x: event.clientX,
            //     y: event.clientY
            //   };
            //   this.goTo(href, transitionName, el, cursorPosition);
            // }
            try {
                let page = await this.PageManager.load(getHref(el));
                console.log(page.getURL().clean());
            }
            catch (err) {
                console.warn(err);
            }
        };
        let onStateChange = (e) => {
            // this.go(this.url.getHref(), 'popstate', e);
        };
        /* istanbul ignore else */
        // if (this.prefetchIgnore !== true) {
        document.addEventListener('mouseover', onHover.bind(this));
        document.addEventListener('touchstart', onHover.bind(this));
        // }
        document.addEventListener('click', onClick.bind(this));
        // window.addEventListener('popstate', onStateChange.bind(this));
    }
}
app.add("service", PJAX);
(async () => {
    try {
        await app.boot();
    }
    catch (err) {
        console.warn("App boot failed");
    }
    try {
        let page = await app.load("page", "./other.html");
        console.log(page.getURL().clean());
        page = await app.load("page", "./about.html");
        console.log(page.getURL().clean());
    }
    catch (err) {
        console.warn("Page loading failed");
    }
})();
//# sourceMappingURL=framework.js.map