# Variablen und Objekte

<span class="subtitle">Speichern und manipulieren von primitiven Datentypen und die Verwendung vorgegebener Klassen</span>

<span class="blocktext">Struktur und Inhalt des Kurses wurden 2012 von Markus Heckner entwickelt. Im Anschluss haben Alexander Bazo und Christian Wolff Änderungen am Material vorgenommen. Die aktuellen Folien wurden von Alexander Bazo erstellt und können unter der [MIT-Lizenz](https://raw.githubusercontent.com/OOP-Regensburg/OOP-Folien/master/LICENSE) verwendet werden.</span>

>>>

### Aktueller Semesterfortschritt (Woche 3)

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
<span>Kontrollstrukturen &amp; Methoden</span>
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

![large-image](slides/images/pingo-2019-10-29.png)

https://pingo.coactum.de/454414

>>>

### Rückblick

- Java ist eine plattformunabhängig Programmiersprache: Zum Ausführen von Java-Programmen wird eine plattformspezifische Laufzeitumgebung benötigt
- Programme unterscheiden sich in der Entwicklungsphase (Quellcode) und der Ausführungsphase
- Klassen sind das zentrale Strukturelement eines Java-Programms und bei Programmstart, wird immer die essentielle `main`-Methode ausgeführt
- *Decomposition* und die *Top Down*-Analyse sind zentrale Konzepte, um Programmierprobleme strukturiert zu lösen und übersichtlichen und wartbaren Code zu erstellen

>>>

## Das Programm für heute

- Einführung in die Verwendung von Variablen und mathematischen Operationen
- Erste Informationen zu Klassen und Objekte (das wird in der nächsten Woche fortgesetzt)
- Zentrale Funktionen und grundlegende Verwendung der *Graphics App*

>>>

# (Zwischen-) Speichern von Werten in Variablen

>>>

### Einige Dinge, die wir aktuell noch nicht können

- Beim Arbeiten mit *Bouncer*, die Häufigkeit bestimmter Ereignisse, z.B. die Anzahl *roter* Felder auf einer Straße bestimmen
- Mathematische Berechnungen durchführen und deren Ergebnisse im späteren Programmverlauf wieder verwerten

Für diese oder ähnliche Aufgaben müssen wir uns innerhalb unserer Programme *Dinge* **merken**. In den meisten Programmiersprachen werden für diesen Zweck **Variablen** eingesetzt. So auch in Java!

>>>

## Variablen

<span class="blocktext smaller">Eine Variable ist ein Ort (oder Schachtel, *Label*, Flasche, ...), an dem ein Programm Informationen für die spätere Nutzung speichern kann – es handelt sich um einen benannten, typisierten Speicherplatz, in dem Sie Werte abspeichern und abrufen können. In Java bestehen Variablen immer aus drei zusammengehörigen Informationseinheiten:</span>

<div class="diagram">
<span class="box-with-label">
<span class="box-label">TYP</span>
<span class="content">Welche Art von Information wird in der Variable abgelegt?</span>
</span>

<span class="box-with-label">
<span class="box-label">NAME</span>
<span class="content">Über welchen Namen wird die Variable im Code angesprochen?</span>
</span>

<span class="box-with-label">
<span class="box-label">WERT</span>
<span class="content">Welchen Wert hat die Variable zu einem bestimmten Zeitpunkt?</span>
</span>
</div>

Im Quellcode schaut das dann z.B. so aus: 

`int numPlayers = 11`;

<span class="blocktext smaller">`int` steht für den Typ (hier eine Ganzzahl), `numPlayers` für den vergebenen Namen und `11` ist der Wert, der in der erstellten Variable gespeichert wird.</span>

>>>

### Variablen: Typen und Werte (1/2)

<span class="blocktext larger">In Java hat jede Variable einen bestimmten Typ, der vorgibt, welche Art von Information gespeichert werden kann. Es existieren unterschiedliche Typen für unterschiedliche Informationsarten. Dabei wird zwischen primitiven und komplexen Typen (oder Referenzdatentypen) unterschieden.</span>

**Typ und Wert einer Variable müssen zusammen passen. Wenn nicht, passieren im besten Fall ungewollte Dinge oder im schlimmsten Fall stürzt Ihr Programm ab!**

>>>

### Variablen: Typen und Werte (2/2)

| Datentyp | Mögliche Werte | Anwendungsbeispiel |
|:--------:|----------------|--------------------|
| `int` | Ganzzahlen: Natürliche Zahlen (1,2,3,...), 0 und negative Werte | `int numPlayers = 11` |
| `float` | Gleitkommazahlen, also *`int` mit Komma*, daher genauer!  | `float averageGoals = 0.2` |
| `double` | Wie `float` aber kleinere bzw. größere Zahlen möglich | `double winProbability = 3.14159265359`  |
| `char` | Zeichen: Buchstaben, Interpunktion, etc. | `char keyPlayerOne = ‘x‘` |
| `boolean` | Wahrheitswert: ja oder nein bzw. `true` oder `false` | `boolean playing = true` |

>>>

### Variablen deklarieren und manipulieren (1/2)

<span class="blocktext">Sie können in Java die bekannten mathematischen Operatoren (u.a. `+`, `-`, `/` oder `*`) verwenden, um numerische Werte zu manipulieren. Mathematische Ausdrücke können direkt im Code notiert werden. Ausgewertet werden diese unter Verwendung der bekannten mathematischen (Klammer-) Regeln.</span>

``` java
int result;

result = 42 + 1337; // In der Variable result ist nun der Wert 1379 gespeichert
result = 42 - 1337; // In der Variable result ist nun der Wert -1295 gespeichert
result = 42 * 1337; // In der Variable result ist nun der Wert 56154 gespeichert
result = 1337 / 42; // In der Variable result ist nun der Wert 31 gespeichert
```

<span class="blocktext">Achtung: Rationale Zahlen können nur in `float`- oder `double`-Variablen gespeichert werden. Beim *Verpacken*  in eine `int`-Variable geht der Teil nach dem Dezimalzeichen verloren.</span>

>>>

### Variablen deklarieren und manipulieren (2/2)

``` java
public void run() {
	double myDouble = 4.2;
	int myInt = 42;
	int anotherInt;
	anotherInt = 24;
	myInt = 1337;
	myInt = 1337 + 42;
	anotherInt = myInt;
	myInt = 101;
}
```

<hr />

<span class="step-button" onclick="stepperForVariableDemo();">Methode `run` ausführen</span>

<span class="step-label current-line">`Code Zeile`</span><span class="step-value current-line">-</span>
<span class="step-label myDouble">`myDouble`</span><span class="step-value myDouble">-</span>
<span class="step-label myInt">`myInt`</span><span class="step-value myInt">-</span>
<span class="step-label anotherInt">`anotherInt`</span><span class="step-value anotherInt">-</span>

>>>

### Namenskonventionen für Variablen (1/3)

<span class="blocktext">Zulässige Variablennamen ...</span>

- ... beginnen mit einem Buchstaben oder Unterstrich (`_`)
- ... bestehen nur aus Buchstaben, Zahlen und Unterstrichen
- ... und sind keine reservierten Wörter (*Keywords*) in Java

![large-image](slides/images/java-keywords.png)

>>>

### Namenskonventionen für Variablen (2/3)

<span class="blocktext">Nur einige dieser Namen können für Variablen verwendet werden:</span>

<span class="blocktext">
<code>x</code><br />
<code>WIDTH</code><br />
<code style="text-decoration:line-through">2endPlayer</code><span style="display:inline-block;margin-left:1em;font-size:0.75em">Beginnt nicht mit Buchstaben oder Unterstrich.</span><br />
<code>_numPlayers</code><br />
<code>numberOfPlayers</code><br />
<code>number_of_players</code><br />
<code style="text-decoration:line-through">Number of Players</code><span style="display:inline-block;margin-left: 1em;font-size:0.75em">Enthält Leerzeichen.</span><br />
<code style="text-decoration:line-through">number*Players</code><span style="display:inline-block;margin-left: 1em;font-size:0.75em">Enthält andere Zeichen als Buchstaben, Zahlen und den Unterstrich.</span><br />
<code style="text-decoration:line-through">else</code><span style="display:inline-block;margin-left: 1em;font-size:0.75em">Ist ein reserviertes Wort.</span><br />
</span>

>>>

### Namenskonventionen für Variablen (3/3)

- Variablen die den genannten Konventionen entsprechen sind syntaktisch korrekt: *Ihr Programm funktioniert*
- Zusätzlich gibt es weitere Konventionen, die beschreiben, wie Ihr Code, unabhängig seiner syntaktischen Korrektheit, formatiert sein sollte: *Ihr Code ist lesbar gestaltet*
- Für alle Bezeichner gilt: Vermeiden Sie das Mischen von englischer und deutscher Sprache
- Für Variablen gilt: Namen beginnen mit einem Kleinbuchstaben und werden (wenn nötig) in der CamelCase-Notation geschrieben: d.h. *alleBuchstabenEinesNeuenWortesWerdenGrossGeschrieben*

>>>

## Blöcke

Ein Block ist eine abgetrennte Menge von Anweisungen (Statements) zwischen geschweiften Klammern:

``` java
{
	int x = 5;
	double y = readDouble("Zahl: ");
	System.out.println("y ist: " + y); 
}
```

<span class="blocktext">Blöcke können notwendiger Teil eines Sprachelements z.B. einer Schleife oder einer `if`-Abfrage sein, oder als optionale Strukturelemente innerhalb einer Methode (oder bedingt auch einer Klasse) existieren. Im Bezug auf Variablen definieren Blöcke deren *Scope*.</span>

>>>

## Scopes in Java

<span class="blocktext">Der Scope (Anwendungsbereich) einer Variable beschreibt den Bereich in dem sie verwendet werden kann und ist auf den Block beschränkt, in dem diese deklariert wurde:</span>


<div class="diagram">
<span class="box-with-label">
<span class="box-label">Klasse</span>
<span class="content">Variablen, die auf Klassenebene deklariert wurden, können von jeder Stelle der umschließenden Klasse genutzt werden.</span>
</span>

<span class="box-with-label">
<span class="box-label">Methode</span>
<span class="content">Variablen, die in einer Methode deklariert werden, sind nur dort, nicht aber in der umschließenden Klasse nutzbar.</span>
</span>

<span class="box-with-label">
<span class="box-label">Kontrollstrukturen</span>
<span class="content">Variablen, die innerhalb einer Kontrollstruktur deklariert werden, sind nur dort und nicht in der umschließenden Methode nutzbar.</span>
</span>
</div>

>>>

### Beispiel: Variable-Scope

``` java
public void printNum() {
	int x = 5;
	double y = readDouble("Zahl: ");
	System.out.println("y ist: " + y);
}

public void printAnotherNum() {
	// BUG: Das funktioniert nicht, da y im aktuellen Scope nicht definiert wurde
	System.outprintln("y ist: " + y);
}
```

<span class="blocktext">Die Deklaration der Variable `y` aus `printNum` ist in `printAnotherNum` nicht mehr gültig. Der Fehler wird vom Compiler erkannt und in *IntelliJ* sogar schon vor dem Ausführen automatisch durch hervorheben der entsprechenden Code-Zeile markiert.</span> 

>>>

### Abkürzungen für häufige mathematische Operationen (1/3)

<span class="blocktext">Beim Programmieren stoßen Sie häufig auf solche Konstruktionen:</span>

<code style="text-align:center">w = w + 2; x = x * 3; y = y / 4; z = z – 5;</code>

<span class="blocktext center">bzw.</span>

<code>variable = variable [OPERATOR] value</code>

<span class="blocktext">Was passiert hier? Auf der rechten Seite der Operationen (des *Ausdrucks*) wird der aktuelle Wert der Variable modifiziert. Anschließend wird dieser neue Wert in der Variable auf der linken Seite gespeichert.</span>

>>>

### Abkürzungen für häufige mathematische Operationen (2/3)

<span class="blocktext">Für diese, sehr häufige, Art der Variablenmanipulation können Sie eine Kurzschreibweise benutzten, die Modifikation und Zuweisung verbindet:</span>

<code style="text-align:center">variable [OPERATOR]= value;</code>

<span class="blocktext center">bzw.</span>

<code style="text-align:center">w += 2; x *= 3; y /= 4; z -= 5;</code>

>>>

### Abkürzungen für häufige mathematische Operationen (3/3)

<span class="blocktext">Besonders häufig ist die Addition bzw. Subtraktion um genau `1`, z.B. zum Zählen von durchgeführten Schleifendurchgängen. Dafür gibt es eine noch kürzere Schreibweise:</span>

``` java
int i = 42;
i++; // Ersetzt i += 1: Die Variable i hat jetzt den Wert 43
i--; // Ersetzt i -= 1: Die Variable i hat jetzt wieder den Wert 42;
```

>>>


### Ein Blick zurück auf die `for`-Schleife

<span class="blocktext">Wir haben bereits in den ersten zwei Wochen Variablen verwendet, u.a. in den `for`-Schleifen:</span>

``` java
for(int i=0; i < 3; i++) {
	bouncer.turnLeft();
}

```

<span class="blocktext">In der sogenannte *Zählervariable* `i` wird eine Ganzzahl gespeichert, die beim Start der Schleife mit dem Wert `0` initialisiert wird. Mit jedem Schleifendurchlauf wird dieser Wert um 1 inkrementiert (`i++`). Sobald `i` den Wert `3` erreicht hat, also nicht mehr * kleiner als 3* ist, bricht die Schleife ab.</span>

>>>

### Unveränderbare Variablen: Konstanten

<span class="blocktext">Variablen werden genutzt, um veränderbare Werte zu speichern und gegebenenfalls zu manipulieren. Fixe Werte werden (unveränderlich) in sogenannten Konstanten abgelegt und am Anfang einer Klasse (außerhalb von Methoden) definiert.</span>

``` java
public static final TYPE NAME = VALUE;

// Ein Beispiel
public static final double PI = 3.14159265;
```

<span class="blocktext">Für Konstanten gelten besondere Namenskonvention: Konstanten werden immer in `GROSSBUCHSTABEN_MIT_UNTERSTRICHEN` notiert um sie von veränderbaren Variablen zu unterscheiden.</span>

>>>

# Klassen und Objekte: Erste Informationen

>>>

## Was bedeutet *objektorientierte* Programmierung eigentlich?

- Java-Code besteht immer aus einer oder mehreren Klassen: Diese sind die zentralen Elemente eines Programms und stellen Muster / Schablonen für Objekte dar
- Zur Laufzeit werden aus Klassen, Objekte instanziiert, mit denen der Computer interagiert und das von Ihnen geschriebene Programm umsetzt.

>>>

### Klassen als Vorlage ähnlicher Dinge

<span class="blocktext">Klassen sind Sammlungen von Merkmalen und Verhalten, die eine Vorlage für eine gleiche oder ähnliche Gruppe von Dingen bilden. Klassen sind Konzepte, keine greifbaren Dinge.</span>

<hr />

<span class="blocktext">**Ein Beispiel:** Die Klasse Dozierende beschreibt Personen, die an der Uni arbeiten und Kurse halten. Sie fasst die Eigenschaften und Tätigkeiten zusammen, die alle Dozierende haben.</span>

>>>

### Objekte als konkrete Exemplare einer Klasse

<span class="blocktext">Objekte sind Dinge, die über das Verhalten und die Merkmale von Klassen verfügen. Jedes Objekt ist eine Instanz bzw. eine konkret Repräsentation einer bestimmten Klasse.</span>

<hr />

<span class="blocktext">**Ein Beispiel:** Niels Henze und Alexander Bazo sind Instanzen der Klasse `Dozierende`. Beide arbeiten an der Uni und halten dort Kurse. Die beiden „Objekte“ vom Typ `Dozierende` unterscheiden sich z. B. durch ihre Namen, Kurse oder ihr Alter.</span>

>>>

## Die Klasse "Hund"

![large-image](slides/images/classes-dog-1.png)

>>>

## Instanzen und Objekte

![large-image](slides/images/classes-dog-2.png)

<span class="blocktext">Drei Instanzen (Objekte) der Klasse Hund. Die Objekte teilen sich bestimmte Beschreibung – sie basieren auf dem gleichen Muster. Die konkreten Ausprägungen der Eigenschaften, z.B. hier die *Fellfarbe* kann unterschiedlich sein!</span>

>>>

### Ähnliche und unterschiedliche Klassen

<span class="blocktext smaller">Unterschiedliche Klassen können gleiche Merkmale oder Verhaltensmuster besitzen. Katzen und Hunde z.B. haben gewisse Gemeinsamkeiten, unterscheiden sich aber auch:</span>

![small-image](slides/images/classes-cats-and-dogs.png)

>>>

### Ein einfaches Beispiel für eine Klassenhierarchie: Das Haustier (1/2)

![large-image](slides/images/classes-class-hierachie-1.png)

>>>

### Ein einfaches Beispiel für eine Klassenhierarchie: Das Haustier (2/2)

<span class="blocktext smaller"> Die Klassen Dog und Cat sind Subklassen der Klasse Pet und teilen sich alle Eigenschaften (und Verhaltensmuster), die einem Haustier (Pet) eigen sind: Fell & Fressen</span>

![small-image](slides/images/classes-class-hierachie-2.png)

>>>

### Objektorientierung und die Realität

<span class="blocktext">Klassen & Objekte orientieren sich häufig aber nicht immer an Dingen aus der realen Welt! In Ihren Programmen müssen Sie auch Klassen und Objekte nutzen bzw. anlegen, die keine oder keine direkte Entsprechung in der realen Welt haben: *Bouncer* & `BouncerApp`, Dateien auf dem Computer, Auswahllisten, Emails, ...</span>

>>>


### Ein bereits bekanntes Beispiel für die Verwendung von Klassen

``` java
public class FirstRoom extends BouncerApp {

	public void bounce() {
		loadMap("Empty");
		bouncer.move();
	}

}
```

<span class="blocktext">Wir haben bereits mehrere *Bouncer*-Anwendungen geschrieben. Diese bestanden **immer** aus einer Klasse mit ähnlichem Aufbau. Alle *Bouncer*-Programme haben sich z.B. die Methode `bounce` geteilt, in der aber von Programm zu Programm **unterschiedliche** Befehle standen.</span>

>>>

# Die Graphics App-Umgebung

>>>

### Unterschiedliche Arten von Programmen für unterschiedliche Zwecke

- Mit den *Bouncer*-Programmen haben Sie die ersten Schritte im Bereich der Programmierung gemacht und *Grundlagen gelernt*
- Mit den reinen Konsolenprogrammen (siehe *Hello World* aus der letzten Woche) können Sie Anwendung ohne oder mit geringer Nutzerinteraktion erstellen
- Für graphische Anwendungen wie z.B. Animationen oder kleine Spiele verwenden wir in diesem Kurs die *GraphicsApp*

>>>

## Die GraphicsApp

![left-side](slides/images/graphics-app-demo.png)
<span class="image-description">GraphicsApp-Anwendungen verfügen über eine Zeichenfläche. Auf dieser Fläche können Sie graphische Objekte einzeichnen  und deren Aussehen und Position verändern. Einige graphische Objekte sind vorgegeben. Andere können Sie durch Kombination dieser Vorgaben oder Bilder bzw. Texte selbst zusammensetzen.</span>

>>>

### Eine GraphicsApp-Anwendung erstellen

``` java
// In der zentralen Klasse Ihres Programms können Sie den Typen durch die Klassenhierarchie
// angeben. Jede GraphicsApp ist eine Subklasse von GraphicsApp. 
public class HelloGraphicsApp extends GraphicsApp {
	
	// Diese Methode stellt den Einstiegspunkt in die Anwendung da (Vgl. main oder bounce).
	public void initialize() {
		// Hier können Sie allgemeine Einstellungen an der Anwendung z.B. die Fenstergröße vornehmen.
	}

	// Hier können Sie Befehle zum Zeichnen graphischer Elemente notieren.
	// Die Methode wird während der Laufzeit des Programms wiederholt, d.h. ca. 60x pro Sekunde,
	//  aufgerufen. Dadurch können wir später z.B. Animationen erzeugen, in dem wir in jedem "Frame" 
	// andere Elemente zeichnen!
	public void draw() {
		// Hier werden die Elemente erstellt und gezeichnet.
	}

}
```

>>>

### Eine GraphicsApp-Anwendung starten

<span class="blocktext">Um eine *GraphicsApp* zu starten benötigen Sie eine zweite Datei, deren Klassen über eine `main`-Methode verfügt:</span>

``` java
public class HelloGraphicsAppLauncher {
	
	public static void main(String[] args) {
		GraphicsAppLauncher.launch("HelloGraphicsApp");
	}

}

```

<span class="blocktext">Wie bei *Bouncer* wird hier der Name des zu startenden Programms angegeben (hier: `GraphicsAppLauncher.launch("HelloGraphicsApp");`). Die Anwendung wird über diese Datei gestartet (Rechtsklick und `run`). Keine Sorge, wir bereiten das in der Regel für Sie vor.</span>


>>>

### Das Koordinatensystem der GraphicsApp

![left-side](slides/images/graphics-app-coordinates.png)
<span class="image-description">Das Raster für das Koordinatensystem bilden die Pixel auf Ihrem Bildschirm. Wenn Sie ein Objekt an die Position (2,2) verschieben, erscheint es 2 Pixel vom oberen und 2 Pixel vom linken Rand der Zeichenfläche versetzt.</span>

>>>

### Verfügbare graphische Elemente

- Alle Elemente, die Sie auf dem Bildschirm zeichnen können, werden durch Klassen bzw. Objekte repräsentiert.
- Jede dieser Klassen ist eine Subklassen von `GraphicsObject` und hat z.B. eine Größen oder eine Position auf dem Bildschirm.
- Sie können Rechtecke (Klasse `Rectangle`), Ellipsen und Kreise (`Ellipse` bzw. `Circle`), Linien (`Line`), Texte (`Label`) oder Bilder (`Image`) zeichnen.
- Wenn Sie ein solches Element auf den Bildschirm zeichnen wollen, erzeugen Sie ein Objekt (Instanz) der jeweiligen Subklasse und spezifizieren das Aussehen.

>>>

### Objekte in Java (und der GraphicsApp) erzeugen

<code style="text-align: center">Ellipse circle = new Ellipse(200, 200, 100, 100, Colors.RED);</code>

<span class="blocktext">Über den **Klassennamen** (`Ellipse`) spezifizieren Sie die gewünschte *Art* bzw. Klasse des Elements. Diese stellt den **Datentyp** der Variable (hier: `circle`) dar, in der Sie das neue Element speichern wollen. Über das Schlüsselwort `new` wird das Erstellen einer neuen **Instanz** eingeleitet. Dazu müssen eine Reihen von **Parametern** angegeben werden, die die initialen **Eigenschaftswerte** der Instanz beschreiben.</span>

<span class="blocktext">Die zu übergebenen Parameter und deren Bedeutung unterscheiden sich von Klasse zu Klasse. Eine genaue Dokumentation darüber, wie die einzelnen Elemente erzeugt werden können, finden Sie im GRIPS-Kurs</span>	

>>>

### Farben in der GraphicsApp

<span class="blocktext">Überall dort, wo Sie Farben angeben können oder müssen, benötigen Sie eine **Instanz** der Klasse `Color`. Sie können diese auf unterschiedliche Art und Weise erhalten:</span>

- In der Klasse `Colors` finden Sie einige Eigenschaften, die vorgegeben Farben repräsentieren, z.B. `Colors.RED`.
- Über die **Methode** `Colors.getRandomColor()` können Sie eine zufällige Farbe erstellen und z.B. in einer Variable speichern: `Color randomColor = Colors.getRandomColor();`.
- Sie können selbstständig Farben aus dem *RGB*-Raum *mischen*: `Color myColor = new Color(255,0,0);` (Hier wird die Farbe *Rot* erzeugt).

>>>

### Mit Objekten kommunizieren (1/2)

- Neben Eigenschaften besitzen Klassen bzw. Objekte auch *Verhalten*. Dieses Verhalten ist über Methoden innerhalb der jeweiligen Klassen definiert. Was eine Klasse machen kann (welche Methoden es besitzt), können Sie in der Dokumentation nachschlagen.
- Sie können eine Nachricht an ein Objekt (Instanz einer Klasse) schicken, um dieses aufzufordern, ein bestimmtes Verhalten auszuführen: `NAMEDESOBJEKTS.METHODE();`.

>>>

### Mit Objekten kommunizieren (2/2)

- Das haben wir auch schon mit *Bouncer* so gemacht: `bouncer.move();` (d.h. auch, irgendwo muss eine Variable mit dem Namen `bouncer` erstellt worden sein ...)
- Sie müssen diesen Mechanismus nutzten, um die erstellen Objekte zu zeichnen, da diese sonst nicht auf dem Bildschirm erscheinen: 

``` java
Ellipse circle = new Ellipse(200, 200, 100, 100, Color.CYAN);
circle.draw();
```

>>>

# Demo: Die ersten Schritte mit der GraphicsApp

*Hint*: Mit dem Befehl `drawBackground()` können Sie den Hintergrund der Zeichenfläche einfärben, z.B. so: `drawBackground(Colors.BLACK);`.

>>>

# Demo: Einen Kreis zentrieren

*Hint*: Über die Methoden `getHeight()` und `getWidth()` erhalten Sie Zugriff auf die aktuelle Höhe und Breite der Zeichenfläche und können diese in mathematischen Operationen verwenden.

>>>

## Zusammenfassung (Variablen)

- Variablen speichern Werte während der Programmausführung (Laufzeit). Sie sind Platzhalter für unterschiedliche Daten, funktionieren aber immer nur mit einem bestimmten Datentyp.
- Werte, die während der Implementierung festgelegt werden und zur Laufzeit unveränderlich sind, nennt man Konstanten.

>>>

## Zusammenfassung (Klassen und Objekte)

- Java ist eine objektorientierte Programmiersprache.
- Klassen definieren Eigenschaften und Verhalten für ein oder mehrere Objekte 
- Objekte sind die Instanzen der Klassen
- Klassen sind hierarchisch angeordnet: Superklassen können Eigenschaften und Verhalten definieren, die für alle Subklassen gelten
- Objekte werden mit dem Aufruf `new` erzeugt.
- ProgrammiererInnen können Nachrichten an Objekte senden und dazu deren Methoden aufrufen.

>>>

## Zusammenfassung (GraphicsApp)

- Mit Hilfe der GraphicsApp können wir einfache graphische Elemente auf dem Bildschirm zeichnen
- Alle Elemente werden durch Instanzen der entsprechenden Klassen repräsentiert
- Über die Eigenschaften der Objekte/Instanzen wird deren Erscheinungsbild definiert
- Die Elemente sind erst sichtbar, nachdem ihre `draw`-Methode aufgerufen wurde

>>>

### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>