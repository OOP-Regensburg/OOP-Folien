# Das Collections-Framework

<span class="subtitle">Komplexere Datenstrukturen und der bewusste Umgang mit Ausnahmefehlern</span>

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
<span class="current">Listen, Maps &amp; die Collections</span>
<span>Speicherverwaltung</span>
<span>Umgang mit Dateien</span>
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

## Pingo-Quiz

![large-image](slides/images/pingo-2020-01-21.png)

https://pingo.coactum.de/460007

>>>

## Das Programm für heute

- Der Umgang mit unvermeidbaren *Exceptions*
- Komplexere Datenstrukturen: *Maps* und das *Collections*-Framework
- Praktischer Umgang mit *HashMaps*

>>>

## Ausblick auf die nächsten Wochen

- **Vergessen Sie nicht die Klausuranmeldung in Flexnow vom 1. bis zum 9. Februar**!
- In den Übungen dieser Woche bitten wir um Ihre Hilfe: Wir möchten anonyme Interaktionsdaten über den Umgang mit der IntelliJ-IDE sammeln.
- In der nächsten Woche werden Vorlesung und Übung evaluiert: Bitte bringen Sie Laptop oder Smartphone mit.

>>>

# Der Umgang mit *Exceptions*

>>>

### Java kommuniziert Fehler über Exceptions

![large-image](slides/images/debugging-example-02.png)

>>>

### Exceptions vs Errors

<span class="blocktext">Wenn Java auf einen Fall stößt, in dem es nicht normal weiterarbeiten kann, wird eine Exception verursacht: die relevante Methode wirft (*throws*) eine *Exception* (Ausnahme). Eine Ausnahme ist, im Unterschied zu einem *(terminal) error*, dabei eine zwar außergewöhnliche, aber in der Regel korrigierbare Situation während des Programmablaufs:</span>

- Java verlangt von Programmen bzw. den ProgrammiereInnen, mit bestimmten Ausnahmen umgehen zu können.
- Exceptions sind eine Art Notfallplan: Wenn alles gut geht, läuft das Programm wie gehabt weiter. Wenn etwas schief geht, kümmert sich das Programm um diese Ausnahme.

>>>

### Der Umgang mit Exceptions

<span class="blocktext">**Exceptions abfangen und verarbeiten**: Verschieden Stellen des eigenen oder fremden Code können Ausnahmen auslösen. Dies wird über entsprechende Syntaxelemente kommuniziert. Nutzen wir diese Stellen, *müssen wir im aufrufenden Code einen Plan für das Abfangen dieser Fehlermöglichkeit definieren*.</span>

<span class="blocktext">**Exceptions erzeugen:** In unserem eigenen Code können wir Exceptions einsetzten, um Ausnahmefälle zu definieren und Möglichkeiten zum Umgang mit diesen anzubieten.</span>

<span class="hint">Der übermäßige Einsatz von *Exceptions* ist nicht unumstritten: Häufig bietet es sich an, Fehlersituationen direkt zu verarbeiten statt nur nach außen zu kommunizieren.</span>

>>>

### Typische Fälle für "kritische" Stellen

- Arbeit mit Dateien: Was passiert, wenn die gewünschte Datei nicht vorhanden ist?
- Netzwerkkommunikation: Was passiert, wenn keine Internetverbindung aufgebaut werden kann?
- Nutzereingaben: Was passiert, wenn zur Laufzeit nicht-kompatible Eingaben getätigt werden?

<span class="hint">Im eigenen Code können wir die vorgegebenen Fehlerfälle erweitern oder ergänzen, um die *Exceptions* an den konkreten Anwendungsfall anzupassen, z.B. in dem statt einer `FileNotFound`-Meldung ein inhaltlich deutlicherer `ConfigurationFileNotFound`-Hinweis wird.</span>

>>>

### Kritische Stellen ausprobieren

<span class="blocktext">Code-Stellen, die unter Umständen einen Fehler oder *Exception* verursachen könnten, müssen in Java entsprechend gekennzeichnet werden. Die *Runtime* versucht dann, den Code auszuführen. Ob eine Methode/Klasse eine *Exception* auslösen könnte, steht in der Dokumentation bzw. wird Ihnen von IntelliJ mitgeteilt:</span>

