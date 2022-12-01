import * as fs from "fs";
import path from "path";

console.log("Glædelig jul");
const file = fs.readFileSync(path.resolve(__dirname, "./data.txt"), "utf-8");

const data = file.replace(/\r/g, "").split("\n");

const elfTotal = new Array<number>();
elfTotal.push(0);
let idx = 0;

data.map((value) => {
  if (value === "") {
    idx = idx + 1;
    elfTotal.push(0);
    return;
  }

  const toNr = +value;
  elfTotal[idx] = elfTotal[idx] + toNr;
});

const max = Math.max(...elfTotal);
console.log("Answer to part 1: " + max);

const i = elfTotal.findIndex((value) => value === max);
const second = [...elfTotal.slice(0, i), ...elfTotal.slice(i + 1)];
const secondMax = Math.max(...second);
const i2 = second.findIndex((value) => value === secondMax);
const third = [...second.slice(0, i2), ...second.slice(i2 + 1)];
const thirdMax = Math.max(...third);

console.log("Answer to part 2: " + (max + secondMax + thirdMax));
