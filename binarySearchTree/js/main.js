
function randRange( min, max ){
    return ~~(Math.random()*max + min);
};

function streamTo( tracker, interval ){
    setInterval( function(){
        tracker.track( randRange(0, 1000000) );
    }, interval || 1000 );
}

function Tracker(){
    var root      = null,
        insertCnt = 0;

    function Node( val ){
        this.value = val || null;
        this.left  = null;
        this.right = null;
        this.leftSize = 0;
    }

    function insert( root, val ){
        if( root == null ) return;

        if( val <= root.value ){
            if( root.left ){
                root.leftSize++;
                insert( root.left, val );
            }else{
                root.left = new Node(val);
            }
        }else{
            if( root.right ){
                insert( root.right, val );
            }else{
                root.right = new Node(val);
            }
        }
    }
    function balanceTree( root ){
    }
    function height( node ){
        return 0;
    }
    function rightRotate( node ){
    }
    function leftRotate( node ){
    }

    this.track = function( int ){
        if( !root ){
            root = new Node(int);
        }else{
            insert( root, int );
        }
        insertCnt++;
        if( insertCnt%100 == 0 ){
            balanceTree(root);
        }
    }

    this.getRankOfNumber = function( num ){
        return getRank( root, num );
    }

    function getRank( root, num  ){
        if( root == null ) return;
        if( root.value == num ){ 
            return root.leftSize;
        }else if( num < root.value ){
            if( root.left == null ){
                return -1;
            }else{
                return getRank( root.left, num );
            }
        }else{
            var right_rank = root.right == null ? -1 : getRank(root.right, num);
            if( right_rank == -1 ){
                return -1;
            }else{
                return root.leftSize + 1 + right_rank;
            }
        }
    }
}

var tracker = new Tracker();

//streamTo( tracker );
