import { Manager, ManagerItem, AdvancedManager } from "./manager";
import { equal, newURL } from "./url";
import { getConfig } from "./config";
import { Service } from "./service";

/**
 * Parses strings to DOM
 */
export const PARSER: DOMParser = new DOMParser();

/**
 * A page represents the DOM elements that create each page
 *
 * @export
 * @class Page
 */
export class Page extends ManagerItem {
    /**
     * Holds the DOM of the current page
     *
     * @public
     * @type Document
     * @memberof Page
     */
    public dom: Document;

    /**
     * Holds the wrapper element to be swapped out of each Page
     *
     * @public
     * @type HTMLElement
     * @memberof Page
     */
    public wrapper: HTMLElement;

    /**
     * Holds the title of each page
     *
     * @public
     * @type string
     * @memberof Page
     */
    public title: string;

    /**
     * Holds the head element of each page
     *
     * @public
     * @type Element
     * @memberof Page
     */
    public head: Element;

    /**
     * Holds the body element of each page
     *
     * @public
     * @type Element
     * @memberof Page
     */
    public body: Element;

    /**
     * The URL of the current page
     *
     * @public
     * @type URL
     * @memberof Page
     */
    public url: URL;
    public data: string;
    public wrapperAttr: string;

    /**
     * Creates an instance of Page, it also creates a new page from response text, or a Document Object
     *
     * @param {URL} [url = newURL()]
     * @param {(string | Document)} [dom=document]
     * @memberof Page
     */
    constructor(url: URL = newURL(), dom: string | Document = document) {
        super();
        this.url = url;

        if (typeof dom === "string") {
            this.data = dom;
        } else this.dom = dom || document;
    }

    public async build() {
        if (!(this.dom instanceof Node)) {
            this.dom = PARSER.parseFromString(this.data, "text/html");
        }

        if (!(this.body instanceof Node)) {
            let { title, head, body } = this.dom;
            this.title = title;
            this.head = head;
            this.body = body;
            this.wrapper = this.body.querySelector(this.wrapperAttr);
        }
    }

    /**
     * Runs once the the manager and config have been registered
     *
     * @returns void
     * @memberof Page
     */
    public install(): void {
        this.wrapperAttr = getConfig(this.config, "wrapperAttr");
    }

    public uninstall() {
        this.url = undefined;
        this.title = undefined;
        this.head = undefined;
        this.body = undefined;
        this.dom = undefined;
        this.wrapper = undefined;
        this.data = undefined;
        this.wrapperAttr = undefined;
    }
}


/**
 * Controls which page to be load
 *
 * @export
 * @class PageManager
 * @extends {Service}
 */
export class PageManager extends Service {
    /**
     * Stores all URLs that are currently loading
     *
     * @public
     * @type Manager<string, Promise<string>>
     * @memberof PageManager
     */
    public loading: Manager<string, Promise<string>> = new Manager();
    public maxPages = 5;
    
    pages: AdvancedManager<string, Page>;

    install() {
        this.pages = new AdvancedManager(this.app);

        let URLString = newURL().pathname;
        this.set(URLString, new Page());
        URLString = undefined;
    }

    get(key) { return this.pages.get(key); }
    add(value) { this.pages.add(value); return this; }
    set(key, value) { this.pages.set(key, value); return this; }
    remove(key) { this.pages.remove(key); return this; }
    has(key) { return this.pages.has(key); }
    clear() { this.pages.clear(); return this; }
    get size() { return this.pages.size; }
    keys() { return this.pages.keys(); }

    /**
     * Load from cache or by requesting URL via a fetch request, avoid requesting for the same thing twice by storing the fetch request in "this.loading"
     *
     * @param {(URL | string)} [_url=newURL()]
     * @returns Promise<Page>
     * @memberof PageManager
     */
    public async load(_url: URL | string = newURL()): Promise<Page> {
        let url: URL = newURL(_url);
        let urlString: string = url.pathname;
        let page: Page, request: Promise<string>;
        if (this.has(urlString)) {
            page = this.get(urlString);
            return Promise.resolve(page);
        }

        if (!this.loading.has(urlString)) {
            request = this.request(urlString);
            this.loading.set(urlString, request);
        } else request = this.loading.get(urlString);

        let response = await request;
        this.loading.remove(urlString);

        page = new Page(url, response);
        this.set(urlString, page);

        if (this.size > this.maxPages) {
            let currentUrl = newURL();
            let keys = this.keys();
            let first = equal(currentUrl, keys[0]) ? keys[1] : keys[0];
            let page = this.get(first);
            page.unregister();
            page = undefined;
            keys = undefined;
            currentUrl = undefined;
            first = undefined;
        }
        return page;
    }

    /**
     * Starts a fetch request
     *
     * @param {string} url
     * @returns Promise<string>
     * @memberof PageManager
     */
    public async request(url: string): Promise<string> {
        const headers = new Headers(getConfig(this.config, "headers"));
        const timeout = window.setTimeout(() => {
            window.clearTimeout(timeout);
            throw "Request Timed Out!";
        }, getConfig(this.config, "timeout"));

        try {
            let response = await fetch(url, {
                mode: 'same-origin',
                method: "GET",
                headers,
                cache: "default",
                credentials: "same-origin",
            });

            window.clearTimeout(timeout);
            if (response.status >= 200 && response.status < 300) {
                return await response.text();
            }

            const err = new Error(response.statusText || "" + response.status);
            throw err;
        } catch (err) {
            window.clearTimeout(timeout);
            throw err;
        }
    }
}
