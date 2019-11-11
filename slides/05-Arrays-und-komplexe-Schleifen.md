# Erste Datenstrukturen und komplexe Schleifen

<span class="subtitle">Strukturiertes Speichern und Abrufen ähnlicher Daten in Arrays</span>

<span class="blocktext">Struktur und Inhalt des Kurses wurden 2012 von Markus Heckner entwickelt. Im Anschluss haben Alexander Bazo und Christian Wolff Änderungen am Material vorgenommen. Die aktuellen Folien wurden von Alexander Bazo erstellt und können unter der [MIT-Lizenz](https://raw.githubusercontent.com/OOP-Regensburg/OOP-Folien/master/LICENSE) verwendet werden.</span>

>>>

### Aktueller Semesterfortschritt (Woche 5)

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
<span class="current">Arrays &amp; komplexe Schleife</span></td>
</tr>
<tr>
<td>Klassenmodellierung</td>
<td>
<span>Grundlagen der Klassenmodellierung</span>
<span>Vererbung &amp; Sichtbarkeit</span>
</tr>
<tr>
<td>Interaktive Anwendungen</td>
<td>
<span>Event-basierten Programmierung</span>
<span>String- &amp; Textverarbeitung</span>
</tr>
<tr>
<td>Datenstrukturen</td>
<td>
<span>Listen, Maps &amp; die Collections</span>
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

![large-image](slides/images/pingo-2019-11-12.png)

https://pingo.coactum.de/833782

>>>

## Das Programm für heute

- 5-Minuten-Themen: `break` & `continue`, `switch`-Anweisung und eine Wiederholung des *Draw Loop* 
- Verwaltung von Werten gleichen Typs in einer Variable: *Arrays*
- Verschachtelte Schleifen und die Iteration über mehrdimensionale *Arrays*

>>>

## 5 Minuten für `break` und  `continue`

![left-side](slides/images/stop-button.jpg)
<span class="image-description">Schleifen werden über Bedingungen und Zähler im Schleifenkopf gesteuert. Zusätzlich können Sie die gesamte Schleife durch den `break`-Befehl abbrechen. Eine einzelne Iteration wird über `continue` übersprungen.<br /><br />**Beide Befehle werden für unterschiedliche Verwendungszwecke eingesetzt.**</span>

>>>

### Einzelne Iterationen mit `continue` überspringen

<span class="blocktext">Der `continue`-Befehl bricht die aktuelle Iteration der Schleife ab und fährt mit dem nächsten Durchlauf fort. Die Zählervariablen werden entsprechend der Anweisungen im Schleifenkopf angepasst. In diesem Beispiel werden alle *ungeraden* Zahlen eines im Schleifenkopf definierten Wertebereichs ausgegeben.</span>

``` java
private void continueOnEven() {
	System.out.println("Counting from 1 to 10, skipping even numbers.");
	for (int i = 0; i < 10; i++){
    	if(i % 2 == 0) {
    		continue;
    	}
		System.out.println(i);
   	}
}
```

>>>

### Schleifen frühzeitig mit `break` abbrechen

<span class="blocktext">Der `break`-Befehl bricht die komplette Schleife ab und greift den Code in der drauf folgenden Zeile wieder auf. Im Beispiel wird die Schleife abgebrochen, sobald ein bestimmter Wert, hier `5`, erreicht wird (ein eher sinnbefreites Beispiel)</span>

``` java
private void breakOnSentinel() {
	System.out.println("Break on 5");
	for (int i = 0; i < 10; i++) {
    	if(i == 5) {
        	break;
      	}
    System.out.println(i);
   }
}
```

>>>

### Sentinels und `break`

<span class="blocktext smaller">Mit Hilfe des `break`-Befehls können wir bei unklaren Abbruchbedingungen (z.B. bei dynamisch möglichen Benutzereingaben) die Steuerung der Schleife in deren Rumpf verlagern. Werte, die zum  Prüfen dieser internen Abbruchbedingung dienen, nennt man auch *Sentinel* bzw. *Wächterwert*.</span>


``` java
private static final int SENTINEL = 0;
public void readAndSumNumbers() {
	int total = 0;
	int num = readInt("Bitte geben Sie eine Zahl ein (oder brechen mit '0' ab): ");
	while (num != SENTINEL) {
		total += num;
		num = readInt("Wert eingeben: ");
	}
	System.out.println("Die Summe der eingegebenen Zahlen ist: " + total);
  }
}
```

<span class="hint smaller">Die (fiktive) Methode `readInt` im Beispiel gibt den als Parameter übergebenen Text auf den Bildschirm aus und fordert NutzerInnen auf, einen Ganzzahl wert einzugeben. Der eingegebene Wert wird als Rückgabewert der Methode an die aufrufende Stelle zurückgegeben.</span>


>>>

## 5 Minuten für die `switch`-Anweisung

<span class="blocktext">Mit der `if`-Abfrage wird eine Bedingung genau einmal geprüft. Die Klammern müssen einen booleschen Ausdruck enthalten. Je nach Ergebnis der Auswertung (`false` oder `true`) werden die angegebenen Befehle ausgeführt oder nicht. Die im `else`-Teil definierte Alternativen wird ausgeführt, wenn die Bedinung **nicht** zutrifft.

``` java
if(bouncer.canMoveForward()) {
	bouncer.move();
} else {
	bouncer.turnLeft();
}
```

>>>

### Alternativen mit "Cascading IF"

<span class="blocktext">Komplexere Zusammenhänge und priorisierte Alternativen können auch durch verschachtelte `if`-Abfragen abgebildet werden:</span>

``` java
if (score >= 90) {
	System.out.println("Note: 1");
} else if (score >= 80) {	
	System.out.printlnprintln("Note: 2");
} else if (score >= 70) {	
	System.out.printlnprintln("Note: 3");
} else if (score >= 60) {
	System.out.printlnprintln("Note: 4");
} else {
	System.out.printlnprintln("Note: 5");
}
```

<span class="blocktext smaller">Sobald eine der `else if`-Bedingungen zutrifft, wird deren Anweisungsgruppe (`{ ... }`) ausgeführt und die restliche Prüfung abgebrochen. Das finale `else` ohne Bedingungsprüfung wird als *catch all*-Option für den Fall verwendet, dass keine der vorher notierten Bedingungen zutrifft.</span>

>>>

### Beispiel: "Cascading IF" und Wochentage

``` java
int dayNum = readInt(“Gib die Nummer des Wochentags ein: “);

if (dayNum == 6) {
	println("Heute ist Wochenende (Samstag)!");
} else if (dayNum == 7) {
	println("Heute ist Wochenende (Sonntag)!");
} else {
	println("Heute ist ein Arbeitstag :(");
}
```

<span class="blocktext">Solche und ähnliche Konstruktionen lassen sich auch mit der  `switch`-Anweisung notieren!</span>

>>>

### Beispiel: `switch` und Wochentage

``` java
int dayNum = readInt(“Gib die Nummer des Wochentags ein: “);

switch (dayNum) {
	case 6:
		println("Heute ist Wochenende (Samstag)!");
		break;
	case 7:
		println("Heute ist Wochenende (Sonntag)!");
		break;
	default:
		println("Heute ist ein Arbeitstag :(");
		break;
}
```

<span class="blocktext smaller">Eine `switch`-Anweisung besteht aus der zu prüfenden Variable (hier: `dayNum`), den verschiedenen möglichen Fällen (`case`), Anweisungen die je nach *case* ausgeführt werden sollen und einem (optionalen) *default*-Fall, der ausgelöst wird, wenn keiner der notierten Fälle zutrifft. Die `break`-Befehle sorgen dafür, dass nach dem Finden und Abarbeiten des richtigen Falles die switch-Anweisung verlassen wird. Mit einer `switch`-Anweisung können Variablen vom Typ `byte`, `short`, `int`, `char`, `Enum` (Aufzählung) und `String` (Text) geprüft werden.</span>


>>>


## 5 Minuten für den *Draw Loop* 

<span class="blocktext smaller">Animationen werden in der *GraphicsAp* durch Aktualisierung und Zeichnung von graphischen Objekten in der wiederholt aufgerufenen `draw`-Methode realisiert.</span>

![](slides/images/draw-loop.png)

>>>

### Beispiel: Animation eines sich bewegenden Kreises

``` java
public class FlyingBall extends GraphicsApp {
	// Instanzvariable für den Ball
	private Circle ball;

	public void initialize() {
		setCanvasSize(500,500);
		// Erstellen des Balls
		ball = new Circle( 250,250, 50, Colors.RED);
}

	public void draw() {
		drawBackground(Colors.WHITE);
		// Bewegen des Balls
		ball.move(1, 1);
		// Zeichnen des Ball
		ball.draw();
	}
}
```

>>>

# Arrays

>>>

### Ein häufiges Bild in unseren Anwendungen

``` java
public class Animation extends GraphicsApp {
	private Circle circle1;
	private Circle circle2;
	private Circle circle3;
	private Circle circle4;

	public void initialize() {
		circle1 = new Circle(50,50,50,Colors.RED);
		circle1 = new Circle(100,100,50,Colors.GREEN);
		// ...
	}

	public void draw() {
		circle1.move(1,1);
		circle1.draw();
		circle2.move(1,1);
		circle2.draw();
		// ...
	}
}

```

>>>

### Das Problem: Viele Objekte = viele Variablen

<span class="blocktext larger">Wir benötigen sehr viele Variablen für das Speichern sehr ähnlicher Objekte:</span>

- Simulation mit mehreren Bällen, die sich bewegen
- Figuren in einem Schachcomputer
- Einlesen mehrerer Werte, die verarbeitet werden sollen

<span class="blocktext larger">Alle Objekte/Werte sind vom gleichen Typ. Auch die Variablen werden wahrscheinlich sehr ähnlich heißen. Für solche verwenden wir Arrays (Felder).</span>

>>>

## Die Lösung: Arrays

<span class="blocktext">Arrays erlauben die *zentrale* Verwaltung mehrere Objekte vom selben Datentyp über eine Variable.</span>

![left-side](slides/images/variables-to-array.png)
<span class="image-description">Arrays gruppieren Objekte gleichen Typs unter einem gemeinsamen Namen. Jedes Element kann dabei über eine fortlaufende Nummer (Index, beginnt bei `0`) angesprochen werden.<br /><br />**Arrays selber werden in einer Variable gespeichert**, wir benötigen nur noch eine Variable für eine Vielzahl an Objekte.</span>

>>>

### Arrays deklarieren und initialisieren

<span class="blocktext">Die Deklaration ähnelt *Array*-Variablen ähnelt dem bekannten Modus. Zur Unterscheidung des Feldes von einer *normalen* Variable werden eckige Klammern `[]` verwendet:</span>

<code>DATENTYP[] NAME;</code>

<span class="blocktext">Bei der Initalisierung wird das `new`-Schlüsselwort verwendet. Die Länge (Anzahl der *Plätze* für Objekte) muss an dieser Stelle angegeben werden und kann anschließend nicht verändert werden:</span>

<code>DATENTYP[] NAME = new DATENTYP[LENGTH];</code>

<span class="blocktext">Der lesende und schreibende Zugriff auf einzelne Elemente erfolgt über den Feldname, die eckigen Klammern und den jeweiligen Index (Position):</span>

<code>NAME[INDEX] = VALUE;

>>>

### Beispiel: Array für Ganzzahlen

``` java
int[] numbers = new int[3]; // Feld für drei Ganzzahlen
numbers[0] = 42; // Die Indexierung beginnt bei 0, der erste Wert hat den Index "0"
numbers[1] = 1337;
numbers[2] = 101;

int sum = numbers[0] + numbers[1] + numbers[2]; 
System.out.println("Summe aller Werte in numbers: " + sum);
```

<span class="blocktext">Die Kombination Variablenname + Index verhält sich bei Zuweisungen und Lesezugriffen genau wie eine einzelne Variable und kann auch so genutzt werden!</span>

>>>


### Arrays und Schleifen

<span class="blocktext">Für den lesenden und schreibenden Zugriff auf Arrays werden häufig Schleifen und deren Zählervariablen (wenn kompatible) verwendet:</span>

``` java
private static final int MAX_NUMBERS = 3;
int[] numbers = new int[MAX_NUMBERS];

// ...

int sum = 0;
for(int i = 0; i < MAX_NUMBERS; i++) {
	sum += numbers[i];
}

```

>>>

### Zugriff auf die Array-Länge

<span class="blocktext">Die (feste) Länge eines Arrays können Sie nach dessen Initialisierung über die Eigenschaft `length` auslesen:</span>

``` java
private static final int MAX_NUMBERS = 3;
int[] numbers = new int[MAX_NUMBERS];
int arrayLenght = numbers.length;

// Die Eigenschaft "length" erleichter die Iteration über Arrays

int sum = 0;
for(int i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}
```

<span class="hint smaller">Die Indizes eines Arrays werden als `int`-Wert abgebildet. Dadurch ergibt sich eine theoretische maximal Länge von `2.147.483.647`. In der Praxis ist die maximale Länge wahrscheinlich geringer, da verschiedene *Virtual Machines* hier unterschiedlich bei der Implementierung vorgehen.</span>

>>>

### Häufige Probleme beim Einsatz von Arrays

- Halten Sie ihre Indizes im Blick. Java reagiert mit Fehlermeldungen (zur Laufzeit) wenn Sie versuchen, auf ein Element zuzugreifen, das nicht im Array steht (negativer Index oder Index, der über die Länge des Feldes hinausgeht).
- Die Werte im Array müssen dem bei der Deklaration der Array-Variable angegebenen Datentyp entsprechen.
- Bei der Initialisierung werden die Felder des Arrays mit *Default*-Werten belegt (primitive Datentypen) oder sind *leer* (`null`, bei Objekten).

>>>

## Praxis-Beispiel: Bälle mit zufälliger Startposition

>>>

### Einschub: Zufallswerte mit Math.random()

>>>

# Mehrdimensionale Arrays

>>>

# Verschachtelte `for`-Schleifen

>>>

## Zusammenfassung 

- ...

>>>


### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>