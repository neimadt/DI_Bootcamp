// const userName = prompt('Hi what\'s your name?');

// if (userName) {

//     const formulateDumAISentence = (name) => {

//         const sentence = `Hi ${name}, I'm Dumb AI and I am very dumb...`;

//         return sentence;
//     };

//     let sentence = formulateDumAISentence(userName);
//     alert(sentence);

//     const friendName = prompt('Who\'s your friend?');

//     if (friendName) {

//         sentence = formulateDumAISentence(friendName);
//         alert(sentence);
//     }
// }

// const hello_const = 'Hello';


// const helloWorld = () => {

//     return hello_const + ' World !!!';
// };


// console.log(helloWorld);
// console.log(helloWorld());


// const EMPTY_DEFAULT_VALUE = '<empty>';

// const getDefaultValue = () => {

//     return EMPTY_DEFAULT_VALUE;
// };

// const helloWorldAndMore = (more = getDefaultValue(), andMore = getDefaultValue()) => {

//     return `${hello_const} ${more} ${andMore} World !!!`;
// };

// console.log(helloWorldAndMore('Amazing'))

// const familyAges = (myAge) => {

//     const momsAge = myAge * 2;
//     const dadsAge = momsAge * 1.2;

//     // console.log(`Dad's age: ${dadsAge}\nMom's age: ${momsAge}\nMy age: ${myAge}`);

//     return `Dad's age: ${dadsAge}\nMom's age: ${momsAge}\nMy age: ${myAge}`;
// };

// const myFamily = familyAges(41);
// console.log(myFamily);

// const concatSentence = (userName) => {

//     return "Hey " + userName;;
// };

// const userInfo = (userName, userAge) => {

//     if ((userAge || 0) <= 0) {

//         return;
//     }

//     if (userName === "Sarah") {

//         let result = concatSentence(userName);

//         return result;
//     }

//     return "You are not the right person";
// };

// let girlInfo = userInfo("Sarah");
// console.log(girlInfo);


// function eating() {
//     console.log(`I'm ${this.firstName} and I love chocolate`)
// }

// let person = {
//     firstName: "Sarah",
//     eyeColor: "blue",
//     eat: eating
// };

// person.eat();

// eating();
