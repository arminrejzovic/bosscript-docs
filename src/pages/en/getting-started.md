---
layout: '../../layouts/DocumentationLayout.astro'
title: Getting Started
translation: "/pocetak"
---
# Getting Started

## Download Java

Bosscript runs on the Java Virtual Machine, so Java is required to execute Bosscript code. If you
do not already have Java on your machine, you can install it from the official Java website following the links bellow:

1. Windows Offline: https://javadl.oracle.com/webapps/download/AutoDL?BundleId=248242_ce59cff5c23f4e2eaf4e778a117d4c5b
2. Windows Online: https://javadl.oracle.com/webapps/download/AutoDL?BundleId=248239_ce59cff5c23f4e2eaf4e778a117d4c5b
3. MAC OS X: https://javadl.oracle.com/webapps/download/AutoDL?BundleId=248234_ce59cff5c23f4e2eaf4e778a117d4c5b
4. Linux: https://javadl.oracle.com/webapps/download/AutoDL?BundleId=248231_ce59cff5c23f4e2eaf4e778a117d4c5b

For more information, visit the [installation site](https://www.java.com/en/download/manual.jsp).

## Download Bosscript

Bosscript is downloaded as a simple JAR file.

1. Windows 
2. MAC OS
3. Linux

Once installation is complete, to run Bosscript execute the command
`bosscript file.boss`, where `file.boss` is the Bosscript file you want to run.

If you want to use Bosscript for the web,
use `bosscript file.boss destination.js` to transpile your Bosscript code to JavaScript.

## Syntax highlighting

If you are using Visual Studio Code, you can install the Bosscript Syntax highlighting extension from the [Visual Studio
Marketplace](https://marketplace.visualstudio.com/items?itemName=fwcd.kotlin).

## Your first Bosscript program

Open your editor of choice and create an empty project. Create a Bosscript file with any name, with the ".boss" extension.
In this example we will use *main.boss*. Bosscript files don't have an entry point, i.e a main() function. Instead, the
whole contents of the file is interpreted in order. We will write a classic *Hello World* example below:

 ```typescript
 ispis("Hello, World!");
 ```

It's that simple! Just one line of code. To learn more Bosscript concepts, keep reading the documentation. Good luck!







