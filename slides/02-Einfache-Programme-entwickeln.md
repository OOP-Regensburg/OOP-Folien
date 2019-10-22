# Einfache Programme erstellen

<span class="subtitle">Aufbau, Codierung und Erstellung einfacher Java-Programme</span>

<span class="blocktext">Struktur und Inhalt des Kurses wurden 2012 von Markus Heckner entwickelt. Im Anschluss haben Alexander Bazo und Christian Wolff Änderungen am Material vorgenommen. Die aktuellen Folien wurden von Alexander Bazo erstellt und können unter der [MIT-Lizenz](https://raw.githubusercontent.com/OOP-Regensburg/OOP-Folien/master/LICENSE) verwendet werden.</span>

>>>

### Rückblick

- Beim Programmieren definieren wir Lösungsstrategien für Probleme (für einen Computer)
- Programmiersprachen dienen dabei als Vermittler zwischen unseren Ideen und den Kapazitäten des Rechners
- *Bouncer* ist ein Roboter, den Sie mit Hilfe der Programmiersprache *Java* steuern können
- Innerhalb eines Java-Programms dienen Methoden zur Gliederung des Programmablaufs und innerhalb einer Methode werden Befehle sequenziell abgearbeitet
- Auf den *Kontrol-* bzw. *Programmfluss* können wir mit Schleifen und Bedingungen Einfluss nehmen
- Mit Kommentaren können wir unsere Programme für uns und andere ProgrammiererInnen beschreiben

>>>

## Kurzes Feedback von Ihnen

![large-image](slides/images/pingo-2019-10-22.png)

https://pingo.coactum.de/201662

>>>

## Aktueller Semesterfortschritt

<span class="subtitle">Woche 2: Einfache Probleme analysieren und lösen</span>

<div class="lecture-plan">
	<span>Einführung</span>
	<span class="current">Einfache Programme erstellen</span>
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

## Das Programm für heute

- Erkenntnisse aus der ersten Woche
- Hintergrundinformationen zur Programmiersprache Java
- Einfache Programme schreiben und ausführen
- Dekomposition als Problemlösungsstrategie

>>>

# Erkenntnisse aus der ersten Woche

>>>

## Bugs (1/2)

> A software bug is an error, flaw, failure or fault in a computer program or system that causes it to produce an incorrect or unexpected result, or to behave in unintended ways. The process of finding and fixing bugs is termed "debugging" and often uses formal techniques or tools to pinpoint bugs, and since the 1950s, some computer systems have been designed to also deter, detect or auto-correct various computer bugs during operations. 

[*Computer programming* (Wikipedia)](https://en.wikipedia.org/wiki/Software_bug)

>>>

## Bugs (2/2)

![left-side](https://upload.wikimedia.org/wikipedia/commons/8/8a/H96566k.jpg)
<span class="image-description">Bei *Bugs* handelt es sich um logische Fehler, die verhindern, das Ihr Programm das gewünschte Verhalten zeigt. Sie sind zu unterscheiden, von syntaktischen Fehlern, die auf falsche Nutzung der Sprachelemente zurück zuführen sind.</span>

Bildquelle: *Der erste Bug. Dokumentiert am 9. September 1945 von von Grace Hopper*, [U.S. Naval Historical Center Online Library Photograph NH 96566-KN](https://www.history.navy.mil/our-collections/photography/numerical-list-of-images/nhhc-series/nh-series/NH-96000/NH-96566-KN.html)

>>>

## Häufige Fehler in der ersten Woche (1/2)

<span class="blocktext">Der vergessene Methodenaufruf: Teilschritte werden in einer separaten Methode programmiert, die entsprechende Methode wird aber nie verwendet. **Nur die `bounce`-Methode wird automatisch gestartet. Alle anderen Methoden müssen explizit dort - oder an anderer Stelle - *aufgerufen* werden.**</span>

``` java
public class FirstRoom extends BouncerApp {
   @Override
   public void bounce() {
      loadLocalMap("FirstRoom");
	   
   }
   // BUG: Diese Methode wird definiert, aber nicht innerhalb des Programms verwendet!
   private void doSomething() {
      bouncer.move();
      bouncer.move();
   }
}
```

>>>

## Häufige Fehler in der ersten Woche (2/2)

![left-side](slides/images/bouncer-infinite-loop.gif)
<span class="image-description">**Die Endlosschleife**: Schleifen müssen immer so konstruiert sein, dass eine direkte oder indirekte Abbruchbedingung gegeben ist, d.h. die Bedingung, die im Schleifenkopf definiert ist, muss absehbar eintreffen.Tritt die aufgestellte Bedingung nicht ein, wird der Schleifenkopf endlos oft wiederholt. Das führt in der Regel zur Blockade oder zum Absturz Ihres Programms:<br /><br />
<code>
while(bouncer.canMoveLeft()) {<br />
	bouncer.turnLeft();<br />
}
</code>
</span>

>>>

# Vom Quellcode zum ausführbaren Programm

>>>

### Programmieren: Gestern und Heute

![list-image](slides/images/lovelace-wiki-commons.jpg)
<span class="image-list-description">**1843**: Ada Lovelace schreibt das erste Programm für Babbages *Analytical Engine*</span>

![list-image](slides/images/hollerith-punch-card-wiki-commons.jpg)
<span class="image-list-description">**~ 1900**: Mechanische Rechenmaschinen nutzen Lochkarten als Befehls- und Datenträger: Hollerith-Maschinen (Ursprung der Firma *IBM*)</span>

![list-image](slides/images/fortran-wiki-commons.jpeg)
<span class="image-list-description">**~ 1950**: Mit der Verbreitung der (Groß-) Rechner entstehen die ersten höheren Programmiersprachen</span>

![list-image](slides/images/hamilton-wiki-commons.jpg)
<span class="image-list-description">**~ 1965-70**: U.a. Margrit Hamilton und Friedrich Bauer prägen den Begriff *Software Engineering*</span>

>>>

## Entwurf vs. Ausführung

<span class="blocktext smaller">Moderne Programmiersprachen abstrahieren den Prozess der Entwicklung eines Programms **vollständig** von dessen späterer Ausführung</span>

- Wir verfassen den **Quellcode** unserer Programme mit Hilfe einer Programmiersprache
- Spezielle Software (vor allem der *Compiller*) übersetzt unsere Befehle in eine Menge an Anweisungen, die unabhängig von der Programmiersprache, vom Rechner *interpretiert* werden können
- Zusammen mit allen weiteren benötigten Dateien, z.B. Grafiken oder verwendeten externe Befehlssätze (*Bibliotheken*), wird bei dieser Transformation das eigentliche **Programm** erstellt
- Erst in diesem Zustand können wir unser Programm **ausführen**, d.h. starten

>>>

### Vom Quellcode zum ausführbaren Programm

<span class="blocktext">Für die meisten Programmiersprachen wird im Kern ein ähnlicher Prozess für den beschriebenen Transformationsprozess verwendet:</span>

1. Ausgangspunkt ist der Quellcode
2. Der *Compiler* erstellt eine - plattformabhängige - ausführbare Datei
3. Das Resultat kann *geöffnet* bzw. gestartet werden

![sequence-larger](slides/images/sourcecode-wiki-commons.png)
![sequence-larger](slides/images/compiler.png)
![sequence-larger](slides/images/firefox.png)

>>>

### Vom **JAVA**-Quellcode zum ausführbaren Programm 

<span class="blocktext">Java-Programme sind an sich plattformunabhängig und können theoretisch auf unterschiedlichen Betriebssystemen ausgeführt werden. Dadurch wird der Transformationsprozess komplexer:</span>

1. Ausgangspunkt ist wieder der Quellcode
2. Der *Compiler* erstellt eine - plattformunabhängige - Version des Codes, den *Bytecode*
3. Das erstellte Programm kann auf jedem System ausgeführt werden, auf dem eine *Laufzeitumgebung* für Java installiert ist

![sequence-larger](slides/images/sourcecode-wiki-commons.png)
![sequence-larger](slides/images/compiler.png)
![sequence-larger](slides/images/java.png)
![sequence-larger](slides/images/bouncer-program.png)

>>>

## Grundsätzliches zur Programmiersprache Java

- Die Programmiersprache Java wurde Anfang der 1990er-Jahre entworfen und wird seit Mitte der 90er-Jahre von der Firma *Sun* bzw. *Oracle* standardisiert
- Java, bzw. Programme, die in Java geschrieben sind, sind plattformunabhängig: *Write once, run everywhere*
- Java-Programme laufen nicht *direkt*, sondern erfordern eine Zwischenschicht (*Virtual Machine*): Die *Java Runtime*
- Solche *Runtime Enviroments* gibt es für zahlreiche Plattformen: Windows, Mac, Linux, Android(!), ... 

>>>

## Hello World

> A "Hello, World!" program generally is a computer program that outputs or displays the message "Hello, World!". Such a program is very simple in most programming languages, and is often used to illustrate the basic syntax of a programming language. It is often the first program written by people learning to code.

[*Computer programming* (Wikipedia)](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)

>>>

## Hello Java

``` java
public class Main {

    public static void main(String[] args) {
        System.out.println("Hello World");
    }

}
```

>>>

### Wichtige Details zum Hello World-Programm (1/2)

<span class="blocktext">Unsere *Bouncer*-Programme sind **spezielle** Java-Programme, für **allgemeine** Programme gelten einige andere/zusätzliche *Regeln*:</span>

- Jedes Java-Progam muss über eine `main`- Methode verfügen, die beim Starten des Programm automatisch aufgerufen wird (Vgl. Bouncer: Die `main`-Methode ist vor Ihnen *versteckt*, ist aber vorhanden und sorgt u.a. für den automatischen Aufruf der `bounce`-Methode)
- Die *Signatur* (`public static void main(String[] args)` der `main`-Methode muss exakt wie beschrieben aussehen
- Ihr Programm *startet* in der ersten Zeile der  `main`-Methode

>>>

### Wichtige Details zum Hello World-Programm (1/2)

- Die Programmiersprache Java beinhaltet (ähnlich wie *Bouncer*) eine Menge an eingebauten Befehlen, die Sie in Ihren Programmen verwenden können
- Der Befehl `System.out.println()` gibt z.B. den Text, den Sie in den Anführungszeichen übergeben, aus
- Ausgaben werden in der Regel auf der aktuellen *Standardausgabe* Ihres Betriebssystem ausgegeben
- Wir können unsere Programme direkt in IntelliJ starten. Um dies auch außerhalb der Entwicklungsumgebung zu ermöglichen, sind aber weitere Schritte notwendig

>>>

## Hello World 2.0 

``` java
public class Main {

    public static void main(String[] args) {
    	if(1 == 1) {
    		System.out.println("Math still works. Let's start ...");
    	}
    	for(int i=0; i < 42; i++) {
        	System.out.println("Hello World");
    	}
    }

}
```

<span class="blocktext">Die Schleifen und Bedingungen, die Sie beim Programmieren von *Bouncer* verwenden, sind *universell* auf andere JAVA-Programme übertragbar. Das gleiche gilt für alle anderen Syntax- und Sprachelemente, die wir im Laufe des Semesters kennen lernen werden. Spezielle Befehle, z.B. `bouncer.move()` sind nur innerhalb der *Bouncer*-Programme verfügbar.</span>

>>>

# Dekomposition als grundlegende Problemlösungsstrategie

>>>

## Programmierprobleme lösen

- Im Laufe des Semesters lösen Sie immer komplexer werdende Problemstellungen
- Auch wenn sich diese Probleme inhaltlich unterscheiden, können wir häufige ähnliche Strategien für die Problemanalyse und die Implementierung der jeweiligen Lösung verwenden
- Für alle Aufgaben gilt: Wir versuchen das zugrundeliegende Problem vollständig zu verstehen, bevor wir eine Lösungsstrategie entwerfen und implementieren
- Dabei können wir u.a. das Prinzip der *Dekomposition* (engl. *Decomposition*) anwenden

>>>

## Dekomposition

> Decomposition in computer science, also known as factoring, is breaking a complex problem or system into parts that are easier to conceive, understand, program, and maintain. 

[*Decomposition (computer science)* (Wikipedia)](https://en.wikipedia.org/wiki/Decomposition_(computer_science))

<span class="blocktext">Dekomposition bezeichnet sowohl eine Strategie für die vorangehende Problemanalyse als auch für den Vorgang, gut strukturierten und aufgeteilten Code (Vgl. *Methoden*) zur Umsetzung der gefundenen Lösung zu schreiben. Die Ursprünge für diese *Philiosophie* lassen sich im Paradigma der [Strukturierten Programmierung](https://en.wikipedia.org/wiki/Structured_programming) finden.</span>

>>>

## Beispiel: Der Bau eines Hauses (1/6)

![large-image](slides/images/hausbau-dekomposition0001.png)

>>>

## Beispiel: Der Bau eines Hauses (2/6)

![large-image](slides/images/hausbau-dekomposition0002.png)

>>>

## Beispiel: Der Bau eines Hauses (3/6)

![large-image](slides/images/hausbau-dekomposition0003.png)

>>>

## Beispiel: Der Bau eines Hauses (4/6)

![large-image](slides/images/hausbau-dekomposition0004.png)

>>>

## Beispiel: Der Bau eines Hauses (5/6)

![large-image](slides/images/hausbau-dekomposition0005.png)

>>>

## Beispiel: Der Bau eines Hauses (6/6)

![large-image](slides/images/hausbau-dekomposition0006.png)

>>>

## Dekomposition und *Top Down*

<span class="blocktext">In der Regel wird bei der Analyse eines Problems *von oben nach unten* (*top down*) gearbeitet. Ausgehend vom vollständigen Problem, spezifizieren wir immer detailliertere und spezialisiertere Einzelaufgaben:</span>

- Hauptaufgabe: **Haus bauen**
- Unteraufgaben:
	- **Fundament erstellen** mit Teilaufgaben *Planieren*, *Ausheben* und *Gießen*
	- **Gebäude bauen** mit Teilaufgaben *Mauern bauen* und  *Dach decken*

<span class="blocktext">Beim Umsetzen der Lösung kann dann auch *von unten nach oben* (*bottom up*) gearbeitet werden.</span>

>>>

### Dekomposition am Beispiele Bouncer

<span class="blocktext smaller">Schon in der letzten Woche haben wir dieses Prinzip angewendet, um Aufgaben wie den Hürdenlauf oder das Erklimmen der Treppe zu lösen!</span>

``` java
public void bounce() {
	loadMap("Stairs");
    climbStairs();
}
private void climbStairs() {
    bouncer.turnLeft();
    while(bouncer.canMoveForward()) {
	    climbOneStair();
        bouncer.turnLeft();
    }
    turnRight();
}
private void climbOneStair() {
    bouncer.move();
    turnRight();
    bouncer.move();
}
private void turnRight() {
    bouncer.turnLeft();
    bouncer.turnLeft();
    bouncer.turnLeft();
}
```

>>>

## Zusammenfassung

- Java ist eine plattformunabhängig Programmiersprache: Zum Ausführen von Java-Programmen wird eine plattformspezifische *Virtual Machine* benötigt, die Teil der Java-Laufzeitumgebung ist
- Programme unterscheiden sich in der Entwicklungsphase (Quellcode) und der Ausführungsphase (*Binary* oder  *intermediate* Code)
- Klassen sind das zentrale Strukturelement eines Java-Programms und bei Programmstart, wird immer die essentielle `main`-Methode ausgeführt
- *Decomposition* und die *Top Down*-Analyse sind zentrale Konzepte, um Programmierprobleme strukturiert zu lösen und übersichtlichen und wartbaren Code zu erstellen

>>>

### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>