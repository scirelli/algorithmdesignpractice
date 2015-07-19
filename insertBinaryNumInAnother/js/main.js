// You are given two 32-bit numbers, N and M, and two bit positions, i and j. Write a method
// to insert M into N such that M starts at bit j and ends at bit i. You can assume that the bits
// j through i have enough space to fit all of M. That is, if M = 10011, you can assume that there are at least 5 bits between
// j and i. You would have not, for example j=3 and i=2, because M could not fully fit between bit 3 and bit 2.
// Example:
// Input: N = 10000000000, M 10011, i = 2, j = 6
// Output: N = 10001001100

function updateBits( n, m, i, j ){
                   //Comments use example: N = 10000000000, M 10011, i = 2, j = 6
    var nClearMask = ~0; //11111111111
    //So clear lower bits up to the end position of M, which is j
    nClearMask = mask << j+1;//11110000000
    //Put 1's up till i
    var right = ((~0)<<i)+(~0);//00000000011
    //Combined to get bits i through j as zeros
    nClearMask = mask | right;//00000000011
                        //11110000000
                        //11110000011
    //Clear those bits in N
    n = n & nClearMask; //n    = 10000000000 
                  //nClearMask = 11110000011
                  //   & = 10000000000
    m = m << i;//m   = 00000010011
               //<<i = 00001001100
    n = n | m;// n = 10000000000
              // m = 00001001100
              // | = 10001001100
    return n;
}

function updateBits( n, m, i, j ){
    //Comments use example:
    // Input: n = 10000000000, m 10011, i = 2, j = 6
    //
    //First create a nClearMask that can clear bits 2 through 6 in n
    //Get all 1's
    var nClearMask = ~0; //  00000000000
                         //~ 11111111111
    //Clear the lower bits up to where m will be
    nClearMask = nClearmask << j+1;  //mask = 11111111111
                                     // <<7 = 11110000000
    //Now we need to put 1's into the spots below where m will be.
    //So we need a new nClearMask for that.
    var rMask = (1<<i)-1; //  1 = 00000000001
                          //<<i = 00000000100
                          // -1 = 00000000011

    nClearMask = rightMask & nClearMask; //mask  = 11110000000
                                         //rMask = 00000000011
                                         //    | = 11110000011
    n = n & nClearMask; //n    = 10000000000
                        //mask = 11110000011
                        //   & = 10000000000
    //Now shift m up by i
    m = m << i; //m    = 00000010011
                // <<i = 00001001100

    n = n | m; //n = 10000000000
               //m = 00001001100
               //| = 10001001100
   return n;
}
