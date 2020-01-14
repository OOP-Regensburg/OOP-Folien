# Debugging

<span class="subtitle">Fehler in Programmen identifizieren und beheben</span>

<span class="blocktext">Struktur und Inhalt des Kurses wurden 2012 von Markus Heckner entwickelt. Im Anschluss haben Alexander Bazo und Christian Wolff Änderungen am Material vorgenommen. Die aktuellen Folien wurden von Alexander Bazo erstellt und können unter der [MIT-Lizenz](https://raw.githubusercontent.com/OOP-Regensburg/OOP-Folien/master/LICENSE) verwendet werden.</span>

>>>

### Aktueller Semesterfortschritt (Woche 12)

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
<span class="done">Listen, Maps &amp; die Collections</span>
<span>Speicherverwaltung</span>
<span>Umgang mit Dateien</span>
</tr>
<tr>
<td>Software Engineering</td>
<td>
<span class="current">Debugging</span>
<span>Planhaftes Vorgehen bei der Softwareentwicklung</span>
<span>Qualitätsaspekte von Quellcode</span>
</tr>
</tbody>
</table>

>>>

## Pingo-Quiz

![large-image](slides/images/pingo-2020-01-14.png)

https://pingo.coactum.de/089521

>>>

## Das Programm für heute

- Qualitätsaspekte in der Programmierung
- Verschiedene Formen von Programmfehlern
- Methoden und Techniken zum Beheben von Programmfehlern

<span class="hint">**Vergessen Sie nicht die Klausuranmeldung in Flexnow vom 1. bis zum 9. Februar**.</span>

>>>

## Ausblick auf die nächsten Wochen

| Datum | Inhalte | Übung |
|-------|---------|-------|
| 21. Januar | Komplexere Datenstrukturen und Preisverleihung zur Weihnachts-Challenge | Übungsblatt |
| 28. Januar | Speicherverwaltung und Dateien | Übungsblatt |
| 04. Februar | Ausblick und Klausurvorbereitung | Klausurfragen |

<span class="hint">Die Klausur findet am 18. Februar statt. Neben den Inhalten der Vorlesung und Übung können Sie sich auch mit den Klausurfragen vergangener Semester vorbereiten. 
Diese finden Sie auf [der Seite der Fachschaft](https://www.uni-regensburg.de/universitaet/fim/klausuren/index.html#oop).</span>

>>>

# Qualitätsaspekte: Formale und Funktionale Korrektheit von Software

>>>

## Was mach "gute" Software aus?

<span class="blocktext">Software muss funktionieren, d.h. sie erfüllt die Erwartungen der NutzerInnen und allen anderen relevanten Personenkreisen (z.B. den EntwicklerInnen, AuftragsgeberInnen, ...). Diese gewünschten Eigenschaften werden Anforderungen genannt. Die zentralen Anforderungen lassen sich aufteilen in:</span>

- Funktionale Anforderungen: *Was soll die Software tuen?*
- Nicht-Funktionale Anforderungen: *Wie soll sich die Software dabei verhalten?*

<span class="blocktext">Daneben gibt es aber noch weitere Aspekte, die zur Qualität von Software beitragen.</span>

>>>

### NutzerInnen-Perspektive: Fehlerfreiheit

<span class="blocktext">Nutzerinnen und Nutzer nehmen die *fertige* Software war, die nach der Entwicklung durch das *Compilieren* erstellt und ausgeliefert wird. NutzerInnen möchten vor allem, dass **die Software**  ...</span>

- ... fehlerfrei die Nutzung der angebotenen Funktionen erlaubt.
- ... einfach und intuitiv bedienbar ist (*Usability* bzw. Gebrauchstauglichkeit).
- ... hinsichtlich der Nutzung eine positive Erfahrung darstellt (*Use Experience*).

<span class="hint">Der Weg vom Quellcode zu den NutzerInnen ist in der Regel weit aus komplexer und geht über das reine Compilieren hinaus. Software muss bereitgestellt, beschafft und eingerichtet werden.</span>

>>>

### ProgrammierInnen-Perspektive: Codequalität (1/3)

<span class="blocktext">Programmiererinnen und Programmierer nehmen die *enstehende* Anwendung vor allem als Sammlung von Quellcodedateien war. Diesbezüglich stellen sie andere Anforderungen an die Software und erwarten unter anderem, dass der **Quellcode** ...</span>

- ... verständlich formuliert ist.
- ... gut lesbar ist.
- ... logisch strukturiert und formuliert ist.
- ... einfach um weitere Funktionen ergänzt werden kann.

>>>

### ProgrammierInnen-Perspektive: Codequalität (2/3)

<span class="blocktext">Qualitativ hochwertiger Quellcode zeichnet sich u.a. dadurch aus, dass die folgenden Aspekte bei der Gestaltung berücksichtigt wurden.</span>

- Guter Quellcode folgt den formalen *Best Practices* der gewählten Programmiersprache und selbstgewählten Auflagen des Entwicklungsteams (z.B. bei der Formatierung oder der Schreibweise von Bezeichnern).
- Guter Quellcode ist verständlich formuliert, in dem z.B. Bezeichner für Variablen oder Methoden treffend die jeweilige Funktion des Elements beschreiben.
- Guter Quellcode ist klar strukturiert. d.h., dass Teilaufgaben in abgeschlossenen Komponenten implementiert werden und z.B. wiederholt verwendeter Code zentral definiert wird (Vgl. *Duplicate Code*).

>>>

### ProgrammierInnen-Perspektive: Codequalität (3/3)

- Guter Quellcode ist erweiterbar und folgt dazu einem (hierarchischen) Aufbau, der die Ergänzung weiterer Komponenten/Klassen ohne großer Änderungen am restlichen Code erlaubt.
- Guter Quellcode ist dokumentiert, d.h. Kommentare und andere Dokumente geben nützliche Informationen zur Verwendung und Bearbeitung.

<span class="hint">In modernen Entwicklungsumgebungen, z.B. auch in IntelliJ IDEA, sind Hilfsfunktionen integriert, die Sie bei der Erstellung qualitativ hochwertigen Codes unterstützen. Dazu gehören u.a. automatische Formatierungshilfen, Fehlerfeedback, *Refactoring*-Werkzeuge oder Kommentarhilfen. Nutzern Sie diese Funktionen, **sobald Ihnen der Sinn hinter den jeweiligen Aktionen bewusst ist!**</span>

>>>

# Programmfehler in JAVA

>>>

## Syntaktisch korrekt, trotzdem verbuggt

![large-image](slides/images/debugging-example-02.png)

<span class="blocktext smaller">Auch formale korrekter, gut formatierte Code kann zu Problemen führen! (Trotzdem ist schlechte Codequalität in der Regel auch immer ein Indikator für funktionale Probleme!)</span>

>>>

### Bugs vs. Syntaxfehler

![left-side](https://upload.wikimedia.org/wikipedia/commons/8/8a/H96566k.jpg)
<span class="image-description">Bei *Bugs* handelt es sich um logische Fehler, die verhindern, das Ihr Programm das gewünschte Verhalten zeigt. Sie sind zu unterscheiden, von syntaktischen Fehlern, die auf falsche Nutzung der Sprachelemente zurück zuführen sind.</span>

Bildquelle: *Der erste Bug. Dokumentiert am 9. September 1945 von von Grace Hopper*, [U.S. Naval Historical Center Online Library Photograph NH 96566-KN](https://www.history.navy.mil/our-collections/photography/numerical-list-of-images/nhhc-series/nh-series/NH-96000/NH-96566-KN.html)

>>>

### Programmkomplexität und Fehlerhäufigkeit

<span class="blocktext">Mit steigender Komplexität der entwickelten Programme steigt auch die *Chance* auf Programmierfehler:</span>

- Mehr Code bietet mehr Raum für Fehler: in der Softwareindustrie wird häufig mit Fehlerraten von 1-5 *Bugs* pro 1000 *Lines of Code* gerechnet.
- Aufwendigere Programme, z.B. interaktive Anwendungen, bieten eine Vielzahl an unterschiedlichen Möglichkeiten für den Programmablauf an.
- Komplexere Software hat mehr mögliche Fehlerquellen (Eingabe, Ausgabe, Verarbeitung, Ablauf, NutzerInnen(!), ...).

<span class="blocktext">Die hier genannten Gründe lassen sich beliebig erweitern. Die Kernaussage ist: **Bugs lassen sich niemals vollständig vermeiden. Wir brauchen Strategien, um damit umzugehen.**</span>

>>>

### Bugs treten zur Laufzeit auf

<span class="blocktext">Durch genaues Lesen des Quellcodes können Bugs auch im Vorfeld identifiziert werden. In der Regel wird man aber erst durch auftretende Fehler oder ein bemerktes Fehlverhalten des Programms auf sie aufmerksam:</span>

<span class="blocktext larger">**Exception, Fehler oder Absturz**: *Das Programm verursacht an einer bestimmten Stelle einen Fehler, der die weitere Ausführung verhindert.*</span>

<span class="blocktext larger">**Funktionales Fehlverhalten**: *Das Programm verhält sich unerwartet.*</span>

>>>

## Exceptions in Java

<span class="blocktext">Bugs stellen unerwartet Fehler im Programmablauf dar. Java kommuniziert bestimmte Formen dieser Probleme über `Exceptions` (engl. *Ausnahme*)</span>

- *Exceptions* werden ausgelöst, wenn der eigentlich vorgesehene Ausdruck oder Befehl zur Laufzeit nicht ausgeführt werden kann.
- Die betroffene stelle *wirft* (*throws*) in diesem Fall eine *Exception*, die innerhalb der Anwendung als Objekt kommuniziert wird.
- Das `Exception`-Objekt und dessen Subklassen beinhalten Informationen zum Fehler und sorgen u.A. für die rote Ausgabe in der IntelliJ-Konsole.

<span class="hint smaller">`Exceptions` beschreiben erwartbare, mögliche Fehlersituationen. Einige davon lassen sich schon zur Laufzeit mit einer gewissen Wahrscheinlichkeit vorhersehen und erfordern eine entsprechende Vorbereitung des Codes. Dazu und zum Entwurf eigener *Exceptions* hören wir im weiteren Verlauf der Vorlesung noch mehr.</span>

>>>

### Einige Exceptions und deren mögliche Ursache

| Exception | Beschreibung | Mögliche Ursache* |
|-----------|--------------|------------------|
|`IndexOutOfBounds` | Zugriff auf eine Element außerhalb des Bereichs der validen Array-Indizes. | Fehler im iterativen  Zugriff auf ein Array. |
|`NullPointer` | Zugriff auf eine Variable, die kein Objekt beinhaltet. | Fehlende Initialisierung eines Objekts |
|`Stackoverflow` | Überlauf des Speicherbereichs, der temporärer Parameter und lokale Inhalte von Methoden verwaltet. | Endlosschleife mit Methodenaufrufen | 
|`ClassCast` | Versuch, ein Objekt als Instanz einer inkompatiblen Klassen zu betrachten. | Inkompatible Klassen, z.B. falsche Elternklasse |
|`FileNotFound` | Versuch, auf eine nicht existierende Datei zuzugreifen. | Schreibfehler im Dateiname |

<span class="hint smaller">* Die genannten Probleme sind mögliche Ursachen für die vorgestellten *Exceptions*. Für jeden der Fehler gibt es aber noch viele andere Gründe ...</span>

>>>

### Beispiele für Fehlverhalten in Programmen

| Fehlverhalten | Mögliche Ursache |
|---------------|------------------|
| **Elemente werden nicht gezeichnet** | Die `draw`-Methode wurde nicht aufgerufen. |
| **Die Position von einem graphischen Objekt stimmt nicht** | Im Konstruktor wurden falsche Werte verwendet oder berechnet. |
| **Das Ergebnis einer mathematischen Berechnung ist "falsch".** | Durch die gewählten Datentypen z.B. `int` entstehen "Rundungsfehler". |

>>>

# Debuggen: Systematische Identifikation und Behebung von Fehlern

>>>

## Debuggen

<blockquote class="smaller">Debugging is the process of finding and resolving defects or problems within a computer program that prevent correct operation of computer software or a system. Debugging tactics can involve interactive debugging, control flow analysis, unit testing, integration testing, log file analysis, monitoring at the application or system level, memory dumps, and profiling. </blockquote>
<p>https://en.wikipedia.org/wiki/Debugging</p>

>>>

### Warum überhaupt Debuggen?

<span class="blocktext">Als ProgrammierInnen müssen Sie lauffähige, benutzbare Software entwickeln (Bugs verhindern die intendierte Nutzung Ihrer Programme). Die Motivation dafür kann unterschiedlich sein:</span>

- Kommerzieller Profit
- Gute Noten in der Ausbildung
- Validität, z.b. bei Software für wissenschaftliche Experimente
- Verantwortung, z.B. bei Sicherheitssystemen oder Medizinprodukten
- Intrinsisches Bedürfnisse, *gute* Software zu schreiben

<span class="hint">**Je später ein Fehler entdeckt wird, desto teurer (aufwendiger) ist es, Ihn zu beheben.** Mit jedem Bug wird es schwieriger, den restlichen Teil des Codes zu reparieren. Beheben Sie einen Bug direkt dann, wenn Sie ihn bemerken.</span>

>>>

### Fehler finden

- Meist machen Sie (und alle anderen ProgrammiererInnen) kleine Fehler, die Sie häufig ohne größere Probleme selbst lösen können bzw. könnten.
- Schwieriger als die eigentliche Lösung des Fehlers ist das Finden der entsprechenden Stelle im Code.
- Wir werfen heute einen Blick auf unterschiedliche Strategien zum Finden von Fehlern an: **Analyse von Exceptions und dem StackTrace**, **Printlining** und den **in IntelliJ eingebauten Debugger**.

>>>

### Allgemeine Strategien (1/2)

<span class="blocktext">Denken Sie daran, dass Bugs in der Regel sehr einfachen Ursachen haben: ein falsch platziertes Semikolon, die Verwendung der falschen Variable, ein vergessener Methodenaufruf, ...</span>

``` java
if(j > k); 
// Durch das Semikolon am Ende der if-Bedingung gehört der nachfolgende Block nicht mehr
// zur Programmflussteuerung und wird IMMER ausgeführt.
{
	System.out.println("j ist größer als k");
}
```

``` java
Rectangle rect;

public void init() {
	// initRect();
}
private void initRect() {
	rect = new Rect(0,0,100,100,Colors.RED);
}
public void draw() {
	rect.draw(); // NullPointerException weil rect nicht initialisiert wurde!
}
```

>>>

### Allgemeine Strategien (2/2)

- Gehen Sie systematisch beim Identifizieren des Fehlers vor: Ein Bug wird immer durch dieselbe(n) Stelle(n) im Code verursacht. 
- Beheben Sie unterschiedliche Bugs nacheinander.
- Ändern Sie stets nur eine Stelle Ihres Codes und testen Sie die Änderungen.
- Seien Sie kritisch gegenüber dem eigenen Code.

**Bugs zu finden ist oft schwierig, aber nie unmöglich: Keine Panik! Keine Frust!**

>>>

## Der Idealfall: Die Exception mit StackTrace

```
java.lang.NullPointerException
	at SnowballFight.setScene(SnowballFight.java:34)
	at SnowballFight.initialize(SnowballFight.java:23)
	at de.ur.mi.oop.launcher.GraphicsAppLauncher.launch(GraphicsAppLauncher.java:30)
	at de.ur.mi.oop.launcher.GraphicsAppLauncher.launch(GraphicsAppLauncher.java:18)
	at GameLauncher.main(GameLauncher.java:6)
``` 

<span class="blocktext">Der StackTrace zeigt die Hierarchie der Methodenaufrufe an, die zum Fehler geführt haben. Die Ausgabe ist von unten nach oben zu lesen. Wenn Sie ganz oben einen Verweis in Ihren eigenen Code finden, haben Sie Glück und können die entsprechende Stelle untersuchen/fixen.</span>

>>>

## Printlining (1/2)

- Die meisten Programmiersprachen erlauben es Ihnen, Ausgaben auf der Standardausgabe des Systems zu erzeugen.
- Meist landen diese Ausgaben in einer Textkonsole, sind also bei graphischen Anwendungen nicht sichtbar.
- IntelliJ verfügt über eine eigene Konsole, in der die Ausgaben zur Laufzeit angezeigt werden.
- In Java kann zu jedem Zeitpunkt mit der Methode `System.out.println` eine Ausgabe erzeugt werden. Dazu wird der Methode ein `String`-Objekt als Parameter übergeben.

>>>

## Printlinig (2/2)

<span class="blocktext">*Printlining* bezeichnet das systematische Einbauen von Konsolenausgaben in den Quellcode um den Programmablauf und Zwischenstände zu prüfen bzw. nachzuvollziehen. Mit Hilfe des *Printlining* können Sie u.a. die folgenden Fragen beantworten:</span>

- In welcher Reihenfolge werden Methoden tatsächlich aufgerufen?
- Welchen Wert hat eine Variable zu einem bestimmten Zeitpunkt?
- Wird eine bestimmte Stelle des Quellcodes überhaupt ausgeführt?

>>>

### Printlining: Programmablauf kontrollieren

``` java
public void doStuff() {
	println("in: doStuff()");
	doMoreStuff();
	println("finished: doStuff()");
}

private void doMoreStuff() {
	println("in: doMoreStuff");
}
```

<span class="hint">Nutzen Sie sinnvolle Ausgaben, z.B. den Methodennamen. Erleichtern Sie durch zusätzliche Informationen die Interpretation der ausgegebene Inhalte. Die Ausgabe der Strings `Test` oder `dasdas dsadasd` ist nicht sinnvoll!</span>

>>>

### Printlining: Werte kontrollieren

``` java
@Override
public String toString() {
		return "Circle [color=" + getColor() + "]";
}

Circle circle = new Circle(this, 50, 50, 50, BLACK);
println(circle);

// Ausgabe:
// Circle [getColor()=de.ur.mi.graphics.Color[r=0,g=0,b=0]]
```

>>>

### Eine einfache Log-Klasse (1/2)

<span class="blocktext">*Printlining* oder *Logging* funktioniert am besten, wenn die folgenden Punkte beachtet werden:</span>

- Ausgaben sollten nur dann erzeugt werden, wenn sie auch benötigt werden, z.B. nicht im fertigen Produkt!
- Neben dem Inhalt sollten immer auch zusätzliche Informationen wie z.B. Zeitpunkt oder Kontext ausgegeben werden.

<span class="hint">Auch in kleineren Projekten bietet sich die Entwicklung oder Nutzung einer separaten `Logger`-Klasse an, die die *Printlining*-Aufgabe übernimmt.</span>

>>>

### Eine einfache Log-Klasse (2/2)

``` java
public class Logger {
    private static boolean isEnabled = false;

    public static void enable() {
        isEnabled = true;
    }
    public static void disable() {
        isEnabled = false;
    }
    public static void log(String msg, Object context) {
        if(!isEnabled) { return; }
        Date now = new Date();
        StringBuilder builder = new StringBuilder();
        Date now = new Date();
        builder.append(":\t");
        builder.append(msg);
        builder.append(" from: ");
        builder.append(context.getClass());
        System.out.println(builder.toString());
    }
}

```

>>>

### Verwendung der Log-Klasse

**Einschalten und Loggen**


``` java
public class App extends GraphicsApp {

	public void initialize() {
        Logger.enable();
        Logger.log("in: initialize", this);
    }

}
```

**Ausgabe**

```
Tue Jan 14 13:37:00 CET 2020:	in: initialize from: class App
```

>>>

## Schrittweiser Ablauf von Programmen (1/2)

<span class="blocktext">Im Zweifel finden Sie einen Fehler nur dann, wenn Sie den Programmablauf Schritt für Schritt durchgehen.</span>

<span class="blocktext">Solange wir nicht nebenläufig programmieren, werden alle Anweisungen in unseren Programmen sequenziell ausgeführt. D.h. es gibt eine klare Abfolge an Befehlen und irgendwo in dieser Kette versteckt sich der Fehler.</span>

>>>

## Schrittweiser Ablauf von Programmen (1/2)

``` java
public void doStuff() {
	doMoreStuff();
}
	
public void doMoreStuff() {
	doEvenMoreStuff();
	doEvenMoreStuff();
}
	
public void doEvenMoreStuff() {
	// 
}
```

<span class="blocktext smaller">Beim Methodenaufruf gilt: Eine Anweisung wird komplett abgearbeitet, bevor mit der nächsten Anweisung (oder dem nächsten Methodenaufruf) begonnen wird. **Diese schrittweise Verarbeitung geschieht in der Regel sehr schnell, kann durch den Debugger aber in Einzelschritten nachvollzogen werden.**</span>

>>>

### Debugger

<blockquote>Ein Debugger (von engl. de- (Präfix; dt. ent-, aus-) im Sinne von entfernen und engl. bug im Sinne von Programmfehler) ist ein Werkzeug zum Diagnostizieren und Auffinden von Fehlern in Computersystemen, dabei vor allem in Programmen, aber auch in der für die Ausführung benötigten Hardware. Debugging bezeichnet die Tätigkeit, solche Fehler zu diagnostizieren und aufzufinden, sei es unter Verwendung eines Debuggers oder anderer Methoden.</blockquote>
<p>https://de.wikipedia.org/wiki/Debugger</p>

>>>

### Der Debugger in IntelliJ

- IntelliJ beinhaltet einen Debugger, der die schrittweise (kontrollierte) Ausführung eines Programms erlaubt.
- Sie können den Programmablauf damit selbst steuern, also von Anweisung zu Anweisung springen.
- Für jeden Schritt können Sie mit diesem Tool den aktuellen Zustand der Anwendung (Variablen und deren Werte) einsehen.

>>>

### Verwendung des Debuggers (1/2)

1. Die Anwendung muss explizit über den Debugger gestartet werden (Kontextmenü oder Symbol rechts oben).
2. Um in die eigentliche Debugger-Ansicht zu wechseln, muss die Anwendung pausiert werden.
3. Alternativ können im Code *Breakpoints* gesetzt werden, an denen der Debugger die Ausführung automatisch pausiert.
4. Im pausierten Zustand kann der Debugger über die entsprechenden UI-Elemente gesteuert werden.

>>>

### Verwendung des Debuggers (2/2)

![large-image](slides/images/debugging-example-05.png)

>>>

## Übersicht: Fehler identifizieren

![large-image](slides/images/debugging-flow-chart.png)

>>>

## Zusammenfassung

- Softwarequalität zeigt sich in unterschiedlichen Bereichen, die funktionale Vollständigkeit ist nur ein Teil von guten Programmen.
- Hohe Codequalität ist ein wichtiger Faktor der Softwarequalität und wirkt sich in der Regel auch positiv auf die Fehlerrate aus.
- *Bugs* lassen sich nicht vollständig vermeiden: Wir benötigen Strategien zum Identifizieren und Beheben dieser Probleme.
- *Printlining* und der *Debugger* sind zwei Strategien zum systematischen Beheben von Programmfehlern.
- Moderne Entwicklungsumgebungen unterstützen sich beim Beheben von Fehlern und beim Steigern der Codequalität.

>>>

# Jetzt: Live-Test des Debuggers

>>>

### Vielen Dank für Ihre Aufmerksamkeit.

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>