window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
function scrollOver(scrollMultplier) {
  var scrollLength;
  if (window.innerWidth <= 1100) {
    scrollLength = 719;
  } else if (window.innerWidth <= 1368) {
    scrollLength = 580;
  } else {
    scrollByLength = 590;
  }

  var currentPostion = document.getElementById("scroll").scrollLeft;
  var scrollByLength = scrollLength * scrollMultplier - currentPostion;
  document.getElementById("scroll").scrollBy(scrollByLength, 0);
  console.log(document.getElementById("scroll").scrollLeft);
}
