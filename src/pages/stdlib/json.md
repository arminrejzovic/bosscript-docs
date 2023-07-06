---
layout: '../../layouts/DocumentationLayout.astro'
title: JSON
translation: "/en/stdlib/json"
---

# JSON

<pre>
<span class="keyword">paket</span> <span class="string"><span class="string">"JSON"</span></span><span class="keyword">;</span>
</pre>

The `JSON` package is used to work with JSON - JavaScript Object Notation. The package contains the following functions:
1. objekatIzJSON
2. JSONTekst

You will most likely need this package when working with an external API.


### objekatIzJSON

The `objekatIzJSON` function is used to parse a Bosscript object out of a provided JSON string.

- takes: str - JSON string `tekst`
- returns: object parsed from `str` (`objekat`)
- special cases
  * throws Exception if `str` is not a valid JSON string

<pre>
<span class="keyword">var</span> obj = objekatIzJSON('{<span class="string"><span class="string">"x"</span></span>: <span class="number"><span class="number">1</span></span><span class="keyword">,</span> <span class="string"><span class="string">"y"</span></span>: <span class="keyword">true</span><span class="keyword">,</span> <span class="string"><span class="string">"z"</span></span>: <span class="string"><span class="string">"hello"</span></span>}')<span class="keyword">;</span>

ispis(obj)<span class="keyword">;</span>
</pre>

<pre>
Output:

{x: <span class="number"><span class="number">1</span></span><span class="keyword">,</span> y: <span class="keyword">tačno</span><span class="keyword">,</span> z: <span class="string"><span class="string">"hello"</span></span>}
</pre>

### JSONTekst

The `JSONTekst` function is used to stringify a Bosscript object into a JSON string:

- takes: obj - object to be stringified `objekat`
- returns: str - JSON string representation of `obj` (`tekst`)
- special cases: none


<pre>
<span class="keyword">var</span> str = JSONTekst({x: <span class="number"><span class="number">1</span></span><span class="keyword">,</span> y: <span class="keyword">tačno</span><span class="keyword">,</span> z: <span class="string"><span class="string">"hello"</span></span>})<span class="keyword">;</span>
ispis(str)<span class="keyword">;</span>
</pre>

<pre>
Output:

{<span class="string"><span class="string">"x"</span></span>: <span class="number"><span class="number">1</span></span><span class="keyword">,</span> <span class="string"><span class="string">"y"</span></span>: <span class="keyword">true</span><span class="keyword">,</span> <span class="string"><span class="string">"z"</span></span>: <span class="string"><span class="string">"hello"</span></span>}
</pre>