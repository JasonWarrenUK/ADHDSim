/*|| CONVENTIONS ||*/
  //Use single quotes in JS, so can paste HTML easily

/* || INITIALISE PAGE CONTENT || */
  let showFirst = document.querySelectorAll('[data-pages="home"]');
  for (const showThis of showFirst) {
    showThis.style.display = 'block';
  }

/* || PAGE SWITCHER || */
  const showAll = document.getElementById('showAll');
    showAll.addEventListener('click', function() {
      let visibleNow = document.querySelectorAll('[data-pages]');
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
      
      let visibleNow = document.querySelectorAll('[data-pages="none"]');
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
      
      let visibleNow = document.querySelectorAll('[data-pages="home"]');
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
      
      let visibleNow = document.querySelectorAll('[data-pages="deconstructor"]');
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
      
      let visibleNow = document.querySelectorAll('[data-pages="vault"]');
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
      
      let visibleNow = document.querySelectorAll('[data-pages="sparks"]');
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
      
      let visibleNow = document.querySelectorAll('[data-pages="portfolio"]');
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
      
      let visibleNow = document.querySelectorAll('[data-pages="machine"]');
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
      
      let visibleNow = document.querySelectorAll('[data-pages="cage"]');
      for (const showThis of visibleNow) {
        showThis.style.display = 'block';
      }
    });

