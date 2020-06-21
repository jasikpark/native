/**
 * Adds new methods to the native URL Object; it seemed cleaner than using a custom method or editing the prototype.
 *
 * This doesn't extend the **Class** object because it's meant to be a small extension of the native URL class.
 *
 * @export
 * @class _URL
 * @extends {URL}
 */
export class _URL extends URL {
    // Read up on the native URL class [devdocs.io/dom/url]
    /**
     * Creates an instance of _URL.
     *
     * @param {(string | _URL | URL | Location)} [url=window.location.pathname]
     * @memberof _URL
     */
    constructor(url = window.location.href) {
        super(url instanceof URL ? url.href : url, window.location.origin);
    }
    /**
     * Returns the pathname with the hash
     *
     * @returns string
     * @memberof _URL
     */
    getFullPath() {
        return `${this.pathname}${this.hash}`;
    }
    /**
     * Returns the actual hash without the hashtag
     *
     * @returns string
     * @memberof _URL
     */
    getHash() {
        return this.hash.slice(1);
    }
    /**
     * Removes the hash from the full URL for a clean URL string
     *
     * @returns string
     * @memberof _URL
     */
    clean() {
        return this.toString().replace(/(\/#.*|\/|#.*)$/, '');
    }
    /**
     * Returns the pathname of a URL
     *
     * @returns string
     * @memberof _URL
     */
    getPathname() {
        return this.pathname;
    }
    /**
     * Compares this **_URL** to another **_URL**
     *
     * @param {_URL} url
     * @returns boolean
     * @memberof _URL
     */
    equalTo(url) {
        return this.clean() == url.clean();
    }
    /**
     * Compares the pathname of two URLs to each other
     *
     * @static
     * @param {_URL} a
     * @param {_URL} b
     * @returns boolean
     * @memberof _URL
     */
    static equal(a, b) {
        let urlA = a instanceof _URL ? a : new _URL(a);
        let urlB = b instanceof _URL ? b : new _URL(b);
        return urlA.equalTo(urlB);
    }
}
/**
 * This is the default starting URL, to avoid needless instances of the same class that produce the same value, I defined the default value
 */
export const newURL = new _URL();
export const URLString = newURL.getPathname();
//# sourceMappingURL=ts/url.js.map
