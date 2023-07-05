/* CONVENTIONS
    Use single quotes in JS, so that I can copy-paste my HTML easily (which uses double quotes)
*/

// CONTENT SWITCHER v2
  // WORKSHOP
  /* document.addEventListener("DOMContentLoaded", function() {
    var navMenu = document.getElementById("naviLinksPageList"); 
    var navLinks = navMenu.querySelectorAll("li");
    for (var i = 0; i < navLinks.length; i++) {
      var contentLink = navLinks[i];
      var contentTarget = contentLink.getAttribute("data-content-id");
      var contentNew = document.getElementById(contentTarget);    
      var contentOld = document.getElementsByClassName("showYes");
      contentLink.addEventListener("click", function() {
        contentOld.classList.remove("showYes");
        contentOld.classList.add("showNo");
        contentNew.classList.remove("showNo");
        contentNew.classList.add("showYes");
      });
    }
  }); */

  // VALIDATED
  /*document.addEventListener("DOMContentLoaded", function() {
    var navMenu = document.getElementById("naviLinksPageList"); 
    var navLinks = navMenu.querySelectorAll("li");
    for (var i = 0; i < navLinks.length; i++) {
      var contentLink = navLinks[i];
      var contentTarget = contentLink.getAttribute("data-content-id");
      var contentNew = document.getElementById(contentTarget);
      contentLink.addEventListener("click", function() {
        contentNew.classList.remove("showNo");
        contentNew.classList.add("showYes");
      });
    }
  });*/

  
  /*
  document.addEventListener("DOMContentLoaded", function() {
    var navMenu = document.getElementById("naviLinksPageList");
    var navLinks = navMenu.querySelectorAll("li");
    for (var i = 0; i < navLinks.length; i++) {
      var contentLink = navLinks[i];
      var contentTarget = contentLink.getAttribute("id").replace("show", "");
      var contentNew = document.getElementById(contentLink.getAttribute("id").replace("show", ""));
      contentLink.addEventListener("click", function() {
        contentNew.classList.remove("showNo");
        contentNew.classList.add("showYes");
      });
    }
  });
  */

  // Version 25832558 *cries*
  document.addEventListener("DOMContentLoaded", function() {
    var navMenu = document.getElementById("naviLinksPageList");
    var navLinks = navMenu.querySelectorAll("li");
  
    navLinks.addEventListener("click", function() {
      var contentTarget = contentLink.getAttribute("data-content-id");
      var contentNew = document.getElementById(contentTarget);
      if (!contentNew.classList.contains("showYes")) {
        contentNew.classList.add("showYes");
      }
    });
  });

// SYMPTOMS
  // Template
    function Symptom(sPriority, sName, sOn, sContent, sFeature, sStyle){
    //num, string, bool, array, array, array
      this.priority = sPriority;
      this.name = sName;
      this.on = sOn;
      this.content = sContent;
      this.feature = sFeature;
      this.styles = sStyle
    }

  // Symptom Store
    var symptomHyperfocus = new Symptom(1, "Hyperfocus", true, ["nodeWeb"], ["navInput"], [""]);

// NEUROTYPE
  var neurotype = {
    symptomNames: [""],
      spiceLevel: this.symptomNames.length,
    contents: [""],
    features: [""],
    styles: [""]
  }

// SYMPTOM SWITCHER
  addEventListener.getElementById("symptom")("click", function({
    if (symptom.on = true){
      addSpice(symptom);
    } else {
      goBeige(symptom);
    }
  });

  // check whether switching on or off
    // pass that symptom as a param to addSpice/goBeige

  function addSpice(symptom){
    // add symptom
    neurotype.symptomNames += symptom.sName;
      neurotype.spiceLevel = neurotype.symptomNames.length;
    neurotype.contents +=
    neurotype.features +=
    neurotype.styles +=
  }
  
  function goBeige(symptom){
    // remove symptom
    // check to see if they're now symptom-free, then show them...
      if(spiceLevel = 0){
        alert("You're a normie, pick yourself some interesting symptoms.")
      }
  }