![large-image](slides/images/exceptions-scanner.png)
<p class="source">Oracle Java Dokumentation</p>

>>>

### Try & Catch

<span class="blocktext">Kritische Stellen werden explizit über einen `try`-Block gekennzeichnet. Für den *Fall der Fälle* wird eine mögliche Fehlerbehandlung im `catch`-Block formuliert:</span>

``` java
// Erstellt einen StringJoiner (StringBuilder mit automatisch eingefügten Trennzeichen)
// Hier wird nach jedem "Eintrag" ein plattformspezifischer Zeilenumbruch eingefügt
StringJoiner out = new StringJoiner(System.getProperty("line.separator"));
try {
	// Beim Erstellen des Scanners mit der übergebenen Datei kann eine Ausnahme 
	// auftreten, wenn die angegebene Datei nicht gefunden wird.
	Scanner in = new Scanner(new File("input.txt"));
	while (in.hasNext()) {
    	out.add(in.nextLine());
    }
// Tritt beim Ausführen des Codes einer der vorgesehenen Fehler auf, wird dieser Code 
// ausgeführt. 
} catch (FileNotFoundException e) {
	e.printStackTrace();
}
```

>>>

### Das Exceptions-Objekt

``` java
try {
	// Dangerous stuff: z.B. Datei öffnen, lesen, schließen
} catch (Exception e) {
  // Umgang mit der möglichen Fehlersituation
}
```

<span class="hint">Exceptions werden als Objekte kommuniziert (Superklasse `Exception`), die Informationen zum jeweiligen Fehler enthalten.</span>

>>>

### Der besondere Fehler: Runtime Exceptions

<span class="hint">Bestimmte Exceptions (solche, die von der Klasse RuntimeExceptions abgeleitet werden) behandeln häufig auftretende Fehler und müssen nicht explizit durch try & catch abgefangen werden (der Code würde sonst sehr unübersichtlich werden). Die Fehler treten trotzdem auf und können zu Abstürzen führen.</span>

![large-image](slides/images/exceptions-doc.png)
<p class="source">Oracle Java Dokumentation</p>

>>>

### Komplexe Datenstrukturen

![large-image](slides/images/komplexe-datenstrukturen.png)
<p class="source">http://www.milbo.users.sonic.net/ra/dstruct.html</p>

>>>

### Ein kurzer Rückblick auf Interfaces

1. Interfaces werden wie Klassen in Dateien mit der Endung `.java` definiert und bestehen aus einer Liste von öffentlichen Konstanten und Methodensignaturen (!).
2. Bei der Definition einer Klasse können über das `implements`-Schlüsselwort ein oder mehrere Interfaces angeben werden: Die Klasse *implementiert* dann diese Interfaces.
3. Implementiert eine Klasse ein Interface, müssen innerhalb der Klasse alle im Interface enthaltende Methoden mit der korrekten Signatur und einem frei wählbaren Rumpf definiert werden.
4. Implementiert eine Klasse ein Interface, können Instanzen der Klasse als Instanzen der Interface behandelt werden.

>>>

## Interfaces in der GraphicsApp

**`Scalable`**

<span class="blocktext">`Line`, `Image`, `Ellipse` und `Rect` implementieren das `Scalable`-Interface. Alle Objekte sind dadurch über die `scale`-Methode skalierbar. Die eigentliche Implementierung ist jeweils unterschiedlich, die öffentliche Interaktion ist aber die gleiche.</span>

**`Resizable`**

<span class="blocktext">`Ellipse`, `Image` und `Rect` implementieren das `Resizable`-Interface. Die Größe von allen Objekte kann über die Methode `setSize`

>>>

### Interfaces als Beispiel für Polymorphismus in Java

<span class="blocktext smaller">Polymorphismus (altgriechisch für *Vielgestaltigkeit*) ist ein Programmier-Konzept, das es erlaubt, den Inhalt einer Variable – abhängig von seiner aktuellen Verwendung – als Wert unterschiedlicher Typen zu benutzen.</span>

