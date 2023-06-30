/* CONVENTIONS
    Use single quotes in JS, so that I can copy-paste my HTML easily (which uses double quotes)
*/

// CONTENT SWITCHER
    //store the element with the ID content
    const contentWhere = document.getElementById('content');
    //store the first a element with the href attribute other.html    
    const contentWhat = document.querySelector("a[href='other.html']");

    contentWhere.innerHTML = contentWhat.innerHTML;

    //function will be called whenever a link is clicked on
    const clickHandler = function(event) {
        // Get the href of the link that was clicked
        const contentSource = event.target.getAttribute('href');
        
        // Replace the predetermined href with the href of the clicked link
        contentWhere.innerHTML = contentWhat.innerHTML.replace(/other.html/, contentSource);
    };
      
      // Attach the click handler to all links on the page
      document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', clickHandler);
      });

    /* Finally, the code will attach the clickHandler function to all a elements on the page. This means that whenever a link is clicked on, the clickHandler function will be called and the href of the link will be replaced.
      
        To test this code, you can create a simple HTML file with the following code:

        <html>
        <head>
        <title>Replace HREF with ONCLICK</title>
        </head>
        <body>
        <div id="content">This is the default content</div>
        <a href="other.html">This is a link</a>
        <a href="another.html">This is another link</a>
        </body>
        </html>
    */