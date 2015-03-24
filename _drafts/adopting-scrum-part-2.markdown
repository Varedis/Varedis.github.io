---
layout: post
title:  "Adopting Scrum and Agile methodologies - Part 2"
date:   2015-03-17 17:27:00
categories: agile
tags: [
    {
        name: "Agile",
        class: "agile"
    },
    {
        name: "Scrum",
        class: "scrum"
    }
]
difficulty: Beginner/Intermediate
author: Rob Scott
image: /images/tutorials/scrum/sprint-hero.jpg
---

![Example Scrum Board](/images/tutorials/scrum/sprint-hero.jpg)

# Summary

In this tutorial, we will continue to look at how we can improve our software workflow and adopt a structured agile approach. We will cover key topics in the Scrum methodology and how you can make it work for you and your team.

# Introduction

In [Part 1](http://developmentr.com/agile/2015/02/22/adopting-scrum.html) we covered the basics of introducing the Scrum concept, creating the right team structure and creating a Product Backlog.
 
In this tutorial we will be covering the Sprints, and the process around them. The topics we will be covering are as follows: 
 
* Sprint Planning
* Scrum Board
* Daily Routine
* Daily Scrum stand up
* Sprint Reviews and Retrospectives

We have a lot of ground to cover, so lets get started.

# Sprint Planning

Once we have our **Product Backlog** established and the **User Stories** have been estimated, the team can then go ahead and start planning the first Sprint.

The process will be pretty simple but it can be time consuming.

The Team will take a User Story that they plan to work on and break it down into a series of development tasks, for example the following **User Story**:

    **3 Story Points** - As a **User**, I can **Invite a User to the system**, so that **I can have friends using the site**. 

Will be broken down into the following tasks:

* Create Invitation Form
* Save the Invitation
* Create an Email Template for an Invitation
* Write send email logic
* Create Test scripts
* Execute Test scripts

Each of these tasks are then given a time estimate for how long they will actually take in terms of hours. So your **User Stories** have **Story Points** against them, each **User Story** has a number of **sub-tasks** against it, each that have a number of hours assigned.

After adding time estimates, our list of **sub-tasks** may look something like this:

* Create Invitation Form - 2h
* Save the Invitation - 0.5h
* Create an Email Template for an Invitation - 1h
* Write send email logic - 3h
* Create Test scripts - 4h 
* Execute Test scripts - 0.5h

So we have a total of 11 hours for this **User Story**. This **User Story** had a **Story Point** value of 3, however after planning and estimating our **sub-tasks** we may decide that it was actually more work than we thought, and we should adjust our **Story Points** accordingly. This **User Story** may then grow to be worth 5 **Story Points**.
  
Over time your **Story Points** assigned from **Planning Poker** should be more accurate, however they are not always going to be correct 100% of the time. So it is important to allow yourself to adjust them over time to get an accurate reflection of the work involved. You don't want to end up with a **User Story** that has been assigned 1 **Story Point** that has 2 weeks worth of **sub-tasks** inside it. Similarly, you don't want a **User Story** with 8 **Story Points** that is only an hours worth of work.

## Adding User Stories to the Sprint

Now that you have your **Product Backlog** estimated and broken down in to **sub-tasks** you can add your **User Stories** to the **Sprint**. The amount of work you take in to the **Sprint** is going to be highly dependant on the size of your team and the length of your **Sprint**.

As an example we will take a development team size of two, a sprint length of 2 weeks, a working day of 7.5 hours and 5 working days a week.

This means at the absolute maximum we have 150 man hours to plan in for one **Sprint**. However, we don't want to plan the whole team in for 100% of their time as that is unrealistic. There may be meetings, support requests or unforeseen circumstances that make this impossible. Also having everyone working flat out for two weeks is a sure fire way to drain everyone very quickly.

It is much more realistic to plan in around 5 hours a day for doing **Sprint** related items, this way you build in a buffer for all the items mentioned above and if there aren't any interruptions then you can use the time to get ahead on the **Sprint**.

Using 5 hours a day and keeping all the other variables the same, this means we can plan in a maximum of 100 man hours. Initially you can use the hours of the **sub-tasks** as a guide, but ultimately you should be using the **Story Points** to plan your **Sprints**. This way you don't constrain your team to a set number of hours, but rather use the scope of the tasks to plan your sprints. 

The reason that a say to use to **sub-tasks** as a guide to start off with, is that you will have no idea how many **Story Points** you can handle in a **Sprint**. And due to **Story Points** being relative to a development team, no one can tell you how many **Story Points** you should be using. You might be able to handle 60 **Story Points**, whilst another team can only handle 30 **Story Points**.

## Sprint Velocity

Once you have planned in your work for your **Sprint** you will have a number of **Story Points** that we will use to graph our **Sprint Velocity**. This is a record of the amount of **Story Points** we have taken in to a **Sprint** and how many we have actually completed. This will be used to inform future **Sprints** for if we should be adding or taking away workload and also identifying issues in our planning or sprint process.

![Example Sprint Velocity Chart](/images/tutorials/scrum/velocity-chart.png)

On the graph above, the grey bars represent the amount of **Story Points** that were planned, and the green bars represent the amount of **Story Points** that were completed in that **Sprint**. If you complete all your tasks in your **Sprint** then you may want to take in more tasks next time to see where the capacity of your team lies.

You want to record the velocity of the last 3-5 **Sprints**, this will then give you enough data to make decisions about the sprints, without getting bombarded by too much data, you don't want to be working on Sprint 46 and still looking back to Sprint 2 for your **velocity**.

# Scrum Board













# Conclusion 

This concludes Part 2 of the Adopting Scrum and Agile methodologies tutorial.