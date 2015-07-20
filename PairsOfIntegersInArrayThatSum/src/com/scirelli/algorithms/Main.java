package com.scirelli.algorithms;

import java.util.HashMap;

public class Main {
	
	public static void findPairsOfSum( int[] a, int sum ){
		HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
		
		int diff = 0;
		for( int i : a ){
			diff = sum - i;
			if( map.containsKey(diff) ){
				System.out.println( "(" + i + "," + diff + ")" );
			}else{
				map.put(i,diff);
			}
		}
	}

	public static void main(String[] args) {
		/*
		 *  sum = x + y
		 *  sum - x = y
		 *  sum - y = x
		 * 
		 * 1, 2, 5 , 8, 9, 15, 6 
		 * 
		 *  sum = 7
		 *  
		 *  6  -> 1
		 *  5  -> 2
		 *  2  -> 5
		 *  -1 -> 8
		 *  -2 -> 9
		 *  -8 -> 15
		 */
		int[] a = new int[]{1,2,5,8,9,15,6};
		for( int i : a ){
			System.out.print("Pairs for " + i + " \n" );
            Main.findPairsOfSum(a, i);
		}
	}
}