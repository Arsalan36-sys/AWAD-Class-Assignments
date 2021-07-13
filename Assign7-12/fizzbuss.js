const output = fizzBuzz(17);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number' );
    return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
    return 'fizzBuzz';

    if (input % 3 === 0)
    return 'Fizzzzzzzzzzzzzzz';

    if(input % 5 === 0)
    return'Buzzzzzzzzzzzzzzzzz';

    return input;
}