/*
    Currency  - Recieve a number/string and return something like this $1,000.00
              - Recieve the cuantity of decimals
              - if it is empty will be without decimals
*/

function Currency( number, decimals ){
    let result      = '';
    let points      =  0;
    let dollar      =  0;
    let decimales   = '';
    let decimal     = '';
    
    if( typeof number != "string" && typeof number != "number" ) return 'Check your input';
    let numberToConvert = number.toString().split('');
    if( !numberToConvert.includes('.') ){ numberToConvert.push('.') }
    numberToConvert.forEach( (number, index) => {
      if( number == '.' ){ points++; numberToConvert.splice( index,1 ); decimal = index; for( let i = index; i < numberToConvert.length ; i++ ){ decimales += numberToConvert[ i ]; }}
      if( number == '$' ){ dollar++; numberToConvert.splice( index,1 )}
      if( number == ',' ){ numberToConvert.splice( index,1 )}
      if( points > 1 || dollar > 1 )  result = 'Check your input'; 
      if( isNaN(+number) ){
        if( number != '$' && number != '.' && number != ',' ){
          result = 'Check your input'
        }
      }
    })
    numberToConvert.splice( decimal, ( numberToConvert.length - 1 ) );
    let nL = numberToConvert.length;
    if( nL > 3 ){
      if( nL == 4 ){
        numberToConvert.splice( 1,0,',');
      }else if( nL == 5 ){
        numberToConvert.splice( 2,0,',');
      }else if( nL == 6 ){
        numberToConvert.splice( 3,0,',');
      }else if( nL == 7 ){
        numberToConvert.splice( 1,0,',');
        numberToConvert.splice( 5,0,',');
      }else if( nL == 8 ){
        numberToConvert.splice( 2,0,',');
        numberToConvert.splice( 6,0,',');
      }else if( nL == 9 ){
        numberToConvert.splice( 3,0,',');
        numberToConvert.splice( 7,0,',');
      }
    }
    if( result == 'Check your input' ){
      return result
    }else{
      numberToConvert.unshift('$');
      if( numberToConvert[ numberToConvert.length -1 ] == '.' ){ numberToConvert.splice(numberToConvert.length,1 ); console.log( 'XD ',numberToConvert )}
      numberToConvert = numberToConvert.join('');
      if( decimals ){
        decimales = '0.'+ decimales
        decimales = +decimales
        decimales = decimales.toFixed( decimals )
        decimales = decimales.split('.')
        decimales = decimales[1];
        numberToConvert += '.' + decimales
      }else{
        if( decimals != undefined ){
          numberToConvert = numberToConvert + '.' + decimales;
        }
      }
      result = numberToConvert;
      return result;
    }
}

module.exports = Currency; 