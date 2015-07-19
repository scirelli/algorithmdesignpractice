function mergeSort( aArray ){
    _mergeSort( aArray, [], 0, aArray.length-1 );
}

function _mergeSort( aArray, aHelper, nLow, nHigh ){
    if( nLow < nHigh ){
        var midPoint = ~~((nLow + nHigh)/2);
        _mergeSort( aArray, aHelper, nLow, midPoint );//Sort left half
        _mergeSort( aArray, aHelper, midPoint+1, nHigh );//Sort right half
        merge( aArray, aHelper, nLow, midPoint, nHigh );
    }
}

function merge( aArray, aHelper, nLow, midPoint, nHigh ){
    //Copy both halves into a helper array
    for( var i=nLow; i<=nHigh; i++ ){
        aHelper[i] = aArray[i];
    }

    var helperLeft  = nLow,
        helperRight = midPoint + 1,
        current     = nLow;
    //Iterate through helper array. Compare the left and right half, copying back the smaller element from the two halves
    //into the original array.
    while( helperLeft <= midPoint && helperRight <= nHigh ){
        if( aHelper[helperLeft] <= aHelper[helperRight] ){
            aArray[current] = aHelper[helperLeft];
            helperLeft++;
        }else{ //If the right element is smaller than the left
            aArray[current] = aHelper[helperRight];
            helperRight++;
        }
        current++;
    }

    //Copy the rest of the left side of the array into the target array
    var remaining = midPoint - helperLeft;
    for( var i=0; i<=remaining; i++ ){
        aArray[current+i] = aHelper[helperLeft + i];
    }
}
/*
       [6,5,3,1,8,7,2,4]

   [6,5,3,1]         [8,7,2,4]

 [6,5]   [3,1]      [8,7] [2,4]

[6] [5] [3] [1]   [8] [7] [2] [4]
          Start Merging
 6<5      3<1       8<7    2<4
[5,6]    [1,3]     [7,8]  [2,4]

5<1, 5<3           7<2  7<4
[1,  3,   5,6]     [2,  4,   7,8]

1<2  3<2  3<4  5<4 5<7  6<7 
[1,  2,   3,   4,  5,   6,   7,8]
 */

var ary = [15,3,7,1,7,0,8,5,44,16,34,67,23]; //ary.length = 13
ary = [15,3,7,1,7,0];
ary = [6,5,3,1,8,7,2,4];

console.log(ary);
mergeSort( ary );
console.log(ary);
