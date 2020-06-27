$(document).ready(function(){
  $("#arrow1").mouseenter(function(){
    $("#midschoolheadings").fadeIn("slow");
    $("#headings").fadeOut("fast");
    $("#click").show();
  });
});

$(document).ready(function(){
  $("#arrow1").mouseleave(function(){
    $("#headings").fadeIn("slow");
    $("#midschoolheadings").fadeOut("fast");
    $("#click").hide();
  });
});

$(document).ready(function(){
  $("#arrow2").mouseenter(function(){
    $("#undergradheadings").fadeIn("slow");
    $("#headings").fadeOut("fast");
    $("#click").show();
  });
});

$(document).ready(function(){
  $("#arrow2").mouseleave(function(){
    $("#headings").fadeIn("slow");
    $("#undergradheadings").fadeOut("fast");
    $("#click").hide();

  });
});

$(document).ready(function(){
  $("#arrow3").mouseenter(function(){
    $("#gradheadings").fadeIn("slow");
    $("#headings").fadeOut("fast");
    $("#click").show();
  });

});

$(document).ready(function(){
  $("#arrow3").mouseleave(function(){
    $("#headings").fadeIn("slow");
    $("#gradheadings").fadeOut("fast");
    $("#click").hide();

  });
});

$(document).ready(function(){
  $("#arrow4").mouseenter(function(){
    $("#highschoolheadings").fadeIn("slow");
    $("#headings").fadeOut("fast");
    $("#click").show();
  });

});

$(document).ready(function(){
  $("#arrow4").mouseleave(function(){
    $("#headings").fadeIn("slow");
    $("#highschoolheadings").fadeOut("fast");
    $("#click").hide();

  });
});
