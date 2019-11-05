# Mehr zu Variablen, Methoden und der *Draw Loop*

<span class="subtitle">Ausdrücken, Rückgabe von Werten aus Methoden und dem *Draw Loop* in der GraphicsApp</span>

<span class="blocktext">Struktur und Inhalt des Kurses wurden 2012 von Markus Heckner entwickelt. Im Anschluss haben Alexander Bazo und Christian Wolff Änderungen am Material vorgenommen. Die aktuellen Folien wurden von Alexander Bazo erstellt und können unter der [MIT-Lizenz](https://raw.githubusercontent.com/OOP-Regensburg/OOP-Folien/master/LICENSE) verwendet werden.</span>

>>>

### Aktueller Semesterfortschritt (Woche 4)

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
<span class="current">Variablen, Klassen &amp; Objekte</span>
<span class="current">Kontrollstrukturen &amp; Methoden</span>
<span>Arrays &amp; komplexe Schleife</span></td>
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

![large-image](slides/images/pingo-2019-11-04.png)

https://pingo.coactum.de/447102

>>>

## Rückblick: Variablen und Klassen

- Variablen speichern Werte während der Programmausführung (Laufzeit). Sie sind Platzhalter für unterschiedliche Daten, funktionieren aber immer nur mit einem bestimmten Datentyp.
- Werte, die während der Implementierung festgelegt werden und zur Laufzeit unveränderlich sind, nennt man Konstanten.
- Klassen definieren Eigenschaften und Verhalten für ein oder mehrere Objekte.
- Objekte sind die Instanzen der Klassen.

>>>

## Rückblick: GraphicsApp

- Mit Hilfe der GraphicsApp können wir einfache graphische Elemente auf dem Bildschirm zeichnen.
- Alle sichtbaren Elemente werden durch Instanzen der entsprechenden Klassen repräsentiert.

>>>

## Das Programm für heute

- Informationen zur ersten Studienleistung
- Typenumwandlung (*Casts*)
- Ausrücke und Operatoren in Java
- Ergebnisse aus Methoden zurückgeben
- Mehr zum  *Draw Loop*

>>>

# Informationen zur ersten Studienleistung

>>>

### Die erste Studienleistung (1/2)

- Ab heute, 16 Uhr finden Sie die Aufgabenbeschreibung und das Starterpaket zur ersten Studienleistung im [GRIPS-Kurs](https://elearning.uni-regensburg.de/course/view.php?id=39457).
- Bearbeiten Sie die drei Aufgaben und laden Sie Ihre Lösung **bis zum 17. November (23:55 Uhr)** über den vorbereiteten Link hoch.
- Allgemeine Informationen zum Ablauf der Studienleistung finden Sie [hier](http://regensburger-forscher.de/oop/infos/Studienleistung/).
- Die Bewertungskriterien finden Sie im GRIPS-Kurs (beim Hochladen der Lösung).

>>>

### Die erste Studienleistung (2/2)

<span class="blocktext larger">In der ersten Studienleistung müssen Sie:</span>

- Zwei komplexere *Bouncer*-Programme erstellen
- und eine erste, einfache Animation mit der GraphicsApp-Umgebung realisieren

![sequence-larger](slides/images/WS1920-stdlst-01-task-01.png)
![sequence-larger](slides/images/WS1920-stdlst-01-task-02.png)
![sequence-larger](slides/images/WS1920-stdlst-01-task-03.png)

>>>

# Datentypen konvertieren: Casts

>>>

### Kompatibilität zwischen (primitiven) Datentypen herstellen

<span class="blocktext">Bei der gleichzeitigen Verwendung unterschiedlicher Datentypen müssen Sie einige Regeln beachten:</span>

``` java
int x = 5;
// BUG: y bekommt hier den Wert 2.0 nicht 2.5 zugewiesen!
// Das Ergebnis einer ganzzahligen Division ist immer eine Ganzzahl!
double y = x/2;
``` 

<span class="blocktext">Mithilfe von *Casts* kann eine Variable **zwischenzeitlich** so behandelt werden, als wäre Sie von einem anderen Typ:</span>

``` java
int x = 5;
// y bekommt hier den Wert 2.5 zugewiesen, da x während der Auswertung,
// und nur da, als Gleitkommazahl (double) verwendet wird. Der Datentyp der
// Variable x wird nicht geändert!
double y = ((double) x) / 2;
```

>>>

### Cast != Runden

<span class="blocktext">Beim können Informationen verloren gehen – Wird eine Gleitkommazahl (`double`) zu einer Ganzzahl (`int`) *gecastet*, wird der Wert am Komma abgeschnitten:</span>

``` java
double g = 3.55
System.out.println((int) g); // gibt 3 aus
```

<span class="hint">*Richtiges* Runden funktioniert mit der Funktion `round()` aus dem `Math`-Paket. Der Befehl `Math.round(3.55)` gibt `4` zurück.</span>

>>>

### Expliziter vs Impliziter Cast

<span class="blocktext">Führen wir (die ProgrammiererInnen) den *Cast* einer Variable manuell durch, so handelt es sich um einen **expliziten Cast** (Zieldatentyp in runden Klammern VOR der Variable / dem Ausdruck, der *gecastet* werden soll):</span>

``` java
double g = 3.55;
(int) g; // Cast zu Ganzzahl
```

<span class="blocktext">Die *Runtime*  führt zur Laufzeit auch **implizite Casts**. In der Zeile `double x = 1 + 2.3;` wird der Wert `1` automatisch zu einem  `double`-Wert (`1.0`) *gecastet*, da der andere Summand eine Gleitkommazahl ist.</span>

>>>

### Regeln für die Typumwandlung

- Beim expliziten *Cast* können Informationen verloren gehen, z.B. bei der Umwandlung von `double` zu `int` (aus `1.9` wird dann `1`).
- Beim impliziten *Cast* gehen keine Informationen verloren. Die *Runtime* interpretiert den ursprünglichen Wert als einen Typ mit höherem Informationsgehalt, dessen Informationsraum nicht voll ausgenutzt wird (z.B. bei `int` zu `double`, bzw. `1` zu `1.0`). 

>>>

# Operatoren und Ausdrücke

>>>

### Der Modulo-Operator (1/2)

<span class="blocktext larger">Um den Rest einer ganzzahligen Division zu erhalten existiert in Java (und in den meisten anderen Programmiersprachen) der Modulo-Operator `%`:</span>

<span class="blocktext larger">`15 %  3 =  8` *(15/3 = 5; Rest ist 0)*<br />
`14 %  8 =  6` *(14/8 = 1; Rest ist 6)*<br />
`14 % 17 = 14` *(14/17 = 0; Rest ist 14)*<br />
</span>

>>>

### Der Modulo-Operator (2/2)

<span class="blocktext larger">Mit dem Modulo-Operator können Sie leicht überprüfen, ob eine Zahl gerade oder ungerade (durch 2 teilbar) ist:</span>

``` java
int num = 12;
System.out.println("Die Zahl " + num + " ist ...");
if(num % 2 == 0) {
	System.out.println("... gerade!");
} else {
	System.out.println("... ungerade!");
}
```

>>>

## Ausdrücke (Expressions)

- Als Ausdruck (oder *Expression*) wird die Verknüpfung von Sprachelementen durch Operatoren bezeichnet
- Ausdrücke werden beim Codieren definiert und zur Laufzeit ausgewertet
- Ausdrücke haben *immer* ein Ergebnis. D.h. nach der kompletten Auswertung eines Ausdrucks bleibt ein einzelner Datenwert übrig

``` java
int num1 = 2;
int num2 = 3;
// Im Ausdruck auf der rechten Seite werden zwei Sprachelemente (hier Variablen) durch einen Operator (hier +) 
// verknüpft. Nach Auswertung wird das Ergebnis (hier "5") der Variable auf der linken Seite zugewiesen.
int total = num1 + num2;
```

>>>

### Ausdrücke in Java

<span class="blocktext">Ein **Ausdruck** besteht aus einem **Term** und beliebig vielen (auch keinen!) weiteren, durch **Operatoren** verknüpfte **Terme**:</span>

<code>AUSDRUCK => TERM [+ OPERATOR TERM]</code>

- **Terme** können dabei **Literale** (Werte), **Konstanten**, **Variablen**, **Methodenaufrufe** oder Ausdrücke (beliebig tiefe Verschachtlung) sein.
- **Operatoren** können mathematisch (`+`,`-`,`*`,`/` oder `%`) oder logisch (`&&`, `||`, `!`) sein.

>>>

### Boolesche Ausdrücke und Vergleichsoperatoren (1/2)

<span class="blocktext">Ein boolescher Ausdruck ist eine Auswertung eines oder mehrerer passender Terme und ergibt immer einen eindeutigen Wahrheitswert: wahr (`true`) oder falsch (`false`). Für die Verwendung innerhalb boolescher Ausdrücke existieren spezielle Vergleichsoperatoren, die zum Teil aus der Mathematik bekannt sind.</span>

<span class="hint">Sie kennen das bereits (ausführlicher) aus dem EIMI-Kurs! In diesem Kurs beschränken wir uns auf einen Teilbereich der Booleschen-Logik</span>

>>>

### Boolesche Ausdrücke und Vergleichsoperatoren (2/2)

| Operator | *Übersetzung* | |
|----------|---------------|-|
| `==`     | *ist gleich*  | Nicht mit dem Zuweisungsoperator `=` verwechseln! | 
| `!=`     | *ist ungleich* | | 
| `>`     | *größer als* | | 
| `<`     | *kleiner als* | | 
| `>=`     | *größer oder gleich* | | 
| `<=`     | *kleiner oder gleich* | | 
| `!`     | *nicht* | Negation des nachfolgenden Ausdrucks| 

>>>

### Beispiel: Zahlen prüfen

``` java

public static final int UPPER_LIMIT = 50;

// ...

int x = 42;
if(x <= UPPER_LIMIT) {
	// HINWEIS: Versuchen Sie IMMER sinnvolle Ausgaben und Rückmeldungen zu produzieren!
	System.out.println("Der Wert " + x + " entspricht oder liegt unter dem Limit von " + LIMIT);
}
```

<span class="blocktext">Im Beispiel wird die in `x` gespeicherte Zahl mit dem Wert aus der Konstante `UPPER_LIMIT` verglichen. Zum Einsatz kommt der *kleiner gleich*-Operator. Ist die Zahl gleich dem oder kleiner als der in `UPPER_LIMIT` festgehaltene Grenzwert, wird dies dem Nutzer/der Nutzerin über eine Bildschirmausgabe mitgeteilt.</span>

>>>

### Verknüpfung von booleschen Ausdrücken

- Boolesche Ausdrücke können durch besondere Operatoren verknüpft bzw. kombiniert werden.
- Für die logische Verknüpfung stehen uns die Operatoren `!`, `&&` und `||` zur Verfügung.

>>>

### Logisches "NICHT" (!)

<span class="blocktext larger">Ein logisches **NICHT** kehrt den Wahrheitswert des betroffenen Terms um:</span>
 
<code>
!p ist wahr (true) wenn p falsch (false) ist
!p ist falsch (false) wenn p wahr (true) ist
</code>

<span class="blocktext">Damit können Sie einige *fehlende* Bedingungsprüfungen in der *Bouncer*-Umgebung ergänzen:</span>

``` java
/**
 * Bouncer bewegt sich solange vorwärts, bis er auf einem grünen Feld ankommt.
 */
while(!bouncer.isOnFieldWithColor(FieldColor.GREEN)) {
	move();
}
```

>>>

### Logisches "UND" (&&)

<span class="blocktext larger">Ein logisches **UND** kombiniert die Wahrheitswerte mehrerer Terme:</span>
 
<code>
p && q ist wahr (true) wenn p und q wahr sind
</code>

<span class="blocktext">Für die Auswertung gilt dabei die folgende *Wahrheitstabelle*:</span>

|	     |        |         |
|--------|--------|---------|
| **`&`**    | **`true`** | **`false`** |
| **`true`** | `true` | `false` |
| **`false`**| `false`| `false` |

>>>

### Logisches "ODER" (||)

<span class="blocktext larger">Ein logisches **ODER** kombiniert die Wahrheitswerte mehrerer Terme:</span>
 
<code>
p || q ist wahr (true) wenn <br />
1) p oder q wahr sind oder <br />
2) p und q wahr sind
</code>

<span class="blocktext">Für die Auswertung gilt dabei die folgende *Wahrheitstabelle*:</span>

|	     |        |         |
|--------|--------|---------|
| **`&`**    | **`true`** | **`false`** |
| **`true`** | `true` | `true` |
| **`false`**| `true`| `false` |

>>>

### Beispiel: Zahlen prüfen

``` java

public static final int UPPER_LIMIT = 50;
public static final int LOWER_LIMIT = 40;

// ...

int x = 42;
if(x >= LOWER_LIMIT && x <= UPPER_LIMIT) {
	// HINWEIS: Versuchen Sie IMMER sinnvolle Ausgaben und Rückmeldungen zu produzieren!
	System.out.println("Der Wert " + x + " liegt im Toleranzbereich von " + LOWER_LIMIT + " bis " + UPPER_LIMIT);
}
```

<span class="blocktext">Im Beispiel wird ein komplexer Ausdruck verwendet um die Zahl in der Variable `x` zuerst mit dem unteren und dann mit dem oberen Limit zu vergleichen. Durch die Kombination der beiden *größer gleich* und *kleiner gleich* Vergleiche mit einem logischen **UND** wird geprüft, ob die Zahl zwischen den beiden Werten liegt.</span>

>>>

### *Operator Precedence*: Auswertungsregeln

<span class="blocktext"> Bei der Auswertung von mathematischen Ausdrücken gilt in Java diese Reihenfolge: `[Klammern]` vor `[*,/,%]` vor `[+ und -]`. Operatoren mit gleicher *Precdence* (z.B. `+` und `-` werden von *links nach rechts* ausgewertet).</span>

``` java
int x = 1 + 4 * 5 / 2;
```

<span class="blocktext larger ">Auswertungsreihenfolge im Beispiel:</span>

- `4*5` (Zwischenergebnis ist `20`)
- `/2` (Zwischenergebnis ist `10`)
- `1+` (Endergebnis ist `11`)

>>>

### *Operator Precedence*: Lesbarkeit und Klammerung

<span class="blocktext"> Nutzen Sie die Möglichkeiten von Klammern, um Ihre Intention beim Programmieren möglichst explizit auszudrücken:</span>

``` java
int x = 1000;
int y = 100;
int i = 0;

// Automatische Auswertung
i = x + y / 100; // Ergebnis: 1001, Intention unklar

// Implizites Vorziehen der Addition
i = (x + y) / 100; // Ergebnis: 11, Intention klar

// Implizite Nutzung der automatischen Auswertung
i = x + (y / 100); // Ergebnis 1001, Intention klar
```

>>>


# Methoden mit Parametern und Rückgabewerten

>>>

## Für welchen Zweck haben wir bis jetzt Methoden eingesetzt?

<span class="blocktext">Bis jetzt dienen Methoden dazu, zusammengehörige Anweisungen zu gruppieren und den Code durch Decomposition verständlicher zu machen:</span>

- `turnRight()` als Ergänzung der fehlenden Möglichkeit, *Bouncer* nach Rechts zu drehen
- `moveToObstacle` zum Auslagern eines Teilproblems unseres *Algorithmus* 
- `drawCircle()` (von letztem Übungsblatt) um häufig verwendete Befehlsmuster nur einmal implementieren zu müssen

**Methoden können mehr!**

>>>

## Rückgabewerte und Parameter

<span class="blocktext">Methoden haben in Java noch zusätzliche Möglichkeiten, die wir bis jetzt nur indirekt genutzt haben: Methoden können – wie Funktionen* in der Mathematik – Ergebnisse zurückliefern, die auf der Basis von an die Methode übergebene Eingabewerte (Parameter) berechnet wurden:</span>

<code>wert <= FUNKTION(PARAMETER)</code>

oder

<code>sinus <= sin(WERT)</code>

<hr />
<span class="blocktext smaller">*In prozeduralen Programmiersprachen wie *C* oder *Pascal* heißen Subroutinen tatsächlich Funktionen und sind unabhängig von Objekten. In Java muss eigentlich immer von Methoden gesprochen werden, da Subroutinen werden hier immer im Kontext einer Klasse oder eines Objekts ausgeführt.</span>

>>>

### Beispiele aus der Mathematik: Sinus

<code>
x <= sin(90); x = 1<br /><br />
x <= sin(70); x = 0,939692620786<br /><br />
x <= sin(45); x = 0,707106781187<br /><br />
x <= sin(90); x = 1
</code>

<span class="blocktext">Die Sinusfunktion berechnet ein Ergebnis aus dem Eingabeparameter (hier: Winkel) und liefert das Ergebnis zurück. Aus gleichen Eingabeparametern wird das gleiche Ergebnis berechnet (Zeile 1 und 4).</span>

>>>

## Methoden in Java definieren

- Eine Methode besteht in Java aus dem **Methodenkopf** (oder *Signatur*) und dem **Methodenrumpf**
- Im Methodenkopf wird die Methode und deren Parameter beschrieben
- Im Methodenrumpf stehen die eigentlichen Befehle, die beim Aufruf der Methode ausgeführt werden sollen
- Das Erstellen einer Methode wird auch **Deklaration** genannt (hier wird in machen Programmiersprachen auch noch zwischen *Deklaration* und *Definition* unterschieden)

>>>

### Aufbau des Methodenkopfs

```
SICHTBARKEIT[1]  RÜCKGABETYP[2] NAME[3] (PARAMETERTYP[4]* PARAMETERNAME[5]*) {
	// ...
}
```

<span class="blocktext">`[1]`: Sichtbarkeit der Methode, z.B. `private` (nur innerhalb der Klasse) oder `public` (überall sichtbar)<br />
`[2]`: Was für Informationen gibt die Methode zurück? `void` bedeutet hier, es gibt keinen Rückgabewert<br />
`[3]`: Name der Methode für deren späteren Aufruf<br />
`[4]`: Typ des Parameters (Eingabedaten)<br />
`[5]`: Name des Parameters (Variable) über den er INNERHALB der Methode angesprochen werden kann (*Scope*)
</span>

<hr />
<span class="blocktext smaller">*Eine Methode kann über mehrere Parameter (jeweils mit Typ & Namen) verfügen. Diese werden dann durch Kommata getrennt angeben.</span>

>>>

### Ergebnisse zurückliefern

<span class="blocktext">Innerhalb der Methode wird die Rückgabe eines Werts durch das Schlüsselwort `return` eingeleitet:</span>

<code>return AUSDRUCK*;</code>

<span class="hint">*Richtiges* Die Methode wird mit der `return`-Anweisung sofort beendet und gibt den Wert des Ausdrucks zurück. Sie können auch Methoden ohne Rückgabewert (`void`) an jeder Stelle abbrechen, indem Sie den `return`-Befehl ohne nachfolgenden Ausdruck verwenden.</span>

<hr />
<span class="blocktext smaller">*Hier kann ein beliebiger Ausdruck, eine Variable oder ein Wert stehen, der aber mit dem Rückgabetypen der Methode übereinstimmt</span>

>>>

### Beispiel: Kilometer in Meter umrechnen

```java
private double kmToMeters(double km) {
	return 1000 * km;
}
```

<span class="blocktext">Beim Aufruf der Methode wird ein `double`-Wert übergeben, der eine Strecke in Kilometern repräsentiert. Im Rumpf der Methode wird dieser Wert mit dem Faktor multipliziert und das entsprechende Ergebnis zurückgegeben. Die Umrechnung von `km` in `m` erfolgt hier kombiniert mit der Rückgabe des Ergebnis (`return`).</span>

>>>

### Beispiel: Mehrere Parameter und * Returns*

``` java
private int max(int value1, int value2) {
	if (value1 > value2) {
		return value1;
	} else {
		return value2;
	}
}
```

<span class="blocktext">Die Methode bekommt zwei Parameter (`value1` und `value2`) übergeben und überprüft, welcher Wert größer ist. Die Rückgabe ist abhängig von den Parametern, die beim Aufruf übergeben werden (z.B. `int max = max(12,14);`).</span>

>>>

### Beispiel: Objekte als Rückgabewert

<span class="blocktext">Auch Objekte können aus Methoden zurückgegeben werden. Der Mechanismus ist der gleiche wie bei primitiven (Rückgabe-)Typen</span>

``` java
private static final int BORDER_WIDTH = 2;
private static final Color BORDER_COLOR = Colors.GREY;

public void draw() {
	drawBackground(Colors.WHITE);
	Circle myCircle = createCircleWithBorder(100,100,70);
	myCircle.draw();
}

private Circle createCircleWithBorder(int xPos, int yPos, int radius) {
	Circle circle = new Circle(xPos, yPos, 2*radius, 2*radius, Colors.RED);
	circle.setBorder(BORDER_COLOR, BORDER_WIDTH);
	return circle;
}
```

>>>

### Variablen innerhalb von Methoden

- Variablen die innerhalb einer Methode deklariert werden heißen lokale Variablen.
- Sie leben vom Eintrittspunkt in die Methode bis zum Austritt (*Scope*: Sichtbarkeit und Gültigkeit).
- Sie sind nur innerhalb der Methode sichtbar, in der sie definiert wurden.
- Parameter sind lokale Variablen, die mit den übergebenen Werten initialisiert werden.
- Das Set (die Menge) an lokalen Variablen bei der Ausführung einer Methode nennt man Stack Frame.

>>>

### Beispiel: Fakultät  berechnen

``` java
private static final int MAX_NUM = 4;

private void doSomeMath() {
	for (int i = 0; i < MAX_NUM; i++) {
		System.out.println(i + "! = " + factorial(i));
	}
}

private int factorial(int n) {
	// Die lokale Variable result ist nur in dieser Methode verwendbar
	int result = 1;
	// Wir können hier den Namen der Zählervariable i (aus doSomeMath) wiederverwenden, da
	// die Methoden unterschiedliche Scopes haben.
	for (int i = 1; i <= n; i++) {
		result *= i;
	}
	return result;
}
```

<span class="blocktext smaller">In der Methode `factorial` wird die Fakultät der übergebenen Zahl berechnet. Für die Berechnung des Produktes wird eine `for`-Schleife eingesetzt, die von  *1* bis zum in `n` gespeicherten Wert läuft und in jeder Iteration den in `result`  gespeicherten Wert mit dem aktuellen Wert der Zählervariable `i` multipliziert und den ursprünglichen Wert von `result` mit diesem Ergebnis überschreibt.</span>

>>>

## Häufige Probleme mit Parametern, Variablen und Bugs (1/3)

<span class="blocktext">Betrachten Sie dieses Beispiel:</span>

``` java
private void doSomeMath() {
	int x = 3;
	addFive(x);
	System.out.println("x = " + x);
}

private void addFive(int x) {
	x += 5;
}
```

Das Programm gibt `x = 3` aus. Warum ist das so?

>>>

## Häufige Probleme mit Parametern, Variablen und Bugs (2/3)

<span class="blocktext smaller">Bug-Gefahr: An die Methode wird ein Parameter mit dem Wert von `x` übergeben, nicht die Variable `x` selber. Das heißt alle Veränderungen innerhalb der Methode werden nur in deren *Scope* angewandt: `x` aus `doSomeMath` bleibt unverändert. Im Beispiel existieren zwei verschiedene Variablen mit dem Namen `x` – syntaktisch ist dies so zulässig (verschiedene Namensräume). Oft sind unterschiedliche Namen aber sinnvoller!</span>

<span class="hint smaller">Java arbeitet mit dem *Call by Value* – Prinzip, d.h. für primitive Datentypen gilt immer: Übergeben wird immer der Wert (eine Kopie) der betreffenden Variable, nicht die Variable (bzw. Ihre Speicheradresse) selbst! Das gilt eigentlich auch für Objekte, hat dort aber andere Konsequenzen: Manipulationen an übergebenen Objekten ändern die ursprünglichen Objekte!</span>

>>>

## Häufige Probleme mit Parametern, Variablen und Bugs (2/3)

Ohne Bugs:

``` java
private int addFive(int x) {
	x += 5;
	return x;
}

private void doSomeMath() {
	int x = 3;
	x = addFive(x);
	System.out.println("x = " + x);
}
```

Das Programm gibt `x = 8` aus.

>>>

# Animationen in der GraphicsApp: Der Draw Loop	

>>>

### Animationen in der GraphicsApp (1/2)

- Bis jetzt: Unsere Anwendungen zeichnen fast immer ein statisches Bild: Kreis, *Target*, ...
- Was wir eigentlich wollen: Interaktive, animierte Anwendungen!
- Wie wir das erreichen: Zeichnen von graphischen Objekte, verändern von Position, Farbe und Größe und erneutes Zeichnen
- Die GraphicsApp erlaubt so etwas über den *draw loop*

<span class="hint smaller">Die GraphicsApp verfügt über eine öffentliche (`public`) Methode draw. Diese Methode wird automatisch und regelmäßig vom System aufgerufen (Das Intervall wird über einen festen FPS-Wert bestimmt (*frames per second*)). Mit jedem neuen Aufruf können wir Teile des vorher gezeichneten Bildschirms überschreiben. Das Prinzip ähnelt dabei der Animation in einem Zeichentrickfilm.</span>

>>>

### Animationen in der GraphicsApp (2/2)

![](slides/images/draw-loop.png)

>>>

### Beispiel: FlyingBall

``` java
public class FlyingBall extends GraphicsApp {
	// Instanzvariable für den Ball
	private Circle ball;

	public void initalize() {
		setCanvasSize(500,500);
		// Erstellen des Balls
		ball = new Circle( 250,250, 50, 50, Colors.RED);
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

### Instanzvariablen (1/2)

<span class="blocktext larger">Häufig benötigen verschiedene Methoden einer Klasse Zugriff auf dieselben Variablen:</span>

- Wenn wir Objekte in `initalize` anlegen und in `draw` manipulieren bzw. zeichnen wollen, müssen die entsprechenden Variablen in beiden Methoden zugänglich machen.
- Instanzvariablen werden in der Klasse und außerhalb von Methoden (typischerweise zu Beginn) definiert und stehen einer Instanz in jeder Methode zur Verfügung (jede Instanz hat ihre eigenen Eigenschaftswerte): `private TYP NAME;`.

>>>

### Instanzvariablen (2/2)

<span class="blocktext larger">Wir nutzen Instanzvariablen (Eigenschaften), um Informationen zu speichern, die:</span>

- Innerhalb der Klasse bzw. des Objekts („überall“) verfügbar sein müssen.
- Nicht als Parameter übergeben oder als lokale Variablen abgespeichert werden können.

<span class="hint">Instanzvariablen werden nur dann eingesetzt, wenn die gespeicherte Information tatsächlich an unterschiedlichen Stellen der Klasse verwendet wird. Temporäre Informationen werden lokal (in Methoden) gespeichert und/oder über Parameter und Rückgabewerte verarbeitet.</span>

>>>

## Geschwindigkeit und Animation

<span class="blocktext smaller">Eine Animation kommt durch die Änderung der `x`- bzw `y`-Position und des anschließenden Neuzeichnens eines Objekts zustande. Die Geschwindigkeit ergibt sich durch die Größe der Positionsveränderungen: *pixels per frame*. Die Geschwindigkeit wird oft als `dx` bzw. `dy` (Delta, Differenz) bezeichnet.</span>

| Frame | Code | Position | Geschwindigkeit |
|:-----:|------|--------------------------|-----------------|
| **1** | `ball.move(1,1); ball.draw();` | x = 251, y= 251 | dx = 1, dy = 1 |
| **2** | `ball.move(1,1); ball.draw();` | x = 252, y= 252 | dx = 1, dy = 1 |
| **3** | `ball.move(1,1); ball.draw();` | x = 253, y= 253 | dx = 1, dy = 1 |
| **4** | `ball.move(1,1); ball.draw();` | x = 254, y= 254 | dx = 1, dy = 1 |
| **5** | `ball.move(1,1); ball.draw();` | x = 255, y= 255 | dx = 1, dy = 1 |

>>>

### Kollisionen (mit der Wand) erkennen

![left-side](slides/images/graphics-app-collision.png)
<span class="image-description">In jedem *Frame* stehen Ihnen die notwendigen Informationen zur Verfügung, um eine mögliche Kollision eines Objektes mit dem Rand der Zeichenfläche zu prüfen: die **Position** des Objektes, dessen **Größe** und die **Breite** bzw. **Höhe** der Zeichenfläche.<br /><br /> In unserem Beispiel: *Wenn die x-Position des Balls addiert mit seinem Radius größer gleich der Breite der Zeichenfläche ist, heißt das: Der Ball berührt den Rand oder hat ihn bereits überschritten.*</span>

>>>

## Zusammenfassung (1/2)

- Ausdrücke liefern einen Wert zurück, Operatoren verknüpfen Ausdrücke.
- Zur Laufzeit kann der Typ eines Wertes durch Typumwandlung geändert werden.

>>>

## Zusammenfassung (2/2)

- Methoden können einen oder mehrere Eingabewerte (Parameter) verwenden und ein Ergebnis (Rückgabewert) ausgeben. Parameter und Rückgabe können primitive oder komplexe Datentypen sein, der jeweilige Typ wird in der Methodensignatur angegeben.
- In Java gilt das *Call by Value*-Prinzip: Primitive Werte werden als Kopien übergeben.
- Animationen werden in der GraphicsApp durch Zustandsmanipulation und Neuzeichnen von Objekten erreicht. Die `draw`-Methode wird zur Laufzeit regelmäßig aufgerufen.

>>>


### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>