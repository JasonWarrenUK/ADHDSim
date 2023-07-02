/* CONVENTIONS
    Use single quotes in JS, so that I can copy-paste my HTML easily (which uses double quotes)
*/

// CONTENT SWITCHER v2

function showContent(id) {
    var origin = document.getElementById(id);
    var target = document.getElementById(origin.dataset.contentId);
    target.classList.remove("hidden");
  }
  
  var menuNav = document.getElementById("left");
  var links = menuNav.querySelectorAll("li");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      var origin = this.id;
      showContent(origin);
    });
  }