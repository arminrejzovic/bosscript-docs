---
layout: '../../layouts/DocumentationLayout.astro'
title: Regex
translation: "/en/stdlib/regex"
---

# Regex

<pre>
<span class="keyword">paket</span> "regex"<span class="keyword">;</span>
</pre>

The `regex` package provides support for regular expressions. 

The package includes:
1. Regex constructor

A Regex object contains the following properties:
1. sablon
2. pronadji
3. pronadjiSve 
4. zamijeni 
5. potpunoPoklapanje

A Match object contains the following properties
1. vrijednost
2. lokacija
   * pocetak
   * kraj

### Regex constructor

The Regex constructor returns a Regex object.

- takes:
  * pattern - a regex pattern (`tekst`)
- returns: Regex object (`objekat`)
- special cases: 
  * Throws exception if `pattern` is not a valid regex pattern

<pre>
<span class="keyword">var</span> regex = Regex(<span class="string">"\\d+"</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="keyword">var</span> regex = Regex(<span class="string">"Definitely not valid regex"</span>)<span class="keyword">;</span>
</pre>

<code style="color: red;">
Error: 'Definitely not valid regex' is not a valid regex pattern.
</code>

### sablon

The `sablon` property is a `tekst` value containing the regex pattern of the Regex object.

<pre>
<span class="keyword">var</span> regex = Regex(<span class="string">"\\d+"</span>)<span class="keyword">;</span>
ispis(regex.<span class="purple">sablon</span>)<span class="keyword">;</span>
</pre>

<pre>
\d+
</pre>

### pronadji

The `pronadji` function returns the first match of a regular expression in the provided input `tekst`.

- takes: input - string to perform lookup on (`tekst`)
- returns: Match object (`objekat`)
- special cases
  * returns `nedefinisano` if no match is found

<pre>
<span class="keyword">var</span> regex = Regex(<span class="string"><span class="string">"\\d+"</span></span>)<span class="keyword">;</span>
<span class="keyword">var</span> text = <span class="string">"lorem 19 ip5um dol0r s1t am3t"</span><span class="keyword">;</span>

<span class="keyword">var</span> match = regex.<span class="yellow">pronadji</span>(text)<span class="keyword">;</span>
ispis(match.<span class="purple">vrijednost</span>)<span class="keyword">;</span>
</pre>

<pre>
Output:

19
</pre>

A case where no match is found:

<pre>
<span class="keyword">var</span> regex = Regex(<span class="string">"[\\[\\]{}()]"</span>)<span class="keyword">;</span>
<span class="keyword">var</span> text = <span class="string">"lorem 19 ip5um dol0r s1t am3t"</span><span class="keyword">;</span>

<span class="keyword">var</span> match = regex.<span class="yellow">pronadji</span>(text)<span class="keyword">;</span>
ispis(match.<span class="purple">vrijednost</span>)<span class="keyword">;</span>
</pre>
<pre>
Output:

nedefinisano
</pre>

### pronadjiSve

The `pronadjiSve` function returns all matches of a regular expression in the provided input `tekst`.

- takes: input - string to perform lookup on (`tekst`)
- returns: Array of Match objects (`niz<objekat>`)
- special cases
    * returns empty `niz` if no matches are found

<pre>
<span class="keyword">var</span> regex = Regex(<span class="string">"\\d+"</span>)<span class="keyword">;</span>
<span class="keyword">var</span> text = <span class="string">"lorem 19 ip5um dol0r s1t am3t"</span><span class="keyword">;</span>

<span class="keyword">var</span> matches = regex.<span class="yellow">pronadjiSve</span>(text)<span class="keyword">;</span>

matches.<span class="yellow">zaSvaki</span>(<span class="keyword">funkcija</span>(m) => ispis(m.<span class="purple">vrijednost</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

19
5
0
1
3
</pre>

### zamijeni

The `zamijeni` function Replaces all occurrences of this regular expression in the specified input string with specified
replacement expression.

- takes: input - string to perform replacements on (`tekst`), replacement -  the expression to replace found matches with (`tekst`)
- returns: new `tekst` with the replacements
- special cases
    * returns `input` intact if no matches are found

<pre>
<span class="keyword">var</span> regex = Regex(<span class="string">"\\d+"</span>)<span class="keyword">;</span>
<span class="keyword">var</span> text = <span class="string">"lorem 19 ip5um dol0r s1t am3t"</span><span class="keyword">;</span>

<span class="keyword">var</span> matches = regex.<span class="yellow">pronadjiSve</span>(text)<span class="keyword">;</span>

<span class="keyword">var</span> t = regex.<span class="yellow">zamijeni</span>(text<span class="keyword">,</span> <span class="string">"DIGITS"</span>)<span class="keyword">;</span>
ispis(t)<span class="keyword">;</span>
</pre>

<pre>
Output:

lorem DIGITS ipDIGITSum dolDIGITSr sDIGITSt amDIGITSt
</pre>

### potpunoPoklapanje

The `potpunoPoklapanje` function 

- takes: input - string to perform lookup on (`tekst`)
- returns: 
  * A Match object if `input` matches pattern in its entirety (`objekat`)
  * `nedefinisano` otherwise
- special cases: none

<pre>
<span class="keyword">var</span> regex = Regex(<span class="string">"\\d+"</span>)<span class="keyword">;</span>
<span class="keyword">var</span> text = <span class="string">"2023"</span><span class="keyword">;</span>

<span class="keyword">var</span> match = regex.<span class="yellow">potpunoPoklapanje</span>(text)<span class="keyword">;</span>
ispis(match.<span class="purple">vrijednost</span>)<span class="keyword">;</span>
</pre>

<pre>
Output:

2023
</pre>

<pre>
<span class="keyword">var</span> regex = Regex("[\\[\\]{}()]")<span class="keyword">;</span>
<span class="keyword">var</span> text = "2023"<span class="keyword">;</span>

<span class="keyword">var</span> match = regex.<span class="yellow">potpunoPoklapanje</span>(text)<span class="keyword">;</span>
ispis(match.<span class="purple">vrijednost</span>)<span class="keyword">;</span>
</pre>

<pre>
Output:

nedefinisano
</pre>

### The Match object

The Match object has the following properties:
* vrijednost - the matched string (`tekst`) 
* lokacija (`objekat`)
  * pocetak index where match starts (`broj`)
  * kraj index where match ends (`broj`)

<pre>
<span class="keyword">var</span> regex = Regex("\\d+")<span class="keyword">;</span>
<span class="keyword">var</span> text = "lorem 19 ip5um dol0r s1t am3t"<span class="keyword">;</span>

<span class="keyword">var</span> match = regex.<span class="yellow">pronadji</span>(text)<span class="keyword">;</span>
ispis(match)<span class="keyword">;</span>
</pre>

<pre>
Output

{
    vrijednost: "19"<span class="keyword">,</span>
    lokacija: {
        pocetak: 6 
        kraj: 7
    }       
}
</pre>