function sort( stack, tmpStack ){
    var tmpItem = null,
        peekItem = null;

    while( stack[stack.length-1] !== null && stack[stack.length-1] !== undefined ){
        tmpItem = stack.pop();
        peek    = tmpStack[tmpStack.length-1] || 0; 

        if( tmpItem >= peek ){
            tmpStack.push(tmpItem);
        }else{
            while( peek > tmpItem && tmpStack.length ){
                stack.push(tmpStack.pop());
                peek = tmpStack[tmpStack.length-1] || 0; 
            }
            tmpStack.push(tmpItem);
        }
    }
}

var unSorted = [3,9,6,2,10,1],
    tmpStack = [];

sort( unSorted, tmpStack );
