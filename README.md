# extlinkcustommsg - About

Firstly, I don't think this is a great idea, but:

We had a requirement to show a different message depending if it was external to our department, or internal to our department, but external to the particular website. This can later be modified to be a modal or just a hover link msg.

extlinkcustommsg was created in place of the extlink module for drupal (https://www.drupal.org/project/extlink) being unavailable in the GovCMS distro (SaaS).

The example js file has comments for further assistance.

## Quick start 

Add this to your html.tpl.php file:


    <script type="text/javascript" language="javascript">
    jQuery(document).ready(function($) {
    $('a[href^="http"]').filter(function() {
    return this.hostname && this.hostname !== location.hostname;
    })
    .addClass("external")
    $('a.external').on('click', function() {
    return window.confirm('You are now leaving this website for an external website.');
    });
    });
    </script>

This will take any a href that isn't internal, add the "external" class, and then show the message when the link is selected. 

## Custom message based on URL

The proper intention of this code was to apply a class to all external websites, then modify the class if they're a particular URL.

Add this to your html.tpl.php file if you have a need to show different messages for different URLs:

    <script type="text/javascript" language="javascript">
    jQuery(document).ready(function($) {
    $('a[href^="http://"]').filter(function() {
    return this.hostname && this.hostname !== location.hostname;
    })
    .addClass("external")

    var sitesClasses = [
    {
    hostname: 'website1.gov.au', 
    class: 'website1', 
    message: 'You are now leaving this website for the website1.gov.au website'
    },
    {
    hostname: 'website2.gov.au', 
    class: 'website2',
    message: 'You are now leaving this website for the website2.gov.au website'
    },
    ] 

    $.each(sitesClasses, function(index) {
    $('[href*="' + sitesClasses[index]['hostname'] + '"]').removeClass('external').addClass(sitesClasses[index]     ['class']);
    $('a.' + sitesClasses[index]['class'] + '').on('click',function(){
    return window.confirm(sitesClasses[index]['message'])
    });
    });

    $('a.external').on('click',function(){
    return window.confirm('You are now leaving this website for an external website.');
    });
    });
    </script>

Any number of custom messages for urls can be added by adding this text under var sitesClasses:
```
   {
   hostname: 'URL', 
   class: 'class', 
   message: 'Your message'
    },
```

