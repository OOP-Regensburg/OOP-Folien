# Memory & Files

<span class="subtitle">Heap, Stack und der Garbage Collector</span>

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
<span class="current">Speicherverwaltung</span>
<span class="current">Umgang mit Dateien</span>
</tr>
<tr>
<td>Software Engineering</td>
<td>
<span class="done">Debugging</span>
<span>Planhaftes Vorgehen bei der Softwareentwicklung</span>
<span>Qualitätsaspekte von Quellcode</span>
</tr>
</tbody>
</table>

>>>

## Rückblick

- Vorhersehbare Ausnahmefehler werden in Java über `Exception`-Objekte kommuniziert und müssen in der Regel im Code abgefangen werden.
- Neben *Arrays* und *ArrayList* existieren weitere Datenstrukturen, die z.T. im *Collections*-Framework organisiert sind.
- *HashMaps* bieten die Möglichkeit, *Schlüssel/Wert*-Paare zu speichern und schnell abzurufen.
- Viele - in sich nicht sortierte - Datenstrukturen können über `Iterator` vollständig iteriert werden.

>>>

## Ausblick auf die nächsten Wochen

- In der nächsten Woche finden die letzte Vorlesung statt: *Wir werfen einen Blick auf die Klausur und die kommenden Semester*
- Die Klausur findet am 18. Februar von 12:30 bis 14:00 Uhr statt (Weitere Informationen folgen)
- Vielen Dank für die Teilnahme an unserer *Logging*-Studie: Wir würden uns freuen, wenn Sie uns auch in dieser Woche Daten aus den Übungen bereitstellen

<span class="hint">Vergessen Sie nicht die **Klausuranmeldung** in Flexnow vom 1. bis zum 9. Februar!</span>

>>>

## Das Programm für heute

- Speicherverwaltung in Java
- Der *Garbage Collector*
- Tipps und Tricks zum Lesen und **Schreiben** von Dateien

>>>

# Speicher auf Ihrem Computer: Flüchtiger Speicher

>>>

### Von welchem Speicher sprechen wir?

![large-image](slides/images/ram-riegel.jpg)
<p class="source">https://de.wikipedia.org/wiki/Datei:RAM_Module_(SDRAM-DDR4).jpg</p>

>>>

### Speicherverwaltung im Betriebssystem und in unseren Anwendungen

<span class="blocktext">Der Speicher ist in Felder aufgeteilt, die jeweils eine bestimmte Menge an Informationen speichern können. Sie sind adressierbar, d.h. hier können (vom OS) Daten gespeichert bzw. gelesen werden.</span>


<ul class="arraycontent">
    <li class="element">
        <span class="value"> - </span>
        <span class="index">0001</span>
    </li>
     <li class="element">
        <span class="value"> - </span>
        <span class="index">0002</span>
    </li>
     <li class="element">
        <span class="value"> - </span>
        <span class="index">0003</span>
    </li>
     <li class="element">
        <span class="value"> - </span>
        <span class="index">0004</span>
    </li>
     <li class="element">
        <span class="value"> - </span>
        <span class="index">0005</span>
    </li>
     <li class="element">
        <span class="value"> - </span>
        <span class="index">0006</span>
    </li>
     <li class="element">
        <span class="value"> - </span>
        <span class="index">0007</span>
    </li>
     <li class="element">
        <span class="value"> - </span>
        <span class="index">0008</span>
    </li>
     <li class="element">
        <span class="value"> - </span>
        <span class="index">0009</span>
    </li>
     <li class="element">
        <span class="value"> - </span>
        <span class="index">0010</span>
    </li>
     <li class="element">
        <span class="value"> - </span>
        <span class="index">0011</span>
    </li>
     <li class="element">
        <span class="value"> - </span>
        <span class="index">0012</span>
    </li>
     <li class="element">
        <span class="value">...</span>
        <span class="index">...</span>
    </li>
</ul>

>>>

## Wichtige Einheiten im Speicher

### byte (8 bit)

<ul class="arraycontent">
    <li class="element">
        <span class="value">1</span>
        <span class="index">bit</span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">1</span>
        <span class="index"></span>
    </li>
