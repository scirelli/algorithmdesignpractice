package com.scirelli.algorithms;

public class Main {
	public static int randRange( int min, int max ){
		return (int) ( Math.random()*(((double)max-(double)min)+1) + (double)min );
	}
	public static int randRange( int min ){
		int max = Integer.MAX_VALUE;
		return Main.randRange(min, max);
	}
	public static int randInt( ){
		return Main.randRange(0);
	}
	public static void fillArray( int[] a ){
		Main.fillArray(a, 0, Integer.MAX_VALUE );
	}
	public static void fillArray( int[] a, int min, int max ){
		for( int i=0; i<a.length; i++ ){
			a[i] = randRange(min,max);
		}
	}
	
	public static void main(String[] args) {
		int[] a		   = new int[10],
		      b        = new int[5];
		LinkedList ll  = new LinkedList(),
				   ll2 = new LinkedList();
		Node n         = null,
			 n2        = null;
		
		fillArray(a);
		fillArray(b);
		
		n  = LinkedList.arrayToLinkedList(a);
		n2 = LinkedList.arrayToLinkedList(b);
		
		//Create a loop
	    LinkedList.tail(n).nextNode = n2;
	    LinkedList.tail(n2).nextNode = n2;
	    
	    if( LinkedList.hasLoop(n) ){
	    	System.out.println("There is a loop.");
	    }else{
	    	System.out.println("There is no loop.");
	    }
	    
	    
        System.out.println("Let's find the start of the loop.");
        Node c = LinkedList.startOfLoop(n);
        System.out.println( "The start of the loop is at node '" + c + "'" );
        System.out.println( "Which is where we created it at '" + n2 + "'" );
	}
}