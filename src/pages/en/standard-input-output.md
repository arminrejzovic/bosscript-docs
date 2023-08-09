---
layout: '../../layouts/DocumentationLayout.astro'
title: Standard input and output
translation: "/standardni-ulaz-izlaz"
index: 2
next: "/en/variables"
previous: "/en/getting-started"
---

# Standard input and output

## Output

In Bosscript, there are multiple ways to print to the standard output, depending on what you want the message to look like.
The function you will be using the most is definitely `ispis`, which is a standard printing function:

```bosscript
ispis("Hello, world!");
```

The `ispis` function is very flexible. It takes in any number of arguments and arguments of any type. Here is an example:

```bosscript
var name = "Bosscript";
var version = 1.0;
ispis("Hello, my name is ", name, ". I am in version ", version);

// prints 'Hello, my name is Bosscript. I am in version 1.0'
```
Four arguments were passed to `ispis` and all four get printed to the console. For values that are not of type `tekst`, 
Bosscript automatically converts them according to the standard library specification:

1. `broj` is directly converted - 1.0 becomes "1.0"
2. `logički` is directly converted - tačno becomes "tačno"
3. `objekat` is stringified as a comma-separated list of "key: value" between braces: `"{a: 1.0, b: tačno}"`. Each value gets converted to a `tekst` itself
4. `niz` is stringified to appear just like it is declared - as a comma-separated list of values between brackets: `[1, 2, tačno]`. Each value in the `niz` gets converted to a `tekst` itself
5. `bajt` and `BajtNiz` are decoded into strings
6. A `funkcija` is converted in two ways, depending on its type. User-defined functions are stringified as such: `ƒ name(<parameters stringified>) → ${return type or 'nepoznato' if not provided}"}`.
Native functions are stringified as such: `ƒ <name>() {[native code]}`. 
7. `nedefinisano` is directly converted - "nedefinisano"

You can also pass any expression that evaluates to `tekst` to the `ispis` function:

```bosscript
ispis("Hello, " + getName());
```

### Warning and Error

`ispis` is not the only Bosscript function for standard output. The functions `upozorenje` and `greska` are used to print 
warnings and errors to the standard output and come with built-in styling, similar to JavaScript's `console.warn` and `console.error`
functions. 

```bosscript
upozorenje("Empty output");
```

<code style="color: yellow">
⚠ Empty output
</code>

```bosscript
greska("Cannot divide by zero!");
```

<code style="color: red">
⚠ Empty output
</code>

Both `upozorenje` and `greska` behave exactly the same as `ispis`. The only difference is the styling of the text. Do note that
using `greska` doesn't throw an exception or interrupt the program in any way. It is just a stylized print function.

## Input

The built-in `unos` function is used to collect input from the user. The function behaves similarly to Python's `input` 
function - it is possible to pass a message that is printed before input is collected, and input is collected in one line
and returned as a `tekst`. Consider the example below:

```bosscript
var name = unos("Input your name: ");
ispis("Hello " + name);
```

<pre>
Input your name: 
<span style="color: green">Bosscript</span>
Hello, Bosscript
</pre>

In this example, the user is asked to input their name. The prompt is passed to the `unos` function as a `tekst` argument.
The name is collected as a `tekst` and printed to the console. But what if you need to input a value that is not a `tekst`?
Consider the example below:

```bosscript
var age = brojOd(unos("How old are you: "));
ispis(age);
```
<pre>
How old are you: 
<span style="color: green">22</span>
22
</pre>

In this example, the user is asked to input their age, which means we expect a `broj`. You can use the built-in `brojOd` function,
which converts a `tekst` to a `broj`. If you need a `logički` value, you can use the `logickiOd` function.

Keep in mind that the `unos` function reads a line of input. This means that multiple words can be read at once. It stops reading
at a new-line character:

```bosscript
var name = unos("Input your full name: ");
ispis("Hello " + name);
```
<pre>
Input your full name: 
<span style="color: green">Bosscript Programming Language</span>
Hello, Bosscript Programming Language
</pre>



