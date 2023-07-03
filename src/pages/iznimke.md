---
layout: '../layouts/DocumentationLayout.astro'
title: Iznimke
translation: "/en/exceptions"
index: 11
next: "/transpilacija-js"
previous: "/paketi"
---

# Iznimke

## Handling Exceptions

Bosscript has a very similar concept to `try-catch` - it is called `probaj-spasi`. This is what it looks like:

<pre>
<span class="keyword">probaj</span> {
    someFunctionThatMayThrowAnException();
}
<span class="keyword">spasi</span> {
    // Handle exception here
}
</pre>

Notice that the `catch` block, or `spasi` as it's known in Bosscript, doesn't accept any parameters. A `catch` block is 
usually defined with a parameter that specifies the type of exception that is to be caught. That is not the case in Bosscript.
Instead, an Exception object is implicitly made available in the `spasi` block under the name `g`:

<pre>
<span class="keyword">probaj</span> {
    someFunctionThatMayThrowAnException();
}
<span class="keyword">spasi</span> {
    ispis(g);
}
</pre>

<pre>
Output:
Exception Message will be shown here
</pre>

You're probably wondering how to target a specific exception. Well, `g` is an instance of `tekst`, which gives us several
useful methods that you can use to determine which exception occurred:

<pre>
<span class="keyword">probaj</span> {
    someFunctionThatMayThrowAnException();
}
<span class="keyword">spasi</span> {
    <span class="keyword">ako</span>(g.pocinjeNa("...")){
        <span class="comment">// handle case 1</span>
    }
    <span class="keyword">ili</span> <span class="keyword">ako</span>(g == "..."){
        <span class="comment">// handle case 2</span>
    }
    <span class="keyword">ili</span> <span class="keyword">ako</span>(g.zavrsavaNa("...")){
        <span class="comment">// handle case 2</span>
    }
    <span class="keyword">inače</span>{
        <span class="comment">// default case</span>
    }
}
</pre>


You can also include an optional `finally` block, a block that will execute regardless of whether an exception occurred or not.
The keyword used is `konačno`:

<pre>
probaj {
    someFunctionThatMayThrowAnException();
}
spasi {
    // Handle exception here
}
konačno {
    // Some code you want to run in both cases
}
</pre>

Note that `catch`/`spasi` is mandatory, unlike `finally`/`konačno`.

## Throwing an exception

To throw an exeption, just call the built-in `greška` function. There is no special `throw` keyword nor are there different
types of exceptions. It's as simple as calling the built-in function:

<pre>
funkcija mayFail(){
    ako(failCondition){
        greška("Fail condition met..");
    }
}
</pre>

The `greška` function accepts a `tekst` argument, which is the message.
