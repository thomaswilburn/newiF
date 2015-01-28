$(function () {
    var tabs = (function(tab) {

        function init() {
            var tabContent = $(".tab_content", tab);
            var tabHeadings = $("ul.tab_headings", tab);
            var h = $('.tab_content.active').outerHeight();

            function setHeight() {
                $('.tab_content_container').css('minHeight', h);
            };

            setHeight();

            $("li", tabHeadings).on('click', function() {
                if ($($('a', this).attr("href")).is('.active')) {
                    return false;
                } else {
                    var index = $(this).index();
                    h = $('.tab_content:eq('+ index +')').outerHeight();
                    //deactivate active tab
                    $('.active').removeClass('active')
                    //activate new tab
                    $(this).addClass('active');
                    $('.tab_content:eq('+ index +'), .tab_image:eq('+ index +')').addClass('active');
                    //set container height
                    setHeight();
                    
                };
                return false;
            });
        }
        init();
    });
    tabs($("#contact_tabs"));
});

