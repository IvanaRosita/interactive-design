$(document).ready(function() {
  //Create an event that animates the opacity of the container
    $("#container").click(function(){
      $("#container").animate({
        opacity:'-=.1',
        width:'-=10'});
  });
  $("#Text").dblclick(function(){
    $("#Text").append("<b>Jquery can add text for you</b>");
    });
    $("#red").mouseenter(function(){
      $("#red").delay(500).animate({height:'+=300px'}).delay(2000).animate({height:'-=300px'}).css({"background-color":'white'});
    });
    $("#red").click(function(){
      $("#red").css({"background-color":'red'});
});
    $("#green").click(function(){
        $("#green").css({"background-color":'green'}).fadeOut("slow").delay(1000).fadeIn("slow");
});
$("#blue").click(function(){
$("#blue").css({"background-color":'blue'});
  $("#container").slideUp('slow').delay(2000).slideDown('slow');
  });
  $("#bounce").mouseenter(function(){
    $("#bounce").animate({top:'+=300px'}).delay(3000).animate({top:'-=300px'});
    $("#bounceshadow").animate({opacity:'.7'}).delay(3000).animate({opacity:'0'});
  });
  $("#spin").click(function(){
    $("#spin").css({"opacity":'0'});
    $("#spinreal").animate({opacity:'+=1'});
  });
});
