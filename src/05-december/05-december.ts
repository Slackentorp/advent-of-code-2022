import { getData } from "../util/prepareData";

const data = getData(5, true);

const idx = data.findIndex((x) => x === "");
let stack = data.slice(0, idx);
const instructions = data.slice(idx + 1);

console.log(stack);
console.log(instructions);

const arr = new Array<Array<string>>();
// const cols = new Array<number>();
const columns = [...stack[stack.length - 1]]
  .filter((x) => {
    if (typeof +x === "number" && +x > 0) {
      return x;
    }
  })
  .map((x) => +x);

const firstRow = [...stack[0]].slice(0, 4);
console.log(firstRow);
// ((r, i) => {
//     if ()
//   console.log(r);
// });

// stack.map((s, i) => {
//   if (i >= stack.length - 1) return;

//   const row = new Array<string>(columns.length);

//   [...s].map((a, j) => {
//     row[columns.length * j - 1]
//   })
//   console.log([...s].length);
//   console.log(columns.length * 4 - 1);
// });

console.log(columns);
