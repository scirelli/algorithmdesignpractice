function createLevelLinkedList( root, aList, level ){
    if( root == null ) return;
    

    if( aList.length == level ){
        aList[level] = [root];
    }else{
        aList[level].push(root);
    }
    createLevelLinkedList( root.left, aList, level+1 );
    createLevelLinkedList( root.right, aList, level+1 );
}

function createLevelLinkedListBFS( root, aList ){
    var queue    = [root],
        itm      = null,
        newLevel = null,
        childern = null;

    while(queue.length){
        aList.push(queue);
        childern = queue; 
        queue    = [];
        for( var i=0; i<childern.length,itm=null; i++ ){
            itm = children[i];
            if( itm.left ){
                queue.push(itm.left);
            }
            if( itm.right ){
                queue.push(itm.right);
            }
        }
    }
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
var aList = [];
createLevelLinkedList( rootBal, aList, 0 );
console.log(aList);
createLevelLinkedListBFS( rootBal, aList );
console.log(aList);
