/* CONVENTIONS
    Use single quotes in JS, so that I can copy-paste my HTML easily (which uses double quotes)
*/

// CONTENT SWITCHER v2
/*var showNow = document.getElementById("home")
var navMenu = document.getElementById("left");
var navLinks = navMenu.querySelectorAll("li");

function showContent(what) {
    var showLink = document.getElementById(what);
    var showNext = document.getElementById(showLink.dataset.contentId);
    
    showNow.classList.add("hidden")
    showNext.classList.remove("hidden");
    showNow = showingNext;
  }


for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
        var goHere = this.id;
        showContent(goHere);
    });
}*/

document.addEventListener("DOMContentLoaded", function() {
    var navMenu = document.getElementById("left");
    var navLinks = navMenu.querySelectorAll("li");

    for (var i = 0; i < navLinks.length; i++) {
      var link = navLinks[i];
      var contentId = link.getAttribute("data-content-id");
      var content = document.getElementById(contentId);
      link.addEventListener("click", function() {
        content.classList.toggle("hidden");
      });
    }
  });