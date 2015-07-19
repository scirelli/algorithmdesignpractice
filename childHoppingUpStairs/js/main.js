function countWays( n ){
    if( n < 0 )  return 0;
    if( n == 0 ) return 1;

    var a = 0,
        b = 0,
        c = 0;

    a = countWays(n -1),
    b = countWays(n -2),
    c = countWays( n - 3 );
    return a + b + c;
}

console.log(countWays(3));
