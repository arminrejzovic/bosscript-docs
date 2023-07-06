---
layout: '../../layouts/DocumentationLayout.astro'
title: IO
translation: "/en/stdlib/io"
---

# IO

<pre>
<span class="keyword">paket</span> <span class="string">"IO"</span><span class="keyword">;</span>
</pre>

The `IO` package is used to work with files. It provides the File constructor.

### File constructor

Use the file constructor to instantiate a `Datoteka` object.

<pre>
ƒ Datoteka(pathname: <span class="keyword">tekst</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * pathname - a path to the file (either relative or absolute) (`tekst`)
- returns: `Datoteka` object
- special cases:
  * Throws exception if pathname is not valid (for example, if the file cannot be found).

<pre>
<span class="keyword">var</span> fajl = Datoteka(<span class="string">"test.txt"</span>)<span class="keyword">;</span>

<span class="keyword">var</span> fajl2 = Datoteka(<span class="string">"C:\\users\\boss\\examples\\test.txt"</span>)<span class="keyword">;</span>
</pre>

### Datoteka object