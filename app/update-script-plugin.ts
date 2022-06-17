// // rollup-plugin-my-example.js

// import { InputOptions } from "rollup";

// export default function updateScript() {
//   let example: string;
//   return {
//     name: "update-script", // this name will show up in warnings and errors
//     buildStart(options: InputOptions) {
//       example = options.input as string;
//     },
//     buildEnd(error?: Error) {
//       if (error) return;
//       fetch("dist/"+example+"/")
//         .then((response) => response.text())
//         .then((data) => {
//           // Do something with your data
//           console.log(data);
//         });
//     },
//   };
// }
