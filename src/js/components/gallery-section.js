import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel";

$(document).ready(function() {
  $(".slides-container").slick({
    infinite: true,
    draggable: true,
    arrows: false,
    dots: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
