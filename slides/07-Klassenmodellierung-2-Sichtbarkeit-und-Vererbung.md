# Klassenmodellierung 2: Sichtbarkeit und Vererbung

<span class="subtitle">Komplexe Zusammenhänge durch Klassenhierarchien darstellen.</span>

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
<span class="current">Vererbung &amp; Sichtbarkeit</span>
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

![large-image](slides/images/pingo-2019-11-26.png)

https://pingo.coactum.de/567100

>>>

## Das Programm für heute

- 5-Minuten-Themen: Objekte als Parameter verwenden und die Dokumentation von Klassen
- Klasen und Vererbung
- Klassen und Komposition

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

<span class="hint smaller">Objekte werden **nicht** als Kopien weitergegeben sondern als Verweise (Referenzen) auf die *Originale*. Wenn wir ein Objekt (Parameter) in einer Methode ändern, ändern wir das Original. Technisch gesehen wird auch hier konkreter Wert, nämlich die "Adresse" des übergeben, Java arbeitet immer mit dem *Call by Value*-Prinzip.</span>

>>>

### Konsequenzen des *Call by Value*-Ansatzes in Java (1/2)

- Wird ein Objekt an eine Methode übergeben, befindet sich in der Parameter-Variable die Adresse (im Speicher) an der das Objekt bzw. seine Methoden (nicht wirklich) und Eigenschaften gespeichert (die schon) werden.
- Wenn wir die Eigenschaften des Objekts über die Parameter-Variable ändern, ändern wir das ursprüngliche Objekt.
- Wenn wir die Parameter-Variable überschreiben, bleibt das ursprüngliche unberührt (wir ändern dann nur einen von mehreren der Orte, an denen die Adresse des Objekts gespeichert ist).

>>>

### Konsequenzen des *Call by Value*-Ansatzes in Java (2/2)

``` java
/**
 * LPs werden für das äußere Objekt gesetzt, die Initialisierung des neuen Objekts 
 * ist aber auf den Scope beschränkt.
 */
private void modifyStudent(Student student, int lp) {
	System.out.println("Modifying Students LPs");
	student.addLP(lp);
	student = new Student("A new User", 4.0);
}
```

<span class="hint smaller">Wir greifen dieses Thema im späteren Verlauf der Vorlesung beim Thema *Speicherverwaltung* noch einmal auf.</span>

>>>

# Klassen mit JavaDoc kommentieren und dokumentieren

>>>

## Kommentare in Java

<span class="blocktext">Kommentare dienen der zusätzlichen Beschreibung von Quelltext. Sie haben keine funktionale sondern eine dokumentierende Bedeutung:</span>

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

### Kommentare mit JavaDoc strukturieren 

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

