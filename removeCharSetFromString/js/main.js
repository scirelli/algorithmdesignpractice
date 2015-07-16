var stuff = (function(){
    function removeCharsInPlace( str, removeThese ){
        var charSet = [];
        
        str = str.split('');

        charSet.forEach(function( value, index, array ){
            array[index]=false;
        });
        for( var i=0,l=removeThese.length; i<l; i++ ){
            charSet[removeThese.charCodeAt(i)] = true;
        }

        var writePtr = 0;
        for( var i=0,l=str.length; i<l; i++ ){
            if( charSet[str[i].charCodeAt(0)] === true ){
                continue;
            }else{
                str[writePtr] = str[i];
                writePtr++;
            }
        }
        for( var i=writePtr,l=str.length; i<l; i++ ){
            str[i] = '';
        }
        return str.join('');
    };

    function removeChars( str, removeThese ){
        var charSet = new Array(128),
            outStr  = '';
        
        charSet.forEach(function( value, index, array ){
            array[i]=false;
        });
        for( var i=0,l=removeThese.length; i<l; i++ ){
            charSet[removeThese.charCodeAt(i)] = true;
        }

        for( var i=0,l=str.length; i<l; i++ ){
            if( charSet[str.charCodeAt(i)] !== true ){
                outStr += str[i];
            }
        }
        return outStr;
    };

    return {
        removeCharsInPlace:removeCharsInPlace,
        removeChars:removeChars
    };
})();
