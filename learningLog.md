# Learning Log

## To Do

Remember: This is for reminders. Main TODO document should contain all non-ephemeral tasks

* Related to This Page
  * [ ] Paste links to previous ChatGPT logs
  * [X] Maybe reorganise this so learnings are separated by topic rather than by day
    * Added the Knowledge Captures section so I can still have a dated journal
* Thought Catcher
  * [ ] Web app to give people ideas for small meaningful changes they can make when they feel shit because they haven't got any change to give

## Questions

* JavaScript
  * [ ] Can I create an address for a deeply-nested array?
    * Something like...
      * let arrayAddress = array[0][0][0][0][0][1];
        arrayAddress = "blue";
      * And this changes the array item being addressed to "blue", rather replacing the address with the string "blue"
  * [ ] Can I push items to an array with...
    * [ ] array += item
    * [ ] array += [item]
    * [ ] array += [item, item]

## Progress

### Basic Overview

* Application
  * [ ] Application Form
  * [/] Codewars
    * 7th Kyu
  * [-] Website
    * On hold til basic fCC completed
  * [/] Game
    * Basic Ideas
* Learning
  * [/] freeCodeCamp
    * [/] Responsive Web Design
    * [/] JavaScript Algorithms & Data Structures

### Application

#### Codewars

* Week 1: May 29th-June 4th
  * Tuesday May 30th: Hit 1st Kyu
  * Thursday June 1st:
  * Friday June 2nd:

#### Website

* Friday June 2nd: 

#### Game

* Thursday June 1st
  * Wrote facGame.js on my phone to experiment with recreating ink data structures in JS
  * Created base idea
    * choice-based text adventure
    * Two entities, player & world, that have statistics/attributes
    * Player is served a random win condition at the outset
      * Win condition is a combination of required player stats & required world stats
      * 4 Possible Outcomes:
        * Loss - both entities lack required stats
        * Partial Victory (Player)
        * Partial Victory (World)
        * Victory
      * Win condition is narrativised, e.g.
        * Win Name: The Chairperson
        * Description: Become an authoritarian ruler in a supposedly Communist state
        * Player Stats
          * High Wealth
          * High Clout
        * World Stats
          * Low Personal Freedom
          * High Censorship
          * High Nationalisation
    * Gameplay Loop
      * Game serves up a story, i.e. a situation
        * Stories are selected from a pool of available unseen stories
        * Stories are made available or locked based on player/world stats
      * Player chooses actions in response to the story
        * Actions have two outcomes, split as follows
          * One will affect world stats, one will affect player stats
          * One will have a guaranteed outcome, one is a gamble
            * Success of gamble is influenced by player & world stats
  * [ ] Some questions
    * [ ] What's the lose state?
    * [ ] How transparent should the game be in terms of...
      * [ ] Statistics as descriptors ("high") or actual numeric score
      * [ ] Effects of your stats on seen content ("this story is available because you've fucked the world up")
      * [ ] Factors impacting success of action gambles
      * [ ] Existence of locked content (should locked stories be visible but greyed out, or totally hidden)
    * [ ] What's the balance between adding stats (logarithmic) and the increase it has on possible endings (exponential)
  * Figured out how to recreate LIST in JS
    * Very complex
    * LIST is array of objects containing arrays of objects
    * along with custom functions to query & modify the LIST item
* Friday June 2nd: 

### Learning

#### freeCodeCamp

##### Responsive Web Design

* [X] Level 1 (FAC Recommended)
  * [X] HTML
  * [X] Basic CSS
* [X] Level 1 (Extra)
  * [X] CSS Colors
  * [X] HTML Forms
  * [X] Survey Form
* [X] Level 2 (FAC Recommended)
  * [X] CSS Box Model
  * [X] CSS Flexbox
* [ ] Level 2 (Extra)
  * [ ] Typography
  * [ ] Accessibility
  * [ ] Tribute Page
* [ ] Level 3
  * [ ] CSS Pseudo Selectors
  * [ ] Intermediate CSS
  * [ ] Responsive Web Design
* [ ] Level 4
  * [ ] CSS Variables
  * [ ] CSS Grid
* [ ] Level 5
  * [ ] CSS Animation
  * [ ] CSS Transforms

##### JavaScript Algorithms & Data Structures

* [/] Level 1 (FAC Recommended)
  * [X] Basic JavaScript (June 1st)
  * [X] Basic Data Structures
  * [ ] Debugging
  * [ ] Basic Algorithm Scripting
* [ ] Level 2 (After Codewars)
  * [ ] ES6
  * [ ] Intermediate Algorithm Scripting
* [ ] Level 3 (Extra)
  * [ ] Regular Expressions
  * [ ] Object Oriented Programming
  * [ ] Functional Programming
  * [ ] JavaScript Algorithms & Data Structures Projects

## Knowledge Captures

### CSS

* parent::after
    Creates an element that is the last child of the parent element

### JavaScript

