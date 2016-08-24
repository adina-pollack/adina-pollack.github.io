$(document).ready(function(){

  function showTacoColor(){
    $("#tacoColorOverlay").css("visibility", "visible").css("position", "absolute")
    $("#tacoHeader").css("position", "relative")
  }
  function hideTacoColor(){
    $("#tacoColorOverlay").css("visibility", "hidden").css("position", "static")
    $("#tacoHeader").css("position", "static")
  }
  function showFriendColor(){
    $("#friendsColorOverlay").css("visibility", "visible").css("position", "absolute")
    $("#makeFriendsHeader").css("position", "relative")
  }
  function hideFriendColor(){
    $("#friendsColorOverlay").css("visibility", "hidden").css("position", "static")
    $("#makeFriendsHeader").css("position", "static")
  }

  function showGigColor(){
    $("#gigColorOverlay").css("visibility", "visible").css("position", "absolute")
    $("#gigHeader").css("position", "relative")
  }
  function hideGigColor(){
    $("#gigColorOverlay").css("visibility", "hidden").css("position", "static")
    $("#gigHeader").css("position", "static")
  }

  function showFlashColor(){
    $("#flashColorOverlay").css("visibility", "visible").css("position", "absolute")
    $("#flashHeader").css("position", "relative")
  }
  function hideFlashColor(){
    $("#flashColorOverlay").css("visibility", "hidden").css("position", "static")
    $("#flashHeader").css("position", "static")
  }

  $("#tacoHeader").on("mouseover", showTacoColor)
  $("#tacoHeader").on("mouseout", hideTacoColor)

  $("#makeFriendsHeader").on("mouseover", showFriendColor)
  $("#makeFriendsHeader").on("mouseout", hideFriendColor)

  $("#gigHeader").on("mouseover", showGigColor)
  $("#gigHeader").on("mouseout", hideGigColor)

  $("#flashHeader").on("mouseover", showFlashColor)
  $("#flashHeader").on("mouseout", hideFlashColor)

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
        $(".hero").css("padding-top", "370px")
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
      $("section").css("padding-top", "100px");
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
