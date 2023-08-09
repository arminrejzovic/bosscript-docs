---
layout: '../../layouts/DocumentationLayout.astro'
title: Exceptions
translation: "/iznimke"
index: 11
next: "/en/transpiling-to-js"
previous: "/en/imports"
---

# Exceptions

## Handling Exceptions

Bosscript has a very similar concept to `try-catch` - it is called `probaj-spasi`. This is what it looks like:

```bosscript
probaj {
    someFunctionThatMayThrowAnException();
}
spasi {
    // Handle exception here
}
```

Notice that the `catch` block, or `spasi` as it's known in Bosscript, doesn't accept any parameters. A `catch` block is 
usually defined with a parameter that specifies the type of exception that is to be caught. That is not the case in Bosscript.
Instead, an Exception object is implicitly made available in the `spasi` block under the name `g`:

```bosscript
probaj {
    someFunctionThatMayThrowAnException();
}
spasi {
    ispis(g);
}
```

```bosscript
Output:
Exception Message will be shown here
```

You're probably wondering how to target a specific exception. Well, `g` is an instance of `tekst`, which gives us several
useful methods that you can use to determine which exception occurred:

```bosscript
probaj {
    someFunctionThatMayThrowAnException();
}
spasi {
    ako(g.pocinjeNa("...")){
        // handle case 1
    }
    ili ako(g == "..."){
        // handle case 2
    }
    ili ako(g.zavrsavaNa("...")){
        // handle case 2
    }
    inače{
        // default case
    }
}
```


You can also include an optional `finally` block, a block that will execute regardless of whether an exception occurred or not.
The keyword used is `konačno`:

```bosscript
probaj {
    someFunctionThatMayThrowAnException();
}
spasi {
    // Handle exception here
}
konačno {
    // Some code you want to run in both cases
}
```

Note that `catch`/`spasi` is mandatory, unlike `finally`/`konačno`.

## Throwing an exception

To throw an exeption, just call the built-in `greška` function. There is no special `throw` keyword nor are there different
types of exceptions. It's as simple as calling the built-in function:

```bosscript
funkcija mayFail(){
    ako(failCondition){
        greška("Fail condition met..");
    }
}
```

The `greška` function accepts a `tekst` argument, which is the message.
