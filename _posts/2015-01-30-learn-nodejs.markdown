---
layout: post
title:  "Learn Node JS in 30 minutes or less - Part 1"
date:   2015-01-30 13:25:16
categories: nodejs
tags: [
    {
        name: "Node.js",
        class: "nodejs"
    },
    {
        name: "MEAN",
        class: "mean"
    },
    {
        name: "Express",
        class: "express"
    },
    {
        name: "Javascript",
        class: "javascript"
    }
]
difficulty: Beginner
author: Rob Scott
image: nodejs_logo_green.jpg
---

# Summary

In Part 1 of this tutorial series, we will be looking at getting started with Node.js and taking our first steps in developing an application.

# Introduction

> Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

That is the offical tag line of Node.js, and that's great, but what does it mean for developers and more importantly, how can we harness the power of Node.js to build faster and more scalable applications in the real world?

After this tutorial you will have some understanding what this means, and what Node.js can do for you.

Having used PHP for nearly 7 years to do all of my server side work, I was amazed to find something so simple yet powerful like Node.js. 

Writing both your server side logic and your frontend code in one language makes the development cycle flow much easier, all those times I have started writing javascript in PHP code or the other way around are a thing of the past.

For the examples used in this tutorial we are going to assume that you are using Linux/Unix. If not, you may need to convert some of the terminal commands to your OS equivalents. 

# Setup

For this tutorial we will be using the current version of Node.js at the time of writing (**v0.10.36**). 
If you don't already have Node.js installed, then head over to the [Node.js Site][nodejs-site]{:target="_blank"} and hit the install button.

To confirm the package is installed correctly you can run the following commands, both should return version numbers.

{% highlight bash %}
node -v
{% endhighlight %}

and

{% highlight bash %}
npm -v
{% endhighlight %}

We will go over each of these shortly, but for now all you need to know is that the `node` command is used to actually run the server, and `npm` is used mainly to install packages into your node.js application.

# Getting Started

We are now going to create our project. For now we will create all the required files manually. Our simple project structure will look something like this:
 
{% highlight bash %}
- learn-nodejs
    | - package.json
    | - server.js
{% endhighlight %}
 
We will add more files later but this will give us a starting point.

#### package.json

Open the package.json file and enter the following:

{% highlight json %}
{
    "name": "learn-nodejs",
    "version": "0.0.1",
    "description": "Our first Node.js app",
    "main": "server.js",
    "author": "Rob Scott",
}
{% endhighlight %}

You could also create this file by running `npm init` and following the interactive steps.

#### server.js

Inside the server.js we will place the logic we want to run when the server is started. For now we will keep this super simple.

{% highlight javascript %}
console.log('HELLO, WORLD!');
{% endhighlight %}

## Running the code

Run the code from the terminal by performing: 

{% highlight bash %}
node server.js
{% endhighlight %}

If all goes well you should see the following printed out inside your terminal window: 
{% highlight bash %}
HELLO, WORLD!
{% endhighlight %}

With that done, you have created your first node.js application.
 
# So we created a web server?

No, we can't actually use our browsers to see anything with this example, we have just created executable code. To actually create a web server we need a few more lines of code.

#### server.js

Replace the contents of `server.js` with the following, we will break it down line by line in a minute:

{% highlight javascript %}
var http = require('http');

var server = http.createServer(function(request, response) {
    response.end("Now this is a web server!!!");
});

server.listen(3000);
console.log("Visit your web page at http://localhost:3000");
{% endhighlight %}

Now back in your terminal lets run `node server.js` again and visit your [localhost][localhost-3000]{:target="_blank"}

We should now see something printed out to your web browser. Lets break the code down line by line and have a look what is happening.

* `var http = require('http');` Node.js comes with a number of built in packages that can be used in your scripts by requiring them, http is the package that handles http functionality, like web servers. More information on the in built packages can be found at [Node.js API docs][node-api-docs].
* `var server = http.createServer(function(request, response) {` We are using the `createServer` function of the `http` package to make our web server, we also provide a closure so we can interact with the `request` and `response`.
* `response.end("Now this is a web server!!!");` We are providing a response to web browser to tell it to output something, otherwise the browser would time the request out.
* `});` Ending our closure.
* `server.listen(3000);` This is where we tell Node we actually want the server to run, we register the server to port 3000 for the purposes of this demo. With this line added, you may notice that the terminal command `node server.js` stays active until cancelled, this is because your web server is running.
* `console.log("Visit your web page at http://localhost:3000");` Provide some output to the terminal to let us know what port we are running on.

# So we created a web server finally?
 
Correct, although its not going to win us any awards. Lets take a look at how we can improve our web server.

#### server.js

Back in your server.js file lets make a few modifications:

{% highlight javascript %}
var http = require('http');

var server = http.createServer(function(request, response) {
    response.write("<div>");
    response.write("<h1>Welcome to our amazing web server!</h1>");
    response.write("<p>We can even write html to the response!</p>");
    response.write("</div>");
    response.end();
});

server.listen(3000);
console.log("Vist your web page at http://localhost:3000");
{% endhighlight %}

Notice that we have just added a few more outputs to the response, to do this we need to use `response.write` as there can only be one call to `response.end`.
 
