const currency = require('./currency');

test('Check type of input', () => {
    expect( currency( true )).toBe('Check your input');
})


// test('Check input with more than one point', () => {
//     expect( currency('$100.0.0')).toBe('Check your input');
// })

test('Check input with a strange character', () => {
    expect( currency('$1er3e') ).toBe('Check your input')
})


test('Check return with currency format 1 digit string', () => {
    expect( currency('1') ).toBe('$1')
})

test('Check return with currency format 2 digits string', () => {
    expect( currency('12') ).toBe('$12')
})

test('Check return with currency format 3 digits string', () => {
    expect( currency('123') ).toBe('$123')
})

test('Check return with currency format 4 digits string', () => {
    expect( currency('1234') ).toBe('$1,234')
})

test('Check return with currency format 5 digits string', () => {
    expect( currency('12345') ).toBe('$12,345')
})

test('Check return with currency format 6 digits string', () => {
    expect( currency('123456') ).toBe('$123,456')
})

test('Check return with currency format 7 digits string', () => {
    expect( currency('1234567') ).toBe('$1,234,567')
})

test('Check return with currency format 8 digits string', () => {
    expect( currency('12345678') ).toBe('$12,345,678')
})

test('Check return with currency format 9 digits string', () => {
    expect( currency('123456789') ).toBe('$123,456,789')
})




test('Check return with currency format 1 digit number', () => {
    expect( currency(1) ).toBe('$1')
})

test('Check return with currency format 2 digits number', () => {
    expect( currency(12) ).toBe('$12')
})

test('Check return with currency format 3 digits number', () => {
    expect( currency(123) ).toBe('$123')
})

test('Check return with currency format 4 digits number', () => {
    expect( currency(1234) ).toBe('$1,234')
})

test('Check return with currency format 5 digits number', () => {
    expect( currency(12345) ).toBe('$12,345')
})

test('Check return with currency format 6 digits number', () => {
    expect( currency(123456) ).toBe('$123,456')
})

test('Check return with currency format 7 digits number', () => {
    expect( currency(1234567) ).toBe('$1,234,567')
})

test('Check return with currency format 8 digits number', () => {
    expect( currency(12345678) ).toBe('$12,345,678')
})

test('Check return with currency format 9 digits number', () => {
    expect( currency(123456789) ).toBe('$123,456,789')
})




test('Check return with currency format 1 digit currency format', () => {
    expect( currency('$1') ).toBe('$1')
})

test('Check return with currency format 2 digits currency format', () => {
    expect( currency('$12') ).toBe('$12')
})

test('Check return with currency format 3 digits currency format', () => {
    expect( currency('$123') ).toBe('$123')
})

test('Check return with currency format 4 digits currency format', () => {
    expect( currency('$1,234') ).toBe('$1,234')
})

test('Check return with currency format 5 digits currency format', () => {
    expect( currency('$12,345') ).toBe('$12,345')
})

test('Check return with currency format 6 digits currency format', () => {
    expect( currency('$123,456') ).toBe('$123,456')
})

test('Check return with currency format 7 digits currency format', () => {
    expect( currency('$1,234,567') ).toBe('$1,234,567')
})

test('Check return with currency format 8 digits currency format', () => {
    expect( currency('$12,345,678') ).toBe('$12,345,678')
})

test('Check return with currency format 9 digits currency format', () => {
    expect( currency('$123,456,789') ).toBe('$123,456,789')
})






