window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
function scrollOver(scrollMultiplier) {
  var scrollLength;
  if (window.innerWidth <= 1100) {
    scrollLength = 719;
  } else if (window.innerWidth <= 1368) {
    scrollLength = 580;
  } else {
    scrollLength = 590;
  }

  var currentPosition = document.getElementById("scroll").scrollLeft;
  var scrollByLength = scrollLength * scrollMultiplier - currentPosition;
  console.log(scrollLength);
  document.getElementById("scroll").scrollBy(scrollByLength, 0);
  console.log(document.getElementById("scroll").scrollLeft);
}
