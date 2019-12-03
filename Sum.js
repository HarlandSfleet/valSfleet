//This function receive an array of numbers

function Sum( numbers ){
    let num = 0;
    numbers.forEach( number => num += number );
    return num; 
}

module.exports = Sum;