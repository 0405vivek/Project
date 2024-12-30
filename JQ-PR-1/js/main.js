// ASIDE

$(".slide").click(function(){
    $(this).parent(".dropdawn").find(".answer").slideToggle();
    $(this).parent(".dropdawn").prevAll(".dropdawn").find(".answer").slideUp();
    $(this).parent(".dropdawn").nextAll(".dropdawn").find(".answer").slideUp();
});

// ----------  Mega-menu script --------- //
$("#mega-menu").click( function (){
    $(".mega-menu").fadeToggle();
  });
  
  // ----------  Resources script --------- //
  $("#resources").click( function (){
    $(".resources").fadeToggle();
  });
  
  // ----------  Notification script --------- //
  $("#notification").click( function (){
    $(".notification").fadeToggle();
  });
  
  // ----------  comment script --------- //
  $("#comment").click( function (){
    $(".comment").fadeToggle();
  });
  
  // ----------  comment script --------- //
  $("#flag").click( function (){
    $(".flag").fadeToggle();
  });
  
  // ----------  comment script --------- //
  $("#profiles").click( function (){
    $(".profiles").fadeToggle();
  });
  
  // ----------  Aside-Bar script --------- //
  $(".slide").click(function () {
    $(this).parent(".sub-menu").find(".show").slideToggle();
    $(this).parent(".sub-menu").prevAll(".sub-menu").find(".show").slideUp();
    $(this).parent(".sub-menu").nextAll(".sub-menu").find(".show").slideUp();
  });
  
