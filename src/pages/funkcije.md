---
layout: '../layouts/DocumentationLayout.astro'
title: Funkcije
translation: "/en/functions"
index: 8
next: "/modeli"
previous: "/petlje"
---

# Functions

Functions in Bosscript are declared using the `funkcija` keyword. The mandatory parts of any function declaration are as
follows:

1. The `funkcija` keyword
2. Function name
3. Parentheses, optionally containing parameters
4. Function body

This is what a basic function declaration looks like:

<pre>
<span class="keyword">funkcija</span> greeting(){
    ispis(<span class="string">"Hello, world!"</span>)<span class="keyword"><span class="keyword">;</span></span>
}
</pre>

Function names must be unique. There can be only one function with a particular name, and a function name cannot be an identifier
that was already used a variable:

<pre>
<span class="keyword">var</span> greeting = <span class="string">"Hello"</span><span class="keyword"><span class="keyword">;</span></span>
<span class="keyword">funkcija</span> <span class="error" title="'greeting' has already been defined">greeting</span>(){
    ispis(<span class="string">"Hello, world!"</span>)<span class="keyword"><span class="keyword">;</span></span>
}
</pre>

<code style="color: red">
Error: 'greeting' has already been defined
</code>

<pre>
<span class="keyword">funkcija</span> greeting(){
    ispis(<span class="string">"Hello, world!"</span>)<span class="keyword"><span class="keyword">;</span></span>
}

<span class="keyword">funkcija</span> <span class="error" title="'greeting' has already been defined">greeting</span>(name){
    ispis(<span class="string">"Hello, "</span> + name)<span class="keyword"><span class="keyword">;</span></span>
}
</pre>

<code style="color: red">
Error: 'greeting' has already been defined
</code>

Parameters are comma separated and must be unique.

<pre>
<span class="keyword">funkcija</span> test(a<span class="keyword">,</span> b<span class="keyword">,</span> c){
    ispis(a + b + c)<span class="keyword"><span class="keyword">;</span></span>
}
</pre>
is valid, but

<pre>
<span class="keyword">funkcija</span> test(a<span class="keyword">,</span> b<span class="keyword">,</span> <span class="error" title="'a' has already been defined">a</span>){
    ispis(a + b + a)<span class="keyword"><span class="keyword">;</span></span>
}
</pre>

<code style="color: red">
Error: 'a' has already been defined
</code>

is not.

Functions are called like this:

<pre>
// No arguments
greeting()<span class="keyword"><span class="keyword">;</span></span>

// One argument
greeting(<span class="string">"Bosscript"</span>)<span class="keyword"><span class="keyword">;</span></span>

// Multiple arguments
test(<span class="number">1</span><span class="keyword">,</span> <span class="number">5</span><span class="keyword">,</span> <span class="number">2</span>)<span class="keyword"><span class="keyword">;</span></span>
</pre>
<pre>
Hello, world!
Hello, Bosscript
<span class="number">8</span>
</pre>

Make sure to provide an adequate number of arguments, otherwise you will get an Argument mismatch error:

<pre>
<span class="error" title="Argument mismatch: function 'test' expects 3 arguments (a: nepoznato, b: nepoznato, c: nepoznato)">test(<span class="number">1</span><span class="keyword">,</span><span class="number">2</span>)<span class="keyword"><span class="keyword">;</span></span></span>
</pre>
<code style="color: red">
Argument mismatch: function 'test' expects 3 arguments (a: nepoznato, b: nepoznato, c: nepoznato)
</code>


A function body is usually a block:

<pre>
<span class="keyword">funkcija</span> test(){
    doSomething()<span class="keyword"><span class="keyword">;</span></span>
    doSomethingElse()<span class="keyword"><span class="keyword">;</span></span>
}
</pre>

However, if the function body is only one line, you can use the arrow syntax:

<pre>
<span class="keyword">funkcija</span> greet() => ispis(<span class="string">"Hello, world!"</span>)<span class="keyword"><span class="keyword">;</span></span>
</pre>

