function initGoogleMap() { 
    //Map settings

    //Coordinates
    var myLatlng = new google.maps.LatLng(47.614462,-122.312635);

    //options
    var mapOptions = {
      zoom: 14, 
      zoomControl:false,
      panControl:false,
      scrollwheel: false,
      scaleControl:false,
      mapTypeControl:false,
      draggable:false,
      streetViewControl:false,
      overviewMapControl:false,
      rotateControl:false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    // Render map
    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions); 

    //map marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"iF"
    });

    // Create a new InfoWindow
    /*var infowindow = new google.maps.InfoWindow({ 
      content:'&quot;&lt;h3&gt;Snowdown Summit Cafe&lt;/h3&gt;&lt;p&gt;Railway Drive-through available.&lt;/p&gt;&quot;'
    });*/
 
    google.maps.event.addListener(marker, 'click', function() { // Add a Click Listener to our marker
        window.open('https://goo.gl/maps/NJ5Zv', '_newtab');
    });
}

// Execute our 'initGoogleMap' function once the page has loaded.
google.maps.event.addDomListener(window, 'load', initGoogleMap); 
google.maps.event.addDomListener(window, 'resize', initGoogleMap);