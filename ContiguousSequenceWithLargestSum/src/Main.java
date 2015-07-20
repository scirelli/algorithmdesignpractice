
public class Main {

	private static int largestSum( int [] array ){
		int max_sum = 0,
			sum     = 0;
		for( int i=0; i<array.length; i++ ){
			sum += array[i];
			if( max_sum < sum ){
				max_sum = sum;
			}else if( sum < 0 ){
				sum = 0;
			}
		}
		return max_sum;
	}

	public static void main(String[] args) {
		int[] a = new int[]{2,-8,3,-2,4,-10};
		System.out.println(largestSum(a));
	}

}
