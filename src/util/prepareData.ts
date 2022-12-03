import * as fs from "fs";
import path from "path";

export function getData(day: number, isTest: boolean = false) {
  const dayString = day.toString().padStart(2, "0");
  const file = fs.readFileSync(
    path.resolve(
      __dirname,
      `../${dayString}-december/${isTest ? "test" : "data"}.txt`
    ),
    "utf-8"
  );
  const data = file.replace(/\r/g, "").split("\n");

  return data;
}
