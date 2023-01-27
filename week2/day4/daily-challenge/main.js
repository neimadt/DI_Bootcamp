
const str = 'Helloooooo, World, in, a, frame'; // prompt(); //

const frameString = value => {

    if (!value) return 'Nothing...';


    let maxLenString = 0;

    const splits = value.split(',').reduce((reduced, s) => {

        const trimed = s.trim();

        maxLenString = trimed.length > maxLenString ? trimed.length : maxLenString;

        reduced.push(` ${trimed} `);

        return reduced;
    }, []);

    const topAndBottomLine = '*'.repeat(maxLenString + 2); //''.padEnd(maxLenString + 2, '*');

    console.log(maxLenString)
    console.log(topAndBottomLine)

    console.log(splits)
    splits.unshift(topAndBottomLine);
    splits.push(topAndBottomLine);
    console.log(splits)

    let result = '';

    for (let i = 0; i < splits.length; i++) {

        const isLastLine = i === (splits.length - 1);

        const word = splits[i].padEnd(maxLenString + 2, ' ');

        result += '*' + word + '*' + (isLastLine ? '' : '\n');
    }

    return result;
};

console.log(frameString(str))
