---
layout: '../../layouts/DocumentationLayout.astro'
title: Flow Control
translation: "/kontrola-toka"
---

# Flow Control

## If statement

Beside the keyword used, the if-statement in Bosscript is a direct match of if-statements in most other programming languages.
The keyword used instead of `if` is `ako`. Consider this basic example:

```typescript
ako (x > 10) {
    ispis("x is greater than 10");
}
```

The statement expects a `logički` or an expression that evaluates to `logički` as the condition. It is also possible to perform
null-checks using the logical not `!` operator:

```typescript
var questionable = getValueOrNull();
ako (!questionable) {
    ispis("questionable doesn't exist");
}
```

That is possible since the expression `!questionable` evaluates to `logički`. The example below, however, is invalid:

```typescript
var questionable = getValueOrNull();
ako (questionable) {
    ispis("questionable exists");
}
```
<code style="color: red">
Type Error: Condition is not a boolean
</code>


In Bosscript, there is no concept of *truthy* and *falsey* values, like in JavaScript. It strictly expects `logički` values in any place a
condition appears, including if-statements.

The if-statement can have an optional alternate branch. The concept is exactly the same as in 
most other programming languages:

```typescript
var x = brojOd(unos("Input a number: "));

ako (x % 2 == 0) {
    ispis("x is even");
}
inače {
    ispis("x is odd");
}
```

An alternate branch can be another if-statement, which allows for chaining an arbitrary number of if-statements. This is
where Bosscript syntax differs to most other programming language. Most other programming languages use the keyword `else` both for 
chaining alternate branches (`else if`), and for the ultimate branch (`else {}`). Bosscript uses the keyword `ili` (Bosnian word for *or*)
for chaining alternate branches, while `inače` is used for the standalone else. This way, the syntax is more in line with
how the expression would read in conversational Bosnian. 

```typescript
var user = getUser();

ako (user.role == "student") {
    ...
}
ili ako (user.role == "professor") {
    ...
}
inače {
    ...
}
```

Note that both `inače` and `inace` are valid spellings of the keyword - both are treated the same. This means that both:

```typescript
ako (x % 2 == 0) {
    ispis("x is even");
}
inače {
    ispis("x is odd");
}
```
and: 

```typescript
ako (x % 2 == 0) {
    ispis("x is even");
}
inace {
    ispis("x is odd");
}
```

are equally valid.

## Unless statement

This feature of Bosscript was inspired by Ruby, which is one of the rare few programming languages that support it.

Below is an example written in Ruby:
```ruby
name = ...

unless name.empty?
  puts "Hello, #{name}!"
end
```

and the equivalent code in Bosscript:
```typescript
var ime = ...

osim ako(ime.jePrazno()){
    ispis("Hello, " + ime + "!");
}
```

Both the Ruby and the Bosscript example will evaluate to

```typescript
Hello, Bosscript!
```

if `name` is not empty. In the example, we assume that the `name` is set to `Bosscript`.

From the example above, it is evident that `unless`/`osim ako` works as an inverse if-statement, whereby it expects the 
provided condition to evaluate to `false`/`netačno`, in order for the consequent block to be executed. In other words, every
unless-statement can be written as an `if-not`.

```typescript
osim ako(ime.jePrazno()){
    ispis("Hello, " + ime + "!");
}
```

and 

```typescript
ako(!ime.jePrazno()){
    ispis("Hello, " + ime + "!");
}
```

are equivalent statements. 
The reason why `osim ako` exists is because some users might find that syntax easier to read than
the classic `if-not` syntax. It sometimes maps better to a Bosnian sentence than `if-not` as well.

An `osim ako` statement can have an associated `inače` block, but branching is disallowed.

```typescript
osim ako(ime.jePrazno()){
    ispis("Hello, " + ime + "!");
}
inače {
    ispis("Ime je prazno");
}
```

is valid, but:

```typescript
osim ako(ime.jePrazno()){
    ispis("Hello, " + ime + "!");
}
ili ako(ime.duzina < 3){
    ispis("Ime je prekratko")
}
inače {
    ispis("Ime je prazno");
}
```

<code style="color: red">
Parsing error: Unexpected token 'ili' at 4:1
</code>

is not.