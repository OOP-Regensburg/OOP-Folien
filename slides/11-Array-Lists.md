# Mehrdimensionale Arrays und Listen

<span class="subtitle">Komplexere Datenstrukturen und die einfachere Verwaltung größerer Datenmengen</span>

<span class="blocktext">Struktur und Inhalt des Kurses wurden 2012 von Markus Heckner entwickelt. Im Anschluss haben Alexander Bazo und Christian Wolff Änderungen am Material vorgenommen. Die aktuellen Folien wurden von Alexander Bazo erstellt und können unter der [MIT-Lizenz](https://raw.githubusercontent.com/OOP-Regensburg/OOP-Folien/master/LICENSE) verwendet werden.</span>

>>>

### Aktueller Semesterfortschritt (Woche 11)

<table class="lecture-plan">
<thead>
<tr>
<th>Kursabschnitt</th>
<th>Themen</th>
</tr>
</thead>
<tbody>
<tr>
<td>Grundlagen</td>
<td>
<span class="done">Einführung</span>
<span class="done">Einfache Programme erstellen</span>
<span class="done">Variablen, Klassen &amp; Objekte</span>
<span class="done">Kontrollstrukturen &amp; Methoden</span>
<span class="done">Arrays &amp; komplexe Schleife</span></td>
</tr>
<tr>
<td>Klassenmodellierung</td>
<td>
<span class="done">Grundlagen der Klassenmodellierung</span>
<span class="done">Vererbung &amp; Sichtbarkeit</span>
</tr>
<tr>
<td>Interaktive Anwendungen</td>
<td>
<span class="done">Event-basierten Programmierung</span>
<span class="done">String- &amp; Textverarbeitung</span>
</tr>
<tr>
<td>Datenstrukturen</td>
<td>
<span class="current">Listen, Maps &amp; die Collections</span>
<span>Speicherverwaltung</span>
<span>Umgang mit Dateien</span>
</tr>
<tr>
<td>Software Engineering</td>
<td>
<span>Planhaftes Vorgehen bei der Softwareentwicklung</span>
<span>Qualitätsaspekte von Quellcode</span>
</tr>
</tbody>
</table>

>>>

## Pingo-Quiz

![large-image](slides/images/pingo-2002-01-07.png)

https://pingo.coactum.de/792176

>>>

## Das Programm für heute

- Kurze Wiederholung zu Arrays
- Mehrdimensionale Datenstrukturen und Listen
- Bildverarbeitung mit der ArrayList

>>>

# Wiederholung: Arrays

>>>

**Arrays erstellen**

``` java
int[] values = new int[5];
```

<ul class="arraycontent">
	<li class="element">
		<span class="value">0</span>
		<span class="index">0</span>
	</li>
	<li class="element">
		<span class="value">0</span>
		<span class="index">1</span>
	</li>
	<li class="element">
		<span class="value">0</span>
		<span class="index">2</span>
	</li>
	<li class="element">
		<span class="value">0</span>
		<span class="index">3</span>
	</li>
	<li class="element">
		<span class="value">0</span>
		<span class="index">4</span>
	</li>
</ul>

**Arrays belegen und Werte auslesen**

``` java
values[1] = 2;
```

<ul class="arraycontent">
	<li class="element">
		<span class="value">0</span>
		<span class="index">0</span>
	</li>
	<li class="element">
		<span class="value highlight">2</span>
		<span class="index">1</span>
	</li>
	<li class="element">
		<span class="value">0</span>
		<span class="index">2</span>
	</li>
	<li class="element">
		<span class="value">0</span>
		<span class="index">3</span>
	</li>
	<li class="element">
		<span class="value">0</span>
		<span class="index">4</span>
	</li>
</ul>

``` java
int content = values[1]; // Returns 2
```

**Länge eines Arrays bestimmen**

``` java
int length = values.length; // Returns 5
```

>>>

## Wichtiges zu Arrays (1/2)

- Arrays können für jeden Datentypen erzeugt werden.
- Bei der Initialisierung werden die Felder des Arrays mit *Default*-Werten belegt (primitive Datentypen) oder sind *leer* (`null`, bei Objekten).
- Auf die einzelnen Elemente kann über die Indizes (0 bis *Länge des Arrays - 1*) zugegriffen werden. Wird auf einen ungültigen Index zugegriffen, entsteht ein Fehler: `IndexOutOfBounds`

>>>

## Wichtiges zu Arrays (2/2)

Arrays lassen sich auch als Literale definieren:

``` java
int[] values = {2,5,4,6};

/* entspricht */ 

int[] values = new int[4];
values[0] = 2;
values[1] = 5;
values[2] = 4;
values[3] = 6;
```

>>>

## Arrays sortieren

<span class="blocktext smaller">Algorithmen, die Listen von vergleichbaren Elementen nach gewünschten Kriterien sortieren, nennt man *Sortieralgorithmen*. Einer der einfachsten, in der Praxis aber kaum verwendeten, Sortieralgorithmen ist der **Bubble sort**-Algorithmus:</span>

<blockquote class="smaller">In der Bubble-Phase wird die Eingabe-Liste von links nach rechts durchlaufen. Dabei wird in jedem Schritt das aktuelle Element mit dem rechten Nachbarn verglichen. Falls die beiden Elemente das Sortierkriterium verletzen, werden sie getauscht. Am Ende der Phase steht bei auf- bzw. absteigender Sortierung das größte bzw. kleinste Element der Eingabe am Ende der Liste. Die Bubble-Phase wird solange wiederholt, bis die Eingabeliste vollständig sortiert ist. Dabei muss das letzte Element des vorherigen Durchlaufs nicht mehr betrachtet werden, da die restliche zu sortierende Eingabe keine größeren bzw. kleineren Elemente mehr enthält.<br />
Je nachdem, ob auf- oder absteigend sortiert wird, steigen die größeren oder kleineren Elemente wie Blasen im Wasser (daher der Name) immer weiter nach oben, das heißt, an das Ende der Liste. Es werden stets zwei Zahlen miteinander in „Bubbles“ vertauscht.</blockquote>
<p>https://de.wikipedia.org/wiki/Bubblesort</p>

>>>

## Bubble Sort

``` java
public void bubbleSort(int[] array) {
	// Äußere Schleife 
    for (int i = 1; i < array.length; i++) {
    	// Innere Schleife: Vom ersten bis zum letzten, unsortieren Element
        for (int j = 0; j < array.length - i; j++) {
        	// "Tauschen" der Plätze, bzw. Aufsteigen der Blasen
            if (array[j] > array[j + 1]) {
                int tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
        }
    }
}
```

<span class="hint smaller">Es ist sehr sinnvoll, *Bubble Sort* und andere Algorithmen zu Übungszwecken zu implementieren. Weniger sinnvoll ist es, ohne guten Grund eigenen Sortier-Implementierungen in "richtiger" Software zu nutzen. Verwenden Sie dazu die vorgegebenen Funktionen, wie z.b. die Methode `Arrays.sort`.</span>

>>>

# Mehrdimensionale Arrays

>>>

## Vorbemerkung

<span class="blocktext">Wir sprechen heute von 2- oder mehrdimensionalen Arrays und meinen damit bestimmte Datenstrukturen, die eine tiefere Dimensionalität als "normale" Arrays haben. Technisch gesehen ist das nicht korrekt, weil ein Array in Java (!) immer nur eine Dimension hat. Der richtige Begriff für die gemeinten Strukturen wäre: *Array of an Array* (Ein Array aus Arrays). In der Praxis wird diese (sprachliche) Unterscheidung kaum angewandt.</span>

>>>

## Arrays über mehrere Dimensionen

<span class="blocktext">Ein Array kann aus beliebig vielen Dimensionen aufgebaut sein. D.h. jedes Element eines Arrays kann selbst ein Array sein. Auf der untersten Ebene stehen dann die Werte, die durch den Datentyp definiert werden. Eine solche Struktur eignet sich hervorragend, um 2-dimensionale Datenstrukturen (z. B. ein Schachbrett) abzubilden.</span>


<span class="hint">Java spezifiziert hier keine maximale Tiefe. Die *Java Runtimes* unterstützen jedoch meist nur Arrays mit einer maximalen Tiefe (Dimension) von 255: `int[][][][][][][][][] ....`</span>

>>>

## Anlegen eines 2-dimensionalen Arrays

``` java
int[][] values = new int[x][y];
```
- Auch mehrdimensionale Arrays haben **einen** Datentyp und einen Namen.
- Die Länge der Dimensionen wird bei dem Erstellen der einzelne Arrays angegeben.
- Umgangssprachlich ausgedrückt wird hier "... ein Array der Länge `x` erstellt, in dem jedes Element ein eigenständiges `int`-Array der Länge `y` darstellt.".

<span class="hint">Ein 2-dimensionales Array besteht aus einem Array einer bestimmten Länge. Jedes Element dieses Array ist selbst wieder ein Array, mit den eigentlichen Werten.</span>

>>>

### Aufbau eines 2-dimensionalen Arrays

![large-image](slides/images/multi-dimension-arrays.png)

>>>

### Iteration über ein 2-dimensionales Array

``` java
int[][] checkerBoard = new int[8][8];

int numRows = checkerBoard.length;
int numCols = checkerBoard[0].length;

for (int rowIndex = 0; rowIndex < numRows; rowIndex++) {	
	for (int colIndex = 0; colIndex < numCols; colIndex++) {
		int value = checkerBoard[rowIndex][colIndex];		
	} 
}
```

![left-side](slides/images/chessboard-2d-array-arrows.png)
<span class="image-description"></span>

>>>

# Die ArrayList

>>>

## Einschränkungen von Arrays

![large-image](slides/images/arrays-vs-lists.png)

>>>

## Verwendung der ArrayList (1/3)

<span class="blocktext smaller">Diese Klasse ist generisch formuliert. D.h. in der Klassendefinition ist nicht spezifiziert, was für Inhalte (Datentyp!) in der Liste gespeichert werden. Diese Information wird erst mit der Deklaration einer Variable bzw. des Aufruf des Konstruktors gegeben. Die Liste wird dann typisiert. </span>

``` java
// Initialisierung einer ArrayList mit Datentyp (hier: String) und Name
ArrayList<String> stringList = new ArrayList<String>();
```

>>>

## Verwendung der ArrayList (2/3)

``` java
// ArrayList erstellen
ArrayList<Ellipse> circles = new ArrayList<Ellipse>();

// Elemente hinzufügen (ans Ende der Liste)
Ellipse circle = new Ellipse(0,0,10,10);
circles.add(circle);


// Länge/Anzahl der Elemente feststellen
int numCircles = circles.size();

// Auslesen einzelner Elemente
Ellipse circle = circles.get(0);

// Element an Index 3 entfernen
circles.remove(3);

// Bestimmtes Objekt entfernen
Ellipse circle = circles.get(0);
circles.remove(circle)
```

>>>

## Verwendung der ArrayList (3/3)

![large-image](slides/images/array-list-functions.png)

>>>

## ArrayList: Nur mit Objekten!

- Primitive Datentypen (`int`, `double`, `boolean`, `char`) sind in einer ArrayList nicht zulässig.
- Um trotzdem solche Daten in der Liste speichern zu können existieren *Wrapper*-Klassen. Instanzen davon kapseln einen primitiven Datentyp in einer Objekt-Repräsentation:

| Datentyp | Wrapper-Klasse | Anmerkung |
|----------|----------------|-----------|
| `int`    | `Integer` | Erzeugung: `new Integer(42);` | 
| `double`    | `Double` | | 
| `boolean`    | `Boolean` | | 
| `char`    | `Character` | nicht mit `Characters` verwechseln! | 

>>>

## Wrapper-Klassen manuell und automatisch nutzen

``` java
// Erzeugung einer Instanz von Integer
int numValue = 5;
Integer numObject = new Integer(num);

// Wert auslesen 
int numValue = numObject.intValue();

// Automatisches Boxing und Unboxing 
ArrayList<Integer> nums = new ArrayList<Integer>();

int numValue = 5;
nums.add(numValue);	// Boxing

int numValue = nums.get(0); // Unboxing
``` 
<span class="hint smaller">Genau wie Strings sind die *Wrapper-Klassen* `Integer`, `Double`, `Boolean` und `Character` *immutable*!</span>

>>>

## Array vs. ArrayList

<span class="blocktext">Beim Implementieren muss abgewogen werden, ob für einen bestimmten Anwendungsfall ein Array oder eine ArrayList sinnvoller ist. Die zentralen Charakteristika der beiden Datenstrukturen können dabei als Entscheidungshilfe dienen.</span>

<span class="blocktext">**Arrays**: Immer dann verwenden, wenn die nötige (maximale) Größe im Vorfeld bekannt ist!</span>

<span class="blocktext">**ArrayLists**: Erlauben dynamische Größenveränderung und haben viele nützliche Operationen, die zur Laufzeit ausgeführt werden können, z.B. `contains`, `add`, `remove`, ... Diese Listen sind aber weniger effizient als "normale" Arrays.</span>

>>>

### Kurzschreibweise für die for-Schleife

<span class="blocktext">Oft möchten Sie (lesend) auf alle Elemente einer ArrayList zugreifen. Statt der normalen `for`-Schleife gibt es eine abkürzende Schreibweise für diese `for each`-Schleife:</span>

``` java
for(type element: arrayList) {
	// Zugriff auf die einzelnen Elemente
}
```

<span class="blocktext">Der Code im Block wird einmal pro Element in der Liste ausgeführt. Bei jeder Iteration ist das jeweils aktuell Element über den im Schleifenkopf vergebenen Variablennamen (hier: `element`) nutzbar.</span>

<span class="hint smaller">Die `for each`-Schleife kann nur zum lesenden Zugriff auf die ArrayList verwendet werden. D.h. Innerhalb des Schleifenrumpfs können keine Einträge aus der Liste entfernt werden. Dafür können Sie herkömmliche Schleifen oder einen Iterator verwenden.</span>

>>>

# Bildverarbeitung in der GraphicsApp

>>>

## Rasterdarstellung von Bildern (1/2)

![large-image](slides/images/image-pixel-array.png)

>>>

## Rasterdarstellung von Bildern (2/2)

- Bilder werden in der GraphicsApp als Raster dargestellt (Vgl. EIMI).
- Jeder Pixel dieser Bilder hat einen bestimmten Farb/Zahl-Wert, der zur Darstellung auf dem Bild benutzt wird.
- Über die Image-Klasse können diese Pixel als mehrdimensionales Array ausgelesen werden.
- Jeder Pixel wird dabei durch einen kombinierten `int`-Wert beschrieben, der die Rot-, Grün- und Blau-Werte codiert.
- Die Pixel eines Bildes könne mit einem neuen mehrdimensionalen Array überschrieben werden.

>>>

## Arbeit mit der Image-Klasse

Nachdem ein Bild erstellt (initialisiert) wurde, können die Pixelwerte ausgelesen oder gesetzt werden:

``` java 
// Bild erstellen
Image image = new Image("data/image.ong");

// Pixel auslesen
int[][] pixels = image.getPixelArray();

// Farbwert auslesen, Color-Repräsentation erstellen und manipulieren
int pixelColor = pixels[5][5];
Color color = new Color(pixelColor);
int red = color.getRed();
color.setGreen(red);

// Pixel manipulieren und zurück in das Image-Objekt schreiben
pixels[5][5] = color.toInt();
image.setPixelArray(pixels);
```

>>>

## Zusammenfassung 

- Mehrdimensionale Arrays werden als Arrays aus Arrays behandelt.
- Eine ArrayList bietet dem Client-Programmierer ähnliche Funktionalität wie ein Array und gleicht den Nachteil der festen Länge aus.
- Bilder werden als zweidimensionale Arrays behandelt, jeder Pixel wird durch einen Farbwert repräsentiert.

>>>

### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>