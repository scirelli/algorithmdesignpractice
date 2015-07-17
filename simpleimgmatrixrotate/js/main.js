//
function rotate( matrix, n ){
    for( var layer=0; layer < n/2; layer++ ){
        var first = layer,
            last  = n - 1 - layer;
        
        for( var i=first; i<last; i++ ){
            var offset = i - first;
            
            //save top
            var top = matrix[first][i]; 

            //left->top
            matrix[first][i] = matrix[last-offset][first];

            //bottom -> left
            matrix[last-offset][first] = matrix[last][last-offset];

            //right -> bottom
            matrix[last][last-offset] = matrix[i][last];

            //top -> right
            matrix[i][last] = top;
        }
    }
    return matrix;
}

console.log( rotate(
[
    [1 ,2 ,3 ,4  ],
    [5 ,6 ,7 ,8  ],
    [9 ,10,11,12 ],
    [13,14,15,16 ]
]
, 4 ) );
