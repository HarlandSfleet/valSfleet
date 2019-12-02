const currency = require('./currency');

// const b     = currency('123456783')
// const a     = currency('12345678');
// const test0 = currency('1232332')
// const test  = currency('$432,111.353');
// const test1 = currency('23243.');
// const test2 = currency('4234.23');
// const fail  = currency(true);
const b     = currency(true)
const d     = currency('asssd')
const f     = currency('$100.0')
const a     = currency(1233)
const x     = currency('$1233.23',1)
// console.log( '-->', test );
// console.log( test1 )
// console.log( test2 )

// console.log( fail )
// console.log( d )
// console.log( a )
console.log( b )
console.log( d )
console.log( f )
console.log( a )
console.log( x )