
console.log(document.forms)

const { forms: [form] } = document;

const {
    elements: [
        nounElement,
        adjectiveElement,
        personElement,
        verbElement,
        placeElement,
    ]
} = form;

const btnShuffle = document.querySelector('#shuffle');

const display = values => {

    if (!values || values.length !== 5) return;


    const bubble = document.querySelector('#story');

    bubble.textContent = values.join(' ');
};

const getValues = () => {

    const { value: nounValue } = nounElement;
    const { value: adjectiveValue } = adjectiveElement;
    const { value: personValue } = personElement;
    const { value: verbValue } = verbElement;
    const { value: placeValue } = placeElement;

    if (!nounValue
        || !adjectiveValue
        || !personValue
        || !verbValue
        || !placeValue) {

        alert('You missed a value...');
        return;
    }

    const values = [];
    values[0] = nounValue;
    values[1] = adjectiveValue;
    values[2] = personValue;
    values[3] = verbValue;
    values[4] = placeValue;

    return values;
};

const onSubmit = e => {

    e.preventDefault();

    const values = getValues();

    display(values);

    btnShuffle.setAttribute('data-shuffle-count', 0);
};

form.onsubmit = onSubmit;

const getRandomInteger = (min, max) => {
    let value = Math.random() * (max - min + 1) + min;
    value = Math.floor(value);
    return value;
};

btnShuffle.onclick = () => {

    const values = getValues();

    if (!values) return;

    let shuffleCount = btnShuffle.getAttribute('data-shuffle-count');
    shuffleCount = parseInt(shuffleCount);
    shuffleCount += 1;

    if (shuffleCount > 3) {

        alert('You exceeded the shuffle count!');
        return;
    }

    const shuffledValues = [];

    const { length: counter } = values;

    for (let i = 0; i < counter; i++) {
        const randomIndex = getRandomInteger(0, counter - i - 1);
        shuffledValues[i] = values[randomIndex];

        values.splice(randomIndex, 1);
    }

    display(shuffledValues);

    btnShuffle.setAttribute('data-shuffle-count', shuffleCount);
};