</ul>

### word (kleinste adressierbarste Einheit)

<ul class="arraycontent">
    <li class="element">
        <span class="value">1</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">1</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">1</span>
        <span class="index"></span>
    </li>
</ul>
<ul class="arraycontent">
    <li class="element">
        <span class="value">1</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">1</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">1</span>
        <span class="index"></span>
    </li>
</ul>

<span class="blocktext">`word` ist eine Abstrakte Bezeichnung für die kleinste adressierbarste Einheit, d.h. die praktische Größe eines Elements des Speichers, zb. 16bit in einem x86-System. In Java werden 4bytes als Wortgröße verwendet.</span>

>>>

## Größeneinheiten

| Bezeichner | Speichergröße |
|------------|---------------|
| *Kilobyte* (KB) | 1024 `byte` (2<sup>10</sup> `byte`) |
| *Megabyte* (MB) | 1024 `KB` (2<sup>10</sup> `KB`) |
| *Gigabyte* (GB) | 1024 `MB` (2<sup>10</sup> `MB`) |
| *Terabyte* (TB) | 1024 `GB` (2<sup>10</sup> `GB`) |

>>>

## Speicheradressen

<span class="blocktext">Jedes praktisch verwendbare Element des Speicher kann über eine eindeutige Adresse vom Betriebssystem (und Anwendungen) angesprochen werden. Itern werden sowohl für die Adressen als auch für die gespeicherten Werte *binär Darstellungen verwendet*. Für die Repräsentation nach Außen (z. B. für ProgrammiererInnen) wird oft eine alternative Schreibweise gewählt, die *Hexadezimal*-Darstellung:</span>


<ul class="arraycontent left">
    <span class="label">Binär</span>
    <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">1</span>
        <span class="index"></span>
    </li>
</ul>

<ul class="arraycontent left">
    <span class="label">Oktal</span>
    <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">1</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">2</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">3</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">4</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">5</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">6</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">7</span>
        <span class="index"></span>
    </li>
</ul>

<ul class="arraycontent left">
    <span class="label">Dezimal</span>
    <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">1</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">2</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">3</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">4</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">5</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">6</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">7</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">8</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">9</span>
        <span class="index"></span>
    </li>
</ul>

<ul class="arraycontent left">
    <span class="label">Hexadezimal</span>
    <li class="element">
        <span class="value">0</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">1</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">2</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">3</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">4</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">5</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">6</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">7</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">8</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">9</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">A</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">B</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">C</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">D</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">E</span>
        <span class="index"></span>
    </li>
     <li class="element">
        <span class="value">F</span>
        <span class="index"></span>
    </li>
</ul>

>>>

### Exemplarischer Aufbau des Speichers

| `Adresse` | Inhalt (Speicherzelle) | 
|-----------|--------|
| `0000` | `0010` |
| ... |
| `A000` | `0000` |
| `A001` | `0100` |
| `A002` | `0001` |
| ... |
| `FFFF` | `0000` |


<span class="hint">Die Menge des verfügbaren Speichers (*Anzahl der Adressen*) und die tatsächliche Größe einer Speicherzelle hängt vom verwendeten System ab.</span>

>>>

## Der Speicher in unseren Anwendungen

<span class="blocktext">Beim Starten einer Java-Anwendung wird ein bestimmer Bereich im Arbeitsspeicher für diese Anwendung reserviert. **Dies ist der verfügbare Speicher**. Dieser Speicherbereich unterteilt sich in: </span>

<span class="blocktext">**Static Memory**: Hier werden statische Variablen und Konstanten abgelegt.<br /><br />
**Heap**: Hier werden dynamische Variablen, d.h. alle Objekte und deren Instanzvariablen abgelegt. Der *Heap* wird von der *Runtime* verwaltet. Ungenutzte Objekte, die keinen Bezug mehr zur Anwendung haben,werden *automatisch* gelöscht.<br /><br />**Stack**: Hier werden lokale Variablen von Methoden und Parameter gespeichert.</span>

>>>

## Stackoverflow!

