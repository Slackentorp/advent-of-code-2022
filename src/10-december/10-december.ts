import { getData } from "../util/prepareData";

const data = getData(10, true).map(x => {
    const res = x.split(' ');
    return { action: res[0], steps: res[1] ? +res[1] : 0 }
});



console.log(data); 