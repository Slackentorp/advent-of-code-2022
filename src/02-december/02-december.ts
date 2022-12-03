import * as fs from "fs";
import path from "path";

const file = fs.readFileSync(path.resolve(__dirname, "./data.txt"), "utf-8");

const data = file.replace(/\r/g, "").split("\n");

const rounds = data.map((s) => {
  return s.split(" ").map((s) => {
    return assignment1Mapper(s);
  });
});

let res = 0;
rounds.map((r) => {
  res += toPoints(r[1]) + toWin(r);
});

console.log("Assignment 1:");
console.log(res);

const rounds2 = data.map((s) => {
  const r = s.split(" ");
  const input = assignment1Mapper(r[0]);
  const result = assignment2Mapper(input, r[1]);
  return [input, result];
});

let res2 = 0;
rounds2.map((r) => {
  const score = toPoints(r[1]) + toWin(r);
  res2 += score;
});

console.log("Assignment 2:");
console.log(res2);

function toWin(round: string[]): number {
  return round[0] === round[1] ? 3 : firstLost(round) ? 6 : 0;
}

function toPoints(s: string): number {
  switch (s) {
    case "Rock":
      return 1;
    case "Paper":
      return 2;
    case "Scissor":
      return 3;
    default:
      return 0;
  }
}

function firstLost(round: string[]): boolean {
  switch (round[0]) {
    case "Rock":
      return round[1] === "Paper";
    case "Paper":
      return round[1] === "Scissor";
    case "Scissor":
      return round[1] === "Rock";
    default:
      return true;
  }
}

function assignment1Mapper(val: string): string {
  switch (val) {
    case "A":
    case "X":
      return "Rock";
    case "B":
    case "Y":
      return "Paper";
    case "C":
    case "Z":
      return "Scissor";
    default:
      return val;
  }
}

function assignment2Mapper(input: string, val: string): string {
  switch (val) {
    case "X":
      if (input === "Rock") return "Scissor";
      if (input === "Paper") return "Rock";
      if (input === "Scissor") return "Paper";
    case "Y":
      return input;
    case "Z":
      if (input === "Rock") return "Paper";
      if (input === "Paper") return "Scissor";
      if (input === "Scissor") return "Rock";
    default:
      return "";
  }
}
