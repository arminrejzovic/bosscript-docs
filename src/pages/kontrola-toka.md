---
layout: '../layouts/DocumentationLayout.astro'
title: Kontrola Toka
translation: "/en/flow-control"
index: 6
next: "/petlje"
previous: "/kreiranje-tipova"
---

# Flow Control

## If statement

Beside the keyword used, the if-statement in Bosscript is a direct match of if-statements in most other programming languages.
The keyword used instead of `if` is `ako`. Consider this basic example:

<pre>
<span class="keyword">ako</span> (x > <span class="number">10</span>) {
    ispis(<span class="string">"x is greater than 10"</span>)<span class="keyword">;</span>
}
</pre>

The statement expects a `logički` or an expression that evaluates to `logički` as the condition. It is also possible to perform
null-checks using the logical not `!` operator:

<pre>
<span class="keyword">var</span> questionable = getValueOrNull()<span class="keyword">;</span>
<span class="keyword">ako</span> (!questionable) {
    ispis(<span class="string">"questionable doesn't exist"</span>)<span class="keyword">;</span>
}
</pre>

That is possible since the expression `!questionable` evaluates to `logički`. The example below, however, is invalid:

<pre>
<span class="keyword">var</span> questionable = getValueOrNull()<span class="keyword">;</span>
<span class="keyword">ako</span> (questionable) {
    ispis(<span class="string">"questionable exists"</span>)<span class="keyword">;</span>
}
</pre>
<code style="color: red">
Type Error: Condition is not a boolean
</code>


In Bosscript, there is no concept of *truthy* and *falsey* values, like in JavaScript. It strictly expects `logički` values in any place a
condition appears, including if-statements.

The if-statement can have an optional alternate branch. The concept is exactly the same as in 
most other programming languages:

<pre>
<span class="keyword">var</span> x = brojOd(unos(<span class="string">"Input a number: "</span>))<span class="keyword">;</span>

<span class="keyword">ako</span> (x % <span class="number">2</span> == <span class="number">0</span>) {
    ispis(<span class="string">"x is even"</span>)<span class="keyword">;</span>
}
<span class="keyword">inače</span> {
    ispis(<span class="string">"x is odd"</span>)<span class="keyword">;</span>
}
</pre>

An alternate branch can be another if-statement, which allows for chaining an arbitrary number of if-statements. This is
where Bosscript syntax differs to most other programming language. Most other programming languages use the keyword `else` both for 
chaining alternate branches (`else if`), and for the ultimate branch (`else {}`). Bosscript uses the keyword `ili` (Bosnian word for *or*)
for chaining alternate branches, while `inače` is used for the standalone else. This way, the syntax is more in line with
how the expression would read in conversational Bosnian. 

<pre>
<span class="keyword">var</span> user = getUser()<span class="keyword">;</span>

<span class="keyword">ako</span> (user<span class="purple">.role</span> == <span class="string">"student"</span>) {
    ...
}
<span class="keyword">ili</span> <span class="keyword">ako</span> (user<span class="purple">.role</span> == <span class="string">"professor"</span>) {
    ...
}
<span class="keyword">inače</span> {
    ...
}
</pre>

Note that both `inače` and `inace` are valid spellings of the keyword - both are treated the same. This means that both:

<pre>
<span class="keyword">ako</span> (x % <span class="number">2</span> == <span class="number">0</span>) {
    ispis(<span class="string">"x is even"</span>)<span class="keyword">;</span>
}
<span class="keyword">inače</span> {
    ispis(<span class="string">"x is odd"</span>)<span class="keyword">;</span>
}
</pre>
and: 

<pre>
<span class="keyword">ako</span> (x % <span class="number">2</span> == <span class="number">0</span>) {
    ispis(<span class="string">"x is even"</span>)<span class="keyword">;</span>
}
<span class="keyword">inace</span> {
    ispis(<span class="string">"x is odd"</span>)<span class="keyword">;</span>
}
</pre>

are equally valid.

## Unless statement

This feature of Bosscript was inspired by Ruby, which is one of the rare few programming languages that support it.

Below is an example written in Ruby:
<pre>
<span class="keyword">var</span> ime = ...

<span class="keyword">osim</span> <span class="keyword">ako</span>(ime.<span class="yellow">jePrazno</span>()){
    ispis(<span class="string">"Hello, "</span> + ime + <span class="string">"!"</span>)<span class="keyword">;</span>
}
</pre>

Both the Ruby and the Bosscript example will evaluate to

<pre>
Hello, Bosscript!
</pre>

if `name` is not empty. In the example, we assume that the `name` is set to `Bosscript`.

From the example above, it is evident that `unless`/`osim ako` works as an inverse if-statement, whereby it expects the 
provided condition to evaluate to `false`/`netačno`, in order for the consequent block to be executed. In other words, every
unless-statement can be written as an `if-not`.

<pre>
<span class="keyword">osim</span> <span class="keyword">ako</span>(ime.<span class="yellow">jePrazno</span>()){
    ispis(<span class="string">"Hello, "</span> + ime + <span class="string">"!"</span>)<span class="keyword">;</span>
}
</pre>

and 

<pre>
<span class="keyword">ako</span>(!ime.<span class="yellow">jePrazno</span>()){
    ispis(<span class="string">"Hello, "</span> + ime + <span class="string">"!"</span>)<span class="keyword">;</span>
}
</pre>

are equivalent statements. 
The reason why `osim ako` exists is because some users might find that syntax easier to read than
the classic `if-not` syntax. It sometimes maps better to a Bosnian sentence than `if-not` as well.

An `osim ako` statement can have an associated `inače` block, but branching is disallowed.

<pre>
<span class="keyword">osim</span> <span class="keyword">ako</span>(ime.<span class="yellow">jePrazno</span>()){
    ispis(<span class="string">"Hello, "</span> + ime + <span class="string">"!"</span>)<span class="keyword">;</span>
}
<span class="keyword">inače</span> {
    ispis(<span class="string">"Ime je prazno"</span>)<span class="keyword">;</span>
}
</pre>

is valid, but:

<pre>
<span class="keyword">osim</span> <span class="keyword">ako</span>(ime.<span class="yellow">jePrazno</span>()){
    ispis(<span class="string">"Hello, "</span> + ime + <span class="string">"!"</span>)<span class="keyword">;</span>
}
<span class="keyword">ili</span> <span class="keyword">ako</span>(ime<span class="purple">.duzina</span> < <span class="number">3</span>){
    ispis(<span class="string">"Ime je prekratko"</span>)<span class="keyword">;</span>
}
<span class="keyword">inače</span> {
    ispis(<span class="string">"Ime je prazno"</span>)<span class="keyword">;</span>
}
</pre>

<code style="color: red">
Parsing error: Unexpected token 'ili' at 4:1
</code>

is not.