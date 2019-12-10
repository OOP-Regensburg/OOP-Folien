# Einfache String- und Textverarbeitung

<span class="subtitle">Repräsentation und Modifikation von Texten in Java</span>

<span class="blocktext">Struktur und Inhalt des Kurses wurden 2012 von Markus Heckner entwickelt. Im Anschluss haben Alexander Bazo und Christian Wolff Änderungen am Material vorgenommen. Die aktuellen Folien wurden von Alexander Bazo erstellt und können unter der [MIT-Lizenz](https://raw.githubusercontent.com/OOP-Regensburg/OOP-Folien/master/LICENSE) verwendet werden.</span>

>>>

### Aktueller Semesterfortschritt (Woche 9)

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
<span class="current">String- &amp; Textverarbeitung</span>
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

![large-image](slides/images/pingo-2019-12-10.png)

https://pingo.coactum.de/442924

>>>

## Das Programm für heute

- Zustände und Optionen durch Enums abbilden
- Repräsentation von Zeichen über den `char`-Datentyp
- Zeichenketten mit Strings abbilden und modifizieren
- Implementieren einer wiederverwendbaren *Utility*-Klasse für die Textverarbeitung

>>>

# Enumeration

>>>

### Wie repräsentieren wir Optionen im Computer?

![large-image](slides/images/enums-overview.png)

<span class="hint">Zur internen Verarbeitung (Rechnen, vergleichen, *switchen*, ...) bietet es sich an, diese Werte als Ganzzahlen zu speichern. Jeder Option wird eine Zahl zu geordnet.</span>

>>>

## Beispiel: Konstanten (1/2)

``` java
public static final int YES = 0;
public static final int NO = 1;
public static final int MAYBE = 2;
public static final int I_DONT_KNOW = 3;
```

<span class="blocktext">Wir benutzten Konstanten (`int`), um jedem Status einen eindeutigen Wert zu zuweisen. Im Code kann der Programmierer die Werte anhand des Namens identifizieren. Intern kann der Computer mit den Zahlen arbeiten. Die Bezeichner erlauben semantischen, gut lesbaren Code:</span>

``` java
if(selectedOption == I_DONT_KNOW) {
	// do something
}
```

>>>

## Beispiel: Konstanten (2/2)

<span class="blocktext">Bei der Verwendung von `int`-Konstanten, stoßen wir auf ein Problem: Variablen können mit Werten belegt werden, die nicht vorgesehen sind, z.B. `selectedOption = 4`. Die Konstanten repräsentieren nur Zahlen. Bis auf den Namen gibt es keine Möglichkeiten, den Inhalt zu beschreiben: `System.out.println(selectedOption)` gibt `3` aus.</span>

- Die Abbildung von Zuständen durch Konstanten ist unzureichend vor Fehlersituationen geschützt.
- Die Verwendung von `int`-Werten macht den Code übersichtlicher und erleichtert das *Verrechnen* von Werten, ist jedoch wenig informativ.

>>>

## Beispiel: Enums (1/2)

``` java
public enum Option {
	YES,
	NO,
	MAYBE,
	I_DONT_KNOW
}
```

<span class="hint">*Enums* (*Enumeration Types*) stellen einen besonderen Datentyp dar, der das Erstellen eines abgeschlossenen Werteraums für entsprechende Variablen ermöglicht. Mit *Enums* können wir eine Liste an möglichen Optionen erstellen. Der Name des *Enums* wird als Datentyp für die entsprechenden Variablen verwendet. Die einzelnen Werte werden kommasepariert angegeben. Jeder Eintrag hat einen individuellen Ganzzahlwert (beginnend bei `0`) und einen eindeutigen Namen (`String`).</span>

>>>

## Beispiel: Enums (2/2)

``` java
// Der Zugriff auf die Werte erfolgt über die Enum-"Klasse"
Option selectedOption = Option.MAYBE;

// Hier wird der Name (MAYBE) der Option als Text ausgegeben
System.out.println(selectedOption);		
	
// Compilerfehler: Der Wert `42` ist kein gültiger Eintrag für die Enum-Variable	
selectedOption = 42;
```

>>>

# Einzelne Zeichen: Char und ASCII

>>>

## Chars

<span class="blocktext">Der primitive Datentyp `char` dient in Java dem Speichern eines einzelnes Zeichen. Die Klasse `Character` bündelt Methoden, mit denen diese Zeichen verarbeitet werden können.
Ein `String` besteht intern (*Information Hiding*) aus einem *Array* von `char`.</span>


<ul class="arraycontent">
	<li class="element">
		<span class="value">O</span>
		<span class="index">0</span>
	</li>
	<li class="element">
		<span class="value">O</span>
		<span class="index">1</span>
	</li>
	<li class="element">
		<span class="value">P</span>
		<span class="index">2</span>
	</li>
	<li class="element">
		<span class="value"> </span>
		<span class="index">3</span>
	</li>
	<li class="element">
		<span class="value">i</span>
		<span class="index">4</span>
	</li>
	<li class="element">
		<span class="value">s</span>
		<span class="index">5</span>
	</li>
	<li class="element">
		<span class="value">t</span>
		<span class="index">6</span>
	</li>
	<li class="element">
		<span class="value"> </span>
		<span class="index">8</span>
	</li>
	<li class="element">
		<span class="value">t</span>
		<span class="index">9</span>
	</li>
	<li class="element">
		<span class="value">o</span>
		<span class="index">10</span>
	</li>
	<li class="element">
		<span class="value">l</span>
		<span class="index">11</span>
	</li>
	<li class="element">
		<span class="value">l</span>
		<span class="index">12</span>
	</li>
	<li class="element">
		<span class="value">!</span>
		<span class="index">13</span>
	</li>
</ul>

<span class="blocktext">Jedes Zeichen des Textes `OOP ist toll!`, auch die Leer- und Satzzeichen, werden durch einzelnen `char`-Werten, die in der `String`-Instanz in der korrekten Reihenfolge in einem Array abgespeichert werden.</span>

>>>

### Interne Repräsentation von Zeichen

- Variablen vom Typ `char` werden im Computer mit unterschiedlichen Zahlwerten repräsentiert. 
- Jedes Zeichen hat eine eindeutige Nummer, die für die Verarbeitung verwendet wird.

<span class="blocktext"><br /></span>

**Welche Nummern sind welchen Zeichen zugeordnet?**

>>>

## ASCII & Unicode

<span class="blocktext">Java unterstützt den **Unicode-Standard**. Zur internen Repräsentation von Zeichen wird *UTF-16* verwendet. *ASCII* ist eine Teilmenge dieses Standards und kann für uns zur leichten Identifikation von den wichtigsten Zeichen verwendet werden.</span>

![large-image](slides/images/codetable.png)

>>>

## Vorteile der ASCII-Repräsentation

- Groß- und Kleinbuchstaben sind jeweils alphabetisch und in aufsteigender Sortierung in der Tabelle eingetragen.
- Auch Ziffern sind ihrem numerischen Wert nach sortiert.
- Wir können bei Berechnungen und Sortierungen also die numerischen Werte der `char`-Zeichen verwenden!

``` java
// A => 65; B => 66
char c1 = ' A' ; char c2 = 'B';
if(c1 < c2) {
	// the char in c2 is alphabetically ordered before the char c1
}
```

>>>

## Chars aus Strings extrahieren

<span class="blocktext">*Strings* sind Ketten einzelner Zeichen. Ein einzelnen Zeichen kann über seine Position innerhalb eines Strings abgefragt werden:</span>

``` java
Scanner in = new Scanner(System.in);
String input = in.nextLine();
```

<span class="blocktext">Eingegeben wird der Text *Java*. Intern wird der Text in der Variable `input` als *Array* abgebildet.</span>

<ul class="arraycontent">
	<li class="element">
		<span class="value">J</span>
		<span class="index">0</span>
	</li>
	<li class="element">
		<span class="value">a</span>
		<span class="index">1</span>
	</li>
	<li class="element">
		<span class="value">v</span>
		<span class="index">2</span>
	</li>
	<li class="element">
		<span class="value">a</span>
		<span class="index">3</span>
	</li>
</ul>

<span class="blocktext">Wir können einzelnen Zeichen auslesen:</span>

``` java
char fistChar = input.charAt(0); // firstChar hat den Wert 'J'
```

>>>

## Zählen und Rechnen mit Chars

<span class="blocktext">Durch die interne Repräsentation als Zahlwert ist es möglich, implizit oder explizit, zwischen `char` und `int` zu *casten*.</span>

<ul class="arraycontent">
	<li class="element">
		<span class="value">A</span>
		<span class="index">65</span>
	</li>
	<li class="element">
		<span class="value">B</span>
		<span class="index">66</span>
	</li>
	<li class="element">
		<span class="value">C</span>
		<span class="index">67</span>
	</li>
	<li class="element">
		<span class="value">D</span>
		<span class="index">68</span>
	</li>
	<li class="element">
		<span class="value">E</span>
		<span class="index">69</span>
	</li>
	<li class="element">
		<span class="value">...</span>
		<span class="index">...</span>
	</li>
	<li class="element">
		<span class="value">a</span>
		<span class="index">97</span>
	</li>
	<li class="element">
		<span class="value">b</span>
		<span class="index">98</span>
	</li>
	<li class="element">
		<span class="value">c</span>
		<span class="index">99</span>
	</li>
	<li class="element">
		<span class="value">d</span>
		<span class="index">100</span>
	</li>
	<li class="element">
		<span class="value">e</span>
		<span class="index">101</span>
	</li>
	<li class="element">
		<span class="value">...</span>
		<span class="index">...</span>
	</li>
</ul>

#### Zählen

```java
for(char ch = 'A'; ch < 'Z'; ch++) {
	System.out.println(ch);
}

```

#### Rechnen

```java
char ch = 'B';
int positionInAlphabet = ch - 'A';
char lowerCase = (char) ('a' + positionInAlphabet);

```

>>>

## char vs Character

- `char` ist ein primitiver Datentyp und verhält sich so wie die anderen bekannten primitiven Datentypen (`int`, `boolean`, `double`, ...).
- `char` ist keine Klasse! Also gibt es auch kein Objekte (Instanzen) oder Methoden!
- **Aber**: `Character` ist eine *Utility*-Klasse, die statische Methoden für die Zeichen-Verarbeitung bietet, z.B. `Character.toUpperCase(char ch)`.

>>>

### Nützliche Methoden der Character-Klasse

| Methode | Beschreibung (aus JDK-Dokumentation) |
|---------|--------------------------------------|
| `static boolean isDigit(char ch)` | *Determines if the specified character is a digit.* |
| `static boolean isLetter(char ch)` | *Determines if the specified character is a letter.*|
| `static boolean isLetterOrDigit(char ch)` | *Determines if the specified character is a letter or digit.* |
| `static boolean isLowerCase(char ch)` | *Determines if the specified character is a lowercase character.* (gibts auch für upperCase) |
| `static boolean isWhitespace(char ch)` | *Determines if the specified character is white space according to Java* |
| `static char toLowerCase(char ch)` | *Converts the character argument to lowercase ...* (gibts auch für upperCase) |

>>>

# Texte verarbeiten mit der String-Klasse

>>>

## Grundsätzliches zur String-Klasse

<span class="blocktext">`String` ist eine Klasse, von der Instanzen erzeugt werden. Methoden der Klasse werden in der Regel auf den Instanzen aufgerufen:</span>

``` java
String input = "Java ist toll";
input = input.toUpperCase();
```

<span class="blocktext">Strings sind *immutable*. D.h. nach der Initialisierung kann der Inhalt nicht mehr geändert werden. Alle Methoden arbeiten daher nach dem gleichen Prinzip: `String` als **Input**, neuer `String` als **Output**. Auch die Verkettung mehrere *Strings* mit dem Operator `+` erzeugt immer einen neuen *String* aus den verwendeten Bestandteilen!</span>

>>>

## String vergleichen (1/2)

<span class="blocktext">Was überprüfen wird beim Vergleich zweier Objekt-Variablen mithilfe des  `==`-Operators? Wir prüfen, ob die Variablen auf die selben Objekte zeigen (Objekte verhalten sich anders als primitive Daten)!</span>

``` java
String value1 = new String("Java ist toll");
String value2 = new String("Java ist toll");

System.out.println(value1 == value2); //false
value2 = value1;
System.out.println(value1 == value2); //true
```

<span class="hint">Im Beispiel werden explizit neue `String`-Objekte erzeugt. Wenn Sie *Literale* (ohne `new`-Operator) verwenden, optimiert der *Compiler* den Code und verwendet für gleiche Literale das gleiche Objekt!</span>

>>>

## String vergleichen (2/2)

<span class="blocktext">Wie vergleichen wir *Strings* auf inhaltlicher Ebene? Wir verwenden die Instanzmethode `equals`, die die `String`-Klasse bereitstellt:</span>

``` java
String value1 = new String("Java ist toll");
String value2 = "Java " + "ist" + " toll";
System.out.println(value1.equals(value2)); // true
```

<span class="hint smaller">In der Regel möchten Sie *immer* den Inhalt von *Strings* vergleichen und nicht die jeweiligen Objekte. Verwenden Sie daher grundsätzlich die `equals`-Methode und nutzten Sie den Vergleichsoperator (`==`) nur, wenn Sie dies wirklich müssen.</span>

>>>

### Nützliche Methoden der String-Klasse

| Methode | Beschreibung (aus JDK-Dokumentation) |
|---------|--------------------------------------|
| `int length()` | *Returns the length of this string.* |
| `char charAt(int index)` | *Returns the char value at the specified index.*|
| `String substring(int beginIndex, int endIndex)` | *Returns a new string that is a substring of this string (from beginIndex to endIndex).* |
| `String substring(int beginIndex)` | *Returns a new string that is a substring of this string (from beginIndex to end).* |
| `boolean equals(String s2)` | *Compares this string to the specified String.* |
| `int compareTo(String s2)` | *Compares two strings lexicographically. 0 if strings are equal, -1 for "smaller", 1 for "larger" String* |
| `int indexOf(char c)` | *Returns the index of the first occurrence of the character, or -1 if not found.* |
| `int indexOf(String s)` | *Returns the index of the first occurrence of the string, or -1 if not found.* |

>>>

# Fun with Strings

>>>

## Unsere Aufgabe

<span class="blocktext">Wir schreiben eine Klasse `StringHelper`, in der mehrere *Utility*-Funktionen für die Arbeit mit *Strings* zusammengefasst werden:</span>

- Zählen von Groß- bzw. Kleinbuchstaben
- Ersetzen von Substrings
- Umdrehen von Strings
- Palindrom-Check
- Zerlegen des Strings in Einzeltoken

>>>

## Die Klasse StringHelper

<span class="blocktext">Die Klasse arbeitet nach folgendem Prinzip: Bei Instanziierung wird eine `String`-Instanz übergeben (Vgl. *Composition*). Alle Methoden arbeiten intern mit diesem String:</span>

``` java
// Einlesen eines Strings über die Kommandozeile
String input = getInputFromUser(); 
StringHelper helper = new StringHelper(input);

String output = helper.reverseString();
```

<span class="blocktext">Einzelne Features der Klasse werden über öffentliche Methoden zugänglich gemacht. Wir arbeiten dabei nach dem Prinzip des *Information Hidings*: *Clients* nutzten eine öffentliche Schnittstelle, interne Prozess werden durch private Methoden abgebildet. Wenn möglich, nutzen wir bereits implementierte Funktionen für die Realisierung komplexerer Aufgaben.</span>

>>>

### Zählen von Groß- und Kleinbuchstaben

- Was ist unser Ziel?
- Was sind die Parameter und was der Rückgabewert?
- Was ist das eigentliche Problem?
- Wie kann der Algorithmus beschrieben werden?
- Brauchen wir Hilfsmethoden (Dekomposition)?

<span class="blocktext"><br /></span>

<ul class="arraycontent">
	<li class="element">
		<span class="value">O</span>
		<span class="index">0</span>
	</li>
	<li class="element">
		<span class="value">O</span>
		<span class="index">1</span>
	</li>
	<li class="element">
		<span class="value">P</span>
		<span class="index">2</span>
	</li>
	<li class="element">
		<span class="value"> </span>
		<span class="index">3</span>
	</li>
	<li class="element">
		<span class="value">i</span>
		<span class="index">4</span>
	</li>
	<li class="element">
		<span class="value">s</span>
		<span class="index">5</span>
	</li>
	<li class="element">
		<span class="value">t</span>
		<span class="index">6</span>
	</li>
	<li class="element">
		<span class="value"> </span>
		<span class="index">8</span>
	</li>
	<li class="element">
		<span class="value">t</span>
		<span class="index">9</span>
	</li>
	<li class="element">
		<span class="value">o</span>
		<span class="index">10</span>
	</li>
	<li class="element">
		<span class="value">l</span>
		<span class="index">11</span>
	</li>
	<li class="element">
		<span class="value">l</span>
		<span class="index">12</span>
	</li>
	<li class="element">
		<span class="value">!</span>
		<span class="index">13</span>
	</li>
</ul>

>>>


### Ersetzen von einem Substring

- Was ist unser Ziel?
- Was sind die Parameter und was der Rückgabewert?
- Was ist das eigentliche Problem?
- Wie kann der Algorithmus beschrieben werden?
- Brauchen wir Hilfsmethoden (Dekomposition)?

<span class="blocktext"><br /></span>

<ul class="arraycontent">
	<li class="element">
		<span class="value">O</span>
		<span class="index">0</span>
	</li>
	<li class="element">
		<span class="value">O</span>
		<span class="index">1</span>
	</li>
	<li class="element">
		<span class="value">P</span>
		<span class="index">2</span>
	</li>
	<li class="element">
		<span class="value"> </span>
		<span class="index">3</span>
	</li>
	<li class="element">
		<span class="value">i</span>
		<span class="index">4</span>
	</li>
	<li class="element">
		<span class="value">s</span>
		<span class="index">5</span>
	</li>
	<li class="element">
		<span class="value">t</span>
		<span class="index">6</span>
	</li>
	<li class="element">
		<span class="value"> </span>
		<span class="index">8</span>
	</li>
	<li class="element">
		<span class="value">b</span>
		<span class="index">9</span>
	</li>
	<li class="element">
		<span class="value">l</span>
		<span class="index">10</span>
	</li>
	<li class="element">
		<span class="value">ö</span>
		<span class="index">11</span>
	</li>
	<li class="element">
		<span class="value">d</span>
		<span class="index">12</span>
	</li>
	<li class="element">
		<span class="value">!</span>
		<span class="index">13</span>
	</li>
</ul>

<ul class="arraycontent">
	<li class="element">
		<span class="value">O</span>
		<span class="index">0</span>
	</li>
	<li class="element">
		<span class="value">O</span>
		<span class="index">1</span>
	</li>
	<li class="element">
		<span class="value">P</span>
		<span class="index">2</span>
	</li>
	<li class="element">
		<span class="value"> </span>
		<span class="index">3</span>
	</li>
	<li class="element">
		<span class="value">i</span>
		<span class="index">4</span>
	</li>
	<li class="element">
		<span class="value">s</span>
		<span class="index">5</span>
	</li>
	<li class="element">
		<span class="value">t</span>
		<span class="index">6</span>
	</li>
	<li class="element">
		<span class="value"> </span>
		<span class="index">8</span>
	</li>
	<li class="element">
		<span class="value highlight">t</span>
		<span class="index">9</span>
	</li>
	<li class="element">
		<span class="value highlight">o</span>
		<span class="index">10</span>
	</li>
	<li class="element">
		<span class="value highlight">l</span>
		<span class="index">11</span>
	</li>
	<li class="element">
		<span class="value highlight">l</span>
		<span class="index">12</span>
	</li>
	<li class="element">
		<span class="value">!</span>
		<span class="index">13</span>
	</li>
</ul>

>>>

### Umdrehen des Strings

- Was ist unser Ziel?
- Was sind die Parameter und was der Rückgabewert?
- Was ist das eigentliche Problem?
- Wie kann der Algorithmus beschrieben werden?
- Brauchen wir Hilfsmethoden (Dekomposition)?

<span class="blocktext"><br /></span>


<ul class="arraycontent">
	<li class="element">
		<span class="value">J</span>
		<span class="index">0</span>
	</li>
	<li class="element">
		<span class="value">a</span>
		<span class="index">1</span>
	</li>
	<li class="element">
		<span class="value">v</span>
		<span class="index">2</span>
	</li>
	<li class="element">
		<span class="value">a</span>
		<span class="index">3</span>
	</li>
</ul>

<ul class="arraycontent">
	<li class="element">
		<span class="value">a</span>
		<span class="index">0</span>
	</li>
	<li class="element">
		<span class="value">v</span>
		<span class="index">1</span>
	</li>
	<li class="element">
		<span class="value">a</span>
		<span class="index">2</span>
	</li>
	<li class="element">
		<span class="value">J</span>
		<span class="index">3</span>
	</li>
</ul>

>>>

### Palindrom-Check

- Was ist unser Ziel?
- Was sind die Parameter und was der Rückgabewert?
- Was ist das eigentliche Problem?
- Wie kann der Algorithmus beschrieben werden?
- Brauchen wir Hilfsmethoden (Dekomposition)?

>>>

## Strings zerlegen

<span class="blocktext">Mit Hilfe der Instanzmethode `split` der `String`-Klasse können Sie eine Zeichenkette entlang beliebiger Zeichen auftrennen und dadurch Tokens erzeugen. Als Ergebnis erhalten Sie ein Array mit allen Einzeltokens, die Zeichen, die als Trennstelle verwendet werden, sind im Ergebnis-Array nicht mehr vorhanden:</span>

``` java
String input = "this_is_a_string";
String[] tokens = input.split("_");
// result: ["this", "is", "a", "string"]
```

<span class="hint smaller">Das JDK bietet für komplexere Zerlegungsaufgaben die Klasse `StringTokenizer` an. Auch mit der `Scanner`-Klasse lassen sich ähnliche Aufgaben erledigen. Die Auswahl sollte immer dem grundsätzlichen Problem angepasst werden - für die Aufgaben in diesem Kurs ist die `split`-Methode in der Regel ausreichend.</span>

>>>

### Zerlegen des Strings in Einzeltoken

- Was ist unser Ziel?
- Was sind die Parameter und was der Rückgabewert?
- Was ist das eigentliche Problem?
- Wie kann der Algorithmus beschrieben werden?
- Brauchen wir Hilfsmethoden (Dekomposition)?

<ul class="arraycontent">
	<li class="element">
		<span class="value">O</span>
		<span class="index">0</span>
	</li>
	<li class="element">
		<span class="value">O</span>
		<span class="index">1</span>
	</li>
	<li class="element">
		<span class="value">P</span>
		<span class="index">2</span>
	</li>
	<li class="element">
		<span class="value highlight"> </span>
		<span class="index">3</span>
	</li>
	<li class="element">
		<span class="value">i</span>
		<span class="index">4</span>
	</li>
	<li class="element">
		<span class="value">s</span>
		<span class="index">5</span>
	</li>
	<li class="element">
		<span class="value">t</span>
		<span class="index">6</span>
	</li>
	<li class="element">
		<span class="value highlight"> </span>
		<span class="index">8</span>
	</li>
	<li class="element">
		<span class="value">t</span>
		<span class="index">9</span>
	</li>
	<li class="element">
		<span class="value">o</span>
		<span class="index">10</span>
	</li>
	<li class="element">
		<span class="value ">l</span>
		<span class="index">11</span>
	</li>
	<li class="element">
		<span class="value">l</span>
		<span class="index">12</span>
	</li>
	<li class="element">
		<span class="value">!</span>
		<span class="index">13</span>
	</li>
</ul>

<ul class="arraycontent">
	<li class="element">
		<span class="value">O</span>
		<span class="index">0</span>
	</li>
	<li class="element">
		<span class="value">O</span>
		<span class="index">1</span>
	</li>
	<li class="element">
		<span class="value">P</span>
		<span class="index">2</span>
	</li>
</ul>

<ul class="arraycontent">
	<li class="element">
		<span class="value">i</span>
		<span class="index">0</span>
	</li>
	<li class="element">
		<span class="value">s</span>
		<span class="index">1</span>
	</li>
	<li class="element">
		<span class="value">t</span>
		<span class="index">2</span>
	</li>
</ul>

<ul class="arraycontent">
	<li class="element">
		<span class="value">t</span>
		<span class="index">0</span>
	</li>
	<li class="element">
		<span class="value">o</span>
		<span class="index">1</span>
	</li>
	<li class="element">
		<span class="value">l</span>
		<span class="index">2</span>
	</li>
	<li class="element">
		<span class="value">l</span>
		<span class="index">3</span>
	</li>
	<li class="element">
		<span class="value">!</span>
		<span class="index">4</span>
	</li>
</ul>

>>>

## Kryptographie: Caesar‘s cipher

<span class="blocktext smaller">Mit unserem neuen Wissen über `char` und `String` können wir versuchen, Texte zu verschlüsseln. Eine der einfachsten und bekanntesten Methoden dazu ist der *Caesar Code*. Jeder Buchstabe des zu verschlüsselnden Text wird durch einen anderen ersetzt, der den im Alphabet den Abstand `n` vom ursprünglichen Buchstaben hat. Wenn Sie `n` kennen, können Sie den Text wieder entschlüsseln.</span>


![small-image](slides/images/caesar-cipher.png)

>>>

## Zusammenfassung 

- Mittels Enumeration werden einer zusammengehörigen Set von Werten lesbare Namen gegeben – Der Programmierer greift anhand von benannten Konstanten auf die Werte zu
- Einzelne Zeichen werden in Java als `char` gespeichert – Jedem `char` ist eine Ganzzahl zugeordnet
- Strings sind *immutable*, d.h. nach Erzeugung eines Objekts nicht mehr veränderbar
- Strings lassen sich mit der Methode `split` in einzelne Tokens (*Substrings*) zerlegen

>>>

### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>