document.addEventListener("DOMContentLoaded", () => {
  $("#order-landlord-feedback-button").on("click", function() {
    $(".order .cover").css({
      "opacity": "1", 
      "transform": "translateX(0)"
    });
    $(".order .cover-modal").css({
      "background-color": "rgba(0, 0, 0, 0.25)",
      "opacity": "1",
      "visibility": "visible"
    });
    $("body").css({
      "overflow": "hidden",
      "margin-right": "17px",
      "touch-action": "none"
    });
  });
  $(".order .form.modal .input-close").on("click", function() {
    $(".order .cover").css({
      "opacity": "0",
      "transform": "translateX(100%)"
    });
    $(".order .cover-modal").css({
      "background-color": "unset",
      "opacity": "0",
      "visibility": "hidden"
    });
    $("body").css({
      "overflow": "unset",
      "margin-right": "0",
      "touch-action": "unset"
    });
  });
});