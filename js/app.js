// Back to top
const backToTop = () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};

const backToTopElements = document.getElementsByClassName("back-to-top");
for (let i = 0; i < backToTopElements.length; i++) {
  backToTopElements[i].addEventListener("click", backToTop, false);
}

// Navbar Handler
const navbarHandler = () => {
  const navigationAnchorPointCollection = document.getElementsByClassName(
    "navigation-anchor-point"
  );
  const navLinkCollection = document.getElementsByClassName(
    "lbn-navbar-link-block"
  );
  let activeSectionIndex = 0;

  for (let i = 0; i < navigationAnchorPointCollection.length; i++) {
    navLinkCollection[i].classList.remove("active");
    if (
      navigationAnchorPointCollection[i].getBoundingClientRect().top <
      window.innerHeight / 4
    ) {
      activeSectionIndex = i;
    }
  }

  navLinkCollection[activeSectionIndex].classList.add("active");
};

// Scroll events handler
const scollEventsHandler = () => {
  navbarHandler();
};

// DOM Loaded events handler
DOMLoadedEventsHandler = () => {
  console.log("~ ᔕᗩᖇᗩ 👰💕🤵 ᒍOᑎᗩTᕼᗩᑎ ~"); // ;)
  navbarHandler();
};

// Scroll event
document.addEventListener("scroll", scollEventsHandler);

// DOM Loaded event
document.addEventListener("DOMContentLoaded", DOMLoadedEventsHandler, false);
