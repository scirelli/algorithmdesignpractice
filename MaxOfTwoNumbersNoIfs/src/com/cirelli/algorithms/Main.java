package com.cirelli.algorithms;

public class Main {
	public static int max( int a, int b ){
		// c = a - b
		// If b is larger c will be negative. So we should get rid of b
		// Otherwise we get rid of a
		int c = a - b,
			k = SignOfANumber.sign(c),//If c is negative sign() returns 0. 
			q = SignOfANumber.flipBit(k);

		return a*k + b*q;
	}
	public static void main(String[] args) {
		System.out.println( max( 10, 20 ) );
	}
}
