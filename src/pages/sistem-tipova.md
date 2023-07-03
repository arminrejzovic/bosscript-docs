---
layout: '../layouts/DocumentationLayout.astro'
title: Sistem Tipova
translation: "/en/type-system"
index: 4
next: "/kreiranje-tipova"
previous: "/varijable"
---

# Type System

## The types

Bosscript has the following types built into the language:
1. `broj` - numbers
2. `tekst` - strings
3. `logicki`/`logički` - booleans
4. `objekat` - objects
5. `niz` - arrays
6. `bajt` - byte
7. `BajtNiz` - ByteArray
8. `funkcija` - functions
9. `nedefinisano` - null and undefined
10. `ReadonlyObject` - an extension of `objekat` used only internally

## Broj

The `broj` type represents all numbers, both integers and floating-point numbers. It is the equivalent of the `number` 
type in JavaScript. The maximum value a `broj` holds is 3.4028235 * 10<sup>38</sup>. Under the hood, it uses the `double`
type from the JVM. Below are some examples:

<pre>
<span class="keyword">var</span> x = <span class="number">10</span><span class="keyword">;</span>
<span class="keyword">var</span> y = <span class="number">1.234</span><span class="keyword">;</span>
<span class="keyword">var</span> z = <span class="number">0</span><span class="keyword">;</span>
</pre>

`broj` also supports adding underscores as separators, for readability purposes:

<pre>
<span class="keyword">var</span> x = <span class="number">1_000_000</span> <span class="comment">// valid, holds 1000000 (one million)</span>
<span class="keyword">var</span> z = <span class="number">1_00_00_00</span> <span class="comment">// bad readability, but still valid, holds 1000000 (one million)  </span>
</pre>

The separators can be placed however the user likes - the Bosscript lexer just ignores them when handling numeric literals.
However, we do recommend using them consistently and in a way that is readable. 

All commonly used operators are supported by `broj`, including `+`, `-`, `*`, `/`, and `%`. There is also the `^` operator,
which is used for exponentiation:

<pre>
ispis(<span class="number">5</span>^<span class="number">3</span>)<span class="keyword">;</span> <span class="comment">// prints 125</span>
</pre>

## Tekst

The `tekst` type represents strings. It is a direct equivalent of the `String` type from the JVM. The only difference 
between Bosscript's `tekst` and most other string representations in other programming languages is the delimiter. The only
valid delimiter for `tekst` are double quotes. Single quotes are not allowed:

<pre>
<span class="keyword">var</span> name = <span class="string">"Bosscript"</span><span class="keyword">;</span>
<span class="keyword">var</span> version = <span class="error" title="Unexpected token '"><span class="string">'1.0'</span></span><span class="keyword">;</span>
</pre>

Other than that, `tekst` behaves exactly the same as other string implementations. It comes with various utility methods
built in. Read more about them in the [tekst api page](/)


## Logički

The `logički` / `logicki` type represents booleans. Both spellings are supported and treated equally by the interpreter,
as is the case for all keywords with bosnian-specific letters. It is built on top of JVM `Boolean` and behaves exactly 
the same. The only difference is the literals themselves, which are Bosnian words:

<pre>
<span class="keyword">var</span> t1 = <span class="keyword">tačno</span><span class="keyword">;</span>
<span class="keyword">var</span> t2 = <span class="keyword">tacno</span><span class="keyword">;</span>

<span class="keyword">var</span> nt1 = <span class="keyword">netačno</span><span class="keyword">;</span>
<span class="keyword">var</span> nt2 = <span class="keyword">netacno</span><span class="keyword">;</span>
</pre>

As you can see, even the literals support spelling with or without the letter *č*. All four variable declarations are valid.

The type has no built-in methods itself.

## Objekat

The `objekat` type is very similar to JavaScript objects. It is a collection of related data, which is stored as key-value 
pairs. Under the hood, it is implemented as a `HashMap`. The keys of an `objekat` are identifiers, while the value can be
of any type supported by Bosscript. Consider the following example:

<pre>
<span class="keyword">var</span> empty = {}<span class="keyword">;</span>

<span class="keyword">var</span> obj = {
    <span class="purple">a</span>: <span class="string">"a"</span><span class="keyword">,</span>
    <span class="purple">b</span>: <span class="number">1</span><span class="keyword">,</span>
    <span class="purple">c</span>: <span class="keyword">tacno</span><span class="keyword">,</span>
    <span class="purple">d</span>: [<span class="number">1</span><span class="keyword">,</span> <span class="number">2</span>]<span class="keyword">,</span>
    <span class="purple">e</span>: {
        <span class="purple">isNested</span>: <span class="keyword">tacno</span><span class="keyword">,</span>
        <span class="purple">prop</span>: <span class="string">"prop"</span>
    }<span class="keyword">,</span>
    <span class="purple">f</span>: <span class="keyword">funkcija</span>(){
        ispis(<span class="string">"fn"</span>)<span class="keyword">;</span>
    }
}
</pre>

