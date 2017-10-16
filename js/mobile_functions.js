$( document ).ready(function() {
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    if (isMobile.matches) {
      document.getElementById("page_content").style.display = "none";
      document.getElementById("top_bar").style.display = "none";
      document.getElementById("addtoany").style.display = "none";
      document.getElementById("mobile_content").style.display = "inline-block";
    }
 });
