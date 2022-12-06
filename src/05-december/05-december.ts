import { getData } from "../util/prepareData";

const data = getData(5, true);

const idx = data.findIndex((x) => x === "");
let stack = data.slice(0, idx);
const instructions = data.slice(idx + 1);

console.log(stack);
// console.log(instructions);

const arr = new Array<Array<string>>();
const columns = [...stack[stack.length - 1]]
  .filter((x) => {
    if (typeof +x === "number" && +x > 0) {
      return x;
    }
  })
  .map((x) => +x);

const st = stack.map(s =>
  [...s].filter((_, i) => i % 4 === 1)
);


// console.log([...st, columns]);

const moves = instructions.map(x => x.split(' ').filter(i => !isNaN(+i)).map(nr => +nr));

moves.map(move => {
  const amount = move[0];
  const from = move[1];
  const to = move[2];

  for (let i: number = 0; i < amount; i++) {
    const p = st[from].pop();
    if (p)
      st[to].push(p);

    console.log(st); 
  }

});
console.log(moves);
