function Permuataions( str ){
    var used  = [],
        out   = [],
        inStr = str;
    
    this.permute = function(){
        if(out.length == inStr.length ){
            console.log( out.join('') );
            return;
        }

        for( var i=0; i< inStr.length; i++ ){
            if( used[i] ) continue;
            out.push( inStr.charAt(i) );
            used[i] = true;
            this.permute();
            used[i] = false;
            out.pop();
        }
    }

}

var p = new Permuataions('abcd');
p.permute();
