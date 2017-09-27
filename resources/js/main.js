// ------- SLIDE FUNCTIONS ---------

var currentSlide = 0;

var totalSlides = $(".holder figure").length

var moveSlide = function (slide) {
  var leftPosition = (-slide * 100) + "vw";

  $(".holder").css("left", leftPosition);

  var slideNumber = slide +1;

  $(".steps").text(slideNumber + "/" + totalSlides);
}

var nextSlide = function() {
  currentSlide = currentSlide + 1;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  moveSlide(currentSlide);
}

var previousSlide = function () {
  currentSlide = currentSlide - 1;

  if (currentSlide < 0) {
    currentSlide = totalSlides -1;
  }
  moveSlide(currentSlide);
}

var autoSlide = setInterval(function() {
nextSlide()

}, 3000);

// ------- PREV and NEXT ---------

$(".next").on("click", function() {
  clearInterval(autoSlide)

  nextSlide();
});

$(".prev").on("click", function(){
  clearInterval(autoSlide)

  previousSlide();
});

// ---------- STEPS ------------

var slideNumber = currentSlide + 1;

$(".steps").text(slideNumber + "/" + totalSlides);

// --------- INFO BOX -----------

$(".info, img.arrow").on("click", function(){
  $(".info").toggleClass("open");

  return false;
});
