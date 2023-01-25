// let day = 45;   //change and try with different values

// switch (day) {
//     case 1:      //if day = 1
//         console.log('Monday');
//         break;
//     case 2:      //if day = 2
//         console.log('Tuesday');
//         break;
//     case 3:      //if day = 3
//         console.log('Wednesday');
//         break;
//     case 4:      //if day = 4
//         console.log('Thursday');
//         break;
//     case 5:      //if day = 5
//         console.log('Friday');
//         break;
//     case 6:      //if day = 6
//         console.log('Saturday');
//         break;
//     case 7:      //if day = 7
//         console.log('Sunday');
//         break;
//     default:    //if day doesn't match any of above
//         console.log('Invalid');
//         break;
// }

// if (day === 1) {
//     console.log('Monday');
// }
// else if (day === 2) {
//     console.log('Tuesday');
// }
// else if (day === 3) {
//     console.log('Wednesday');
// }
// else if (day === 4) {
//     console.log('Thursday');
// }
// else if (day === 5) {
//     console.log('Friday');
// }
// else if (day === 6) {
//     console.log('Saturday');
// }
// else if (day === 7) {
//     console.log('Sunday');
// }
// else {
//     console.log('Invalid');
// }


// let raining = true, really = false, value;

// let str = 'Raining today';

// value = ((raining || really) && str) || 'xyz'; // option 1
// console.log(value);

// value = (raining && really) ? 'Really raining' : (raining ? 'Maybe raining' : 'Not raining'); // option 2
// console.log(value);

// if (raining && really) { // option 3
//     value = 'Really raining';
// }
// else if (raining) { // option 3
//     value = 'Maybe raining';
// }
// else {
//     value = 'Not raining';
// }
// console.log(value);

// console.log(3 || 'Orange');
// console.log('' || 'Orange');
// console.log(true || 0);
// console.log(undefined || null);

// let person = {
//     name: 'Bob',
//     age: 18,
//     job: true
// };

// let result = 'unemployed';
// if (person.job) {
//     result = 'employed';
// }

// console.log(result)
// else {
//     result = 'unemployed'
// }
// console.log(person);
// console.log(person.job);

// console.log(person.job ? 'employed' : 'unemployed');

// debugger;
// let age = prompt('How old are you?');
// age = parseInt(age);

// console.log(age)
// console.log(typeof (age))

// debugger;
// if (age > 18) {
//     alert('Go on!')
// }
// else if (age < 18) {
//     alert('no no no!')
// }
// else if (age === 18) {
//     alert('Congrats!')
// }
// else if (!age) {
//     alert('see you!')
// }
// else {
//     alert('Please enter a number')
// }

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     eyeColor: 'blue',
// };

// person.age = 48;
// person.age = 84;
// person['  234 @--- 4545 \n age'] = 12;

// person.age = undefined;
// delete person.age

// console.log(person)
// console.log(person.firstName)
// console.log(person['firstName'])
// console.log(person.age)
// console.log(person['  234 @--- 4545 \n age'])

// let user = {
//     username: 'me',
//     password: 'supersecret',
//     info: {
//         lastLoggedIn: 'never',
//         aaa: {
//             something: 'stuff'
//         }
//     }
// };
// console.log(user);

// let database = [
//     user
// ];
// console.log(database);

// let newsfeed = [
//     {
//         username: 'bob',
//         timeline: null
//     },
//     {
//         username: 'bobo',
//         timeline: null
//     },
//     {
//         username: 'obo',
//         timeline: null
//     }
// ];
// console.log(newsfeed);

// console.log(typeof(user));
// console.log(typeof(newsfeed));


// let str = 'Happy BirthDay';
// // let pattern = new RegExp('birthday', 'i');
// let pattern = /birthday/i;
// let result = str.match(pattern);
// true
// console.log(result); //returns

// if (result) {
//     console.log('Yes')
// } else {
//     console.log('No');
// }

// const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// // let regex = /^.+@.+\..+$/;
// console.log(regex.test('johndoe@gmail.com')); //returns true

// const str = 'The value of the variable should be a string that contains';

// const pos = str.indexOf('of ');

// console.log(str);
// console.log(pos);

let wordNot = 2, wordBad = 10;

if (wordNot >= 0 && wordNot > wordBad) {

}