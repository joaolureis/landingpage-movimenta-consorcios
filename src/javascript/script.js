$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; 
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');

    });

    ScrollReveal().reveal('#cta', {
        origin: 'left', 
        duration: 3000,
        distance: '20%',
        interval: 200
    });

     ScrollReveal().reveal('#abt', {
        origin: 'right', 
        duration: 2000,
        distance: '20%',
        interval: 200
    });

    ScrollReveal().reveal('#concepts', {
        origin: 'left', 
        duration: 2000,
        distance: '20%',
        interval: 200
    });

    ScrollReveal().reveal('.videos-customer', {
        origin: 'left', 
        duration: 2000,
        distance: '20%',
        interval: 200
    })
});

function redirect() {
    window.location.href = "https://wa.me/message/5DZOB2TI2YFUN1";
}

function click1() {
    window.location.href = "https://wa.me/message/5DZOB2TI2YFUN1";
}

function click2() {
    window.location.href = "https://wa.me/message/5DZOB2TI2YFUN1";
}