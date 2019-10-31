/* eslint-env browser */
/* global Reveal */
(function() {
  const DEFAULT_CHARSET = "utf-8",
    DEFAULT_SLIDE = "00-Default",
    DEFAULT_START_SLIDE = 1;

  function getSlidesFromURL() {
    let slides = {},
      url = new URL(window.location.href),
      slideName = url.searchParams.get("slides"),
      startSlide = url.searchParams.get("startAtSlide");
    if (slideName === undefined) {
      slideName = DEFAULT_SLIDE;
    }
    if (startSlide === undefined) {
      startSlide = DEFAULT_START_SLIDE;
    }
    // Slides and custom Javascript and Stylesheets must be stored in /slides (i.e /slides/js or /slides/css)
    slides.path = "slides/" + slideName + ".md";
    // Reveal.js uses zero-indexed slide numbers
    slides.startAt = startSlide - 1;
    slides.css = "slides/css/" + slideName + ".css";
    slides.js = "slides/js/" + slideName + ".js";
    return slides;
  }

  function setSlides() {
    let slidesContainer = document.querySelector(".slides section");
    slidesContainer.setAttribute("data-markdown", slides.path);
    slidesContainer.setAttribute("data-charset", DEFAULT_CHARSET);
  }

  function injectCustomElement(src, tag, attributes, parent) {
    let customEl;
    checkIfCustomFileExist(src).then(function() {
      customEl = document.createElement(tag);
      for (let i = 0; i < attributes.length; i++) {
        customEl.setAttribute(attributes[i].name, attributes[i].value);
      }
      document[parent].appendChild(customEl);
    }).catch(function() {
      // Do nothing when no custom file were found
    });
  }

  function checkIfCustomFileExist(url) {
    return new Promise(function(resolve, reject) {
      fetch(url).then(function(response) {
        if (response.ok) {
          resolve();
        } else {
          reject();
        }
      });
    });
  }

  function initializeReveal(slides, onReady) {
    Reveal.initialize({
      controls: true,
      progress: true,
      center: false,
      margin: 0.1,
      slideNumber: "c/t",
      transition: "none",
      overview: true,
      pdfMaxPagesPerSlide: 1,
      dependencies: [
        { src: "plugin/markdown/marked.js" },
        { src: "plugin/markdown/markdown.js" },
        { src: "plugin/search/search.js", async: true },
        { src: "plugin/notes/notes.js", async: true },
        { src: "plugin/zoom-js/zoom.js", async: true },
        { src: "plugin/highlight/highlight.js", async: true },
      ],
    });
    Reveal.addEventListener("ready", onReady);
  }

  // Load slides 
  let slides = getSlidesFromURL();
  setSlides(slides);
  // Inject custom CSS if available
  injectCustomElement(slides.css, "link", [{ name: "href", value: slides.css },
    { name: "rel", value: "stylesheet" }], "head");
  // Init Reveal.js and await for ready callback
  initializeReveal(slides, function() {
    // Inject custom JS if available
    injectCustomElement(slides.js, "script", [{
      name: "src",
      value: slides.js,
    }, { name: "type", value: "text/javascript" }], "body");
    // Move to custom start sliden if set
    Reveal.slide(slides.startAt);
  });
}());