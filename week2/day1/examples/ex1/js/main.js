// console.log('Starting...');

// // Storing a string value in a variable
// let helloVar = 'Hello from a variable';

// helloVar = helloVar + 'something else';

// let moreStr = `more string value's`;

// let emptyVar;

// console.log(helloVar + ' - ' + moreStr);
// console.log(emptyVar);

// let a = "Hello";
// let b = "World";
// let c = a + ' ' + b + '!' + '?';

// let d = `${a} ${b}!? add 1 + 1 = ${1 + 1}`;

// console.log('Value in c', c);
// console.log('Value in d', d);

// let longString = "This is a very long string which needs \
// to wrap across multiple lines because \
// otherwise, my code is unreadable.";

// console.log(longString.indexOf('xyz'));

// let str = 'Hello Everyone, please say hello to the class ';
// let strSub0_4 = str.substring(0, 4); //returns "Hell" --> the index 4 isn't included
// let strSub2_4 = str.substring(2, 4); //returns "ll"
// let strSub15 = str.substring(15); //returns "please say hello to the class"

// console.log(strSub15);


// let myStr = '    \n    Hello Everyone, Please say hello to the class ';
// let myStrLc = myStr.toLowerCase();
// let myStrUc = myStr.toUpperCase();
// let myStrTrimed = myStr.trim();

// console.log(myStr + '\n' + myStrLc + '\n' + myStrUc + '\n' + myStrTrimed)

let addressNumber = 11;
let addressStreet = 'My super secret street';
let country = 'Mauritius';

console.log(addressNumber);
console.log(addressStreet);
console.log(country);

let globalAddress = addressNumber + ' ' + addressStreet + ' ' + country;
let globalAddressWithTicks = `${addressNumber} ${addressStreet} ${country}`;
console.log(globalAddress);
console.log(globalAddressWithTicks);
