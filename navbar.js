//when the window is scolled sticky function is called
window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("navbar");

//get initial poisiton of navbar from the top
var sticky = navbar.offsetTop;

//function to add sticky class to navbar when it reaches its scroll position
function stickyFunction() {

  //check for if navbar has reached past its position
  if (window.pageYOffset >= sticky) {
    //add sticky class to navbar
    navbar.classList.add("sticky")
  } else {
    //remove sticky class from navbar
    navbar.classList.remove("sticky");
  }
}