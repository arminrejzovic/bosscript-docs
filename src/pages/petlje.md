---
layout: '../layouts/DocumentationLayout.astro'
title: Petlje
translation: "/en/loops"
index: 7
next: "/funkcije"
previous: "/kontrola-toka"
---

# Loops

## For loop

For loops in Bosscript have a significantly different syntax to most other languages' for loops. A for loop is called a 
`za svako` and consists of the following components:
1. `za svako` - keywords required to declare a for loop
2. () - the rest of the declaration is between parentheses, mandatory
3. counter - a name for the variable that will be used as a counter
4. `od` <`broj`> - the starting boundary for the counter, the counter is initialized to the value provided here
5. `do` <`broj`> - the ending boundary for the counter, inclusive
6. optional `korak` <`broj`> - the step value, counter is changed by provided value each iteration
7. body surrounded with curly braces

This is what it looks like in practice:

<pre>
<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">1</span> <span class="keyword">do</span> <span class="number">10</span> <span class="keyword">korak</span> <span class="number">1</span>){
    ispis(x)<span class="keyword">;</span>
}
</pre>

<code>1 2 3 4 5 6 7 8 9 10</code>

The example above shows a classic for loop which prints the numbers from 1 to 10 to the console.

The `korak` parameter can be omitted:

<pre>
<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">1</span> <span class="keyword">do</span> <span class="number">10</span>){
    ispis(x)<span class="keyword">;</span>
}
</pre>

<code>1 2 3 4 5 6 7 8 9 10</code>

In this case, the step gets defaulted to `1`. This works even if the loop is descending. In that case, the step is defaulted
to `-1` instead:

<pre>
<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">10</span> <span class="keyword">do</span> <span class="number">1</span>){
    ispis(x)<span class="keyword">;</span>
}
</pre>

<code>10 9 8 7 6 5 4 3 2 1</code>

If you do want to provide a step, it can be any `broj` and any expression evaluating to `broj`, including negative values
and floating point numbers:

<pre>
<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">1</span> <span class="keyword">do</span> <span class="number">10</span> <span class="keyword">korak</span> <span class="number">2</span>)

<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">10</span> <span class="keyword">do</span> <span class="number">1</span> <span class="keyword">korak</span> <span class="number">-2</span>)

<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">1</span> <span class="keyword">do</span> <span class="number">10</span> <span class="keyword">korak</span> <span class="number">0.5</span>)

<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">10</span> <span class="keyword">do</span> <span class="number">1</span> <span class="keyword">korak</span> <span class="number">-0.5</span>)

<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">10</span> <span class="keyword">do</span> <span class="number">1</span> <span class="keyword">korak</span> getStep())
</pre>

are all valid for-loop declarations in Bosscript. Be careful not to unintentionally create an infinite loop, since Bosscript
won't stop you:

<pre>
<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">1</span> <span class="keyword">do</span> <span class="number">10</span> <span class="keyword">korak</span> <span class="number">-0.5</span>)

<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">1</span> <span class="keyword">do</span> <span class="number">10</span> <span class="keyword">korak</span> <span class="number">0</span>)

<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">10</span> <span class="keyword">do</span> <span class="number">1</span> <span class="keyword">korak</span> <span class="number">1</span>)
</pre>
<code style="color: yellow">
⚠ Warning: Possible unintentional infinite loop
</code>

All examples above are valid for-loop declarations in Bosscript, but all of them are infinite loops. You will get a warning
in your terminal if declarations like the ones above are found, but the code will still run.

The same rules that apply for the `korak` value, apply for `od` and `do` as well. Both need to be a `broj` or an expression
that evaluates to `broj`. Otherwise, a type error will occur:

<pre>
<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="string">"1"</span> <span class="keyword">do</span> <span class="number">10</span>)

<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">1</span> <span class="keyword">do</span> <span class="string">"10"</span>)

<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="string">"1"</span> <span class="keyword">do</span> <span class="string">"10"</span>)
</pre>
<code style="color: red">
Type Error: For loop bounds must be of type broj
</code>

On the other hand, all examples below are valid:

