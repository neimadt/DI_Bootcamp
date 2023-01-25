// let a = 10;
// let b = '10';
// let c = 100;

// let aEqb = a !== b;

// console.log(aEqb);

// let orValue = a === b || c > a;
// console.log(orValue);

// let andValue = a === b && c > a;
// console.log(andValue);

// let notAndValue = !(a === b && c > a);
// console.log(notAndValue);

// let inverse3eq = !(a === b);
// console.log(inverse3eq);

let x = 7;
console.log(x);

// x %= 10;
x = x + 1;

console.log(x);

x = 'Im happy';
console.log(x);

const numberArray = [45, 6, 34, 89, 323, 1];
numberArray.sort();

const sorteds = numberArray.reduce((sorted, value, i) => {

    sorted[value] = value;

    if (i === (numberArray.length - 1)) {

        return sorted.filter(v => v !== undefined);
    }

    return sorted;
}, []);

console.log(sorteds);
console.log(numberArray);

console.log();
