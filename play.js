 $("button").on("click",function(){
    let audio1 = new Audio("./hppy (mp3cut.net).mp3");
    audio1.play();
    $(this).text("STOP MUSIC");
    
    $(this).on("dblclick",function(){
        $(this).text("PLAY MUSIC");
       
        audio1.pause();
    })
 })
    
           
       
 





