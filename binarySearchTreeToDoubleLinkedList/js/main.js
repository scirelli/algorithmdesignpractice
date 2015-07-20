var array = [100,50,25,75,150,125,175,110],
    root = BinarySearchTree.insertArray( array );

function binarySearchToDoubleLinkedList(root, parent){
    if( !root ) return;

    binarySearchToDoubleLinkedList(root.left, root);
    root.right = parent;
    binarySearchToDoubleLinkedList(root.right, root);
    root.
}

binarySearchToDoubleLinkedList( root, null );
document.write( root );
