// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only
// upper and lower case letters (a-z)
//
function stringCompress( str ){
    if( !str.length ) return str;
    var compressedStr = '';

    for( var i=1,l=str.length+1,curCount=1,curChar='',prevChar=str.charAt(0); i<l; i++ ){
        curChar = str.charAt(i);
        if( curChar == prevChar ){
            curCount++;
        }else{
            compressedStr += prevChar + curCount;
            curCount = 1;
            prevChar = curChar;
        }
    }

    if( compressedStr.length == str.length ) return str;
    return compressedStr;
}

console.log( stringCompress("aabcccccaaannnnnnnnnn") );//11 
