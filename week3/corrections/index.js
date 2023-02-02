const body = document.getElementsByTagName('body')[0];
const input = document.createElement('input');

body.appendChild(input)

input.setAttribute('type', 'text');

input.addEventListener('keypress', key);




function key(event) {

    const { key } = event;
    const notALetter = /[^a-z]/i.test(key);

    if (notALetter) {
        event.preventDefault();
    }
}