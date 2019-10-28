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

![large-image](slides/images/pingo-2019-10-22.png)

https://pingo.coactum.de/201662

>>>

### Rückblick

- Java ist eine plattformunabhängig Programmiersprache: Zum Ausführen von Java-Programmen wird eine plattformspezifische
- Programme unterscheiden sich in der Entwicklungsphase (Quellcode) und der Ausführungsphase
- Klassen sind das zentrale Strukturelement eines Java-Programms und bei Programmstart, wird immer die essentielle `main`-Methode ausgeführt
- *Decomposition* und die *Top Down*-Analyse sind zentrale Konzepte, um Programmierprobleme strukturiert zu lösen und übersichtlichen und wartbaren Code zu erstellen

>>>

## Das Programm für heute

- Einführung in die Verwendung von Variablen
- Grundlegendes zu Klassen und Objekte
- Zentrale Funktionen der *Graphics App*

>>>

## Zusammenfassung (Variablen)

- Variablen speichern Werte während der Programmausführung (Laufzeit). Sie sind Platzhalter für unterschiedliche Daten, funktionieren aber immer nur mit einem bestimmten Datentyp.
- Werte, die während der Implementierung festgelegt werden und zur Laufzeit unveränderlich sind, nennt man Konstanten.
- Ausdrücke liefern einen Wert zurück, Operatoren verknüpfen Ausdrücke.

>>>

## Zusammenfassung (Klassen und Objekte)

- Java ist eine objektorientierte Programmiersprache.
- Klassen definieren Eigenschaften und Verhalten für ein oder mehrere Objekte d.h. sie sind die Instanzen der Klasse.
- Klassen sind hierarchisch angeordnet: Superklassen können Eigenschaften und Verhalten definieren, das für alle Subklassen gilt
- Objekte werden mit dem Aufruf `new` erzeugt.
- ProgrammiererInnen können Nachrichten an Objekte senden und dazu Instanzmethoden aufrufen.

>>>

### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>