 document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('runDocent');
    console.log('Here');
    // onClick's logic below:
    link.addEventListener('click', function() {
      	function(document){var script=document.createElement('script');script.src="//docentedu.com/scripts/docent.min.js";script.async=true;document.getElementsByTagName('head')[0].appendChild(script);}(document);
    });
});