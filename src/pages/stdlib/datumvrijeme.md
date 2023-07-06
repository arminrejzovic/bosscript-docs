---
layout: '../../layouts/DocumentationLayout.astro'
title: DatumVrijeme
translation: <span class="string">"/en/stdlib/datumvrijeme"</span>
---

# Datum

<pre>
<span class="keyword">paket</span> <span class="string"><span class="string">"datumvrijeme"</span></span><span class="keyword">;</span>
</pre>

The `datum` package provides a way to work with local dates.

## Package functions

### datumVrijemeSada

The `datumVrijemeSada` function returns a `DatumVrijeme` object representing the current date from the system clock in the default time-zone.

<pre>
ƒ datumVrijemeSada () : <span class="keyword">objekat</span>
</pre>

- takes: no parameters
- returns:
  * `DatumVrijeme` object representing the current time
- special cases: none

<pre>
<span class="keyword">var</span> now = datumVrijemeSada()<span class="keyword">;</span>
ispis(now.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> now.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> now.<span class="purple">godina</span>)<span class="keyword">;</span>
ispis(now.<span class="purple">sati</span><span class="keyword">,</span> <span class="string"><span class="string">":"</span></span><span class="keyword">,</span> now.<span class="purple">minute</span><span class="keyword">,</span> <span class="string"><span class="string">":"</span></span><span class="keyword">,</span> now.<span class="purple">sekunde</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">16.<span class="purple">5</span></span>.<span class="number">2023</span>
<span class="number">14</span>:<span class="number">43</span>:<span class="number">51</span>
</pre>

### datumVrijemeIzTeksta

The `datumVrijemeIzTeksta` function parses a `DatumVrijeme` object out of a provided `tekst` in the `dd.MM.yyyy HH:mm:ss` format.

<pre>
ƒ datumVrijemeIzTeksta (str: <span class="keyword">tekst</span>) : <span class="keyword">objekat</span>
</pre>

- takes: str - `tekst` to parse
- returns:
  * `DatumVrijeme` object parsed from `str`
- special cases:
  * Throws exception if `str` cannot be parsed


<pre>
<span class="keyword">var</span> date = datumVrijemeIzTeksta(<span class="string"><span class="string">"<span class="number">26.<span class="purple">05</span></span>.<span class="number">2023</span> <span class="number">14</span>:<span class="number">44</span>:00"</span></span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">26.<span class="purple">5</span></span>.<span class="number">2023</span>
</pre>

Invalid `tekst` example:

<pre>
<span class="keyword">var</span> time = datumVrijemeIzTeksta(<span class="string"><span class="string">"<span class="number">31.<span class="purple">2</span></span>.<span class="purple">2023</span>"</span></span>)<span class="keyword">;</span>
</pre>

<code style="color: red;">
Error: Cannot parse DatumVrijeme from tekst "31.2.2023" 
</code>

### datumVrijemePoFormatu

The `datumVrijemePoFormatu` function parses a `DatumVrijeme` object out of a provided `tekst` according to the provided format.

<pre>
ƒ datumVrijemePoFormatu (str: <span class="keyword">tekst</span><span class="keyword">,</span> format: <span class="keyword">tekst</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * str - `tekst` to parse
  * format - `tekst` representing format to parse by
- returns:
  * `DatumVrijeme` object parsed from `str`
- special cases:
  * Throws exception if `str` cannot be parsed
  * Throws exception if `format` is not a valid time format


<pre>
<span class="keyword">var</span> date = datumVrijemePoFormatu(<span class="string"><span class="string">"<span class="number">11</span>/<span class="number">10</span>/2000"</span></span><span class="keyword">,</span> <span class="string"><span class="string">"dd/MM/yyyy"</span></span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">11.<span class="purple">10</span></span>.<span class="number">2000</span>
</pre>

Invalid date example:

<pre>
<span class="keyword">var</span> date = datumVrijemeIzTeksta(<span class="string"><span class="string">"<span class="number">96</span>/<span class="number">10</span>/2000"</span></span><span class="keyword">,</span> <span class="string"><span class="string">"dd/MM/yyyy"</span></span>)<span class="keyword">;</span>
</pre>

<code style="color: red;">
Error: Cannot parse DatumVrijeme from tekst "96/10/2000".
</code>

Invalid format example:

<pre>
<span class="keyword">var</span> date = datumVrijemeIzTeksta(<span class="string"><span class="string">"<span class="number">11</span>/<span class="number">10</span>/2000"</span></span><span class="keyword">,</span> <span class="string"><span class="string">"yy/YY/yyyy"</span></span>)<span class="keyword">;</span>
</pre>

<code style="color: red;">
Error: 'yy/YY/yyyy' is not a valid time format. 
</code>

<pre>
<span class="number">28.<span class="purple">8</span></span>.<span class="number">2023</span>
</pre>

### DatumVrijeme constructor

You can use the DatumVrijeme constructor to construct a DatumVrijeme object by providing a value for day, month and year.

<pre>
ƒ DatumVrijeme (
    day: <span class="keyword">broj</span><span class="keyword">,</span>
    month: <span class="keyword">broj</span><span class="keyword">,</span>
    year: <span class="keyword">broj</span><span class="keyword">,</span>
    hour: <span class="keyword">broj</span><span class="keyword">,</span>
    minute: <span class="keyword">broj</span>
) : <span class="keyword">objekat</span>
</pre>

- takes:
  * day - `broj` between 1 and 31
  * month - `broj` between 1 and 12
  * year - `broj` between -999999999 and 999999999
  * hour - `broj` between 0 and 59
  * minute - `broj` between 0 and 59
- returns:
  * `DatumVrijeme` object according to the provided day, month, year, hour and minute
- special cases:
  * Throws exception if `year`, `month`, `day`, `hour` or `minute` is an invalid value

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number"><span class="number">28</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">8</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">2023</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">12</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">15</span></span>:)<span class="keyword">;</span>

ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">28.<span class="purple">8</span></span>.<span class="number">2023</span>
</pre>

### puniDatum

The `puniDatum` function gives you more control than the DatumVrijeme constructor. It allows you to provide values for
seconds and nanoseconds.

<pre>
ƒ puniDatum (
    day: <span class="keyword">broj</span><span class="keyword">,</span> 
    month: <span class="keyword">broj</span><span class="keyword">,</span> 
    year: <span class="keyword">broj</span><span class="keyword">,</span> 
    hour: <span class="keyword">broj</span><span class="keyword">,</span> 
    minute: <span class="keyword">broj</span><span class="keyword">,</span> 
    seconds: <span class="keyword">broj</span><span class="keyword">,</span> 
    nanoseconds: <span class="keyword">broj</span>
) : <span class="keyword">objekat</span>
</pre>

- takes:
  * day - `broj` between 1 and 31
  * month - `broj` between 1 and 12
  * year - `broj` between -999999999 and 999999999
  * hours - `broj` between 0 and 59
  * minutes - `broj` between 0 and 59
  * seconds - `broj` between 0 and 59
  * nanoseconds - `broj` between 0 and 999999999
- returns:
  * `DatumVrijeme` object according to the provided day, month and year
- special cases:
  * Throws exception if `year`, `month`, `day`, `hour`, `minute`, `second` or `nanosecond` is an invalid value

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number"><span class="number">28</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">8</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">2023</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">12</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">15</span></span>:)<span class="keyword">;</span>

ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string"><span class="string">"."</span></span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

## DatumVrijeme object

### godina
The `godina` property is a `broj` holding the year part of the DatumVrijeme object.

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number"><span class="number">11</span></span>:<span class="keyword">,</span><span class="number"><span class="number">10</span></span>:<span class="keyword">,</span><span class="number"><span class="number">2023</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">12</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">15</span></span>:)<span class="keyword">;</span>
ispis(date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">2000</span>
</pre>

### mjesec
The `godina` property is a `broj` holding the year part of the DatumVrijeme object.

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number"><span class="number">11</span></span>:<span class="keyword">,</span><span class="number"><span class="number">10</span></span>:<span class="keyword">,</span><span class="number"><span class="number">2023</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">12</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">15</span></span>:)<span class="keyword">;</span>
ispis(date.<span class="purple">mjesec</span>)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number"><span class="number">10</span></span>:
</pre>

### danGodine
The `danGodine` property is a `broj` holding the day-of-year field of the DatumVrijeme object.

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number"><span class="number">11</span></span>:<span class="keyword">,</span><span class="number"><span class="number">10</span></span>:<span class="keyword">,</span><span class="number"><span class="number">2023</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">12</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">15</span></span>:)<span class="keyword">;</span>
ispis(date.<span class="purple">danGodine</span>)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number"><span class="number">284</span></span>:
</pre>

### danMjeseca
The `danMjeseca` property is a `broj` holding the day-of-month field of the DatumVrijeme object. This is the day part of the date
you will usually need.

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number"><span class="number">11</span></span>:<span class="keyword">,</span><span class="number"><span class="number">10</span></span>:<span class="keyword">,</span><span class="number"><span class="number">2023</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">12</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">15</span></span>:)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span>)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number"><span class="number">11</span></span>:
</pre>

### danSedmice
The `danSedmice` property is a `broj` holding the day-of-week field of the DatumVrijeme object, starting from 1 for Monday.

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number"><span class="number">11</span></span>:<span class="keyword">,</span><span class="number"><span class="number">10</span></span>:<span class="keyword">,</span><span class="number"><span class="number">2000</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">12</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">15</span></span>:)<span class="keyword">;</span>
ispis(date.<span class="purple">danSedmice</span>)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number"><span class="number">3</span></span>:
</pre>

### sati

The `sati` property is a `broj` holding the hours part of the DatumVrijeme object.

<pre>
<span class="keyword">var</span> v = DatumVrijeme(<span class="number"><span class="number">11</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">10</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">2023</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">15</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">22</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">0</span></span>:)<span class="keyword">;</span>

ispis(v.<span class="purple">sati</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number"><span class="number">15</span></span>:
</pre>

### minute

The `minute` property is a `broj` holding the minutes part of the DatumVrijeme object.

<pre>
<span class="keyword">var</span> v = DatumVrijeme(<span class="number"><span class="number">11</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">10</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">2023</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">15</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">22</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">0</span></span>:)<span class="keyword">;</span>

ispis(v.<span class="purple">minute</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number"><span class="number">22</span></span>:
</pre>

### sekunde

The `sekunde` property is a `broj` holding the seconds part of the DatumVrijeme object.

<pre>
<span class="keyword">var</span> v = DatumVrijeme(<span class="number"><span class="number">11</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">10</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">2023</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">15</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">22</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">33</span></span>:)<span class="keyword">;</span>

ispis(v.<span class="purple">sekunde</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number"><span class="number">33</span></span>:
</pre>

### nanosekunde

The `nanosekunde` property is a `broj` holding the nanoseconds part of the DatumVrijeme object.

<pre>
<span class="keyword">var</span> v = DatumVrijeme(<span class="number"><span class="number">11</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">10</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">2023</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">15</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">22</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">33</span></span>:)<span class="keyword">;</span>

ispis(v.<span class="purple">nanosekunde</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number"><span class="number">0</span></span>:
</pre>

### plusSati

The `plusSati` function returns a copy of the calling `DatumVrijeme` object with the specified number of hours added. The original
`DatumVrijeme` object remains unchanged.

<pre>
ƒ plusSati (hours: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * hours - number of hours to add (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of hours added
- special cases: none

<pre>
<span class="keyword">var</span> v = DatumVrijeme(<span class="number"><span class="number">11</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">10</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">2023</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">15</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">22</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">33</span></span>:)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.<span class="yellow">plusSati</span>(<span class="number"><span class="number">2</span></span>:)<span class="keyword">;</span>
ispis(nv.<span class="purple">sati</span><span class="keyword">,</span> <span class="string"><span class="string">":"</span></span><span class="keyword">,</span> nv.<span class="purple">minute</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">17</span>:<span class="number">22</span>
</pre>

### minusSati

The `minusSati` function returns a copy of the calling `DatumVrijeme` object with the specified number of hours subtracted.
The original `DatumVrijeme` object remains unchanged.

<pre>
ƒ minusSati (hours: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * hours - number of hours to subtract (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of hours subtracted
- special cases: none

<pre>
<span class="keyword">var</span> v = DatumVrijeme(<span class="number"><span class="number">11</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">10</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">2023</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">15</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">22</span></span>:<span class="keyword">,</span> <span class="number"><span class="number">33</span></span>:)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.<span class="yellow">minusSati</span>(<span class="number"><span class="number">2</span></span>:)<span class="keyword">;</span>
ispis(nv.<span class="purple">sati</span><span class="keyword">,</span> <span class="string"><span class="string">":"</span></span><span class="keyword">,</span> nv.<span class="purple">minute</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">13</span>:<span class="number">22</span>
</pre>

### plusMinuta

The `plusMinuta` function returns a copy of the calling `DatumVrijeme` object with the specified number of minutes added.
The original `DatumVrijeme` object remains unchanged.

<pre>
ƒ plusMinuta (minutes: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * minutes - number of minutes to add (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of minutes added
- special cases: none

<pre>
<span class="keyword">var</span> v = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2023</span><span class="keyword">,</span> <span class="number">15</span><span class="keyword">,</span> <span class="number">22</span><span class="keyword">,</span> <span class="number">33</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.<span class="yellow">plusMinuta</span>(<span class="number">23</span>)<span class="keyword">;</span>
ispis(nv.<span class="purple">sati</span><span class="keyword">,</span> <span class="string"><span class="string">":"</span></span><span class="keyword">,</span> nv.<span class="purple">minute</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">15</span>:<span class="number">45</span>
</pre>

### minusMinuta

The `minusMinuta` function returns a copy of the calling `DatumVrijeme` object with the specified number of minutes subtracted.
The original `DatumVrijeme` object remains unchanged.

<pre>
ƒ minusMinuta (minutes: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * minutes - number of minutes to add (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of minutes subtracted
- special cases: none

<pre>
<span class="keyword">var</span> v = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2023</span><span class="keyword">,</span> <span class="number">15</span><span class="keyword">,</span> <span class="number">22</span><span class="keyword">,</span> <span class="number">33</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.<span class="yellow">minusMinuta</span>(<span class="number">22</span>)<span class="keyword">;</span>
ispis(nv.<span class="purple">sati</span><span class="keyword">,</span> <span class="string"><span class="string">":"</span></span><span class="keyword">,</span> nv.<span class="purple">minute</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">15</span>:<span class="number">00</span>
</pre>

### plusSekundi

The `plusSekundi` function returns a copy of the calling `DatumVrijeme` object with the specified number of minutes added.
The original `DatumVrijeme` object remains unchanged.

<pre>
ƒ plusSekundi (seconds: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * seconds - number of seconds to add (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of seconds added
- special cases: none

<pre>
<span class="keyword">var</span> v = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2023</span><span class="keyword">,</span> <span class="number">15</span><span class="keyword">,</span> <span class="number">22</span><span class="keyword">,</span> <span class="number">33</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.<span class="yellow">plusSekundi</span>(<span class="number">23</span>)<span class="keyword">;</span>
ispis(nv.<span class="purple">sati</span><span class="keyword">,</span> <span class="string"><span class="string">":"</span></span><span class="keyword">,</span> nv.<span class="purple">minute</span><span class="keyword">,</span> <span class="string"><span class="string">":"</span></span><span class="keyword">,</span> nv.<span class="purple">sekunde</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">15</span>:<span class="number">22</span>:<span class="number">56</span>
</pre>

### minusSekundi

The `minusSekundi` function returns a copy of the calling `DatumVrijeme` object with the specified number of minutes subtracted.
The original `DatumVrijeme` object remains unchanged.

<pre>
ƒ minusSekundi (seconds: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * seconds - number of seconds to add (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of seconds subtracted
- special cases: none

<pre>
<span class="keyword">var</span> v = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2023</span><span class="keyword">,</span> <span class="number">15</span><span class="keyword">,</span> <span class="number">22</span><span class="keyword">,</span> <span class="number">33</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.<span class="yellow">minusSekundi</span>(<span class="number">22</span>)<span class="keyword">;</span>
ispis(nv.<span class="purple">sati</span><span class="keyword">,</span> <span class="string"><span class="string">":"</span></span><span class="keyword">,</span> nv.<span class="purple">minute</span><span class="keyword">,</span> <span class="string">":"</span><span class="keyword">,</span> nv.<span class="purple">sekunde</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">15</span>:<span class="number">22</span>:<span class="number">11</span>
</pre>

### plusNanoSekundi

The `plusNanoSekundi` function returns a copy of the calling `DatumVrijeme` object with the specified number of nanoseconds added.
The original `DatumVrijeme` object remains unchanged.

<pre>
ƒ plusNanoSekundi (nanoseconds: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * nanoseconds - number of nanoseconds to add (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of nanoseconds added
- special cases: none

<pre>
<span class="keyword">var</span> v = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2023</span><span class="keyword">,</span> <span class="number">15</span><span class="keyword">,</span> <span class="number">22</span><span class="keyword">,</span> <span class="number">33</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.<span class="yellow">plusNanoSekundi</span>(<span class="number">23</span>)<span class="keyword">;</span>
ispis(nv.<span class="purple">nanosekunde</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">23</span>
</pre>

### minusNanoSekundi

The `minusNanoSekundi` function returns a copy of the calling `DatumVrijeme` object with the specified number of nanoseconds subtracted.
The original `DatumVrijeme` object remains unchanged.

<pre>
ƒ minusNanoSekundi (nanoseconds: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * nanoseconds - number of nanoseconds to add (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of nanoseconds subtracted
- special cases: none

<pre>
<span class="keyword">var</span> v = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2023</span><span class="keyword">,</span> <span class="number">15</span><span class="keyword">,</span> <span class="number">22</span><span class="keyword">,</span> <span class="number">00</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.<span class="yellow">minusNanoSekundi</span>(<span class="number">22</span>)<span class="keyword">;</span>
ispis(nv.<span class="purple">nanosekunde</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">38</span>
</pre>

### plusDana

The `plusDana` function returns a copy of the calling `DatumVrijeme` object with the specified number of days added. The original
`DatumVrijeme` object remains unchanged.

<pre>
ƒ plusDana (days: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * days - number of days to add (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of days added
- special cases: none

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2023</span><span class="keyword">,</span> <span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">plusDana</span>(<span class="number">10</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">21.<span class="purple">10</span></span>.<span class="number">2000</span>
</pre>

### minusDana

The `minusDana` function returns a copy of the calling `DatumVrijeme` object with the specified number of days subtracted.
The original `DatumVrijeme` object remains unchanged.

<pre>
ƒ minusDana (days: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * days - number of days to subtract (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of days subtracted
- special cases: none

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">minusDana</span>(<span class="number">10</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">1.<span class="purple">10</span></span>.<span class="number">2000</span>
</pre>

### plusSedmica

The `plusSedmica` function returns a copy of the calling `DatumVrijeme` object with the specified number of weeks added. The original
`DatumVrijeme` object remains unchanged.

<pre>
ƒ plusSedmica (weeks: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * weeks - number of weeks to add (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of weeks added
- special cases: none

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">plusSedmica</span>(<span class="number">2</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">25.<span class="purple">10</span></span>.<span class="number">2000</span>
</pre>
### minusSedmica

The `minusSedmica` function returns a copy of the calling `DatumVrijeme` object with the specified number of weeks subtracted.
The original `DatumVrijeme` object remains unchanged.

<pre>
ƒ minusSedmica (weeks: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * weeks - number of weeks to subtract (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of weeks subtracted
- special cases: none

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">minusSedmica</span>(<span class="number">1</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">4.<span class="purple">10</span></span>.<span class="number">2000</span>
</pre>

### plusMjeseci

The `plusMjeseci` function returns a copy of the calling `DatumVrijeme` object with the specified number of months added.
The original `DatumVrijeme` object remains unchanged.

<pre>
ƒ plusMjeseci (months: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * months - number of months to add (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of months added
- special cases: none

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">plusMjeseci</span>(<span class="number">2</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">11.<span class="purple">12</span></span>.<span class="number">2000</span>
</pre>

### minusMjeseci

The `minusMjeseci` function returns a copy of the calling `DatumVrijeme` object with the specified number of months added.
The original `DatumVrijeme` object remains unchanged.

<pre>
ƒ minusMjeseci (months: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * months - number of months to add (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of months added
- special cases: none

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">minusMjeseci</span>(<span class="number">2</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">11.<span class="purple">8</span></span>.<span class="number">2000</span>
</pre>

### plusGodina

The `plusGodina` function returns a copy of the calling `DatumVrijeme` object with the specified number of years added.
The original `DatumVrijeme` object remains unchanged.

<pre>
ƒ plusGodina (years: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * years - number of years to add (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of years added
- special cases: none

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">plusGodina</span>(<span class="number">23</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">11.<span class="purple">10</span></span>.<span class="number">2023</span>
</pre>

### minusGodina

The `minusGodina` function returns a copy of the calling `DatumVrijeme` object with the specified number of years subtracted.
The original `DatumVrijeme` object remains unchanged.

<pre>
ƒ minusGodina (years: <span class="keyword">broj</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * years - number of years to subtract (`broj`)
- returns:
  * new `DatumVrijeme` object with the specified number of years subtracted
- special cases: none

<pre>
<span class="keyword">var</span> date = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span><span class="number">10</span><span class="keyword">,</span><span class="number">2000</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>

<span class="keyword">var</span> nd = date.<span class="yellow">minusGodina</span>(<span class="number">20</span>)<span class="keyword">;</span>
ispis(date.<span class="purple">danMjeseca</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">mjesec</span><span class="keyword">,</span> <span class="string">"."</span><span class="keyword">,</span> date.<span class="purple">godina</span>)<span class="keyword">;</span>
</pre>

<pre>
<span class="number">11.<span class="purple">10</span></span>.<span class="number">1980</span>
</pre>


### periodIzmedju

The `periodIzmedju` function determines how much time has passed between the calling `DatumVrijeme` object and the provided
other `DatumVrijeme` object.

<pre>
ƒ periodIzmedju (other: <span class="keyword">objekat</span>) : <span class="keyword">objekat</span>
</pre>

- takes:
  * other - `DatumVrijeme` object
- returns:
  * `DatumVrijeme` object representing the time passed between calling `DatumVrijeme` and `other`
- special cases: none

<pre>
<span class="keyword">var</span> d1 = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2000</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>
<span class="keyword">var</span> d2 = DatumVrijeme(<span class="number">14</span><span class="keyword">,</span> <span class="number">1</span><span class="keyword">,</span> <span class="number">2003</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>

ispis(d1.<span class="yellow">periodIzmedju</span>(d2))<span class="keyword">;</span>
</pre>

<pre>
Output:

{ godine: <span class="number">2</span><span class="keyword">,</span> mjeseci: <span class="number">3</span><span class="keyword">,</span> dani: <span class="number">3</span> }
</pre>

### jePoslije

The `jePoslije` function determines whether the calling `DatumVrijeme` object is after the provided
other `DatumVrijeme` object.

<pre>
ƒ jePoslije (other: <span class="keyword">objekat</span>) : <span class="keyword">logički</span>
</pre>

- takes:
  * other - `DatumVrijeme` object
- returns: `logički`
  * `tačno` if the calling `DatumVrijeme` object is after `other`
  * `netačno` otherwise
- special cases: none

<pre>
<span class="keyword">var</span> d1 = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2000</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>
<span class="keyword">var</span> d2 = DatumVrijeme(<span class="number">14</span><span class="keyword">,</span> <span class="number">1</span><span class="keyword">,</span> <span class="number">2003</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>

ispis(d1.<span class="yellow">jePoslije</span>(d2))<span class="keyword">;</span>
ispis(d2.<span class="yellow">jePoslije</span>(d1))<span class="keyword">;</span>
</pre>

<pre>
Output:

netačno
tačno
</pre>

### jePrije

The `jePrije` function determines whether the calling `DatumVrijeme` object is before the provided
other `DatumVrijeme` object.

<pre>
ƒ jePrije (other: <span class="keyword">objekat</span>) : <span class="keyword">logički</span>
</pre>

- takes:
  * other - `DatumVrijeme` object
- returns: `logički`
  * `tačno` if the calling `DatumVrijeme` object is before `other`
  * `netačno` otherwise
- special cases: none

<pre>
<span class="keyword">var</span> d1 = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2000</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>
<span class="keyword">var</span> d2 = DatumVrijeme(<span class="number">14</span><span class="keyword">,</span> <span class="number">1</span><span class="keyword">,</span> <span class="number">2003</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>

ispis(d1.<span class="yellow">jePrije</span>(d2))<span class="keyword">;</span>
ispis(d2.<span class="yellow">jePrije</span>(d1))<span class="keyword">;</span>
</pre>

<pre>
Output:

tačno
netačno
</pre>

### jednako

The `jednako` function determines whether the calling `DatumVrijeme` object is equal to the provided
other `DatumVrijeme` object.

<pre>
ƒ jednako (other: <span class="keyword">objekat</span>) : <span class="keyword">logički</span>
</pre>

- takes:
  * other - `DatumVrijeme` object
- returns: `logički`
  * `tačno` if the calling `DatumVrijeme` object and `other` have the same year, month, day, hours, miutes, seconds and nanoseconds values
  * `netačno` otherwise
- special cases: none

<pre>
<span class="keyword">var</span> t1 = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2000</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>
<span class="keyword">var</span> t2 = DatumVrijeme(<span class="number">11</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">2023</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>

<span class="keyword">var</span> t3 = DatumVrijeme(<span class="number">14</span><span class="keyword">,</span> <span class="number">1</span><span class="keyword">,</span> <span class="number">2003</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>
<span class="keyword">var</span> t4 = DatumVrijeme(<span class="number">14</span><span class="keyword">,</span> <span class="number">1</span><span class="keyword">,</span> <span class="number">2003</span><span class="keyword">,</span> <span class="number">12</span><span class="keyword">,</span> <span class="number">15</span>)<span class="keyword">;</span>

ispis(t1.<span class="yellow">jednako</span>(t2))<span class="keyword">;</span>
ispis(t3.<span class="yellow">jednako</span>(t4))<span class="keyword">;</span>
</pre>

<pre>
Output:

netačno
tačno
</pre>