So far, all functions provided as examples had no return statements. So, how do return statements work in Bosscript? It 
depends on whether a value is being returned. If you are returning a value, use the keyword `vrati`, followed by the value:

<pre>
<span class="keyword">funkcija</span> sum(a<span class="keyword">,</span> b){
    <span class="keyword">vrati</span> a + b<span class="keyword"><span class="keyword">;</span></span>
}
</pre>

If you want to return from a function without returning any value, i.e., a void-return, use `vrati se`:

<pre>
<span class="keyword">funkcija</span> greet(name){
    ako(name.duzina < <span class="number">3</span>){
        <span class="keyword">vrati se</span><span class="keyword"><span class="keyword">;</span></span>
    }
    ispis(<span class="string">"Hello "</span> + name)<span class="keyword"><span class="keyword">;</span></span>
}
</pre>

The `se` keyword doesn't add any functionality. It is there due to the grammar of the Bosnian language. Writing `vrati` alone
doesn't look right and doesn't accurately convey the meaning of the statement.

When writing functions using the arrow syntax, the return statement is omitted. The result of the only statement in the
function body is implicitly returned.

<pre>
<span class="keyword">funkcija</span> sum(a<span class="keyword">,</span> b) => a + b<span class="keyword"><span class="keyword">;</span></span>

ispis(sum(<span class="number">5</span><span class="keyword">,</span><span class="number">3</span>))<span class="keyword"><span class="keyword">;</span></span>
</pre>

<pre>
Output:
<span class="number">8</span>
</pre>

In fact, it is not allowed to explicitly write `vrati` when using the arrow syntax:

<pre>
<span class="keyword">funkcija</span> sum(a<span class="keyword">,</span> b) => <span class="error" title="Unexpected token 'vrati'"><span class="keyword">vrati</span></span> a + b<span class="keyword"><span class="keyword">;</span></span>
</pre>

<code style="color: red">
Parsing error: Unexpected token 'vrati' at 1:23
</code>


## Type Annotations

Notice how the first paragraph makes mention of *mandatory* parts in a function declaration. The optional part refers to type
annotations. Bosscript is lenient in regard to typing - type annotations in functions are completely optional and the 
language can be used without them just fine. However, if you want more control over the types of parameters a function receives
or the return type of functions, you are free to use Type Annotations.

The type annotation system is very flexible. Any parameter can be typed with a type annotation and the return can also be typed.
If a function has typed parameters, it doesn't have to have a return type specified and vice-versa. If one of the arguments
is typed, not all of them have to be typed. Consider the examples below:

<pre>
<span class="keyword">funkcija</span> greeting(name: <span class="keyword">tekst</span>){
    ispis(<span class="string">"Hello, "</span> + name)<span class="keyword"><span class="keyword">;</span></span>
}
</pre>
The parameter `name` is specified to be of type `tekst`, but the function has no specified return type.

<pre>
<span class="keyword">funkcija</span> sum(a: <span class="keyword">broj</span><span class="keyword">,</span> b: <span class="keyword">broj</span>){
    <span class="keyword">vrati</span> a + b<span class="keyword"><span class="keyword">;</span></span>
}
</pre>

In this case, both parameters `a` and `b` are typed, while the function still doesn't have a specified return type. We can 
expand on this example and provide a return type:

<pre>
<span class="keyword">funkcija</span> sum(a: <span class="keyword">broj</span><span class="keyword">,</span> b: <span class="keyword">broj</span>): <span class="keyword">broj</span>{
    <span class="keyword">vrati</span> a + b<span class="keyword"><span class="keyword">;</span></span>
}
</pre>

As mentioned earlier, not all parameters have to be typed. You can omit type annotations on particular parameters if you need to:

<pre>
<span class="keyword">funkcija</span> concat(str: <span class="keyword">tekst</span><span class="keyword">,</span> x): <span class="keyword">tekst</span>{
    <span class="keyword">vrati</span> str + x.tekst()<span class="keyword"><span class="keyword">;</span></span>
}
</pre>

In the example above, the parameter is typed to `tekst`, but `x` has no type annotation at all. When a parameter is given 
no type annotation, no type checking will be performed on that particular parameter. It is implicitly given the type `nepoznato`,
and the user can pass a variable of any type for that particular parameter.

