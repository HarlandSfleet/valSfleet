const sumAllNumbers = require('./sumAllNumbers');
const arrays = [
    {
        array: [ 1,2,3 ],
        total: 6
    },
    {
        array: [ 4,5,7,3,6 ],
        total: 25
    },
    {
        array: [ -1,-4,5 ],
        total: 0
    }
]

arrays.forEach( array => {
    test('Regresa la sumatoria de los elementos de un arreglo', () => {
        expect( sumAllNumbers(array.array)).toBe( array.total );
    });
})