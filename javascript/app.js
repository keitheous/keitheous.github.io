$(document).ready(function(){

  console.log("Hello there. Go easy on my codes. I'm still learning =)");

  var thought;
  var timeBubble = false;
  var thoughtsArray = [
    "Job applications!";
  ];

  var animate = function(){

    $("#cloudOne").delay(1000).animate({top: "+=10"}, 6000,'linear').delay(1000).animate({top: "-=10"}, 8000,'linear');
    $("#cloudTwo").delay(2000).animate({top: "-=5"}, 7000,'linear').delay(1000).animate({top: "+=5"}, 9000,'linear');
    $("#cloudThree").delay(1000).animate({top: "-=8"}, 8000,'linear').delay(3000).animate({top: "+=8"}, 6000,'linear');
    $("#foreground-snow").animate({top: "-=40"}, 6000).delay(1000).animate({top: "+=40"}, 8000);
    $("#background-snow").animate({top: "+=80"}, 6000).delay(1000).animate({top: "-=80"}, 8000, animate);

    }

  var clearThoughts = function(){

    $("#thought-topic").fadeOut('2000', function(){
      $(this).text("");
    });

  }

  var randomThoughts = function(){
    if (!timeBubble) {
      thought = thoughtsArray[Math.floor(Math.random()*(thoughtsArray.length))];
      // console.log (thought);
    }
    else {
      thought = "success.."
    }

    $("#thought-topic").text(thought).fadeIn('2000', function () {
        setTimeout(clearThoughts, 2000);
      });

  }

  var think = function(){

    setInterval (function(){
      $("#thoughts").fadeIn('slow',randomThoughts).delay(2000).fadeOut('slow');
    }, 9000);

  }

  $('#snowman').on('click', function(){

    if ($(this).hasClass('opened-log')){
      $(this).removeClass('opened-log');
      $(this).attr('src','images/SnowMan.png');
      // console.log("close log!");
      timeBubble = false;
      $("#thought-bubble").show();
      $(".hide").css("opacity", "1.0");
      $("#about-me").css({ "opacity": "0.00 ","z-index": "-100"});
      $("#second-page").css({ "opacity": "0.0 ","z-index": "-110"});

    } else {
      $(this).addClass('opened-log');
      $(this).attr('src','images/SnowMan2.png');
      // console.log("open log!");
      timeBubble = true;
      $("#thought-bubble").hide();
      $(".hide").css("opacity", "0.3");
      $("#about-me").css({ "opacity": "1.0 ","z-index": "100"});
    }

  })

  // $("#second-page").css({ "opacity": "1.0 ","z-index": "100"});
  $('#next-page').on('click',function(){

    // console.log('next page!');
    $("#about-me").css({ "opacity": "0.0 ","z-index": "-100"});
    $("#second-page").css({ "opacity": "1.0 ","z-index": "100"});

  })

  $('#back-page').on('click',function(){

    // console.log('next page!');
    $("#about-me").css({ "opacity": "1.0 ","z-index": "100"});
    $("#second-page").css({ "opacity": "0.0 ","z-index": "-100"});

  })

  animate();
  think();

})