<pre>
concat(<span class="string">"Example"</span><span class="keyword">,</span> <span class="number">10</span>)<span class="keyword"><span class="keyword">;</span></span>

concat(<span class="string">"Example"</span><span class="keyword">,</span> tačno)<span class="keyword"><span class="keyword">;</span></span>

concat(<span class="string">"Example"</span><span class="keyword">,</span> {x: <span class="number">1</span><span class="keyword">,</span> y: <span class="number">2</span>})<span class="keyword"><span class="keyword">;</span></span>
</pre>

All examples above are valid calls to the `concat` function defined earlier. 

If you pass a value of an incorrect type for a typed parameter, you will get an error:

<pre>
concat(<span class="error" title="Type error: Expected 'tekst', got `broj'"><span class="number">10</span></span><span class="keyword">,</span> <span class="string">"Example"</span>)<span class="keyword"><span class="keyword">;</span></span>
</pre>
<code style="color: red">
Type error: Expected 'tekst', got `broj'
</code>

The same goes for return types:

<pre>
<span class="keyword">funkcija</span> concat(str: <span class="keyword">tekst</span><span class="keyword">,</span> x): <span class="keyword">tekst</span>{
    <span class="error" title="Type error: Expected 'tekst', got `broj'"><span class="keyword">vrati</span> <span class="number">10</span><span class="keyword"><span class="keyword">;</span></span></span>
}

concat(<span class="string">"Hello"</span><span class="keyword">,</span> <span class="string">"World"</span>)<span class="keyword"><span class="keyword">;</span></span>
</pre>

