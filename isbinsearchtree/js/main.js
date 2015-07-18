var prevValue = null;
function isBST( root ){
    if( root == null ) return true;

    if( isBST( root.left ) == false ) return false;
    
    if( prevValue !== null && root.val <= prevValue ) return false;
    prevValue = root.val;

    if( isBST(root.right) == false ) return false;

    return true;
}

function Node( val, left, right ){
    this.val = val;
    this.left  = left || null;
    this.right = right || null;
}

var root = new Node( 1, 
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

var rootBal = new Node( 1, 
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
function insert( array ){
    if( array === undefined ){
        var root = new Node(randRange(0,100));
        for( var i=0,node=null; i<100; i++ ){
            BinarySearchTree.insert( root, randRange(0,100) );
        }
        return root;
    }else{
        var root = new Node( array[0] );
        for( var i=1; i<array.length; i++ ){
            BinarySearchTree.insert( root, array[i] );
        }
        return root;
    }
};
var bst = insert([15,3,7,1,7,0,8,5,44,16,34,67,23]);
console.log(isBST(bst));
