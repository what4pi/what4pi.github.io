function setActiveLink() {
  var pathArray = window.location.pathname.split('/');

  var currentPage = pathArray[pathArray.length - 1];

  currentPage = currentPage.replace('.html', '');

  var links = document.querySelectorAll('header nav ul li a');

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var linkHref = link.getAttribute('href');

    if (linkHref === currentPage) {
      link.classList.add('active');
    }
  }
}

window.onload = setActiveLink;