 $('.main-slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    slidesToScroll: 1,
                    arrows:true
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows:true
                }
            }
        ]
        
    });

        //*****************************
    // Match Height Functions
    //*****************************
    $('.matchheight').matchHeight();

     //*****************************
    // top to bottom
    //*****************************

    var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// onclick change section

$('.js-anchor-link').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});