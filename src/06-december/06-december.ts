import { getData } from "../util/prepareData";

const data = getData(6, true);

[...data].map((x, i) => {
  if (i >= [...data].length - 4) return;

  console.log(x);
});
