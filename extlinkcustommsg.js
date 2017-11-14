jQuery(document).ready(function($) {


//Find/save your host name to exclude class being added to a href
$('a[href^="http://"]').filter(function() {
  return this.hostname && this.hostname !== location.hostname;
})
//Add class "external" to all other a href (eg external website links)
  .addClass("external")

var sitesClasses = [
  {
  hostname: 'drupal.org', 
  class: 'drupal', 
  message: 'You are now leaving this website for the Drupal.org website'
  },
  {
  hostname: 'stackoverflow.com', 
  class: 'stackoverflow',
  message: 'You are now leaving this website for the stackoverflow website'
  },
  {
  hostname: 'github.com', 
  class: 'github', 
  message: 'You are now leaving this website for the github website'
  }
]

//Remove then add a different class to particular URLs    

$.each(sitesClasses, function(index) {
  $('[href*="' + sitesClasses[index]['hostname'] + '"]').removeClass('external').addClass(sitesClasses[index]['class']);
  $('a.' + sitesClasses[index]['class'] + '').on('click',function(){
    return window.confirm(sitesClasses[index]['message'])
  });
});

//If a href has .external, display this message when selected.
$('a.external').on('click',function(){
  return window.confirm('You are now leaving this website for an external website.');
});

});