![half-image](slides/images/stackoverflow-sketch.png)
<span class="image-description">Der *Heap* wächst zur Laufzeit nach "unten". D.h. die verwendeten Adressen werden "größer". Der *Stack* wächst nach "oben". D.h. die verwendeten Adressen werden kleiner.<br /><br />
*Heap* und *Stack* bewegen sich im vorher reservierten Speichebereich. Sobald der *Stack* versucht, in den vom *Heap* verwendeten Bereich zu schreiben, wird ein `Stackoverflow`-Fehler ausgelöst.<br /><br />
Die genauen Positionen von *Heap* und *Stack* im Speicher sind nicht festgelegt. Die meisten *Runtime*-Implementierungen verfolgen aber dieses Schema.
</span>

>>>

## Speicher und Datentypen

<span class="blocktext">Unterschiedliche Datentypen benötigen unterschiedlich viel Speicher:</span>

- `int`: 4 byte
- `double`: 8 byte
- `char`: 2 byte (Ein `char` ist kleiner als die Java-*Word*-Größe!)

<span class="blocktext">Bei dynamischen Datentypen (Objekten) wird neben den eigentlichen Daten (z.B. Instanzvariablen) auch ein Overhead-Speicher benötigt.</span>

>>>


## Die Klasse Point

``` java
public class Point {
    /* instance variables */
    private int px;
    private int py;

    public Point(int x, int y) {
        px = x;
        py = y;
    }

    public void move(int dx, int dy) {
        px += dx;
        py += dy;
    }
}
```

>>>

## Unsere Demo-Anwendung

``` java
public class DemoApp extends GraphicsApp {

    // ...

    public void initalize() {
        Point p1 = new Point(5, 4);
        Point p2 = new Point(2, 3);
        p1.move(10, 15);
    }

}
```

>>>

<span class="memory-menu">
    <span class="button back">zurück</span>
        <span class="title">Speicherzuweisung</span>
    <span class="button next">weiter</span>
</span>

<div class="memory-visualizer">
    <span class="frame heap">
        <span class="title">Heap</span>
        <span class="field">
            <span class="label"></span>
            <span class="value highlighted">Overhead</span>
            <span class="address">1000</span>
        </span>
        <span class="field">
            <span class="label">px</span>
            <span class="value">5</span>
            <span class="address">1004</span>
        </span>
        <span class="field">
            <span class="label">py</span>
            <span class="value">5</span>
            <span class="address">1008</span>
        </span>
         <span class="field">
            <span class="label"></span>
            <span class="value highlighted">Overhead</span>
            <span class="address">100C</span>
        </span>
        <span class="field">
            <span class="label">px</span>
            <span class="value">2</span>
            <span class="address">1010</span>
        </span>
        <span class="field">
            <span class="label">py</span>
            <span class="value">3</span>
            <span class="address">1014</span>
        </span>
         <span class="field">
            <span class="label"></span>
            <span class="value highlighted">Overhead</span>
            <span class="address">1018</span>
        </span>
        <span class="field">
            <span class="label">beg</span>
            <span class="value">5</span>
            <span class="address">101C</span>
        </span>
        <span class="field">
            <span class="label">end</span>
            <span class="value">5</span>
            <span class="address">1020</span>
        </span>
    </span>
    <span class="frame stack">
        <span class="title">Stack</span>
        <span class="field">
            <span class="label"></span>
            <span class="value highlighted">Overhead</span>
            <span class="address">FFE0</span>
        </span>
        <span class="field">
            <span class="label">px</span>
            <span class="value">5</span>
            <span class="address">FFE4</span>
        </span>
        <span class="field">
            <span class="label">py</span>
            <span class="value">5</span>
            <span class="address">FFE8</span>
        </span>
         <span class="field">
            <span class="label"></span>
            <span class="value highlighted">Overhead</span>
            <span class="address">FFEC</span>
        </span>
        <span class="field">
            <span class="label">px</span>
            <span class="value">2</span>
            <span class="address">FFF0</span>
        </span>
        <span class="field">
            <span class="label">py</span>
            <span class="value">3</span>
            <span class="address">FFF4</span>
        </span>
         <span class="field">
            <span class="label"></span>
            <span class="value highlighted">Overhead</span>
            <span class="address">FFF8</span>
        </span>
        <span class="field">
            <span class="label">beg</span>
            <span class="value">5</span>
            <span class="address">FFFC</span>
        </span>
        <span class="field">
            <span class="label">end</span>
            <span class="value">5</span>
            <span class="address">FFFF</span>
        </span>
    </span>
    <ul class="code">
        <li class="selected"><span class="line-number">01</span>System.out.println("Hello World")</li>
        <span class="info">TEST</span>
    </ul>
