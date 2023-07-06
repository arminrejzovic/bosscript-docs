---
layout: '../../layouts/DocumentationLayout.astro'
title: Http
translation: "/en/stdlib/http"
---

# Http

<pre>
<span class="keyword">paket</span> <span class="string">"http"</span><span class="keyword">;</span>
</pre>

The `http` package is used to make http requests. You will need this package to communicate with
an external API.

### zahtjev

The `zahtjev` function is used to make all kinds of http requests.

- takes:
  * url - destination url for the request (`tekst`)
  * method - request method, HTTP verb, defaulted to `GET` if not provided
  * headers - request headers (`objekat` where all values are `tekst`), optional
  * body - request body (`tekst`), optional
- returns: response (`objekat`)
- special cases:
  * throws exception if url is invalid
  * throws exception if method is not a valid HTTP verb
  * throws exception if one of the headers is invalid (key or value)

#### The response object

Properties:
- status - response status (`broj`)
- headeri - response headers (`objekat`)
- tijelo - response body (`tekst`)

#### Example usage

Note that you will need functions from the [JSON](/3.%20JSON.md) package.

<pre>
<span class="keyword">var</span> odgovor = zahtjev(<span class="string">"https://catfact.ninja/fact")<span class="keyword">;</span></span>

<span class="keyword">ako</span>(odgovor.status == <span class="number">200</span>){
    <span class="keyword">var</span> msg = odgovor.tijelo<span class="keyword">;</span>
    <span class="keyword">var</span> obj = objekatIzJSON(msg)<span class="keyword">;</span>
    ispis(obj.fact)<span class="keyword">;</span>
}
</pre>

<pre>
Output:

In just seven years, a single pair of cats and their offspring could produce a staggering total of <span class="number">420</span>,<span class="number">000</span> kittens.
</pre>

The exact shape of the response body will vary from API to API. In this case, the _catfact_ API provides an object with
the property `fact`. Your API will probably behave differently.

Below is an example of how you might send a POST request:

<pre>
<span class="keyword">var</span> headers = {}<span class="keyword">;</span>
headers[<span class="string">"Content-Type"</span>] = <span class="string">"application/json"</span><span class="keyword">;</span>

<span class="keyword">var</span> odgovor = zahtjev(<span class="string">"https://httpbin.org/post"<span class="keyword">,</span> <span class="string">"POST"</span><span class="keyword">,</span> headers<span class="keyword">,</span> JSONTekst({name: <span class="string">"Bosscript"</span><span class="keyword">,</span> extension: <span class="string">"boss"</span>}))<span class="keyword">;</span></span>

<span class="keyword">ako</span>(odgovor.status == <span class="number">200</span>){
    <span class="keyword">var</span> msg = odgovor.tijelo<span class="keyword">;</span>
    <span class="keyword">var</span> obj = objekatIzJSON(msg)<span class="keyword">;</span>
    ispis(obj)<span class="keyword">;</span>
}
</pre>

<pre>
Output:

{name: <span class="string">"Bosscript"</span><span class="keyword">,</span> extension: <span class="string">"boss"</span>}
</pre>

In this case, we are sending a POST request to a simple echo server. Note that you need to set headers with the bracket
syntax, because they contain hyphens.

<pre>
<span class="keyword">var</span> headers = {
    Content-Type: <span class="string">"application/json"</span>
}
</pre>

<code style="color: red;">
Error: Unexpected token '-' @2:12
</code>