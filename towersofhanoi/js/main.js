function moveDisks( disk, origin, destination, buffer ){
    if(disk <= 0 ) return;

    moveDisks( disk-1, origin, buffer, destination );
    moveTop( origin, destination );
    moveDisks( disk-1, buffer, destination, origin );
}

function moveTop( origin, destination ){
    destination.push(origin.pop());
}

var aTowers = [[],[],[]];
var disk = 3;

for( var i=disk-1; i>=0; i-- ){
    aTowers[0].push(i);
}
aTowers[0].name = 'Origin';
aTowers[1].name = 'Buffer';
aTowers[2].name = 'Destination';

moveDisks( disk, aTowers[0], aTowers[2], aTowers[1] );

/*
      __                 |                 |
     ____                |                 |
   _________             |                 |
_______________          |                 |



                         |                 |
     ____                |                 |
   _________             |                 |
_______________          __                |


                         |                 |
                         |                 |
   _________             |                 |
_______________          __              ____



                         |                 |
                         |                 |
   _________             |                __
_______________          |               ____



                         |                 |
                         |                 |
                         |                __
_______________     _________            ____


                         |                 |
                         |                 |
     __                  |                  
_______________     _________            ____


                         |                 |
                         |                 |
     __               ____                 | 
_______________     _________              | 


                         |                 |
                       __                  |
                      ____                 | 
_______________     _________              | 
*/
