function quickSort( array, left, right ){
    var index = partition(array, left, right);
    if( left < index -1 ){// Sort left half
        quickSort(array, left, index-1);
    }
    if( right > index ){//Sort right half
        quickSort( array, index, right );
    }
}

function partition( array, left, right ){
    var pivotElm = array[~~((left+right)/2)];
    
    while( left <= right ){
        //Find element on left that should be on right
        //while a left element is < the pivotElm we keep moving right toward pivot elm
        while( array[left] < pivotElm ) left++;

        //Find element on the right that should be on the left.
        //whle a right element is > the pivotElm we keep moving left toward pivot elm 
        while( array[right] > pivotElm ) right--;
        
        //If they havn't met then swap elements and keep looking
        if( left <= right ){
            swap(array, left, right);
            //Skip the current elements and keep looking.
            left++;
            right--;
        }
    }
    return left;
}

function swap( array, a, b ){
    var tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}

var ary = [15,3,7,1,7,0,8,5,44,16,34,67,23]; //ary.length = 13
ary = [15,3,7,1,7,0];
ary = [6,5,3,1,8,7,2,4];

console.log(ary);
quickSort( ary, 0, ary.length-1 );
console.log(ary);
