(function() {

    let context = {
        button: document.querySelector(".step-button"),
        lineValue: document.querySelector(".current-line.step-value"),
        myDoubleValue: document.querySelector(".myDouble.step-value"),
        myIntValue: document.querySelector(".myInt.step-value"),
        anotherIntValue: document.querySelector(".anotherInt.step-value"),
        currentLine: 0,
    };

    function reset() {
        context.button.innerHTML = "Methode run ausführen";
        context.currentLine = 0;
        context.myDoubleValue.innerHTML = "-"
        context.myIntValue.innerHTML = "-"
        context.anotherIntValue.innerHTML = "-"
        context.lineValue.innerHTML = "-"
        context.button.classList.remove("disabled");
    }

    function step() {
        if(context.button.classList.contains("disabled")) {
            reset();
            return;
        }
        if (context.currentLine === 0) {
            context.button.innerHTML = "Nächster Schritt";
        }
        context.currentLine += 1;
        context.lineValue.innerHTML = context.currentLine;
        switch (context.currentLine) {
            case 2:
                context.myDoubleValue.innerHTML = 4.2;
                break;
            case 3:
                context.myIntValue.innerHTML = 42;
                break;
            case 4:
                break;
            case 5:
                context.anotherIntValue.innerHTML = 24;
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
            context.button.innerHTML = "Ende (Klick für Neustart)";
            return;
        }

    }

    document.querySelector("#stepButtonForVariableDemo").addEventListener("click", step);

}());