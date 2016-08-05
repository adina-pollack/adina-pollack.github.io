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

  // $(window).resize(function(){
    if ($(window).width() < 600){
      $(".hamburger").show();
      $( ".nav" ).hide();


      $(".hamburger").off("click");
      $( ".hamburger" ).click(function() {
        $( ".nav" ).slideToggle( "fast", function() {
          $( ".hamburger" ).hide();
          $( ".cross" ).show();
          $("#divider").hide();
          $(".hero").css("padding-top", "480px")
        });
      });

      $(".cross").off("click");
      $( ".cross" ).click(function() {
        $( ".nav" ).slideToggle( "fast", function() {
          $( ".cross" ).hide();
          $( ".hamburger" ).show();
          $("#divider").show();
          $(".hero").css("padding-top", "250px");
        });
      });


      $("li").on("click", function(){
        $( ".nav" ).hide();
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
        $("#divider").show();
        $("section").css("padding-top", "150px");
        $(".hero").css("padding-top", "200px");
      });
    }


    $(window).resize(function(){
      if ($(window).width() > 600){
      $( ".cross" ).hide();
      $(".hamburger").hide();
      $(".nav").show();
    }
  })

});
