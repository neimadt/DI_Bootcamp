
function getRandomInteger(min, max) {

    let value = Math.random() * (max - min + 1) + min;

    value = Math.floor(value);

    return value;
}

const randValue = getRandomInteger(0, 10);

console.log(randValue);