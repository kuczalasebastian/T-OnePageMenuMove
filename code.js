window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYoffset > 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
  