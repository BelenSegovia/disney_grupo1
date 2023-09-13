
$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 5,
    autoplay: false,
    accessibility: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: false,
        }
      }
    ]
  });
  

  let $st = $('.pagination');
  let $slickEl = $('.center');
  $slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    $st.text(i + ' of ' + slick.slideCount);
  });
  
  $slickEl.slick({
    centerMode: true,
    centerPadding: '170px',
    accessibility: false,
    slidesToShow: 1,
    focusOnSelect: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  });