</div>

>>>

### Erzeugen und Zuweisen von Objekten

``` java
Point p1 = new Point(1, 2);
Point p2 = p1;
p2.move(10, 10);
```

<span class="blocktext">Eine Zuweisung eines existierenden Objekts zu einer neuen Variable ändert nur den *Zeiger*: Die Variablen auf dem *Stack* zeigen auf das selbe Objekt, d.h. in diesem Fall, dass auch `p1` durch die `move`-Methode verändert wird.</span>

>>>

### Strings vergleichen

``` java
String s1 = new String("hello");
String s2 = new String("hello");
System.out.println(s1 == s2);
```

<span class="blocktext">Wir vergleichen hier die Adressen deb beiden Objekte auf dem Heap, nicht den Inhalt der beiden `String`-Objekte. Daher gibt der Ausdruck auch `false` zurück (Beide Objekte wurden durch den expliziten Konstruktoraufruf als separate Instanzen erstellt).</span>

>>>

### NullPointer

``` java
Point p3;
p3.move(9,7);
```

<span class="blocktext">Für die Variable `p3` wird auf dem Stack eine Speicherzelle reserviert. Diese ist solange "leer" (`null`) bis ein konkretes Objekt erstellt und dessen *Heap*-Adresse eingetragen wird. Greifen wir vorher auf die leere Speicherzelle zu, wird eine `NullPointerException` ausgelöst: `p3` verweist auf **nichts**</span>

>>>

## Einblicke in Heap und Stack

