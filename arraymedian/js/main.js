// Numbers are randomly generated and stored into an (expanding) array. How would you keep track of the median?
var app = (function(){
    var MAX_VALUE = 1000,
        MIN_VALUE = 0;
    var expandingArray = [],
        median = new Median();
    
    setInterval(function(){
        insert( Heap.randRange( MIN_VALUE, MAX_VALUE ) );
    }, 1000);

    function insert( int ){
        console.log('Insert: ' + int );
        expandingArray.push( int );
        console.log( 'Array: [' + expandingArray.join() + ']' );
        median.insert( int );
        console.log( 'Median: ' + median.getMedian() );
    }

    function Median(){
        this.minHeap = [];
        this.maxHeap = [];
        this.curMedian = 0;

        this.insert = function( int ){
            if( int > this.curMedian ){
                this.minHeap.push(int);
                Heap.buildMinHeap( this.minHeap );
            }else{
                this.maxHeap.push(int);
                Heap.buildMaxHeap( this.maxHeap );
            }
            this.curMedian = this.median();
        }

        this.median = function(){
            if( this.minHeap.length == this.maxHeap.length ){
                return (this.minHeap[0] + this.maxHeap[0])/2;
            }else if( Math.abs(this.minHeap.length - this.maxHeap.length) == 1 ){
                if( this.minHeap.length > this.maxHeap.length ){
                    return this.minHeap[0];
                }else{
                    return this.maxHeap[0];
                }
            }else{
                if( this.minHeap.length > this.maxHeap.length ){
                    this.maxHeap.push(this.minHeap.shift());
                }else{
                    this.minHeap.push(this.maxHeap.shift());
                }
                Heap.buildMaxHeap(this.maxHeap);
                Heap.buildMinHeap(this.minHeap);
                return this.median();
            }
        }

        this.getMedian = function(){
            return this.curMedian;
        }
    }
})();
