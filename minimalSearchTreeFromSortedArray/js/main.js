function createMinimalBST( arr, start, end ){
    if( start > end ) return null;

    var mid  = ~~((start + end)/2);
    var node = new Node(arr[mid]);

    node.left  = createMinimalBST(arr, start, mid-1);
    node.right = createMinimalBST( arr, mid+1, end );
    return node;
}

function createMinBST( arr ){
    return createMinimalBST( arr, 0, arr.length-1 );
}

function Node( val, left, right ){
    this.val   = val;
    this.left  = left;
    this.right = right;
}
