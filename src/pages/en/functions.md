---
layout: '../../layouts/DocumentationLayout.astro'
title: Functions
translation: "/funkcije"
index: 8
next: "/en/models"
previous: "/en/loops"
---

# Functions

Functions in Bosscript are declared using the `funkcija` keyword. The mandatory parts of any function declaration are as
follows:

1. The `funkcija` keyword
2. Function name
3. Parentheses, optionally containing parameters
4. Function body

This is what a basic function declaration looks like:

```bosscript
funkcija greeting(){
    ispis("Hello, world!")
}
```

Function names must be unique. There can be only one function with a particular name, and a function name cannot be an identifier
that was already used a variable:

```bosscript
var greeting = "Hello";

funkcija greeting(){
    ispis("Hello, world!")
}
```

<code style="color: red">
Error: 'greeting' has already been defined
</code>

```bosscript
funkcija greeting(){
    ispis("Hello, world!")
}

funkcija greeting(name){
    ispis("Hello, " + name);
}
```

<code style="color: red">
Error: 'greeting' has already been defined
</code>

Parameters are comma separated and must be unique.

```bosscript
funkcija test(a, b, c){
    ispis(a + b + c);
}
```
is valid, but

```bosscript
funkcija test(a, b, a){
    ispis(a + b + a);
}
```

<code style="color: red">
Error: 'a' has already been defined
</code>

is not.

Functions are called like this:

```bosscript
// No arguments
greeting();

// One argument
greeting("Bosscript");

// Multiple arguments
test(1, 5, 2);
```
```bosscript
Hello, world!
Hello, Bosscript
8
```

Make sure to provide an adequate number of arguments, otherwise you will get an Argument mismatch error:

```bosscript
test(1,2);
```
<code style="color: red">
Argument mismatch: function 'test' expects 3 arguments (a: nepoznato, b: nepoznato, c: nepoznato)
</code>


A function body is usually a block:

```bosscript
funkcija test(){
    doSomething();
    doSomethingElse();
}
```

However, if the function body is only one line, you can use the arrow syntax:

```bosscript
funkcija greet() => ispis("Hello, world!");
```

So far, all functions provided as examples had no return statements. So, how do return statements work in Bosscript? It 
depends on whether a value is being returned. If you are returning a value, use the keyword `vrati`, followed by the value:

```bosscript
funkcija sum(a, b){
    vrati a + b;
}
```

If you want to return from a function without returning any value, i.e., a void-return, use `vrati se`:

```bosscript
funkcija greet(name){
    ako(name.duzina < 3){
        vrati se;
    }
    ispis("Hello " + name);
}
```

The `se` keyword doesn't add any functionality. It is there due to the grammar of the Bosnian language. Writing `vrati` alone
doesn't look right and doesn't accurately convey the meaning of the statement.

When writing functions using the arrow syntax, the return statement is omitted. The result of the only statement in the
function body is implicitly returned.

```bosscript
funkcija sum(a, b) => a + b;

ispis(sum(5,3));
```

```bosscript
Output:
8
```

In fact, it is not allowed to explicitly write `vrati` when using the arrow syntax:

```bosscript
funkcija sum(a, b) => vrati a + b;
```

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

```bosscript
funkcija greeting(name: tekst){
    ispis("Hello, " + name);
}
```
The parameter `name` is specified to be of type `tekst`, but the function has no specified return type.

```bosscript
funkcija sum(a: broj, b: broj){
    vrati a + b;
}
```

In this case, both parameters `a` and `b` are typed, while the function still doesn't have a specified return type. We can 
expand on this example and provide a return type:

```bosscript
funkcija sum(a: broj, b: broj): broj{
    vrati a + b;
}
```

As mentioned earlier, not all parameters have to be typed. You can omit type annotations on particular parameters if you need to:

```bosscript
funkcija concat(str: tekst, x): tekst{
    vrati str + x.tekst();
}
```

In the example above, the parameter is typed to `tekst`, but `x` has no type annotation at all. When a parameter is given 
no type annotation, no type checking will be performed on that particular parameter. It is implicitly given the type `nepoznato`,
and the user can pass a variable of any type for that particular parameter.

```bosscript
concat("Example", 10);

concat("Example", tačno);

concat("Example", {x: 1, y: 2});
```

All examples above are valid calls to the `concat` function defined earlier. 

If you pass a value of an incorrect type for a typed parameter, you will get an error:

```bosscript
concat(10, "Example");
```
<code style="color: red">
Type error: Expected 'tekst', got `broj'
</code>

The same goes for return types:

```bosscript
fun concat(str: tekst, x): tekst{
    vrati 10;
}

concat("Hello", "World");
```

<code style="color: red">
Type error: Expected 'tekst', got `broj'
</code>

User-defined types and Model names can also be used for Type Annotations:

```bosscript
tip User{
    name: tekst;
    age: broj;
}

funkcija doSomethingWithUser(u: User){
    ...
}
```

