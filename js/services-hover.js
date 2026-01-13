/* =============================================
   SERVICE HOVER STATE MANAGEMENT
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
  // Select all service sections
  const serviceSections = document.querySelectorAll(
    '.services-bg-section, ' +
    '.graphics-bg-section, ' +
    '.vfx-bg-section, ' +
    '.web-bg-section, ' +
    '.cta-bg-section, ' +
    '.web-section'
  );
  
  // Add revealed class on hover - never remove (keeps content visible)
  serviceSections.forEach(section => {
    section.addEventListener('mouseenter', function() {
      const number = section.querySelector('.service-number');
      const content = section.querySelector('.service-content');
      
      if (number) {
        number.classList.add('revealed');
      }
      if (content) {
        content.classList.add('revealed');
      }
    });
    
    // DO NOT remove revealed class on mouseleave
    // Content stays visible permanently after first hover
  });
});
