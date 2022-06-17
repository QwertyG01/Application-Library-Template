import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/index.ts",
  output: {
    dir: __dirname + "/dist",
    format: "es",
  },
  plugins: [
    typescript({
      compilerOptions: { target: "es6" },
      outDir: __dirname + "/dist",
      declarationDir: __dirname + "/dist",
    }),
  ],
};
