jQuery(document).ready(function($) {


//Find/save your host name to exclude class being added to a href
$('a[href^="https://"]').filter(function() {
	return this.hostname && this.hostname !== location.hostname;
    })
//Add class "external" to all other a href (eg external website links)
    .addClass("external")

//Remove then add a different class to particular URLs    

$('[href*="drupal.org"]').removeClass('external');
$('[href*="drupal.org"]').addClass('drupal');

$('[href*="stackoverflow.com"]').removeClass('external');
$('[href*="stackoverflow.com"]').addClass('stackoverflow');

//If a href has .external, display this message when selected.

$('a.external').on('click',function(){
      var x = window.confirm('You are now leaving this website for an external website.');
      var val = false;
      if (x)
      val = true;
      else
      val = false;
      return val;

    });

//If a href has .drupal, display this msg when link is selected

$('a.drupal').on('click',function(){
      var x = window.confirm('You are now leaving this website for the Drupal.org website');
      var val = false;
      if (x)
      val = true;
      else
      val = false;
      return val;

    });


//If a href has .stackoverflow, display this msg when link is selected

$('a.stackoverflow').on('click',function(){
      var x = window.confirm('You are now leaving this website for the stackoverflow website');
      var val = false;
      if (x)
      val = true;
      else
      val = false;
      return val;

    });

});