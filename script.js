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
});
