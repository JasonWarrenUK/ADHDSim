// Stylesheet Switcher

    /* <head>
        <title>Switching Stylesheets</title>
        <link rel="stylesheet" href="light.css" />*/

    function changeStylesheet() {
        var link = document.getElementById("stylesheet");
        var href = link.getAttribute("href");
        if (href == "light.css") {
            link.setAttribute("href", "dark.css");
        } else {
            link.setAttribute("href", "light.css");
        }
    }

    /* </head>
        <body>
        <h1>Switching Stylesheets</h1>
        <button onclick="changeStylesheet()">Toggle Stylesheet</button>
        <link id="stylesheet" rel="stylesheet" href="light.css" />
        </body> */

    /*In this example, we have two stylesheets, light.css and dark.css.
    We have a button that, when clicked, calls the changeStylesheet() function. This function gets the link element with the id stylesheet and gets the href attribute of the element. If the href attribute is equal to light.css, then the function sets the href attribute to dark.css. Otherwise, the function sets the href attribute to light.css.

    When the user clicks the button, the changeStylesheet() function will be called and the href attribute of the link element will be changed. This will cause the browser to load the new stylesheet and the page will be updated with the new styles.

    This is just a simple example, but it shows how you can use JavaScript to switch between stylesheets. You can use this technique to create a switch that allows the user to choose between different themes for your website.*/

// Content Swapper
    
    var element = document.getElementById("my-element");
        // Get the element that you want to swap the content of.

    var newElement = document.createElement("div");
    newElement.innerHTML = "<p>This is the new content.</p>";
        // Create a new element with the content that you want to swap in.

    element.replaceChild(newElement, element.firstChild);
        // Replace the old element with the new element.

    /* Here is an explanation of the code:
        The ```document.getElementById()``` method gets the element with the specified ID. In this case, the ID of the element that we want to swap the content of is ```my-element```.

        The ```document.createElement()``` method creates a new element. In this case, we are creating a new ```div``` element.
        
        The ```innerHTML``` property of an element contains the HTML content of the element. In this case, we are setting the innerHTML property of the new div element to the content that we want to swap in.
        
        The ```replaceChild()``` method replaces one child of an element with another child. In this case, we are replacing the first child of the element element with the newElement element. */

// Text Input
    function linkToCatBreed(breed) {
        window.location.href = "https://www.wikipedia.org/wiki/" + breed;
    }
    
    document.getElementById("textbox").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            linkToCatBreed(event.target.value);
        }
    });