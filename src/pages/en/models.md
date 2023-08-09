---
layout: '../../layouts/DocumentationLayout.astro'
title: Models
translation: "/modeli"
index: 9
next: "/en/imports"
previous: "/en/functions"
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

### Model Name

Model names follow the same rules as variable names. However, the convention is to capitalize them, i.e, to use UpperCamelCase.
A model name cannot coincide with an existing identifier (function or variable name).

```bosscript
var x = 10;

model x {...}
```

<code style="color: red;">
Error: x has already been defined.
</code>

The example below shows the conventional way of naming models: 
```bosscript
model Example{...}

model ExampleMultipleWords{...}
```

### Model Body

The model body consists of three components:
1. The private block
2. The public block
3. The constructor

Only the constructor is mandatory. The private and public blocks can be omitted if there is no need for them.
The order in which the three appear also doesn't matter. The only rule is that there can be only one of each.

Consider the following example of a very basic model:

```bosscript
model User{
    privatno {
        var name;
    }
    javno {
        funkcija getName(): tekst {
            vrati @name; 
        }
    }
    
    konstruktor(name: tekst){
        @name = name;
    }
}
```

Writing anything other than the private block, public block or constructor within the model body will result in an error:

```bosscript
model Example {
    za svako(x od 1 do 10){
        ...
    }
}
```

<code style="color: red;">
Error: Expected private or public block, or constructor. Got 'ForStatement'.
</code>


#### Constructors

As mentioned previously, each model must have a constructor, and it can only ever have one. Except for the `konstruktor` keyword,
it behaves similar to a regular function. However, keep in mind that a constructor cannot return anything. Depending on the 
version you are using, Bosscript might allow you to write return statements inside a constructor, but these statements will have no effect.

You might think that allowing only one constructor is too limiting, but anything that can be achieved with multiple constructors
can also be achieved with one:

```bosscript
model Example{
    konstruktor(a, b, c){
        ako(!a){
            @a = "PLACEHOLDER";
        }
        inače {
            @a = a;
        }
        
        ako(!b){
            @b = 10;
        }
        inače {
            @b = b;
        }
        
        ako(!postoji(c)){
            @c = "nedefinisano";
        }
        inače {
            @c = "definisano";
        }
    }
}
```

The example above shows a constructor that takes three arguments, where each argument can be undefined (`nedefinisano`). 
This means that any combination of (`a`, `b` and `c`) can be passed. This is the equivalent of having 6 different constructors.

A constructor can initialize properties that were not declared as variables in the private or public blocks: 

```bosscript
model Example {
    privatno {
        var x;
        var y;
        // No var z declared
    }
    konstruktor(x, y, z){
        @x = x;
        @y = y;
        @z = z;
        // Works just fine regardless
    }
}

var e = Example(3, 5, 2);
```

However, we recommend explicitly declaring all properties, for the sake of clarity and readability. Also, properties that
were not declared explicitly are considered public by default, which is something you might not want.

Notice that there is no `new` keyword when calling a constructor. It is enough to use the name of the model as a callable:

```javascript
// JavaScript
const example = new Example();
```
```bosscript
// Bosscript
var example = Example();
```

#### The `@` keyword

You've probably noticed the `@` keyword being used extensively in the constructor examples above. `@` is used to refer to
the instance, i.e., it is the equivalent of `this`. Writing `@a` in Bosscript is the equivalent of writing `this.a` in Java
and other similar languages.

Usage of `@` is not limited to constructors. You can use it anywhere within the class to refer to the instance:

```bosscript
model Example{
    privatno {
        var x;
        var y;
    }
    javno {
        funkcija test(){
            vrati @x * @y;
        }
    }
    ...
}
```

In fact, referring to model properties without `@` will result in an error: 

```bosscript
model Example{
    privatno {
        var x;
        var y;
    }
    javno {
        funkcija test(){
            vrati x * y;
        }
    }
    ...
}
```

<code style="color: red;">
Error: x does not exist
</code>

#### Private and Public Block

Having the private and public blocks is Bosscript's way of implementing visibility/accessibility. Instead of having to write
an access modifier in front of every variable and function, Bosscript users simply use the appropriate blocks. This syntax
was inspired by C++, but unlike C++, Bosscript uses real blocks delimited by curly braces. This also encourages users to organize
their code in a consistent matter, and helps them visually separate the functionality of their models.

```cpp
// C++
class Example{
private:
    int x;
    int y;
    
public:
    Example(int x, int y){
        this.x = x;
        this.y = y;
    }
}
```

```bosscript
// Bosscript
model Example{
    privatno {
        var x;
        var y;
    }

    konstruktor(x: broj, y: broj){
        @x = x;
        @y = y;
    }
}
```

Within both the private and the public block, only variable and function declarations are allowed. Other statements will
cause an error:

```bosscript
model Example {
    privatno {
        za svako(x od 1 do 10){
            ...
        }
    }
}
```

<code style="color: red;">
Error: Expected model member declaration, got 'ForStatement'.
</code>

All variables and functions declared in the private block are inaccessible from the outside, while all variables and functions
declared in the public block can be accessed by anyone anywhere.

```bosscript
var user = User("Bosscript");

ispis(user.name);
```

<code style="color: red;">
Error: 'name' is private.
</code>

In the example model `User`, `name` was declared in the private block, and trying to access it outside the class causes 
an error. On the other hand, `getName` was declared in the public block, so it can be accessed just fine:

```bosscript
ispis(user.getName());
```
```bosscript
Output:
Bosscript
```

## Inheritance

