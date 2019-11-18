# Klassenmodellierung 1: Grundlagen

<span class="subtitle">Eigene Klassen mit Variablen und Methoden modellieren, erstellen und verwenden</span>

<span class="blocktext">Struktur und Inhalt des Kurses wurden 2012 von Markus Heckner entwickelt. Im Anschluss haben Alexander Bazo und Christian Wolff Änderungen am Material vorgenommen. Die aktuellen Folien wurden von Alexander Bazo erstellt und können unter der [MIT-Lizenz](https://raw.githubusercontent.com/OOP-Regensburg/OOP-Folien/master/LICENSE) verwendet werden.</span>

>>>

### Aktueller Semesterfortschritt (Woche 6)

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
<span class="current">Grundlagen der Klassenmodellierung</span>
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

![large-image](slides/images/pingo-2019-11-19.png)

https://pingo.coactum.de/368355

>>>

## Das Programm für heute

- 5-Minuten-Thema: Texte in Variablen speichern (*Strings*)
- Das Prinzip des *Information Hidings*
- Klassen modellieren, erstellen, verwenden und dokumentieren
- Objekte als Parameter verwenden

>>>

# Text in Variablen Speichern: Strings

>>>

## Diese Datentypen kennen wir bereits

| Bereich | Datentypen | Beispiele Wertebereich | Code-Beispiele (Variablen) |
|---------|------------|------------------------|----------------------------|
| Ganzzahlen | `int` | `-2`,`-1`,`0`,`1`,`2`  | `int x = 42`; |
| Fließkommazahlen | `double`,  `float` | `-2.1`,`-1.2`,`0.0`,`1.7`,`2.2`  | `double x = 13.37`; |
| Einzelne Zeichen | `char` | `a`,`-`,`!`  | `char x = x`; |
| Wahrheitswerte | `boolean` | `true`, `false`  | `boolean x = false`; |
| (Graphische) Objekte | jeweiliger Klassenname | `Circle`, `Label`,...  | `Circle x = new Circle(50,50,100,Colors.RED`; |

**Häufig wollen wir aber auch Text(e) in unseren Anwendung verwenden!**

>>>

## Zeichenketten mit *Strings*  abbilden

<code>String myName = "Alexander Bazo";</code>

<span class="blocktext">*Strings*  sind Objekte, können aber - unter Verwendung von Anführungsstrichen - als sogenanntes Literal und ohne `new`-Schlüsselwort erzeugt werden. **Fun Fact:** Intern wird für die Speicherung des Textes in der `String`-Klasse ein *Array* aus einzelnen `char`-Elementen verwendet.</span>

<span class="hint smaller">In Java (und vielen anderen Programmiersprachen) ist ein Literal ein unveränderbarer Ausdruck (en. *literally* ~ *wortwörtlich*). Jeder fest codierte numerische Wert, `true` & `false` sowie jedes im Code notierte Zeichen bzw. jede Zeichenkette ist ein solches, unveränderbares Literal mit einer festen Bedeutung.</span>

>>>

## Grundlagen der Arbeit mit *Strings*

``` java
// Strings erzeugen und in Variablen speichern
String myName = "Alexander Bazo";

// Länge (Anzahl der Zeichen) eines Strings bestimmten
int numberOfCharacters = myName.length();

// Strings ausgeben
System.out.println(myName)

// Strings verbinden
String firstName = "Alexander";
String lastName = "Bazo";
String fullName = firstName + " "  + lastName;

// Einzelne Bestandteile des Textes auslesen
for (int i = 0; i < myName.length(); i++) {
	char singleChar = myName.charAt(i);
	System.out.println("[" + i + "]: " + singleChar);
}
```

>>>

## Strings einlesen

<span class="blocktext">Strings können - in Kommandozeilen-basierten Anwendungen - über die `Scanner`-Klasse eingelesen werden:</span>

``` java
// Erzeugt einen Scanner, der von der Standardeingabe (in der Regel die Kommandozeile) ließt
Scanner scanner = new Scanner(System.in);
/** 
 * Gibt die nächste Eingabe des Nutzenden als String zurück, d.h. Sie erhaltenen alle
 * eingegebenen Zeichen bis zum nächsten Zeilenumbruch (Enter-Taste).
 * Achtung: Ihr Programm hängt hier fest, bis der Nutzende die Eingabe beendet hat 
 * (Enter-Taste). Erst dann wird die nächste Zeile Code ausgeführt.
 */
String input = scanner.nextLine();
```

>>>

### Eine wiederverwendbare Methode für das Einlesen von Text

``` java

/**
 * Die Methode gibt den als Parameter übergebenen Text aus und gibt die 
 * nächste Zeile zurück, die der Nutzenden eingibt. 
 */
private String readString(String prompt) {
    System.out.print(prompt);
    Scanner scanner = new Scanner(System.in);
    return scanner.nextLine();
}

private void readName() {
	String myName = readString("Bitte geben Sie Ihren Namen ein: ");
}

```

>>>

# Vorgegebene Klassen verwenden

>>>

## Client vs. Implementor

<span class="hint smaller">Im Rahmen der **Bereitstellung** und **Verwendung** von Klasse unterscheiden wir zwischen den Personen, die Klassen modellieren und entwickeln und denjenigen, die diese Klassen in eigenen Programmen verwenden</span>

<span class="blocktext">**Clients** nutzen bestehende Klassen in eigenen Programmen. Wir haben als NutzerInnen die vorgegebenen Klassen der *GraphicsApp*-Umgebung, z.B. `Circle`, `Label` oder `Rectangle` verwendet.</span>

<span class="blocktext">**Implementors** stellen Klassen für *Clients* bereit. Die von uns verwendeten Klassen der *GraphicsApp*-Umgebung wurden für uns bereitgestellt.</span>

<span class="blocktext">Die Rollen sind nicht trennscharf, in der Regel sind wir *Client* und *Implementor*, da wir auf der Grundlage vorgegebenen Klassen eigene Programme/Klassen entwerfen. Die Klassifizierung dient eher der Beschreibung der Autorenschaft einer einzelnen Klasse.</span>

>>>

## Information Hiding

<span class="blocktext">Im Verhältnis zwischen *Client* und *Implementor* spielt das Prinzip des *Information Hidings* eine wesentliche Rolle:</span>

- Als *Client* interessiert es uns nicht, wie `Math.random()` funktioniert oder was in `Ellipse.draw()` passiert. Wir brauchen/sehen nur das Ergebnis.
- Die eigentliche Implementierung (*Was passiert?*) wird vor dem *Client* versteckt. Dieser muss nur die Methodensignatur, d.h. Parameter & Rückgabewert kennen um zu wissen, was möglich ist.
- Der *Implementor* muss diese relevanten Informationen zugänglich dokumentieren  (Vgl. [Dokumentation der GraphicsApp](https://oop-regensburg.github.io/GraphicsApp-Reborn-Library/index.html)).

>>>

### Information Hiding in der Cocktailbar

>>>

### Information Hiding in der Random-Klasse (1/2)

<span class="blocktext">Die Klasse `Random` stellt für uns als *Clients*  eine  *black box*  dar. Die internen Abläufe sind nicht relevant, solange die bekannten Schnittstellen (öffentliche Methoden) die erwarteten Ergebnisse zurückgeben:</span>

<div class="diagram">
<span class="box-with-label">
<span class="box-label">Input</span>
<span class="content">Methoden für die gewünschten Datentypen, z.B. <code>nextInt()</code></span>
</span>

<span class="box-with-label">
<span class="box-label">Zufallsgenerator</span>
<span class="content">Von uns erstellte Instanz der <code>Random</code>-Klasse</span>
</span>

<span class="box-with-label">
<span class="box-label">Rückgabe </span>
<span class="content">Zufälliger Rückgabewert vom jeweils angefragten Datentypen.</span>
</span>
</div>

>>>

### Information Hiding in der Random-Klasse (2/2)

Einige Methoden der `Random`-Klasse:

| Rückgabetyp | Methode | Beschreibung |
|-------------|---------|--------------|
| `boolean` | `nextBoolean()` | Returns the next pseudorandom, uniformly distributed boolean value from this random number generator's sequence. |
| `double` | `nextDouble()` | Returns the next pseudorandom, uniformly distributed double value between 0.0 and 1.0 from this random number generator's sequence. |
| `int` 	| `nextInt​(int bound)` | Returns a pseudorandom, uniformly distributed int value between 0 (inclusive) and the specified value (exclusive), drawn from this random number generator's sequence. | 

<span class="blocktext smaller">Quelle: [Java 10 Dokumentation,Oracle](https://docs.oracle.com/javase/10/docs/api/java/util/Random.html)</span>

>>>

### Beispiel: Ein Zufallsgenerator zum Würfeln

![screenshot](/slides/images/dice-roller-demo.gif)

<span class="hint">Wie verwenden als *Client*  die Methoden der `Random`-Klasse um sechs zufällige Werte zwischen `1` und `6` zu berechnen, die in Form von *Würfeln* auf dem Bildschirm dargestellt werden.</span>

>>>

### Beispiel: Simulation von n-Würfen

![small-image](/slides/images/dice-roller-cli.png)

``` java 
private void rollDice() {
    Random random = new Random();
    int numberOfDice = readInt("Mit wie vielen Würfeln soll ich würfeln? ");
    int result = 0;
    int maxResult = numberOfDice * MAX_DICE_VALUE;
    int numberOfTries = 0;
    while (result != maxResult) {
        result = 0;
        for(int i = 0; i < numberOfDice; i++) {

            int randomDiceValue = MIN_DICE_VALUE + random.nextInt(MAX_DICE_VALUE);
            result += randomDiceValue;
        }
        numberOfTries++;
    }
    System.out.println("Das maximale Ergebnis (" + maxResult + ") wurde nach " + numberOfTries + " Versuchen erreicht!");
}
```


>>>

# Eigene Klassen entwerfen und verwenden

>>>

### Wiederholung: Objekte und Klassen (1/2)

>>>

### Wiederholung: Objekte und Klassen (2/2)

>>>

## Zentrale Bestandteile einer Klasse

>>>

### Aufbau einer Klasse (Beispiel `Dog`)

>>>

## Eigene Klassen definieren

>>>

### Sichtbarkeit von Klassenbestandteilen

<span class="blocktext smaller">Die Sichtbarkeit bzw. die Zugriffsmöglichkeiten aller Bestandteile einer Klasse können über Zugriffsmodifikatoren spezifiziert werden. Diese geben an, von wo auf die entsprechenden Elemente zugegriffen werden kann. Die beiden wichtigsten Modifikatoren sind:</span>

- `public`: Andere Teile des Programms (Klassen) haben Zugriff auf die Methoden oder Variablen
- `private`: Die Methoden und Variablen sind nur innerhalb der Klasse zugänglich

``` java
Random random = new Random();
/**
 * nextInt muss eine öffentliche (public) Methode sein, da wir von Außen (aus unserer Klasse)
 * auf die Methode der erzeugten Instanz zugreifen können.
 */
int x = random.nextInt(); 

``` 

>>>

### Das Schlüsselwort `this`

<span class="blocktext smaller">Innerhalb einer Klasse kann an jeder Stelle über das Schlüsselwort this auf die Instanz verwiesen werden. Oft wird vom this-Zeiger gesprochen, was technisch aber nicht völlig korrekt ist, da Java kein explizites Zeiger-Konzept unterstützt. Präzise müsste es this-Referenz heißen. Die this-Referenz können wir z.B. nutzen, um bei Namensgleichheit Parameter von Instanzvariablen zu unterscheiden:</span>

``` java
private Color furColor;
private boolean hungry;
	
public Dog(Color furColor) {
	this.furColor = furColor;
	hungry = true;
}

``` 

>>>

### Konstruktoren (1/2)

>>>

### Konstruktoren (1/2)

>>>

### Instanzvariablen

- Anders als lokale Variablen werden Instanzvariablen zu Beginn der Klasse (und nicht in Methoden) definiert.
- Instanzvariablen sind innerhalb des gesamten Objekts sichtbar und *leben* solange das Objekt *lebt*. Sie sind  innerhalb der ganzen Instanz verwendbar.
- Instanzvariablen repräsentieren die Eigenschaften bzw. den Zustand des Objekts. Auch wenn die Eigenschaften nur einmal in der Klasse definiert werden, verfügt jedes Objekt über sein eigens Set an Instanzvariablen, d.h. jede `Dog`-Instant hat eine eigene Variable (`furColor`) für die Fellfarbe.

>>>

### Statische Variablen und Konstanten

- Statische Variablen (Klassenvariablen) werden von allen Instanzen einer Klasse geteilt (!=Instanzvariablen): `private static boolean dogCatcherSpotted`
- Konstanten werden ebenfalls als Klassenvariablen angelegt und sind darüber hinaus unveränderbar: `private static final String BEST_FRIEND = "Human";`
- Öffentliche, statische Variablen und Methoden können auch ohne Instanz – direkt auf der Klasse – aufgerufen werden: `Colors.getRandomColor();`

>>>

### Methoden

>>>

### Besondere Methoden: Getter & Setter

- Instanzvariablen sollten in der Regel versteckt (private) sein. Dadurch wird das Prinzip des *Information Hiding* gewahrt
- Wenn doch ein lesender/schreibender Zugriff von Außen nötig sein sollte, geschieht diese über Methoden, die den eigentlichen Zugriff auf die Daten kapseln: *Getter* & *Setter*

``` java
public Color getFurColor() {
		return furColor;
}

public void setOwner(String owner) {
	if(!owner.equals("Cruella de Ville“)) {
		this.owner = owner;
	}
}
``` 

>>>

# Praktische Beispiele

>>>

## Beispiel: Student & StudentsApp

>>>

## Beispiel: Expanding Circle

>>>

# Klassen mit JavaDoc kommentieren und dokumentieren

>>>

## Kommentare in Java

Kommentare dienen der zusätzlichen Beschreibung von Quelltext. Sie haben keine funktionale sondern eine dokumentierende Bedeutung:

``` java

/**
 * Diese Methode erzeugt ein zufälliges Circle-Objekte (zufällige Position und Farbe) und 
 * gibt die Instanz als Rückgabe wert zurück.
 */
public Cirlce createRandomCircle() {
	// createRandomNumber gibt eine zufällige Ganzzahl zwischen 0 und dem übergebenen 
	// Parameter zurück
	int xPos = createRandomNumber(SCREEN_WIDTH);
	int yPos = createRandomNumber(SCREEN_HEIGHT);
	Color circleColor = Colors.getRandomcolors();
	// Erzeugen des Circle-Instanz (CIRCLE_RADIUS ist eine Konstante auf Klassenebene)
	Circle circle = new Circle(xPos, yPos, CIRCLE_RADIUS, circleColor);
	return circle;
}
```

>>>

## Kommentare mit JavaDoc strukturieren 

``` java
/**
 * Diese Methode erzeugt ein zufälliges Circle-Objekt innerhalb der 
 * Zeichenfläche, dessen Radius im übergebenen Wertebereich liegt.
 * 
 * @param minRadius Minimaler Radius des zu erstellenden Kreises (inklusive)
 * @param maxRadius Minimaler Radius des zu erstellenden Kreises (exklusive)
 * @return Die erzeugte Circle-Instanz
 */
public Circle createRandomCircleWithColor(int minRadius, int maxRadius) {
    int xPos = createRandomNumber(SCREEN_WIDTH);
    int yPos = createRandomNumber(SCREEN_HEIGHT);
    int radius = minRadius + createRandomNumber(maxRadius - minRadius);
    return new Circle(xPos, yPos, radius, Colors.getRandomcolors());
}
``` 

<span class="hint smaller">Das [JavaDoc-Format](https://de.wikipedia.org/wiki/Javadoc) erlaubt die gezielte Beschreibung einzelner Code-Bestandteile. (z.B. Parameter oder Rückgabewerte). Auf Basis der Kommentare kann eine Übersicht (Dokumentation) des Programms erstellt werden kann (Vgl.: [GraphicsApp-Dokumentation](https://oop-regensburg.github.io/GraphicsApp-Reborn-Library/index.html).</span>

>>>


# Objekte als Parameter

>>>

## Caveat: Objekte als Parameter

<span class="blocktext">Objekte verhalten sich anders als primitive Datentypen, wenn Sie als (Übergabe-)Parameter eingesetzt werden:</span>

``` java
private void modifyStudent(Student student, int lp) {
	System.out.println("Modifying Students LPs");
	student.addLP(lp);
}
```

<span class="hint smaller">Objekte werden **nicht** als Kopien weitergegeben sondern als Verweise (Referenzen) auf die *Originale*. Wenn wir ein Objekt (Parameter) in einer Methode ändern, ändern wir das Original. Technisch gesehen wird auhc hier konkreter Wert, nämlich die "Adresse" des übergeben, Java arbeitet immer mit dem *Call by Value*-Prinzip.</span>

>>>

### Beispiel: StudentsApp 2.0

>>>

## Konsequenzen des *Call by Value*-Ansatzes in Java (1/2)

- Wird ein Objekt an eine Methode übergeben, befindet sich in der Parameter-Variable die Adresse (im Speicher) an der das Objekt bzw. seine Methoden (nicht wirklich) und Eigenschaften gespeichert werden.
- Wenn wir die Eigenschaften des Objekts über die Parameter-Variable ändern, ändern wir das ursprüngliche Objekt
- Wenn wir die Parameter-Variable überschreiben, bleibt das ursprüngliche unberührt (wir ändern dann nur einen von mehreren der Orte, an denen die Adresse des Objekts gespeichert ist)

>>>

## Konsequenzen des *Call by Value*-Ansatzes in Java (2/2)

``` java
/**
 * LPs werden für das äußere Objekt gesetzt, die Initialisierung des neuen Objekts 
 * ist aber auf den Scope beschränkt.
 */
private void modifyStudent(Student student, int lp) {
	System.out.println("Modifying Students LPs");
	student.addLP(lp);
	student = new Student(“A new User", 4.0);
}
```

<span class="hint smaller">Wir greifen dieses Thema im späteren Verlauf der Vorlesung beim Thema *Speicherverwaltung* noch einmal auf.</span>

>>>


## Zusammenfassung 

- Strings sind Zeichenketten und können mit anderen Variablen konkateniert (= zusammengefügt, lat. catena = Kette) werden.
- Aus Sicht des Client-Programmierers ist es unerheblich, wie eine Klasse oder Methode implementiert wird.
- Klassen beinhalten typischerweise die folgenden Komponenten: Instanzvariablen, Konstanten, Konstruktoren, Methoden.
- Methoden und Variablen sind als private zu definieren, außer man wünscht explizit Zugriff von außerhalb des Objekts.
- Eigene Klassen sollten gut dokumentiert werden. JavaDoc ermöglicht automatisierte Erstellung von html-Dokumentation eigener Klassen.
- Objekte verhalten sich anders als primitive Datentypen, wenn Sie als Parameter von Methoden verwendet werden.

>>>

### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>