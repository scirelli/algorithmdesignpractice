
var a = [13,14,10,11,12];
var a = [13,14,13,14,10,11,12,14,15,16,19,1,2,3,4,5,6,7,8,9,10,11,12];
var a = [13,14,15,16,1,17,18,19,20,17,18,19,20,1,2,3,4,5,6,7,8];

function _longestIncreasingSeq( a, i, aLists, j ){
    var itm    = a[i],
        pushed = false;
   
    if( i >= a.length || i < 0 ) return;
    
    if( aLists[j] ){
        var list = aLists[j];
        var val  = list[list.length-1];
        if( itm > val ){
            list.push(itm);
            pushed=true;
        }
    }

    if( !pushed ){
        aLists.push([itm]);
        j=aLists.length-1;
    }
    _longestIncreasingSeq(a,i+1,aLists,j);
}
function longestIncreasingSeq( a ){
    var aLists = [];
        _longestIncreasingSeq( a, 0, aLists, 0 ),
        bestSolution = null;

    for( var i=0,l=aLists.length; i<l; i++ ){
        bestSolution = seqWithMaxLength( bestSolution, aLists[i] );
    }
    return bestSolution;
}

function seqWithMaxLength( seq1, seq2 ){
    if( seq1 == null ) return seq2;
    if( seq2 == null ) return seq1;
    return seq1.length > seq2.length ? seq1 : seq2;
}

console.log( longestIncreasingSeq( a ) );