* Arrays & Objects
  * Arrays
    * Index of
      * array.indexOf(x)
      * returns -1 if element not found
    * Shift & Unshift
      * shift()
      * unshift(x)
    * Slice & Splice
      * slice(x, y)
        * start at index x
        * extract all elements from there until index y
        * do not extract index y
        * do not modify original array
      * splice(x, y, a)
        * start at index x
        * remove y elements
        * return a new array containing those elements
        * at index x, replace removed elements with a, b, c...
    * Pop & Push
      * pop()
      * push(x)
    * Spread
        * ...arr
  * Objects
    * Check whether Property Exists
      * object.hasOwnProperty("property");
      * "property" in object;
    * Delete Property
      * delete object.property;
  * Other
    * Return an Array of an Object's Properties
      * Object.keys(object);
* Methods
  * .length
    * Arrays: Number of elements in the array

## Journals

### Week 1

#### Friday 2nd June

* Learnings
  * General
    * Braces,Brackets & Parentheses
      * Brackets: []
      * Parentheses: ()
      * Braces: {}
  * JavaScript
    * Arrays
      * Depth/Dimensionality
        * 1 Dimensional has nothing nested within it
      * Array.length returns the number of items within the array
  * CSS
    * Pseudo-Selectors
    * Flex Box
      * What 
        * An element with display: flex; becomes a flex container
        * Any children of that container become flex items
      * Flex Containers
        * max-width
        * main axis
          * flex-direction
            * row (default)
            * row-reverse
            * column
            * column-reverse
          * flex-wrap
            * nowrap (default)
            * wrap
          * justify-content
        * gap
        * cross axis
          * align-items
      * Flex Items
        * object-fit
          * cover
    * Box Model Framework
      1. Content
         * transform
           * rotate
      2. padding
      3. border
         * border-radius
      4. margin
      * Other
        * filter
          * blur
        * box-shadow
    * Class Inheritance affects Rule Creation
      * An object applies its rules to the environment it is within, not a blank canvas environment
      * Example (Rothko Blur)
        * In the CSS Box Model exercise, the following code doesn't work how I assumed:
          .parent {filter: blur(1px)};
          .child {filter: blur(2px)};
        * My Assumption: Replacement
        * .child applies a 2px blur
        * This replaces .parent's 1px blur
        * The total blur applied to .child is 2px
        * Actual Process: Addition
        * .child applies a 2px blur
        * This is added to .parent's 1px blur
        * The total blur applied to .child is 3px

#### Thursday 1st June

* ChatGPT Logs
  * for Loops
    * Link <https://chat.openai.com/share/891af3f2-84fa-4f9c-b8d7-f7f1c670fadf>
    * The Problem
      * While doing the profile lookup exercise on freeCodeCamp, I couldn't work out what was wrong with the syntax of my for loop.
    * What I Learned
      * The three conditions in a for loop are separated by ; (rather than ,)
      * Array indices are always accessed with bracket notation, not dot notation
        [x] Should probably get clarity on when to use each of those formats
      * Need to be careful that I'm using == instead of = when checking equality
        * At some point in the future I'll be adding === to that particular clusterfuck
  * Dot Notation vs Bracket Notation
    * Link <https://chat.openai.com/share/76f6e075-b599-483c-9b19-1f38715afb1d>
    * The Problem
      * Following on from the above action point, I want clarity on when I should use each notation form.
        * The resources I've used thus far have taught them in isolation, but I need to have them juxtaposed.
          * [ ] Add a TODO to my ideas list: web app exploring inductive vs deductive learning?
    * What I Learned
      * Dot Notation
        * Let's call this baseline; this is how we navigate to a static, named address within the code.
      * Bracket Notation
        * An aspect of the address is accessed indirectly via a variable rather than being explicitly referenced in and of itself
        * Also needs to be used if the address element contains specific characters (usually spaces)
      * In summary...
        * If you can use either, use dots; they're cleaner
        * If in doubt, use brackets; they're more resilient
  * Coding Action Plan
    * Link: <https://chat.openai.com/share/f65d8997-2e22-4a11-a2a8-de6cc56dadef>
    * The Problem
    * What I Learned
  * ink to JS
    * Link: <https://chat.openai.com/share/3fbcf348-891d-46cf-8761-d071def45002>
* Learnings
  * JavaScript
    * Recursive Functions
      * This has two cases:
        * Base Case
          * The goal state.
          * When this runs, it will execute a known outcome and cease calling itself
        * Recursion Call
          * Runs the function again with changed arguments
          * The results of this case should bring us closer to the execution of the base case
      * I reckon recursion calls can be subdivided into three components:
        1. Tunnel Down & Narrow Gap
           * Essential, the argument has to be modified so that we can get clearer to the base case
           * Unless the purpose of the function is to cause the heat death of the universe
        2. Capture & Modify Tunnel's Output
           * Theoretically not essential, but for the recursion to matter at all it should change something about the output as it makes its way from deeper tunnel to base case
        3. Output
           * Ensure something is sent back upwards
    * Ternary Operators
      * OH I LIKE THESE
      * doUDoTernaries ? "coolcool"
        : doUKnowTernaries ? "u weird"
          : "i teach u";
    * max indices are lengths - 1

## FIN
