---
layout: '../layouts/DocumentationLayout.astro'
title: Paketi
translation: "/en/imports"
index: 10
next: "/iznimke"
previous: "/modeli"
---

# Imports

All imports in Bosscript start with the `paket` keyword, followed by the name of the imported file under double quotes. 
There is a slight difference in how the name is written, depending on whether it is a standard library package, or a 
user-created file that is being imported.

**User created files** are imported using a relative path. The path is relative to the current working directory, i.e., the folder
containing the file with the import statement.

The folder structure looks like this:

* project
    * main.boss
    * homeworks
        * hw1.boss
        * hw2.boss
    * examples
    * models

<pre>
<span class="keyword">paket</span> <span class="string">"./homeworks/hw1.boss"</span><span class="keyword">;</span>
</pre>

In this case, `project` is the working directory, and `hw1.boss` is looked up with a path relative to the `project` directory.

You can also provide an absolute path:

<pre>
<span class="keyword">paket</span> <span class="string">"C:\\Users\\armin\\Bosscript\\Examples\\example.boss"</span><span class="keyword">;</span>
</pre>

Remember to escape the backslashes!

**Standard library packages** are imported slightly differently. It is enough to specify the name of the package:

<pre>
<span class="keyword">paket</span> <span class="string">"strukture"</span><span class="keyword">;</span>
<span class="keyword">paket</span> <span class="string">"telnet"</span><span class="keyword">;</span>
</pre>

You don't even need the `.boss` extension. All standard library package names are known to the Bosscript interpreter and 
they come preinstalled with Bosscript.

## Partial imports

Sometimes you don't need to import the entire package. You just need a specific few functions or variables from it. In this
 case, you can specify what you need using the partial import syntax:

<pre>
<span class="keyword">paket</span> <span class="string">"strukture"</span>{ Mapa }<span class="keyword">;</span>
</pre>

In this example, we are importing `Mapa` from the standard library package `strukture`. The `strukture` package contains
various data structures, and most of the time you will not need all of them. 

This works for user-created files too. Suppose the contents of `hw1.boss` is as follows:

<pre>
<span class="keyword">var</span> x = <span class="number">10</span><span class="keyword">;</span>

<span class="keyword">var</span> y = <span class="number">6</span><span class="keyword">;</span>

<span class="keyword">funkcija</span> test(){...}

<span class="keyword">funkcija</span> example(){...}

<span class="keyword">funkcija</span> sum(){...}

<span class="keyword">za svako</span> (x <span class="keyword">od</span> <span class="number">1</span> <span class="keyword">do</span> <span class="number">10</span>){...}

<span class="keyword">model</span> Example{...}
</pre>

Here is how you would import the variable `x`, the function `sum` , and the model `Example` :

<pre>
<span class="keyword">paket</span> <span class="string">"./homeworks/hw1.boss"</span> {
    x<span class="keyword">,</span>
    test<span class="keyword">,</span>
    Example    
}<span class="keyword">;</span>
</pre>

It is a good practice to import only the values you need, both for the sake of performance and in order to not clutter the 
namespace of your current environment.

You can import any variable, function, Model definition and type definition from a given file, as long as they are declared
at the top level. You cannot import values from nested blocks:

<pre>
<span class="comment">// example.boss</span>

<span class="keyword">ako</span>(<span class="keyword">tačno</span>){
    <span class="keyword">var</span> x = <span class="number">10</span><span class="keyword">;</span>
}
</pre>

If we try to import `x` from the file `example.boss`, an error will occur:

<pre>
<span class="keyword">paket</span> <span class="string">"./example.boss"</span> {x}<span class="keyword">;</span>

ispis(x)<span class="keyword">;</span>
</pre>

<code style="color: red;">
Error: z does not exist
</code>
 
You can write import statements anywhere in a Bosscript file, but it is a best practice to keep all imports at the top of the file.

<pre>
<span class="keyword">paket</span> <span class="string">"IO"</span><span class="keyword">;</span>

<span class="keyword">funkcija</span> useIO(){
    ...
}

<span class="keyword">paket</span> <span class="string">"sistem"</span><span class="keyword">;</span>

<span class="keyword">funkcija</span> useSistem(){
    ...
}
</pre>

The code above is valid, but it is better if you write it like this:

<pre>
<span class="keyword">paket</span> <span class="string">"IO"</span><span class="keyword">;</span>
<span class="keyword">paket</span> <span class="string">"sistem"</span><span class="keyword">;</span>

<span class="keyword">funkcija</span> useIO(){
    ...
}

<span class="keyword">funkcija</span> useSistem(){
    ...
}
</pre>
