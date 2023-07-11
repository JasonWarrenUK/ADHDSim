/*|| CONVENTIONS ||*/
  //Use single quotes in JS, so can paste HTML easily

  //LET'S FUCKIN' TEST THIS SHIT
  const fuckButton = document.getElementById('testButton');
  
  fuckButton.addEventListener('click', function() {
    let fuckBucket = document.getElementById('homeIntro');
    fuckBucket.style.display == "none" ? fuckBucket.style.display = 'block' : fuckBucket.style.display = "none";
  });

// /*|| SIN BIN||*/
//   /*|| WEBSITE SYMPTOMS ||*/
//     //Symptoms
//       function Symptom(sPriority, sName, sOn, sContent, sFeature, sStyle){
//         //num, string, bool, array, array, array
//         this.priority = sPriority;
//         this.name = sName;
//         this.on = sOn;
//         this.content = sContent;
//         this.feature = sFeature;
//         this.styles = sStyle;
//       }
    
//     //Hyperfocus
//       var symptomHyperfocus = new Symptom(1, "Hyperfocus", true, ["nodeWeb"], ["navInput"], [""]);

//   /*|| WEBSITE NEUROTYPE ||*/
//     var neurotype = {
//       //Passed
//       symptomNames: [""],
//       contents: [""],
//       features: [""],
//       styles: [""],
//       //Calculated
//       spiceLevel: this.symptomNames.length
//     }

//     //Symptom Switcher
//       function symptomSwitch(symptom){
//         //pass symptom to addSpice or goBeige
//         symptom.on == true ? addSpice(symptom) : goBeige(symptom);
//       }
      
//       function addSpice(symptom){
//         // add symptom
//         neurotype.symptomNames += symptom.sName;
//         neurotype.spiceLevel = neurotype.symptomNames.length;
    
//         neurotype.contents += "a";
//         neurotype.features += "a";
//         neurotype.styles += "a";
//       }
      
//       function goBeige(symptom){
//         // remove symptom
//         // check to see if they're now symptom-free, then show them...
//           if(spiceLevel = 0){alert("You're a normie, pick yourself some interesting symptoms.")};
//       }

//       //FIXME
//       addEventListener.getElementById("symptom")("click", symptomSwitch(Symptom));


//   /*----------------------------------------------------------------------------*/
//   /*----------------------------------------------------------------------------*/
//   /*----------------------------------------------------------------------------*/

//   /*NAVIGATION: CONTENT SWITCHER*/
//     /*Attempt 924252
//       document.addEventListener("DOMContentLoaded", function() {
//         var navMenu = document.getElementById("naviLinksPageList"); 
//         var navLinks = navMenu.querySelectorAll("li");
//         for (var i = 0; i < navLinks.length; i++) {
//           var contentLink = navLinks[i];
//           var contentTarget = contentLink.getAttribute("data-content-id");
//           var contentNew = document.getElementById(contentTarget);    
//           var contentOld = document.getElementsByClassName("showYes");
//           contentLink.addEventListener("click", function() {
//             contentOld.classList.remove("showYes");
//             contentOld.classList.add("showNo");
//             contentNew.classList.remove("showNo");
//             contentNew.classList.add("showYes");
//           });
//         }
//       });*/
//     /*Attempt 924253
//       FUCK OFF WHY IS THIS SO STOOPID
//       document.addEventListener("DOMContentLoaded", function() {
//         var navMenu = document.getElementById("naviLinksPageList"); 
//         var navLinks = navMenu.querySelectorAll("li");
//         for (var i = 0; i < navLinks.length; i++) {
//           var contentLink = navLinks[i];
//           var contentTarget = contentLink.getAttribute("data-content-id");
//           var contentNew = document.getElementById(contentTarget);
//           contentLink.addEventListener("click", function() {
//             contentNew.classList.remove("showNo");
//             contentNew.classList.add("showYes");
//           });
//         }
//       });*/
//     /*Attempt 924254
//       document.addEventListener("DOMContentLoaded", function() {
//         var navMenu = document.getElementById("naviLinksPageList");
//         var navLinks = navMenu.querySelectorAll("li");
//         for (var i = 0; i < navLinks.length; i++) {
//           var contentLink = navLinks[i];
//           var contentTarget = contentLink.getAttribute("id").replace("show", "");
//           var contentNew = document.getElementById(contentLink.getAttribute("id").replace("show", ""));
//           contentLink.addEventListener("click", function() {
//             contentNew.classList.remove("showNo");
//             contentNew.classList.add("showYes");
//           });
//         }
//       });*/
//     /*Attempt 924255
//       THIS IS SO JANKY
//       getElementById("showDeconstrction").addEventListener("click", function() {
//         document.getElementById("middle").innerHtml = "/sitePages/deconstruction.html";
//       });*/
//     /*Attempt 924256
//       navLinks.addEventListener("click", function() {
//         var contentTarget = contentLink.getAttribute("data-content-id");
//         var contentNew = document.getElementById(contentTarget);
//         if (!contentNew.classList.contains("showYes")) {
//           contentNew.classList.add("showYes");
//         }
//       });*/
//     /*Attempt 924257*/
//       /*Go Links*/
//         const goGame = document.getElementById('goGame');
//         const goPigpen = document.getElementById('goPigpen');
      
//       /*Show Links*/
//         const showHome = document.getElementById('showHome');
//         const showDeconstructor = document.getElementById('showDeconstructor');
//         const showVault = document.getElementById('showVault');
//         const showSparks = document.getElementById('showSparks');
//         const showPortfolio = document.getElementById('showPortfolio');
//         const showMachine = document.getElementById('showMachine');
//         const showCage = document.getElementById('showCage');

//       /*Navigation Function*/
//         function display(contentNow, contentNext) {
//           contentNow.classList.remove('showYes');
//           contentNow.classList.add('showNo');
//           contentNext.classList.remove('showNo');
//           contentNext.classList.add('showYes');
//         };
        
//       /*Click Events*/
//         showHome.addEventListener("click", display(document.getElementsByClassName('showYes'), document.getElementById('home')));

//         showDeconstructor.addEventListener("click", display(document.getElementsByClassName('showYes'), document.getElementById('deconstructor')));

//         showVault.addEventListener("click", display(document.getElementsByClassName('showYes'), document.getElementById('vault')));

//         showSparks.addEventListener("click", display(document.getElementsByClassName('showYes'), document.getElementById('sparks')));

//         showPortfolio.addEventListener("click", display(document.getElementsByClassName('showYes'), document.getElementById('portfolio')));

//         showMachine.addEventListener("click", display(document.getElementsByClassName('showYes'), document.getElementById('machine')));

//         showCage.addEventListener("click", display(document.getElementsByClassName('showYes'), document.getElementById('cage')));