//Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end of the string to hold the additional
// characters, and that you are given the "true" length of the string. 
// Example:
// input:  "Mr John Smith    ", 13
// output: "Mr%20John%20Smith"
function spaceReplace( str, trueLength ){
    str = str.split('');

    trueLength--;
    for( var i=str.length-1,l=0,cChar=''; i>l; i-- ){
        cChar = str[trueLength--];
        if( cChar == ' ' ){
            str[i--] = '0';
            str[i--] = '2';
            str[i] = '%';
        }else{
            str[i] = cChar;
        }
    }
    return str.join('');
}

console.log( spaceReplace("Mr John Smith    ", 13) );
