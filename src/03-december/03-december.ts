import { getData } from "../util/prepareData";

const data = getData(3);

const assignment1 = data
  .map(
    (r) =>
      [...r.slice(0, r.length / 2)].filter((x) =>
        [...r.slice(r.length / 2)].find((y) => y === x)
      )[0]
  )
  .map((x) => toNr(x));

console.log(assignment1.reduce((a, b) => a + b));

const groups = new Array<Array<string>>();
data.map((r, index) => {
  const groupNr = Math.floor(index / 3);
  if (groups.length < groupNr + 1) groups.push([]);

  groups[groupNr].push(r);
});

const assignment2 = groups
  .map((g) => {
    return [...g[0]]
      .filter((x) => [...g[1]].find((y) => y === x))
      .filter((i) => [...g[2]].find((z) => z === i))[0];
  })
  .map((x) => toNr(x));

console.log(assignment2.reduce((a, b) => a + b));

function toNr(letter: string) {
  const nr = letter.toLowerCase().charCodeAt(0) - 96;
  if (letter.charAt(0) === letter.charAt(0).toUpperCase()) {
    return nr + 26;
  }
  return nr;
}
