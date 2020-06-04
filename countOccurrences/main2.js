#!/usr/bin/env node
/*
Count occurances in array
*/
(()=>{
    const SIZE = 1000000
      , data = Array(SIZE).fill(0).map(()=>~~(Math.random() * SIZE));

    const countOccurrences = function(arr, val) {
        return arr.reduce((acc,elem)=>{
            return (val === elem ? acc + 1 : acc)
        }
        , 0);
    };

    function countOccurrencesBetter(arr, val) {
        var count = 0;
        for (var position = 0, offset; (offset = arr.indexOf(val, position)) != -1; position = offset + 1)
            count++;
        return count;
    }

    function freq(arr) {
        let mem = {};

        for (let i = 0, l = arr.length, v; i < l; i++) {
            v = arr[i];

            if (mem[v])
                mem[v]++;
            else
                mem[v] = 1;
        }

        return mem;
    }
    let s, e, start,end,m;
    /*
    s = performance.now();
    for (let i = 0; i < SIZE; i++)
        countOccurrencesBetter(data, i);
    e = performance.now();
    console.log((e - s) + 'ms');

    s = performance.now();
    let m = freq(data)
    for (let i = 0; i < SIZE; i++)
        m[i];
    e = performance.now();
    console.log((e - s) + 'ms');
    */
    start = performance.now();
    m = freq(data)
    end = performance.now() - start;

    start = performance.now();
     for(let i=0; i<SIZE; i++)
        result = countOccurrencesBetter(data, 5);
    console.log('using indexof', performance.now() - start);

    start = performance.now();
    for(let i=0; i<SIZE; i++)
        result = countOccurrences(data, 5);
    console.log('plainloop', performance.now() - start);

    start = performance.now();
    for(let i=0; i<SIZE; i++)
        result = m[5];
    console.log('memory', (performance.now() - start)+end);
})();
