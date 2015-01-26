$(function() {
    
    // IE detect
    function iedetect(v) {

        var r = RegExp('msie' + (!isNaN(v) ? ('\\s' + v) : ''), 'i');
        return r.test(navigator.userAgent);
            
    }

    // Wait until the video meta data has loaded
    $('.background_video video').on('loadedmetadata', function() {
        
        var $width, $height, // Width and height of screen
            $vidwidth = this.videoWidth, // Width of video (actual width)
            $vidheight = this.videoHeight, // Height of video (actual height)
            $aspectRatio = $vidwidth / $vidheight; // The ratio the video's height and width are in
                    
        (adjSize = function() { // Create function called adjSize
                        
            $width = $(window).width(); // Width of the screen
            $height = $(window).height(); // Height of the screen
                        
            $boxRatio = $width / $height; // The ratio the screen is in
                        
            $adjRatio = $aspectRatio / $boxRatio; // The ratio of the video divided by the screen size
                        
            // Set the container to be the width and height of the screen
            $('.background_video').css({'width' : $width+'px', 'height' : $height+'px'}); 
                        
            if($boxRatio < $aspectRatio) { // If the screen ratio is less than the aspect ratio..
                // Set the width of the video to the screen size multiplied by $adjRatio
                $vid = $('.background_video video').css({'width' : $width*$adjRatio+'px'}); 
            } else {
                // Else just set the video to the width of the screen/container
                $vid = $('.background_video video').css({'width' : $width+'px'});
            }
                             
        })(); // Run function immediately
                    
        // Run function also on window resize.
        $(window).resize(adjSize);
                    
    });
    
});