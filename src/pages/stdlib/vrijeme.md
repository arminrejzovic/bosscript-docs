---
layout: '../../layouts/DocumentationLayout.astro'
title: Vrijeme
translation: "/en/stdlib/vrijeme"
---

# Vrijeme

<pre>
<span class="keyword">paket</span> "vrijeme"<span class="keyword">;</span>
</pre>

The `vrijeme` package provides a way to work with local time. The package includes the following functions and properties:

1. vrijemeSada
2. vrijemeIzTeksta
3. vrijemePoFormatu
4. Vrijeme

All four functions return a `Vrijeme` object, which contains the following functions and properties:

1. sati 
2. minute 
3. sekunde 
4. nanosekunde 
5. plusSati 
6. minusSati 
7. plusMinuta 
8. minusMinuta 
9. plusSekundi 
10. minusSekundi 
11. plusNanosekundi 
12. minusNanosekundi 
13. periodIzmedju 
14. jePoslije 
15. jePrije 
16. naDatum 
17. jednako

## Package functions

### vrijemeSada

The `vrijemeSada` function returns a `Vrijeme` object representing the current time from the system clock in the default
time-zone.

- takes: no parameters
- returns:
  * `Vrijeme` object representing the current time
- special cases: none

<pre>
<span class="keyword">var</span> now = vrijemeSada()<span class="keyword">;</span>
ispis(now.sati<span class="keyword">,</span> ":"<span class="keyword">,</span> now.minute)<span class="keyword">;</span>
</pre>

<pre>
14:29
</pre>

### vrijemeIzTeksta

The `vrijemeIzTeksta` function parses a `Vrijeme` object out of a provided `tekst` in the `HH:mm:ss` format.

- takes: str - `tekst` to parse
- returns:
  * `Vrijeme` object parsed from `str`
- special cases:
  * Throws exception if `str` cannot be parsed


<pre>
<span class="keyword">var</span> time = vrijemeIzTeksta("14:44:00")<span class="keyword">;</span>
ispis(time.sati<span class="keyword">,</span> ":"<span class="keyword">,</span> time.minute)<span class="keyword">;</span>
</pre>

<pre>
14:44
</pre>

Invalid `tekst` example:

<pre>
<span class="keyword">var</span> time = vrijemeIzTeksta("25::44::00")<span class="keyword">;</span>
</pre>

<code class="error">
Error: Cannot parse Vrijeme from tekst "25::44::00" 
</code>

### vrijemePoFormatu

The `vrijemePoFormatu` function parses a `Vrijeme` object out of a provided `tekst` according to the provided format.

- takes: 
  * str - `tekst` to parse
  * format - `tekst` representing format to parse by
- returns:
  * `Vrijeme` object parsed from `str`
- special cases:
  * Throws exception if `str` cannot be parsed
  * Throws exception if `format` is not a valid time format


<pre>
<span class="keyword">var</span> time = vrijemePoFormatu("14 44 00"<span class="keyword">,</span> "HH mm ss")<span class="keyword">;</span>
ispis(time.sati<span class="keyword">,</span> ":"<span class="keyword">,</span> time.minute)<span class="keyword">;</span>
</pre>

<pre>
14:44
</pre>

Invalid date example:

<pre>
<span class="keyword">var</span> time = vrijemeIzTeksta("25 44 00"<span class="keyword">,</span> "HH mm ss")<span class="keyword">;</span>
</pre>

<code class="error">
Error: Cannot parse Vrijeme from tekst "25 44 00".
</code>

Invalid format example:

<pre>
<span class="keyword">var</span> time = vrijemeIzTeksta("14 44 00"<span class="keyword">,</span> "HH hh hh")<span class="keyword">;</span>
</pre>

<code style="color: red<span class="keyword">;</span>">
Error: 'HH hh hh' is not a valid time format. 
</code>


### Vrijeme constructor

You can use the Vrijeme constructor to construct a Vrijeme object by providing a value for hours, minutes and seconds.

