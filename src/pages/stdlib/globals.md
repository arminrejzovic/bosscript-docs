---
layout: '../../layouts/DocumentationLayout.astro'
title: Globals
translation: "/en/stdlib/globals"
---

# Globals

Bosscript comes with several built-in functions declared as global variables. They can be used anywhere
within a Bosscript program. These are:
1. [`ispis()`](#functions-ispis-greska-upozorenje-and-unos)
2. [`greska()`](#functions-ispis-greska-upozorenje-and-unos)
3. [`upozorenje()`](#functions-ispis-greska-upozorenje-and-unos)
4. [`unos()`](#functions-ispis-greska-upozorenje-and-unos)
5. [`postoji()`](#function-postoji)
6. [`nasumicni()`](#function-nasumicni)
7. [`brojOd()`](#function-brojod)
8. [`logickiOd()`](#function-logickiod)
9. [`nizOd()`](#function-nizod)
10. [`tip()`](#function-tip)

### Functions `ispis`, `greska`, `upozorenje` and `unos`

All four of these functions are covered in the [Standard Input and Output]("4.%20Standard%20Input%20and%20Output") article.
Read the article to learn more about them.

### Function `postoji`

The `postoji` function simply performs a null check. It is an alternative to using the `!` operator:

<pre>
<span class="keyword">ako</span>(postoji(x)){
    ispis(<span class="string">"'x' exists"</span>)<span class="keyword"><span class="keyword">;</span></span>
}

<span class="keyword">ako</span>(!x){
    ispis(<span class="string">"'x' doesn't exist"</span>)<span class="keyword">;</span>
}
</pre>

### Function `nasumicni`

The `nasumicni` function is a random number generator. By default, it generates a random number from 0 to 100 exclusive,
but you can provide a different ending bound as an argument:

<pre>
<span class="keyword">var</span> n = nasumicni()<span class="keyword">;</span>
<span class="keyword">var</span> cn = nasumicni(<span class="number">25</span>)<span class="keyword">;</span>

ispis(n<span class="keyword">,</span> cn)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">63</span>
<span class="number">12</span>
</pre>

### Function `brojOd`

The `brojOd` function is a function for parsing numbers from other types. When provided a `broj`, it simply returns another
`broj` with the same value. When provided a `tekst`, it tries to parse a number out of it and throws an exception if it
is not able to. Finally, when provided a `logički`, it returns 0 if the value is `netačno` and 1 if the value is `tačno`.

<pre>
<span class="keyword">var</span> l = brojOd(<span class="keyword">netačno</span>)<span class="keyword">;</span>
<span class="keyword">var</span> t = brojOd(<span class="string">"12.44"</span>)<span class="keyword">;</span>
<span class="keyword"><span class="keyword">var</span></span> b = brojOd(<span class="number">10</span>)<span class="keyword">;</span>

ispis(b<span class="keyword">,</span> l<span class="keyword">,</span> t)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">10</span>
<span class="number">12.44</span>
<span class="number">0</span>
</pre>

Trying to parse an invalid `tekst` or passing a value of any type other than the three supported ones will result in an
exception:

<pre>
<span class="keyword">var</span> invalidTekst = <span class="string">"one million"</span><span class="keyword">;</span>
<span class="keyword">var</span> b = brojOd(invalidTekst)<span class="keyword">;</span>
</pre>

<code style="color: red;">
Error: Cannot parse 'one million' into broj.
</code>

<pre>
<span class="keyword">var</span> invalid = [<span class="number">1</span><span class="keyword">,</span><span class="number">5</span><span class="keyword">,</span><span class="number">2</span><span class="keyword">,</span><span class="number">1</span>]<span class="keyword">;</span>
<span class="keyword">var</span> b = brojOd(invalid)<span class="keyword">;</span>
</pre>

<code style="color: red;">
Error: Cannot convert [1,5,2,1] to broj.
</code>

### Function `logickiOd`

Similar to `brojOd`, `logickiOd` is also a parsing function. It parses a `logički` from other types. When provided a `logički`,
it simply returns a new `logički` with the same value. When provided a `tekst`, it tries to parse it as follows:
- "tačno" and "tacno" yield `tačno`
- "netačno" and "netacno" yield `netačno`
- Any other `tekst` value causes an exception

Finally, when provided a `broj`, it returns `netačno` only if the `broj` is equal to 0. Otherwise, it returns `tačno`.


<pre>
<span class="keyword">var</span> l = logickiOd(<span class="keyword">tačno</span>)<span class="keyword">;</span>
<span class="keyword">var</span> t = logickiOd(<span class="string">"<span class="</span>keyword<span class="string">">netačno</span>"</span>)<span class="keyword">;</span>
<span class="keyword">var</span> b = logickiOd(<span class="number">32</span>)<span class="keyword">;</span>

ispis(b<span class="keyword">,</span> l<span class="keyword">,</span> t)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="keyword">tačno</span>
<span class="keyword">netačno</span>
<span class="keyword">tačno</span>
</pre>

Trying to parse an invalid `tekst` or passing a value of any type other than the three supported ones will result in an
exception:

<pre>
<span class="keyword">var</span> invalidTekst = <span class="string">"netanco"</span><span class="keyword">;</span>
<span class="keyword">var</span> t = logickiOd(invalidTekst)<span class="keyword">;</span>
</pre>

<code style="color: red;">
Error: 'netanco' is not a logički.
</code>

<pre>
<span class="keyword">var</span> invalid = [<span class="number">1</span><span class="keyword">,</span><span class="number">5</span><span class="keyword">,</span><span class="number">2</span><span class="keyword">,</span><span class="number">1</span>]<span class="keyword">;</span>
<span class="keyword">var</span> l = logickiOd(invalid)<span class="keyword">;</span>
</pre>

<code style="color: red;">
Error: Cannot convert [1,5,2,1] to logički.
</code>

### Function `nizOd`

The `nizOd` function can be used to create a `niz` in place.

<pre>
<span class="keyword">var</span> n = nizOd(<span class="number">1</span><span class="keyword">,</span> <span class="keyword">tačno</span><span class="keyword">,</span> <span class="string">"tekst"</span><span class="keyword">,</span> <span class="number">66</span>)<span class="keyword">;</span>

ispis(n)<span class="keyword">;</span>
</pre>

<pre>
Output:

[<span class="number">1</span><span class="keyword">,</span> <span class="keyword">tačno</span><span class="keyword">,</span> <span class="string">"tekst"</span><span class="keyword">,</span> <span class="number">66</span>]
</pre>

### Function `tip`

The `tip` function is used to determine the type of a particular value. It returns a `tekst` with the typename:

<pre>
ispis(tip(<span class="number">1</span>))<span class="keyword">;</span>

ispis(tip(<span class="string">"Sample"</span>))<span class="keyword">;</span>

ispis(tip([<span class="number">1</span><span class="keyword">,</span><span class="number">3</span><span class="keyword">,</span><span class="number">5</span>]))<span class="keyword">;</span>

ispis(tip({x: <span class="number">1</span><span class="keyword">,</span> y: <span class="number">2</span>}))<span class="keyword">;</span>
</pre>

<pre>
Output:

broj
tekst
niz
objekat
</pre>