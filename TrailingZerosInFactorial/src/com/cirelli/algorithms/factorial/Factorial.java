package com.cirelli.algorithms.factorial;

public class Factorial {

	public static long factorial( long n ){
		if( n <= 1 ) return 1;
		return factorial(n-1) * n;
	}
	
	public static int factorsOf5( int i ){
		int count = 0;
		while( i % 5 == 0){
			count++;
			i /= 5;
		}
		return count;
	}
	
	public static int countFactZeros( int num ){
		int count = 0;
		for( int i = 2; i<=num; i++ ){
			count += factorsOf5(i);
		}
		return count;
	}
	
	public static int countFactZeros2( int num ){
		int count = 0;
		if( num < 0 ){ return -1; }
		
		for( int i=5; num/i > 0; i *= 5 ){
			count += num/i;
		}
		return count;
	}
}