<pre>
<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">0</span> <span class="keyword">do</span> <span class="number">1.4</span> <span class="keyword">korak</span> <span class="number">0.2</span>)

<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">-3</span> <span class="keyword">do</span> <span class="number">3.14</span> <span class="keyword">korak</span> <span class="number">0.2</span>)

<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">0.1</span> <span class="keyword">do</span> <span class="number">0.5</span> <span class="keyword">korak</span> <span class="number">0.01</span>)

<span class="keyword">za svako</span> (x <span class="keyword">od</span> getStart() <span class="keyword">do</span> getEnd() <span class="keyword">korak</span> getStep())
</pre>

The body of the loop is usually written as a block, i.e., between curly braces. However, if your for loop body consists 
of only one line of code, you can write it using the arrow syntax instead:

<pre>
<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">1</span> <span class="keyword">do</span> <span class="number">10</span>) => ispis(x)<span class="keyword">;</span>
</pre>

Most programming languages take the first line of code below a for loop as its body if braces are omitted. This is not 
allowed in Bosscript:

<pre>
<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">1</span> <span class="keyword">do</span> <span class="number">10</span>)
    ispis(x)<span class="keyword">;</span>
</pre>
<code style="color: red">
Parsing Error: Unexpected token 'ispis' found at 2:5
</code>

This is because Bosscript aims to promote good programming habits, and for-loops without braces are often banned by linters
in a professional setting. 


## While loop

The while-loop syntax in Bosscript is exactly the same as in most programming languages, apart from the keyword used. Every
while loop starts with the `dok` keyword, followed by the parenthesized condition - a `logički` or an expression that evaluates
to a `logički`. 

This is what it looks like:

<pre>
<span class="keyword">var</span> x = <span class="number">0</span><span class="keyword">;</span>
<span class="keyword">dok</span> (x < <span class="number">10</span>) {
    ispis(x)<span class="keyword">;</span>
    ++x<span class="keyword">;</span>
}
</pre>
<code>0 1 2 3 4 5 6 7 8 9</code>

The condition can be any kind of expression that evaluates to a `logički`, which includes `logički` literals themselves. 
You can use this to declare an infinite loop, if needed:

<pre>
<span class="keyword">dok</span> (<span class="keyword">tačno</span>){
    ...
}
</pre>

While loops also support the arrow syntax when the body is only one line of code:

<pre>
<span class="keyword">var</span> x = [<span class="number">5</span><span class="keyword">,</span> <span class="number">2</span><span class="keyword">,</span> <span class="number">10</span><span class="keyword">,</span> <span class="number">6</span>]<span class="keyword">;</span>
<span class="keyword">dok</span>(!x.<span class="yellow">jePrazan</span>()) => ispis(x.<span class="yellow">izbaci</span>())<span class="keyword">;</span>
</pre>
<code>6 10 2 5</code>


## Do While loop

The do-while loop is very similar to regular while loops. The main difference between them is that, with a do-while loop,
it is guaranteed that the body of the loop will be executed at least once. The syntax looks like this:

<pre>
<span class="keyword">var</span> x = <span class="number">0</span><span class="keyword">;</span>
<span class="keyword">radi</span> {
    ispis(x)<span class="keyword">;</span>
    ++x<span class="keyword">;</span>
}
<span class="keyword">dok</span> (x < <span class="number">10</span>)<span class="keyword">;</span>
</pre>

The loop body is preceded by the keyword `radi` (direct Bosnian translation of `do`). No arrow syntax is supported, even if
the do-block is only one line long. Finally, a semicolon is required after the closing parenthesis of the condition.

As mentioned earlier, the body of a do-while loop will be executed at least once, regardless of the condition:

<pre>
<span class="keyword">radi</span> {
    ispis(<span class="string">"This will print at least once"</span>)<span class="keyword">;</span>
}
<span class="keyword">dok</span> (<span class="keyword">netačno</span>)<span class="keyword">;</span>
</pre>
<code>This will print at least once</code>

The example above illustrates this clearly. Even though the condition is hard-coded to false (`netačno`), the body is executed
once and the message `This will print at least once` is printed to the console. 












