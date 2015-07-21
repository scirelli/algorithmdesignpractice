/****************************************************
 * Convert a Binary Search Tree to a doublly linked
 * list.
 ****************************************************/
function binarySearchToDoubleLinkedList(root){
    if( !root ) return null;

    var list1 = binarySearchToDoubleLinkedList(root.left);
    var list2 = binarySearchToDoubleLinkedList(root.right);
    
    if( list1 != null ){
        concatNodes( list1.tail, root );
    }
    if( list2 != null ){
        concatNodes( root, list2.head );
    }
    return new ListNode( /*Head*/ list1 == null ? root : list1.head,
                         /*Tail*/ list2 == null ? root : list2.tail );
}
function concatNodes( node1, node2 ){
    node1.right = node2;
    node2.left  = node1;
}
function ListNode( head, tail ){
    this.head = head;
    this.tail = tail;
}

var array = [100,50,25,75,150,125,175,110],
    root = BinarySearchTree.insertArray( array );
var node = binarySearchToDoubleLinkedList( root, null );
node = node.head;
//Travers to the right
while( node ){
    document.write( node + "&nbsp;" );
    node = node.right;
}
