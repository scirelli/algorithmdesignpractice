package com.cirelli.algorithm;

public class ArryMidSort {
	
	void findUnsortedSequence( int[] array ){
		int end_left    = findEndOfLeftSubsequnce(array),
			start_right = findStartOfRightSubsequence(array);
		
		if( end_left == array.length-1 ) return;
		
		int min_index = start_right;
		int max_index = end_left;
		//Scan the middle and right half to find the smallest number
		//Scan the middle and left half to find the largest number
		for( int i=end_left+1; i< start_right-1; i++ ){
			if( array[i] < array[start_right] ) min_index = i;
			if( array[i] > array[end_left] ) max_index = i;
		}
		
		int left_index = shrinkLeft(array, min_index, end_left);
		int right_index = shringRight(array, max_index, start_right);
		
		System.out.println( "Left: " + left_index + " Right:" + right_index );
	}
	
	int findEndOfLeftSubsequnce( int[] array ){
		for( int i=1; i<array.length; i++ ){
			if( array[i] < array[i-1] ){
				return i-1;
			}
		}
		return array.length -1;
	}
	
	int findStartOfRightSubsequence( int[] array ){
		for( int i=array.length-2; i>=0; i-- ){
			if( array[i] > array[i+1] ){
				return i+1;
			}
		}
		return 0;
	}
	
	int shrinkLeft( int [] array, int min_index, int start ){
		for( int i=start-1; i>=0; i-- ){
			if( array[min_index] >= array[i] ) return i+1;
		}
		return 0;
	}
	int shringRight( int[] array, int max_index, int start ){
		for( int i=start; i<array.length; i++ ){
			if( array[max_index] <= array[i] ) return i-1;
		}
		return array.length-1;
	}
}
