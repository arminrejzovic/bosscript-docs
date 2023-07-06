---
layout: '../../layouts/DocumentationLayout.astro'
title: Datum
translation: "/en/stdlib/datum"
---

# Datum

<pre>
<span class="keyword">paket</span> <span class="string"><span class="string">"datum"</span></span><span class="keyword">;</span>
</pre>

The `datum` package provides a way to work with local dates.

## Package functions

### datumSada

The `datumSada` function returns a `Datum` object representing the current date from the system clock in the default time-zone.

- takes: no parameters
- returns:
  * `Datum` object representing the current time
- special cases: none

<pre>
<span class="keyword">var</span> now = datumSada()<span class="keyword">;</span>
ispis(now.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> now.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> now.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">16.<span class="purple">5</span></span>.<span class="number">2023</span>
</pre>

### datumIzTeksta

The `datumIzTeksta` function parses a `Datum` object out of a provided `tekst` in the `dd.MM.yyyy` format.

- takes: str - `tekst` to parse
- returns:
  * `Datum` object parsed from `str`
- special cases:
  * Throws exception if `str` cannot be parsed


<pre>
<span class="keyword">var</span> date = datumIzTeksta(<span class="string"><span class="string">"<span class="number">26.<span class="purple">05</span></span>.<span class="purple">2023</span>"</span></span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">26.<span class="purple">5</span></span>.<span class="number">2023</span>
</pre>

Invalid `tekst` example:

<pre>
<span class="keyword">var</span> time = datumIzTeksta(<span class="string"><span class="string">"<span class="number">31.<span class="purple">2</span></span>.<span class="purple">2023</span>"</span></span>)<span class="keyword">;</span>
</pre>

<code class="error">
Error: Cannot parse Datum from tekst "31.2.2023" 
</code>

### datumPoFormatu

The `datumPoFormatu` function parses a `Datum` object out of a provided `tekst` according to the provided format.

- takes:
  * str - `tekst` to parse
  * format - `tekst` representing format to parse by
- returns:
  * `Datum` object parsed from `str`
- special cases:
  * Throws exception if `str` cannot be parsed
  * Throws exception if `format` is not a valid time format


<pre>
<span class="keyword">var</span> date = datumPoFormatu(<span class="string"><span class="string">"<span class="number">11</span>/<span class="number">10</span>/2000"</span></span><span class="keyword">,</span> <span class="string"><span class="string">"dd/MM/yyyy"</span></span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">11.<span class="purple">10</span></span>.<span class="number">2000</span>
</pre>

Invalid date example:

<pre>
<span class="keyword">var</span> date = datumIzTeksta(<span class="string"><span class="string">"<span class="number">96</span>/<span class="number">10</span>/2000"</span></span><span class="keyword">,</span> <span class="string"><span class="string">"dd/MM/yyyy"</span></span>)<span class="keyword">;</span>
</pre>

<code class="error">
Error: Cannot parse Datum from tekst <span class="string">"96/10/2000"</span>.
</code>

Invalid format example:

<pre>
var date = datumIzTeksta(<span class="string"><span class="string">"<span class="number">11</span>/<span class="number">10</span>/2000"</span></span>, <span class="string"><span class="string">"yy/YY/yyyy"</span></span>);
</pre>

<code class="error">
Error: 'yy/YY/yyyy' is not a valid time format. 
</code>


### Datum constructor

You can use the Datum constructor to construct a Datum object by providing a value for day, month and year.

- takes:
  * day - `broj` between 1 and 31
  * month - `broj` between 1 and 12
  * year - `broj` between -999999999 and 999999999
- returns:
  * `Datum` object according to the provided day, month and year
- special cases:
  * Throws exception if `year`, `month`, or `day` is an invalid value

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">28</span><span class="keyword">,</span> <span class="number">8</span><span class="keyword">,</span> <span class="number">2023</span>)<span class="keyword">;</span>

ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">28.<span class="purple">8</span></span>.<span class="number">2023</span>
</pre>

## Datum object

### godina
The `godina` property is a `broj` holding the year part of the Datum object.

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2023</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">2000</span>
</pre>

### mjesec
The `godina` property is a `broj` holding the year part of the Datum object.

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2023</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">mjesec</span>)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">10</span>
</pre>

### danGodine
The `danGodine` property is a `broj` holding the day-of-year field of the Datum object.

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2023</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danGodine</span>)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">284</span>
</pre>

### danMjeseca
The `danMjeseca` property is a `broj` holding the day-of-month field of the Datum object. This is the day part of the date
you will usually need.

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2023</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span>)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">11</span>
</pre>

### danSedmice
The `danSedmice` property is a `broj` holding the day-of-week field of the Datum object, starting from 1 for Monday.

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danSedmice</span>)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">3</span>
</pre>

