---
layout: '../../layouts/DocumentationLayout.astro'
title: Matematika
translation: "/en/stdlib/matematika"
---

# Matematika

<pre>
<span class="keyword">paket</span> <span class="string">"matematika"</span><span class="keyword">;</span>
</pre>

The `matematika` package comes with various mathematical functions and constants. Below is a comprehensive list.

Variables:
1. [pi](#constant-pi)
2. [e](#constant-e)
3. [beskonacno](#infinity)
4. [minusBeskonacno](#infinity)

Functions:
1. [apsolutnaVrijednost](#apsolutnavrijednost)
2. [arccos](#arccos)
3. [arcsin](#arcsin)
4. [sin](#sin)
5. [cos](#cos)
6. [tg](#tg)
7. [arctg](#arctg)
8. [korijen](#korijen)
9. [eNa](#ena)
10. [ln](#ln)
11. [log](#log)
12. [log10](#log10)
13. [log2](#log2)
14. [max](#max)
15. [min](#min)
16. [zaokruzi](#zaokruzi)
17. [kubniKorijen](#kubnikorijen)
18. [uStepenima](#ustepenima)

## Variables

### Constant `pi`

Pi is the mathematical constant that represents the ratio of a circle's circumference to its diameter.

<pre>
ispis(pi)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">3.141592653589793</span>
</pre>

### Constant `e`

`e` is the mathematical constant known as Euler's number. It is the base of the natural logarithm.

<pre>
ispis(e)<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">2.718281828459045</span>
</pre>

### Infinity

Bosscript has separate constants for positive and negative infinity.

<pre>
ispis(bes<span class="keyword">konacno</span>)<span class="keyword">;</span>
ispis(minusBes<span class="keyword">konacno</span>)<span class="keyword">;</span>
</pre>

<pre>
ispis(apsolutnaVrijednost(<span class="number">22</span>))<span class="keyword">;</span>

ispis(apsolutnaVrijednost(<span class="number">-22</span>))<span class="keyword">;</span>

ispis(apsolutnaVrijednost(<span class="number">0</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">22</span>
<span class="number">22</span>
<span class="number">0</span>
</pre>

### arccos

The `arccos` function returns the arc cosine of a provided `broj`.

- takes: x - `broj`
- returns: an angle in the range from 0.0 to PI radians (`broj`)
- special cases
  * returns `NaN` if `x` is greater than 1 or lower than -1

<pre>
ispis(arccos(<span class="number">1</span>))<span class="keyword">;</span>

ispis(arccos(<span class="number">0</span>))<span class="keyword">;</span>

ispis(arccos(<span class="number">100</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">0</span>
<span class="number">1.5707963267948966</span> <span class=<span class="string">"comment"</span>>// π/<span class="number">2</span></span>
NaN
</pre>

### arcsin

The `arcsin` function returns the arc sine of a provided `broj`.

- takes: x - `broj`
- returns: an angle in the range from -PI/2 to PI/2 radians (`broj`)
- special cases
  * returns `NaN` if `x` is greater than 1 or lower than -1

<pre>
ispis(arcsin(<span class="number">0</span>))<span class="keyword">;</span>

ispis(arcsin(<span class="number">1</span>))<span class="keyword">;</span>

ispis(arcsin(<span class="number">100</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">0</span>
<span class="number">1.5707963267948966</span> <span class=<span class="string">"comment"</span>>// π/<span class="number">2</span></span>
NaN
</pre>

### sin

The `sin` function returns the sine of a provided `broj`.

- takes: x - angle expressed in degrees (`broj`)
- returns: sine of the provided angle (`broj`)
- special cases
  * returns `NaN` if `x` is NaN or Infinity

<pre>
ispis(sin(<span class="number">90</span>))<span class="keyword">;</span>

ispis(sin(<span class="number">0</span>))<span class="keyword">;</span>

ispis(sin(<span class="number">45</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">1</span>
<span class="number">0</span>
<span class="number">0.7071067811865475</span>
</pre>

### cos

The `cos` function returns the cosine of a provided `broj`.

- takes: x - angle expressed in degrees (`broj`)
- returns: cosine of the provided angle (`broj`)
- special cases
  * returns `NaN` if `x` is NaN or Infinity

<pre>
ispis(cos(<span class="number">90</span>))<span class="keyword">;</span>

ispis(cos(<span class="number">0</span>))<span class="keyword">;</span>

ispis(cos(<span class="number">45</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">0</span>
<span class="number">1</span>
<span class="number">0.7071067811865476</span>
</pre>

### tg

The `tg` function returns the tangent of a provided `broj`.

- takes: x - angle expressed in degrees (`broj`)
- returns: sine of the provided angle (`broj`)
- special cases
  * returns `NaN` if `x` is NaN or Infinity

<pre>
ispis(tg(<span class="number">90</span>))<span class="keyword">;</span>

ispis(tg(<span class="number">0</span>))<span class="keyword">;</span>

ispis(tg(<span class="number">45</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">1</span>.633123935319537E16 <span class=<span class="string">"comment"</span>>// Actually undefined</span>
<span class="number">0</span>
<span class="number">1</span>
</pre>

### arctg

The `arctg` function returns the arc tangent of a provided `broj`.

- takes: x - `broj`
- returns: an angle in the range from -PI/2 to PI/2 radians (`broj`)
- special cases
  * returns `NaN` if `x` is `NaN`

<pre>
ispis(arctg(<span class="number">0</span>))<span class="keyword">;</span>

ispis(arctg(<span class="number">1</span>))<span class="keyword">;</span>

ispis(arctg(<span class="number">100</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">0</span>
<span class="number">0.7853981633974483</span>
<span class="number">1.5607966601082315</span>
</pre>

### korijen

The `korijen` function returns the square root of a provided `broj`.

- takes: x - `broj`
- returns: square root of provided number (`broj`)
- special cases:
  * throws Exception if `x` is a negative number

<pre>
ispis(korijen(<span class="number">144</span>))<span class="keyword">;</span>

ispis(korijen(<span class="number">2</span>))<span class="keyword">;</span>

ispis(korijen(<span class="number">0</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">12</span>
<span class="number">1.4142135623730951</span>
<span class="number">0</span>
</pre>

<pre>
ispis(korijen(<span class="number">-1</span>))<span class="keyword">;</span>
</pre>

<code style="color: red;">
Error: Square root cannot be calculated for negative numbers. Value -1 is invalid.
</code>


### eNa

The `eNa` function returns Euler's number `e` raised to the power of the provided `broj`

- takes: x - `broj`
- returns: e<sup>x</sup> (`broj`)
- special cases:
  * when `x` is `NaN`, returns `NaN`
  * when `x` is Infinity, returns Infinity
  * when `x` is -Infinity, returns 0

<pre>
ispis(eNa(<span class="number">2</span>))<span class="keyword">;</span>

ispis(eNa(<span class="number">-1</span>))<span class="keyword">;</span>

ispis(eNa(<span class="number">0</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">7.38905609893065</span>
<span class="number">0.36787944117144233</span>
<span class="number">1</span>
</pre>

### ln

The `ln` function returns the natural logarithm of the provided `broj`.

- takes: x - `broj`
- returns: natural log of `x` (`broj`)
- special cases:
  * throws Exception when `x` < 0.0
  * ln(NaN) is NaN
  * ln(Infinity) is Infinity
  * ln(0.0) is -Infinity

<pre>
ispis(ln(<span class="number">14</span>))<span class="keyword">;</span>

ispis(ln(<span class="number">32</span>))<span class="keyword">;</span>

ispis(ln(e))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">2.6390573296152584</span>
<span class="number">3.4657359027997265</span>
<span class="number">1</span>
</pre>

<pre>
ispis(ln(<span class="number">-1</span>))<span class="keyword">;</span>
</pre>

<code style="color: red;">
Error: Cannot calculate ln of -1.0: Value must be a positive number
</code>

### log

The `log` function computes the logarithm of the value `x` to the given base `b`.

- takes: x - number (`broj`), b - base (`broj`)
- returns: log base `b` of `x`
- special cases:
  * log(x, b) is NaN if either x or b are NaN
  * log(x, b) is NaN when x < 0 or b <= 0 or b == 1.0
  * log(Infinity, Infinity) is NaN
  * log(Infinity, b) is Infinity for b > 1 and -Infinity for b < 1
  * log(0.0, b) is -Infinity for b > 1 and Infinity for b > 1

<pre>
ispis(log(<span class="number">45</span><span class="keyword">,</span> <span class="number">4</span>))<span class="keyword">;</span>

ispis(log(<span class="number">45</span><span class="keyword">,</span> <span class="number">2</span>))<span class="keyword">;</span>

ispis(log(<span class="number">45</span><span class="keyword">,</span> <span class="number">5</span>))<span class="keyword">;</span>

ispis(log(<span class="number">45</span><span class="keyword">,</span> <span class="number">1</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">2.7459265481648374</span>
<span class="number">5.491853096329675</span>
<span class="number">2.3652123889719707</span>
NaN
</pre>

### log10

The `log10` function computes the common logarithm (base 10) of the provided `broj`.

- takes: x - number (`broj`)
- returns: log base 10 of `x`
- special cases:
  * returns NaN if x is a negative number

<pre>
ispis(log10(<span class="number">142</span>))<span class="keyword">;</span>

ispis(log10(<span class="number">12</span>))<span class="keyword">;</span>

ispis(log10(<span class="number">-50</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">2.1522883443830563</span>
<span class="number">1.0791812460476249</span>
NaN
</pre>


### log2

The `log2` function computes the binary logarithm (base 2) of the provided `broj`.

- takes: x - number (`broj`)
- returns: log base 2 of `x`
- special cases:
  * returns NaN if x is a negative number

<pre>
ispis(log2(<span class="number">142</span>))<span class="keyword">;</span>

ispis(log2(<span class="number">12</span>))<span class="keyword">;</span>

ispis(log2(<span class="number">-50</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">7.149747119504682</span>
<span class="number">3.5849625007211565</span>
NaN
</pre>

### max

The `max` function returns the greater of the two provided `broj` values.

- takes: x (`broj`), y (`broj`)
- returns: the greater of `x` and `y`
- special cases:
  * returns NaN if either `x` or `y` is NaN


<pre>
ispis(max(<span class="number">2</span><span class="keyword">,</span> <span class="number">3</span>))<span class="keyword">;</span>

ispis(max(<span class="number">2</span><span class="keyword">,</span> <span class="number">-3</span>))<span class="keyword">;</span>

ispis(max(<span class="number">1</span><span class="keyword">,</span> <span class="number">1</span>))<span class="keyword">;</span>

</pre>

<pre>
Output:

<span class="number">33</span>
<span class="number">2</span>
<span class="number">1</span>
</pre>

### min

The `min` function returns the smaller of the two provided `broj` values.

- takes: x (`broj`), y (`broj`)
- returns: the smaller of `x` and `y`
- special cases:
  * returns NaN if either `x` or `y` is NaN


<pre>
ispis(min(<span class="number">2</span><span class="keyword">,</span> <span class="number">33</span>))<span class="keyword">;</span>

ispis(min(<span class="number">-2</span><span class="keyword">,</span> <span class="number">33</span>))<span class="keyword">;</span>

ispis(min(<span class="number">2</span><span class="keyword">,</span> <span class="number">2</span>))<span class="keyword">;</span>

</pre>

<pre>
Output:

<span class="number">2</span>
<span class="number">-2</span>
<span class="number">2</span>
</pre>

### zaokruzi

The `zaokruzi` function rounds the given value x towards the closest integer with ties rounded towards even integer.

- takes: x - number (`broj`)
- returns: `x` rounded to the closest integer
- special cases:
  * returns `x` when `x` is NaN, Infinity, or already an Integer

<pre>
ispis(<span class="keyword">za</span>okruzi(<span class="number">33.33333333</span>))<span class="keyword">;</span>

ispis(<span class="keyword">za</span>okruzi(<span class="number">1.25</span>))<span class="keyword">;</span>

ispis(<span class="keyword">za</span>okruzi(<span class="number">3.55</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">33</span>
<span class="number">1</span>
<span class="number">4</span>
</pre>

### kubniKorijen

The `kubniKorijen` function returns the cubic root of a provided `broj`.

- takes: x - `broj`
- returns: cubic root of provided number (`broj`)
- special cases:
  * If x is NaN, then the result is NaN.
  * If x is Infinity, then the result is Infinity

<pre>
ispis(kubniKorijen(<span class="number">144</span>))<span class="keyword">;</span>

ispis(kubniKorijen(<span class="number">2</span>))<span class="keyword">;</span>

ispis(kubniKorijen(<span class="number">0</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">5.241482788417793</span>
<span class="number">1.2599210498948732</span>
<span class="number">0</span>
</pre>

### uStepenima

The `uStepenima` function converts an angle measured in radians to an approximately equivalent angle measured in degrees.

- takes: x - angle expressed in radians `broj`
- returns: x expressed in degrees (`broj`)
- special cases: none

<pre>
<span class=<span class="string">"comment"</span>>// Convert π/<span class="number">2</span> <span class="keyword">radi</span>ans to degrees</span>
ispis(uStepenima(<span class="number">1.5707963267948966</span>))<span class="keyword">;</span>
</pre>

<pre>
Output:

<span class="number">90</span>
</pre>