//You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's
// digit is at the head of the list. Write a function that adds two numbers and returns the sum as a linked list/
function sumLL( num1, num2 ){
    return reversetIntLLToInt(num1) + reversetIntLLToInt(num2);
}

function llIntToInt( ll ){
    var rtn = ll.value;
    var next = ll.next;
    while( next ){
        rtn *= 10;
        rtn += next.value;
        next = next.next
    }
    return rtn;
}
function reversetIntLLToInt( ll ){
    var rtn = ll.value;
    var next = ll.next;
    var cnt = 1;
    while( next ){
        rtn += next.value * Math.pow(10,cnt++);
        next = next.next
    }
    return rtn;
}

function node( num, nextNode ){
    this.value = num;
    this.next = nextNode || null;
}

console.log( sumLL(
    new node( 7, new node( 1, new node( 6 ) ) ),
    new node( 5, new node( 9, new node( 2 ) ) )
) );
