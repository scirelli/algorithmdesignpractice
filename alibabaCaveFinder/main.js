#!/usr/bin/env node
/*
Given a list of guesses and a starting position determine if the list of guesses will find Alibaba in a cave
system of a given length.
The cave system is an array of some length.
Alibaba is at an index of this array.
For ever wrong guess Alibaba must move left or right one position.
Alibab can see the next guess.

function canAliMakeAMistake(aliPos, guessIndex, guesses, caveLength) {
    if(guessIndex >= guesses.length) return false;
    if(aliPos < 0) aliPos = 1;
    if(aliPos >= caveLength) aliPos = caveLength - 2;
    if(aliPos === guesses[guessIndex]) return true;
    return canAliMakeAMistake(aliPos-1, guessIndex+1, guesses, caveLength) || canAliMakeAMistake(aliPos+1, guessIndex+1, guesses, caveLength);
}
*/

function canAliAvoid(aliPos, guesses, caveLength) {
    return !findAll(aliPos, 0, guesses, caveLength);

    function findAll(aliPos, guessIndex, guesses, caveLength) {
        if(guessIndex >= guesses.length) return false;
        if(aliPos < 0) aliPos = 1;
        if(aliPos >= caveLength) aliPos = caveLength - 2;
        if(aliPos === guesses[guessIndex]) return true;
        return canAliAvoid(aliPos-1, guessIndex+1, guesses, caveLength) && canAliAvoid(aliPos+1, guessIndex+1, guesses, caveLength);
    }
}

let tests = [
    {
        startPos:   0,
        caveLength: 10,
        guesses:    [1, 0, 2, 3, 4, 5, 6],
        expected:   true
    },
    {
        startPos:   0,
        caveLength: 10,
        guesses:    [0, 1, 2, 3, 4, 5, 6],
        expected:   false
    },
    {
        startPos:   0,
        caveLength: 10,
        guesses:    [0],
        expected:   false
    },
    {
        startPos:   0,
        caveLength: 10,
        guesses:    [1, 0],
        expected:   true
    },
    {
        startPos:   1,
        caveLength: 10,
        guesses:    [0, 1],
        expected:   true
    },
    {
        startPos:   0,
        caveLength: 10,
        guesses:    [1, 1, 1],
        expected:   false
    }
];

console.log('canAliAvoid');
tests.forEach((test)=> {
    console.log(canAliAvoid(test.startPos, test.guesses, test.caveLength));
});
