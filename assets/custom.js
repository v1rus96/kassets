(function(){
    'use strict';
    var $projects = $('.projects');
    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    })
    $('ul.filters > li').on('click', function(e){
        e.preventDefault();
        var filter = $(this).attr('data-filter');
        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');
        $projects.isotope({filter: filter});
    });

    $(document).ready(function () {
        $(document).on('click', '.card', function(e) {
            e.currentTarget.children[0].select()
            document.execCommand("copy");
            $(this).append(`<div class="overlay"><p>Link Copied</p></div>`)
            setTimeout(() => {
                $('.overlay').remove()
            }, 2000);
        })
     
    })
})(jQuery);

