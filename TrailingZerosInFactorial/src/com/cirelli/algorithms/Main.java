package com.cirelli.algorithms;

import com.cirelli.algorithms.factorial.Factorial;

public class Main {

	public static void main(String[] args) {
		int number = 20;
		System.out.println( Factorial.factorial(number) );
		System.out.println( "Trailing zeros: " + Factorial.countFactZeros(number));
		System.out.println( "Trailing zeros: " + Factorial.countFactZeros2(number));
	}
}