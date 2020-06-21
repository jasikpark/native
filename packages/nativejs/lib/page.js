import { Manager, ManagerItem, AdvancedManager } from "./manager.js";
import { _URL, URLString } from "./url.js";
/**
 * Parses strings to DOM
 */
export const PARSER = new DOMParser();
/**
 * A page represents the DOM elements that create each page
 *
 * @export
 * @class Page
 */
export class Page extends ManagerItem {
    /**
     * Creates an instance of Page, it also creates a new page from response text, or a Document Object
     *
     * @param {_URL} [url=new _URL()]
     * @param {(string | Document)} [dom=document]
     * @memberof Page
     */
    constructor(url = new _URL(), dom = document) {
        super();
        this.url = url;
        if (typeof dom === "string") {
            this.dom = PARSER.parseFromString(dom, "text/html");
        }
        else
            this.dom = dom || document;
        const { title, head, body } = this.dom;
        this.title = title;
        this.head = head;
        this.body = body;
    }
    /**
     * Runs once the the manager and config have been registered
     *
     * @returns void
     * @memberof Page
     */
    install() {
        this.wrapper = this.body.querySelector(this.getConfig("wrapperAttr"));
    }
    /**
     * Returns the current page's URL
     *
     * @returns _URL
     * @memberof Page
     */
    getURL() {
        return this.url;
    }
    /**
     * Returns the current page's URL
     *
     * @returns string
     * @memberof Page
     */
    getPathname() {
        return this.url.pathname;
    }
    /**
     * The page title
     *
     * @returns string
     * @memberof Page
     */
    getTitle() {
        return this.title;
    }
    /**
     * The page's head element
     *
     * @returns Element
     * @memberof Page
     */
    getHead() {
        return this.head;
    }
    /**
     * The page's body element
     *
     * @returns Element
     * @memberof Page
     */
    getBody() {
        return this.body;
    }
    /**
     * The page's wrapper element
     *
     * @returns HTMLElement
     * @memberof Page
     */
    getWrapper() {
        return this.wrapper;
    }
    /**
     * The page's document
     *
     * @returns Document
     * @memberof Page
     */
    getDOM() {
        return this.dom;
    }
}
/**
 * Controls which page to be load
 *
 * @export
 * @class PageManager
 * @extends {AdvancedManager<string, Page>}
 */
export class PageManager extends AdvancedManager {
    /**
     * Creates an instance of the PageManager
     *
     * @param {App} app
     * @memberof PageManager
     */
    constructor(app) {
        super(app);
        /**
         * Stores all URLs that are currently loading
         *
         * @protected
         * @type Manager<string, Promise<string>>
         * @memberof PageManager
         */
        this.loading = new Manager();
        this.set(URLString, new Page());
    }
    /**
     * Returns the loading Manager
     *
     * @returns Manager<string, Promise<string>>
     * @memberof PageManager
     */
    getLoading() {
        return this.loading;
    }
    /**
     * Load from cache or by requesting URL via a fetch request, avoid requesting for the same thing twice by storing the fetch request in "this.loading"
     *
     * @param {(_URL | string)} [_url=new _URL()]
     * @returns Promise<Page>
     * @memberof PageManager
     */
    async load(_url = new _URL()) {
        let url = _url instanceof URL ? _url : new _URL(_url);
        let urlString = url.getPathname();
        let page, request;
        if (this.has(urlString)) {
            page = this.get(urlString);
            return Promise.resolve(page);
        }
        if (!this.loading.has(urlString)) {
            request = this.request(urlString);
            this.loading.set(urlString, request);
        }
        else
            request = this.loading.get(urlString);
        let response = await request;
        this.loading.delete(urlString);
        page = new Page(url, response);
        this.set(urlString, page);
        return page;
    }
    /**
     * Starts a fetch request
     *
     * @param {string} url
     * @returns Promise<string>
     * @memberof PageManager
     */
    async request(url) {
        const headers = new Headers(this.getConfig("headers"));
        const timeout = window.setTimeout(() => {
            window.clearTimeout(timeout);
            throw "Request Timed Out!";
        }, this.getConfig("timeout"));
        try {
            let response = await fetch(url, {
                mode: 'same-origin',
                method: "GET",
                headers: headers,
                cache: "default",
                credentials: "same-origin",
            });
            window.clearTimeout(timeout);
            if (response.status >= 200 && response.status < 300) {
                return await response.text();
            }
            const err = new Error(response.statusText || "" + response.status);
            throw err;
        }
        catch (err) {
            window.clearTimeout(timeout);
            throw err;
        }
    }
}
//# sourceMappingURL=ts/page.js.map