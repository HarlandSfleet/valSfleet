//This function receive an array of numbers

function sumAllNumbers( numbers ){
    let num = 0;
    numbers.forEach( number => num += number );
    return num; 
}

module.exports = sumAllNumbers;