<span class="blocktext">Mit dem eingebauten Debugger können Sie in IntelliJ den aktuellen Zustand des Heaps einsehen. Alternativ können Sie laufende Java-Anwendungen auch mit externen Tools wie [VisualVM](https://visualvm.github.io/) analysieren.</span>

![large-image](slides/images/intellij-heap-visualizer.png)

>>>

# Der Garbage Collector

Was passiert mit *Heap* und *Stack*, wenn die dort gespeicherten Daten nicht mehr benötigt werden?

![large-image](slides/images/garbage-collector.png)

>>>

## Verwaiste Einträge im Heap

<span class="blocktext">Zur Laufzeit kann der Fall eintreten, dass *Reste* im *Heap* zurückbleiben:</span>

1. In einer Methode (*stack frame*) wird ein Objekt referenziert.
2. Wird die Methode beendet, wird die Referenz aus dem Stack entfernt.
3. Die Inhalte im *Heap* bleiben vorerst (unreferenziert) bestehen.
4. Der *Garbage Collector* der *Runtime* sucht regelmäßig nach *Heap*-Inhalten, die von keiner Stelle des Programms referenziert werden.

**Findet der *Garbage Collector* entsprechende Daten-Reste, werden diese automatisch entfernt.**

>>>

# Dateien als Möglichkeit zur dauerhaften Speicherung von Informationen

>>>

### Von welchem Speicher sprechen wir?

![large-image](slides/images/festplatte.jpg)
<p class="source">https://commons.wikimedia.org/wiki/File:Western_Digital_WD2500JD-00HBC0_20051228.jpg</p>

>>>

## Dateien

- Dateien speichern Inhalte (Informationen) in codierter, maschinenlesbarer Form
- Die Struktur der Informationen können vom Computer unterschiedlich interpretiert werden: Bilder, Musik, Text, ...
- Dateien sind die Basis für die (praktische) persistente Speicherung von Daten über die Laufzeit eines Programms hinaus (wenn man keine Datenbank oder ein anderes Datenmanagement-System benutzt – letztlich speichert aber auch eine Datenbank ihre Inhalte in Dateien)

>>>

## Verwendung von Dateien

<span class="blocktext">Dateien (und deren Inhalte) werden von vielen Programmen genutzt:</span>

- Textverarbeitung (Textdokumente)
- IDEs wie IntelliJ (Quellcode: *.java-Dateien)
- Browser (Cookies)
- Spiele (Speicherstände)
- Mediaplayer (Musik- und Videodateien)
...

>>>

### Wo haben Sie bereits (implizit) mit Dateien gearbeitet?

![large-image](slides/images/bouncer-screenshot.png)
![large-image](slides/images/memory-screenshot.png)

>>>

## Dateien in Java

<span class="blocktext">Dateien werden in Java über die Klasse File repräsentiert, in deren Konstruktor Sie den (relativen oder absoluten) Pfad zur bestehenden oder neu anzulegenden Datei angeben können:</span>

``` java
File fileA = new File("\data\assets\file.txt");
File fileB = new File("C:\data\file.txt");
```

<span class="blocktext">Diese Objekte sind die Grundlage für Funktionen wie z.B. das Einlesen oder Schreiben von Dateien.</span>

>>>

## Dateien einlesen: Scanner

<span class="blocktext">Wir kennen bereits eine einfache Möglichkeit, Inhalte aus Dateien einzulesen: die `Scanner`-Klasse:</span>

``` java
Scanner in = new Scanner(new File("input.txt"));
while (in.hasNext()) {
    System.out.println.add(in.nextLine());
}
```

<span class="blocktext">Intern arbeitet die Klasse mit *Streams* (Datenströmen( und `Reader`-Klassen, die die Grundlagen für die Datenverarbeitung in Java bilden. Es lohnt sich, im Kontext der Dateiverarbeitung, einen Blick auf diesen Bereich zu werfen, da auch andere Probleme in Java (z.B. die *Netzwerkkommunikation* über die gleichen Mechanismen gelöst werden.</span>

>>>

## Das Paket java.io

<span class="blocktext">Das Paket java.io enthält die Datenstrukturen, die eine Behandlung von Datenströmen, insbesondere Dateiein- und -ausgabe ermöglichen. Dazu gehören u.a. die folgenden Basisklassen:</span>

- `Reader`
- `Writer`
- `InputStream`
- `OutputStream`

<span class="blocktext">Grundsätzlich wird unterschieden in gepufferte und nichtgepufferte Ein- und Ausgabeströme für *byte*- oder *character*-Daten.</span>

>>>

## Die Arbeit mit dem BufferedReader

``` java
// Datei öffnen
File file = new File("data.txt")
BufferedReader br = new BufferedReader(new FileReader(file));

// Zeilen auslesen
// Der interne Zeiger in br zeigt immer auf eine Zeile
String line1 = br.readLine();   
// readLine() gibt die aktuelle Zeile zurück und setzt den Zeiger auf die nächste 
String line2 = br.readLine();
String line3 = br.readLine();
String line4 = br.readLine();
// Kann keine Zeile (mehr) gelesen werden, gibt readLine() null zurück
String line5 = br.readLine();   // Gibt null zurück

// Datei schießen
br.close();

```

>>>

## Dateien vollständig auslesen

``` java
File file = new File("data.txt")
BufferedReader br = new BufferedReader(new FileReader(file));

while (true) {
    String line = br.readLine();
    if (line == null) { break; }
    // Hier kann die Zeile verarbeiten werden
}

br.close();
```

>>>

## Dateien schreiben

<span class="blocktext">Das Schreiben in Dateien funktioniert nach dem gleichen Prinzip, wird aber durch den Einsatz anderer Klassen, z.B. `FileWriter` realisiert.</span>

``` java
File file = new File("data.txt")

try{    
    FileWriter fw = new FileWriter(file);    
    fw.write("Welcome to javaTpoint.");    
    fw.close();    
} catch(Exception e){
    e.printStacktrace();
}
```

<span class="hint">Öffnen Sie eine existierende Datei zum Schreiben, wird deren Inhalt permanent überschrieben. Seien Sie vorsichtig, wenn Sie das nicht wollen! Schauen Sie sich die `FileWriter`-Klasse an, wenn Sie wissen möchten, wie Sie Inhalte an Dateien anhängen können.</span>

>>>

## Walkthrough: Heap Visualizer

![left-side](slides/images/heap-visualizer.png)
<span class="image-description">Eine beliebige Anzahl an Bällen wird in einer `ArrayList`gespeichert und auf dem Bildschirm dargestellt. Die Bälle bewegen sich mit zufälliger Geschwindigkeit in jedem Tick auf der `x`- und `y`-Achse. Kollidiert ein Ball mit einem anderen, wird dessen Bewegungsrichtung umgekehrt. Das Kollisionsziel bewegt sich mit der ursprünglichen Richtung des Balls fort. Verlässt ein Ball die Zeichenfläche, wird er entfernt. In jedem Tick werden alle "freien" Stellen der Liste mit einer Wahrscheinlichkeit von `0.5` aufgefüllt.</span>

>>>

### Konfiguration über externe Datei (1/2)

<span class="blocktext">Zentrale Parameter der Anwendung werden über eine Textdatei verwaltet, die bei Start der Anwendung eingelesen wird. Die Simulation kann dadurch angepasst werden, ohne das Änderungen am Code notwendig wären.</span>

```
WIDTH:500
HEIGHT:500
BACKGROUND_COLOR:60,60,60
MAX_BALLS:100
BALL_RADIUS:10
BALL_MIN_VELOCITY:-3
BALL_MAX_VELOCITY:3
BALL_COLOR:220,20,120 
```

>>>

### Konfiguration über externe Datei (2/2)

<span class="blocktext">Zur Laufzeit wird der Inhalt der Konfigurationsdatei durch eine Instanz der Klasse `AppConfig` repräsentiert.</span>

``` java
// Einlesen der Datei
private void initConfig() {
    File configFile = new File(CONFIG_FILE_PATH);
    config = new AppConfig(configFile);
    if(!config.isValid()) {
        System.out.println("Invalid config file!");
        System.exit(1);
    }
}

// Zugriff auf Parameter
private void initHeapVisualizer() {
    heapVisualizer = new HeapVisualizer(config.getWidth(), config.getHeight());
}

```

>>>

### Logging in Datei (1/2)

![left-side](slides/images/heap-visualizer-log.png)
<span class="image-description">Für eine vorgegeben Anzahl an *Frames* werden jeweils die Anzahl der Bälle sowie die registrierten Kollisionen gespeichert und in eine Log-Datei geschrieben. Die Log-Einträge werden im Speicher gesammelt und erst dann in die Datei geschrieben, wenn die vordefinierte Anzahl an Einträgen erreicht wurde</span>

>>>

### Logging in Datei (2/2)

``` java
private File logFile;
private ArrayList<String> log;

public void logFrame(int ballCount, int collisions) {
    if(loggedFrames >= framesToLog) {
        if(!fileWritten) { writeLog();  }
        return;
    }
    log.add(loggedFrames + DELIMITER + ballCount + DELIMITER + collisions);
    loggedFrames++;
}
private void writeLog() {
    try {
        PrintWriter fileWriter = new PrintWriter(new FileWriter(logFile));
        for(String line: log) { fileWriter.println(line); }
        fileWriter.close();
        fileWritten = true;
    } catch (IOException e) {
    }
}
```

>>>

## Zusammenfassung

- Speicher in Java unterteilt sich in *Heap* und *Stack*: Auf dem Stack werden lokale Variablen und Parameter abgelegt.
- Alle Objekte (komplexe Typen) liegen auf dem *Heap*.
- Der Stack verweist auf komplexe Datentypen auf dem *Heap* ("Pointer"), auch der *Heap* kann auf andere Objekte auf dem *Heap* verweisen.
- Der *Heap* wächst "von oben", der *Stack* "von unten" – Treffen sich beide in der Mitte, entsteht ein *Stack Overflow*.
- Der *Garbage Collector* räumt nicht mehr referenzierte Objekte auf und hilft somit *Stack Overflows* zu vermeiden und den Speicherbedarf eines Programms gering zu halten.

>>>

### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>