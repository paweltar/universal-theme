import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import $ from "jquery";
// import "aos/dist/aos.css";
// import AOS from "aos";
import "uikit/dist/css/uikit.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel";

UIkit.use(Icons);

$(document).ready(function() {
  $(".slides-container").slick({
    infinite: true,
    draggable: true,
    arrows: false,
    // prevArrow: ".slidenav--prev",
    // nextArrow: ".slidenav--next",
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
