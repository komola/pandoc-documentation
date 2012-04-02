% Pandoc Documentation writer
% komola UG, Sebastian Hoitz

# Getting started

To get the pandoc documentation package to work, you have to install
some pre-requisites:

* First of all, get [Pandoc](http://johnmacfarlane.net/pandoc/installing.html). There are builds available for Windows, Mac and Linux.
* Then install [PlantUML](http://plantuml.sourceforge.net):
  - Make sure, you have GraphVIZ installed (a requirement by plantuml)


# Example formattings

The following examples are supposed to show you, what you can achieve with `pandoc-documentation`.

## Sequence diagrams

You can easily include sequence diagrams using PlantUML:

    @startuml first.png
    Alice -> Bob: Authentication Request
    Bob --> Alice: Authentication Response
    Alice -> Bob: Another authentication Request
    Alice <-- Bob: another authentication Response
    @enduml

![First sequence diagram](first.png)

    @startuml foo.png
    Seb -> Thomas: Foo
    @enduml

![Foo bar](foo.png)

    @startuml
    Nico -> Jorg: Asd
    @enduml

## Tables

First column    Second column  Third column
------------    -------------  ------------
Asd             Foo            Bar
Asd             lalala         Bar
Asd             Foo            Bar