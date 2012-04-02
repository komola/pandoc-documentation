% Pandoc Documentation writer
% komola UG, Sebastian Hoitz

# Getting started

To get the pandoc documentation package to work, you have to install
some pre-requisites:

* First of all, get [Pandoc](http://johnmacfarlane.net/pandoc/installing.html).
There are builds available for Windows, Mac and Linux.
* Install [PlantUML](http://plantuml.sourceforge.net):
  - Make sure, you have GraphVIZ installed (a requirement by plantuml)
* Install a Tex package (on OSX, [MacTex](http://www.tug.org/mactex/2011/) is a good
solution)

Once you are done installing all the packages, you can start using the Pandoc
Documentation writer like this:

    ./build README.md README.pdf

Skip to [definitions](#references).


# Example formattings

The following examples are supposed to show you, what you can achieve with `pandoc-documentation`.

## Sequence diagrams

You can easily include sequence diagrams using PlantUML:

    This is the description shown in the listings view
    @startuml
    skinparam monochrome true
    Alice -> Bob: Authentication Request
    Bob --> Alice: Authentication Response
    Alice -> Bob: Another authentication Request
    Alice <-- Bob: another authentication Response
    @enduml

![This is the description shown in the listings view2](output/README.png)

And this is pretty cool, huh?

## Tables

First column    Second column  Third column
------------    -------------  ------------
Asd             Foo            Bar
Asd             lalala         Bar
Asd             Foo            Bar

## References

You can easily jump to `definitions` within a document.

Just take a look at this [link](definition).