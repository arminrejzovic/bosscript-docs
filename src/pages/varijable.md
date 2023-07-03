---
layout: '../layouts/DocumentationLayout.astro'
title: Varijable
translation: "/en/variables"
index: 3
next: "/sistem-tipova"
previous: "/standardni-ulaz-izlaz"
---

# Variables

With Bosscript being a dynamic programming language, any variable can hold any type of data. 
There are two types of variables in Bosscript, those declared with `var` and those declared with `konst`.

## Var

Variables declared with `var` are mutable, which means that they can be reassigned at any point in the program. They also
don't need to be explicitly initialized when declared.

<pre>
<span class="keyword">var</span> x<span class="keyword">;</span>
</pre>

The variable `x` from the example above is automatically initialized to `nedefinisano` (null). Of course, it is possible
to initialize a variable with any expression:

<pre>
<span class="keyword">var</span> x = <span class="number">10</span><span class="keyword">;</span>
<span class="keyword">var</span> y = example()<span class="keyword">;</span>
<span class="keyword">var</span> z = <span class="string">"Z"</span><span class="keyword">;</span>
</pre>
You can even initialize a variable to `nedefinisano` explicitly, if you really want to.

<pre>
<span class="keyword">var</span> x = <span class="keyword">nedefinisano</span><span class="keyword">;</span>
</pre>
This can be considered redundant, though.

It is also possible to declare multiple variables at once:

<pre>
<span class="keyword">var</span> x, y<span class="keyword">;</span>
</pre>

In this case, both `x` and `y` are initialized to `nedefinisano`. 

Any combination of initialized and non-initialized variables works:

<pre>
<span class="keyword">var</span> x<span class="keyword">,</span> y = <span class="number">10</span><span class="keyword">;</span>
<span class="keyword">var</span> z = <span class="number">10</span><span class="keyword">,</span> s<span class="keyword">;</span>
<span class="keyword">var</span> a<span class="keyword">,</span> b<span class="keyword">,</span> c<span class="keyword">;</span>
</pre>

As previously mentioned, `var` variables can be reassigned at any point. Consider the example below:

<pre>
<span class="keyword">var</span> x = <span class="number">10</span><span class="keyword">;</span>

x = <span class="number">20</span><span class="keyword">;</span>

ispis(x)<span class="keyword">;</span> <span class="comment">// prints 20</span>
</pre>

`x` was reassigned to the number 20. 

You can also reassign values of other types, like below:

<pre>
<span class="keyword">var</span> x = <span class="number">10</span><span class="keyword">;</span>

x = <span class="string">"Hello"</span><span class="keyword">;</span>

ispis(x)<span class="keyword">;</span> <span class="comment">// prints Hello</span>
</pre>

In this case, we changed `x` from the number 10 to the string "Hello". 

If need be, variables can be reassigned to `nedefinisano` again:

<pre>
<span class="keyword">var</span> x = <span class="number">10</span><span class="keyword">;</span>

x = <span class="keyword">nedefinisano</span><span class="keyword">;</span>

ispis(x)<span class="keyword">;</span> <span class="comment">// prints nedefinisano</span>
</pre>

The only thing that is not allowed is declaring the same variable multiple times in the same scope:

<pre>
<span class="keyword">var</span> taken = <span class="number">10</span><span class="keyword">;</span>
<span class="keyword">var</span> <span class="error" title="taken has already been defined">taken</span> = <span class="string">"Hello"</span><span class="keyword">;</span> 
</pre>

The code above will cause an error: `taken has already been defined`

## Konst

The keyword `konst` stands for *konstanta* (constant) and, as the name suggests, is used to declare constants. Once defined,
constants cannot be reassigned. They also must be initialized upon creation, unlike with `var`.

<pre>
<span class="keyword">konst</span> pi = <span class="number">3.14</span><span class="keyword">;</span> <span class="comment">// proper</span>
<span class="keyword">konst</span> <span class="error" title="Constants must be initialized">invalid</span><span class="keyword">;</span>
</pre>

Trying to reassign a `konst` will result in an error `Constants cannot be reassigned`:

<pre>
<span class="keyword">konst</span> x = <span class="number">10</span><span class="keyword">;</span>
<span class="error" title="Constants cannot be reassigned">x = <span class="number">20</span></span><span class="keyword">;</span>
</pre>

### Mutability of objects

Contrary to what you may think at first, declaring arrays and objects as `konst` doesn't make them immutable. Instead, it
just makes the variable un-reassignable. Consider the following example:

<pre>
<span class="keyword">konst</span> obj = {
    a: <span class="number">10</span><span class="keyword">,</span>
    b: <span class="number">20</span>
}<span class="keyword">;</span>

obj.a = <span class="number">20</span><span class="keyword">;</span>

ispis(obj)<span class="keyword">;</span> <span class="comment">// prints {a: 20, b: 20}</span>
</pre>

The code above is completely valid. If you need your objects to be immutable, consider using [models](/modeli).
The same is true for arrays: 

<pre>
<span class="keyword">konst</span> arr = [<span class="number">1</span><span class="keyword">,</span> <span class="number">2</span><span class="keyword">,</span> <span class="number">3</span><span class="keyword">,</span> <span class="number">4</span>]<span class="keyword">;</span>

arr[<span class="number">2</span>] = <span class="number">999</span><span class="keyword">;</span>

ispis(arr)<span class="keyword">;</span> <span class="comment">// prints [1, 2, 999, 4]</span>
</pre>

This is what `konst` disallows with objects and arrays: 

<pre>
<span class="keyword">konst</span> obj = {
    a: <span class="string">"A"</span><span class="keyword">,</span>
    b: <span class="string">"B"</span>
}<span class="keyword">;</span>

<span class="error" title="Constants cannot be reassigned">obj = {}</span><span class="keyword">;</span>

<span class="keyword">konst</span> arr = [<span class="number">1</span><span class="keyword">,</span> <span class="number">2</span><span class="keyword">,</span> <span class="number">3</span><span class="keyword">,</span> <span class="number">4</span>]<span class="keyword">;</span>

<span class="error" title="Constants cannot be reassigned">arr = [<span class="number">9</span><span class="keyword">,</span> <span class="number">8</span><span class="keyword">,</span> <span class="number">7</span>]</span><span class="keyword">;</span>
</pre>

So, just like with other data types, a `konst` holding an array or object cannot be reassigned.








