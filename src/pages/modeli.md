---
layout: '../layouts/DocumentationLayout.astro'
title: Modeli
translation: "/en/models"
index: 9
next: "/paketi"
previous: "/funkcije"
---

# Models

Models are Bosscript's approach to Object-Oriented Programming (OOP). A Model encapsulates data and behavior, and is a template
for creating objects - instances of the Model. In most programming languages, the keyword `class` is used, but in Bosscript
the keyword `model` is used. This is because the word `class` (translated as `klasa`) is understood a bit differently in Bosnian,
and `model` does a better job of conveying what they're used for.

A model definition consists of the following components:
1. The model name
2. Optional parent model name
3. Model body

## Model Name

Model names follow the same rules as variable names. However, the convention is to capitalize them, i.e, to use UpperCamelCase.
A model name cannot coincide with an existing identifier (function or variable name).

<pre>
<span class="keyword">var</span> x = <span class="number">10</span><span class="keyword">;</span>

<span class="keyword">model</span> x {...}
</pre>

<code style="color: red;">
Error: x has already been defined.
</code>

The example below shows the conventional way of naming models:
<pre>
<span class="keyword">model</span> Example{...}

<span class="keyword">model</span> ExampleMultipleWords{...}
</pre>


## Model Body

The model body consists of three components:
1. The private block
2. The public block
3. The constructor

Only the constructor is mandatory. The private and public blocks can be omitted if there is no need for them.
The order in which the three appear also doesn't matter. The only rule is that there can be only one of each.

Consider the following example of a very basic model:

<pre>
<span class="keyword">model</span> User{
    <span class="keyword">privatno</span> {
        <span class="keyword">var</span> name<span class="keyword">;</span>
    }
    <span class="keyword">javno</span> {
        <span class="keyword">funkcija</span> getName(): <span class="keyword">tekst</span> {
            <span class="keyword">vrati</span> <span class="purple">@name</span><span class="keyword">;</span> 
        }
    }
    
    <span class="keyword">konstruktor</span>(name: <span class="keyword">tekst</span>){
        <span class="purple">@name</span> = name<span class="keyword">;</span>
    }
}
</pre>


Writing anything other than the private block, public block or constructor within the model body will result in an error:

<pre>
<span class="keyword">model</span> Example {
    <span class="keyword">za svako</span>(x <span class="keyword">od</span> <span class="number">1</span> <span class="keyword">do</span> <span class="number">10</span>){
        ...
    }
}
</pre>


<code style="color: red;">
Error: Expected private or public block, or constructor. Got 'ForStatement'.
</code>


### Constructors

As mentioned previously, each model must have a constructor, and it can only ever have one. Except for the `konstruktor` keyword,
it behaves similar to a regular function. However, keep in mind that a constructor cannot return anything. Depending on the 
version you are using, Bosscript might allow you to write return statements inside a constructor, but these statements will have no effect.

You might think that allowing only one constructor is too limiting, but anything that can be achieved with multiple constructors
can also be achieved with one:

<pre>
<span class="keyword">model</span> Example{
    <span class="keyword">konstruktor</span>(a<span class="keyword">,</span> b<span class="keyword">,</span> c){
        <span class="keyword">ako</span>(!a){
            <span class="purple">@a</span> = <span class="string">"PLACEHOLDER"</span><span class="keyword">;</span>
        }
        <span class="keyword">inače</span> {
            <span class="purple">@a</span> = a<span class="keyword">;</span>
        }
        
        <span class="keyword">ako</span>(!b){
            <span class="purple">@b</span> = <span class="number">10</span><span class="keyword">;</span>
        }
        <span class="keyword">inače</span> {
            <span class="purple">@b</span> = b<span class="keyword">;</span>
        }
        
        <span class="keyword">ako</span>(!postoji(c)){
            <span class="purple">@c</span> = <span class="string">"nedefinisano"</span><span class="keyword">;</span>
        }
        <span class="keyword">inače</span> {
            <span class="purple">@c</span> = <span class="string">"definisano"</span><span class="keyword">;</span>
        }
    }
}
</pre>

The example above shows a constructor that takes three arguments, where each argument can be undefined (`nedefinisano`). 
This means that any combination of (`a`, `b` and `c`) can be passed. This is the equivalent of having 6 different constructors.

A constructor can initialize properties that were not declared as variables in the private or public blocks: 