- takes:
  * hours - `broj` between 0 and 23
  * minutes - `broj` between 0 and 59
  * seconds - `broj` between 0 and 59
- returns:
  * `Vrijeme` object according to the provided hours, minutes and seconds
- special cases:
  * Throws exception if `hours`, `minutes`, or `seconds` is an invalid value

<pre>
<span class="keyword">var</span> v = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 0)<span class="keyword">;</span>

ispis(v.sati<span class="keyword">,</span> ":"<span class="keyword">,</span> v.minute)<span class="keyword">;</span>
</pre>

<pre>
15:22
</pre>

## Vrijeme object

### sati

The `sati` property is a `broj` holding the hours part of the Vrijeme object.

<pre>
<span class="keyword">var</span> v = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 0)<span class="keyword">;</span>

ispis(v.sati)<span class="keyword">;</span>
</pre>

<pre>
15
</pre>

### minute

The `minute` property is a `broj` holding the minutes part of the Vrijeme object.

<pre>
<span class="keyword">var</span> v = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 0)<span class="keyword">;</span>

ispis(v.minute)<span class="keyword">;</span>
</pre>

<pre>
22
</pre>

### sekunde

The `sekunde` property is a `broj` holding the seconds part of the Vrijeme object.

<pre>
<span class="keyword">var</span> v = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 33)<span class="keyword">;</span>

ispis(v.sekunde)<span class="keyword">;</span>
</pre>

<pre>
33
</pre>

### nanosekunde

The `nanosekunde` property is a `broj` holding the nanoseconds part of the Vrijeme object.

<pre>
<span class="keyword">var</span> v = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 33)<span class="keyword">;</span>

ispis(v.nanosekunde)<span class="keyword">;</span>
</pre>

<pre>
0
</pre>

### plusSati

The `plusSati` function returns a copy of the calling `Vrijeme` object with the specified number of hours added. The original
`Vrijeme` object remains unchanged.

- takes:
  * hours - number of hours to add (`broj`)
- returns:
  * new `Vrijeme` object with the specified number of hours added
- special cases: none

<pre>
<span class="keyword">var</span> v = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 33)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.plusSati(2)<span class="keyword">;</span>
ispis(nv.sati<span class="keyword">,</span> ":"<span class="keyword">,</span> nv.minute)<span class="keyword">;</span>
</pre>

<pre>
17:22
</pre>

### minusSati

The `minusSati` function returns a copy of the calling `Vrijeme` object with the specified number of hours subtracted. 
The original `Vrijeme` object remains unchanged.

- takes:
  * hours - number of hours to subtract (`broj`)
- returns:
  * new `Vrijeme` object with the specified number of hours subtracted
- special cases: none

<pre>
<span class="keyword">var</span> v = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 33)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.minusSati(2)<span class="keyword">;</span>
ispis(nv.sati<span class="keyword">,</span> ":"<span class="keyword">,</span> nv.minute)<span class="keyword">;</span>
</pre>

<pre>
13:22
</pre>

### plusMinuta

The `plusMinuta` function returns a copy of the calling `Vrijeme` object with the specified number of minutes added. 
The original `Vrijeme` object remains unchanged.

- takes:
  * minutes - number of minutes to add (`broj`)
- returns:
  * new `Vrijeme` object with the specified number of minutes added
- special cases: none

<pre>
<span class="keyword">var</span> v = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 33)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.plusMinuta(23)<span class="keyword">;</span>
ispis(nv.sati<span class="keyword">,</span> ":"<span class="keyword">,</span> nv.minute)<span class="keyword">;</span>
</pre>

<pre>
15:45
</pre>

### minusMinuta

The `minusMinuta` function returns a copy of the calling `Vrijeme` object with the specified number of minutes subtracted.
The original `Vrijeme` object remains unchanged.

- takes:
  * minutes - number of minutes to add (`broj`)
