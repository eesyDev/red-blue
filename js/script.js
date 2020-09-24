window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger'),
    slideMenu = document.querySelector('.slide-menu'),
    navigation = document.querySelector('.nav-overlay');

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        navigation.classList.toggle('nav-overlay-active');
        slideMenu.classList.toggle('slide-menu-active');
    });
    
    $('a.ajax-link').live('click', function() {
        $this = $(this);
        var link = $this.attr('href');
        if (link != currentUrl && link != '#') {
            $.ajax({
                url:link,
                processData:true,
                dataType:'html',
                success:function(data){
                    document.title = $(data).filter('title').text();
                }
            })
        }
    });
});