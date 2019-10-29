/* eslint-env browser */
/* global Reveal */

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

function initializeReveal() {
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
}

function enablePDFExport() {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = window.location.search.match(/print-pdf/gi) ? "css/print/pdf.css" :
    "css/print/paper.css";
  document.getElementsByTagName("head")[0].appendChild(link);
}

// step-function for lecture 03 (variables)
/* eslint-disable */
function stepperForVariableDemo() {
  let context = window.currentStepperContext || {};
  window.currentStepperContext = context;
  context.button = document.querySelector(".step-button");
  context.lineValue = document.querySelector(".current-line.step-value");
  context.myDoubleValue = document.querySelector(".myDouble.step-value");
  context.myIntValue = document.querySelector(".myInt.step-value");
  context.anotherIntValue = document.querySelector(".anotherInt.step-value");
  if (context.currentLine === undefined) {
    context.currentLine = 1;
    context.button.innerHTML = "Nächster Schritt";
  }
  context.currentLine += 1;
  context.lineValue.innerHTML = context.currentLine;
  switch(context.currentLine) {
    case 2:
      context.myDoubleValue.innerHTML = 4.2;
      break;
    case 3:
      context.myIntValue.innerHTML = 42;
      break;
    case 4:
      break;
    case 5:
      context.anotherIntValue.innerHTML = 4.2;
      break;
    case 6:
      context.myIntValue.innerHTML = 1337;
      break;
    case 7:
      context.myIntValue.innerHTML = 1337 + 42;
      break;
    case 8:
      context.anotherIntValue.innerHTML = context.myIntValue.innerHTML;
      break;
    case 9:
      context.myIntValue.innerHTML = 101;
      break;
  }
  if (context.currentLine === 9) {
    context.button.classList.add("disabled");
    context.button.innerHTML = "Ende";
    context.button.removeEventListener("click", this);
    return;
  }

}
/* eslint-enable */

// Load slides 
let slides = getSlidePathFromURL();
setSlides(slides);
enablePDFExport();
initializeReveal();