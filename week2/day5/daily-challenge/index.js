
const generatePart1 = bottlesCount => {

    const pluralOrSingular = bottlesCount > 1 ? 's' : '';

    let result = `${bottlesCount} bottle${pluralOrSingular} of beer on the wall\n`;
    result += `${bottlesCount} bottle${pluralOrSingular} of beer\n`;

    return result;
};

const generatePart2 = substractValue => {

    return `Take ${substractValue} down, ` +
        `pass ${substractValue > 1 ? 'them' : 'it'} around\n`;
};

const generatePart3 = bottlesCount => {

    const pluralOrSingular = bottlesCount > 1 ? 's' : '';

    return bottlesCount > 0
        ? `${bottlesCount} bottle${pluralOrSingular} of beer on the wall\n\n`
        : 'No bottle of beer on the wall';
};

const getLyrics = loopCount => {

    let substractValue = 1;
    let result = '';

    let bottlesLeft = loopCount;

    while (bottlesLeft > 0) {

        result += generatePart1(bottlesLeft);

        if (substractValue > bottlesLeft) {

            substractValue = bottlesLeft;
        }

        result += generatePart2(substractValue);

        bottlesLeft -= substractValue;

        result += generatePart3(bottlesLeft);

        substractValue += 1;
    }

    return result;
};

const start = () => {

    let promptedValue = prompt('Enter your amount of beer bottles');

    const count = parseInt(promptedValue);

    if (count >= 0) {

        const lyrics = getLyrics(count);

        console.log(lyrics);
    }
    else {

        const retry = confirm('What are you doing???\nTry again?');

        if (retry) {

            start();
        }
    }
};

start();
