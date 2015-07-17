//Given two strings, write a method to decide if one is a permutation of the other
function isPermuatation( str1, str2 ){
    if( str1.length != str2.length ) return false;
    var charCount = [];
    str1 = str1.split('');
    str2 = str2.split('');

    for( var i=0,l=str1.length, iChar=0; i<l; i++ ){
        iChar = str1[i].charCodeAt(0);
        if( !charCount[iChar] ){
            charCount[iChar] = 1;
        }else{
            charCount[iChar] += 1;
        }
    }

    for( var i=0,l=str2.length,iChar=0; i<l; i++ ){
        iChar = str2[i].charCodeAt(0);
        if( charCount[iChar] ){
            charCount[iChar] = charCount[iChar] -1;
            if( charCount[iChar] < 0 ) return false;
        }else{
            return false;
        }
    }

    return true;
}

console.log( isPermuatation('abcd', 'dcba') );
