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
		int[] a		  = new int[10];
		LinkedList ll = new LinkedList();
		Node n        = null;
		int pivot     = randInt();
		
		fillArray(a);
        n = ll.arrayToLinkedList(a);	
		n = ll.partitionAroundValue(n, pivot);
		System.out.println("Parted around " + pivot + " " + ll.toString(n));
	}
}