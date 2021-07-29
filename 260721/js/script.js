$(function() {
    // $(".red-box").fadeTo(1000, 0.5);
    // $(".green-box").delay(1000).fadeTo(1000, 0.5);
    // $(".blue-box").delay(2000).fadeTo(1000, 0.5).fadeTo(1000, 1.0).delay(1000).fadeOut();

    // $(".red-box").fadeTo(1000, 0.5, function(){
    //   $(".green-box").fadeTo(1000, 0.5, function(){
    //     $(".blue-box").fadeTo(1000, 0.5);
    //   });
    // })

    //CSS Selectors
    // $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
    // $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("input[type='email']").css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("h1, p, input").css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)");
    // $("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)");

    // https://www.w3schools.com/jquery/jquery_ref_selectors.asp
    // https://www.w3schools.com/js/js_htmldom.asp

    // $("ul ul:first").append("<li>New sub item</li>");
    // $("ul ul:first").prepend("<li>New sub item</li>");
    // $("<li>Very first sub item</li>").prependTo("ul ul:first");
    // $(".red-box").after("<div class='red-box'>New Red</div>");
    // $(".blue-box").before("<div class='blue-box'>New Blue</div>");

      // $(".green-box").after(function() {
      //   return "<div class='green-box'>New Green</div>";
      // });
      ///////////////////////hide paragraph or content////////////////// 
      // $( "#list" ).after( $("p" ));
      // $("#list").before($("p"));
      // $("p").css("display" , "none ");
      ///////////////height and width increase or decrease/////////////////
      // var red-box = $(".red-box");
      // console.log(redbox.css("width"));
      // console.log(redbox.width());
      // redbox.css("width" , "+=20");
      // console.log(redbox.css("height"));
      // console.log(redbox.height());
      // redbox.css("height" , "-=20");
      ////////////////// background color////////////////
      // redbox.css("background-color" , "orange");
      ///////////////font size//////////////////////////
      // console.log(p.css("font-size" ));
      // console.log(p.font-size());
      // $("#p").css("fontSize", 20);
///////////////////////hide selection in content///////////////////
      // red-box.css("user-select", function(){
      // return "none";
      /////////////////////addClass/////////////////////
      $("a").addClass("fancy link");
      /////////////for first paragraph to add or remove class///////////
      $("p:first").addClass("className");
      ////////////////////find Class and return others property ////////////////////
      $("div").addClass(function(index, currentClass){
        if(currentClass.indexOf("dummy") !==-1){
          return "red-box"
        }
      });
      /////////////////////same above for removeClass //////////////////////
      });
