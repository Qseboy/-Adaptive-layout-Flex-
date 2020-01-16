$(document).ready(function() {
  // web
  $('button[filter="web"]').click(function() {
    if ($(this).attr("val") == "off") {
      $("button[filter]").attr("val", "off");
      $(this).attr("val", "on");
      $(".portfolio__items > div").hide(300);
      $('.portfolio__items > [filter="web"]').show(300);
    }
  });
  // apps
  $('button[filter="apps"]').click(function() {
    if ($(this).attr("val") == "off") {
      $("button[filter]").attr("val", "off");
      $(this).attr("val", "on");
      $(".portfolio__items > div").hide(300);
      $('.portfolio__items > [filter="apps"]').show(300);
    }
  });
  // off
  $('button[filter="icons"]').click(function() {
    if ($(this).attr("val") == "off") {
      $("button[filter]").attr("val", "off");
      $(this).attr("val", "on");
      $(".portfolio__items > div").hide(300);
      $('.portfolio__items > [filter="icons"]').show(300);
    }
  });
  //  all
  $('button[filter="all"]').click(function() {
    if ($(this).attr("val") == "off") {
      $("button[filter]").attr("val", "off");
      $(this).attr("val", "on");
      $(".portfolio__items > div ").show(300);
    }
  });
});
