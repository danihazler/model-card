// ------- SLIDE FUNCTIONS ---------
let currentSlide = 0;

const totalSlides = $(".holder figure").length;

const moveSlide = slide => {
  const leftPosition = (-slide * 100) + "vw";

  $(".holder").css("left", leftPosition);

  const slideNumber = slide + 1;

  $(".steps").text(slideNumber + "/" + totalSlides);
}

const nextSlide = () => {
  currentSlide = currentSlide + 1;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  moveSlide(currentSlide);
}

const previousSlide = () => {
  currentSlide = currentSlide - 1;

  if (currentSlide < 0) {
    currentSlide = totalSlides -1;
  }
  moveSlide(currentSlide);
}

const autoSlide = setInterval(() => {
nextSlide() }, 3000);

// ------- PREV and NEXT ---------
$(".next").on("click", function() {
  clearInterval(autoSlide);

  nextSlide();
});

$(".prev").on("click", function(){
  clearInterval(autoSlide);

  previousSlide();
});

// ---------- STEPS ------------
const slideNumber = currentSlide + 1;
$(".steps").text(slideNumber + "/" + totalSlides);

// --------- INFO BOX -----------
$(".info, .arrow.open").on("click", function(){
  $(".info").toggleClass("open_info");
  $(".arrow.close").toggleClass("show");
  $(".arrow.open").toggleClass("hide");

  return false;
});
