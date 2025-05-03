// Open external links in new tabs
(function() {
  // Wait for document to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Select all links that aren't internal anchors and don't have target already set
    var links = document.querySelectorAll('a[href^="http"]:not([target]), a[href^="https"]:not([target]), a[href$=".pdf"]:not([target])');
    
    links.forEach(function(link) {
      // Skip links to the current site
      if (!link.hostname || link.hostname === window.location.hostname) {
        return;
      }
      
      // Add target and security attributes
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
    
    // Special handling for PDF buttons and HTML buttons that should always open in new tab
    var specialButtons = document.querySelectorAll('a.btn[href$=".pdf"], a.btn--html');
    specialButtons.forEach(function(button) {
      button.setAttribute('target', '_blank');
      button.setAttribute('rel', 'noopener noreferrer');
    });
  });
})();
