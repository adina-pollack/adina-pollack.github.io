$(document).ready(function(){
  function showTacoPhoto(){
    $("#tacoImage").show();
    $("#tacoTitle").hide();
  }

  function hideTacoPhoto(){
    $("#tacoImage").hide();
    $("#tacoTitle").show();
  }

  function showGigPhoto(){
    $("#gigImage").show();
    $("#gigTitle").hide();
  }

  function hideGigPhoto(){
    $("#gigImage").hide();
    $("#gigTitle").show();
  }

  $("#tacoImage").hide();
  $("#gigImage").hide();

  $(".needtacos").on("mouseover", showTacoPhoto);
  $(".needtacos").on("mouseout", hideTacoPhoto);

  $(".gigMappr").on("mouseover", showGigPhoto);
  $(".gigMappr").on("mouseout", hideGigPhoto);

  $( ".cross" ).hide();
  $(".hamburger").hide();


  function phoneDisplay(){
    $(".hamburger").show();
    $( ".nav").hide();
    menuClick();
    menuClose();
    sectionClick();
  }
  function normalDisplay(){
    $( ".cross" ).hide();
    $(".hamburger").hide();
    $(".nav").show();
  }
  function menuClick(){
    $(".hamburger").off("click");
    $( ".hamburger" ).click(function() {
      $( ".nav" ).slideToggle( "fast", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
        $("#divider").hide();
        $(".hero").css("padding-top", "480px")
      });
    });
  }
  function menuClose(){
    $(".cross").off("click");
    $( ".cross" ).click(function() {
      $( ".nav" ).slideToggle( "fast", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
        $("#divider").show();
        $(".hero").css("padding-top", "250px");
      });
    });
  }
  function sectionClick(){
    $("li").on("click", function(){
      $( ".nav" ).hide();
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
      $("#divider").show();
      $("section").css("padding-top", "150px");
      $(".hero").css("padding-top", "200px");
    });
  }

  if ($(window).width() > 600){
    normalDisplay();
  }
  else if ($(window).width() < 600){
    phoneDisplay();
    menuClick();
    menuClose();
    sectionClick();
  }

  $(window).resize(function(){
    if ($(window).width() > 600){
      normalDisplay();
    }
    else if ($(window).width() < 600){
      phoneDisplay();
      menuClick();
      menuClose();
      sectionClick();
    }
  })
});
