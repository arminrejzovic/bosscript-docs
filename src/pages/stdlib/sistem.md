---
layout: '../../layouts/DocumentationLayout.astro'
title: Sistem
translation: "/en/stdlib/sistem"
---

# Sistem

<pre>
<span class="keyword">paket</span> "sistem"<span class="keyword">;</span>
</pre>

The `sistem` package contains a couple of utility system functions. These include:
1. tempiraj
2. tempirajNano
3. zatvoriProces


### tempiraj

The `tempiraj` function is used to measure the execution time of a provided function in milliseconds.

- takes:
    * fn - a block of code wrapped inside a lambda function  (`funkcija`)
- returns: time it takes to execute provided block of code, expressed in milliseconds (`broj`)
- special cases: none


<pre>
<span class="keyword">var</span> vrijeme = tempiraj(<span class="keyword">funkcija</span>(){
    <span class="keyword">za svako</span> (x od 1 do 1_000_000){
        x^2<span class="keyword">;</span>
    }
})<span class="keyword">;</span>

ispis("Execution time: "<span class="keyword">,</span> vrijeme<span class="keyword">,</span> "ms")<span class="keyword">;</span>
</pre>

<pre>
Output:

Execution time: 489ms
</pre>

Note that the lambda function you pass as the argument should not take any arguments itself, nor return anything.

### tempirajNano

The `tempirajNano` function is used to measure the execution time of a provided function in nanoseconds.

- takes:
    * fn - a block of code wrapped inside a lambda function  (`funkcija`)
- returns: time it takes to execute provided block of code, expressed in nanoseconds (`broj`)
- special cases: none


<pre>
<span class="keyword">paket</span> "sistem"<span class="keyword">;</span>

<span class="keyword">var</span> vrijeme = tempirajNano(<span class="keyword">funkcija</span>(){
    <span class="keyword">za svako</span> (x od 1 do 1_000_000){
        x^2<span class="keyword">;</span>
    }
})<span class="keyword">;</span>

ispis("Execution time: "<span class="keyword">,</span> vrijeme<span class="keyword">,</span> " nanoseconds")<span class="keyword">;</span>
</pre>

<pre>
Output:

Execution time: 2.979184E8 nanoseconds
</pre>

The function behaves exactly the same as `tempiraj`, except for the unit of time it returns.

### zatvoriProces

The `zatvoriProces` function terminates the currently running process with a provided status.

- takes:
    * status - status code to exit process with (`broj`)
- returns: the function doesn't return
- special cases: none

<pre>
zatvoriProces(0)<span class="keyword">;</span>

Process finished with exit code 0
</pre>

<pre>
zatvoriProces(-1)<span class="keyword">;</span>

Process finished with exit code -1
</pre>

By convention, any non-zero exit code indicates an abnormal termination. 