- returns:
  * new `Vrijeme` object with the specified number of minutes subtracted
- special cases: none

<pre>
<span class="keyword">var</span> v = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 33)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.minusMinuta(22)<span class="keyword">;</span>
ispis(nv.sati<span class="keyword">,</span> ":"<span class="keyword">,</span> nv.minute)<span class="keyword">;</span>
</pre>

<pre>
15:00
</pre>

### plusSekundi

The `plusSekundi` function returns a copy of the calling `Vrijeme` object with the specified number of minutes added.
The original `Vrijeme` object remains unchanged.

- takes:
  * seconds - number of seconds to add (`broj`)
- returns:
  * new `Vrijeme` object with the specified number of seconds added
- special cases: none

<pre>
<span class="keyword">var</span> v = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 33)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.plusSekundi(23)<span class="keyword">;</span>
ispis(nv.sati<span class="keyword">,</span> ":"<span class="keyword">,</span> nv.minute<span class="keyword">,</span> ":"<span class="keyword">,</span> nv.sekunde)<span class="keyword">;</span>
</pre>

<pre>
15:22:56
</pre>

### minusSekundi

The `minusSekundi` function returns a copy of the calling `Vrijeme` object with the specified number of minutes subtracted.
The original `Vrijeme` object remains unchanged.

- takes:
  * seconds - number of seconds to add (`broj`)
- returns:
  * new `Vrijeme` object with the specified number of seconds subtracted
- special cases: none

<pre>
<span class="keyword">var</span> v = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 33)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.minusSekundi(22)<span class="keyword">;</span>
ispis(nv.sati<span class="keyword">,</span> ":"<span class="keyword">,</span> nv.minute<span class="keyword">,</span> ":"<span class="keyword">,</span> nv.sekunde)<span class="keyword">;</span>
</pre>

<pre>
15:22:11
</pre>

### plusNanoSekundi

The `plusNanoSekundi` function returns a copy of the calling `Vrijeme` object with the specified number of nanoseconds added.
The original `Vrijeme` object remains unchanged.

- takes:
  * nanoseconds - number of nanoseconds to add (`broj`)
- returns:
  * new `Vrijeme` object with the specified number of nanoseconds added
- special cases: none

<pre>
<span class="keyword">var</span> v = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 33)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.plusNanoSekundi(23)<span class="keyword">;</span>
ispis(nv.nanosekunde)<span class="keyword">;</span>
</pre>

<pre>
23
</pre>

### minusNanoSekundi

The `minusNanoSekundi` function returns a copy of the calling `Vrijeme` object with the specified number of nanoseconds subtracted.
The original `Vrijeme` object remains unchanged.

- takes:
  * nanoseconds - number of nanoseconds to add (`broj`)
- returns:
  * new `Vrijeme` object with the specified number of nanoseconds subtracted
- special cases: none

<pre>
<span class="keyword">var</span> v = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 00)<span class="keyword">;</span>

<span class="keyword">var</span> nv = v.minusNanoSekundi(22)<span class="keyword">;</span>
ispis(nv.nanosekunde)<span class="keyword">;</span>
</pre>

<pre>
38
</pre>

### periodIzmedju

The `periodIzmedju` function determines how much time has passed between the calling `Vrijeme` object and the provided 
other `Vrijeme` object.

- takes:
  * other - `Vrijeme` object
- returns:
  * `Vrijeme` object representing the time passed between calling `Vrijeme` and `other`
- special cases: none

<pre>
<span class="keyword">var</span> vj = Vrijeme(12<span class="keyword">,</span> 30<span class="keyword">,</span> 0)<span class="keyword">;</span>
<span class="keyword">var</span> vd = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 0)<span class="keyword">;</span>

ispis("12:30"<span class="keyword">,</span> " do "<span class="keyword">,</span> "15:22"<span class="keyword">,</span> ": ")<span class="keyword">;</span>
ispis(vj.periodIzmedju(vd))<span class="keyword">;</span>
</pre>

