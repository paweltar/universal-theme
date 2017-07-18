import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import $ from "jquery";
import "uikit/dist/css/uikit.css";
import "./components/gallery-section";
import "./components/contact-section";

UIkit.use(Icons);

$(document).ready(function() {
  const mobileMenu = document.querySelector("#modal-full");
  mobileMenu.addEventListener("click", function() {
    UIkit.modal(this).hide();
  });
});
