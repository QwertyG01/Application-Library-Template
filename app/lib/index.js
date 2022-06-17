const ok = { ok: "Perfetto" };

var test = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ok: ok
});

class Mappa {
    constructor() {
        console.log("ciao");
    }
}

var vabene = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Mappa: Mappa
});

export { test, vabene };
