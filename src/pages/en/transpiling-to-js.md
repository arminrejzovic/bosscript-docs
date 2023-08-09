---
layout: '../../layouts/DocumentationLayout.astro'
title: Transpiling to JavaScript
translation: "/transpilacija-js"
index: 12
previous: "/en/exceptions"
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

## Standard library support

As mentioned, most Bosscript standard library packages do not support transpilation. As of Bosscript v1.0, the following
standard library functions and properties support transpilation:

<details>
<summary>
   JSON package
</summary>
<ul>
<li>objekatIzJSON</li>
<li>JSONTekst</li>
</ul>
</details>

<details>
<summary>Math package</summary>
<ul>
<li>apsolutnaVrijednost</li>
<li>pi</li>
<li>arccos</li>
<li>arcsin</li>
<li>sin</li>
<li>cos</li>
<li>tg</li>
<li>arctg</li>
<li>korijen</li>
<li>e</li>
<li>eNa</li>
<li>ln</li>
<li>log10</li>
<li>log2</li>
<li>max</li>
<li>min</li>
<li>zaokruzi</li>
<li>kubniKorijen</li>
<li>beskonacno</li>
<li>minusBeskonacno</li>
</ul>
</details>

<details>
<summary>Globals</summary>
<ul>
<li>ispis</li>
<li>upozorenje</li>
<li>greska</li>
<li>unos</li>
<li>postoji</li>
<li>brojOd</li>
<li>logickiOd</li>
<li>nizOd</li>
</ul>
</details>

<details>
<summary>Niz methods</summary>
<ul>
<li>duzina</li>
<li>dodaj</li>
<li>dodajNaPocetak</li>
<li>spoji</li>
<li>poravnaj</li>
<li>izbaci</li>
<li>izbaciPrvi</li>
<li>sortiraj</li>
<li>sortirajSa</li>
<li>isijeci</li>
<li>primijeni</li>
<li>zaSvaki</li>
</ul>
</details>

<details>
<summary>Tekst methods</summary>
<ul>
<li>zavrsavaNa</li>
<li>podtekst</li>
<li>podtekstIndeks</li>
<li>zamijeni</li>
<li>sadrzi</li>
<li>malimSlovima</li>
<li>velikimSlovima</li>
<li>srezi</li>
<li>razdvoji</li>
<li>pocinjeNa</li>
</ul>
</details>

<details>
<summary>Broj methods</summary>
<ul>
<li>zaokruzi</li>
<li>tekst</li>
</ul>
</details>

As previously mentioned, you don't have to manually import any of these functions or members. They are automatically loaded
and known by the transpiler.

## Embedded JavaScript code

You can embed JavaScript code directly in your Bosscript file using backticks. The transpiler will simply leave any JavaScript
snippet as-is. Below is a simple example:

```bosscript
za svako(x od 1 do 10){
    `console.log(Math.random())`;
}

`const x = await fetch("https://bosscript.org/api/docs")`;
```

You can even combine both languages in one expression. For example:

```bosscript
konst x = `callingSomeJSFunction()`;

za svako(x od `getStartFromJS()` do 10){
    ispis(`Math.exp(x)`);
}
```

