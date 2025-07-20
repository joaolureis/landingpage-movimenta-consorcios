$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');

    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();
        const scrollPosition = scrollTop + windowHeight / 2;

        let currentSection = null;

        if (scrollTop + windowHeight >= documentHeight - 10) {
            currentSection = 'footer';
        } else {
            sections.each(function () {
                const top = $(this).offset().top;
                const bottom = top + $(this).outerHeight();

                if (scrollPosition >= top && scrollPosition < bottom) {
                    currentSection = $(this).attr('id');
                }
            });
        }

        $('#nav_list .nav-item, #mobile_nav_list .nav-item').removeClass('active');

        if (currentSection) {
            $('#nav_list .nav-item a[href="#' + currentSection + '"]').parent().addClass('active');
            $('#mobile_nav_list .nav-item a[href="#' + currentSection + '"]').parent().addClass('active');
        }
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
    });
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
