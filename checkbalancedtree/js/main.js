function isBalanced( root ){
    if( checkHeight(root) == -1 ) return false;
    return true;
}

function checkHeight( root ){
    if( root == null ) return 0;

    var heightLeft  = checkHeight( root.left );
    var heightRight = checkHeight( root.right );
    var height      = Math.max( heightLeft, heightRight ) + 1;
    var heightDiff  = Math.abs( heightLeft - heightRight );

    if( heightLeft == -1 ) return -1;
    if( heightRight == -1 ) return -1;
    if( heightDiff > 1 ) return -1;

    return height;
}

function Node( val, left, right ){
    this.val = val;
    this.left  = left || null;
    this.right = right || null;
}

root = new Node( 1, 
    new Node(2, 
         new Node(6,
             null,
             new Node(9,
                 new Node(10)
             )
         )
    ), 
    new Node(3,
        new Node(5),
        new Node(4)
    ) 
);

rootBal = new Node( 1, 
    new Node(2, 
         new Node(6,
             null,
             new Node(9)
         )
    ), 
    new Node(3,
        new Node(5),
        new Node(4)
    ) 
);
console.log(isBalanced(rootBal));
