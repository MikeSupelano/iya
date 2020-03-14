// init controller
var controller = new ScrollMagic.Controller({});

    // build scenes
    new ScrollMagic.Scene({triggerElement: "#inicio"})
                    .setClassToggle("#t-inicio", "active") // add class toggle
                    .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#porque"})
                    .setClassToggle("#t-porque", "active") // add class toggle
                    .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#servicios"})
                    .setClassToggle("#t-servicios", "active") // add class toggle
                    .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#contacto"})
                    .setClassToggle("#t-contacto", "active") // add class toggle
                    .addTo(controller);

var controller2 = new ScrollMagic.Controller({});

// build scenes
new ScrollMagic.Scene({triggerElement: "#content"})
                .setClassToggle("#main-navbar", "dark") // add class toggle
                .addTo(controller2);


                

//WOW.js fire animations on scroll
var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
    );
wow.init();