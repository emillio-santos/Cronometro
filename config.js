    
    const btnstart = document.getElementById ( 'btnstart' );
    
    var sec = 0;
    var min = 0;
    var hrs = 0;
    var Interval;
    
    function TimeStart (){
        if( btnstart.textContent == 'Iniciar'){
            Time ()
             Interval = setInterval( Time, 100 );
             btnstart.textContent = 'Parar';
        }else{
            clearInterval( Interval );
            btnstart.textContent = 'Iniciar';
            
        }
    }


    function twoDigito ( digit ){
            if ( digit < 10 ){
                return ( "0" + digit )
            } else {
                return ( digit )
            }
    }

    // function TimeStart (){
    //         Time ()
    //         Interval = setInterval( Time, 100 )
            
    //     }
    function stop (){
            clearInterval( Interval )
        }
    function reset (){

        if( btnstart.textContent == 'Parar'){
            btnstart.textContent = 'Iniciar';
        }
            clearInterval ( Interval )
            sec = 0
            min = 0
            document.getElementById( "Time" ).innerText="00:00:00"
        }
    function Time (){
            sec ++
            if( sec ==60 ){
                min ++
                sec = 0
                if( min == 60 ){
                    min = 0
                    hrs ++
             }
        }


            document.getElementById( "Time" ).innerText = twoDigito ( hrs )+ ":" +twoDigito ( min )+ ":" +twoDigito ( sec )
    }


    btnstart.addEventListener ( 'click', TimeStart );