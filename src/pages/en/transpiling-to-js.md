---
layout: '../../layouts/DocumentationLayout.astro'
title: Transpiling to JavaScript
translation: "/transpilacija-js"
---

# Transpiling to JavaScript

Bosscript can be used for Web development, through transpiling to JavaScript. To do so, use the command 
`bosscript file.boss destination.js`, where `file.boss` gets transpiled to `destination.js`. There are some differences
that you need to be aware of when targeting JavaScript:
1. Most Bosscript libraries don't support transpilation. Those that do don't need to be imported manually. They are
automatically loaded
2. No type checking is done. You will only get syntax errors
3. You can embed JavaScript code using backticks
4. You can import JavaScript modules using the standard `paket` syntax


## Libraries supporting transpilation

As mentioned, most Bosscript standard library packages do not support transpilation. As of Bosscript v1.0, the following 
standard library functions and properties support transpilation:
1. JSON package:
   * objekatIzJSON
   * JSONTekst
2. Math package:
   * apsolutnaVrijednost
   *  pi
   *  arccos
   *  arcsin
   *  sin
   *  cos
   *  tg
   *  arctg
   *  korijen
   *  e
   *  eNa
   *  ln
   *  log10
   *  log2
   *  max
   *  min
   *  zaokruzi
   *  kubniKorijen
   *  beskonacno
   *  minusBeskonacno
3. Globals:
   * ispis
   * upozorenje
   * greska
   * unos
   * postoji
   * brojOd
   * logickiOd
   * nizOd
4. Niz methods:
   * duzina
   *  dodaj
   *  dodajNaPocetak
   *  spoji
   *  poravnaj
   *  izbaci
   *  izbaciPrvi
   *  sortiraj
   *  sortirajSa
   *  isijeci
   *  primijeni
   *  zaSvaki
5. Tekst methods:
   * zavrsavaNa
   *  podtekst
   *  podtekstIndeks
   *  zamijeni
   *  sadrzi
   *  malimSlovima
   *  velikimSlovima
   *  srezi
   *  razdvoji
   *  pocinjeNa 
6. Broj methods: 
   * zaokruzi
   * tekst

As previously mentioned, you don't have to manually import any of these functions or members. They are automatically loaded
and known by the transpiler.

## Embedded JavaScript code

You can embed JavaScript code directly in your Bosscript file using backticks. The transpiler will simply leave any JavaScript
snippet as-is. Below is a simple example:

```typescript
za svako(x od 1 do 10){
    `console.log(Math.random())`;
}

`const x = await fetch("https://bosscript.org/api/docs")`;
```

You can even combine both languages in one expression. For example:

```typescript
konst x = `callingSomeJSFunction()`;

za svako(x od `getStartFromJS()` do 10){
    ispis(`Math.exp(x)`);
}
```

