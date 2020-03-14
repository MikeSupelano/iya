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

       