<pre>
<span class="keyword">model</span> Example {
    <span class="keyword">privatno</span> {
        <span class="keyword">var</span> x<span class="keyword">;</span>
        <span class="keyword">var</span> y<span class="keyword">;</span>
        <span class="comment">// No var z declared</span>
    }
    <span class="keyword">konstruktor</span>(x<span class="keyword">,</span> y<span class="keyword">,</span> z){
        <span class="purple">@x</span> = x<span class="keyword">;</span>
        <span class="purple">@y</span> = y<span class="keyword">;</span>
        <span class="purple">@z</span> = z<span class="keyword">;</span>
        <span class="comment">// Works just fine regardless</span>
    }
}

<span class="keyword">var</span> e = Example(<span class="number">3</span><span class="keyword">,</span> <span class="number">5</span><span class="keyword">,</span> <span class="number">2</span>)<span class="keyword">;</span>
</pre>


However, we recommend explicitly declaring all properties, for the sake of clarity and readability. Also, properties that
were not declared explicitly are considered public by default, which is something you might not want.

Notice that there is no `new` keyword when calling a constructor. It is enough to use the name of the model as a callable:

<pre>
<span class="comment">// JavaScript</span>
<span class="keyword">const</span> example = <span class="keyword">new</span> Example()<span class="keyword">;</span>
</pre>

<pre>
<span class="comment">// Bosscript</span>
<span class="keyword">var</span> example = Example()<span class="keyword">;</span>
</pre>


### The `@` keyword

You've probably noticed the `@` keyword being used extensively in the constructor examples above. `@` is used to refer to
the instance, i.e., it is the equivalent of `this`. Writing `<span class="purple">@a</span>` in Bosscript is the equivalent of writing `this.a` in Java
and other similar languages.

Usage of `@` is not limited to constructors. You can use it anywhere within the class to refer to the instance:

<pre>
<span class="keyword">model</span> Example{
    <span class="keyword">privatno</span> {
        <span class="keyword">var</span> x<span class="keyword">;</span>
        <span class="keyword">var</span> y<span class="keyword">;</span>
    }
    <span class="keyword">javno</span> {
        <span class="keyword">funkcija</span> test(){
            <span class="keyword">vrati</span> <span class="purple">@x</span> * <span class="purple">@y</span><span class="keyword">;</span>
        }
    }
    ...
}
</pre>


In fact, referring to model properties without `@` will result in an error: 

<pre>
<span class="keyword">model</span> Example{
    <span class="keyword">privatno</span> {
        <span class="keyword">var</span> x<span class="keyword">;</span>
        <span class="keyword">var</span> y<span class="keyword">;</span>
    }
    <span class="keyword">javno</span> {
        <span class="keyword">funkcija</span> test(){
            <span class="keyword">vrati</span> x * y<span class="keyword">;</span>
        }
    }
    ...
}
</pre>

<code style="color: red;">
Error: x does not exist
</code>

### Private and Public Block

Having the private and public blocks is Bosscript's way of implementing visibility/accessibility. Instead of having to write
an access modifier in front of every variable and function, Bosscript users simply use the appropriate blocks. This syntax
was inspired by C++, but unlike C++, Bosscript uses real blocks delimited by curly braces. This also encourages users to organize
their code in a consistent matter, and helps them visually separate the functionality of their models.

<pre>
<span class="comment">// C++</span>
<span class="keyword">class</span> Example{
<span class="keyword">private</span>:
    <span class="keyword">int</span> x<span class="keyword">;</span>
    <span class="keyword">int</span> y<span class="keyword">;</span>
    
<span class="keyword">public</span>:
    Example(<span class="keyword">int</span> x<span class="keyword">,</span> <span class="keyword">int</span> y){
        <span class="keyword">this</span>.x = x<span class="keyword">;</span>
        <span class="keyword">this</span>.y = y<span class="keyword">;</span>
    }
}
</pre>

<pre>
<span class="comment">// Bosscript</span>
<span class="keyword">model</span> Example{
    <span class="keyword">privatno</span> {
        <span class="keyword">var</span> x<span class="keyword">;</span>
        <span class="keyword">var</span> y<span class="keyword">;</span>
    }

    <span class="keyword">konstruktor</span>(x: <span class="keyword">broj</span><span class="keyword">,</span> y: <span class="keyword">broj</span>){
        <span class="purple">@x</span> = x<span class="keyword">;</span>
        <span class="purple">@y</span> = y<span class="keyword">;</span>
    }
}
</pre>


Within both the private and the public block, only variable and function declarations are allowed. Other statements will
cause an error:

