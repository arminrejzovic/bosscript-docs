---
layout: '../layouts/DocumentationLayout.astro'
title: Kreiranje Tipova
translation: "/en/type-definitions"
index: 5
next: "/kontrola-toka"
previous: "/sistem-tipova"
---

# Type Definitions

Bosscript comes with some built-in types, such as `broj`, `tekst` and `logički`. However, sometimes there is a need for 
user-defined types. This is where Type Definitions come in. You can use Bosscript type definitions to define a schema 
for objects. It is defined with the `tip` keyword. 

<pre>
<span class="keyword">tip</span> User{
    <span class="purple">name</span>: <span class="keyword">tekst</span><span class="keyword">;</span>
    <span class="purple">age</span>: <span class="keyword">broj</span><span class="keyword">;</span>
}
</pre>

The example above shows what a typical type definition looks like. The type definition consists of the name and a list of 
expected properties and their corresponding types. The type annotations work exactly the same as with function parameters.
The only difference is that each type definition property ends with a semicolon.

A type definition, or `tip` for short, can contain properties of any valid type in Bosscript, including other type definitions
and models.

<pre>
<span class="keyword">tip</span> Course{
    <span class="purple">teacher</span>: User<span class="keyword">;</span>
    <span class="purple">classroom</span>: <span class="keyword">broj</span><span class="keyword">;</span>
}
</pre>

A `tip` can also extend other `tip` definitions:

<pre>
<span class="keyword">tip</span> Teacher < User {
    <span class="purple">office</span>: <span class="keyword">tekst</span><span class="keyword">;</span>
}
</pre>
In the example above, the type `Teacher` inherits all properties of `User`, namely `name` and `age`, and also has an additional
property - `office`. This 'inheritance' is not the same as in Object-Oriented Programming. Under the hood, the `User` type definition
is copied into `Teacher`. This means that a function expecting a `User` object as a parameter will not accept a `Teacher` object.
The point of extending a `tip` is simply not having to copy and paste properties.

When you declare a `tip`, a constructor is generated for it. You can use the constructor to create objects that comply with
the type definition:

<pre>
<span class="keyword">var</span> user = User(<span class="string">"Bosscript"</span><span class="keyword">,</span> <span class="number">1</span>)<span class="keyword">;</span>

ispis(user)<span class="keyword">;</span>
</pre>

<pre>
Output:
{<span class="purple">name</span>: <span class="string">"Bosscript"</span><span class="keyword">,</span> <span class="purple">age</span>: <span class="number">1</span>}
</pre>

This is not mandatory, though. You can create an object literal that complies with the schema and the Bosscript Type Checker
will recognize that:

<pre>
<span class="keyword">funkcija</span> test(u: User){
    ...
}

<span class="keyword">var</span> user = {
    <span class="purple">name</span>: <span class="string">"Bosscript"</span><span class="keyword">,</span>
    <span class="purple">age</span>: <span class="number">1</span>
}<span class="keyword">;</span>

test(user)<span class="keyword">;</span>
</pre>

## When to use Type Definitions

If you need to be strict about what kind of object you are working with, but don't need any special functionality,
then Type Definitions are perfect. If you don't need additional functionality, using models would be overkill. 

Here is an example. Suppose you have a function that accepts a bunch of configuration options. Having them all as separate 
parameters would be unwieldy: 

<pre>
<span class="keyword">funkcija</span> formatImage(image: <span class="keyword">tekst</span><span class="keyword">,</span> hue: <span class="keyword">broj</span><span class="keyword">,</span> saturation: <span class="keyword">broj</span><span class="keyword">,</span> contrast: <span class="keyword">broj</span><span class="keyword">,</span> filter: <span class="keyword">tekst</span><span class="keyword">,</span> ...){
    ...
}
</pre>

You could combine it all in an object, but not having a type definition for it could lead to errors later:

<pre>
<span class="keyword">funkcija</span> formatImage(image: <span class="keyword">tekst</span><span class="keyword">,</span> config){
    ...
}

formatImage(getImageSrc()<span class="keyword">,</span> {<span class="purple">hue</span>: <span class="number">10</span><span class="keyword">,</span> <span class="purple">saturation</span>: <span class="number">44</span><span class="keyword">,</span> <span class="purple">filter</span>: <span class="string">"sepia"</span>})<span class="keyword">;</span>
</pre>

<code style="color: red;">
Error: {...} has no property 'contrast'
</code>

The best thing to do is to declare a custom `tip` for the config object:

<pre>
<span class="keyword">tip</span> ImageFormatConfig {
    <span class="purple">hue</span>: <span class="keyword">broj</span><span class="keyword">;</span>
    <span class="purple">contrast</span>: <span class="keyword">broj</span><span class="keyword">;</span>
    <span class="purple">saturation</span>: <span class="keyword">broj</span><span class="keyword">;</span>
    <span class="purple">filter</span>: <span class="keyword">tekst</span><span class="keyword">;</span>
    ...
}


<span class="keyword">funkcija</span> formatImage(image: <span class="keyword">tekst</span><span class="keyword">,</span> config: ImageFormatConfig){
    ...
}

formatImage(getImageSrc()<span class="keyword">,</span> {<span class="purple">hue</span>: <span class="number">10</span><span class="keyword">,</span> <span class="purple">contrast</span>: <span class="number">22</span><span class="keyword">,</span> <span class="purple">saturation</span>: <span class="number">44</span><span class="keyword">,</span> <span class="purple">filter</span>: <span class="string">"sepia"</span>})<span class="keyword">;</span>
</pre>

If you are familiar with TypeScript's `interface`, `tip` is a similar concept. The difference is that `tip` definitions 
don't have functions, and `interfaces` don't provide a constructor.

