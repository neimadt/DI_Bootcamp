
const array = [5, 8, 9, 6];

// const total = array.reduce(function (sum, n) {

//     sum += n;

//     return sum;
// }, 0);

let total = 0;
for (let i = 0; i < array.length; i++) {

    const n = array[i];

    total += n;
}

console.log(total);