$(document).ready(function() {
    // Initially hide all sections except the home section and footer
    $('section:not(#footer-section)').hide();
  
    // Handle navigation when a menu item is clicked
    $('.nav-item').click(function(e) {
      e.preventDefault();
  
      // Get the target section from the data attribute
      var targetSection = $(this).data('section');
  
      // Show the target section and hide other sections except the home section and footer
      $('#' + targetSection).show().siblings('section').not('#footer-section').hide();
    });
  });