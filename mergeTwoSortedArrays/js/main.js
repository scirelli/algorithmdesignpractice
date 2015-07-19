"use strict";

function merge( a1, a2 ){
    var indexA1    = 0,
        indexA2    = a2.length-1,
        mergeIndex = 0;

    for( ; indexA1<a1.length && a1[indexA1] != null; indexA1++ );
    if( a1.length < (indexA1+a2.length) ) return;
    mergeIndex = (indexA1 + a2.length)-1;
    indexA1--;

    while( indexA2 >= 0 ){
        if( indexA1 >= 0 && a2[indexA2] < a1[indexA1] ){
            a1[mergeIndex] = a1[indexA1];
            indexA1--;//used one from a1
        }else{
            a1[mergeIndex] = a2[indexA2];
            indexA2--;//we used one from a2
        }
        mergeIndex--;
    }
}

var a1 = [1,2,3,9,15, null, null, null, null, null, null],
    a2 = [1,2,3,5,6,20];

console.log(a1 + a2);
merge(a1,a2);
console.log(a1);
