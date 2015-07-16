var bSearch = (function(){
    function binarySearch( array, valueToFind ){
        var lowerBound = 0,
            upperBound = array.length;
        return search( array, lowerBound, upperBound, valueToFind );
    };

    function search( array, lowerBound, upperBound, valueToFind ){
        var midPoint      = (~~((upperBound-lowerBound)/2)) + lowerBound,
            midPointValue = array[midPoint];
        
        if( upperBound > array.length || upperBound < 0 || lowerBound > array.length || lowerBound < 0 ){
            return undefined;
        }
        if( valueToFind == midPointValue ){
            return midPointValue;
        }else if( valueToFind > midPointValue ){
            return search( array, midPoint+1, upperBound, valueToFind );
        }else if( valueToFind < midPointValue ){
            return search( array, lowerBound, midPoint-1, valueToFind );
        }
    };
    return {
        binarySearch:binarySearch
    };
})();