### plusDana

The `plusDana` function returns a copy of the calling `Datum` object with the specified number of days added. The original
`Datum` object remains unchanged.

- takes:
  * days - number of days to add (`broj`)
- returns:
  * new `Datum` object with the specified number of days added
- special cases: none

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">plusDana</span>(<span class="number">10</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">21.<span class="purple">10</span></span>.<span class="number">2000</span>
</pre>

### minusDana

The `minusDana` function returns a copy of the calling `Datum` object with the specified number of days subtracted.
The original `Datum` object remains unchanged.

- takes:
  * days - number of days to subtract (`broj`)
- returns:
  * new `Datum` object with the specified number of days subtracted
- special cases: none

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">minusDana</span>(<span class="number">10</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">1.<span class="purple">10</span></span>.<span class="number">2000</span>
</pre>

### plusSedmica

The `plusSedmica` function returns a copy of the calling `Datum` object with the specified number of weeks added. The original
`Datum` object remains unchanged.

- takes:
  * weeks - number of weeks to add (`broj`)
- returns:
  * new `Datum` object with the specified number of weeks added
- special cases: none

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">plusSedmica</span>(<span class="number">2</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">25.<span class="purple">10</span></span>.<span class="number">2000</span>
</pre>
### minusSedmica

The `minusSedmica` function returns a copy of the calling `Datum` object with the specified number of weeks subtracted.
The original `Datum` object remains unchanged.

- takes:
  * weeks - number of weeks to subtract (`broj`)
- returns:
  * new `Datum` object with the specified number of weeks subtracted
- special cases: none

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">minusSedmica</span>(<span class="number">1</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">4.<span class="purple">10</span></span>.<span class="number">2000</span>
</pre>

### plusMjeseci

The `plusMjeseci` function returns a copy of the calling `Datum` object with the specified number of months added.
The original `Datum` object remains unchanged.

- takes:
  * months - number of months to add (`broj`)
- returns:
  * new `Datum` object with the specified number of months added
- special cases: none

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">plusMjeseci</span>(<span class="number">2</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">11.<span class="purple">12</span></span>.<span class="number">2000</span>
</pre>

### minusMjeseci

The `minusMjeseci` function returns a copy of the calling `Datum` object with the specified number of months added.
The original `Datum` object remains unchanged.

- takes:
  * months - number of months to add (`broj`)
- returns:
  * new `Datum` object with the specified number of months added
- special cases: none

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">minusMjeseci</span>(<span class="number">2</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">11.<span class="purple">8</span></span>.<span class="number">2000</span>
</pre>

### plusGodina

The `plusGodina` function returns a copy of the calling `Datum` object with the specified number of years added.
The original `Datum` object remains unchanged.

- takes:
  * years - number of years to add (`broj`)
- returns:
  * new `Datum` object with the specified number of years added
- special cases: none

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">plusGodina</span>(<span class="number">23</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">11.<span class="purple">10</span></span>.<span class="number">2023</span>
</pre>

### minusGodina

The `minusGodina` function returns a copy of the calling `Datum` object with the specified number of years subtracted.
The original `Datum` object remains unchanged.

- takes:
  * years - number of years to subtract (`broj`)
- returns:
  * new `Datum` object with the specified number of years subtracted
- special cases: none

