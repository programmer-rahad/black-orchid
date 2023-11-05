// Javascript
!function () {

    // Tab Javascript
    function Tab(tabWrapper) {
        const tabButtons = tabWrapper.querySelectorAll('.tab__buttons button');
            const tabItems = tabWrapper.querySelectorAll('.tab__items .tab__item');

            if (tabItems.length) {
                tabButtons.forEach(function (button, i) {
                    button.addEventListener('click', function () {
                        tabItems.forEach(function (tabItem, i) {
                            tabItem.classList.remove('active');
                            tabButtons[i].classList.remove('active');
                        });
                        tabItems[i].classList.add('active');
                        tabButtons[i].classList.add('active');
                    });
                });
            }
    }
    

    const $ = (selector, areAll) => {
        const all = document.querySelectorAll(selector)
        const single = document.querySelector(selector)
        return areAll ? all : single
    }
    function Topbar() {
        $('.topbar img:last-child').onclick = function () {
            this.parentElement.remove();
        }
    }
    function Header() {
        const nav = $('header nav');
        const buttons = $('header .buttons');
        let condition = true;
        const src = 'assets/images/icons/menu.svg';

        function showNavButtonsDesktop() {
            console.log('First Function');
            if (window.innerWidth > 1199) {
                nav.classList.remove('d-none');
                buttons.classList.remove('d-none');
            } else {
                nav.classList.add('d-none');
                buttons.classList.add('d-none');
            }
        }

        $('.menu-icon').onclick = function () {
            nav.classList.toggle('d-none');
            buttons.classList.toggle('d-none');
            this.children[0].src = !condition ? src : src.replace('menu', 'menu-open');
            condition = !condition;
        }
        window.addEventListener('resize', showNavButtonsDesktop)
    }

    function ProductTab() {
         Tab($('.tab--wrapper'));
    }

    // Load Event
    document.addEventListener('DOMContentLoaded', function () {
        Topbar();
        Header();
        ProductTab();
    });


    // Window Resize Event
}();

// jQuery
!function () { 
    $(".common-slider").owlCarousel({
        // items: 4,
        margin: 10,
        loop:true,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1, 
            },
            600: {
                items: 2,
            },
            950: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });
    $(".feature-slider").owlCarousel({
        // items: 4,
        loop:true,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1, 
                margin: 15,
            },
            600: {
                items: 2,
                margin: 215,
            },
            950: {
                items: 3,
                margin: 20
            },
            1200: {
                items: 4,
                margin: 25
            },
        }
    });
    $("#testimonials .owl-carousel").owlCarousel({
       
        loop:true,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1, 
            },
            600: {
                items: 2,
            },
            950: {
                items: 3,
                margin: 30,
            },
            1200: {
                items: 4,
                margin: 40
            },
        }
    });
    $(".shop-the-feed").owlCarousel({
        // items: 4,
        margin: 10,
        loop:true,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1, 
                margin: 15,
            },
            600: {
                items: 2,
            },
            950: {
                items: 3,
            },
            1200: {
                items: 4,
                margin: 20
            },
            1230: {
                items: 5
            },
        }
    });
    
    // Size Button Carousel
    $(".size-buttons ul").owlCarousel({
        items: 5,
        margin: 10,
        loop:false,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 5, 
            },
            600: {
                items: 6,
            },
            700: {
                items: 7,
            },
            800: {
                items: 8,
            },
            900: {
                items: 9,
            },
        //     1200: {
        //         items: 4,
        //     },
        }
    });
    // Size Items Carousel
    // $(".size-items").owlCarousel({
    //     margin: 10,
    //     loop:false,
    //     dots: false,
    //     nav: true,
    //     navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    //     responsive: {
    //         0: {
    //             items: 5, 
    //         },
    //         600: {
    //             items: 6,
    //             margin: 30
    //         },
    //         700: {
    //             items: 7,
    //         },
    //         800: {
    //             items: 8,
    //         },
    //         900: {
    //             items: 9,
    //             margin: 70
    //         },
    //         1200: {
    //             items: 4,
    //         },
    //     }
    // });

}();