# Grundlagen der Event-basierten Programmierung

<span class="subtitle">Eingaben von NutzerInnen abfangen und verwenden</span>

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
<span class="done">Grundlagen der Klassenmodellierung</span>
<span class="done">Vererbung &amp; Sichtbarkeit</span>
</tr>
<tr>
<td>Interaktive Anwendungen</td>
<td>
<span class="current">Event-basierten Programmierung</span>
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

![large-image](slides/images/pingo-2019-12-03.png)

https://pingo.coactum.de/365849

>>>

## Das Programm für heute

- Nächste Studienleistung
- Ereignis-basierte Anwendungen: Auf Maus und Tastatur reagieren
- *Interfaces* und das *Observer*-Muster

>>>

## Die nächste Studienleistung

- Sie implementieren ein ersten, interaktives Spiel und setzten dabei das bekannte *Memory*-Konzept um
- Sie stellen ein Spielbrett mit mehreren Karten dar und erlauben den NutzerInnen, einzelne Karten anzuklicken
- Sie arbeiten *Event*-basiert und reagieren auf die Eingaben der NutzerInnen
- Handout und Code-Vorgabe finden Sie ab heute Abend im GRIPS-Kurs
- Abgabedatum ist der 15. Dezember

>>>

## Event-driven programming

<blockquote>In computer programming, event-driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or messages from other programs or threads. Event-driven programming is the dominant paradigm used in graphical user interfaces and other applications (e.g., JavaScript web applications) that are centered on performing certain actions in response to user input. This is also true of programming for device drivers (e.g., P in USB device driver stacks).</blockquote>
<p>Wikipedia (https://en.wikipedia.org/wiki/Event-driven_programming)</p>

>>>

## Events (Ereignisse) in der realen Welt

![large-image](slides/images/events-real-world-1.png)

>>>

### Events in der realen Welt: Details

![large-image](slides/images/events-real-world-2.png)

>>>

## Events in der GraphicsApp (1/2)

![large-image](slides/images/events-graphics-app-1.png)

>>>

## Events in der GraphicsApp (2/2)

- *UI Events* (*User Interface Events*) werden durch z.B. die Verwendung der Tastatur oder Maus durch BenutzerInnen erzeugt.
- Events werden bei jeder Interaktion mit Maus und Tastatur ausgelöst: Damit eine sinnvolle Reaktion erfolgt, müssen die Events gezielt aber *abgefangen*, interpretiert und verarbeitet werden.
- Ein Objekt, das auf bestimmte *Events* wartet und auf diese reagiert, nennt man *Observer* oder *Listener*.

>>>

## Events abfangen

<span class="blocktext">Die interne Verarbeitung der *Events* (Abfangen der Eingabe, Erzeugen der *Events*, Weitergabe der *Events* an unsere *GraphicsApp*) wird von den *Implementors* der *GraphicsApp*-Umgebung durchgeführt. Wir  müssen in unseren Anwendungen "nur noch" reagieren, d. h. die Ereignisse abfangen und in den Ablauf unserer Programme einbauen.</span>

>>>

## Event-basierter Programmierung

![large-image](slides/images/events-graphics-app-2.png)

>>>

## Auf Events reagieren (1/2)

<span class="hint smaller">Die *Event*-basierte Programmierung erfordert eine etwas andere Denkweise vom Programmierenden. Bis jetzt sind wir an die Entwicklung unserer Anwendungen mit folgendem (zeitlichen) Plan herangetreten</span>

<span class="blocktext smaller">**Bouncer**: Sobald das Programm startet, beginne mit diesem Befehl. Direkt danach führe diese Aufgabe aus und dann diese und dann diese ... </span>

<span class="blocktext smaller">**GraphicsApp**: Jedes Mal, wenn die `draw`-Methode aufgerufen wird, erledige zu erst diese Aufgabe und dann diese und dann diese ... </span>

<span class="blocktext">Wir hatten eine klare Vorstellung in welcher (zeitlichen) Reihenfolge unser Programm abläuft und was wann passiert: *Wenn der Fall eintritt, dass dieses Ereignis ausgelöst wird, dann mach zuerst das hier und dann das hier. Sobald du damit fertig bist, fahre mit dem eigentlichen Ablauf des Programms fort.*</span>

>>>

## Auf Events reagieren (2/2)

<span class="blocktext">Wenn wir *Event*-basiert programmieren, legen wir uns einen Plan zurecht, der ausgeführt werden soll, wenn ein bestimmter Zustand erreicht wird bzw. ein bestimmtes *Event* eintritt. Wann das der Fall ist, können wir in der Regel nicht genau bestimmen (Unsere BenutzerInnen können z.B. nach einer, zehn oder erst nach sechzig Sekunden auf die Maustaste drücken ...). </span>

>>>

## Das Observer-Muster (1/3)

<span class="blocktext">Beim Entwickeln unterschiedlicher Software müssen häufig die selben, grundlegenden Probleme gelöst werden. Für viele dieser Aufgaben haben sich *Best Practices ergeben*, die in der Literatur oft als *Design Patterns* oder Muster beschrieben werden (Ein *Pattern* ist dabei mehr als nur die Lösung selbst). In der GraphicsApp wird ein bestimmtes Entwurfsmuster (*Design Pattern*) verwendet, um die *Event*-Verarbeitung zu implementieren: Das *Observer Pattern*.</span>

>>>

## Das Observer-Muster (2/3)

![small-image](slides/images/observer-pattern-gamma.png)

<blockquote>Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.</blockquote>
<p>Gamma et al. <i>Design Patterns: Elements of Reusable Object-oriented Software</i></p>

>>>

## Das Observer-Muster (3/3)

<span class="blocktext">In Java wird das Informieren der konkreten *Observer* durch den Aufruf öffentlicher Methoden realisiert. Damit das funktioniert, müssen alle *Observer* über entsprechende Methoden verfügen. Es muss sichergestellt werden, dass das *Subject* (oder *Observable*) mit dem *Observer* sprechen kann. Aber: Es können sich ganz unterschiedliche Klassen als *Observer* für ein bestimmtes *Observable* interessieren!</span>

>>>

### Wie kommuniziert eine *Observable*-Klasse mit den *Observer*-Klassen, die sich für die Ereignisse interessieren?

- Klassen kommunizieren untereinander über öffentliche Methoden (Vgl. `Student`-Klasse). Alle Empfänger brauchen passende Methoden, über die die Events weitergegeben werden können: `mouseMoved`, `mousePressed`, ...
- Wie stellen wir sicher, dass der Empfänger über diese Methoden verfügt? Ist Vererbung hier die richtige Entscheidung?
- *Interfaces*  bieten in JAVA die Möglichkeit, eine Reihe an Methoden zu definieren, die eine Klasse auf jeden Fall haben muss, ohne dass die tatsächliche Implementierung der Methoden vorgegeben ist.

>>>

## Probleme mit Vererbung

<span class="hint smaller">Häufig stoßen Sie beim Modellieren Ihrer Klassen auf Gemeinsamkeiten, die sich nicht sinnvoll in einer Vererbungshierarchie abbilden lassen – vor allem bei der Integration von Events oder der Gruppierung von Objekten.</span>

<span class="blocktext smaller">**Beispiele**: Ein Videospiel, mit unterschiedlichen Gegenständen, die alle auf Wind reagieren</span>

![left-side](slides/images/events-graphics-app-3.png)
<span class="image-description">Wenn wir diese Dinge als Klassen abbilden, konkurrieren wahrscheinlich unterschiedliche Superklassen miteinander: Die Windmühle ist ein Gebäude, das Segelschiff ist ein Fahrzeug und das *Tumbleweed* ist/war eine Pflanze. Die Reaktion auf den Wind ist nur ein kleiner Teil des Verhaltens der Klassen.<br />
**Trotzdem wollen wir die Klassen innerhalb unserer Anwendung hinsichtlich dieses Verhaltens gleich behandeln!**</span>

>>>

## Weitergabe von Events

<span class="blocktext">**Unser Problem**: Unterschiedliche Klassen bzw. deren Instanzen interessieren sich für ein und dasselbe Ereignis. Die Weitergabe dieser Ereignis muss über die öffentliche Schnittstelle der Klassen (`public`-Methoden) erfolgen.</span>

<span class="blocktext smaller">Jede der Klassen muss eine eigene Methode für die Weitergabe des Events bereitstellen. Jede Methode muss einzeln aufgerufen werden. Jedes neue Element, das ebenfalls auf Wind reagiert, muss entsprechend implementiert werden.</span>

<span class="blocktext">**Lösung**: Idee: Wir wollen alle relevanten Objekte, unabhängig von ihrer eigentlichen Klasse und nur im Kontext des *Wind*-Ereignis als Objekte gleichen Typs, mit gleicher öffentlicher Schnittstelle, behandeln, um alle interessierten Elemente auf die gleiche Art und Weise über das Ereignis zu informieren. **Dafür setzen wir in Java *Interfaces* ein!**</span>

>>>

## Interfaces in Java

1. Interfaces werden wie Klassen in Dateien mit der Endung `.java` definiert. Das *Keyword* lautet `interface` (Vgl.: `class` für Klassen)
2. Interfaces bestehen aus einer Liste von öffentlichen Konstanten und Methodensignaturen (!).
3. Bei der Definition einer Klasse können über das `implements`-Schlüsselwort ein oder mehrere Interfaces angeben werden: Die Klasse *implementiert* dann diese Interfaces.
4. Implementiert eine Klasse ein Interface, müssen innerhalb der Klasse alle im Interface enthaltende Methoden mit der korrekten Signatur und einem frei wählbaren Rumpf definiert werden.
5. Implementiert eine Klasse ein Interface, können Instanzen der Klasse als Instanzen der Interface behandelt werden. D.h., im Kontext der Instanz kann, alternativ zu eigentlichen Klasse, auch das Interface als Datentyp genutzt werden.

>>>

## Beispiel: Cleanable (1/2)

<span class="blocktext smaller">Das Interface `Cleanable` gibt vor, über welche öffentlichen Methoden alle Dinge, die *putzbar* sind, angesprochen werden sollen.</span>

``` java
public interface Cleanable {
	public void clean();
}
```

``` java
public class Window implements Cleanable {
	public void open() {
	}
	public void clean() {
		// clean window
	}
}
public class Car implements Cleanable {
	public void drive() {
	}
	public void clean() {
		// clean car
	}
}
```

>>>

## Beispiel: Cleanable (2/2)

<span class="blocktext">Die Klassen `Window` und `Car` haben unterschiedliche Aufgaben, beide repräsentieren aber *putzbare* Dinge. Beide implementieren das Interface, um im Kontext des Putzens gleich angesprochen werden zu können. Was genau beim Putzen passiert, unterscheidet sich aber bei `Window` und `Car` (Unterschied zwischen Signatur und Rumpf der `clean`-Methode beachten): </span>

``` java
Cleanable[] cleanables = new Cleanable[2];
cleanables[0] = new Window();
cleanables[1] = new Car();
for(int i = 0; i < cleanables.length; i++) {
	cleanables[i].clean();
}
```

>>>

## Beispiel: Eatable

``` java
public interface Eatable {
	public void eat();
}

public class Apple implements Eatable {
	public void eat() {
		// Specific behaviour
	}
}
```

<span class="hint smaller">Interfaces werden, wie Klassen, in separaten Dateien definiert. Klassen, die ein Interface implementieren (`implements`), müssen zwangsläufig alle Methoden implementieren, die das Interface vorgibt (Vertrag). Dabei wird nur die Signatur vorgeschrieben, die eigentliche Implementierung bleibt der Klasse überlassen. Eine Klasse kann mehrere Interfaces implementieren.</span>

>>>

### Warum wir Interfaces verwenden müssen

- Oft verfügen Klassen über ähnliche Aufgaben oder Schnittstellen, ohne dass diese (sinnvoll) in einer Vererbungshierarchie abgebildet werden können.
- Klassen können aber nur von einer Superklasse abgeleitet werden. Über Interfaces lässt sich die Vererbungshierarchie *aufbrechen*.
- Interfaces definieren eine minimale öffentliche Schnittstelle, über die andere Komponenten auf die implementierenden Klassen zugreifen können.
- Diese gleiche Schnittstelle ermöglicht es Objekte unterschiedlicher Klassen einheitlich zu behandeln, da ihre öffentliche Schnittstelle (teilweise) gleich ist.

>>>

## Interfaces im Java JDK

- Die Schnittstelle `Cloneable` (Paket `java.lang`) signalisiert, dass von Objekten einer Klasse, die `Cloneable` implementiert, Kopien erstellt werden können,
- Die Schnittstelle `Serializable` (Paket `java.io`) signalisiert, dass Objekte einer Klasse, die `Serializable` implementiert, serialisiert, d. h. persistent "gespeichert" werden können (z. B. in einer Datei)
- Die Implementierung der Schnittstelle `Comparable` (Paket `java.lang`) macht Objekte durch die Implementierung der compareTo-Methode mit anderen Objekten gleichen Typs vergleichbar (Anwendung bei Suchen und Sortieren, z. B. über die Hilfsklasse `java.util.Arrays`).

>>>

## Interfaces in der GraphicsApp

### Scalable

<span class="blocktext">`Line`, `Image`, `Ellipse` und `Rect` implementieren das `Scalable`-Interface. Alle Objekte sind dadurch über die `scale`-Methode skalierbar. Die eigentliche Implementierung ist jeweils unterschiedlich, die öffentliche Interaktion ist aber die gleiche.</span>

### Resizable 

<span class="blocktext">`Ellipse`, `Image` und `Rect` implementieren das `Resizable`-Interface. Die Größe von allen Objekte kann über die Methode `setSize`

>>>

## UI-Events in der GraphcisApp

<span class="blocktext">Die Superklasse `GraphicsApp` implementiert bereits die Interfaces `GraphicsAppKeyListener` und `GraphicsAppMouseListener` und wird in den entsprechenden Methoden über Eingabeereignisse informiert. Wir können diese Methoden überschreiben um in unseren Anwendungen individuell auf *Events*  von Maus und Tastatur reagieren:</span>

``` java
 @Override
public void onKeyPressed(KeyPressedEvent event) {
	super.onKeyPressed(event);
}

@Override
public void onMousePressed(MousePressedEvent event) {
    updateCounter();
}
```

<span class="blocktext">Die Parameter der Methoden beinhalten Informationen über das Ereignis: Tasten, Position, ...</span>

>>>

### Maus-Ereignisse

<span class="blocktext">Über den Parameter vom Typ `MouseEvent` (bzw. den spezialisierten Klassen, z.B. `MousePressedEvent`) kann in den Interface-Methoden auf die Eigenschaften des Events zugegriffen werden:</span>

``` java
// mit: MouseEvent event
int cursorX = event.getX();
int cursorY = event.getY();
int mouseButton = e.getButton();
// ...
```

<span class="hint smaller">Sowohl die `Mouse`- als auch die `Key`-Methoden werden bei jedem Ereignis aufgerufen. Jeder Tastendruck und jede Mausbewegung, die innerhalb Ihrer Anwendung ausgeführt wird landet als Parameter in der entsprechenden Methoden. Für jedes Ereignis wird die jeweilige Methode einmal aufgerufen.</span>

>>>

### Tastatur-Ereignisse

<span class="blocktext">Über den Parameter vom Typ KeyEvent kann in den Interface-Methoden auf die Eigenschaften des Events zugegriffen werden:</span>

``` java
// mit: KeyEvent event
int keyCode = event.getKeyCode();
// ...
```

<span class="blocktext"></span>

| Taste | Numerischer Code | Konstante |
|-------|------------------|-----------|
| Pfeiltaste (oben) | 38 | GraphicsAppKeyEvent.VK_UP |
| Pfeiltaste (unten) | 40 | GraphicsAppKeyEvent.VK_DOWN |
| Leertaste | 32 | GraphicsAppKeyEvent.VK_SPACE |
| R | 82 | GraphicsAppKeyEvent.VK_R |
| G | 71 | GraphicsAppKeyEvent.VK_G |
| B | 66 | GraphicsAppKeyEvent.VK_B |

>>>

### Im Code auf Events reagieren (1/2)

``` java
public void onMouseMoved(MouseMovedEvent event) {
	// What happens when mouse is moved
	moveEllipse(e.getX(), e.getY());
}
```

<span class="hint smaller">In den Methoden kann auf die Parameter des Events zugegriffen werden (Was ist passiert? Wo ist es passiert?). Diese Informationen werden in der Regel an eine andere Methode Ihrer *GraphicsApp* weitergegeben und dort verarbeitet (Das Objekt, das sich für die Informationen interessiert, ist auch für deren Verarbeitung verantwortlich).</span>

>>>

### Im Code auf Events reagieren (2/2)

``` java
public void onKeyPressed(KeyPressedEvent event) {
	switch (event.getKeyCode()) {
		case KeyEvent.VK_0:
			// Key ‚0‘ pressed
			break;
		case KeyEvent.VK_1:
			// Key ‚1‘ pressed
			break;
		default:
			break;
	}
}
```

<span class="hint smaller">Über die `switch`-Konstruktion können unterschiedliche Fälle (Tasten) abgefragt werden; dazu nutzen wir die Konstanten aus der Event-Klasse. Je nach Taste kann ein anderes Verhalten (=Methode) ausgelöst werden.</span>

>>>

### Übersicht über verwendbare Events

| Ereignis | Methode | Event-Objekt | Eigenschaften |
|----------|----------------------------|--------------|--------------------------|
| Maustaste gedrückt | `onMousePressed` | `MouseClickedEvent` | `x`- und `y`-Koordinaten und gedrückte Maustaste |
| Maustaste losgelassen | `onMouseReleased` | `MouseClickedEvent` | `x`- und `y`-Koordinaten und gedrückte Maustaste |
| Mausbewegung | `onMouseMoved`  | `MouseMovedEvent` | `x`- und `y`-Koordinaten |
| Taste wird gedrückt | `onKeyPressed` | `KeyPressedEvent` | Numerische ID der Taste und deren "Inhalt" als `char` |
| Taste wird losgelassen | `onKeyReleased` | `KeyReleasedEvent` | Numerische ID der Taste und deren "Inhalt" als `char` |

>>>

## Zusammenfassung 

- Interfaces definieren verpflichtende Methodensignaturen für alle Klassen, die das Interface implementieren (vgl. Listener in der GraphicsApp) 
- Eventbasierte Anwendungen erlauben es Anwendungen, (asynchron) auf (Nutzer-)Eingaben zu reagieren 
- Für Listener in der GraphicsApp: Die jeweiligen Interface-Methoden werden bei Eintritt eines Ereignisses aufgerufen, aus dem übergebenen Event-Objekt lassen sich Details zum Ereignis auslesen (Mausposition, Code der gedrückten Taste, ...) 

>>>

### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>