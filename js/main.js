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
          1500
        );
      }
    }
  });

  // slide right 

// (function () {

//   var slide = {
//     navToggle: document.querySelector('.btn-to'),
//     nav: document.querySelector('nav'),

//     doToggle: function (e) {
//       e.preventDefault();
//       this.navToggle.classList.toggle('expanded');
//       this.nav.classList.toggle('expanded');
//     }
//   };

//   slide.navToggle.addEventListener('click', function (e) { slide.doToggle(e); });
//   slide.nav.addEventListener('click', function (e) { slide.doToggle(e); });

// }());