A model can extend another existing model. This is called inheritance. Under the hood, Bosscript utilizes prototype-based 
inheritance, but the concepts are exactly the same as in most programming languages. A model can extend only one other model.
There is no support for multiple inheritance. There is no keyword like `extends`, instead use the `<` symbol. This syntax
was inspired by Ruby:

```bosscript
model A {
    ...
}

model B < A {
    ...
}
```

A model cannot extend a type definition:

```bosscript
tip T {
    x: broj;
}

model M < T{
    ...
}
```
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

```bosscript
model A {
    privatno {
        var x;
        var y;
    }
    
    konstruktor(x, y){
        @x = x;
        @y = y;
    }
}

model B < A {
    privatno {
        var z;
    }

    konstruktor(x, y, z){
        @x = x;
        @y = y;
        @z = z;
    }
}
```
<code style="color: red;">
Error: Constructors for derived classes must contain a 'prototip' call.
</code>


The proper way to do it is shown below:

```bosscript
model A {
    privatno {
        var x;
        var y;
    }
    
    konstruktor(x, y){
        @x = x;
        @y = y;
    }
}

model B < A {
    privatno {
        var z;
    }

    konstruktor(x, y, z){
        prototip(x,y);
        @z = z;
    }
}
```

#### Private fields in inheritance

In Bosscript, a child model has access to all private fields of its parent model. In Java terms, private fields in Bosscript behave
more like `protected` fields. You can access any private field of any model that is higher up in the inheritance chain simply
with the `@` reference:

```bosscript
model A {
    privatno {
        var x;
        var y;
    }
    ...
}

model B < A {
    privatno {
        var z;
    }

    javno {
        funkcija test(){
            vrati @x * @y * @z;
        }
    }
}
```

Observe the `test` function in the code snippet above. It references `x` and `y` of the parent model `A` directly. This is
completely valid Bosscript code that will run without errors. The private block is only inaccessible from outside the model
and its children. 


#### Overriding methods and fields

A child model may override a method of its parent model. To do this, simply declare a method by the same name as in the 
parent model and provide a new implementation:

```bosscript
model A {
    javno {
        funkcija test(){
            vrati 10;
        }
    }
}

model B < A {
    javno {
        funkcija test(){
            vrati 20;
        }
    }
}

var b = B();
b.test();
```

```bosscript
Output:
20
```

You can call the parent's implementation of the method you are overriding. To do so, you will need to reference the 
`__roditelj__` object, which represents the parent model. 

```bosscript
model A{
    ...
    javno {
        funkcija test(){
            vrati @x * @x;
        }
    }
}

model B < A {
   ...
    javno {
        funkcija test(){
            vrati (@y * @y) + @__roditelj__.test();
        }
    }
}

var b = B(4, 3);

ispis(b.test());
```

```bosscript
Output:
25
```

In the example above, model `B` overrides model `A`'s implementation of the `test` function. `B`'s implementation of `test`
calls `A`'s implementation with the expression `@__roditelj__.test()`. That expression evaluates to 16, which is added to 
9, the result of `(@y * @y)`. The final result is 25.

It is also possible to override model fields:

```bosscript
model A{
    ...
    javno {
        var overriden = netačno;
    }
}

model B < A {
   ...
    javno {
        var overriden = tačno;
    }
}

var b = B();

ispis(b.overriden);
```

```bosscript
Output:
tačno
```

In the example above, model `B` overrides the field `overriden`. 


### Operator overloading

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

```bosscript
model DupliBroj {
    konstruktor(x, y){
        @x = x;
        @y = y;
    }

    javno {
        var x, y;

        funkcija plus(drugi: DupliBroj){
            vrati DupliBroj(@x + drugi.x, @y + drugi.y);
        }

        funkcija minus(drugi: DupliBroj){
            vrati DupliBroj(@x - drugi.x, @y - drugi.y);
        }

        funkcija puta(drugi: DupliBroj){
            vrati DupliBroj(@x * drugi.x, @y * drugi.y);
        }

        funkcija podijeljeno(drugi: DupliBroj){
            vrati DupliBroj(@x / drugi.x, @y / drugi.y);
        }

        funkcija manjeOd(drugi: DupliBroj): logicki {
            vrati (@x < drugi.x) && (@y < drugi.y);
        }

        funkcija veceOd(drugi: DupliBroj): logicki {
            vrati !@manjeOd(drugi);
        }

        funkcija jednako(drugi: DupliBroj): logički {
            vrati (@x == drugi.x) && (@y == drugi.y);
        }

        funkcija nijeJednako(drugi: DupliBroj): logički {
            vrati !@jednako(drugi);
        }
    }
}
```

Keep in mind that `manjeOd`, `veceOd`, `jednako`, and `nijeJednako` implementations must return a `logički` value. Other
operator functions may return a value of any type, but most of the time, you will want to return an instance of the containing model.

All operator functions can have only one parameter. The parameter can be of any type, but most of the time you will want to
accept another instance of the containing model. Sometimes it might make sense to accept an argument of another type:

```bosscript
model Vector{
    ...
    privatno {
        var arr = [];
    }
    javno {
        funkcija plus(right){
            ako (right.tip == "broj"){
                arr.zaSvaki(funkcija(it){
                    it += obj;
                });
            }
            ili ako (right.tip == "Vector"){
                @arr = arr.spoji(right);
            }
            inače {
                greska("Incompatible type.")
            }
        }
    }
}
```

In the example above, the `plus` function argument is not typed at all. It can accept an argument of any type, but `broj` 
and `Vector` are the types we want to see. Using a simple if-statement, we define the desired behavior for each of those
types, while passing any other type will result in an exception being thrown. 

