---
layout: '../../layouts/DocumentationLayout.astro'
title: Variables
translation: "/varijable"
index: 3
next: "/en/type-system"
previous: "/en/standard-input-output"
---

# Variables

With Bosscript being a dynamic programming language, any variable can hold any type of data. 
There are two types of variables in Bosscript, those declared with `var` and those declared with `konst`.

## Var

Variables declared with `var` are mutable, which means that they can be reassigned at any point in the program. They also
don't need to be explicitly initialized when declared.

```bosscript
var x;
```

The variable `x` from the example above is automatically initialized to `nedefinisano` (null). Of course, it is possible
to initialize a variable with any expression:

```bosscript
var x = 10;
var y = example();
var z = "Z";
```
You can even initialize a variable to `nedefinisano` explicitly, if you really want to.

```bosscript
var x = nedefinisano;
```
This can be considered redundant, though.

It is also possible to declare multiple variables at once:

```bosscript
var x, y;
```

In this case, both `x` and `y` are initialized to `nedefinisano`. 

Any combination of initialized and non-initialized variables works:

```bosscript
var x, y = 10;
var z = 10, s;
var a, b, c;
```

As previously mentioned, `var` variables can be reassigned at any point. Consider the example below:

```bosscript
var x = 10;

x = 20;

ispis(x); // prints 20
```

`x` was reassigned to the number 20. 

You can also reassign values of other types, like below:

```bosscript
var x = 10;

x = "Hello";

ispis(x); // prints Hello
```

In this case, we changed `x` from the number 10 to the string "Hello". 

If need be, variables can be reassigned to `nedefinisano` again:

```bosscript
var x = 10;

x = nedefinisano;

ispis(x); // prints nedefinisano
```

The only thing that is not allowed is declaring the same variable multiple times in the same scope:

```bosscript
var x = 10;
var x = "Hello"; 
//--^----------- Error!
```

The code above will cause an error: `x has already been defined`

## Konst

The keyword `konst` stands for *konstanta* (constant) and, as the name suggests, is used to declare constants. Once defined,
constants cannot be reassigned. They also must be initialized upon creation, unlike with `var`.

```bosscript
konst pi = 3.14; // proper
konst x;
// ---^------------ Error!
```

Trying to reassign a `konst` will result in an error `Constants cannot be reassigned`:

```bosscript
konst x = 10;

x = 20;
// ---^------------ Error!
```

### Mutability of objects

Contrary to what you may think at first, declaring arrays and objects as `konst` doesn't make them immutable. Instead, it
just makes the variable un-reassignable. Consider the following example:

```bosscript
konst obj = {
    a: 10,
    b: 20
};

obj.a = 20;

ispis(obj); // prints {a: 20, b: 20}
```

The code above is completely valid. If you need your objects to be immutable, consider using [models](/models).
The same is true for arrays: 

```bosscript
konst arr = [1, 2, 3, 4];

arr[2] = 999;

ispis(arr); // prints [1, 2, 999, 4]
```

This is what `konst` disallows with objects and arrays: 

```bosscript
konst obj = {
    a: "A",
    b: "B"
};

obj = {};
// -----^------------ Error!

konst arr = [1, 2, 3, 4];

arr = [9, 8, 7];
// ------------^----- Error!
```

So, just like with other data types, a `konst` holding an array or object cannot be reassigned.








