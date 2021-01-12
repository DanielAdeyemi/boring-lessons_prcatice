$(document).ready(function() {
  $("button.btn-light").click(function() {
    $("body").removeClass("dark");
    $("body").addClass("light");
  });
  $("button.btn-dark").click(function() {
    $("body").removeClass("light");
    $("body").addClass("dark");
  });
});