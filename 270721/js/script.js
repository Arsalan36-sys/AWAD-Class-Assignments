$(function() {

   // $("p").css("display", "none");

   // var redBox = $(".red-box");
   // console.log(redBox.css("width")); //80px
   // console.log(redBox.width()); // 80
   // redBox.css("width", "+=20px");

   // redBox.css("user-select", function() {
   //    // [some logic here...]
   //    return "none";
   //  });

   // $("a").addClass("fancy-link");

   // $("p:first").addClass("large emphasize");

   // $("li li").addClass(function(index){
   //    $(this).addClass("item-" + index);
   // });

   // $("div").addClass(function(index, currentClasses) {
   //    if (currentClasses.indexOf("dummy") !== -1) {
   //       return "red-box";
   //     } 
   // });

   // $(".green-box").removeClass("green-box").addClass("blue-box");


   /////////////////////////////////////////////////////////////
   
   $("#btn-click").click(function(event){
      console.log(event);
      alert("Thanks!");
   });

   $(".red-box").click(function() {
      var currentOpacity = $(this).css("opacity");
      if(currentOpacity > 0.2){
         $(this).fadeTo(500, currentOpacity - 0.2);
       } else {
         $(this).fadeTo(1000, 1);
       }
   });

   // hover event

  $("#btn-hover").hover(function(){
    alert("Button was hovered!")
  });
  
   $(".green-box").hover(function(){
    $(this).text("I was hovered :)")
   });

   var blueBox = $(".blue-box");
   blueBox.mouseenter(function(){
      $(this).stop().fadeTo(500, 0.7);
   });
   blueBox.mouseleave(function(){
      $(this).stop().fadeTo(500, 1);
   });
  
});