In the case of user-defined types, you don't have to explicitly use the generated type constructor to pass the type checking.
Any object that satisfies the type definition completely is accepted:

```bosscript
var u = User("Bosscript", 1);
doSomethingWithUser(u);
```

```bosscript
var u = {
    name: "Bosscript",
    age: 1
};

doSomethingWithUser(u);
```

```bosscript
doSomethingWithUser({
    name: "Bosscript",
    age: 1
});

doSomethingWithUser(u);
```

All three examples above are valid. The one below, however, is not:

```bosscript
var u = {
    name: "Bosscript",
    age: 1,
    city: "Tuzla"
};

doSomethingWithUser(u);
```

<code style="color: red">
Type error: User has no property 'city'
</code>

To reiterate, an object must fully comply with the type definition. It must have all required fields, and it cannot have
any additional fields.

If you are not familiar with _user-defined types_, you can read more about them [here](/).

When it comes to Models, the provided object must be an instance of the specified model or one of its subclasses.

```bosscript
model A {
    javno {
        var x;
    }
    konstruktor(x: broj){
        @x = x;
    }
}

funkcija doSomethingWithA(a: A) {
    ...
}

var a = A(10);

doSomethingWithA(a);
```

```bosscript
model B < A {
    javno {
        var y;
    }
    
    konstruktor(x: broj, y: broj){
        prototip(x);
        @y = y;
    }
}

var b = B(4, 4);

doSomethingWithA(b);
```

Both examples above are valid and will produce no errors.

Unlike with user-defined types, an object literal cannot be passed to a function that expects a model instance, even if 
it has the same fields:

```bosscript
var objA = {
    x: 5
};

doSomethingWithA(objA);
```
<code style="color: red">
Type error: Expected 'A', got 'objekat'
</code>

If you are not familiar with _models_, you can read more about them [here](/).


## Function environment

All functions in Bosscript are closures, which means that they capture the parent environment they are declared in.
Functions that are declared at the top level capture the global environment as their parent. In practice, this means that
any variable declared in the parent environment is also accessible from within the function. Here is an example to illustrate this:

```bosscript
var x = 10;

funkcija fn(){
    ispis(x);
}

fn();
```

```bosscript
Output:
10
```

Even though `x` was declared outside the function `fn`, you can still reference it, since it was declared in the parent 
environment.
This means that any changes to captured values will be reflected in the parent environment as well, so be careful:

```bosscript
var x = 10;

funkcija fn(){
    x += 10;
}

fn();

ispis(x);
```

```bosscript
Output:
20
```

Every function has its own separate environment, which means identifiers that were declared in the parent environment can
be reused in the function environment:

```bosscript
var x = 10;

funkcija fn(){
    var x = 10;
    x += 5;
    ispis(x);
}

fn();

ispis(x);
```

```bosscript
Output:
15
10
```

In the example above, we see that an `x` was declared in the global environment and inside the function block. The line
`x += 5` updates the `x` declared inside the function, and doesn't modify the global `x` in any way. This is evident from
the output of the code snippet.

## Lambda functions

Bosscript also supports lambda functions - both as variables and for one-time usage. They are declared exactly the same as
regular functions, except that the name is omitted.

```bosscript
var fn = funkcija(){
    ispis("Hello");
}

fn();
```

The example above shows how you could assign a lambda function to a variable. If you really want to, you can declare every
function this way. The program will run fine. However, you will mainly be using them for object functions and with functions
that accept another function as an argument.

For example, it is much more convenient to type:
```bosscript
var obj = {
    greeting: funkcija(){
        ispis("Hello");
    }
};
```

then it is to type:

```bosscript
funkcija objGreet(){
    ispis("Hello");
}

var obj = {
    greeting: objGreet
};
```

Some functions accept one or more functions as an argument. This is a common occurrence. Take the built-in `zaSvaki` function
that is available on `niz`:

```bosscript
var arr = [1, 4, 8, 4, 3];

arr.zaSvaki(ispis);
```

```bosscript
Output:
1 4 8 4 3
```

It takes one function as an argument. In this case, we passed the built-in `ispis` function to it, but let's say we want
to pass a function we wrote ourselves. It can be done in two ways.

The first option is to declare a function and pass it as a reference:

```bosscript
var arr = [1, 4, 8, 4, 3];

funkcija writeDouble(n: broj){
    ispis(n * 2);
}

arr.zaSvaki(writeDouble);
```

or we can declare a lambda function directly in the parentheses of the call expression:

```bosscript
var arr = [1, 4, 8, 4, 3];

arr.zaSvaki(funkcija(n: broj){
    ispis(n * 2);
});
```

Both options produce the same output:

```bosscript
2 8 16 8 6
```

Note that lambda functions also support the arrow syntax, just like regular functions. With that in mind, we can rewrite 
the last example as:

```bosscript
var arr = [1, 4, 8, 4, 3];

arr.zaSvaki(funkcija(n: broj) => ispis(n*2));
```


Using lambda functions is often convenient, especially if you don't intend on reusing a particular function.