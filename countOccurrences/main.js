#!/usr/bin/env node
/*
Count occurances in array
*/
(()=>{
    const SIZE = 100000
        , data = Array(SIZE).fill(0).map(()=>~~(Math.random() * SIZE));

    function countOccurrencesBetter(arr, val) {
        var count = 0;
        for (var position = 0, offset; (offset = arr.indexOf(val, position)) !== -1; position = offset + 1)
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
    let s, e;

    s = performance.now();
    for(let i=0; i<SIZE; i++) countOccurrencesBetter(data, i);
    e = performance.now();
    console.log((e-s) + 'ms');

    s = performance.now();
    let m = freq(data);
    for(let i=0; i<SIZE; i++) m[i];
    e = performance.now();
    console.log((e-s) + 'ms');
})();

