package com.scirelli.algorithms;

public class Node {
	public Node( int val ){
		this.set(val, null);
	}
	public Node( Node n ){
		this.set(0, n);
	}
	public Node( int val, Node n ){
		this.set(val, n);
	}
	private void set( int val, Node n ){
		this.val = val;
		this.nextNode = n;
	}
	public int val = 0;
	public Node nextNode = null;
}