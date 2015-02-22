---
layout: post
title:  "Adopting Scrum and Agile methodologies - Part 1"
date:   2015-02-22 17:27:00
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
image: scrum-board.png
---

# Summary

In this tutorial, we will look how we can improve our software workflow and adopt a structured agile approach. We will cover key topics in the Scrum methodology and how you can make it work for you and your team.

# Introduction

Agile software development can be defined as a group of methods or practices, in which solutions adapt and evolve through collaboration between self organised and cross functional teams, it encourages the whole team to get involved in planning and evolving ideas. It also encourages high productivity and rapid response to change.

Scrum is a variation of the Agile process, which is geared towards product development and delivery, in which the team works as a unit to achieve a common goal. Key elements of a Scrum process that we will go through in this tutorial are:
 
* Scrum Roles
* Product Backlog
* Estimating
 
A key principle in Scrum is to recognise that over the life of a product, requirements can change and solutions have to adapt. Over the course of this tutorial, we are going to implement solutions and Scrum processes that help deal with this.

# What is Scrum?

Scrum can be defined as a set of processes, when implementing Scrum, it is important to realise that these rules can be adapted to the needs of the business, there is no "Holy Grail" solution that will fit every business.

However understanding the basics before you start tweaking the rules is essential. If you tweak too much you might destroy the Scrum process entirely and it won't work for your business.

# Key Terminology

There will be some words in this tutorial which may not make a whole lot of sense without any context of what they actually mean, and whilst we will be breaking them down later, I thought it might be a good idea to give a small introduction to some of them I will be using frequently.

* **Customer** - A customer can mean an internal or external customer, basically someone who wants some work doing.
* **Product Backlog** - A list of tasks or work that needs to be done in order to deliver the product.
* **Tasks** or **User Stories** - These are both variations of the same thing, these are the individual pieces of work that make up the **Product Backlog**.
* **Sprint** - A term for the work that is done in a short space of time, normally 1 - 4 weeks.

# Scrum Roles

There are 3 main roles in the Scrum process, these people are responsible for ensuring the implemented Scrum process is followed correctly and can be executed effectively. These roles are: 

* Product Owner
* Scrum Master
* Development Team

#### Product Owner

The Product Owner should be the main stakeholder of the product and be the voice of the **customer**. They should also be responsible for the overall vision of the Product.

The main job of the Product Owner is to create the **Product Backlog** by writing **Tasks** or **User Stories** and ranking and prioritizing them.
 
As the main point of contact for the **customer** the Product Owner will also be responsible for the following tasks, whether doing them directly or delegating them accordingly:

* Demonstrations to key stakeholders of the product.
* Announcing Releases.
* Organising Milestone and Product Reviews.
* Negotiating priorities and schedules.
* Ensuring the **Product Backlog** is up to date and clear.

The Product Owner does not have to be a CEO or Director, but they should be someone with the power to affect change and have authority to manage the Product.

#### Scrum Master

The Scrum Master is responsible for ensuring the the team sticks to the Scrum rules. They are also responsible for making sure any impediments or distractions are dealt with accordingly so they do not affect the **Sprint**.

They are also responsible for the following tasks:

* Working with the Product Owner to maintain the **Product Backlog**.
* Promoting self organisation within the team.
* Dealing with and Removing all impediments to the team's progress.
* Facilitating team meetings and Scrum Standups.
* Educating others on the Scrum principles.

#### Development Team

The Development Team is responsible for delivering the Product at the end of each **Sprint**. A team can be made up of any number of individuals, however it is recommended to stay below 10. The team should be cross functional and individuals should bring a range of skills.
 
The team should be self sustaining and self organising.

It is important to have the correct balance of skills on the Development Team, if there is an important skill missing from the team and the only person that can do that particular tasks is working in another team then that could affect the whole teams **Sprint**.

#### What about someone to manage the Project?

Due to the team setup, there shouldn't be any need for a Project Manager of any sort, every member of the team is equally responsible for this, Scrum should be collaborative not a dictatorship.
 
