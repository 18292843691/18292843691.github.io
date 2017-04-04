var _click_count = 0;
$("body").bind("click", function(e) {
    //var n=Math.round(Math.random()*100);
    var $i = $("<b>").text("+" + (++_click_count)); 
    var x = e.pageX,
        y = e.pageY; 
    $i.css({
        "z-index": 99999,
        "top": y - 15,
        "left": x,
        "position": "absolute",
        "color": "#00BCF3"
    });
    $("body").append($i);
    $i.animate({
            "top": y - 180,
            "opacity": 0.5
        },
        1500,
        function() {
            $i.remove();
        }
    );
    e.stopPropagation();
});