<code style="color: red">
Type error: Expected 'tekst', got `broj'
</code>

User-defined types and Model names can also be used for Type Annotations:

<pre>
<span class="keyword">tip</span> User{
    <span class="purple">name</span>: <span class="keyword">tekst</span><span class="keyword"><span class="keyword">;</span></span>
    <span class="purple">age</span>: <span class="keyword">broj</span><span class="keyword"><span class="keyword">;</span></span>
}

<span class="keyword">funkcija</span> doSomethingWithUser(u: User){
    ...
}
</pre>

In the case of user-defined types, you don't have to explicitly use the generated type constructor to pass the type checking.
Any object that satisfies the type definition completely is accepted:

<pre>
<span class="keyword">var</span> u = User(<span class="string">"Bosscript"</span><span class="keyword">,</span> <span class="number">1</span>)<span class="keyword"><span class="keyword">;</span></span>
doSomethingWithUser(u)<span class="keyword"><span class="keyword">;</span></span>
</pre>

<pre>
<span class="keyword">var</span> u = {
    <span class="purple">name</span>: <span class="string">"Bosscript"</span><span class="keyword">,</span>
    <span class="purple">age</span>: <span class="number">1</span>
}<span class="keyword"><span class="keyword">;</span></span>

doSomethingWithUser(u)<span class="keyword"><span class="keyword">;</span></span>
</pre>

<pre>
doSomethingWithUser({
    <span class="purple">name</span>: <span class="string">"Bosscript"</span><span class="keyword">,</span>
    <span class="purple">age</span>: <span class="number">1</span>
})<span class="keyword">;</span>

doSomethingWithUser(u)<span class="keyword">;</span>
</pre>

All three examples above are valid. The one below, however, is not:

<pre>
<span class="keyword">var</span> u = {
    <span class="purple">name</span>: <span class="string">"Bosscript"</span><span class="keyword">,</span>
    <span class="purple">age</span>: <span class="number">1</span><span class="keyword">,</span>
    <span class="purple">city</span>: <span class="string">"Tuzla"</span>
}<span class="keyword">;</span>

doSomethingWithUser(<span class="error">u</span>)<span class="keyword">;</span>
</pre>

<code style="color: red">
Type error: User has no property 'city'
</code>

To reiterate, an object must fully comply with the type definition. It must have all required fields, and it cannot have
any additional fields.

If you are not familiar with _user-defined types_, you can read more about them [here](/kreiranje-tipova).

When it comes to Models, the provided object must be an instance of the specified model or one of its subclasses.

<pre>
<span class="keyword">model</span> A {
    <span class="keyword">javno</span> {
        <span class="keyword">var</span> x<span class="keyword">;</span>
    }
    <span class="keyword">konstruktor</span>(x: <span class="keyword">broj</span>){
        <span class="purple">@x</span> = x<span class="keyword">;</span>
    }
}

<span class="keyword">funkcija</span> doSomethingWithA(a: A) {
    ...
}

<span class="keyword">var</span> a = A(<span class="number">10</span>)<span class="keyword">;</span>

doSomethingWithA(a)<span class="keyword">;</span>
</pre>

<pre>
<span class="keyword">model</span> B < A {
    <span class="keyword">javno</span> {
        <span class="keyword">var</span> y<span class="keyword">;</span>
    }
    
    <span class="keyword">konstruktor</span>(x: <span class="keyword">broj</span><span class="keyword">,</span> y: <span class="keyword">broj</span>){
        <span class="keyword">prototip</span>(x)<span class="keyword">;</span>
        <span class="purple">@y</span> = y<span class="keyword">;</span>
    }
}

<span class="keyword">var</span> b = B(<span class="number">4</span><span class="keyword">,</span> <span class="number">4</span>)<span class="keyword">;</span>

doSomethingWithA(b)<span class="keyword">;</span>
</pre>

Both examples above are valid and will produce no errors.

Unlike with user-defined types, an object literal cannot be passed to a function that expects a model instance, even if 
it has the same fields:

<pre>
<span class="keyword">var</span> objA = {
    <span class="purple">x</span>: <span class="number">5</span>
}<span class="keyword">;</span>

doSomethingWithA(<span class="error" title="Type error: Expected 'A', got 'objekat'">objA</span>)<span class="keyword">;</span>
</pre>
<code style="color: red">
Type error: Expected 'A', got 'objekat'
</code>

If you are not familiar with _models_, you can read more about them [here](/modeli).


## Function environment

All functions in Bosscript are closures, which means that they capture the parent environment they are declared in.
Functions that are declared at the top level capture the global environment as their parent. In practice, this means that
any variable declared in the parent environment is also accessible from within the function. Here is an example to illustrate this:

<pre>
<span class="keyword">var</span> x = <span class="number">10</span><span class="keyword">;</span>

<span class="keyword">funkcija</span> fn(){
    ispis(x)<span class="keyword">;</span>
}

fn()<span class="keyword">;</span>
</pre>

<pre>
Output:
<span class="number">10</span>
</pre>

Even though `x` was declared outside the function `fn`, you can still reference it, since it was declared in the parent 
environment.
This means that any changes to captured values will be reflected in the parent environment as well, so be careful:

<pre>
<span class="keyword">var</span> x = <span class="number">10</span><span class="keyword">;</span>

<span class="keyword">funkcija</span> fn(){
    x += <span class="number">10</span><span class="keyword">;</span>
}

fn()<span class="keyword">;</span>

ispis(x)<span class="keyword">;</span>
</pre>

<pre>
Output:
<span class="number">20</span>
</pre>

Every function has its own separate environment, which means identifiers that were declared in the parent environment can
be reused in the function environment:

<pre>
<span class="keyword">var</span> x = <span class="number">10</span><span class="keyword">;</span>

<span class="keyword">funkcija</span> fn(){
    <span class="keyword">var</span> x = <span class="number">10</span><span class="keyword">;</span>
    x += <span class="number">5</span><span class="keyword">;</span>
    ispis(x)<span class="keyword">;</span>
}

fn()<span class="keyword">;</span>

ispis(x)<span class="keyword">;</span>
</pre>

<pre>
Output:
<span class="number">15</span>
<span class="number">10</span>
</pre>

In the example above, we see that an `x` was declared in the global environment and inside the function block. The line
`x += 5` updates the `x` declared inside the function, and doesn't modify the global `x` in any way. This is evident from
the output of the code snippet.

## Lambda functions

Bosscript also supports lambda functions - both as variables and for one-time usage. They are declared exactly the same as
regular functions, except that the name is omitted.

<pre>
<span class="keyword">var</span> fn = <span class="keyword">funkcija</span>(){
    ispis(<span class="string">"Hello"</span>)<span class="keyword">;</span>
}

fn()<span class="keyword">;</span>
</pre>

The example above shows how you could assign a lambda function to a variable. If you really want to, you can declare every
function this way. The program will run fine. However, you will mainly be using them for object functions and with functions
that accept another function as an argument.

For example, it is much more convenient to type:
<pre>
<span class="keyword">var</span> obj = {
    <span class="purple">greeting</span>: <span class="keyword">funkcija</span>(){
        ispis(<span class="string">"Hello"</span>)<span class="keyword">;</span>
    }
}<span class="keyword">;</span>
</pre>

then it is to type:

<pre>
<span class="keyword">funkcija</span> objGreet(){
    ispis(<span class="string">"Hello"</span>)<span class="keyword">;</span>
}

<span class="keyword">var</span> obj = {
    <span class="purple">greeting</span>: objGreet
}<span class="keyword">;</span>
</pre>

Some functions accept one or more functions as an argument. This is a common occurrence. Take the built-in `zaSvaki` function
that is available on `niz`:

<pre>
<span class="keyword">var</span> arr = [<span class="number">1</span><span class="keyword">,</span> <span class="number">4</span><span class="keyword">,</span> <span class="number">8</span><span class="keyword">,</span> <span class="number">4</span>, <span class="number">3</span>]<span class="keyword">;</span>

arr.<span class="yellow">zaSvaki</span>(ispis)<span class="keyword">;</span>
</pre>

<pre>
Output:
1 4 8 4 3
</pre>

It takes one function as an argument. In this case, we passed the built-in `ispis` function to it, but let's say we want
to pass a function we wrote ourselves. It can be done in two ways.

The first option is to declare a function and pass it as a reference:

<pre>
<span class="keyword">var</span> arr = [<span class="number">1</span><span class="keyword">,</span> <span class="number">4</span><span class="keyword">,</span> <span class="number">8</span><span class="keyword">,</span> <span class="number">4</span><span class="keyword">,</span> <span class="number">3</span>]<span class="keyword">;</span>

<span class="keyword">funkcija</span> writeDouble(n: <span class="keyword">broj</span>){
    ispis(n * <span class="number">2</span>)<span class="keyword">;</span>
}

arr.<span class="yellow">zaSvaki</span>(writeDouble)<span class="keyword">;</span>
</pre>

or we can declare a lambda function directly in the parentheses of the call expression:

<pre>
<span class="keyword">var</span> arr = [<span class="number">1</span><span class="keyword">,</span> <span class="number">4</span><span class="keyword">,</span> <span class="number">8</span><span class="keyword">,</span> <span class="number">4</span><span class="keyword">,</span> <span class="number">3</span>]<span class="keyword">;</span>

arr.<span class="yellow">zaSvaki</span>(<span class="keyword">funkcija</span>(n: <span class="keyword">broj</span>){
    ispis(n * <span class="number">2</span>)<span class="keyword">;</span>
})<span class="keyword">;</span>
</pre>

Both options produce the same output:

<pre>
2 8 16 8 6
</pre>

Note that lambda functions also support the arrow syntax, just like regular functions. With that in mind, we can rewrite 
the last example as:

<pre>
<span class="keyword">var</span> arr = [<span class="number">1</span><span class="keyword">,</span> <span class="number">4</span><span class="keyword">,</span> <span class="number">8</span><span class="keyword">,</span> <span class="number">4</span><span class="keyword">,</span> <span class="number">3</span>]<span class="keyword">;</span>

arr.<span class="yellow">zaSvaki</span>(<span class="keyword">funkcija</span>(n: <span class="keyword">broj</span>) => ispis(n*<span class="number">2</span>))<span class="keyword">;</span>
</pre>


Using lambda functions is often convenient, especially if you don't intend on reusing a particular function.