import { getData } from "../util/prepareData";

const data = getData(6).shift()!;



console.log(data);

const chars = [...data];
// chars.
for(let i: number = 0; i < chars.length - 4 ; i++) {

  let str = "";
  for (let idx: number = 0; idx < 14; idx++) {
    str += chars[i + idx];
  }

  console.log("--------" + i + "--------"); 
  console.log(chars[i] + ": " + str + " " + checkUnique(str));

  if (checkUnique(str)) {
    console.log("RESULT: " + (i + 14)); 
    break; 
  }
}

function checkUnique(s: string): boolean {
  let arr = "";
  let unique: boolean = true; 

  [...s].forEach(c => {
    if (arr.includes(c)) {
      unique = false;
    } else {
      arr += c;
    }
  });

  return unique;
}