<span class="blocktext smaller">`Scalable` und `Resizable` stellen abstrakte, allgemeinen Datentype dar. Alle Instanzen von Klassen, die die Interfaces implementieren, können als solche verwendet werden. Zugänglich sind dann aber nur die jeweiligen Interface-Methoden!</span>

``` java
Scalable obj;
obj = new Rect(0, 0, 100, 100);
obj.scale(2, 2);

obj = new Ellipse(0, 0, 100, 100);
obj.scale(2, 2);
```

<span class="hint smaller">Zur Laufzeit wird die jeweils passende Implementierung der Methode genutzt, also die, die in der Klasse der aktuell in `obj` gespeicherten Instanz definiert ist.</span>

>>>

# Komplexere Datenstrukturen

>>>

### Komplexere Anwendungen erfordern komplexere Datenstrukturen und -Modelle

![large-image](slides/images/phonebook-1.png)
![large-image](slides/images/phonebook-2.png)

Wie bilden wir Daten für z.B. eine Telefonbuch-Anwendung ab?

>>>

### Dateien speichern ... und wiederfinden in einem Telefonbuch (1/2)

``` java
public class Entry {

    private String name;    
    private String number;

    public Entry(String name, String number) {
        this.name = name;
        this.areaCode = areaCode;
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public String getNumber() {
        return number;
    }

}

```

>>>

### Dateien speichern ... und wiederfinden in einem Telefonbuch (2/2)

``` java
ArrayList<Entry> phonebook = new ArrayList<Entry>();

public Entry getEntryByName(String name) {
	for(Entry entry: phonebook) {
		if(entry.name.equals(name)) {
			return entry;
		}
	}
	return null;
}

```

<span class="blocktext larger">**Geht das besser?**</span>

>>>

### Datenstrukturen mit Schlüsseln: Telefonbücher

![large-image](slides/images/hashmaps-example-1.png)

<span class="blocktext">In einem Telefonbuch werden Telefonnummern und andere Informationen durch Namen referenziert.</span>

>>>

### Datenstrukturen mit Schlüsseln: Wörterbücher

![large-image](slides/images/hashmaps-example-2.png)

<span class="blocktext">In einem Wörterbuch werden Definitionen zu Wörtern zugeordnet.</span>

>>>

## Maps in Java

<span class="blocktext">*Map* ist ein Interface, dass Methoden für Datenstrukturen mit besonderen Aufgaben vorgibt:</span>

- Speichern von mehreren Werten (Objekten) als einzelne `value`
- Zuordnung eines `key` zu jedem `value`
- Ermöglichen des Zugriffs auf gespeicherter Werte über den `key`
- Schlüssel und Werte müssen Objekte sein!

>>>

### Maps in Java: Wörterbuch

<span class="blocktext">Die Implementierung eines Wörterbuch kann in Java einfach über das `Map`-Interface oder eine entsprechende, vorgegebene Datenstruktur erfolgen:</span>

- Als `key` werden die einzelnen Wörter, z.B. als Strings verwendet.
- Den `value` stellen die Definition des Worts, z.B. als String, Liste von Strings oder komplexe Objekte dar.
- Durch die Verknüpfung von Wort und Definition kann bei bekanntem Schlüssel einfach nach der zugehörigen Definition gesucht werden.

>>>

### Aber: Map ist "nur" ein Interface

<span class="blocktext">Irgendeine Klasse muss das Map-Interface implementieren, um die gewünschte Funktionalität bereitzustellen. Ein Beispiel dafür ist die `HashMap`-Klasse:</span>

- Die Klasse `HashMap` implementiert `Map`.
- Die *HashMap* ist generisch formuliert (Vgl. `ArrayList`>) d.h. die Datentypen für Wert und Schüssel (!) müssen bei Objekterzeugung angegeben werden: Ein Typ für `key`, ein Typ für `value`.
- *HashMaps* sind schnell: Zeiten für das Ablegen und Auslesen von Elementen sind konstant niedrig (unabhängig von der Größe der *HashMap*).
- *HashMaps* wissen nichts über die Reihenfolge ihres Inhalts.

