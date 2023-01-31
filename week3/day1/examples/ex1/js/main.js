const divElement = document.querySelector('div');

// let className = divElement.className
// console.log(className);

// className += ' fat';
// className = className.replace('c3', '');
// divElement.className = className;
// console.log(className);

console.log(divElement.className);
divElement.classList.add('fat');
console.log(divElement.className);

divElement.classList.remove('c4');
console.log(divElement.className);

divElement.classList.toggle('c5');
console.log(divElement.className);

divElement.classList.toggle('c5');
console.log(divElement.className);

const ulElement = document.querySelector('ul');

const newBobLi = document.createElement('li');
newBobLi.innerHTML = '<i>Bob</i>'

ulElement.appendChild(newBobLi);

const newLiFirst = document.createElement('li');
newLiFirst.innerHTML = 'FIRST';

const currentFirstLi = ulElement.firstElementChild;

ulElement.replaceChild(newLiFirst, currentFirstLi)
