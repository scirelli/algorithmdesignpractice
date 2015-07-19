"use strict";

function binarySearch( array, valueToFind ){
    return search( array, 0, array.length-1, valueToFind );
}

function search( array, left, right, valueToFind ){
    var midPoint        = ~~((left+right)/2),
        valueAtMidPoint = array[midPoint];

    if( valueAtMidPoint == valueToFind ){ return midPoint; }
    if( left >= right || right <= left ){ return null; }

    if( valueToFind > valueAtMidPoint ){
        //search right half
        return search( array, midPoint+1, right, valueToFind );
    }
    if( valueToFind < valueAtMidPoint ){
        //search left half
        return search( array, left, midPoint-1, valueToFind );
    }
    return null;
}

var a = [1,2,3,4,5,6,7,8,9,10,11,12],
    searchFor = 5;

var index = binarySearch(a, searchFor);
console.log( 'Search for \'' + searchFor + '\'');
console.log( 'Found it at location: ' + index );
console.log( 'Value at index[' + index + '] = ' + a[index] );

//------------------------ Binary Search Strings With Empty strs in Array ---------------


function strBinarySearch( array, strValueToFind ){
    return strSearch(array, 0, array.length-1, strValueToFind );
}

function strSearch( array, left, right, valueToFind ){
    var midPoint = ~~((left+right)/2),
        midPointValue = array[midPoint];
    
    if( left > right || right < left ) return -1;

    if( midPointValue.length == 0){
        //Move the midPoint
        var midLeft  = midPoint - 1,
            midRight = midPoint + 1;

        while(true){
            if( midLeft < left || midRight > right ){
                return -1;
            }else if( midLeft >= left && array[midLeft].length ){
                midPoint = midLeft;
                midPointValue = array[midPoint];
                break;
            }else if( midRight >= right && array[midRight].length ){
                midPoint = midRight;
                midPointValue = array[midPoin];
                break;
            }
            left--;
            right++;
        }
    }

    if( midPointValue.localeCompare(valueToFind) == 0 ){//Found it!
        return midPoint;
    }else if( valueToFind.localeCompare(midPointValue) < 0 ){//String comes before midPoint search left
        return strSearch( array, left, midPoint-1, valueToFind );
    }else{//Search right
        return strSearch( array, midPoint+1, right, valueToFind );
    }
}


var aStr = ['a','b','','c','d','','e','','','f','','g','h','i'];
searchFor = 'i';

index = strBinarySearch(aStr, searchFor);
console.log( 'Search for \'' + searchFor + '\'');
console.log( 'Found it at location: ' + index );
console.log( 'Value at index[' + index + '] = \'' + aStr[index] + '\'' );
