---
layout: '../../layouts/DocumentationLayout.astro'
title: Telnet
translation: "/en/stdlib/telnet"
---

# Telnet

<pre>
<span class="keyword">paket</span> <span class="string">"telnet"</span><span class="keyword">;</span>
</pre>

The `telnet` package allows you to create a telnet client.

## TelnetClient constructor

Use the TelnetClient constructor to instantiate a `TelnetKlijent` object, that you will use for all telnet
communication.

<pre>
ƒ TelnetKlijent() : <span class="keyword">objekat</span>
</pre>

- takes: no parameters
- returns: `TelnetKlijent` object
- special cases: none


<pre>
<span class="keyword">var</span> klijent = TelnetKlijent()<span class="keyword">;</span>
</pre>

## TelnetKlijent

The `TelnetKlijent` object has the following properties:
1. uspostaviKonekciju
2. zatvoriKonekciju
3. izlazniTok
4. ulazniTok


### uspostaviKonekciju

The `uspostaviKonekciju` function is used to establish a connection with a Telnet server.

<pre>
ƒ uspostaviKonekciju(hostname: <span class="keyword">tekst</span><span class="keyword">,</span> port: <span class="keyword">broj</span>) : void (nedefinisano)
</pre>

- takes:
  * hostname - hostname of the server you're connecting to. Use "localhost" if connecting to a local server. (`tekst`)
  * port - port number (`broj`)
- returns: nothing
- special cases:
  * Throws exception if connection could not be established

<pre>
<span class="keyword">var</span> klijent = TelnetKlijent()<span class="keyword">;</span>

<span class="keyword">probaj</span> {
    klijent.<span class="yellow">uspostaviKonekciju</span>(<span class="string">"localhost"</span><span class="keyword">,</span> <span class="number">23</span>)<span class="keyword">;</span>
}
<span class="keyword">spasi</span> {
    ispis(<span class="string">"Could not connect!"</span>)<span class="keyword">;</span>
}
</pre>

### zatvoriKonekciju

The `zatvoriKonekciju` function is used to end an established connection with a Telnet server.

<pre>
ƒ zatvoriKonekciju() : void (nedefinisano)
</pre>

- takes: no parameters
- returns: nothing
- special cases:
  * Throws exception if connection could not be closed

<pre>
klijent.<span class="yellow">zatvoriKonekciju</span>()<span class="keyword">;</span>
</pre>

### izlazniTok

The `izlazniTok` function returns the output stream of a Telnet client.

<pre>
ƒ izlazniTok() : <span class="keyword">objekat</span>
</pre>

- takes: no parameters
- returns: output stream object `objekat`
- special cases:
  * Throws exception if output stream cannot be provided (no connection has been established or other problems)

<pre>
<span class="keyword">var</span> izlaz = klijent.<span class="yellow">izlazniTok</span>()<span class="keyword">;</span>
</pre>

### ulazniTok

The `ulazniTok` function returns the input stream of a Telnet client.

<pre>
ƒ ulazniTok() : <span class="keyword">objekat</span>
</pre>

- takes: no parameters
- returns: input stream object `objekat`
- special cases:
  * Throws exception if output stream cannot be provided (no connection has been established or other problems)

<pre>
<span class="keyword">var</span> ulaz = klijent.<span class="yellow">ulazniTok</span>()<span class="keyword">;</span>
</pre>

## Output Stream object

The output stream object, in simple terms, collects output bytes and sends them to some sink. In the context of Telnet,
you will use it for sending messages towards the server.

### posaljiBajt
The `posaljiBajt` function sends a single byte down the output stream.

<pre>
ƒ posaljiBajt(b: <span class="keyword">broj</span>) : void (nedefinisano)
</pre>

- takes: b: byte in number form (`broj`)
- returns: nothing
- special cases:
  * Throws exception if operation fails

<pre>
izlaz.<span class="yellow">posaljiBajt</span>(<span class="number">5</span>)<span class="keyword">;</span>
</pre>

### posalji

The `posalji` function sends a byte array down the output stream.

<pre>
ƒ posalji(bytes: <span class="keyword">BajtNiz</span>) : void (nedefinisano)
</pre>

- takes: bytes: byte array to send (`BajtNiz`)
- returns: nothing
- special cases:
  * Throws exception if operation fails

<pre>
izlaz.<span class="yellow">posalji</span>(<span class="string">"Hello World"</span>.<span class="yellow">bajti</span>())<span class="keyword">;</span>
</pre>

### isprazni

The `isprazni` function flushes the output stream.

<pre>
ƒ isprazni() : void (nedefinisano)
</pre>

- takes: no parameters
- returns: nothing
- special cases:
  * Throws exception if operation fails