<pre>
<span class="keyword">model</span> Example {
    <span class="keyword">privatno</span> {
        <span class="keyword">za svako</span>(x <span class="keyword">od</span> <span class="number">1</span> <span class="keyword">do</span> <span class="number">10</span>){
            ...
        }
    }
}
</pre>


<code style="color: red;">
Error: Expected model member declaration, got 'ForStatement'.
</code>

All variables and functions declared in the private block are inaccessible from the outside, while all variables and functions
declared in the public block can be accessed by anyone anywhere.

<pre>
<span class="keyword">var</span> user = User(<span class="string">"Bosscript"</span>)<span class="keyword">;</span>

ispis(user.<span class="purple">name</span>)<span class="keyword">;</span>
</pre>


<code style="color: red;">
Error: 'name' is private.
</code>

In the example model `User`, `name` was declared in the private block, and trying to access it outside the class causes 
an error. On the other hand, `getName` was declared in the public block, so it can be accessed just fine:

<pre>
ispis(user.<span class="purple">getName</span>())<span class="keyword">;</span>
</pre>

<pre>
Output:
Bosscript
</pre>

## Inheritance

A model can extend another existing model. This is called inheritance. Under the hood, Bosscript utilizes prototype-based 
inheritance, but the concepts are exactly the same as in most programming languages. A model can extend only one other model.
There is no support for multiple inheritance. There is no keyword like `extends`, instead use the `<` symbol. This syntax
was inspired by Ruby:

<pre>
<span class="keyword">model</span> A {
    ...
}

<span class="keyword">model</span> B < A {
    ...
}
</pre>


A model cannot extend a type definition:

<pre>
<span class="keyword">tip</span> T {
    x: <span class="keyword">broj</span><span class="keyword">;</span>
}

<span class="keyword">model</span> M < T{
    ...
}
</pre>

<code style="color: red;">
Error: Expected Model Definition, got Type Definition @5:11
</code>

### Super calls

The constructor of a subclass must call the parent class constructor. That is usually the rule in most programming languages.
That rule also applies to Bosscript. However, the keyword used is not `super`, but rather `prototip`. This is both because 
the underlying prototype-based inheritance and the fact that the word _super_ in Bosnian is only used to say _great_. It's needless
to say that `supermodel` would not be a good choice of keyword.

The `prototip` call must be the first expression in the inheriting model's constructor. Trying to access `@` before calling
`prototip()` will result in an error:

<pre>
<span class="keyword">model</span> A {
    <span class="keyword">privatno</span> {
        <span class="keyword">var</span> x<span class="keyword">;</span>
        <span class="keyword">var</span> y<span class="keyword">;</span>
    }
    
    <span class="keyword">konstruktor</span>(x<span class="keyword">,</span> y){
        <span class="purple">@x</span> = x<span class="keyword">;</span>
        <span class="purple">@y</span> = y<span class="keyword">;</span>
    }
}

<span class="keyword">model</span> B < A {
    <span class="keyword">privatno</span> {
        <span class="keyword">var</span> z<span class="keyword">;</span>
    }

    <span class="keyword">konstruktor</span>(x<span class="keyword">,</span> y<span class="keyword">,</span> z){
        <span class="purple">@x</span> = x<span class="keyword">;</span>
        <span class="purple">@y</span> = y<span class="keyword">;</span>
        <span class="purple">@z</span> = z<span class="keyword">;</span>
    }
}
</pre>

<code style="color: red;">
Error: Constructors for derived classes must contain a 'prototip' call.
</code>


The proper way to do it is shown below:

<pre>
<span class="keyword">model</span> A {
    <span class="keyword">privatno</span> {
        <span class="keyword">var</span> x<span class="keyword">;</span>
        <span class="keyword">var</span> y<span class="keyword">;</span>
    }
    
    <span class="keyword">konstruktor</span>(x<span class="keyword">,</span> y){
        <span class="purple">@x</span> = x<span class="keyword">;</span>
        <span class="purple">@y</span> = y<span class="keyword">;</span>
    }
}

<span class="keyword">model</span> B < A {
    <span class="keyword">privatno</span> {
        <span class="keyword">var</span> z<span class="keyword">;</span>
    }

    <span class="keyword">konstruktor</span>(x<span class="keyword">,</span> y<span class="keyword">,</span> z){
        prototip(x<span class="keyword">,</span>y)<span class="keyword">;</span>
        <span class="purple">@z</span> = z<span class="keyword">;</span>
    }
}
</pre>


### Private fields in inheritance

In Bosscript, a child model has access to all private fields of its parent model. In Java terms, private fields in Bosscript behave
more like `protected` fields. You can access any private field of any model that is higher up in the inheritance chain simply
with the `@` reference:

