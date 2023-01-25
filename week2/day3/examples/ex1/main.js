const ages = [12, 45, 78, 96, 32, 25, 58];
const users = [];

console.log(users.length, ages.length)

for (let i = 0; i < ages.length; i++) {

    users.push(`I'm user #${i + 1} and I am ${ages[i]} years old`);
}

// console.log(users);
// console.log(users.length, ages.length);

const someone = {
    fName: 'Bob',
    lName: 'Sponge',
    age: 45,
    race: 'Sponge'
};

someone.id = 789;
someone['code'] = 'xyz';
console.log(someone);

const allKeys = [];

for (const key in someone) {
    allKeys.push({
        key,
        value: someone[key]
    });
    if (key === 'lName') {
        break;
    }
}

console.log(allKeys);

console.log(users);
allKeys.length = 0;
for (const user of users) {

    if (user.indexOf('96 years') >= 0) {
        break;
    }
    allKeys.push(user);
}
console.log(allKeys);

// allKeys.length = 0;
// for (let i = 0; i < users.length; i++) {

//     const value = users[i];

//     allKeys.push(value);
// }
// console.log(users);
// console.log(allKeys);
// console.log(allKeys === users);


// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     console.log(user)
// }

// users.forEach(function (user) {
//     console.log(user)
// })


for (let i = 0; i <= 15; i++) {

    if (i > 5) {
        break;
    }

    let logvalue = `${i} is`; // `${i} is ` + (i % 2 === 0 ? 'even' : 'odd');

    if (i % 2 === 0) {

        logvalue += ' even';
    }
    else {
        logvalue += ' odd';
    }

    console.log(logvalue)
}

for (let i = 0; i <= 15; i++) {

    if (i === 5) {
        continue;
    }

    let logvalue = `${i} is`; // `${i} is ` + (i % 2 === 0 ? 'even' : 'odd');

    if (i % 2 === 0) {

        logvalue += ' even';
    }
    else {
        logvalue += ' odd';
    }

    console.log(logvalue)
}



// const when = new Date();
// when.setSeconds(when.getSeconds() + 10)

// let now = new Date();
// while (now < when) {
//     console.log(new Date());
//     now = new Date();
// }


let names = ["john", "sarah", 23, "Rudolf", 34]
console.log(names)

for (let value of names) {

    if (typeof (value) !== 'string') {

        continue;
    }

    const firstChar = value.charAt(0);

    if (firstChar !== firstChar.toUpperCase()) {

        value = firstChar.toUpperCase() + value.substring(1);

        console.log(value);
    }
}

for (let i = 0; i < names.length; i++) {
    const value = names[i];
    
    if (typeof (value) !== 'string') {

        break;
    }

    console.log(value);
}