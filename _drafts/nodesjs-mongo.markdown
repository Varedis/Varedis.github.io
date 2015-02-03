---
layout: post
title: Learn Node.js in 30 minutes or less - Part 2
date: 
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

In this tutorial we will be looking at integrating MongoDB into our application. And getting our Node.js code to insert and retrieve data from it.

# Introduction

Welcome to Part 2 of our **Learn Node.js in 30 minutes or less** series. In this 30 minute section we will look at integrating another piece of the **MEAN** stack into our application.

In Part 1 of this tutorial we already got two pieces of the **MEAN** stack working together (**E**xpress and **N**ode), today we will be focusing on **M**ongoDB.

**MongoDB** is an open source and highly scalable document based database. It stores the data in documents that are JSON formatted, so makes it perfect for working with javascript. It is also, blazingly fast.

We will be creating a database to store our user information and then creating routes in our Node.js application to insert and retrieve that data.

# Source Code

We will be working from where we left off in [Part 1](http://developmentr.com/nodejs/2015/01/30/learn-nodejs.html), so you can use the code you already have, or you can grab a fresh copy from [here](LINK_HERE){:target="_blank"}.

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

# Getting MongoDB into your application




[mongolab-link]:        https://mongolab.com
