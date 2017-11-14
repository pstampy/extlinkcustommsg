jQuery(document).ready(function($) {

$('a[href^="http://"]').filter(function() {
	return this.hostname && this.hostname !== location.hostname;
    })
    .addClass("external")

$('[href*="business.gov.au"]').removeClass('external');
$('[href*="business.gov.au"]').addClass('business');

$('[href*="industry.gov.au"]').removeClass('external');
$('[href*="industry.gov.au"]').addClass('industry');

$('a.external').on('click',function(){
      var x = window.confirm('You are now leaving the ministers website for a website external to the department');
      var val = false;
      if (x)
      val = true;
      else
      val = false;
      return val;

    });

$('a.industry').on('click',function(){
      var x = window.confirm('You are now leaving the ministers website for the main industry website');
      var val = false;
      if (x)
      val = true;
      else
      val = false;
      return val;

    });

$('a.business').on('click',function(){
      var x = window.confirm('You are now leaving the ministers website for business gov au website');
      var val = false;
      if (x)
      val = true;
      else
      val = false;
      return val;

    });

});