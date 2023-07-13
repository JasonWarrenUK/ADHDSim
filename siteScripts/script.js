/*|| CONVENTIONS ||*/
  //Use single quotes in JS, so can paste HTML easily

/* || INITIALISE PAGE CONTENT || */
  let showFirst = document.querySelectorAll('[data-pages="home"]');
  for (const showThis of showFirst) {
    showThis.style.display = 'block';
  }

/* || NAVIGATION/CONTENT SWITCHER || */
  const showAll = document.getElementById('showAll');
    showAll.addEventListener('click', function() {
      visibleNow = document.querySelectorAll('[data-pages]');
      for (const showThis of visibleNow) {
        showThis.style.display = 'block';
      }
    });
    
  const showDebug = document.getElementById('showDebug');
    showDebug.addEventListener('click', function() {
      const hideThese = document.querySelectorAll('[data-pages]')
      for (const hideThis of hideThese) {
        hideThis.style.display = 'none';
      }
      
      visibleNow = document.querySelectorAll('[data-pages="none"]');
      for (const showThis of visibleNow) {
        showThis.style.display = 'block';
      }
    });

  const showHome = document.getElementById('showHome');
    showHome.addEventListener('click', function() {
      const hideThese = document.querySelectorAll('[data-pages]')
      for (const hideThis of hideThese) {
        hideThis.style.display = 'none';
      }
      
      visibleNow = document.querySelectorAll('[data-pages="home"]');
      for (const showThis of visibleNow) {
        showThis.style.display = 'block';
      }
    });
    
  const showDeconstructor = document.getElementById('showDeconstructor');
    showDeconstructor.addEventListener('click', function() {
      const hideThese = document.querySelectorAll('[data-pages]')
      for (const hideThis of hideThese) {
        hideThis.style.display = 'none';
      }
      
      visibleNow = document.querySelectorAll('[data-pages="deconstructor"]');
      for (const showThis of visibleNow) {
        showThis.style.display = 'block';
      }
    });

  const showVault = document.getElementById('showVault');
    showVault.addEventListener('click', function() {
      const hideThese = document.querySelectorAll('[data-pages]')
      for (const hideThis of hideThese) {
        hideThis.style.display = 'none';
      }
      
      visibleNow = document.querySelectorAll('[data-pages="vault"]');
      for (const showThis of visibleNow) {
        showThis.style.display = 'block';
      }
    });

  const showSparks = document.getElementById('showSparks');
    showSparks.addEventListener('click', function() {
      const hideThese = document.querySelectorAll('[data-pages]')
      for (const hideThis of hideThese) {
        hideThis.style.display = 'none';
      }
      
      visibleNow = document.querySelectorAll('[data-pages="sparks"]');
      for (const showThis of visibleNow) {
        showThis.style.display = 'block';
      }
    });

  const showPortfolio = document.getElementById('showPortfolio');
    showPortfolio.addEventListener('click', function() {
      const hideThese = document.querySelectorAll('[data-pages]')
      for (const hideThis of hideThese) {
        hideThis.style.display = 'none';
      }
      
      visibleNow = document.querySelectorAll('[data-pages="portfolio"]');
      for (const showThis of visibleNow) {
        showThis.style.display = 'block';
      }
    });

  const showMachine = document.getElementById('showMachine');
    showMachine.addEventListener('click', function() {
      const hideThese = document.querySelectorAll('[data-pages]')
      for (const hideThis of hideThese) {
        hideThis.style.display = 'none';
      }
      
      visibleNow = document.querySelectorAll('[data-pages="machine"]');
      for (const showThis of visibleNow) {
        showThis.style.display = 'block';
      }
    });

  const showCage = document.getElementById('showCage');
    showCage.addEventListener('click', function() {
      const hideThese = document.querySelectorAll('[data-pages]')
      for (const hideThis of hideThese) {
        hideThis.style.display = 'none';
      }
      
      visibleNow = document.querySelectorAll('[data-pages="cage"]');
      for (const showThis of visibleNow) {
        showThis.style.display = 'block';
      }
    });

/* || CONTENT CARDS|| */
    /* | Modal Links | */
      document.getElementById("myDialog").showModal()