function Stack(){
    var stack = [];

    this.push = function( val ){
        val = new Node(val);
        var top = peek();
        if( !top || val.value < top.minValue ){
            val.minValue = val.value;
        }else{
            val.minValue = top.minValue;
        }
        stack.push(val);
    };
    this.pop = function(){
        return stack.pop().value;
    };
    this.min = function(){
        return peek().minValue;
    };
    function peek(){
        return stack[stack.length-1];
    }
}

function Node( num ){
    this.value = num;
    this.minValue = Number.MAX_SAFE_INTEGER;
}
