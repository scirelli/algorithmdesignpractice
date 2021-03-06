var BinarySearchTree = function(){
    function Node( value ){
        this.parent = null;
        this.left   = null;
        this.right  = null;
        this.value  = value;
    };

    function insert( node, value ){
        if( value <= node.value ){
            if( !node.left ){
                node.left = new Node(value);
                node.left.parent = node;
            }else{
                insert( node.left, value );
            }
        }else if( value >= node.value ){
            if( !node.right ){
                node.right = new Node(value);
                node.right.parent = node;
            }else{
                insert(node.right, value);
            }
        }
    };
    
    //Breath first starting left
    // [35,98,9,54,8,22,67,52,97,20]
    //            35 
    //        9           98
    //    8      22     54
    //         20     52 67
    //                     97
    function minSort( node, buffer ){
        if( node.left !== null ){
            minSort( node.left, buffer );
        }
        buffer.push( node.value );
        if( node.right !== null ){
            minSort( node.right, buffer)
        }
    };
    function maxSort( node, buffer ){
        if( node.right !== null ){
            maxSort( node.right, buffer)
        }
        buffer.push( node.value );
        if( node.left !== null ){
            maxSort( node.left, buffer );
        }
    };

    function randRange( min, max ){
        return ~~(Math.random()*((max-min)+1) + min);
    };
    
    var unitTest = {
        testInsert:function( array ){
            if( array === undefined ){
                var root = new Node(randRange(0,100));
                for( var i=0,node=null; i<100; i++ ){
                    insert( root, randRange(0,100) );
                }
                return root;
            }else{
                var root = new Node( array[0] );
                for( var i=1; i<array.length; i++ ){
                    insert( root, array[i] );
                }
                return root;
            }
        },
        testMinSort:function(){
            var root = unitTest.testInsert([15,3,7,1,7,0,8,5,44,16,34,67,23]),
                buffer = [];
            minSort(root,buffer);
            return buffer;
        },
        testMaxSort:function(){
            var root = unitTest.testInsert([35,98,9,54,8,22,67,52,97,20]),
                buffer = [];
            maxSort(root,buffer);
            return buffer;
        }
    }
    return {
        Node:Node,
        insert:insert,
        minSort:minSort,
        maxSort:maxSort,
        randRange:randRange,
        unitTest:unitTest
    };
}();

var BinaryTree = function(){
    function Node( value ){
        this.parent = null;
        this.left   = null;
        this.right  = null;
        this.value  = value;
    };

    function insert( node, value ){
        if( randRange(0,1) ){
            if( !node.left ){
                node.left = new Node(value);
                node.left.parent = node;
            }else{
                insert( node.left, value );
            }
        }else{
            if( !node.right ){
                node.right = new Node(value);
                node.right.parent = node;
            }else{
                insert(node.right, value);
            }
        }
    };
    
    //Breath first starting left
    // [35,98,9,54,8,22,67,52,97,20]
    //            35 
    //        9           98
    //    8      22     54
    //         20     52 67
    //                     97
    function inOrder( node, buffer ){
        if( node.left !== null ){
            inOrder( node.left, buffer );
        }
        buffer.push( node.value );
        if( node.right !== null ){
            inOrder( node.right, buffer)
        }
    };
    function inOrder2( node, buffer ){
        if( node.right !== null ){
            inOrder2( node.right, buffer)
        }
        buffer.push( node.value );
        if( node.left !== null ){
            inOrder2( node.left, buffer );
        }
    };

    function randRange( min, max ){
        return ~~(Math.random()*max + min);
    };
    
    var unitTest = {
        testInsert:function( array ){
            if( array === undefined ){
                var root = new Node(randRange(0,100));
                for( var i=0,node=null; i<100; i++ ){
                    insert( root, randRange(0,100) );
                }
                return root;
            }else{
                var root = new Node( array[0] );
                for( var i=1; i<array.length; i++ ){
                    insert( root, array[i] );
                }
                return root;
            }
        },
        testMinSort:function(){
            var root = unitTest.testInsert([15,3,7,1,7,0,8,5,44,16,34,67,23]),
                buffer = [];
            inOrder(root,buffer);
            return buffer;
        },
        testMaxSort:function(){
            var root = unitTest.testInsert([35,98,9,54,8,22,67,52,97,20]),
                buffer = [];
            maxSort(root,buffer);
            return buffer;
        }
    }
    return {
        Node:Node,
        insert:insert,
        inOrder:inOrder,
        inOrder2:inOrder2,
        randRange:randRange,
        unitTest:unitTest
    };
}();