Trying to include a Project Manager may cause difficulties as they will start overriding other members responsibilities.

# Product Backlog

The Product Backlog is an ordered list of requirements. It can consist of New Features, Bug fixes, Improvements, etc. The Product Backlog items are created and ordered by the **Product Owner** based on considerations like risk, value to the business, delivery date and dependencies to name a few.

The Backlog should capture the requirements of the Product and the items should be structured in such a way to achieve that goal of delivering the Product.

Each item should also have an **Acceptance Criteria** within it, which details the criteria needed for the item to be considered done. This provides the **Development Team** some steps to work towards when actually coming up with the solution.

The Product Backlog will consist of items that are typically written in the following formats:

* User Stories.
* Tasks.

It is possible to write items in any format you wish, however the Product Backlog should be clear and unambiguous. Writing items such as `fix user names` doesn't immediately provide an idea of what the task is and may get interpreted incorrectly by the team, or time wasted in explaining what the task is about.

#### User Stories

User Stories are written in a structured format that emulates what a user wants to do and why. They typically take the following form:

* As a <role>, I want <goal/desire>, so that <benefit>

There are multiple variations of this, but this is the traditional version and the most verbose. From reading the title of a User Story structured this way it is immediately obvious what is wanted, and somewhat importantly, why. The "so that" section is optional, but I feel it enhances the User Story, and may bring up interesting discussions on how a task can be achieved differently.

Some examples of complete User Stories are:

* As a **User**, I want **to be prompted to saved before leaving the page**, so that **I don't lose any changes I have made**.
* As a **Guest**, I want **to be able to register for the site**, so that **I can become a User**.
* As a **System Administrator**, I want **to be able to block users from accessing the site**, so that **I can manage my User base**.

In these trivial examples you may not see the need for the "so that" section as it is somewhat obvious from the goal of the User Story, if you start to notice that you are breaking down your User Stories in such a way, it may become beneficial to remove this section, however I encourage you to start by including it, as it gets you actually thinking about what someone actually wants to do on the system.

#### Tasks

Tasks are written in a non structured way and may introduce ambiguity into the work that needs to be done, Tasks should list what needs to be done in a matter of fact way that is clear and understandable.

Using the examples from the User Stories section and writing them as Tasks would result in the following output:

* Enable a prompt to notify the user they should save before leaving the page.
* Allow guests to register on the site.
* Allow administrators to block users from accessing the site.

Due to the unstructured nature of the tasks, it may actually take longer to read and understand, you also have to read the whole topic for key pieces of information, rather than just scanning for the right section of the User Story.

#### What else can go in the Product Backlog

Not everything in the Product Backlog has to be a User Story, you could also have bug fixes in there which are formatted in there own way. It is often much easier to write bug fixes such as this:

* User date of birth is being calculated incorrectly on the profile page.

Rather than:

* As a User, I want my date of birth to be calculated correctly on my profile, so that I know when I was born.

