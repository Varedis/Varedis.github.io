---
layout: post
title: Learn Node.js in 30 minutes or less - Part 2
date: 2015-02-04 22:12:00 -08:00
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
        name: "Javascript",
        class: "javascript"
    },
    {
        name: "MongoDB",
        class: "mongodb"
    }
]
difficulty: Beginner
author: Rob Scott
image: /images/tutorials/nodejs_logo_green.jpg
series: Introducing MEAN
---

# Summary

In this tutorial we will be looking at integrating MongoDB into our application. And getting our Node.js code to insert and retrieve data from it.

# Introduction

Welcome to Part 2 of our **Learn Node.js in 30 minutes or less** series. In this 30 minute section we will look at integrating another piece of the **MEAN** stack into our application.

In Part 1 of this tutorial we already got two pieces of the **MEAN** stack working together (**E**xpress and **N**ode), today we will be focusing on **M**ongoDB.

**MongoDB** is an open source and highly scalable document based database. It stores the data in documents that are JSON formatted, so makes it perfect for working with javascript. It is also, blazingly fast.

We will be creating a database to store our user information and then creating routes in our Node.js application to insert and retrieve that data.

# Source Code

We will be working from where we left off in [Part 1](http://developmentr.com/nodejs/2015/01/30/learn-nodejs.html), so you can use the code you already have, or you can grab a fresh copy from [github](https://github.com/Varedis/Learn-nodejs-in-30-minutes){:target="_blank"}.

# Getting Started

First of all we need to set up a MongoDB database, one of the easiet ways to do this is to use an online service, two such services are:

* [Mongolab][mongolab-link]{:target="_blank"}
* [Modulus](https://modulus.io/){:target="_blank"}

For this tutorial we will be creating a database on [Mongolab][mongolab-link]{:target="_blank"} as they offer a free plan, which we can use to test against. You could also install MongoDB locally, and this is recommended, but beyond the scope of this part of the tutorial.

# Setting up our database on Mongolab

1. First of all we need to Sign Up for an account if you don't already have one:
[Mongolab Signup](https://mongolab.com/signup/){:target="_blank"}
2. Once you have verified your account you will be able to create a new MongoDB deployment. Click the **Create New** button.
3. You can choose any cloud provider you wish, they all offer the Sandbox (free) plan.
4. For the Plan, you want to pick *Single Node* and then the *Sandbox* plan.
5. Give your database a name, for the purposes of the tutorial I have chosen *learn-nodejs*.
6. Click *Create new MongoDB deployment*.

Your database will take a moment to set up, and you should be taken back to your home screen, the only other thing you need to do is create a user for your database so you can access the information. **WARNING: The database is publically accessable so you likely want to pick a strong username and password combo, if you are actually using it for production data**

To create a user you need to do the following:

1. Enter your newly created database by clicking on it from your home menu.
2. Go to the *Users* tab and click *Add database user*.
3. Enter the *username* and *password* you wish to use with your application, for the purpose of this tutorial you want to leave *Make read-only* as unticked.
4. Click *Create*.

If you can see your user in the list, then you are ready to use MongoDB in your application.

You should now have a link visible that looks a little something like this:

{% highlight javascript %}
mongodb://myUser:myPassword@ds039441.mongolab.com:39441/learn-nodejs
{% endhighlight %}

This will be the link we use in our application to connect to the database.

# Getting MongoDB into your application

The first thing we need to do is install a new package to enable us to connect to the MongoDB database. To do that, run the following line from your terminal:

{% highlight bash %}
npm install --save mongoose
{% endhighlight %}

Mongoose makes it nice and easy for interacting with our MongoDB database. To connect to your database, we are going to replace the contents of the server.js file with the following:

#### server.js

{% highlight javascript %}
var express = require('express'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://myUser:myPassword@ds039441.mongolab.com:39441/learn-nodejs');
var db = mongoose.connection;

var app = express();

app.get('/', function(request, response) {
    console.log(db);
    response.end();
});

app.listen(3000);
console.log("Visit your web page at http://localhost:3000");
{% endhighlight %}

Ensure you change the credentials being passed to mongolab with the ones you set up. Once that is done, we now have the `db` object that we can interact with to start storing things in the database.

# Creating data in MongoDB

You will notice that as of yet we have not created a table (MongoDB calls these *collections*) for our data to be inserted in to, with MongoDB we don't need to, our collections will be created automatically when we insert the first piece of data into it.

To keep our project clean we don't want to put the code for managing the User collection inside the *server.js* file, otherwise we will just end up cluttering the file and making it unmanageable. Luckily we can take advantage of modules, and that is exactly what we are going to do.

Create a new folder in the root of your project called **models**. Then inside this folder we are going to create a file called **user.js**. When we want a new collection, we will just create a new file with the same name.

Your folder structure should now look something like this:

{% highlight bash %}
- learn-nodejs
    | - models
        | - user.js
    | - node_modules
    | - package.json
    | - server.js
{% endhighlight %}

We are going to change the following files to enable adding data to our MongoDB

#### models/user.js

Add the following code to the `user.js` file:

{% highlight javascript %}
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    first_name: String,
    last_name: String,
    created_at: Date,
    updated_at: Date
});

userSchema.pre('save', function(next) {
    var user = this;

    if(!user.created_at) {
        user.created_at = new Date();
    }
    user.updated_at = new Date();

    next();
});

module.exports = mongoose.model('User', userSchema);
{% endhighlight %}

##### Code Breakdown

1. `var mongoose = require('mongoose');` - To access the mongoose functions in this module we need to require it.
2. `var userSchema = mongoose.Schema({ ... });` - Here we are creating the schema for the collection, basically we are telling the collection what fields we want to include and the data types.
3. `userSchema.pre('save', function(next) { ... };` - We can hook into functions to run blocks of code before the code is run by mongoose, here we are altering some date fields before saving the data.
4. `var User = module.exports = mongoose.model('User', userSchema);` - Lastly we are exporting access to the model so we can access it outside of this file.

#### index.js

Add the following lines to the `index.js` file:

Under your current requires add the following new lines

{% highlight javascript %}
// MODELS
var User = require('./models/user');
{% endhighlight %}

Change your express route to look like the following:

{% highlight javascript %}
app.get('/', function(request, response) {
    var user = new User();
    user.email = 'test1@hotmail.com';
    user.username = 'test1';
    user.password = 'password';
    user.first_name = 'test';
    user.last_name = 'user';
    user.save();

    response.end("User Created");
});
{% endhighlight %}

# Checking our work

After running `nodemon server.js` or `node server.js` and accessing [localhost][localhost-3000]{:target="_blank"}, you should see the message *User Created*. If you check your collection in Mongolab, then you will be able to see that all the information has been inserted correctly.

Now lets look at how to get that user back out of our collection so we can use it in our code.

# Fetching data from a Collection

Now that we have a user model (`models/user.js`) we can easily expand it with custom functions for getting information back out of the database.

Edit the `models/user.js` file with the following code:

#### models/user.js

{% highlight javascript %}
var User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
};

module.exports.getUserByEmail = function(email, callback) {
    var query = {
        email: email
    };
    User.findOne(query, callback);
};
{% endhighlight %}

Now we can add a new route in our application to fetch out a specific user by its id:

#### server.js

{% highlight javascript %}
app.get('/api/user/:id', function(request, response) {
    User.getUserById(request.params.id, function(err, doc) {
        if(err) {
            console.error(err);
            return;
        }

        response.json(doc);
    });
});
{% endhighlight %}

Before we make the request we need to get the id of the object from Mongolab, explore your collection and find the value assigned to **_id**. The value will look something like this: **54d22c6b8cf8a7201459d90f**

Then in your browser visit *http://localhost:3000/api/user/* with your id on the end and you should see a json string that details the object that was added.

# Conclusion

In this short session, we have covered a lot of ground, we have explored MongoDB, created methods for adding a retrieving data and structured our project a little bit more.

In the next part of this series we will be looking at the last part of the **MEAN** stack. **Angular JS**.

Source code for what we have created in this tutorial can be found here: [github](https://github.com/Varedis/Learn-nodejs-in-30-minutes/tree/part-2){:target="_blank"}


[mongolab-link]:        https://mongolab.com
[localhost-3000]:       http://localhost:3000
