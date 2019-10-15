# Einführung in die Programmierung mit Java (OOP)

<span class="subtitle">Kursaufbau, Grundlagen & erste Schritte mit Bouncer</span>

<span class="blocktext">Struktur und Inhalt des Kurses wurden 2012 von Markus Heckner entwickelt. Im Anschluss haben Alexander Bazo und Christian Wolff Änderungen am Material vorgenommen. Die aktuellen Folien wurden von Alexander Bazo erstellt und können unter der [MIT-Lizenz](https://raw.githubusercontent.com/OOP-Regensburg/OOP-Folien/master/LICENSE) verwendet werden.</span>

>>>

## Aktueller Semesterfortschritt

<span class="blocktext">Wir befinden uns in der ersten Kurswoche. Der Kurs setzt keine besonderen Kenntnisse voraus. Solange Sie einigermaßen vertraut mit der grundlegenden Bedienung eines PCs sind, können Sie ohne Probleme starten.</span>

<hr />

Wir **starten heute bei Null**. Vorwissen auf dem Gebiet der Programmierung kann vom Vorteil sein, ist aber keine Voraussetzung für das erfolgreiche Bestehen des Kurses.

>>>

## Das Programm für heute

- Allgemeine Informationen zum Kurs und zum Team
- Einführung in die Programmierung
- Erste Schritte mit Bouncer
- Hinweise zu den Übungsaufgaben

>>>

# Allgemeine Informationen

>>>

## Das Modul PI-BA-M01 (1/2)

> In diesem Modul werden Kernkonzepte der praktischen Informatik vermittelt. Dabei handelt es sich um eine Einführung in die Programmierung und Programmiersprachen, die neben einem Überblick zu unterschiedlichen Programmierkonzepten eine Einführung in die objektorientierte Programmierung als derzeit vorherrschendem Entwicklungsparadigma bietet.

[Modulbeschreibung BA Medieninformatik](http://www.uni-regensburg.de/studium/modulbeschreibungen/medien/ba/medieninformatik-ba-ws1718.pdf)

>>>

## Das Modul PI-BA-M01 (2/2)

> Nach Abschluss des Moduls kennen Studierende grundlegende Konzepte der objektorientierten Programmierung (beispielsweise Syntax, essentielle Programmkonstrukte, Vererbung, Komposition) und können vorgegebene Problemstellungen analysieren, algorithmische Lösungen dafür entwickeln und diese in einer Programmiersprache implementieren.

[Modulbeschreibung BA Medieninformatik](http://www.uni-regensburg.de/studium/modulbeschreibungen/medien/ba/medieninformatik-ba-ws1718.pdf)

>>>

## Die Kursinhalte

- Sie **lernen** die Grundlagen der objektorientierten Programmierung am Beispiel einfacher, interaktiver Anwendungen kennen
- Sie entwickeln die **Kompetenz**, zur selbständig Lösung einfache Programmierproblem
- Sie eignen sich grundlegende Regeln und Empfehlungen zur Gestaltung und Formatierung von Quellcode an

**Dazu verwenden wir die Programmiersprache Java**

>>>

## OOP und das Studium der Medieninformatik

<span class="blocktext">Die Medieninformatik ist eine angewandte Informatik. Die Entwicklung von Software ist elementare Teil und wichtige Grundlage der Auseinandersetzung mit den Untersuchungsgegenständen des Fachs.</span>

- In weiterführenden Kursen des Studiums werden Sie die hier gewonnen Fähigkeiten ausbauen **und anwenden**
- Die Entwicklung von Softwareartefakten ist häufiges Ziel der praktisch ausgerichteten Seminare und Übungen
- Für (eigener) Forschungsvorhaben entwickeln und untersuchen Medieninformatiker und -Informatikerin Softwaresysteme 

>>>

## Das OOP-Team


![user-image](slides/images/team-alexander-bazo.png)
![user-image](slides/images/team-florin-schwappach.png)
![user-image](slides/images/team-erik-blank.png)
![user-image](slides/images/team-tim-eichinger.png)
![user-image](slides/images/team-martina-emmert.png)
![user-image](slides/images/team-lukas-jackermeier.png)
![user-image](slides/images/team-fabian-schebera.png)

<span class="blocktext">Alexander Bazo (**Vorlesung**), Florin Schwappach (**Übung**), Erik Blank (Tutor), Tim Eichinger (Tutor), Martina Emmert (Tutorin), Lukas Jackermeier (Tutor), Fabian Schebera (Tutor)</span>

>>>

## Ihre Woche mit uns

|     | Montag | Dienstag | Mittwoch | Donnerstag | Freitag |
|-----|:------:|:--------:|:--------:|:----------:|:-------:|
|08-10|        |          |          |            |         |
|10-12| Übung  |		  | Übung    | Übung      |         |
|12-14| Übung (2x) | Vorlesung | Übung | Übung (2x) |         |
|14-16|        | Zentralübung |      |            |         |
|16-18|        |		  | Übung    |            |         |
|18-20|        |		  | Übung    |            |         |

<span class="blocktext">Die Inhalte von Vorlesung und Zentralübung werden in den Übungen ab Mittwoch aufgegriffen. Die Übungen am Montag behandeln Themen aus der vorherigen Woche.</span>

>>>

## Vorlesung: Theorie

- Theoretische Einführung in die verschiedenen Kursthemen
- Vorstellung der zentralen Elemente prozeduraler und objektorientierte Programmierung 
- Überblick über Syntax und Besonderheiten der eingesetzten Programmiersprache *Java*
- Methoden und *Best Practices* in der Softwareentwicklung

In der Vorlesung wird **Wissen vermittelt**.

>>>

## Zentralübung: Demonstration

- Praktische Demonstration der in Vorlesung vorgestellten Themen
- Kommentiertes Entwickeln passender Programmbeispiele
- Diskussion der angewandten Lösungsstrategien

In der Zentralübung wird die **Anwendung des Wissens demonstriert**.

>>>

## Übungen: Anwendung

- Selbstständige Arbeit an Programmieraufgaben
- Sammlung mehrerer Übungsaufgaben zum aktuellen Themenbereich 
- Aufgabenbeschreibung und Grundgerüst (*Code*) für jede Aufgabe
- Individuelle Unterstützung durch die TutorInnen
- Kommentierte Lösungsvorschläge werden in der darauffolgenden Woche veröffentlicht

In der Übung setzten Sie das Gehörte **praktisch um**.

>>>

## Studienleistung (1/2)

- Drei komplexerer Programmieraufgaben im Laufe des Semesters: Zwei von drei Aufgaben müssen für den Abschuss des Moduls bestanden werden
- Selbstständige Erarbeitung einer funktional und qualitativ ausreichenden Lösung
- Individuelle Bewertung (*bestanden*/*nicht bestanden*) und Feedback
- Für die Studienleistungen ist eine zusätzliche Anmeldung im Prüfungssystem *Flexnow* notwendig

>>>

## Studienleistung (2/2)

- Bei den Studienleistungen ist **keine** Zusammenarbeit mit Kommilitonen erlaubt
- Verwendete Quellen müssen angegeben werden
- Alle Abgaben werden maschinell und manuell auf Übereinstimmungen geprüft
- Plagiate in den Studienleistungen führen für alle Beteiligten automatisch zum *nicht bestehen* des Kurses

<span class="blocktext">Durch die Studienleistung weisen Sie nach, dass Sie Lernziele erreicht haben und die erworbenen Kompetenzen selbstständig anwenden können. Weitere Informationen finden Sie im GRIPS-Kurs.</span>

>>>

## Klausur

- *Klassische* Klausur am 18. Februar 
- Für die Klausur ist eine zusätzliche Anmeldung im Prüfungssystem *Flexnow* notwendig
- Die Klausurnote bildet zu 100% die Abschlussnote für das Modul *PI-BA-M01*

>>>

## Arbeitsmaterialien

<span class="text-box">Alle Materialien zum Kurs finden Sie im [GRIPS-Kurs](https://elearning.uni-regensburg.de/course/view.php?id=39457)</span>

- Links zu Zusammenfassungen, Foliensätze und Übungsblätter
- Informationen, Dokumentationen und Lesetexte
- Forum für Ankündigungen und Fragen
- Material und *Upload*-Möglichkeit für Studienleistungen
- Lesetexte und Vorlesungsaufzeichnungen

>>>

### Eric Roberts: The Art & Science of Java

- Inhaltliche Grundlage für einige der Vorlesungsthemen
- Passende Textauszüge sind im GRIPS-Kurs den einzelnen Sitzungen zugeordnet (aus 1. Auflage von 2014)
- Das vollständige Buch kann aus der [Universitäts Bibliothek](https://www.regensburger-katalog.de/TouchPoint/perma.do?q=+1035%3D%22BV041452362%22+IN+%5B2%5D&v=ubr&l=de) entliehen werden (auch die aktualisierte Auflage)
- Versuchen Sie, die vorgeschlagenen Kapitel nach der Vorlesung selbstständig durchzuarbeiten

>>>

### Ihr Arbeitspensum in diesem Semester

6LP: 180 Stunden Arbeitsaufwand

<div class="board">
	<span class="box lecture"></span><span class="box lecture"></span><span class="box lecture"></span>
	<span class="box lecture"></span><span class="box lecture"></span><span class="box lecture"></span>
	<span class="box lecture"></span><span class="box lecture"></span><span class="box lecture"></span>
	<span class="box lecture"></span><span class="box lecture"></span><span class="box lecture"></span>
	<span class="box lecture"></span><span class="box lecture"></span><span class="box lecture"></span>
	<span class="box lecture"></span><span class="box lecture"></span><span class="box lecture"></span>
	<span class="box lecture"></span><span class="box lecture"></span><span class="box lecture"></span>
	<span class="box tutorial"></span><span class="box tutorial"></span><span class="box tutorial"></span>
	<span class="box tutorial"></span><span class="box tutorial"></span><span class="box tutorial"></span>
	<span class="box tutorial"></span><span class="box tutorial"></span><span class="box tutorial"></span>
	<span class="box tutorial"></span><span class="box tutorial"></span><span class="box tutorial"></span>
	<span class="box tutorial"></span><span class="box tutorial"></span><span class="box tutorial"></span>
	<span class="box tutorial"></span><span class="box tutorial"></span><span class="box tutorial"></span>
	<span class="box tutorial"></span><span class="box tutorial"></span><span class="box tutorial"></span>
	<span class="box lab"></span><span class="box lab"></span><span class="box lab"></span>
	<span class="box lab"></span><span class="box lab"></span><span class="box lab"></span>
	<span class="box lab"></span><span class="box lab"></span><span class="box lab"></span>
	<span class="box lab"></span><span class="box lab"></span><span class="box lab"></span>
	<span class="box lab"></span><span class="box lab"></span><span class="box lab"></span>
	<span class="box lab"></span><span class="box lab"></span><span class="box lab"></span>
	<span class="box lab"></span><span class="box lab"></span><span class="box lab"></span>
	<span class="box exam"></span><span class="box exam"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study"></span><span class="box study"></span><span class="box study"></span>
	<span class="box study">
</div>

<span class="label lecture">Vorlesung</span>
<span class="label tutorial">Zentralübung</span>
<span class="label lab">Übung</span>
<span class="label exam">Klausur</span>
<span class="label study">Selbststudium</span>

>>>

## Feedback und Unterstützung

<span class="blocktext">Bei inhaltlichen Problemen finden Sie Unterstützung in den Übungen oder dem Forum. Sie können sich auch direkt an uns wenden, in dem Sie an die Mailinglist **mi.oop@mailman.uni-regensburg.de** schreiben.</span>

![screenshot](slides/images/screenshot_email.png)

>>>

## Eine kurze Liste mit Forderungen

- Besuchen Sie Vorlesung und Übung (und wenn möglich auch die Zentralübung)!
- Arbeiten Sie selbstständig Beispiele, Materialien und Aufgaben durch!
- Lösen Sie die Studienleistungen selbst!
- Lenken Sie in Vorlesung und Übung weder sich selbst noch andere ab!
- Geben Sie bei allen eingereichten Arbeiten die verwendeten Quellen an!

>>>

## Semesterüberblick

<span class="subtitle">Woche 1: Organisation & Einführung und das erste Programm</span>

<div class="lecture-plan">
	<span class="current">Einführung</span>
	<span>Ein- und Ausgabe</span>
	<span>Klassen und Methoden</span>
	<span>Kontrollstrukturen und Variablen</span>
	<span>Arrays und komplexe Schleife</span>
	<span>Grundlagen der Klassenmodellierung</span>
	<span>Vererbung und Sichtbarkeit</span>
	<span>Event-basierten Programmierung</span>
	<span>String- und Textverarbeitung</span>
	<span>Planhaftes Vorgehen bei der Softwareentwicklung</span>
	<span>Listen, Maps und die Collections</span>
	<span>Qualitätsaspekte von Quellcode</span>
	<span>Speicherverwaltung</span>
	<span>Umgang mit Dateien</span>
</div>

>>>

# Einführung in die Programmierung

>>>

## Informatik und Programmieren

> “What would we like our children - the general public of the future - to learn about computer science in schools? We need to do away with the myth that computer science is about computers. Computer science is no more about computers than astronomy is about telescopes, biology is about microscopes or chemistry is about beakers and test tubes. Science is not about tools, it is about how we use them and what we find out when we do.“

Micheal R. Fellows, Ian Parberry: [SIGACT trying to get children excited about CS](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&ved=2ahUKEwjChaOlvZflAhVF6aQKHdiZAWIQFjABegQIARAC&url=http%3A%2F%2Farchive.cra.org%2FCRN%2Fissues%2F9301.pdf&usg=AOvVaw2Q2C-VUJRNkeSDX_-4XrOt) (1993)

>>>

## Computer Programming

> ”Computer programming [...] is a process that leads from an original formulation of a computing problem to executable computer programs. Programming involves activities such as analysis, developing understanding [...] and implementation [...] of algorithms in a target programming language.“

[*Computer programming* (Wikipedia)](http://en.wikipedia.org/wiki/Computer_programming)

>>>

## Programmieren als Mittel der Kommunikation mit dem Computer

- Beim Programmieren entwickeln wir eine Lösung für ein gegebene Problem und übersetzten diese Lösung in eine Sprache, die der Computer versteht
- Grundsätzlich gilt: Programmierer und Programmiererinnen entwerfen Lösungsstrategien, Computer führen diese aus
- Als Medium oder Bindeglied zwischen unserer Art zu denken und den mechanischen und elektronischen Abläufen im Computer dienen Programmiersprachen
- Programmiersprachen können von uns *gesprochen* und vom Computer interpretiert werden

>>>

![large-image](slides/images/history-of-programming-languages.png)

<span class="blocktext">Es gibt zahlreiche Programmiersprachen für die selben oder unterschiedliche Problemfelder: In diesem Kurs lernen Sie **Java**. Die grundlegenden Prinzipien lassen sich aber auch auf andere Sprachen übertragen!</span>

>>>

## Ein Beispiel

<span class="blocktext">Beim Programmieren müssen wir in der Regel ein größeres Problem in kleinere, berechenbare und sequenziell lösbare Teilprobleme unterteilen, um den gewollten Zustand oder Effekt zu erreichen.</span>

*Wir wollen wissen, aus welchen fünf Städten oder Orten die meisten der Kursteilnehmenden stammen.*

- Wie können wir diese Frage beantworten?
- Welche Einzelschritte müssen wir erledigen?
- Welche Teilergebnisse erwarten wir?
- Wie erzeugen wir das gewünschte Ergebnis?

>>>

# Bouncer

Der einfacher Einstieg in die Programmierung und die Programmiersprache Java

>>>

## Bouncers Welt

![left-side](slides/images/bouncer-overview.png)
<span class="image-description">Bouncers Welt besteht aus 225 Feldern in einem 15 x 15 Einheiten großen Koordinatensystem. Blockierte Felder sind schwarz gekennzeichnet und können von Bouncer nicht betreten werden. Die übrigen Feldern können können farblich markiert sein und Bouncer kann sich frei auf diesen bewegen. Bouncer kann sich um seine eigene Achse drehen und mit jedem Schritt ein Feld weit in die aktuelle Blickrichtung gehen.</span>

>>>

## Bouncer-Programme schreiben

<span class="blocktext larger">Ein Bouncer-Programm besteht aus einer beliebigen Anzahl an **Befehlen**. Nach dem Start des Programms führt Bouncer diese Befehle nacheinander in der Reihenfolge aus, in der sie notiert wurden. DIe Abfolge wird an einer bestimmten Stelle einer **Datei** notiert. Der gesamte Inhalt dieser Datei bildet den **Quellcode** des Programms. Zum Editieren der Datei und zum Ausführen des Programms wird ein besonderes Computerprogramm, die **Entwicklungsumgebung** verwendet.</span>

>>>

### Einige der Befehle, die Bouncer versteht

| Befehl                 | Beschreibung                                                            |
|------------------------|-------------------------------------------------------------------------|
| `bouncer.move()`       | Bouncer bewegt sicht einen Schritt weiter in die aktuelle Blickrichtung |
| `bouncer.turnLeft()`   | Bouncer dreht sich um 90° nach links                                    |
| `bouncer.paintField(FieldColor.RED oder FieldColor.GREEN oder FieldColor.BLUE)` | Bouncer färbt das Feld auf dem er steht farblich ein |

<span class="blocktext">Die **Syntax** aller Befehle besteht aus dem Präfix `bouncer`, dem verbindenden Element `.` (*Punktoperator*) und dem eigentlichen Namen des Befehls, gefolgt von zwei Klammern `()`. Innerhalb des Programms werden einzelne Befehle durch das Zeichen `,` separiert.</span>

>>>

## Das erste Programm

![screenshot](slides/images/bouncer-first-programm.png)

Bouncers Aufgabe: Auf das Hindernisse klettern und auf dem roten Feld stehen bleiben.

>>>

### Der Code unseres ersten Programms

``` java
import de.ur.mi.bouncer.apps.BouncerApp;

public class BouncerDemo extends BouncerApp {
    @Override
    public void bounce() {
        loadMap("HelloBouncer");
        bouncer.move();
        bouncer.turnLeft();
        bouncer.move();
        bouncer.turnLeft();
        bouncer.turnLeft();
        bouncer.turnLeft();
        bouncer.move();
        bouncer.move();
    }
}
``` 

Das Programm besteht aus mehreren verschachtelten Blöcken, die durch die Zeichen `{` und `}` gegliedert werden.

>>>

### Das Programm im Überblick: Import

Hier werden im Hintergrund die Inhalte importiert, die uns die Verwendung der *Bouncer*-Befehle erlauben.

``` java
import de.ur.mi.bouncer.apps.BouncerApp;
```

>>>

### Das Programm im Überblick: Klassendefinition

**Klassen** bilden die zentrale Struktureinheit von Programmen in Java. Jedes Programm besteht aus mindestens einer Klasse.

``` java
public class BouncerDemo extends BouncerApp {
```

>>>

### Das Programm im Überblick: Methode 

Innerhalb einer Klasse können mehrere **Methoden** existieren. Methoden bündeln mehrere **Befehle** und können über ihren **Namen** gestartet werden. Die Methode mit dem Namen `bounce` wird automatisch beim Ausführen des Programms gestartet.

``` java
public void bounce() {
    loadMap("HelloBouncer");
    bouncer.move();
    bouncer.turnLeft();
    bouncer.move();
    bouncer.turnLeft();
    bouncer.turnLeft();
    bouncer.turnLeft();
    bouncer.move();
    bouncer.move();
}
```

>>>

### Die Methode im Überblick: Methodenkopf

Eine Methode beginnt mit dem **Methodenkopf** in der ersten Zeile. Hier wird unter anderem der **Name** der Methode definiert.

``` java
public void bounce() {
```

>>>

### Die Methode im Überblick: Methodenrumpf

<span class="blocktext">Die Liste der Befehle bildet den **Rumpf** der Methode. Beim Aufruf der Methode werden alle Befehle in der angegebenen Reihenfolge ausgeführt. Mit dem ersten Befehl `loadMap` bestimmten Sie, welche Karte vor dem Ausführen der nächsten Befehle geladen werden soll. Der Name der Karte wird zwischen den Anführungszeichen angegeben. Unterschiedliche Karten beinhalten unterschiedlichen Hindernisse, eingefärbte Felder und Startpositionen für Bouncer.</span>

``` java
loadMap("FirstRoom");
bouncer.move();
bouncer.turnLeft();
bouncer.move();
bouncer.turnLeft();
bouncer.turnLeft();
bouncer.turnLeft();
bouncer.move();
bouncer.move();
```

>>>

### Methoden als Strukturelement eines Programms

``` java
public void bounce() {
    loadMap("HelloBouncer");
    moveForward();
    climbObstacle();
    moveForward();
}
public void moveForward() {
	bouncer.move();
}
public void climbObstacle() {
    bouncer.turnLeft();
    bouncer.move();
    bouncer.turnLeft();
    bouncer.turnLeft();
    bouncer.turnLeft();
    bouncer.move();
}
``` 

>>>

## Einzelne Befehle wiederholen

Um Bouncer einen oder mehrere Befehl für eine bestimmte Anzahl an Durchläufen wiederholen zu lassen, verwenden wir die **for-Schleife**:

``` java
for(int i=0; i < N; i++) {	
	// Alle Anweisungen (Befehle) in diesem Klammerpaar werden N-mal wiederholt
}
```

<span class="blocktext">Im **Schleifenkopf** (vgl. *Methodenkopf*) definieren Sie die Anzahl der Durchläufe. Der Wert `i` wird schrittweise vom Ausgangswert `0` bis zum von Ihnen angegebenen Wert `N` **inkrementiert**. In jedem Schritt werden der oder die Befehle innerhalb des Klammerpaars nacheinander ausgeführt.</span>

>>>

## Entscheidungen treffen

Bouncer kann einzelne oder mehrere Befehle in Abhängigkeit bestimmter Zustände (**Bedingungen**) ausführen:

``` java
if(BEDINGUNG) {
	// Alle Anweisungen in diesem Klammerpaar werden ausgeführt, falls die Bedingung zutrifft
}

if(BEDINGUNG) {
	// Alle Anweisungen in diesem Klammerpaar werden ausgeführt, falls die Bedingung zutrifft
} else {
	// Alle Anweisungen in diesem Klammerpaar werden ausgeführt, falls die Bedingung NICHT zutrifft
}
```

<span class="blocktext">Mit Hilfe unterschiedlicher Bedingungsprüfung können Sie Informationen über die Umgebung erfragen, in der sich Bouncer befindet. So können Sie Bouncer auf unterschiedliche Situationen **reagieren** lassen.</span>

>>>

### Bedingungen, die Bouncer prüfen kann (1/2)

| Befehl | Beschreibung |
|--------|--------------|
| canMoveForward() | Prüft ob das Feld vor Bouncer frei ist |
| canNotMoveForward() | Prüft ob das Feld vor Bouncer blockiert ist |
| canMoveLeft() | Prüft ob das Feld links neben Bouncer frei ist |
| canNotMoveLeft() | Prüft ob das Feld links neben Bouncer blockiert ist |
| canMoveRight() | Prüft ob das Feld rechts neben Bouncer frei ist |
| canNotMoveRight() | Prüft ob das Feld rechts neben Bouncer blockiert ist |

>>>

### Bedingungen, die Bouncer prüfen kann (2/2)

| Befehl | Beschreibung |
|--------|--------------|
| isOnFieldWithColor(RED) | Prüft ob das Feld, auf dem Bouncer aktuell steht, rot ist |
| isOnFieldWithColor(GREEN) | Prüft ob das Feld, auf dem Bouncer aktuell steht, grün ist |
| isOnFieldWithColor(BLUE) | Prüft ob das Feld, auf dem Bouncer aktuell steht, blau ist |

<span class="blocktext">Die Bedingungen geben einen Wahrheitswert an Bouncer zurück - Wenn die abgefragte Bedingung zu trifft, ist sie WAHR (`True`), ansonsten FALSCH (`False`). Alle Bedingungen, die sich auf Bouncers Umgebung beziehen, werden immer von seiner aktuellen Blickrichtung ausgehend überprüft.

>>>

## Befehle bedingt wiederholen

<span class="text">Mit der **while-Schleife** lassen wir Bouncer einen oder mehrere Befehle wiederholen, solange eine Bedingung zutrifft:</span>

``` java
while(BEDINGUNG) {
// Alle Anweisungen in diesem Klammerpaar werden ausgeführt, solange die Bedingung zutrifft
}
```

<span class="blocktext">Solange die Bedingung zutrifft, werden die Anweisungen zwischen den Klammern durchgeführt. Dabei wird zuerst geprüft, ob die Bedingung zutrifft. Wenn dies der Fall ist, werden die Anweisungen in den Klammern **EINMAL** ausgeführt. Anschließend wird die Bedingung erneut geprüft. Trifft sie immer noch zu, werden die Anweisungen ein zweites Mal ausgeführt – dies geschieht solange, bis die Bedingung nicht mehr zutrifft.</span>

>>>

# Algorithmen

>>>

## Eine Defintion des Begriffs Algorithmus

> „Starting from an initial state and initial input [...], the instructions describe a computation that, when executed, proceeds through a finite number of well-defined successive states, eventually producing "output“ and terminating at a final ending state.“

[*Algorithm* (Wikipedia)](http://en.wikipedia.org/wiki/Algorithm)

>>>

## Algorithmen mit Bouncer

Ein Algorithmus überführt einen gegebenen Anfangszustand in einen definierten Endzustand und definiert dazu eine Reihe von Befehlen die nacheinander abgearbeitet werden und jeweils eindeutige Zwischenzustände erzeugen.

![sequence-start](slides/images/bouncer-algo-01.png)
![sequence](slides/images/bouncer-algo-02.png)
![sequence](slides/images/bouncer-algo-03.png)
![sequence](slides/images/bouncer-algo-04.png)
![sequence](slides/images/bouncer-algo-05.png)
![sequence-end](slides/images/bouncer-algo-06.png)

>>>

### Ein Beispiel: Bouncer beim Hürdenlauf

![left-side](slides/images/bouncer-hurdles.png)
<span class="image-description">Bouncer startet in der linken unteren Ecke des
Bildschirm (0,14) und blickt nach rechts. Er soll sich über die drei, beliebig hohen, Hindernisse vor ihm bewegen. Wir wissen, dass sich zwischen den Hürden jeweils genau ein freie Feld befindet. Bouncer kann nur eine Hürde auf ein mal überqueren; er muss also über jedes Hindernis
einzeln klettern. Am Ende soll Bouncer auf dem Feld rechts unten neben der letzten Hürde stehen</span>

Wie schaut der Algorithmus aus? Welche Teilaufgabe muss wie oft erledigt werden? Aus welchen Abschnitten besteht diese Teilaufgabe?

>>>

### Dokumentieren und kommentieren von Programmen

<span class="blocktext">Sie können an jeder Stelle Ihres Programmes Kommentare einfügen – diese werden vom Computer bei der Ausführung nicht
beachtet und dienen Ihnen und anderen Entwicklern und Entwicklerinnen zum besseren Verständnis der Software. Hier werden die Ein- und Ausgangsbedingungen einer Methode beschrieben.</span>

``` java
/**
* Moves bouncer to the next free field by jumping over a hurdle
* Pre-condition: Bouncer stands in front of a hurdle, facing east
* Post-condition: Bouncer stands behind hurdle, facing east
*/
private void jumpOverHurdle() {
	ascendHurdle();
	bouncer.move();
	descendHurdle();
}
```

>>>

# Zusammenfassung und Aufgaben

>>>

## Zusammenfassung (1/2)

- In diesem Kurs lernen Sie einen wichtigen Teil der Grundlagen, die Sie für ein erfolgreiches Studium der Medieninformatik benötigen.
- Es geht in diesem Kurs (und im späteren Studium) darum, Anwendungen für bestehende Probleme zu entwickeln – Das Werkzeug dazu sind Computer und Programmiersprachen.

>>>

## Zusammenfassung (2/2)

- Anweisungen werden in Java/Bouncer in Methoden zusammengefasst – innerhalb der Methoden können andere Methoden aufgerufen werden.
- Der Programmablauf eines Java/Bouncer-Programms kann über Kontrollstrukturen gesteuert werden: for-Schleife, while-Schleife und  if-Abfrage.
- Ein Algorithmus löst Probleme, in dem er ein System durch eine Abfolge von Anweisungen in einen vorher definierten Endzustand überführt.

>>>

## TODOs (1/3)

- Falls noch nicht geschehen: Melden Sie sich **jetzt** für die Übungen an!
- Klären Sie offene Fragen zur Anmeldung oder Anrechung möglichst bald
- Stellen Sie sicher, dass Sie im GRIPS-Kurs angemeldet sind

>>>

## TODOs (2/2)

- Arbeiten Sie die Inhalte von Vorlesung und Zentralübung durch
- Richten Sie Ihre persönliche Arbeitsumgebung ein und probieren Sie das bereitgestellten Testprojekten aus
- Besuchen Sie die ihnen zugewiesene Übungssitzung

>>>

### Vielen Dank für Ihre Aufmerksamkeit. Wir sehen uns im Anschlus in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Micheal R. Fellows, Ian Parberry, *SIGACT trying to get children excited about CS*, *Computing Research News, Januar 1993* Seite 7ff, Computing Research Association</span>
<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>