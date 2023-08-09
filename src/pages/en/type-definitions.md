---
layout: '../../layouts/DocumentationLayout.astro'
title: Type Definitions
translation: "/kreiranje-tipova"
index: 5
next: "/en/flow-control"
previous: "/en/type-system"
---

# Type Definitions

Bosscript comes with some built-in types, such as `broj`, `tekst` and `logički`. However, sometimes there is a need for 
user-defined types. This is where Type Definitions come in. You can use Bosscript type definitions to define a schema 
for objects. It is defined with the `tip` keyword. 

```bosscript
tip User{
    name: tekst;
    age: broj;
}
```

The example above shows what a typical type definition looks like. The type definition consists of the name and a list of 
expected properties and their corresponding types. The type annotations work exactly the same as with function parameters.
The only difference is that each type definition property ends with a semicolon.

A type definition, or `tip` for short, can contain properties of any valid type in Bosscript, including other type definitions
and models.

```bosscript
tip Course{
    teacher: User;
    classroom: broj;
}
```

A `tip` can also extend other `tip` definitions:

```bosscript
tip Teacher < User {
    office: tekst;
}
```
In the example above, the type `Teacher` inherits all properties of `User`, namely `name` and `age`, and also has an additional
property - `office`. This 'inheritance' is not the same as in Object-Oriented Programming. Under the hood, the `User` type definition
is copied into `Teacher`. This means that a function expecting a `User` object as a parameter will not accept a `Teacher` object.
The point of extending a `tip` is simply not having to copy and paste properties.

When you declare a `tip`, a constructor is generated for it. You can use the constructor to create objects that comply with
the type definition:

```bosscript
var user = User("Bosscript", 1);

ispis(user);
```

```bosscript
Output:
{name: "Bosscript", age: 1}
```

This is not mandatory, though. You can create an object literal that complies with the schema and the Bosscript Type Checker
will recognize that:

```bosscript
funkcija test(u: User){
    ...
}

var user = {
    name: "Bosscript",
    age: 1
};

test(user);
```

## When to use Type Definitions

If you need to be strict about what kind of object you are working with, but don't need any special functionality,
then Type Definitions are perfect. If you don't need additional functionality, using models would be overkill. 

Here is an example. Suppose you have a function that accepts a bunch of configuration options. Having them all as separate 
parameters would be unwieldy: 

```bosscript
funkcija formatImage(image: tekst, hue: broj, saturation: broj, contrast: broj, filter: tekst, ...){
    ...
}
```

You could combine it all in an object, but not having a type definition for it could lead to errors later:

```bosscript
funkcija formatImage(image: tekst, config){
    ...
}

formatImage(getImageSrc(), {hue: 10, saturation: 44, filter: "sepia"});
```

<code style="color: red;">
Error: {...} has no property 'contrast'
</code>

The best thing to do is to declare a custom `tip` for the config object:

```bosscript
tip ImageFormatConfig {
    hue: broj;
    contrast: broj;
    saturation: broj;
    filter: tekst;
    ...
}


funkcija formatImage(image: tekst, config: ImageFormatConfig){
    ...
}

formatImage(getImageSrc(), {hue: 10, contrast: 22, saturation: 44, filter: "sepia"});
```

If you are familiar with bosscript's `interface`, `tip` is a similar concept. The difference is that `tip` definitions 
don't have functions, and `interfaces` don't provide a constructor.