<pre>
izlaz.<span class="yellow">posalji</span>(<span class="string">"Hello"</span>.<span class="yellow">bajti</span>())<span class="keyword">;</span>
izlaz.<span class="yellow">posalji</span>(<span class="string">"World"</span>.<span class="yellow">bajti</span>())<span class="keyword">;</span>

izlaz.<span class="yellow">isprazni</span>()<span class="keyword">;</span>
</pre>

Note that you will need to flush the output stream to actually send its contents.

### zatvori

The `zatvori` function closes the output stream.

<pre>
ƒ zatvori() : void (nedefinisano)
</pre>

- takes: no parameters
- returns: nothing
- special cases:
  * Throws exception if operation fails

<pre>
izlaz.<span class="yellow">zatvori</span>()<span class="keyword">;</span>
</pre>

### pisac

The `pisac` function returns the buffered writer object for this output stream.

<pre>
ƒ pisac() : <span class="keyword">objekat</span>
</pre>

- takes: no parameters
- returns: buffered writer object (`objekat`)
- special cases:
  * Throws exception if operation fails

<pre>
<span class="keyword">var</span> writer = izlaz.<span class="yellow">pisac</span>()<span class="keyword">;</span>
</pre>

## Input Stream Object

An Input Stream object is the opposite of an Output Stream object. It collects incoming bytes. In the context of Telnet,
you will use it to read messages you get from the server.

### zatvoriTok

The `zatvoriTok` function closes the input stream.

<pre>
ƒ zatvoriTok() : void (nedefinisano)
</pre>

- takes: no parameters
- returns: nothing
- special cases:
  * Throws exception if operation fails

<pre>
izlaz.<span class="yellow">zatvoriTok</span>()<span class="keyword">;</span>
</pre>


### ucitaj

The `ucitaj` function reads a given number of bytes from the input stream.

<pre>
ƒ ucitaj(n: <span class="keyword">broj</span>) : <span class="keyword">BajtNiz</span>
</pre>

- takes:
  * n - number of bytes to read
- returns: array of read bytes (`BajtNiz`)
- special cases:
  * Throws exception if operation fails

<pre>
<span class="comment">// Reads <span class="number">1024</span> bytes</span>
<span class="keyword">var</span> odgovor = ulaz.<span class="yellow">ucitaj</span>(<span class="number">1024</span>)<span class="keyword">;</span>
ispis(odgovor.<span class="yellow">dekodiraj</span>())<span class="keyword">;</span>
</pre>

### ucitajPreostaleBajte

The `ucitajPreostaleBajte` function reads all remaining bytes from the input stream.

<pre>
ƒ ucitajPreostaleBajte() : <span class="keyword">BajtNiz</span>
</pre>

- takes: no parameters
- returns: array of read bytes (`BajtNiz`)
- special cases:
  * Throws exception if operation fails

<pre>
<span class="keyword">var</span> odgovor = ulaz.<span class="yellow">ucitajPreostaleBajte</span>(<span class="number">1024</span>)<span class="keyword">;</span>
ispis(odgovor.<span class="yellow">dekodiraj</span>())<span class="keyword">;</span>
</pre>

### dostupnihBajtova

The `dostupnihBajtova` function returns an estimated number of bytes that can be read (or skipped over) from this input stream
without blocking.

<pre>
ƒ dostupnihBajtova() : <span class="keyword">broj</span>
</pre>

- takes: no parameters
- returns: number of bytes that can be read (`broj`)
- special cases:
  * Throws exception if operation fails

<pre>
<span class="keyword">var</span> available = ulaz.<span class="yellow">dostupnihBajtova</span>()<span class="keyword">;</span>
</pre>

### preskoci

The `preskoci` function skips over and discards a specified number of bytes of data from the input stream. It returns the
number of bytes actually skiped, since sometimes the number can be lower than the one specified in the arguments.

<pre>
ƒ preskoci(n: <span class="keyword">broj</span>) : <span class="keyword">broj</span>
</pre>

- takes:
  * n - number of bytes to skip
- returns: actual number of skipped bytes (`broj`)
- special cases:
  * Throws exception if operation fails

<pre>
<span class="keyword">var</span> actuallySkipped = ulaz.<span class="yellow">preskoci</span>(<span class="number">8</span>)<span class="keyword">;</span>
</pre>

### citac

The `citac` function returns the buffered reader object for this input stream.

<pre>
ƒ citac() : <span class="keyword">objekat</span>
</pre>

- takes: no parameters
- returns: buffered reader object (`objekat`)
- special cases:
  * Throws exception if operation fails

<pre>
<span class="keyword">var</span> reader = klijent.<span class="purple">ulazniTok</span>.<span class="yellow">citac</span>()<span class="keyword">;</span>
</pre>