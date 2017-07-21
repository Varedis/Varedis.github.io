---
layout: post
title:  "Understanding and getting started with TypeScript"
date:   2017-07-21 12:30:00
categories: typescript
tags: [
    {
        name: "Typescript",
        class: "typescript"
    },
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
image: /images/tutorials/typescript/typescript-hero.jpg
---

![TypeScript logo](/images/tutorials/typescript/typescript-hero.jpg)

# Summary

Getting started writing TypeScript couldn't be easier, in fact you can even use the exact code you are writing today without any changes.

# Introduction

TypeScript is a superset of JavaScript but as the name suggests it adds in the concept of typings. This all then compiles down to standard JavaScript so it can be run in any browser.

In standard JavaScript variables don't have predefined types, the following examples are all valid assignments of the same variable:

{% highlight javascript %}
let myVariable;

myVariable = 'test';

myVariable = 5;

myVariable = true;

myVariable = null;

myVariable = {};

myVariable = [];
{% endhighlight %}

Whilst this is really flexible, it doesn't make for easy to read or easy to maintain code. Unless your variable names are really descriptive then it generally isn't clear to someone just glancing at the code what a variable can contain.

What is the type returned from the below function?

{% highlight javascript %}
const myFunction = (var1, order) => {
    return var1 + order;
}
{% endhighlight %}

Your answer may be that you have no idea because you don't know what type of variables are being passed in and you would be exactly right. The type of the return depends on the params being passed in. If we passed `var1` as a string then the return value would also be a string. If we passed `var1` as a number then the return value would be a number. If only there was some way we could be explicit about this and display errors before code compilation if we are passing in an invalid type.

# Installing TypeScript

Simply install typescript as one of the dependencies of your project:

{% highlight bash %}
npm install --save typescript
{% endhighlight %}

# Compiling TypeScript

Once TypeScript is installed compiling your code is simple and easy. We need to perform two steps

## Step 1

In the root of your project create a file called `tsconfig.json` and insert the following information

{% highlight json %}
{
    "compilerOptions": {
        "target": "es5",
        "skipLibCheck": true,
        "module": "commonJS",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false,
        "baseUrl": ".",
    },
    "exclude": [
        "node_modules",
    ]
}
{% endhighlight %}

This provides basic information to TypeScript about how we want to compile our project, such as what flavour of JavaScript we want to compile down to.

## Step 2

In your terminal run the following command:

{% highlight bash %}
tsc
{% endhighlight %}

This stands for **T** ype **S** cript **C** ompile and will compile your code to standard JavaScript.

You can also run the command in watch mode to watch for changed files and recompile automatically:

{% highlight bash %}
tsc -w
{% endhighlight %}

# Converting JavaScript to TypeScript

By using TypeScript we can tell the code and the user exactly what types we expect variables, params and functions to contain. The following example shows the conversion of standard JavaScript code to TypeScript.

**JavaScript (ES6)**

{% highlight javascript %}
import * as _ from 'lodash';

const generateUrl = (path, params) => {
    let output = path;

    if (params.length) {
    output += '?';
    }

    _.forEach(params, param => output += `${ param.name }=${ param.value }`);

    return output;
}
{% endhighlight %}

**TypeScript with simple typing**

{% highlight ts %}
import * as _ from 'lodash';

const generateUrl = (path: string, params: [any]): string => {
    let output = path;

    if (params.length) {
    output += '?';
    }

    _.forEach(params, param => output += `${ param.name }=${ param.value }`);

    return output;
}
{% endhighlight %}

You may notice that all the differences between the two code samples are contained on line 3.

The complier now knows that `path` is of type `string`, that `params` is an array of things, and that the function returns a `string`. We would now get errors if we tried to call `const value: number = generateUrl(1, 'test');` as none of the types are correct. We now get immediate feedback that we are using the function correctly and we don't have to do lots of debugging to find out how to use it.

However, we still don't know what properties `params` contains due to the use of the `any` type. There are valid uses of the `any` type as you may not be able to properly type a variable (e.g. it is polymorphic, or comes from some outside source in different formats). Where possible we should always strongly type our code though, in the above example we can use an interface to describe what properties `params` contains and also what types those propeties are.

**TypeScript with complex typing**

{% highlight ts %}
import * as _ from 'lodash';

interface Param {
    name: string,
    value: string,
    order: number,
    include: boolean,
};

const generateUrl = (path: string, params: [Param]): string => {
    let output = path;

    if (params.length) {
    output += '?';
    }

    _.forEach(params, param => output += `${ param.name }=${ param.value }`);

    return output;
}
{% endhighlight %}

You can now see that the inclusion of the `Param` interface has given use information not just about the things we were already accessing (`name` and `value`) but about the types of things we didn't even know existed (`order` and `include`). Now when another developer comes to this file and wants to make a change to our `forEach` they know exactly what properties are available on `param`.

Assuming you IDE supports TypeScript, you should now be able to see what properties `params` contains and also what type those properties are.

![Atom autocomplete with interface](/images/tutorials/typescript/params.png)

# Defining your own typings

You may have your own custom objects or functions you may want to use within TypeScript. In order to do this you need to provide your own set of typings for them. Say you had the following code using a custom global:

{% highlight javascript %}
MyGlobal.assetPath = '/public/assets/';

const version = MyGlobal.applicationVersion;

const logo = MyGlobal.logo;
{% endhighlight %}

By default TypeScript doesn't know anything about this global so won't even compile, but we have a nice easy way to tell TypeScript that this global exist and here is what properties it contains. Simply create a file in your project root called `typings.d.ts` and then populate it with the following content:

{% highlight ts %}
declare const MyGlobal: {
    applicationVersion: number,
    assetPath: string,
    logo: string,
};
{% endhighlight %}

Typescript will now pick up this file and include the typings in the compilation process.

# Using packages with TypeScript

As with defining you own typings, TypeScript now expects to know information about packages such as what functions are available and the values they return. Luckily there is a really simple way to get typings for most popular packages.

All typing packages are now hosted on [npmjs](https://www.npmjs.com/search?q=scope:types&page=1&ranking=optimal) and you can install them the same way you would install any other npm package.

{% highlight bash %}
npm install --save @types/lodash
{% endhighlight %}

TypeScript will then pick up these files out of the `node_modules` folder automatically and take them in to account when compiling the code.

This does mean however that if your favorite package gets updated with new functions that you want to use that you need to update your **@types** package too.

# Conclusion

We have now covered the basics of TypeScript. Get out there and start writing your code.
