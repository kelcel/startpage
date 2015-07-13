$(document).ready(function(){
    var oheight = $(".block").height();      //original block height
    var ocolor = $(".main").css("background-color");  //original border color

    $(".block").click(function(){
        if ( $(this).find(".main").height() > 0 )
        {
            var color = $(this).css("background-color");
            $(this).css({"border-color": color});
            $(this).find(".main").animate({height: "0px"});
        }
        else
        {
            $(this).find(".main").animate({height:oheight},
                { complete: function()
                    { $(this).parent().css({"border-color":"black"}); }
                });
       }
    });
});
