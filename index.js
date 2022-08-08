window.onload = function () {
  navbarToggle();
  navbarLink();
  tabToggle();
  cycleGreetings();
  changeSVGColor("logo-bofa", "#f2f3f4");
};

// switches active navbar tab on selection
navbarToggle = function () {
  $(function () {
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse("hide");
    });
  });
};

// switches active navbar tab with scroll
navbarLink = function () {
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: ".navbar",
  });
};

// switches active navbar tab for eperience-navbar
tabToggle = function () {
  $(".experience a").on("click", function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
};

colorChange = function () {

};
