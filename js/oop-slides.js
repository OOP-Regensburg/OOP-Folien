/* eslint-env browser */

const DEFAULT_CHARSET = "utf-8",
    DEFAULT_SLIDE_PATH = "slides/00-Default.md"

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
            { src: 'plugin/zoom-js/zoom.js', async: true },
            { src: "plugin/highlight/highlight.js", async: true }
        ]
    });
}

function enablePDFExport() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = window.location.search.match(/print-pdf/gi) ? "css/print/pdf.css" : "css/print/paper.css";
    document.getElementsByTagName("head")[0].appendChild(link);
}

// Load slides 
let slides = getSlidePathFromURL();
setSlides(slides);
enablePDFExport();
initializeReveal();