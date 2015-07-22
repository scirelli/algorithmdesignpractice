package com.scirelli.algorithms;

public class LinkedList {
	private Node head = null;

	public Node arrayToLinkedList( int[] a ){
		Node root = new Node( a[0] ),
		     head = root;
		for( int i=1; i<a.length; i++ ){
			root.nextNode = new Node( a[i]);
			root = root.nextNode;
		}
		return head;
	}
	
	public void setLinkedList( Node n ){
		this.head = n;
	}
	
	public Node partitionAroundValueDumb( Node head, int value ){
		Node lessThan    = null,
			 greaterThan = null,
			 gthead      = null,
			 curNode     = head,
			 pivotNode   = null,
			 pivHead	 = null;
		
		while( curNode != null ){
			if( curNode.val < value ){
				if( lessThan == null){
					lessThan = curNode;
					head = curNode;
				}else{
					lessThan.nextNode = curNode;
					lessThan = curNode;
				}
			}else if( curNode.val > value ){
				if( greaterThan == null ){
					greaterThan = curNode;
					gthead = curNode;
				}else{
					greaterThan.nextNode = curNode;
					greaterThan = curNode;
				}
			}else{
				if( pivotNode == null ){
					pivotNode = curNode;
					pivHead = curNode;
				}else{
					pivotNode.nextNode = curNode;
					pivotNode = pivotNode.nextNode;
				}
			}
			curNode = curNode.nextNode;
		}
		lessThan.nextNode = pivotNode;
		pivotNode.nextNode = gthead;

		return head;
	}
	
	public Node partitionAroundValue( Node node, int value ){
		Node beforeStart = null,
			 beforeEnd  = null,
			 afterStart = null,
			 afterEnd   = null;
		
		while( node != null ){
			if( node.val < value ){
				if( beforeStart == null ){
					beforeStart = node;
					beforeEnd = node;
				}else{
					beforeEnd.nextNode = node;
					beforeEnd = node;
				}
			}else{
				if( afterStart == null ){
					afterStart = node;
					afterEnd = node;
				}else{
					afterEnd.nextNode = node;
					afterEnd = node;
				}
			}
			node = node.nextNode;
		}
		if( afterEnd != null ){
            afterEnd.nextNode = null;
		}
		if( beforeStart == null ){
			return afterStart;
		}
		beforeEnd.nextNode = afterStart;
		return beforeStart;
	}

	public Node findValue( Node head, int val ){
		Node node = head;
		while( node != null && node.val != val ){
			node = node.nextNode;
		}
		return node;
	}
	
	public String toString(){
		return this.toString(head);
	}
	public String toString( Node n ){
		Node node = n;
		StringBuffer sb = new StringBuffer();
		while( node != null ){
			sb.append(node.val);
			sb.append('>');
			node = node.nextNode;
		}
		sb.deleteCharAt(sb.length()-1);
		return sb.toString();
	}
}