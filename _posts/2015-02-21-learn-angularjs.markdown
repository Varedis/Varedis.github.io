---
layout: post
title:  "Learn Angular JS in 30 minutes or less"
date:   2015-02-21 14:18:00
categories: angularjs
tags: [
    {
        name: "AngularJS",
        class: "angularjs"
    },
    {
        name: "MEAN",
        class: "mean"
    },
    {
        name: "Javascript",
        class: "javascript"
    }
]
difficulty: Beginner
author: Rob Scott
image: /images/tutorials/angularjs_logo.png
series: Introducing MEAN
---

# Summary

In this tutorial, we are going to take a break from Node.js for a little while and focus on AngularJS on its own. We will then join our Node application and our Angular application together in the next tutorial.
 
We will be looking at building our frontend interface from scratch and implementing Angular's two way data binding.

# Introduction

AngularJS has grown massively in popularity over the past few years. This is most likely due to its powerful feature set and the fact that it is developed by a team at Google.

There are a lot of areas to cover when learning AngularJS and it can be quite confusing when getting started with the multitude of options. We are going to focus on just a few areas in this tutorial. But will be looking at more advanced topics in the near future.

We will be creating HTML and Javascript files in this tutorial to show off some of the functionality of AngularJS

# Getting Started

We are going to create a fresh folder structure for this tutorial, we don't need our frontend to know anything about our server side code, so a fresh folder makes the most sense. Create the following folder structure:

{% highlight bash %}
- learn-angularjs
    | - app.js
    | - index.html
{% endhighlight %}

This should be enough to get us going for now, as we progress we will introduce some best practices in terms of files and our application structure.

# First Steps

First of all we are going to populate our `index.html` file with some boiler plate, that will allow us to pull in various things, like *AngularJS* and *Bootstrap*.

#### index.html

{% highlight html %}
<!doctype html>
<html lang="en" data-ng-app="app">
<head>
    <meta charset="UTF-8">
    <title>Learn AngularJS in 30 minutes or less</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
</head>
<body data-ng-controller="IndexController">

<h1>Hello, World</h1>

<p>{{ summary }}</p>

<!-- CDN INCLUDES -->
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.min.js"></script>

<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>

<!-- INCLUDES -->
<script src="app.js"></script>

</body>
</html>
{% endhighlight %}

Pretty standard html content, apart from the double braces (`{{` `}}`) and the `data-ng` attributes. We will explain these in a minute once we have written on `app.js` code.

Next we are going to set up our angular application.

#### app.js

{% highlight javascript %}
angular.module('app', [])
    .controller('IndexController', function($scope) {
        $scope.summary = "This is text generated from our javascript via AngularJS";
    });
{% endhighlight %}

##### Code breakdown

* `angular.module('app', [])` - Create a new AngularJS application which is called *app*. This is then used by the `data-ng-app` attribute in our html. For this tutorial we will stick to just having one module, but with this method you can have as many modules as you want.
* `.controller('IndexController', function($scope) {` - Create a controller where we can start adding our logic, we give it the name *IndexController*. This is then used by the `data-ng-controller` attribute in our html. A module can contain as many controllers as you wish. We are also using dependency injection to inject the AngularJS *$scope* variable.
* `$scope.summary = "This is text generated from our javascript via AngularJS";` - Here we are using the AngularJS *$scope* to pass our new variable `summary` from the javascript to our html. AngularJS will then update this value in place of the double braces we inserted in our html.

# Review

So we have created a really simple application to start with, but we have already covered some really important AngularJS points. In the next section we will expand on our data binding implementation and look at two way data binding.

##### What are data-ng-* attributes?

These are in built Angular JS directives, essentially they extend the functionality of html, it is important to note that you do not need the `data-` part of the attribute. Both `ng-controller` and `data-ng-controller` will work exactly the same. However, appending it with `data-` will keep the html valid if it is ran through any validators.

# Next Steps

To show off Angular's two way data binding, we are going to create a text input which when updated by the user, instantly updates the variable stored in javascript. If you have worked with something like jQuery before, then you know this can be a painful implementation, but with AngularJS it is made easy, as you will see below.

#### index.html

Alter the contents of your `index.html` file to the following:

{% highlight html %}
<!doctype html>
<html lang="en" data-ng-app="app">
<head>
    <meta charset="UTF-8">
    <title>Learn AngularJS in 30 minutes or less</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
</head>
<body data-ng-controller="IndexController">

<h1>Hello, World</h1>

<input id="name" type="text" data-ng-model="name" placeholder="Enter your Name" />

{{ name }}

<!-- CDN INCLUDES -->
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.min.js"></script>

<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>

<!-- INCLUDES -->
<script src="app.js"></script>

</body>
</html>
{% endhighlight %}

We don't even need to edit our Javascript for this to work. Simply refresh your browser and starting typing in the field.

As soon as you start typing you should see the `user.name` variable populating on screen. All this magic is done by the `data-ng-model="user.name"` attribute. Essentially we are binding the value of this field to a variable in our javascript and AngularJS can instantly use this variable to start updating the view.

# So what next?

Next we are going to demonstrate another powerful Angular Directive `ng-repeat`. Using this directive we can take an array from our javascript and construct html objects to represent them.

Lets get started by editing our app.js file, inside the controller section, place the following code:

#### app.js

{% highlight javascript %}
$scope.users = [
    {
        name: "John Diggle",
        age: 35,
        teams: [
            "Sales",
            "Development",
            "Administration"
        ]
    },
    {
        name: "Barry Allen",
        age: 26,
        teams: [
            "Development"
        ]
    },
    {
        name: "Oliver Queen",
        age: 29,
        teams: [
            "Sales"
        ]
    },
    {
        name: "Sara Lance",
        age: 28,
        teams: [
            "Sales",
            "Administration"
        ]
    }
]
{% endhighlight %}

All we are doing here is creating an array of objects, this sort of data will typically come from some sort of API, but for now we can hardcode it.

Now we are going to edit our `index.js` file to display this information on the screen in a formatted way.
 
#### index.js

{% highlight html %}
<!-- BODY TAG -->

<ul>
    <li data-ng-repeat="user in users">
        Name: {{ user.name }} - Age: {{ user.age }}
        <ul>
            <li data-ng-repeat="team in user.teams">{{ team }}</li>
        </ul>
    </li>
</ul>

<!-- SCRIPTS -->
{% endhighlight %}

##### Code breakdown

The only new element here should be `data-ng-repeat` which takes an array from our `$scope` and allows us to step through it, we can then access each objects variables by using dot notations. We can even embed ng-repeats inside ng-repeats if we wish.

# Final Steps

Wouldn't it be great if we could search our list of users and only show the ones that match our search criteria? Well with filters we can easily do that just by editing the html.

#### index.js

Add the following line to your html file above our list of users:

{% highlight html %}
<input type="text" data-ng-model="search" placeholder="Enter a name to search" />
{% endhighlight %}

Then edit our `ng-repeat` to look like the following:

{% highlight html %}
<li data-ng-repeat="user in users | filter:search">
{% endhighlight %}

And that's it, simply search for something like `Sara` or `Development` and your list of users will be filtered out accordingly.

# Conclusion 

In this short tutorial we have covered some powerful features inside AngularJS. We have covered two way data binding, directives and filters.

We also have set up a good base for linking AngularJS to our Node.js application and using REST API's to display and add users to our application.