>>>

### HashMaps: Erstellen

``` java
HashMap<String, String> dict = new HashMap<String, String>();

HashMap<String, Entry> phonebook = new HashMap<String, Entry>();
```  

<span class="hint">HashMaps sind Objekte, die über einen Konstruktor erzeugt werden und über ein Set an Methoden verwendet werden!</span>

>>>

### HashMaps: Daten einfügen

``` java
dict.put("Regensburg", "Eine Stadt in der Oberpfalz.")

Entry entry = new Entry("Alexander Bazo", "1234");
phonebook.put(entry.getName(), entry);

// Achtung: Das ist kein gutes Beispiel, da wir auch einfach die Nummer im
// bereits gespeicherten Eintrag ändern könnten ;)
Entry newEntry = new Entry("Alexander Bazo", "4958");
// Gibt den ursprünglich assoziierten Wert zurück
Entry oldEntry = phonebook.put(newEntry.getName(), newEntry);

```

<span class="hint">Die Methode `put` speichert den übergebenen Wert (zweiter Parameter) in der *Map* und ordnet ihm den übergebenen Schlüssel (erster Parameter zu. Falls der Schlüssel bereits einem anderen Wert zugeordnet war, wird dieser überschrieben und die Methode gibt den ursprünglich assoziierten Wert zurück.</span>

>>>


### HashMaps: Daten auslesen

``` java
String infoRegensburg = dict.get("Regensburg");

Entry entry = phonebook.get("Alexander Bazo");	

```

<span class="hint">Die Methode `get ` liest den Wert aus der *Map* aus, der mit dem übergebenen Schlüssel assoziiert ist. Falls kein entsprechender Eintrag gefunden wird, wird `null` zurückgegeben. Die Rückgabe entspricht dem bei Initialisierung festgelegtem Wert.</span>

>>>

### HashMaps: Weitere Methoden

- Daten entfernen: `map.remove(key)`
- Alle Daten entfernen: `map.clear()`
- Alle Daten auslesen: `map.values` (Gibt eine *Collections* aller Werte(!) zurück)
- Vorhandensein von Schlüsseln oder Werten prüfen: `map.containsKey(key)` bzw. `map.containsValue(value)`
- Länge bestimmen: `map.size()`

>>>

### Caveat: Der Umgang mit HashMaps (1/2)

<span class="blocktext">HashMaps erlauben den schnellen Zugriff auf die gespeicherten Werte, wenn der jeweilige Schlüssel bekannt ist. Sie eignen sich gut für *look up*-Operationen. Ein systematischer Zugriff auf alle Daten z. B. in sortierter Reihenfolge ist nicht wirklich möglich.</span>

- Verwenden Sie ausschließlich *Immutables* als Schlüssel
- Vermeiden Sie es, Schlüssel-Objekte zu "verlieren"

>>>

### Caveat: Der Umgang mit HashMaps (2/2)

- Überschreiben Sie bei selbst-erstellten Schlüssel-Klassen unbedingt die `hashCode`- und `equals`-Funktion, um vollständige Kontrolle über die Verwendung als Schlüssel zu erhalten
- Wenn `hashCode` nicht überschrieben wird, wird die *Default*-Implementierung verwendet: In der Regel wird dabei die Speicheradresse ge-hasht
- Strings können dagegen unproblematisch als Schlüssel verwendet werden


>>>

# Collections

>>>

### Das Java Collections Framework (1/2)

<blockquote>A collections framework is a unified architecture for representing and manipulating collections. All collections frameworks contain the following.<br /><br />
<b>Interfaces:</b> These are abstract data types that represent collections. Interfaces allow collections to be manipulated independently of the details of their representation. In object-oriented languages, interfaces generally form a hierarchy.</blockquote>


>>>

### Das Java Collections Framework (2/2)

<blockquote>
<b>Implementations:</b> These are the concrete implementations of the collection interfaces. In essence, they are reusable data structures.<br /><br />
<b>Algorithms:</b> These are the methods that perform useful computations, such as searching and sorting, on objects that implement collection interfaces. The algorithms are said to be polymorphic: that is, the same method can be used on many different implementations of the appropriate collection interface. In essence, algorithms are reusable functionality.
</blockquote>
<p>http://docs.oracle.com/javase/tutorial/collections/intro/index.html</p>


>>>

### Hierachien im Collection-Framework

![large-image](slides/images/collections-1.png)

<span class="blocktext">Alle Klassen, die eines der dargestellten Interfaces implementieren, sind **Collections**.</span>

>>>

### Methoden des Collection-Frameworks
| | |
|---------|--------------|
| `boolean add(E e)` | *Appends the specified element to the collection. Returns true if this collection changed as a result of the call.* |
| `boolean remove(E e)` | *Removes the first occurrence of the specified element from this list, if it is present; the value is true, if a match is found.*|
| `void clear()` | *Removes all values from the collection.*|
| `int size()` | *Returns the number of values in the collection.*|
| `boolean contains(Object o)` | *Returns true if this collection contains the specified element.* |
| `boolean isEmpty()` | *Returns true if this collection contains no elements.* |
| `Iterator iterator()` | *Returns an iterator that allows clients to step through the values in the collection.* |

<p class="source">Oracle Java Dokumentation</p>

>>>

## Iteration über Collections

<span class="blocktext">Iteratoren erlauben das schrittweise "Durchgehen" von (unsortierten) Elementmengen. Der konkrete Iterator wird von der Komponente bereitgestellt, die die Daten verwaltet (z.B. der *ArrayList* oder der *HashMap*)</span>

- Der Iterator ist eine Alternative zur `for`-Schleife
- Alle *Collections* implementieren die Methode `iterator`
- Die `iterator`-Methode gibt den Datenbestand der jeweiligen *Collections* als iterierbare Elementliste zurück

>>>

## Iteration über Collections: ArrayList

``` java
// Erstellen und Befüllen der Liste
ArrayList<String> nameList = new ArrayList<String>();
nameList.add("Bob");
nameList.add("Alice");

// Erzeugen des Iterators
Iterator<String> nameIterator = nameList.iterator();
// Verarbeitung aller Elemente, die vom Iterator zurückgegeben werden
while (nameIterator.hasNext()) {
	System.out.println(nameIterator.next());
}
```

>>>

## Iteration über Collections: KeySets von HashMap

<span class="blocktext">HashMaps sind nicht Teil der *Collections*-Hierarchie und erzeugen keinen Iterator für die gespeicherten Daten. HashMaps können aber ein `Set` mit allen ihrer *Keys* zurückgeben, das dann wiederum einen Iterator erzeugen kann (Sets sind Teil der Collections-Hierarchie!).</span>

``` java
Set<String> nameSet = phoneBook.keySet();
Iterator<String> nameIterator = nameSet.iterator();
while (nameIterator.hasNext()) {
	String name = nameIterator.next();
	System.out.println("Name: " + name);
}

```

>>>

### Maps sind nicht Teil des Collection-Frameworks

![left-side](slides/images/collections-2.png)
<span class="image-description">*HashMaps* sind keine *Collections*, da das Interface `Collection` nicht implementiert wird. Der Sinn von einer *Interface*-basierten Gruppierung von Datenstrukturen zeigt sich hier noch deutlicher: Durch das einheitliche *Interface* sind beide Varianten austauschbar verwendbar. Der Unterschied liegt in der jeweiligen Implementierung der Datenspeicherung und des entsprechenden, internen Zugriffs.</span>

>>>


## Zusammenfassung

- Vorhersehbare, potenzielle Fehler werden in Java über `Exceptions` abgefangen.
- Kritische Stellen, solche an denen möglicherweise `Exceptions` erzeugt werden können, werden im Code durch `try ... catch`-Konstrukte gesichert.
- `HashMaps` speichern Schlüssel-Wert Paare, Werte können über einen `Key` aus einer *HashMap* abgefragt werden.
- Alle Klassen der *Collections*-Hierarchie (d.h. alle Klassen, die das Interface `Collection` implementieren) stellen einen Iterator zur Verfügung, mit dem sich alle Datensätze der *Collection* iterieren lassen.

>>>

### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>