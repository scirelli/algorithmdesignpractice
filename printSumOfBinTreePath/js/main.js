//You are given a binary tree in which each node contains a value. Design an algorithm to print
//all paths which sum to a given value. The path does not need to start or end at the
//root or leaf, but it must go in a straight line down.

function findSum( node, sum, aPath, curLevel ){
    if( !node ) return;
    
    aPath[curLevel] = node.value;
    
    //Look back up the path we've taken
    for( var i=curLevel,pathSum=0; i>=0; i-- ){
        pathSum += aPath[i] || 0;
        if( pathSum == sum ){
            printPath( aPath, i, curLevel );
            pathSum = 0;
        }
    }

    findSum( node.left , sum, aPath, curLevel+1 );
    findSum( node.right, sum, aPath, curLevel+1 );
}

function printPath( aPath, start, end ){
    var str = '',
        sum = 0;
    for( var i=start; i<end; i++ ){
        sum += aPath[i];
        str += aPath[i] + '+';
    }
    sum += aPath[end];
    str += aPath[end];
    console.log(str += ' = ' + sum);
}

function height( node ){
    if( !node ){
        return 0;
    }
    return Math.max( height(node.left), height(node.right) ) + 1;//Height of a ndoe is the Max of the height of it's children + 1
}

function insert( array ){
    if( array === undefined ){
        var root = new BinaryTree.Node(randRange(0,100));
        for( var i=0,node=null; i<100; i++ ){
            BinaryTree.insert( root, randRange(0,100) );
        }
        return root;
    }else{//If we pass an array lets make sure there's some sort of order
        var root = new BinarySearchTree.Node( array[0] );
        for( var i=1; i<array.length; i++ ){
            BinarySearchTree.insert( root, array[i] );
        }
        return root;
    }
};


var ary   = [15,3,7,1,7,0,8,5,44,16,34,67,23],
    btree = insert(ary),
    aPath = [];

findSum( btree, 15+3+7+1+7, aPath, 0 );
