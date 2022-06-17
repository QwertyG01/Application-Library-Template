import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

const examplesList = ["first", "second"];
const rollupObjects = [];

for (const example of examplesList) {
  rollupObjects.push({
    input: "./examples/" + example + "/code.ts",
    output: {
      dir: __dirname + "/dist/" + example,
      format: "es",
    },
    plugins: [
      nodeResolve(),
      typescript({
        compilerOptions: { target: "es6" },
      }),
      copy({
        targets: [
          {
            src: "examples/" + example + "/index.html",
            dest: "dist/" + example,
            transform: (contents, filename) =>
              contents.toString().replace('src="code.ts"', 'src="code.js"'),
          },
        ],
      }),
    ],
  });
}

export default rollupObjects;
