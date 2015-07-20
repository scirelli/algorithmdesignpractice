package com.cirelli.algorithms;

public class Main {

	public static void main(String[] args) {
		int i1= (int)(Math.random() * 100.0),
			i2= (int)(Math.random() * 100.0);
		
		System.out.println( "i1 = " + i1 );
		System.out.println( "i2 = " + i2 );

		i1 = (i1+i2);
		i2 = i1-i2;
		i1 = i1-i2;
		
		System.out.println( "i1 = " + i1 );
		System.out.println( "i2 = " + i2 );
		
		//---- Also ----
		System.out.println( "\n\ni1 = " + i1 );
		System.out.println( "i2 = " + i2 );
		i1 = i1 - i2;
		i2 = i1 + i2;
		i1 = i2 - i1;
		System.out.println( "i1 = " + i1 );
		System.out.println( "i2 = " + i2 );
	}

}
