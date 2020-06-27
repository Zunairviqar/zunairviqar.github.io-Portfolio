$(document).ready(function(){
  $("#arrow1").mouseenter(function(){
    $("#click").show();
  });
  $("#arrow1").click(function(){
    location.replace("education.html")
  });
});

$(document).ready(function(){
  $("#arrow1").mouseleave(function(){
    $("#click").hide();
  });
});

$(document).ready(function(){
  $("#arrow2").mouseenter(function(){
    $("#click").show();
  });
  $("#arrow2").click(function(){
    location.replace("projects.html")
  });
});

$(document).ready(function(){
  $("#arrow2").mouseleave(function(){
    $("#click").hide();
  });
});

$(document).ready(function(){
  $("#arrow3").mouseenter(function(){
    $("#click").show();
  });
  $("#arrow3").click(function(){
    location.replace("contact.html")
  });
});

$(document).ready(function(){
  $("#arrow3").mouseleave(function(){
    $("#click").hide();
  });
});

$(document).ready(function(){
  $("#arrow4").mouseenter(function(){
    $("#click").show();
  });
  $("#arrow4").click(function(){
    location.replace("experiences.html")
  });
});

$(document).ready(function(){
  $("#arrow4").mouseleave(function(){
    $("#click").hide();
  });
});



// https://www.w3schools.com/jquery/jquery_fade.asp
// $(document).ready(function(){
//   $(".bg").click(function(){
//     $("#Menu").fadeIn("slow");
//   });
// });
//
// $(document).ready(function(){
//   $(".bg").click(function(){
//     $(".Shutuptext").fadeOut("fast");
//   });
// });
