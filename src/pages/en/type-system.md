---
layout: '../../layouts/DocumentationLayout.astro'
title: Type System
translation: "/sistem-tipova"
---

# Type System

## The types

Bosscript has the following types built into the language:
1. `broj` - numbers
2. `tekst` - strings
3. `logicki`/`logički` - booleans
4. `objekat` - objects
5. `niz` - arrays
6. `bajt` - byte
7. `BajtNiz` - ByteArray
8. `funkcija` - functions
9. `nedefinisano` - null and undefined
10. `ReadonlyObject` - an extension of `objekat` used only internally

## Broj

The `broj` type represents all numbers, both integers and floating-point numbers. It is the equivalent of the `number` 
type in JavaScript. The maximum value a `broj` holds is 3.4028235 * 10<sup>38</sup>. Under the hood, it uses the `double`
type from the JVM. Below are some examples:

```typescript
var x = 10;
var y = 1.234;
var z = 0;
```

`broj` also supports adding underscores as separators, for readability purposes:

```typescript
var x = 1_000_000  // valid, holds 1000000 (one million)
var z = 1_00_00_00 // bad readability, but still valid, holds 1000000 (one million)  
```

The separators can be placed however the user likes - the Bosscript lexer just ignores them when handling numeric literals.
However, we do recommend using them consistently and in a way that is readable. 

All commonly used operators are supported by `broj`, including `+`, `-`, `*`, `/`, and `%`. There is also the `^` operator,
which is used for exponentiation:

```typescript
ispis(5^3); // prints 125
```

## Tekst

The `tekst` type represents strings. It is a direct equivalent of the `String` type from the JVM. The only difference 
between Bosscript's `tekst` and most other string representations in other programming languages is the delimiter. The only
valid delimiter for `tekst` are double quotes. Single quotes are not allowed:

```typescript
var name = "Bosscript";
var version = '1.0';
// -----------^------------ Error!
```

Other than that, `tekst` behaves exactly the same as other string implementations. It comes with various utility methods
built in. Read more about them in the [tekst api page](/)


## Logički

The `logički` / `logicki` type represents booleans. Both spellings are supported and treated equally by the interpreter,
as is the case for all keywords with bosnian-specific letters. It is built on top of JVM `Boolean` and behaves exactly 
the same. The only difference is the literals themselves, which are Bosnian words:

```typescript
var t1 = tačno;
var t2 = tacno;

var nt1 = netačno;
var nt2 = netacno;
```

As you can see, even the literals support spelling with or without the letter *č*. All four variable declarations are valid.

The type has no built-in methods itself.

## Objekat

The `objekat` type is very similar to JavaScript objects. It is a collection of related data, which is stored as key-value 
pairs. Under the hood, it is implemented as a `HashMap`. The keys of an `objekat` are identifiers, while the value can be
of any type supported by Bosscript. Consider the following example:

```typescript
var empty = {};

var obj = {
    a: "a",
    b: 1,
    c: tacno,
    d: [1, 2],
    e: {
        isNested: tacno,
        prop: "prop"
    },
    f: funkcija(){
        ispis("fn");
    }
}
```

The `obj` object holds data of various types. To access any of the properties, use the dot syntax:

```typescript
ispis(obj.b); // prints 1
```

Trying to access a property that doesn't exist will result in an error:

```typescript
obj.rand;
// ^---------- Error!
```

`Property 'rand' does not exist on object {a: "a", b: 1, ...}`

Properties can also be accessed with the bracket indexing operator, where the property is referenced as a string literal:

```typescript
obj["c"] // evaluates to tačno
```

Trying to access a property that doesn't exist with the bracket operator also results in an error:

```typescript
obj["rand"]
// ^---------- Error!
```

However, it is possible to assign to properties that don't already exist:

```typescript
obj.notDefinedYet = "NOW DEFINED";
obj["notDefined"] = "NOW DEFINED TOO";
```

Both expressions above are valid and will create new properties on the `obj` object. 

An object property can also be a function. We see that `obj.f` is a function expression. Here is how to use it:

```typescript
obj.f();
// prints 'fn' to the console
```

When defining an object function, you can reference other object properties within the function, via `@`:

```typescript
var o = {
    name: "Bosscript",
    greet: funkcija(){
        ispis("Hello, my name is " + @name);
    }   
}

o.greet();

// Prints 'Hello, my name is Bosscript' to the console
```

The `@` symbol is a reference to the object itself. It is the equivalent of the `this` keyword in most programming languages.
Using `@`, you can access any object property within object functions. You cannot use `@` outside of object methods. Consider
this example:

```typescript
var o = {
    x: 1,
    y: 5,
    z: @x + @y
// ----^------------- Error!    
}
```

Code like the example above will cause an error `@ does not exist.`. So, only use `@` in functions.

Note: `@` is also used in models. Read more [here](/).

## Niz

The `niz` type represents arrays. It behaves similarly to JavaScript's `array` or Kotlin's `ArrayList`, which it uses under the hood.
In Bosscript, an array is dynamic, meaning it can hold data of different data types at once. An array literal is written
as a comma separated list of values between brackets. Consider the following example:

```typescript
var empty = [];
var a = [1, 2, 3, 4, 5];
var b = [1, "2", 3, "4", tačno];
var c = [1, [2, [3, 4]], 5];
```

All four declarations above are valid, and they demonstrate the flexibility of `niz`.

A `niz` is indexable using the bracket indexing operator, just like arrays in most programming languages:

```typescript
var arr = ["A", "B", "C"];
ispis(arr[0]); // prints 'A'
```

Indexes are 0-based, like in most other programming languages.

There are two ways to loop over a `niz`, either manually, or with the `zaSvaki` property, which is built into `niz`:

```typescript
var arr = ["A", "B", "C"];
za svako (i od 0 do arr.zadnji()){
    ispis(arr[i]);
}

// prints A B C to the console
```

```typescript
var arr = ["A", "B", "C"];
arr.zaSvaki(ispis);

// also prints A B C to the console
```

`niz` has many more built in properties like `zaSvaki`, which you can read more about [here](/).

## Bajt and BajtNiz

A `bajt` represents a byte, while `BajtNiz` is just an array of bytes. Bosscript v1.0 doesn't support any byte literals.
Instead, `bajt` is only used within `BajtNiz`, which itself is only used for input and output stream objects. You will only
encounter `BajtNiz` when working with the `telnet` standard library package.

`BajtNiz` has built in functionality, which you can read more about [here](/).

## Funkcija

A `funkcija` represents a function. Just like in JavaScript and some other languages, a function can be passed around as
an argument. Refering back to the `zaSvaki` example from before,

```typescript
var arr = ["A", "B", "C"];
arr.zaSvaki(ispis);

// also prints 'A B C' to the console
```
we can see that `ispis` is being passed as an argument to the `zaSvaki` function. It is also possible to build anonymous
lambda functions in-place in situations like this:

```typescript
var arr = ["A", "B", "C"];
arr.zaSvaki(funkcija(str){
    ispis(str.malimSlovima());
});

// prints 'a b c' to the console
```

To learn more about functions, refer to the [Functions article](/). It goes into depth on how functions work in Bosscript.
This section was just an overview of functions as a type.

## Nedefinisano

The `nedefinisano` type is a special type which represents `null` and `undefined`. More precisely, Bosscript doesn't distinguish
between `null` and `undefined` in the way that Javascript does. `Nedefinisano` covers both. The word *nedefinisano* itself
is a translation of *undefined,* and it was chosen because the Bosnian language doesn't have an appropriate word for `null`.

`nedefinisano` can be used to initialize variables, but there is no need, since not providing any initial value does exactly that:

```typescript
var nd = nedefinisano;
var x;

ispis(nd);
ispis(x);

// prints nedefinisano twice
```

It doesn't have any built-in functionality and attempting to access a property of a `nedefinisano` variable will result in
an error:

```typescript
var str = getValueOrNull()
ispis(str);
// prints nedefinisano

str.malimSlovima();
// ^---------------------- Cannot read property malimSlovima of nedefinisano
```

## ReadonlyObject

The `ReadonlyObject` is a type that is only used internally. It is an extension of the `objekat` type, with the only difference being
the fact that its properties cannot be changed. Since many of the standard library packages provide objects, a special type
was built to make sure the user doesn't reassign any of their properties accidentally. Below is an example:

```typescript
var klijent = TelnetKlijent();

klijent.ulazniTok = netačno;
// ---------------^---------------- Error!
```

`Error: ulazniTok is readonly!`

Other than that, you will not notice any difference when working with `ReadonlyObject`, when compared to regular `objekat`.
Even printing its typename will yield "objekat". 

## Typing

You will not need to think a lot about types when working with small Bosscript programs. Variables are fully dynamic. You will
need to consider types in the context of [functions](/), [type definitions](/) (which are used for quick user-defined types), and 
[models](/). Find out more in the respective articles.

