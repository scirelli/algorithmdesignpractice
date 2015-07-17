// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
function setZeros( matrix ){
    var rows = new Array(matrix.length),
        cols = new Array(matrix[0].length);
    
    for( var row=0,rl=matrix.length; row<rl; row++ ){
        for( var col=0,cl=matrix[row].length; col<cl; col++ ){
            if( matrix[row][col] == 0 ){
                rows[row] = true;
                cols[col] = true;
            }
        }
    }

    for( var row=0; row<rows.length; row++ ){
        if( rows[row] ){
            zeroRow( matrix, row );
        }
    }
    for( var col=0; col<cols.length; col++ ){
        if( cols[col] ){
            zeroCol( matrix, col );
        }
    }
    
    printMatrix(matrix);
    function zeroRow( matrix, row ){
        for( var i=0; i<matrix[row].length; i++ ){
            matrix[row][i] = 0;
        }
    }
    function zeroCol( matrix, col ){
        for( var i=0; i<matrix.length; i++ ){
            matrix[i][col] = 0;
        }
    }
    function printMatrix( matrix ){
        for( var row=0,rl=matrix.length; row<rl; row++ ){
            console.log( matrix[row] );
        }
    }
    return matrix;
}

console.log( setZeros(
[
    [1 ,2 ,3 ,4  ],
    [5 ,6 ,0 ,8  ],
    [9 ,10,11,12 ],
    [13,0 ,15,16 ]
]
, 4 ) );
