var conver = (function(){
    function stoi( str ){
        var negate    = false,
            rtnNumber = 0,
            index     = 0,
            zeroCharCode = '0'.charCodeAt(0);

        if( str.charAt(0) == '-' ){
            negate = true;
            index = 1;
        }

        for( var i=index,l=str.length; i<l; i++ ){
            rtnNumber *= 10;
            rtnNumber += str.charCodeAt(i) - zeroCharCode;
        }
        if( negate ){
            rtnNumber *= -1;
        }
        return rtnNumber
    }
    
    function itos( int ){
        var digit = 0,
            str   = '';
        while( int > 0 ){
            digit = int%10;
            int= ~~(int/10);
            str = digit + str;
        }
        return str;
    }

    return {
        stoi:stoi,
        itos:itos
    };
})();