Now if you kept your web server running from the last time, and try and refresh your [localhost][localhost-3000]{:target="_blank"} you will notice that nothing has changed, to register the changes you need to cancel your web server session in the terminal and rerun `node server.js`.

Wouldn't it be great if we could check our files for changes and automatically relaunch the web server, well in the next section we will install a package that will do just that.

# Installing Packages

In the tutorial so far we haven't touched on Node's Package Manager (`npm`), that is all about to change.

[npm][npm]{:target="_blank"} currently has 122,141 publicly available packages that you can use to easily extend the functionality of your applications. The one we are concerned with at the minute is called [nodemon](https://www.npmjs.com/package/nodemon){:target="_blank"}.

We have two options when installing packages, we can either install them globally (system wide) or locally (in the project)
 
We are going to install nodemon globally as we likely want to use it on many projects, and it doesn't make sense to install it locally. To do this we are going to run the following in the terminal:

{% highlight bash %}
npm install -g nodemon
{% endhighlight %}

Once installation is complete, we can now cancel our running web server process and run `nodemon server.js` from your project folder.

You should see a few lines output in your terminal that look something like this:

{% highlight bash %}
[nodemon] v1.3.5
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
{% endhighlight %}

Now any changes we make to our files we cause the server to restart and we should be able to see any updates in the browser without having to go into the terminal.

For the remainder of this tutorial we will leave `nodemon` running.

# So what now?

Well, we have created a web server using native node.js functionality, but what if there was a better way? Enter the **MEAN** stack.

# MEAN?

You may be familiar with a **LAMP** (Linux, Apache, MySQL, PHP) stack. **MEAN** stands for:
 
* **M**ongoDB - NoSQL database
* **E**xpress - Web framework
* **A**ngular - Frontend framework
* **N**ode - Server framework

Using the above tools is currently a popular way to develop Node applications. 

For the rest of this tutorial we are going to be looking at getting [Express](https://www.npmjs.com/package/express){:target="_blank"} working in our application. And we will have two parts of the **MEAN** stack working which we will expand on in later tutorials.

# Switching to Express

We are going to need to install another package to pull express into our application:

{% highlight bash %}
npm install --save express
{% endhighlight %}

You will notice this time that we didn't use `-g` this means we have installed the package locally to this project.

We also used the `--save` flag, this stores the package name and version in the `package.json` file as a dependency. This way if anyone joins our team or when we deploy our application we can run `npm install` and all the required packages will be installed so the application functions correctly. 

Now we are going to make the necessary code modifications to make our application use the express package rather than the native http package.
 
#### server.js

Replace the contents of `server.js` with the following:

{% highlight javascript %}
var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.write("<div>");
    response.write("<h1>Welcome to our amazing web server!</h1>");
    response.write("<p>We can even write html to the response!</p>");
    response.write("<p>But this time we are running the express web framework</p>");
    response.write("</div>");
    response.end();
});

app.listen(3000);
console.log("Vist your web page at http://localhost:3000");
{% endhighlight %}

We are going to break the changes down line by line.

* `var express = require('express');` Now we have used `npm install` to install the package we can include it like any other native package.
* `var app = express();` Initialize the express framework
* `app.get('/', function(request, response) {` Similar to when we used the `createServer` function in the native example, only this time we can provide a *http method* and a *url route*

So we haven't actually had to change that much, but what have we actually gained? Well we can now handle different *http methods* (GET, POST, PUT, DELETE) and we now have a way of doing *routing*. So if someone visits http://localhost/foo/ we can display different information to them.

# One final example

To round things off we will expand our `server.js` file to include a number of routes and different http methods.
 
#### server.js

Replace the contents of `server.js` with the following:

{% highlight javascript %}
var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.write("<h1>Welcome to our amazing website</h1>");
    response.end();
});

app.get('/about', function(request, response) {
    response.write("<h1>About Us!</h1>");
    response.end();
});

app.get('/api/users', function(request, response) {
    response.json({ "message": "We could display a list of users here for an api" });
    response.end();
});

app.post('/api/user/', function(request, response) {
    response.json({ "message": "An example post request" });
    response.end();
});

app.delete('/api/user/:id', function(request, response) {
    response.json({ "message": "An example delete request for a certain user" });
    response.end();
});

app.listen(3000);
console.log("Visit your web page at http://localhost:3000");
{% endhighlight %}

The following GET routes have been added:

* [localhost:3000/][localhost-3000]{:target="_blank"}
* [localhost:3000/about](http://localhost:3000/about){:target="_blank"}
* [localhost:3000/api/users](http://localhost:3000/api/users){:target="_blank"}

To view the POST and DELETE responses you will need to use an app like [Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en-US){:target="_blank"} or write a cURL request in your terminal `curl -X POST http://localhost:3000/api/user`

# Conclusion

In this short tutorial we should have provided an introduction into the basics of creating a Node web server, package installation and working with part of the **MEAN** stack. There is much more to discover and the next tutorial will expand on the **MEAN** stack we have created so far.


[nodejs-site]:      http://nodejs.org/
[node-api-docs]:    http://nodejs.org/api/
[localhost-3000]:   http://localhost:3000/
[npm]:              https://www.npmjs.com/
