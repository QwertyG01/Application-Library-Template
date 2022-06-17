class Mappa {
    constructor() {
        console.log("ciao");
    }
}

var vabene = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Mappa: Mappa
});

console.log("Ciao ");
const hello = {
    ok: "come va",
};
console.log(hello.ok);
vabene.Mappa;
// const files = fs.readdirSync("../../examples");
// console.log(files);
