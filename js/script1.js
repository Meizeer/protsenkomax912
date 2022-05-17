"use strict";
$(document).ready(function () {

  // Активація анімації за допомогою бібліотеки AOS
  AOS.init();
  window.addEventListener("load", AOS.refresh);
  AOS.init({
    once: true
  })

  // Плавне гортання сторінки
  $(".goto").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
          scrollTop: $(hash).offset().top,
        },
        2000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Кнопка «нагору»
  var button = $('#button-up');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 200);
    return false;
  });

  // Перемикач світлої та темної тем
  const input = document.querySelector(".theme-switcher input");

  input.addEventListener("change", (e) => {
    if (e.target.checked) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  });
});