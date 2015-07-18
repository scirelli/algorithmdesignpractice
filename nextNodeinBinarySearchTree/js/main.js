//Write an algorithm to find the 'next' node (i.e. in-order successor) of a given node in
//a binary search tree. You may assume that each node has a link to it's parent.
function nextNode( node ){
    if( !node ) return null;

    if(node.right) return leftMostNode(node.right);

    var p  = node.parent,
        gp = p.parent; 
    while( gp && gp.right == p ){
        p  = gp,
        gp = p.parent; 
    }
    
    return gp;
}

function leftMostNode( node ){
    if( !node ) return null;
    while( node.left ){
        node = node.left;
    }
    return node;
}

function insert( array ){
    if( array === undefined ){
        var root = new BinarySearchTree.Node(randRange(0,100));
        for( var i=0,node=null; i<100; i++ ){
            BinarySearchTree.insert( root, randRange(0,100) );
        }
        return root;
    }else{
        var root = new BinarySearchTree.Node( array[0] );
        for( var i=1; i<array.length; i++ ){
            BinarySearchTree.insert( root, array[i] );
        }
        return root;
    }
};


var ary = [15,3,7,1,7,0,8,5,44,16,34,67,23],
    bst = insert(ary);

var rnd = BinarySearchTree.randRange(0,ary.length);
console.log(nextNode(bst.left.left.left));
console.log(nextNode(bst.left.right.right));
