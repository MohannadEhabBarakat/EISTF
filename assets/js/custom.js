function scrl(){
        
        var h = $(window).scrollTop();
        if( h === 0) {
            show_menu();
            $('body').attr('data-scroll','f');
            $("nav").css({position:'initial',margin:"auto", float:"none",'margin-top':"50px"});
        }
        else if(( h >= 20) & $('body').attr('data-scroll')=='f'){
             menu_magic();
            $('body').attr('data-scroll','t');
         }

    }   ;
    
    function menu_magic(){
        $("#MM").fadeOut(function(){
            $("MM").css("width","0");
            $("nav").animate({width: '100px'});
            $("nav").css({float:'left','margin-left': '70px', position:'fixed', 'background-color':"darkgray"});
            $("#logo-div").css({border:"2px solid darkgray"});
            $("#expand").fadeIn();
            $("#expand").css({'margin-top': '40px', 'font-size': '40'})
            $('#expand').attr('data-clicked', 'false');
        });   
    }
    
    function show_menu(){
        $('#expand').attr('data-clicked', 'true');
        $("#expand").fadeOut();
        $("nav").animate({width: '70%'},function(){
            $("nav").css({'background-color':"#0d0d4a"});
            $("#logo-div").css({border:"2px solid #0d0d4a"});
            $("#MM").css("width","80%");
            $("#MM").fadeIn();
        });
        
    }
    