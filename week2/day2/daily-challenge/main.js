
const sentence = 'The movie is not that bad, I like it';

const wordNot = 'not';
const wordBad = 'bad';
const wordNotPos = sentence.search(wordNot);
const wordBadPos = sentence.search(wordBad);

console.log(wordNotPos);
console.log(wordBadPos);

if (wordBadPos > wordNotPos) {

    const substr = sentence.substring(wordNotPos, (wordBadPos + wordBad.length));
    console.log(substr);

    console.log(sentence.replace(substr, 'good'))
}
else {

    console.log(sentence);
}