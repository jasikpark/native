class t {
    constructor(t) {
        this.map = new Map(t);
    }
    getMap() {
        return this.map;
    }
    get(t) {
        return this.map.get(t);
    }
    keys() {
        return [...this.map.keys()];
    }
    values() {
        return [...this.map.values()];
    }
    set(t, e) {
        return this.map.set(t, e), this;
    }
    add(t) {
        return this.set(this.size, t), this;
    }
    get size() {
        return this.map.size;
    }
    last(t = 1) {
        let e = this.keys()[this.size - t];
        return this.get(e);
    }
    prev() {
        return this.last(2);
    }
    delete(t) {
        return this.map.delete(t), this;
    }
    clear() {
        return this.map.clear(), this;
    }
    has(t) {
        return this.map.has(t);
    }
    entries() {
        return this.map.entries();
    }
    forEach(t = (...t) => {}, e) {
        return this.map.forEach(t, e), this;
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    methodCall(t, ...e) {
        return (
            this.forEach((s) => {
                s[t](...e);
            }),
            this
        );
    }
    async asyncMethodCall(t, ...e) {
        for await (let [, s] of this.map) await s[t](...e);
        return this;
    }
}
class e {
    constructor({
        callback: t = () => {},
        scope: e = null,
        name: s = "event",
    }) {
        this.listener = { callback: t, scope: e, name: s };
    }
    getCallback() {
        return this.listener.callback;
    }
    getScope() {
        return this.listener.scope;
    }
    getEventName() {
        return this.listener.name;
    }
    toJSON() {
        return this.listener;
    }
}
class s extends t {
    constructor(t = "event") {
        super(), (this.name = t);
    }
}
class r extends t {
    constructor() {
        super();
    }
    getEvent(t) {
        let e = this.get(t);
        return e instanceof s ? e : (this.set(t, new s(t)), this.get(t));
    }
    newListener(t, s, r) {
        let i = this.getEvent(t);
        return i.add(new e({ name: t, callback: s, scope: r })), i;
    }
    on(t, e, s) {
        if (void 0 === t) return this;
        let r, i, n;
        return (
            "string" == typeof t && (t = t.split(/\s/g)),
            Object.keys(t).forEach((a) => {
                "object" != typeof t || Array.isArray(t)
                    ? ((r = t[a]), (i = e), (n = s))
                    : ((r = a), (i = t[a]), (n = e)),
                    this.newListener(r, i, n);
            }, this),
            this
        );
    }
    removeListener(t, s, r) {
        let i = this.getEvent(t);
        if (s) {
            let n,
                a = 0,
                h = i.size,
                l = new e({ name: t, callback: s, scope: r });
            for (
                ;
                a < h &&
                ((n = i.get(a)),
                console.log(n),
                n.getCallback() !== l.getCallback() ||
                    n.getScope() !== l.getScope());
                a++
            );
            i.delete(a);
        }
        return i;
    }
    off(t, e, s) {
        if (void 0 === t) return this;
        let r, i, n;
        return (
            "string" == typeof t && (t = t.split(/\s/g)),
            Object.keys(t).forEach((a) => {
                "object" != typeof t || Array.isArray(t)
                    ? ((r = t[a]), (i = e), (n = s))
                    : ((r = a), (i = t[a]), (n = e)),
                    i ? this.removeListener(r, i, n) : this.delete(r);
            }, this),
            this
        );
    }
    once(t, e, s) {
        if (void 0 === t) return this;
        "string" == typeof t && (t = t.split(/\s/g));
        let r = (...i) => {
            this.off(t, r, s), e.apply(s, i);
        };
        return this.on(t, r, s), this;
    }
    emit(t, ...e) {
        return (
            void 0 === t ||
                ("string" == typeof t && (t = t.split(/\s/g)),
                t.forEach((t) => {
                    let s = this.getEvent(t);
                    const r = new CustomEvent(t, { detail: e });
                    window.dispatchEvent(r),
                        s.forEach((t) => {
                            let { callback: s, scope: r } = t.toJSON();
                            s.apply(r, e);
                        });
                }, this)),
            this
        );
    }
}
export { s as Event, r as EventEmitter, e as Listener };
//# sourceMappingURL=api.modern.js.map