<span class="hint smaller">Das [JavaDoc-Format](https://de.wikipedia.org/wiki/Javadoc) erlaubt die gezielte Beschreibung einzelner Code-Bestandteile (z.B. Parameter oder Rückgabewerte). Auf Basis der Kommentare kann eine Übersicht (Dokumentation) des Programms erstellt werden kann (Vgl.: [GraphicsApp-Dokumentation](https://oop-regensburg.github.io/GraphicsApp-Reborn-Library/index.html).</span>

>>>

# Rückblick: Klassenmodellierung am Beispiel *Studierender*

>>>

## Wir modellieren Studierende als JAVA-Klassen

<span class="blocktext">Die Klasse `Student` soll Gemeinsamkeiten aller Studierende abbilden. Ein möglicher Einsatzzweck ist ein Computersystem zur Verwaltung aller Studieren einer Universität. Wir modellieren Klassen (in der Regel) spezifisch für einen Anwendungsfall. D.h. wir beachten und beschreiben die Eigenschaften der Objekte, die relevant für den Problemkontext sind. Unsere `Student`-Klasse umfasst z.B. Name, Matrikelnummer, Durchschnittsnote und aktuelle Anzahl an Leistungspunkte, da diese im Kontext *Universität*, z.B. für die Prüfungsverwaltung relevant sind.</span>

Wir beschreiben **nicht** alle denkbaren, strukturellen Übereinstimmungen von Studierenden (*Hobbies*, *Sehstärke*, *Lieblingsessen*, ...).

>>>

### Interner Bereich (Private-Sichtbarkeit)

<span class="blocktext">Private Methoden, Konstanten und Instanzvariablen: Nur die Instanzen der Klassen selbst haben Zugriff.</span>

- Instanzvariable für den Namen
- Instanzvariable für die aktuelle Durchschnittsnote
- Instanzvariable für eine ID, z.B. die Matrikelnummer
- Instanzvariable für die aktuelle Anzahl an Leistungspunkten

>>>

### Externe Schnittstelle (Public-Sichtbarkeit)

<span class="blocktext">Private Methoden, Konstanten und Instanzvariablen: Nur die Instanzen der Klassen selbst haben Zugriff.</span>

- Getter-Methode für Zugriff auf den Namen
- Getter-Methode für Zugriff auf die aktuelle Durchschnittsnote
- Getter-Methode für Zugriff auf die ID
- Getter-Methode für Zugriff auf die aktuelle Anzahl an Leistungspunkten
- Setter-Methode zum Hinzufügen neuer Leistungspunkte

>>>

### Das Ergebnis: Eigenschaften und Konstruktor der Klasse

``` java
public class Student {
	private String name;
	private double grade;
	private int id;
	private int lp;

	private static int nextID = 1;

	public Student(String name, double grade) {
		this.name = name;
		this.grade = grade;
		this.lp = 0;
		this.id = nextID;
		nextID++;
	}

	// Siehe nächste Folie
}
```

>>>

### Das Ergebnis: Öffentliche Schnittstelle der Klasse

``` java
public class Student {
	
	// siehe vorherige Folie

	public String getName()  {
		return name;
	}
	public double getGrade() {
		return grade;
	}
	public int getID() {
		return id;
	}
	public int getLP() {
		return lp;
	}
	public void addLP(int lp) {
		this.lp += lp;
	}
}
```

>>>

# Klassen und Vererbung

>>>

## Klassenhierarchien

![large-image](slides/images/klassenhierarchie.png)

<span class="blocktext">Der Vererbungsmechanismus erlaubt uns das hierarchische Gliedern von Klassen und die Modellierung von Gemeinsamkeiten und Spezialisierungen.</span> 

>>>

## Super- und Subklassen

<span class="blocktext">Student ist die **Superklasse** (auch *Oberklasse*). `BachelorStudent`, `MasterStudent` und `PhdStudent` erben von dieser Klasse: Sie sind **Subklassen** (auch *Unterklassen*) von `Student`. Dabei übernehmen Sie die Eigenschaften und Methoden der *Superklassen*. In den *Subklassen* können (öffentliche) Methoden der *Superklasse* überschrieben werden und neue Methoden und Eigenschaften ergänzt werden.</span>

<span class="hint">Eine Subklasse ist eine Erweiterung oder **Spezialisierung** der Superklasse. Umgekehrt kann man eine Oberklasse als **Generalisierung** ihrer Unterklassen ansehen.</span>

>>>

### Vererbung im Code einleiten

``` java
public class BachelorStudent extends Student {

	// Spezialisierte Implementierung für Bachelor-Studierende

}
```

<span class="blocktext">Über das Schlüsselwort `extends` wird die Vererbung eingeleitet (Vgl. `GraphicsApp` und `BouncerApp`). Im *Body* der Klasse kann dann auf alle **öffentlichen** Variablen und Methoden der Superklasse zugegriffen werden.</span>

<span class="hint">*Private* Methoden und Eigenschaften werden nicht vererbt. Vererbte, öffentliche Methoden, die auf solche Bereiche zugreifen, funktionieren auch in der Unterklasse. Der direkte Zugriff auf z.B. eine *private int*-Variable der *Superklasse* in der Unterklasse **nicht** möglich.</span>

>>>

## Implizite Vererbung in Java (1/2)

<span class="blocktext">Alle Klassen in Java (auch unsere eigenen) werden automatisch  in eine bestehende Klassenhierarchie eingebunden. Deren Ausgangspunkt ist die Klasse `Object`. Lassen wir unsere Klassen nicht explizit von einer anderen Klasse erben, erstellen wir eine direkte Unterklasse von `Object`. Da Vererbung auch über mehrere Hierarchieebenen funktioniert, steht am Anfang einer beliebig langen Vererbungskette immer die `Object`-Klasse: "*Class Object is the root of the class hierarchy. Every class has Object as a superclass. All objects, including arrays, implement the methods of this class.*" (Quelle: Oracle-Dokumentation (Java 10)).</span>

Dadurch verfügt jede Klasse bzw. jedes Objekt über bestimmte vorgegebene Methoden.

>>>

## Implizite Vererbung in Java (2/2)

![large-image](slides/images/root-object.png)

<span class="hint">Grundsätzlich ist es keine schlechte Idee, für jede neu definierte Klasse `toString()` zu überschreiben. Man legt damit fest, wie ein Objekt als Zeichenkette darzustellen ist, eine Funktion, die sehr häufig benötigt wird. Z.b. bei der Suche nach Fehlern!</span>

>>>

### Vererbung als Mittel der Spezialisierung 

<span class="blocktext smaller">Oft wollen Sie eine vorhandene Klasse mit deren öffentlicher Schnittstelle als Grundlage für eine neue, spezialisierte Variante nutzen.</span>

**Beispiel: Master-Studierende**

<span class="blocktext smaller">Wir möchten eine spezielle Klasse für die Verwaltung von Master-StudentInnen erstellen:</span>
- Master-StudentInnen soll alles können, was StudentInnen können 
- Über 180 Leistungspunkte aus dem BA-Studium verfügen
- In der `toString()`-Methode angeben, dass es sich um einen bzw. eine Master-StudentIn handelt

<span class="hint smaller">Bei der Frage, ob eine neue Komponente in eine bestehende Klassenhierarchie eingegliedert werden soll, hilft der "*is a*"-Test: *MasterStudent is a Student* (Unterklasse *is a* Oberklasse)? Wenn die Frage mit *ja* beantwortet werden kann, ergibt die Spezialisierung hier Sinn.</span>

>>>

#### Die Klasse MasterStudent

``` java
// Unsere Klasser erweitert/erbt von die/der Klasse Student
public class MasterStudent extends Student {

	public MasterStudent(String name, double grade) {
		// Wir verwenden den vererbten Konstruktor für die allgemeine Initialisierung
		super(name, grade); 
		// Dann erfolgt die spezielle Initialisierung
		addLP(180);
	}

	// Wir überschreiben die schon vorhandenen Methode toString 
	// @Override ist eine optionale Anmerkung für die Laufzeitumgebung
	@Override
	public String toString() {
		// Das Schlüsselwort super verweist immer auf die Superklasse und 
		// erlaubt Zugriff auf deren Methoden und Eigenschaften
		return super.toString() + " (MasterStudent)";
	}
}
``` 

>>>

# Klassen und Komposition

>>>

## Vererbung in der GraphicsApp

![large-image](slides/images/klassenhierarchie-graphicsapp.png)

<span class="blocktext">Alle Subklassen erben von `GraphicsObject` und nutzen (oder überschreiben) bestehende Methoden dieser *Superklasse*. Der Umgang mit ihnen ist daher ähnlich, da die öffentliche Schnittstelle von der Superklasse übernommen wird: `getXPos()`, `getYPos()`, ...</span>

>>>

### GraphicsApp-Hinweise: Bounding Box

![small-image](slides/images/bounding-box.png)

<span class="hint">Alle *GraphicsObjects* verfügen über Methoden, um die Ränder eines Rechtecks (die *Bounding Box*) zu ermitteln, welches das Objekt umschließt. Diese Box kann sinnvoll für eine (angenäherte) Kollisionsabfrage genutzt werden.</span>

>>>

### GraphicsApp-Hinweise: Bilder 

- Bilder werden in der *GraphicsApp* über die Klasse `Image` repräsentiert und werden (Vgl. *Vererbung*) wie die anderen *GraphicsObjects* positioniert und bewegt.
- Beim Erzeugen des Bildes (Konstruktor) muss der relative Pfad zur Ausgangsdatei angegeben werden. Nach dem Erzeugen hat das Bild immer die Größe der Ursprungsdatei, kann aber skaliert werden.
- Die Ausgangsdateien werden in einem Ordner im Projektverzeichnis gespeichert und von dort referenziert: `Image bird = new Image(0, 0, "data/bird.png");`

>>>

## Komposition vs. Vererbung (1/3)

<span class="blocktext">Komposition beschreibt den Vorgang, einer Klasse Instanzen anderer Klassen als *Member* bzw. Eigenschaft zur Verfügung zu stellen. Intern kann dann auf die Funktionalität der Klassen zugegriffen werden. Komposition ist häufig eine sinnvollere Alternative zur Vererbung.</span>

***Favor Composition over Inheritance!***

>>>

## Komposition vs. Vererbung (2/3)

`BouncingBall`-Klasse

![small-image](slides/images/bouncing-ball.png)

>>>

## Komposition vs. Vererbung (3/3)

<span class="blocktext">**Ist Vererbung (Ellipse) hier praktikabel?** Nein, da das Zeichnen des Kreises nur eine Teilaufgabe ist. Unser `BouncingBall` wird als eigene Klasse definiert, die Instanzen von `Ellipse`, `Rectangle` und `Label` nutzt (*Komposition* ). Der *has a* -Test zeigt schnell, das Komposition die besser Wahl ist.</span>

>>>

## Komposition in der GraphicsApp: Compound

- Das `Compound` erlaubt es, mehrere graphische Objekte zu kombinieren, sodass sie sich wie ein *GraphicsObject*  verhalten und als Einheit manipuliert werden können.
- Objekte werden dem `Compound` über Methode `add()` bzw. `addRelative()` hinzugefügt.
- Die Menge der im `Compound` gespeicherten Objekte kann damit als einzelnes *GraphicsObject* behandelt werden: z.B. sorgt ein Aufruf der `draw`-Methode des `Compound` dafür, dass alle Objekte gezeichnet werden.

>>>

## Zusammenfassung 

- Objekte verhalten sich anders als primitive Datentypen, wenn Sie als Parameter von Methoden verwendet werden.
- Mittels Vererbung lassen sich bestehende Klassen erweitern – Methoden und Variablen der Superklasse mit Sichtbarkeit public stehen der Subklasse zur Verfügung 
- Overriding bezeichnet das überschreiben bestehender Methoden in der Subklasse 

>>>

### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>