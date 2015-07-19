package com.scirelli.practice.packedPixels;

public class Main {
    //                                                         28,     55
	public static void drawLine( byte[] screen, int width, int x1, int x2, int y ){
		int bytesPerRow = width/8;
		int x1offsetIntoByte      = x1%8, //4
			x1FirstFullByte       = x1/8; // 3.5
		
		//If the mod is not 0 then we know we are not byte aligned. Example: We might be 3 bits/pixels into the byte. The line starts mid byte.
		if( x1offsetIntoByte != 0 ){
			x1FirstFullByte++;
		}

		int x2offsetFromEndofByte = x2%8, //7
			x2LastFullByte        = x2/8; //6.875
		//If the mod is not 0 then we know we are not byte aligned. Example: We might be 3bits/pixels into the next byte at the end of the line.
		if( x2offsetFromEndofByte != 0 ){
			x2LastFullByte--;
		}
		
		for( int xn=x1FirstFullByte; xn<=x2LastFullByte; xn++ ){
			int pos = xn + (y*bytesPerRow);
			screen[pos] = (byte)0xFF;
		}
		
		byte start_mask = (byte)(0xFF >> x1offsetIntoByte); //     1111 1111
												            // >>4 0000 1111
		byte end_mask   = (byte)~(0xFF >> x2offsetFromEndofByte);//     1111 1111
												 			    // >>7 0000 0001
															    // ~   1111 1110
		if( x1offsetIntoByte != 0 ){
			int pos = (x1FirstFullByte-1) + (y*bytesPerRow);
			screen[pos] |= start_mask;
		}
		if( x2offsetFromEndofByte != 0 ){
			int pos = (x2LastFullByte+1) + (y*bytesPerRow); 
			screen[pos] |= end_mask;
		}
	}

	public static void main(String[] args) {
		int widthInPixels  = 64;
		int heightInPixels = 64;
		byte[] b = new byte[(widthInPixels/8) * (heightInPixels/8)];
		Main.drawLine( b, widthInPixels, 28, 56, 28 );
	}
}