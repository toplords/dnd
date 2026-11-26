// Simple Lightbox JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Create lightbox element
  var lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="lightbox-close">&times;</span>
      <img src="" alt="">
      <div class="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  // Get all thumbnail images
  var thumbnails = document.querySelectorAll('.thumbnail');

  thumbnails.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      var src = this.getAttribute('src');
      var alt = this.getAttribute('alt') || '';
      var caption = this.getAttribute('data-caption') || '';

      // Set lightbox content
      var img = lightbox.querySelector('img');
      var captionDiv = lightbox.querySelector('.lightbox-caption');
      
      img.src = src;
      img.alt = alt;
      captionDiv.textContent = caption;

      // Show lightbox
      lightbox.classList.add('lightbox-active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      lightbox.classList.remove('lightbox-active');
      document.body.style.overflow = '';
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('lightbox-active')) {
      lightbox.classList.remove('lightbox-active');
      document.body.style.overflow = '';
    }
  });
});