<pre>
Output:

{ sati: 2, minute: 52, sekunde: 0 }
</pre>

### jePoslije

The `jePoslije` function determines whether the calling `Vrijeme` object is after the provided
other `Vrijeme` object.

- takes:
  * other - `Vrijeme` object
- returns: `logički`
  * `tačno` if the calling `Vrijeme` object is after `other`
  * `netačno` otherwise
- special cases: none

<pre>
<span class="keyword">var</span> t1 = Vrijeme(12<span class="keyword">,</span> 30<span class="keyword">,</span> 0)<span class="keyword">;</span>
<span class="keyword">var</span> t2 = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 0)<span class="keyword">;</span>

ispis(t1.jePoslije(t2))<span class="keyword">;</span>
ispis(t2.jePoslije(t1))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="keyword">netačno</span>
<span class="keyword">tačno</span>
</pre>

### jePrije

The `jePrije` function determines whether the calling `Vrijeme` object is before the provided
other `Vrijeme` object.

- takes:
  * other - `Vrijeme` object
- returns: `logički`
  * `tačno` if the calling `Vrijeme` object is before `other`
  * `netačno` otherwise
- special cases: none

<pre>
<span class="keyword">var</span> t1 = Vrijeme(12<span class="keyword">,</span> 30<span class="keyword">,</span> 0)<span class="keyword">;</span>
<span class="keyword">var</span> t2 = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 0)<span class="keyword">;</span>

ispis(t1.jePrije(t2))<span class="keyword">;</span>
ispis(t2.jePrije(t1))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="keyword">tačno</span>
<span class="keyword">netačno</span>
</pre>

### naDatum

The `naDatum` function combines the calling `Vrijeme` object with a provided `Datum` object into a new
`DatumVrijeme` object.

- takes:
  * date - `Datum` object
- returns: `DatumVrijeme` object which combines the calling `Vrijeme` and `date`
- special cases: none

<pre>
<span class="keyword">var</span> datum = {
  godina: 2023<span class="keyword">,</span>
  mjesec: 5<span class="keyword">,</span>
  danMjeseca: 26<span class="keyword">,</span>
}<span class="keyword">;</span>

<span class="keyword">var</span> sati = Vrijeme(18<span class="keyword">,</span> 30<span class="keyword">,</span> 0)<span class="keyword">;</span>

<span class="keyword">var</span> dv = sati.naDatum(datum)<span class="keyword">;</span>

ispis(dv.danMjeseca<span class="keyword">,</span> "."<span class="keyword">,</span> dv.mjesec<span class="keyword">,</span> "."<span class="keyword">,</span> dv.godina)<span class="keyword">;</span>
ispis(dv.sati<span class="keyword">,</span> ":"<span class="keyword">,</span> dv.minute<span class="keyword">,</span> ":"<span class="keyword">,</span> dv.sekunde)<span class="keyword">;</span>
</pre>

<pre>
Output:

26.5.2023
18:30:00
</pre>

### jednako

The `jednako` function determines whether the calling `Vrijeme` object is equal to the provided
other `Vrijeme` object.

- takes:
  * other - `Vrijeme` object
- returns: `logički`
  * `tačno` if the calling `Vrijeme` object and `other` have the same hours, minutes, seconds and nanosecond values
  * `netačno` otherwise
- special cases: none

<pre>
<span class="keyword">var</span> t1 = Vrijeme(12<span class="keyword">,</span> 30<span class="keyword">,</span> 0)<span class="keyword">;</span>
<span class="keyword">var</span> t2 = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 0)<span class="keyword">;</span>
<span class="keyword">var</span> t3 = Vrijeme(15<span class="keyword">,</span> 22<span class="keyword">,</span> 0)<span class="keyword">;</span>

ispis(t1.jednako(t2))<span class="keyword">;</span>
ispis(t2.jednako(t3))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="keyword">netačno</span>
<span class="keyword">tačno</span>
</pre>