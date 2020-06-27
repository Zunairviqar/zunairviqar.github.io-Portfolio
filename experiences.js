$(document).ready(function(){
  $("#arrow1").mouseenter(function(){
    $("#midschoolheadings").fadeIn("fast");
    $("#headings").fadeOut("fast");
    $("#click").show();
  });
});

$(document).ready(function(){
  $("#arrow1").mouseleave(function(){
    $("#headings").fadeIn("fast");
    $("#midschoolheadings").fadeOut("fast");
    $("#click").hide();
  });
});

$(document).ready(function(){
  $("#arrow2").mouseenter(function(){
    $("#undergradheadings").fadeIn("fast");
    $("#headings").fadeOut("fast");
    $("#click").show();
  });
});

$(document).ready(function(){
  $("#arrow2").mouseleave(function(){
    $("#headings").fadeIn("fast");
    $("#undergradheadings").fadeOut("fast");
    $("#click").hide();

  });
});

$(document).ready(function(){
  $("#arrow3").mouseenter(function(){
    $("#gradheadings").fadeIn("fast");
    $("#headings").fadeOut("fast");
    $("#click").show();
  });

});

$(document).ready(function(){
  $("#arrow3").mouseleave(function(){
    $("#headings").fadeIn("fast");
    $("#gradheadings").fadeOut("fast");
    $("#click").hide();

  });
});

$(document).ready(function(){
  $("#arrow4").mouseenter(function(){
    $("#highschoolheadings").fadeIn("fast");
    $("#headings").fadeOut("fast");
    $("#click").show();
  });

});

$(document).ready(function(){
  $("#arrow4").mouseleave(function(){
    $("#headings").fadeIn("fast");
    $("#highschoolheadings").fadeOut("fast");
    $("#click").hide();

  });
});
