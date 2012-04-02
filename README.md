% Pandoc Documentation writer
% komola UG, Sebastian Hoitz

# About pandoc-documentation

`Pandoc-documentation` can be used as a documentation toolchain. You can write nice
and readable markdown and it will turn your file into a nice PDF.

Features included:

* Use Markdown to write your documentation
* Create sequence diagrams using [plantUML](http://plantuml.sourceforge.net/)
* Create PDFs

# Getting started

To get the pandoc documentation package to work, you have to install
some pre-requisites:

* First of all, get [Pandoc](http://johnmacfarlane.net/pandoc/installing.html).
There are builds available for Windows, Mac and Linux.
* Install [PlantUML](http://plantuml.sourceforge.net):
  - Make sure, you have GraphVIZ installed (a requirement by plantuml)
* Install a Tex package (on OSX, [MacTex](http://www.tug.org/mactex/2011/) is a good
solution)
* Make sure you have Coffee Script installed. Right now this is used for parsing the plantuml when converting to PDFs.

Once you are done installing all the packages, you can start using the Pandoc
Documentation writer like this:

    ./build README.md README.pdf

# Todo

* Don't use CoffeeScript but Haskell to parse the plantuml
* Make sure plantuml graphics are scaled correct

# Participating

When you want to participate in pandoc-documentation, feel free to
fork this repository.

Make sure, that you add your changes on a named branch. **No pull
request will be accepted for master branch changes**.

Check the TODO items in this readme for ideas on what to implement.

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

## Tables

First column    Second column  Third column
------------    -------------  ------------
Asd             Foo            Bar
Asd             lalala         Bar
Asd             Foo            Bar
