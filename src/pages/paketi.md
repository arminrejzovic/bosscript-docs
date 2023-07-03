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
paket "./homeworks/hw1.boss";
</pre>

In this case, `project` is the working directory, and `hw1.boss` is looked up with a path relative to the `project` directory.

You can also provide an absolute path:

<pre>
paket "C:\\Users\\armin\\Bosscript\\Examples\\example.boss";
</pre>

Remember to escape the backslashes!

**Standard library packages** are imported slightly differently. It is enough to specify the name of the package:

<pre>
paket "strukture";
paket "telnet";
</pre>

You don't even need the `.boss` extension. All standard library package names are known to the Bosscript interpreter and 
they come preinstalled with Bosscript.

## Partial imports

Sometimes you don't need to import the entire package. You just need a specific few functions or variables from it. In this
 case, you can specify what you need using the partial import syntax:

<pre>
paket "strukture"{ Mapa };
</pre>

In this example, we are importing `Mapa` from the standard library package `strukture`. The `strukture` package contains
various data structures, and most of the time you will not need all of them. 

This works for user-created files too. Suppose the contents of `hw1.boss` is as follows:

<pre>
var x = 10;

var y = 6;

funkcija test(){...}

funkcija example(){...}

funkcija sum(){...}

za svako (x od 1 do 10){...}

model Example{...}
</pre>

Here is how you would import the variable `x`, the function `sum` , and the model `Example` :

<pre>
paket "./homeworks/hw1.boss" {
    x,
    test,
    Example    
};
</pre>

It is a good practice to import only the values you need, both for the sake of performance and in order to not clutter the 
namespace of your current environment.

You can import any variable, function, Model definition and type definition from a given file, as long as they are declared
at the top level. You cannot import values from nested blocks:

<pre>
// example.boss

ako(tačno){
    var x = 10;
}
</pre>

If we try to import `x` from the file `example.boss`, an error will occur:

<pre>
paket "./example.boss" {x};

ispis(x);
</pre>

<code style="color: red;">
Error: z does not exist
</code>
 
You can write import statements anywhere in a Bosscript file, but it is a best practice to keep all imports at the top of the file.

<pre>
paket "IO";

funkcija useIO(){
    ...
}

paket "sistem";

funkcija useSistem(){
    ...
}
</pre>

The code above is valid, but it is better if you write it like this:

<pre>
paket "IO";
paket "sistem";

funkcija useIO(){
    ...
}

funkcija useSistem(){
    ...
}
</pre>
