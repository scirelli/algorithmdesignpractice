package com.scirelli.algorithms;

import java.util.ArrayList;
import java.util.Collections;

public class Main {
	
	public static int randRange( int min, int max ){
		double d = (Math.random()*(double)max) + (double)min;
		return (int)d;
	}
	public static int rand5(){
		return randRange(0, 6);
	}
	
	public static int rand7( int num ){
		if(num < 0 || num > 5) return -1;
		float n = (((float)num)/5.f);
		return (int)(n*6.f);
	}
	public static int rand7(){
		int num = 0 ;
		while(true){
			num = (rand5()+rand5()) * 5;
			if( num < 21 ){
				return num%7;
			}
		}
	}

	public static void main(String[] args) {
		ArrayList<Integer> al = new ArrayList<Integer>();
		ArrayList<Integer> rl = new ArrayList<Integer>();

		int rand = 0;
		int[] freq = new int[7];
		int[] freq2 = new int[7];
		for( int i=0; i<10000; i++){
            rand = rand7();
            freq[rand]++;
            al.add(rand);

            rand = randRange(0,7);
            freq2[rand]++;
            rl.add(rand);
			//System.out.println( rand );
		}
		
        int k=0;
		for( int i : freq ){
            System.out.println("Number " + k++ + "(" + i + ")" );
		}

		System.out.println('\n');

		k=0;
		for( int i : freq2 ){
            System.out.println("Number " + k++ + "(" + i + ")" );
		}
	}
}