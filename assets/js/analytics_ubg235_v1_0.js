(function() {
  // Create a new script element
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WMGVFPJL5E';

  // Append the script to the document head
  document.head.appendChild(script);

  // Initialize the dataLayer and gtag function
  script.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-WMGVFPJL5E');
  };
})();

