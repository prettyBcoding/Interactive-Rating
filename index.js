$(".rating").click(function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".rating-numbers");


  // remove active classes
  [...clicked.parentElement.children].forEach((click) => {
    if (click != clicked) click.classList.remove("clicked");
  });

  clicked.classList.add("clicked");
  $(".ratingNumber").html(clicked.innerHTML);
});

$("button").click(function() {$(".star").addClass("hidden")});
$("button").click(function() {$(".selected").addClass("hidden")});
$("button").click(function() {$(".rating").addClass("hidden")});
$("button").click(function() {$("button").addClass("hidden")});

$("button").click(function() {$(".main").removeClass("hidden")});
$("button").click(function() {$(".imgThankYou").removeClass("hidden")});
$("button").click(function() {$(".thankyou").removeClass("hidden")});
$("button").click(function() {$(".titleThankYou").removeClass("hidden")});
$("button").click(function() {$(".descThankYou").removeClass("hidden")});
