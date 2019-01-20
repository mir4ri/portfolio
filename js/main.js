// scroll
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        var menuHeight = $("html").outerHeight(true);
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1250
        );
      }
    }
  });


// bg

particlesJS("particles-js", {
  particles: {
    number: {
      value: 95,
      density: { enable: false, value_area: 5366.203963099454 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 2, color: "#fafafa" },
      polygon: { nb_sides: 7 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.7417987831343363,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 11.988011988011989,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 94.69771699587272,
      color: "#fafafa",
      opacity: 0.60764368405685,
      width: 0.6313181133058181
    },
    move: {
      enable: true,
      speed: 11,
      direction: "bottom-right",
      random: true,
      straight: true,
      out_mode: "bounce",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "buble" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 400,
        size: 4.060386061506726,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