/* || THEME SWITCHER || */
  const showThemeBasic = document.getElementById('showThemeBasic');
  showThemeBasic.addEventListener('click', function() {
    const hideThese = document.querySelectorAll('[data-pages]')
    for (const hideThis of hideThese) {
      hideThis.style.display = 'none';
    }
    let visibleNow = document.querySelectorAll('.themeBasic');
    for(let i = 0; i < visibleNow.length; i++){
        visibleNow[i].style.display = 'block';
    }
  });

  const showThemeCV = document.getElementById('showThemeCV');
  showThemeCV.addEventListener('click', function() {
    const hideThese = document.querySelectorAll('[data-pages]')
    for (const hideThis of hideThese) {
      hideThis.style.display = 'none';
    }
    let visibleNow = document.querySelectorAll('.themeCV');
    for(let i = 0; i < visibleNow.length; i++){
        visibleNow[i].style.display = 'block';
    }
  });

  const showThemeNeuro = document.getElementById('showThemeNeuro');
  showThemeNeuro.addEventListener('click', function() {
    const hideThese = document.querySelectorAll('[data-pages]')
    for (const hideThis of hideThese) {
      hideThis.style.display = 'none';
    }
    let visibleNow = document.querySelectorAll('.themeNeuro');
    for(let i = 0; i < visibleNow.length; i++){
        visibleNow[i].style.display = 'block';
    }
  });

  const showThemeTeaching = document.getElementById('showThemeTeaching');
  showThemeTeaching.addEventListener('click', function() {
    const hideThese = document.querySelectorAll('[data-pages]')
    for (const hideThis of hideThese) {
      hideThis.style.display = 'none';
    }
    let visibleNow = document.querySelectorAll('.themeTeaching');
    for(let i = 0; i < visibleNow.length; i++){
        visibleNow[i].style.display = 'block';
    }
  });

  const showThemeBelief = document.getElementById('showThemeBelief');
  showThemeBelief.addEventListener('click', function() {
    const hideThese = document.querySelectorAll('[data-pages]')
    for (const hideThis of hideThese) {
      hideThis.style.display = 'none';
    }
    let visibleNow = document.querySelectorAll('.themeBelief');
    for(let i = 0; i < visibleNow.length; i++){
        visibleNow[i].style.display = 'block';
    }
  });

  /* const showThemePlaces = document.getElementById('showThemePlaces');
  showThemePlaces.addEventListener('click', function() {
    const hideThese = document.querySelectorAll('[data-pages]')
    for (const hideThis of hideThese) {
      hideThis.style.display = 'none';
    }
    let visibleNow = document.querySelectorAll('.themePlaces');
    for(let i = 0; i < visibleNow.length; i++){
        visibleNow[i].style.display = 'block';
    }
  }); */

  const showThemePeople = document.getElementById('showThemePeople');
  showThemePeople.addEventListener('click', function() {
    const hideThese = document.querySelectorAll('[data-pages]')
    for (const hideThis of hideThese) {
      hideThis.style.display = 'none';
    }
    let visibleNow = document.querySelectorAll('.themePeople');
    for(let i = 0; i < visibleNow.length; i++){
        visibleNow[i].style.display = 'block';
    }
  });

  const showThemeBooks = document.getElementById('showThemeBooks');
  showThemeBooks.addEventListener('click', function() {
    const hideThese = document.querySelectorAll('[data-pages]')
    for (const hideThis of hideThese) {
      hideThis.style.display = 'none';
    }
    let visibleNow = document.querySelectorAll('.themeBooks');
    for(let i = 0; i < visibleNow.length; i++){
        visibleNow[i].style.display = 'block';
    }
  });

  const showThemeHistory = document.getElementById('showThemeHistory');
  showThemeHistory.addEventListener('click', function() {
    const hideThese = document.querySelectorAll('[data-pages]')
    for (const hideThis of hideThese) {
      hideThis.style.display = 'none';
    }
    let visibleNow = document.querySelectorAll('.themeHistory');
    for(let i = 0; i < visibleNow.length; i++){
        visibleNow[i].style.display = 'block';
    }
  });

  const showThemeLinguistics = document.getElementById('showThemeLinguistics');
  showThemeLinguistics.addEventListener('click', function() {
    const hideThese = document.querySelectorAll('[data-pages]')
    for (const hideThis of hideThese) {
      hideThis.style.display = 'none';
    }
    let visibleNow = document.querySelectorAll('.themeLinguistics');
    for(let i = 0; i < visibleNow.length; i++){
        visibleNow[i].style.display = 'block';
    }
  });

  const showThemeIdea = document.getElementById('showThemeIdea');
  showThemeIdea.addEventListener('click', function() {
    const hideThese = document.querySelectorAll('[data-pages]')
    for (const hideThis of hideThese) {
      hideThis.style.display = 'none';
    }
    let visibleNow = document.querySelectorAll('.themeIdea');
    for(let i = 0; i < visibleNow.length; i++){
        visibleNow[i].style.display = 'block';
    }
  });

  const showThemeGameDesign = document.getElementById('showThemeGameDesign');
  showThemeGameDesign.addEventListener('click', function() {
    const hideThese = document.querySelectorAll('[data-pages]')
    for (const hideThis of hideThese) {
      hideThis.style.display = 'none';
    }
    let visibleNow = document.querySelectorAll('.themeGameDesign');
    for(let i = 0; i < visibleNow.length; i++){
        visibleNow[i].style.display = 'block';
    }
  });

  const showThemeMusic = document.getElementById('showThemeMusic');
  showThemeMusic.addEventListener('click', function() {
    const hideThese = document.querySelectorAll('[data-pages]')
    for (const hideThis of hideThese) {
      hideThis.style.display = 'none';
    }
    let visibleNow = document.querySelectorAll('.themeMusic');
    for(let i = 0; i < visibleNow.length; i++){
        visibleNow[i].style.display = 'block';
    }
  });

/* || CONTENT CARDS || */
    /* | Modals | */
      /* Template */
        const modal = document.getElementById('templateModal');
        const modalButton = document.getElementById('templateModalButton');
        modalButton.addEventListener('click', (event) => {modal.showModal();});
      
    /* | Links | */
      /* Template */
        const link = document.getElementById('templateLink');
        const linkButton = document.getElementById('templateLinkButton');
        linkButton.addEventListener('click', (event) => {link.showModal();});

/* || THEME UNLOCKS || */
  const themeGates = document.querySelectorAll('[data-unlocks]');
  for (const trackThis of themeGates) {
    trackThis.addEventListener('click', function() {
      /* let visibleNow = document.querySelectorAll('[data-pages]');
      for (const showThis of visibleNow) {
        showThis.style.display = 'block';
      } */
    });
  }