The `obj` object holds data of various types. To access any of the properties, use the dot syntax:

<pre>
ispis(obj.<span class="purple">b</span>)<span class="keyword">;</span> <span class="comment">// prints 1</span>
</pre>

Trying to access a property that doesn't exist will result in an error:

<pre>

obj.<span class="error" title="Property 'rand' does not exist on object {a: 'a', b: 1, ...}">rand</span><span class="keyword">;</span>
</pre>

`Property 'rand' does not exist on object {a: "a", b: 1, ...}`

Properties can also be accessed with the bracket indexing operator, where the property is referenced as a string literal:

<pre>
obj[<span class="string">"c"</span>] <span class="comment">// evaluates to tačno</span>
</pre>

Trying to access a property that doesn't exist with the bracket operator also results in an error:

<pre>
obj<span class="error" title="Property 'rand' does not exist on object {a: 'a', b: 1, ...}">[<span class="string">"rand"</span>]</span>
</pre>

However, it is possible to assign to properties that don't already exist:

<pre>
obj.<span class="purple">notDefinedYet</span> = <span class="string">"NOW DEFINED"</span><span class="keyword">;</span>
obj[<span class="string">"notDefined"</span>] = <span class="string">"NOW DEFINED TOO"</span><span class="keyword">;</span>
</pre>

Both expressions above are valid and will create new properties on the `obj` object. 

An object property can also be a function. We see that `obj.f` is a function expression. Here is how to use it:

<pre>
obj.<span class="purple">f</span>()<span class="keyword">;</span>
<span class="comment">// prints 'fn' to the console</span>
</pre>

When defining an object function, you can reference other object properties within the function, via `@`:

<pre>
<span class="keyword">var</span> o = {
    <span class="purple">name</span>: <span class="string">"Bosscript"</span><span class="keyword">,</span>
    <span class="purple">greet</span>: <span class="keyword">funkcija</span>(){
        ispis(<span class="string">"Hello, my name is "</span> + <span class="purple">@name</span>)<span class="keyword">;</span>
    }   
}

o.<span class="purple">greet</span>()<span class="keyword">;</span>

<span class="comment">// Prints 'Hello, my name is Bosscript' to the console</span>
</pre>

The `@` symbol is a reference to the object itself. It is the equivalent of the `this` keyword in most programming languages.
Using `@`, you can access any object property within object functions. You cannot use `@` outside of object methods. Consider
this example:

<pre>
<span class="keyword">var</span> o = {
    <span class="purple">x</span>: <span class="number">1</span><span class="keyword">,</span>
    <span class="purple">y</span>: <span class="number">5</span><span class="keyword">,</span>
    <span class="purple">z</span>: <span class="error">@x</span> + <span class="error">@y</span> 
}
</pre>

Code like the example above will cause an error `@ does not exist.`. So, only use `@` in functions.

Note: `@` is also used in models. Read more [here](/).

## Niz

The `niz` type represents arrays. It behaves similarly to JavaScript's `array` or Kotlin's `ArrayList`, which it uses under the hood.
In Bosscript, an array is dynamic, meaning it can hold data of different data types at once. An array literal is written
as a comma separated list of values between brackets. Consider the following example:

<pre>
<span class="keyword">var</span> empty = []<span class="keyword">;</span>
<span class="keyword">var</span> a = [<span class="number">1</span><span class="keyword">,</span> <span class="number">2</span><span class="keyword">,</span> <span class="number">3</span><span class="keyword">,</span> <span class="number">4</span><span class="keyword">,</span> <span class="number">5</span>]<span class="keyword">;</span>
<span class="keyword">var</span> b = [<span class="number">1</span><span class="keyword">,</span> <span class="string">"2"</span><span class="keyword">,</span> <span class="number">3</span><span class="keyword">,</span> <span class="string">"4"</span><span class="keyword">,</span> <span class="keyword">tačno</span>]<span class="keyword">;</span>
<span class="keyword">var</span> c = [<span class="number">1</span><span class="keyword">,</span> [<span class="number">2</span><span class="keyword">,</span> [<span class="number">3</span><span class="keyword">,</span> <span class="number">4</span>]]<span class="keyword">,</span> <span class="number">5</span>]<span class="keyword">;</span>
</pre>

All four declarations above are valid, and they demonstrate the flexibility of `niz`.

A `niz` is indexable using the bracket indexing operator, just like arrays in most programming languages:

<pre>
<span class="keyword">var</span> arr = [<span class="string">"A"</span><span class="keyword">,</span> <span class="string">"B"</span><span class="keyword">,</span> <span class="string">"C"</span>]<span class="keyword">;</span>
ispis(arr[<span class="number">0</span>])<span class="keyword">;</span>

<span class="comment">// prints 'A'</span>
</pre>

Indexes are 0-based, like in most other programming languages.

There are two ways to loop over a `niz`, either manually, or with the `zaSvaki` property, which is built into `niz`:

<pre>
<span class="keyword">var</span> arr = [<span class="string">"A"</span><span class="keyword">,</span> <span class="string">"B"</span><span class="keyword">,</span> <span class="string">"C"</span>]<span class="keyword">;</span>
<span class="keyword">za svako</span> (i <span class="keyword">od</span> <span class="number">0</span> <span class="keyword">do</span> arr.zadnji()){
    ispis(arr[i])<span class="keyword">;</span>
}

<span class="comment">// prints A B C to the console</span>
</pre>

<pre>
<span class="keyword">var</span> arr = [<span class="string">"A"</span><span class="keyword">,</span> <span class="string">"B"</span><span class="keyword">,</span> <span class="string">"C"</span>]<span class="keyword">;</span>
arr.<span class="yellow">zaSvaki</span>(ispis)<span class="keyword">;</span>

<span class="comment">// also prints A B C to the console</span>
</pre>

`niz` has many more built in properties like `zaSvaki`, which you can read more about [here](/).

## Bajt and BajtNiz

A `bajt` represents a byte, while `BajtNiz` is just an array of bytes. Bosscript v1.0 doesn't support any byte literals.
Instead, `bajt` is only used within `BajtNiz`, which itself is only used for input and output stream objects. You will only
encounter `BajtNiz` when working with the `telnet` standard library package.

`BajtNiz` has built in functionality, which you can read more about [here](/).

## Funkcija

A `funkcija` represents a function. Just like in JavaScript and some other languages, a function can be passed around as
an argument. Refering back to the `zaSvaki` example from before,

<pre>
<span class="keyword">var</span> arr = [<span class="string">"A"</span><span class="keyword">,</span> <span class="string">"B"</span><span class="keyword">,</span> <span class="string">"C"</span>]<span class="keyword">;</span>
arr.<span class="yellow">zaSvaki</span>(ispis)<span class="keyword">;</span>

<span class="comment">// also prints 'A B C' to the console</span>
</pre>
we can see that `ispis` is being passed as an argument to the `zaSvaki` function. It is also possible to build anonymous
lambda functions in-place in situations like this:

<pre>
<span class="keyword">var</span> arr = [<span class="string">"A"</span><span class="keyword">,</span> <span class="string">"B"</span><span class="keyword">,</span> <span class="string">"C"</span>]<span class="keyword">;</span>
arr.<span class="yellow">zaSvaki</span>(<span class="keyword">funkcija</span>(str){
    ispis(str.<span class="yellow">malimSlovima</span>())<span class="keyword">;</span>
})<span class="keyword">;</span>

<span class="comment">// prints 'a b c' to the console</span>
</pre>

To learn more about functions, refer to the [functions article](/funkcije). It goes into depth on how functions work in Bosscript.
This section was just an overview of functions as a type.

## Nedefinisano

The `nedefinisano` type is a special type which represents `null` and `undefined`. More precisely, Bosscript doesn't distinguish
between `null` and `undefined` in the way that Javascript does. `Nedefinisano` covers both. The word *nedefinisano* itself
is a translation of *undefined,* and it was chosen because the Bosnian language doesn't have an appropriate word for `null`.

`nedefinisano` can be used to initialize variables, but there is no need, since not providing any initial value does exactly that:

<pre>
<span class="keyword">var</span> nd = <span class="keyword">nedefinisano</span><span class="keyword">;</span>
<span class="keyword">var</span> x<span class="keyword">;</span>

ispis(nd)<span class="keyword">;</span>
ispis(x)<span class="keyword">;</span>

<span class="comment">// prints nedefinisano twice</span>
</pre>

It doesn't have any built-in functionality and attempting to access a property of a `nedefinisano` variable will result in
an error:

<pre>
<span class="keyword">var</span> str = getValueOrNull()
ispis(str)<span class="keyword">;</span>
<span class="comment">// prints nedefinisano</span>

str.<span class="error" title="Cannot read property malimSlovima of nedefinisano">malimSlovima</span>()<span class="keyword">;</span>
<span class="comment">// ^---------------------- Cannot read property malimSlovima of nedefinisano</span>
</pre>

## ReadonlyObject

The `ReadonlyObject` is a type that is only used internally. It is an extension of the `objekat` type, with the only difference being
the fact that its properties cannot be changed. Since many of the standard library packages provide objects, a special type
was built to make sure the user doesn't reassign any of their properties accidentally. Below is an example:

<pre>
<span class="keyword">var</span> klijent = TelnetKlijent()<span class="keyword">;</span>
<span class="error" title="ulazniTok is readonly!">klijent.<span class="purple">ulazniTok</span> = <span class="keyword">netačno</span><span class="keyword">;</span></span>
</pre>

`Error: ulazniTok is readonly!`

Other than that, you will not notice any difference when working with `ReadonlyObject`, when compared to regular `objekat`.
Even printing its typename will yield "objekat". 

## Typing

You will not need to think a lot about types when working with small Bosscript programs. Variables are fully dynamic. You will
need to consider types in the context of [functions](/funkcije), [type definitions](/kreiranje-tipova) (which are used for quick user-defined types), and 
[models](/modeli). Find out more in the respective articles.

