---
layout: post
title:  "Understanding the differences between ES5 and ES6"
date:   2015-12-31 16:42:00
categories: javascript
tags: [
    {
        name: "Javascript",
        class: "javascript"
    },
    {
        name: "ES6",
        class: "es6"
    }
]
difficulty: All levels
author: Rob Scott
image: /images/tutorials/es6/es6-hero.jpg
---

![ECMAScript 2105 logo](/images/tutorials/es6/es6-hero.jpg)

# Summary

In this tutorial, we will be looking at the differences between ES5 and ES6/ECMAScript 2015 and what they mean to the code you are writing today.

# Introduction

ECMAScript 2015 (also known as ES6, which I will use to refer to it throughout this tutorial) is the new standard for Javascript, this means that eventually all current browsers should have support for the new syntax and functionality.

Using ES6 your code will work almost exactly the same in most cases, however writing it will be easier and also makes your code cleaner.

You can see the compatibility of browsers here: [ECMAScript 2015 compatibility table](https://kangax.github.io/compat-table/es6/).

We will be looking at how to get ES6 working in unsupported browsers below.

# Transpilation

Currently there are no browsers that support all the ES6 features, however we have a way to convert the ES6 code we write to the ES5 code that you are writing already. The method for doing this is called Transpiling.

There are currently two major compilers out there today, [Babel](https://babeljs.io/) and [Traceur](https://github.com/google/traceur-compiler). Most modern projects that are written in ES6 will use one of these compilers to convert the ES6 code to ES5 as part of the build process.

The transpilation is performed as one of the first actions on the javascript file, so that future actions, such as minification or source map generation can still be performed.

That means that when you write something like this in your javascript:

{% highlight javascript %}
const myFunction = (a, b) => a + b;
{% endhighlight %}

It will actually be converted to the following code so that the browser can understand it:

{% highlight javascript %}
var myFunction = function(a, b) {
    return a + b;
};
{% endhighlight %}

All you really need to know is that if you are planning to write ES6 code today, then you will need to transpile it, otherwise your code will break when a feature is not supported in a browser.

For setting up transpilation with your project, please see the Babel or Traceur docs above.

In the following sections we will cover the new syntax and features of ES6.

# Const and Let keywords

Previously in ES5 you could only define varaibles using the var keyword, however in ES6 there are now two new ways to define varaibles and they all work slightly differently.

## What is wrong with using var?

When using var keywords to define variables, what you write in your code is not always hows the code will be interpreted by the complier. Whilst all the variable keywords are susceptible to hoisting [Variable Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html). There are some inconsistencies to the way **var** works in block scopes.

{% highlight javascript %}
console.log(newVar);     // Logs undefined
{
  var newVar = "Hello";

  console.log(newVar);    // Logs "Hello"
}
{% endhighlight %}

What is actually happening here is that the newVar declaration is getting hoisted out of the block scope to the top of the file:

{% highlight javascript %}
var newVar = undefined;
console.log(newVar);     // Logs undefined
{
  newVar = "Hello";

  console.log(newVar);    // Logs "Hello"
}
{% endhighlight %}

Trying to run the same example using **const** or **let** will produce a ReferenceError

{% highlight javascript %}
console.log(newVar);     // throws "ReferenceError: newVar is not defined
{
  let newVar = "Hello";

  console.log(newVar);
}
{% endhighlight %}

This is because we are trying to access newVar outside of its intended scope and we probably want to be informed of that.

## Using const and let

So can you just replace all your vars with const and/or let? Ideally yes, but in practice you will probably break your application due to the differences in hoisting. First we need to cover why we have two new keywords and not just one.

**const**

Variables that are defined using const as the name suggests are constants and cannot be redefined. Trying to redefine a const will result in a warning and the variable will not change.

{% highlight javascript %}
const myVariable = "Hello";
myVariable += " World!";

console.log(myVariable);    // Logs "Hello"
{% endhighlight %}

It is important to note that const is only protecting its reference from changing. You can still mutate an object that is stored as a const for example:

{% highlight javascript %}
const myObject = {
    key: 1,
    name: "Rob Scott"
};
myObject.country = "UK";

console.log(myObject);    // Logs { id: 1, name: "Rob Scott", country: "UK"}
{% endhighlight %}

You couldn't assign myObject to be a completely different object however.

You should try to use const for everything that is not going to change, such as required modules, function definitions and variables that don't get overwritten.

**let**

Variables that are defined using the let keyword work similarly to how variables defined using var work now. You can change the value of the variable, however the variables respects it scope.

{% highlight javascript %}
let myVariable = "Hello";
myVariable += " World!";

console.log(myVariable);    // Logs "Hello World!"
{% endhighlight %}

**When to use const, let and var**

You should try and use **const** for everything, if you need to change the value of a variable then use **let** failing both of those types then fall back to using **var**.

# Modules

In ES6 it is now possible to import and export modules.

## Overview

You may have seen something like this before if you have have used **Node.js** or imported packages from **npm**.

{% highlight javascript %}
var React = require('react');

var thisModule = ... // Whatever this module does

module.exports = thisModule
{% endhighlight %}

Now with ES6 we can write the following equivalent code:

{% highlight javascript %}
import React from 'react';

var thisModule = ... // Whatever this module does

export default thisModule
{% endhighlight %}

The transpilation process will actually convert the above code to the require syntax anyway, so what is the benefit to writing imports this way? Well we do get one nice feature which is named imports.

## Named Imports

You may have seen code like this before:

{% highlight javascript %}
var Route = require('react-router').Route;

// Or

var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
{% endhighlight %}

Here we are only using a certain part of the module we are importing, however the whole module is still getting required into our code, we are just assigned a certain part of it to a variable name. With named imports, we can avoid this, it also gives us a nice syntax if we are using multiple parts of a module.

{% highlight javascript %}
import { Route } from 'react-router';

// Or

import { Route, IndexRoute } from 'react-router';

// Use Route down here to do something
{% endhighlight %}

Notice that the import syntax doesn't look that different from what we did in the in the first ES6 import example, however we have included curly braces, these allow us to specify specific parts of the module (called members) that we want to use. This will create a variable with the same name as the member we imported, however we can also specify an alias if we want the variable to be called something else.

{% highlight javascript %}
import { Route as routeMember } from 'react-router';

// Use routeMember down here to do something
{% endhighlight %}

In the above example, we will then have a variable called routeMember that gives us access to the Route module.

## Export

There are two different types of export, named exports and default exports.

**Named exports**

You can export as many named exports as you want, you can then choose to import each one of these separately when importing the module. Exporting and using named modules would look something like this:

{% highlight javascript %}
export function myFunction(a, b) {
    return a + b;
};
const myVariable = 5 + 10;
export { myVariable };

// In another file somewhere

import { myFunction, myVariable } from './myModule';

myFunction(1, 4);     // Returns 5
myVariable;         // Returns 15
{% endhighlight %}

When importing the members, it is important to refer to them using the same name that was exported. Using named exports you can easily split your module in to easily usable parts.

**Default exports**

Unlike named exports, you can only have one default export per module and is considered the main exported value of the module.

{% highlight javascript %}
export default function myFunction(a, b) {
    return a + b;
};

// In another file somewhere

import myModuleWithAFunction from './myModule';

myModuleWithAFunction(1, 4);     // Returns 5
{% endhighlight %}

Notice that the name with the import does not need to match to what was exported here because we are not using a named import.

That concludes importing and exporting. If you are currently using require and module.exports then there aren't many benefits to switching to using the new ES6 syntax beyond it being part of the javascript specification.

# Arrow functions

Arrow functions are one of my favorite ES6 features and I try to use them wherever possible. The premise is simple, remove the need to write the function keyword all the time with a simple two character arrow. But it comes with so many helpful shortcuts it could almost be a tutorial all of its own.

A simple function written in ES5 would look something like this:

{% highlight javascript %}
var myFunction = function(a, b) {
    return a + b;
};
{% endhighlight %}

We now have a number of different things we can with the function to replace it with an arrow function, you will likely use a mix of these different syntax whilst working, depending on the scenario.

{% highlight javascript %}
// The simplest replacement, remove the function keyword and add the arrow '=>' after the params
var myFunction = (a, b) => {
    return a + b;
};

// Because the function is so simple we could even write it as a one liner. Notice the lack of braces and the return statement. The return is implicit.
var myFunction = (a, b) => a + b;

// What if our function only had one param? Well then the brackets around the params are optional, the following are both valid.
var myFunction = name => "Hello " + name;
// Or
var myFunction = (name) => "Hello " + name;

// What if our function didn't have any params? We need to add empty brackets before the arrow.
var myFunction = () => "Hello World!";
{% endhighlight %}

Above, we have shown a number of different ways that you can write arrow functions. They are great to use in anonymous functions as they make you code look a lot cleaner. Consider the following example:

{% highlight javascript %}
// Written in ES5
var array = [1, 2, 3];

var newArray = array.map(function (num) {
    return num + 1;
});

// Written in ES6
var array = [1, 2, 3];

var newArray = array.map(num => num + 1);
{% endhighlight %}

By writing it in ES6 we have not only cut the number of lines down, but our code is more expressive.

However, What if we wanted to return an object from a one line arrow function? Well then we have to use a slightly different syntax due to the curly braces of an object causing confusion between a multi line arrow function and an object.

{% highlight javascript %}
// We can't do this, are we returning an object literal or a multi line function? Javascript will assume you are trying to return a multi line function here.
var myFunction = () => { key: 1, name: 'Tiger' }

// To get around this you need to wrap the object in brackets. This will work and return an object literal.
var myFunction = () => ({ key: 1, name: 'Tiger' })
{% endhighlight %}

## Using this inside an arrow function

Back in ES5, if we wanted to use the `this` keyword inside of a function we used to have to store it as a variable, to then use later on. You may have written code that looks like this before:

{% highlight javascript %}
var obj = {
    multiplier: 2,
    calculate() {
        var that = this;
        return [1,2,3].map(function(num) {
            // this no longer refers to the obj definition
            return num *= that.multiplier;
        });
    }
};

console.log(obj.calculate());        // Outputs [2, 4, 6]
{% endhighlight %}

With the new arrow functions, `this` refers to the parent scope, so the following code would work as expected:

{% highlight javascript %}
var obj = {
    multiplier: 2,
    calculate() {
        return [1,2,3].map(num => num *= this.multiplier);
    }
};

console.log(obj.calculate());        // Outputs [2, 4, 6]
{% endhighlight %}

# Object Literals Enhancements

There have been a number of changes to how you can specify data inside an object. These are great little timesavers.

If you have a variable that is named the same as the key you want to create in an object, then you now need to only specify the variable name in the object.

{% highlight javascript %}
// Written in ES5
var myFunction = function(name) {
    var myObject = {
        id: 1,
        name: name
    }
    return myObject;
};

// Written in ES6 (long hand function for comparison purposes)
var myFunction = function(name) {
    var myObject = {
        id: 1,
        name
    }
    return myObject;
};
{% endhighlight %}

Also if you are specifying functions on objects, that has now got a lot easier.

{% highlight javascript %}
// Written in ES5
module.exports = {
    myFunction: function(name) {
        return "Hello " + name;
    }
};

// Written in ES6 (long hand function for comparison purposes)
module.exports = {
    myFunction(name) {
        return "Hello " + name;
    }
};
{% endhighlight %}

Notice that you no longer need to specify a key, or write the function keyword.

The last thing you can do now, is include dynamic keys inside an object declaration:

{% highlight javascript %}
// Written in ES5
var myKey = "name";        // This would be a dynamic key name
var myObject = {
    key: 1
};
myObject[myKey] = "Rob Scott";

// Written in ES6
var myKey = "name";        // This would be a dynamic key name
var myObject = {
    key: 1
    [myKey]: "Rob Scott"
};
{% endhighlight %}

# String templating

We now have the ability to use variables in strings without performing concatenation. This not only makes your string look a lot cleaner when written in code, it also removes the amount of changes needed to the surrounding elements if the variable needs to be moved.

{% highlight javascript %}
// Written in ES5
var myString = "Hi " + name + ", thanks for registering on " + applicationName;

// Written in ES6
var myString = `Hi ${name}, thanks for registering on ${applicationName}`;
{% endhighlight %}

Note the use of backticks (`) surrounding the string rather than quotations. variables are also wrapped in braces and have a dollar symbol at the beginning. These will then be replaced at run time with the correct values.

# Destructuring Assignment

Previously when writing ES5 code, if you wanted to store one or more variables from an object, you would probably need at least two lines of code, destructing in ES6 makes this a lot cleaner.

{% highlight javascript %}
// Written in ES5
function myObject() {
    return {
        name: "Rob Scott",
        country: "UK"
    };
}

var object = myObject();
var name = object.name;
var country = object.country;

// Written in ES6
function myObject() {
    return {
        name: "Rob Scott",
        country: "UK"
    };
}

var { name, country } = myObject();
{% endhighlight %}

I now have two variables called **name** and **country** that will hold the values of that object.

If I wanted the variables named differently then I can specify an alias:

{% highlight javascript %}
function myObject() {
    return {
        name: "Rob Scott",
        country: "UK"
    };
}

var { name: myName, country: myCountry } = myObject();
{% endhighlight %}

So I am still looking up the **name** and **country** keys, but storing them under the **myName** and **myCountry** variables respectively.

# Generators

Generators are functions that can be called, exited and then re-entered at a later time. Calling a generator does not immediatly execute the function, but rather returns an iterator that you can them call `.next()` on to step through the function.

A simple example of a generator would be:

{% highlight javascript %}
function* myGenerator(){
    var counter = 0;
    while(counter < 3) {
        yield counter++;
    }
}

var generator = myGenerator();

console.log(generator.next().value); // Outputs: 0
console.log(generator.next().value); // Outputs: 1
console.log(generator.next().value); // Outputs: 2
console.log(generator.next().value); // Outputs: undefined because the while loop has completed and we don't yield any value.
{% endhighlight %}

Note the asterisk (*) next to the function declartation, this denotes that the function is a generator.

Whilst we are using a while loop inside the generator function that would normally complete instantly as soon as the function is called, because we are calling yield inside the generator we stop execution of that function until next time we call `.next()`

Note that the last call to `.next()` returns undefined for the value. The return for `.next()` returns an object, there is also a key of `done` on the object that is normally false until the last execution at which point it becomes true. Using this key you can know that the generator has completed all its yield statements.

You can also yield other generators, however it is slightly beyond the scope of this tutorial.

# Classes

Prior to ES6 if you wanted something like a class in javascript you would probably use the prototypes of a function. This would enable you to do something like this:

{% highlight javascript %}
function myClass() {
    console.log('constructor');
}

myClass.prototype.doSomething = function() {
    return 'Something';
}

// Somewhere else
var useClass = new myClass();
useClass.doSomething();            // Returns "Something"
{% endhighlight %}

ES6 brings with a new way to define classes, which not only makes it easier to work with classes, but also a lot less typing. The same class definition in ES6 would look something like this:

{% highlight javascript %}
class myClass {
    constructor() {
        console.log('constructor');
    }
    doSomething() {
        return 'Something';
    }
}

// Somewhere else
var useClass = new myClass();
useClass.doSomething();            // Returns "Something"
{% endhighlight %}

As you can see, the usage is exactly the same, however our class definition is now much more concise and clear.

You can also extend classes by using the **extends** keyword, this enables you to have a common base for shared classes, but allow the child classes to overwrite functions or add new ones entirely.

{% highlight javascript %}
class Dinosaur {
    constructor(name) {
        this.name = name;
        this.height = 0;
        console.log(this.name);
    }
    getHeight() {
        return this.height;
    }
}

class TRex extends Dinosaur {
    constructor(name) {
        // Call the parents constructor, the super keyword refers to the extended class.
        super(name);
        this.height = 6;
    }
    getHeight() {
        // Overwrite the getHeight return
        return `${this.name} was ${this.height} meters in height`;
    }
}

var parentClass = new Dinosaur("Bruce");
console.log(parentClass.getHeight());        // Outputs 0

var trexClass = new TRex("Bruno");
console.log(trexClass.getHeight());            // Outputs "Bruno was 6 meters in height"
{% endhighlight %}

# Promises

Promises are now standard as of ES6 however, they have been around for a while with the help of various libraries. We are going to cover Promises in a separate tutorial as they are too big to be covered here.

# Conclusion

This tutorial covers the main features of ES6, as you can see there are a number of improvements and changes that are going to drastically change how you write code.

I hope you found this intro to ES6 helpful, look out for more tutorials shortly, where we will be using ES6 in practice.
