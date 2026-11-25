// Dropdown-Menü für Desktop (Hover) und Touch-Geräte
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
  
  // Hamburger-Menü für Mobile
  if (hamburger && navList) {
    hamburger.addEventListener('click', function() {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      navList.classList.toggle('active');
    });
  }
  
  // Dropdown für Touch-Geräte
  dropdowns.forEach(function(dropdown) {
    const link = dropdown.querySelector('.nav-link');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (link && menu) {
      // Touch-Event für Öffnen/Schließen
      link.addEventListener('click', function(e) {
        if (window.innerWidth < 768) {
          e.preventDefault();
          const isExpanded = link.getAttribute('aria-expanded') === 'true';
          link.setAttribute('aria-expanded', !isExpanded);
          menu.classList.toggle('active');
        }
      });
      
      // Klick außerhalb schließt Menü
      document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
          link.setAttribute('aria-expanded', 'false');
          menu.classList.remove('active');
        }
      });
    }
  });
});
