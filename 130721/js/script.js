// $(function () {
//     // $(".red-box").fadeOut(2000);
//     // $(".red-box").fadeOut();
//     // $(".red-box").fadeOut("slow");
//     // $(".red-box").fadeOut("fast");

//     // $(".red-box").fadeOut(2000);
//     // $(".green-box").fadeOut(2000);
//     // $(".red-box").fadeIn(1000);
//     // $(".red-box").fadeTo(1000, 0.5);

//     // $(".red-box").fadeTo(3000, 0.2);
//     // $(".gree-box").fadeTo(2000, 0.5);
//     // $(".blue-box").fadeTo(1000, 0.8);

//     // $(".blue-box").fadeToggle();
//     // $(".blue-box").fadeToggle();
// $(".blue-box").delay(2000).fadeTo(1000, 0.5).delay(3000).fadeOut(1000, 0.5);
// $(".red-box").fadeOut(1000, 0.5);
// $(".green-box").delay(1000).fadeTo(1000, 0.5);
// $(".blue-box").delay(2000).fadeTo(1000, 0.5);

// }); 

// $(function(){
//     $(".red-box").fadeTo(1000, 0.5, function(){
//         $(".green-box").delay(1000).fadeTo(1000, 0.5, function(){
//             $(".blue-box").delay(1000).fadeTo(1000, 0.5, function(){
//                 $(".blue-box").animate({
//                     "margin-left": "200px"
//                 }, 1000, "linear", function(){
//                     $(".blue-box").animate({
//                         "margin-left": "0"
//                     }, 1000, "linear", function(){
//                         $(".blue-box").slideUp(1000, function(){
//                             $(".blue-box").slideDown(1000, function(){
//                                 $(".blue-box").slideToggle()
//                             });
//                         });
//                     }); 
//                 });
//             });
//         });
//     });
// });

$(function() {
    $(".red-box").fadeTo(1000, 0.5, function(){
        $(".green-box").delay(1000).fadeTo(1000, 0.5, function(){
            $(".blue-box").delay(1000).fadeTo(1000, 0.5, function(){
                $(".blue-box").animate({
                    "margin-left": "200px"
                }, 1000, "linear", function(){
                    $(".blue-box").animate({
                        "margin-left": "0"
                    }, 1000, "linear")
                })
            })
        })
    })
})