<pre>
<span class="keyword">model</span> A {
    <span class="keyword">privatno</span> {
        <span class="keyword">var</span> x<span class="keyword">;</span>
        <span class="keyword">var</span> y<span class="keyword">;</span>
    }
    ...
}

<span class="keyword">model</span> B < A {
    <span class="keyword">privatno</span> {
        <span class="keyword">var</span> z<span class="keyword">;</span>
    }

    <span class="keyword">javno</span> {
        <span class="keyword">funkcija</span> test(){
            <span class="keyword">vrati</span> <span class="purple">@x</span> * <span class="purple">@y</span> * <span class="purple">@z</span><span class="keyword">;</span>
        }
    }
}
</pre>


Observe the `test` function in the code snippet above. It references `x` and `y` of the parent model `A` directly. This is
completely valid Bosscript code that will run without errors. The private block is only inaccessible from outside the model
and its children. 


### Overriding methods and fields

A child model may override a method of its parent model. To do this, simply declare a method by the same name as in the 
parent model and provide a new implementation:

<pre>
<span class="keyword">model</span> A {
    <span class="keyword">javno</span> {
        <span class="keyword">funkcija</span> test(){
            <span class="keyword">vrati</span> <span class="number">10</span><span class="keyword">;</span>
        }
    }
}

<span class="keyword">model</span> B < A {
    <span class="keyword">javno</span> {
        <span class="keyword">funkcija</span> test(){
            <span class="keyword">vrati</span> <span class="number">20</span><span class="keyword">;</span>
        }
    }
}

<span class="keyword">var</span> b = B()<span class="keyword">;</span>
b.<span class="purple">test</span>()<span class="keyword">;</span>
</pre>


<pre>
Output:
<span class="number">20</span>
</pre>

You can call the parent's implementation of the method you are overriding. To do so, you will need to reference the 
`__roditelj__` object, which represents the parent model. 

<pre>
<span class="keyword">model</span> A{
    ...
    <span class="keyword">javno</span> {
        <span class="keyword">funkcija</span> test(){
            <span class="keyword">vrati</span> <span class="purple">@x</span> * <span class="purple">@x</span><span class="keyword">;</span>
        }
    }
}

<span class="keyword">model</span> B < A {
   ...
    <span class="keyword">javno</span> {
        <span class="keyword">funkcija</span> test(){
            <span class="keyword">vrati</span> (<span class="purple">@y</span> * <span class="purple">@y</span>) + <span class="purple">@__roditelj__</span>.<span class="purple">test</span>()<span class="keyword">;</span>
        }
    }
}

<span class="keyword">var</span> b = B(<span class="number">4</span><span class="keyword">,</span> <span class="number">3</span>)<span class="keyword">;</span>

ispis(b.<span class="purple">test</span>())<span class="keyword">;</span>
</pre>


<pre>
Output:
<span class="number">25</span>
</pre>

In the example above, model `B` overrides model `A`'s implementation of the `test` function. `B`'s implementation of `test`
calls `A`'s implementation with the expression `@__roditelj__.test()`. That expression evaluates to 16, which is added to 
9, the result of `(@y * @y)`. The final result is 25.

It is also possible to override model fields:

<pre>
<span class="keyword">model</span> A{
    ...
    <span class="keyword">javno</span> {
        <span class="keyword">var</span> overriden = <span class="keyword">tačno</span><span class="keyword">;</span>
    }
}

<span class="keyword">model</span> B < A {
   ...
    <span class="keyword">javno</span> {
        <span class="keyword">var</span> overriden = <span class="keyword">tačno</span><span class="keyword">;</span>
    }
}

<span class="keyword">var</span> b = B()<span class="keyword">;</span>

ispis(b.<span class="purple">overridden</span>)<span class="keyword">;</span>
</pre>


<pre>
Output:
<span class="keyword">tačno</span>
</pre>

In the example above, model `B` overrides the field `overriden`. 


## Operator overloading

Bosscript models support operator overloading for most binary operators. To overload an operator, you need to implement a
public function under a specified name. Here is the comprehensive list:

| Operator | Function Name |
|:--------:|:-------------:|
|    +     |     plus      |
|    -     |     minus     |
|    *     |     puta      |
|    /     |  podijeljeno  |
|    <     |    manjeOd    |
|    >     |    veceOd     |
|    =     |    jednako    |
|    !=    |  nijeJednako  |


Here is an example of how you might implement all of these operators in a model:

<pre>
<span class="keyword">model</span> DupliBroj {
    <span class="keyword">konstruktor</span>(x<span class="keyword">,</span> y){
        <span class="purple">@x</span> = x<span class="keyword">;</span>
        <span class="purple">@y</span> = y<span class="keyword">;</span>
    }

    <span class="keyword">javno</span> {
        <span class="keyword">var</span> x<span class="keyword">,</span> y<span class="keyword">;</span>

        <span class="keyword">funkcija</span> plus(drugi: DupliBroj){
            <span class="keyword">vrati</span> DupliBroj(<span class="purple">@x</span> + drugi.<span class="purple">x</span><span class="keyword">,</span> <span class="purple">@y</span> + drugi.<span class="purple">y</span>)<span class="keyword">;</span>
        }

        <span class="keyword">funkcija</span> minus(drugi: DupliBroj){
            <span class="keyword">vrati</span> DupliBroj(<span class="purple">@x</span> - drugi.<span class="purple">x</span><span class="keyword">,</span> <span class="purple">@y</span> - drugi.<span class="purple">y</span>)<span class="keyword">;</span>
        }

        <span class="keyword">funkcija</span> puta(drugi: DupliBroj){
            <span class="keyword">vrati</span> DupliBroj(<span class="purple">@x</span> * drugi.<span class="purple">x</span><span class="keyword">,</span> <span class="purple">@y</span> * drugi.<span class="purple">y</span>)<span class="keyword">;</span>
        }

        <span class="keyword">funkcija</span> podijeljeno(drugi: DupliBroj){
            <span class="keyword">vrati</span> DupliBroj(<span class="purple">@x</span> / drugi.<span class="purple">x</span><span class="keyword">,</span> <span class="purple">@y</span> / drugi.<span class="purple">y</span>)<span class="keyword">;</span>
        }

        <span class="keyword">funkcija</span> manjeOd(drugi: DupliBroj): logicki {
            <span class="keyword">vrati</span> (<span class="purple">@x</span> < drugi.<span class="purple">x</span>) && (<span class="purple">@y</span> < drugi.<span class="purple">y</span>)<span class="keyword">;</span>
        }

        <span class="keyword">funkcija</span> veceOd(drugi: DupliBroj): logicki {
            <span class="keyword">vrati</span> !<span class="purple">@manjeOd</span>(drugi)<span class="keyword">;</span>
        }

        <span class="keyword">funkcija</span> jednako(drugi: DupliBroj): logički {
            <span class="keyword">vrati</span> (<span class="purple">@x</span> == drugi.<span class="purple">x</span>) && (<span class="purple">@y</span> == drugi.<span class="purple">y</span>)<span class="keyword">;</span>
        }

        <span class="keyword">funkcija</span> nijeJednako(drugi: DupliBroj): logički {
            <span class="keyword">vrati</span> !<span class="purple">@jednako</span>(drugi)<span class="keyword">;</span>
        }
    }
}
</pre>

Keep in mind that `manjeOd`, `veceOd`, `jednako`, and `nijeJednako` implementations must return a `logički` value. Other
operator functions may return a value of any type, but most of the time, you will want to return an instance of the containing model.

All operator functions can have only one parameter. The parameter can be of any type, but most of the time you will want to
accept another instance of the containing model. Sometimes it might make sense to accept an argument of another type:

<pre>
<span class="keyword">model</span> Vector{
    ...
    <span class="keyword">privatno</span> {
        <span class="keyword">var</span> arr = []<span class="keyword">;</span>
    }
    <span class="keyword">javno</span> {
        <span class="keyword">funkcija</span> plus(right){
            <span class="keyword">ako</span> (right.<span class="purple">tip</span> == <span class="string">"broj"</span>){
                arr.zaSvaki(<span class="keyword">funkcija</span>(it){
                    it += obj<span class="keyword">;</span>
                })<span class="keyword">;</span>
            }
            <span class="keyword">ili</span> <span class="keyword">ako</span> (right.<span class="purple">tip</span> == <span class="string">"Vector"</span>){
                <span class="purple">@arr</span> = arr.<span class="yellow">spoji</span>(right)<span class="keyword">;</span>
            }
            <span class="keyword">inače</span> {
                greska(<span class="string">"Incompatible type."</span>)
            }
        }
    }
}
</pre>

In the example above, the `plus` function argument is not typed at all. It can accept an argument of any type, but `broj` 
and `Vector` are the types we want to see. Using a simple if-statement, we define the desired behavior for each of those
types, while passing any other type will result in an exception being thrown. 

