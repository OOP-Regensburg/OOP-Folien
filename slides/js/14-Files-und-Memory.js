(function() {

let elements = {
	nextButton: document.querySelector(".memory-menu .button.next"),
	backButton: document.querySelector(".memory-menu .button.back"),
	heapFrameFields: document.querySelectorAll(".memory-visualizer .frame.heap .field"),
	stackFrameFields: document.querySelectorAll(".memory-visualizer .frame.stack .field"),
	codeEl: document.querySelector(".memory-visualizer .code"),
	infoEl: document.querySelector(".memory-visualizer .code .info")
},
frames = [{
	lines: ["public void initalize() {", "\tPoint p1 = new Point(5,4);", "\tPoint p2 = new Point(2,3);", "\tp1.move(10,15);", "}"],
	selectedLines: [1],
	info: "Bei Aufruf der Methode <code>run</code> werden alle lokalen Variablen und Parameter angelegt.",
	heap: [],
	stack: [{label: "", value: "Overhead", isHighlighted: true}, {label: "p1", value: "-", isHighlighted: false},{label: "p2", value: "-", isHighlighted: false}]
},{
	lines: ["public void initalize() {", "\tPoint p1 = new Point(5,4);", "\tPoint p2 = new Point(2,3);", "\tp1.move(10,15);", "}"],
	selectedLines: [2,3],
	info: "1000 ist eine Adresse (Speicheradresse) und zeigt auf den Speicher, an dem Objekt p1 <i>lebt</i>. Der Konstruktor gibt diese Adresse zurück.",
	heap: [{label: "", value: "Overhead", isHighlighted: true}, {label: "px", value: "5", isHighlighted: false},{label: "py", value: "4", isHighlighted: false},
	{label: "", value: "Overhead", isHighlighted: true},{label: "px", value: "2", isHighlighted: false},{label: "py", value: "3", isHighlighted: false}],
	stack: [{label: "", value: "Overhead", isHighlighted: true}, {label: "p1", value: "1000", isHighlighted: false},{label: "p2", value: "100C", isHighlighted: false}]
},{
	lines: ["public void initalize() {", "\tPoint p1 = new Point(5,4);", "\tPoint p2 = new Point(2,3);", "\tp1.move(10,15);", "}", "", "/* Point.java */", "", "public void move(int dx, int dy) {", "\tpx += dx;", "\tpy += dy;", "}"],
	selectedLines: [4],
	info: "Der Aufruf der Methode <code>move</code> erzeugt einen neuen <i>stack frame</i>. Der Methode wird ein (versteckter) Paramter übergeben, der auf das aktuelle Objekt verweist.",
	heap: [{label: "", value: "Overhead", isHighlighted: true}, {label: "px", value: "5", isHighlighted: false},{label: "py", value: "4", isHighlighted: false},
	{label: "", value: "Overhead", isHighlighted: true},{label: "px", value: "2", isHighlighted: false},{label: "py", value: "3", isHighlighted: false}],
	stack: [{label: "", value: "Overhead", isHighlighted: true}, {label: "p1", value: "1000", isHighlighted: false},{label: "p2", value: "100C", isHighlighted: false},
	{label: "", value: "Overhead", isHighlighted: true}, {label: "this", value: "1000", isHighlighted: false},{label: "dx", value: "10", isHighlighted: false}, {label: "dy", value: "15", isHighlighted: false}]
},{
	lines: ["public void initalize() {", "\tPoint p1 = new Point(5,4);", "\tPoint p2 = new Point(2,3);", "\tp1.move(10,15);", "}", "", "/* Point.java */", "", "public void move(int dx, int dy) {", "\tpx += dx;", "\tpy += dy;", "}"],
	selectedLines: [4,10,11],
	info: "",
	heap: [{label: "", value: "Overhead", isHighlighted: true}, {label: "px", value: "15", isHighlighted: false},{label: "py", value: "19", isHighlighted: false},
	{label: "", value: "Overhead", isHighlighted: true},{label: "px", value: "2", isHighlighted: false},{label: "py", value: "3", isHighlighted: false}],
	stack: [{label: "", value: "Overhead", isHighlighted: true}, {label: "p1", value: "1000", isHighlighted: false},{label: "p2", value: "100C", isHighlighted: false},
	{label: "", value: "Overhead", isHighlighted: true}, {label: "this", value: "1000", isHighlighted: false},{label: "dx", value: "10", isHighlighted: false}, {label: "dy", value: "15", isHighlighted: false}]
},{
	lines: ["public void initalize() {", "\tPoint p1 = new Point(5,4);", "\tPoint p2 = new Point(2,3);", "\tp1.move(10,15);", "}", "", "/* Point.java */", "", "public void move(int dx, int dy) {", "\tpx += dx;", "\tpy += dy;", "}"],
	selectedLines: [],
	info: "Sobald die Methode beendet wurde, wird der verwendete Speicherbereich freigegeben (<i>popped of the stack</i>).",
	heap: [{label: "", value: "Overhead", isHighlighted: true}, {label: "px", value: "15", isHighlighted: false},{label: "py", value: "19", isHighlighted: false},
	{label: "", value: "Overhead", isHighlighted: true},{label: "px", value: "2", isHighlighted: false},{label: "py", value: "3", isHighlighted: false}],
	stack: [{label: "", value: "Overhead", isHighlighted: true}, {label: "p1", value: "1000", isHighlighted: false},{label: "p2", value: "100C", isHighlighted: false}]
}],
currentFrame = -1;


function next() {
	if(currentFrame < frames.length-1) {
		currentFrame++;
	}
	render(frames[currentFrame]);
}

function back() {
	if(currentFrame > 0) {
		currentFrame--;
	}
	render(frames[currentFrame]);
}

function render(frame) {
	reset();
	renderLines(frame.lines, frame.selectedLines);
	renderInfoText(frame.info);
	renderFrame(elements.heapFrameFields, frame.heap, false);
	renderFrame(elements.stackFrameFields, frame.stack, true);
}

function renderLines(lines, selectedLines) {
	for(let i = 1; i <= lines.length; i++) {
		let line = lines[i-1],
		lineEl = document.createElement("li");
		lineEl.innerHTML = "<span class=\"line-number\">" + i + "</span>" + line;
		if(selectedLines.includes(i)) {
			lineEl.classList.add("selected");
		}
		elements.codeEl.appendChild(lineEl);
	}
}

function renderInfoText(text) {
	elements.infoEl.innerHTML = text;
	elements.codeEl.insertBefore(elements.infoEl, elements.codeEl.lastChild.nextSibling);
}

function renderFrame(fields, content, reverse) {
	for(let i = 0; i < content.length; i++) {
		let el = fields[i];
		if(reverse === true) {
			el = fields[fields.length-1-i];
		}
		el.querySelector(".label").innerHTML = content[i].label;
		el.querySelector(".value").innerHTML = content[i].value;
		if(content[i].isHighlighted === true) {
			el.querySelector(".value").classList.add("highlighted");
		}
		el.classList.remove("hidden");
	}
}

function reset() {
	elements.infoEl.innerHTML = "";
	removeLinesFromCode();
	clearFrames();

}

function removeLinesFromCode() {
	let lines = elements.codeEl.querySelectorAll("li");
	Array.prototype.forEach.call( lines, function( node ) {
    	node.parentNode.removeChild(node);
	});
}

function clearFrames() {
	clearFrame(elements.heapFrameFields);
	clearFrame(elements.stackFrameFields);
}

function clearFrame(fields) {
	Array.prototype.forEach.call( fields, function( node ) {
		node.querySelector(".value").classList.remove("highlighted");
    	node.classList.add("hidden");
	});
}


elements.nextButton.addEventListener("click", next);
elements.backButton.addEventListener("click", back);
reset();

}());