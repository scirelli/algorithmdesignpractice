package com.cirelli.algorithms;

public class SignOfANumber {
	
	public static int sign( int n ){
		int sign = flipBit(n>>31) & 0x1;//sign bit will be 1 if negative 0 if positive. Flip that bit so that if negative you'll get 0
		return sign;
	}
	
	public static int flipBit( int n ){
		return n^1;
	}
}