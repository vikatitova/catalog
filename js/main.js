$(document).ready(() => {

  $(".burger-nav").on("click", () => {
    $(window).width() < 768
      ? $('.open').toggle('slide', { direction: 'left'}, 500)
      : $('.open').toggle('slide', { direction: 'right'}, 500);
    setTimeout(() => {
      $("header nav span").toggleClass("close");
    }, 200)
  });

  $(".nav2 .burger-close").on("click", () => {
    $(window).width() < 768
      ? $('.open').toggle('slide', { direction: 'left'}, 500)
      : $('.open').toggle('slide', { direction: 'right'}, 500);
    setTimeout(() => {
      $("header nav span").removeClass("close");
    }, 100)
  });

  $(".header_search").on("click",() => {
    $('.search-open').toggle('slide', { direction: 'right'}, 500);
  });

  $(".form .burger-close").on("click", () => {
    $('.search-open').toggle('slide', { direction: 'right'}, 500);
  });

  $("#linkToTop").click((e) => {
    e.preventDefault();
    scrollToAnchor('top');
  });

});

const scrollToAnchor = (aid) => {
  var aTag = $("a[name='"+ aid +"']");
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$('.carousel').carousel({
  interval: 5000
});
