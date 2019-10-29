/* eslint-env browser */
/* global Reveal */
(function() {
  const DEFAULT_CHARSET = "utf-8",
    DEFAULT_SLIDE_PATH = "slides/00-Default.md";

  function getSlidePathFromURL() {
    let url = new URL(window.location.href),
      slidePath = url.searchParams.get("slides");
    if (slidePath) {
      return `slides/${slidePath}.md`;
    }
    return DEFAULT_SLIDE_PATH;
  }

  function setSlides(pathToSlides) {
    let slidesContainer = document.querySelector(".slides section");
    slidesContainer.setAttribute("data-markdown", pathToSlides);
    slidesContainer.setAttribute("data-charset", DEFAULT_CHARSET);
  }

  function injectCustomJavascript(slides) {
    let jsPath = slides.replace("/", "/js/").replace(".md", ".js"),
      scriptEl = document.createElement("script");
    scriptEl.setAttribute("src", jsPath);
    scriptEl.setAttribute("type", "text/javascript");
    document.body.appendChild(scriptEl);
  }

  function injectCustomCSS(slides) {
    let cssPath = slides.replace("/", "/css/").replace(".md", ".css"),
      cssEl = document.createElement("link");
      cssEl.setAttribute("href", cssPath);
      cssEl.setAttribute("rel", "stylesheet");
    document.head.appendChild(cssEl);
  }

  function initializeReveal(slides) {
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
    Reveal.addEventListener("ready", function() {
        injectCustomJavascript(slides);
    });
  }

  function enablePDFExport() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = window.location.search.match(/print-pdf/gi) ?
      "css/print/pdf.css" :
      "css/print/paper.css";
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  // Load slides 
  let slides = getSlidePathFromURL();
  setSlides(slides);
  injectCustomCSS(slides);
  enablePDFExport();
  initializeReveal(slides);
}());