<pre>
<span class="keyword">var</span> date = Datum(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">minusGodina</span>(<span class="number">20</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">11.<span class="purple">10</span></span>.<span class="number">1980</span>
</pre>


### periodIzmedju

The `periodIzmedju` function determines how much time has passed between the calling `Datum` object and the provided
other `Datum` object.

- takes:
  * other - `Datum` object
- returns:
  * `Datum` object representing the time passed between calling `Datum` and `other`
- special cases: none

<pre>
<span class="keyword"><span class="keyword">var</span></span> d1 = Datum(<span class="number">11</span><span class="keyword"><span class="keyword">,</span></span> <span class="number">10</span><span class="keyword"><span class="keyword">,</span></span> <span class="number">2000</span>)<span class="keyword"><span class="keyword">;</span></span>
<span class="keyword"><span class="keyword">var</span></span> d2 = Datum(<span class="number">14</span><span class="keyword"><span class="keyword">,</span></span> <span class="number">1</span><span class="keyword"><span class="keyword">,</span></span> <span class="number">2003</span>)<span class="keyword"><span class="keyword">;</span></span>

ispis(d1.<span class="yellow">periodIzmedju</span>(d2))<span class="keyword"><span class="keyword">;</span></span>
</pre>

<pre>
Output:

{ godine: <span class="number">2</span><span class="keyword">,</span> mjeseci: <span class="number">3</span><span class="keyword">,</span> dani: <span class="number">3</span> }
</pre>

### jePoslije

The `jePoslije` function determines whether the calling `Datum` object is after the provided
other `Datum` object.

- takes:
  * other - `Datum` object
- returns: `logički`
  * `tačno` if the calling `Datum` object is after `other`
  * `netačno` otherwise
- special cases: none

<pre>
<span class="keyword">var</span> d1 = Datum(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2000</span>)<span class="keyword">;</span>
<span class="keyword">var</span> d2 = Datum(<span class="number">14</span><span class="keyword">,</span> <span class="number">1</span><span class="keyword">,</span> <span class="number">2003</span>)<span class="keyword">;</span>

ispis(d1.<span class="yellow">jePoslije</span>(d2))<span class="keyword">;</span>
ispis(d2.<span class="yellow">jePoslije</span>(d1))<span class="keyword">;</span>
</pre>

<pre>
Output:

netačno
tačno
</pre>

### jePrije

The `jePrije` function determines whether the calling `Datum` object is before the provided
other `Datum` object.

- takes:
  * other - `Datum` object
- returns: `logički`
  * `tačno` if the calling `Datum` object is before `other`
  * `netačno` otherwise
- special cases: none

<pre>
<span class="keyword">var</span> d1 = Datum(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2000</span>)<span class="keyword">;</span>
<span class="keyword">var</span> d2 = Datum(<span class="number">14</span><span class="keyword">,</span> <span class="number">1</span><span class="keyword">,</span> <span class="number">2003</span>)<span class="keyword">;</span>

ispis(d1.<span class="yellow">jePrije</span>(d2))<span class="keyword">;</span>
ispis(d2.<span class="yellow">jePrije</span>(d1))<span class="keyword">;</span>
</pre>

<pre>
Output:

tačno
<span class="keyword">netačno</span>
</pre>

### jednako

The `jednako` function determines whether the calling `Datum` object is equal to the provided
other `Datum` object.

- takes:
  * other - `Datum` object
- returns: `logički`
  * `tačno` if the calling `Datum` object and `other` have the same year, month, and day values
  * `netačno` otherwise
- special cases: none

<pre>
<span class="keyword">var</span> t1 = Datum(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2000</span>)<span class="keyword">;</span>
<span class="keyword">var</span> t2 = Datum(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2023</span>)<span class="keyword">;</span>

<span class="keyword">var</span> t3 = Datum(<span class="number">14</span><span class="keyword">,</span> <span class="number">1</span><span class="keyword">,</span> <span class="number">2003</span>)<span class="keyword">;</span>
<span class="keyword">var</span> t4 = Datum(<span class="number">14</span><span class="keyword">,</span> <span class="number">1</span><span class="keyword">,</span> <span class="number">2003</span>)<span class="keyword">;</span>

ispis(t1.<span class="yellow">jednako</span>(t2))<span class="keyword">;</span>
ispis(t3.<span class="yellow">jednako</span>(t4))<span class="keyword">;</span>
</pre>

<pre>
Output:

netačno
tačno
</pre>