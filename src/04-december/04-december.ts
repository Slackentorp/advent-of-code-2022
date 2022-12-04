import { getData } from '../util/prepareData'
const data = getData(4);


const d = data.map(x => {
    const n = x.split(',');
    const m = n.map(y => y.split('-').map(a => +a));
    return m;
})


let hits = 0;
let allHits = 0;
d.map(i => {
    if (fullyBetween(i)) hits++;
    if (allBetween(i)) allHits++;
});

console.log(hits);
console.log(allHits);

function fullyBetween(input: number[][]) {
    const x1 = input[0][0];
    const y1 = input[0][1];
    const x2 = input[1][0];
    const y2 = input[1][1];

    return x1 <= x2 && y1 >= x2 || x2 <= x1 && y2 >= y1;
}

function allBetween(input: number[][]) {
    const x1 = input[0][0];
    const y1 = input[0][1];
    const x2 = input[1][0];
    const y2 = input[1][1];

    return ((x2 <= y1 && x2 >= x1) || (x1 <= y2 && x1 >= x2))
}