Not only are we making up the why section (we shouldn't need to justify a bug fix) but we are repeating the same information and just padding it out.

#### Managing a Product Backlog

The Product Backlog is one of the most essential steps involved in the Scrum process so it is crucial to get it correct. If the tasks aren't ordered correctly, or are not clear enough, then you run the risk of derailing the Sprint entirely.

The items in the Product Backlog should be ordered by the **Product Owner** in such a way that the Product can be delivered in a timely and efficient manner. Working with the **Scrum Master** can help identify blockers or dependencies that may also need to be included in the Product Backlog.
 
When creating the Product Backlog, the **Product Owner** shouldn't be in the mindset that everything they add will get completed in the first **Sprint**. It is up to the team as a whole to decide how much of the Product Backlog can be achieved. The Backlog should always be filled with tasks and should never run empty.

This brings us on to the topic of Estimating the tasks.

# Estimating

As we said previously, the **Product Owner** doesn't estimate the tasks, and when they are creating the **Product Backlog** they have normally have little to no idea how much work they are actually adding on the team.
 
So who does estimate the tasks? Well keeping in the sprint of being self organising, the whole **Development Team** should estimate each and every item in the **Product Backlog**.

Using the title of the **User Story** or **Task** together with the **Acceptance Criteria** the team should come to a consensus on the amount of work each story is.

#### So how do you estimate each item?

**User Stories** are normally estimated in terms of **Story Points**. These are a strange concept to get your head around at first, but it will become clear why they are useful shortly.

It is important to know that a **Story Point** is not a time estimate, it is more of an estimate of the scope, effort and size of the item. Teams can use anything they wish as **Story Points** however some popular options are:

* Modified Fibonacci Sequence (0, 0.5, 1, 2, 3, 5, 8, 13, etc)
* T shirt sizes (XS, S, M, L, XL, XXL)
* Numbers (1, 2, 3, 4, 5, 6, 7, 8, etc)
* Dog breeds (Chihuahua, Jack Russel, German Shepard, Great Dane, etc)

The **Fibonacci Sequence** is the most common, however, it is important to stress to your team that the numbers do not reflect a time estimate, it becomes all too easy to see a two hour task, and give it a **Story Point** of 2. In actual fact it is probably more like a 0.5 or a 1.

There are no hard and fast rules when using **Story Points** and your teams will naturally come to their own consensus on what they mean, when starting out the estimates will likely be all over the place and over time they will be refined and more accurate.

Lets take a look at how we would go about estimating as a team.

#### Planning Poker

Planning Poker is a fun way of getting everyone involved in the planning process, it always encourages people to discuss challenges they see and to help them come to a mutual agreement on the estimation.

Planning Poker involves getting all the **Development Team** in the same room and then giving them each a specially designed deck of cards, post-it-notes or a smart phone app, that uses the method of Story Points you have chosen.

For this example we will be using the Fibonacci Sequence, so each member of the team would get 8 cards each with one of the numbers on.

The **Scrum Master** would then read out each item of the **Product Backlog** along with the **Acceptance Criteria** and each member of the **Development Team** including the **Scrum Master** would choose a card to represent the value they think the **User Story** should be.

Once each member has chosen a card, every member of the team turns their card over or holds them up. If all the numbers match then that is the value that goes against the **User Story**.

Initially the values will be all over the place, take a typical first example using 5 team members:

* Team member 1: 3
* Team member 2: 5
* Team member 3: 2
* Team member 4: 3
* Team member 5: 1

In this example, how do you come to a consensus? Only two of the team members agreed that this item should be worth 3 **Story Points**. Luckily **Planning Poker** recognises that this situation is going to happen. 

In situations like this, the team members with the highest and the lowest value are asked to explain why they scored it as such. So in this example Team member 2 would have to explain why he believes it is a difficult task, and by doing so may bring up some element that the rest of the team haven't thought about. Also team member 5 would have to explain why he believes it was an easy task and by doing so, may also bring up some interesting points about how the work can be done more easily.
 
These types of discussions not only bring up interesting points, but also share knowledge across the whole team.

Once the discussion is done then the team have to come to some agreement about the value, so after listening to Team member 5, they all may agree that it is actually quite easy and it would be scored a 1. Or they could agree that both points aren't valid and may score it somewhere in the middle ground.
 
Tasks that are scored 8 or higher, normally signifies that the task needs to be broken up into a number of smaller tasks as the task is considered too big to be attempted.

Tasks that are scored 0 are normally tasks that may already be done, or are tasks so small, that it may not be worth actually tracking at all.

It is important for the team to come to their own conclusions on what is a 1 or an 8, and they should be relative to each other. When estimating you should be asking yourself, is this task bigger than that task we have just scored, and then score it accordingly.

It is no good having 100 tasks all scored as 3, because then the 3 doesn't actually mean much unless all the tasks are exactly the same scope and size.




# Conclusion 

This concludes Part 1 of the Adopting Scrum and Agile methodologies tutorial. We have covered a lot of ground here and it is important to realise that these are just guidelines, Scrum is a set of principles, not a set of rules.

In Part 2 we will be covering:

* Sprints
* Daily Scrum Standup
* Sprint Reviews and Retrospectives