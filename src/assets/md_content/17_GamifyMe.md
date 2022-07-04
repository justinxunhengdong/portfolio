# GamifyMe
### A motivation app using Figma and Material Design

[GamifyMe PDF](./assets/img/md/gamifyme/GamifyMe.pdf)

<iframe width="560" height="315" src="https://www.youtube.com/embed/abMmeb0_ckA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_A quick demo of the GamifyMe interactive prototype_

### Introduction
I started this project after the prototyping the Netflix Chapter Select feature to further delve into UI design. I had previously only used Adobe XD for UX/UI prototyping, but I found it quite limiting and tedious, so I was looking for a simple project that I could prototype using Figma, which is more widely used within the industry.

My goals for this project were to:
* Improve UI design skills, and create a working interactive prototype.
* Learn Figma and compare its efficiency with Adobe XD.
* Improve understanding of common mobile components using the Material Design library.
* Produce a design within a short timeframe, keeping in mind scope, priority, and testing.

I decided to build an app around gamification - it's a topic that I've found interesting in the past, and I personally often gamify parts of my life to stay motivated and productive. The app was built as if I were its sole user, so I built it around the types of goals I want to achieve, the rewards I want to give myself, and my working habits - for instance, as someone who finds themself trapped in analysis paralysis frequently, I wanted to design the app to give the user motivation to get moving, rather than to encourage any specific task. The app's philosophy is that "everything you do is productive", so I avoided many of the features that are found in other motivation apps, such as avatars or task categories.

### Design
I started out by brainstorming and prototyping on graph paper. Paper prototyping is often a step that I neglect in design for both games and UX, as I find that it bears little resemblance to the final product - with this I wanted to make sure I was using paper prototyping to suit my own needs. The paper prototyping stage for this project ended up being useful to test out initial UI ideas, and challenge initial assumptions.


![Initial paper designs](./assets/img/md/gamifyme/paper-designs.jpg)  
_Initial paper designs included a range of calendars and timelines, before I settled on using a list to display information._

I also keep a document of ideas and design decisions, which helped develop the initial direction of the application. This document fleshed out many details surrounding the app's philosophies, and defining and locking down features.


![Research](./assets/img/md/gamifyme/research.png)  
_I used Instagram and Facebook as a base to understand the layout, wording and design of applications._

The landing page went through the most amount of iterations - it initially started as a collapsible, time-organised list. I chose a list to display tasks as it would display several tasks but, as it can be sorted, it can still provid the user with direction. I also explored an unsorted list from my paper prototypes, which allows for sorting tasks by completion frequency, allowing for more free-form suggestions, and leaning further into the app's "everything you do is productive" philosophy.


![New Goal/Reward](./assets/img/md/gamifyme/goal-reward.png)  
_I initially used a FAB to add new goals and rewards, but decided on a more platform agnostic approach inspired by Instagram._

I also prototyped a progression widget, which could further be used to incentivise the use of the app. Using my knowledge of mobile game monetisation design, I prototyped the UI for a monthly progression bar, as well as bonus rewards for reaching milestones, daily logins and gifts, as is common in free-to-play mobile games. I didn't want to spend too much time designing metaprogression, as it wasn't the focus of the app, but I wanted to incorporate an element of extrinsic motivation into its design.


![Progression bars](./assets/img/md/gamifyme/landing-page-widget.png)  
_I prototyped a variety of progression bars, ranging from radial bars to classic progression meters._

The add goal/reward page was surprisingly difficult to design. I explored this as both a modal, as well as full-screen overlay. While the amount of information to add a goal or reward is small enough to keep within a modal, I decided to go with the overlay, as it is used commonly enough on applications such as Facebook and Instagram - the overlay also allows for more flexibility and is less cramped overall. 


![Add Goal](./assets/img/md/gamifyme/goal-prototyping.png)  
_"New Goal" prototypes. I experimented with using modals before switching to an overlay._


![Add Reward prototypes](./assets/img/md/gamifyme/reward-prototyping.png)  
_"New Reward" prototypes. I tried this as both a modal and overlay as well._

Certain details, such as the frequency and suggested coin rewards were glossed over in order to reduce scope - I built the application to test basic functionality, after all - all I needed to test was the flow of adding new goals and rewards, as well as the readability of the interface.

One consideration that was baked into the design of the app was the application's economy, which is completely user defined by design. I wanted rewards to be tangible and useful, so I allowed the user to define their own rewards. I took this system from a mobile app called LifeUp, where users spend the coins they earn on buying themselves luxuries. In practice, it means that users may have wildly different earn rates, so the app would suggest coin rewards based on the estimated time to complete a task, as well as have the option to auto-balance rewards - for example to increase the cost of a reward if it's used too often, or decrease a coin reward if it's completed too often. This is also why I decided on the unsorted list for the landing page - completing a task too frequently would reduce its priority, sending it further towards teh bottom of the list, as well as reducing its coin reward. The choice would ultimately be left up to the user to toggle auto-balancing for each goal and reward, but wouldn't be policed too heavily to adhere to the "everything you do is productive" philosophy.

### Development
I had only touched upon design systems briefly while working at the ATO, so I used this project as an opportunity to refamiliarise myself with common components. I used Google's Material Design as a basis, as one of the more influential and widely used design systems. I also switched to Figma, which has a more robust and flexible implementation of component libraries when compared to Adobe XD, and has an official Material Design component library.

I also evaluated Figma as an alternative prototyping tool to Adobe XD - I found the use of nested frames to be more flexible than artboards in XD, and despite the steeper initial learning curve, I found that I much prefer it to my XD workflow.

My UI design process often involves making multiple variants of each page to test out ambiguities and uncertainties, and I usually challenge myself to make at least two or three variations of each major page - both to challenge assumptions and to discover new opportunities.

![Design process](./assets/img/md/gamifyme/app.png)  
_While I only had to deliver around three screens, I prototyped many options. This approach prevents me from getting attached to a single solution, allows me to compare alternate or previous iterations, and pushes me towards new ones. This is an approach I've built up over the past year through both game development and UX workflows._

I limited the scope in terms of pages and features early to avoid running into complications during the prototyping stage, as I did with Netflix Chapter Select. Figma's use of overlays minimised redundancies with my prototypes, allowing for a much cleaner file, easier iterations, and more modular pages. Previous interactive prototypes that I had built in Adobe XD were much like linear powerpoints - this has always been a limiting factor in testing, as linearity makes it difficult to judge error handling, and non-linearity is difficult and tedious to implement.


![Second prototype](./assets/img/md/gamifyme/prototyping-overlays.png)  
_My initial interactive prototype was more of a linear slideshow, but this was difficult to iterate upon._

![Initial prototype](./assets/img/md/gamifyme/prototyping.png)  
_I found out about Figma's overlay feature, which freed up time to focus on animations and other minor details._

I ultimately built most of the prototype out around testing - I knew that my early test plans would be extremely limited, so I avoided building out too much functionality or detail if it wasn't needed - in an actual production process, many of the details and additional features would be determined in later sprints after initial insights were made.

### Insights

I found learning Figma to be relatively simple, although there was an adjustment period as I had to learn how to adjust components and build interactive prototypes. I think that the overlay system allows for more modular and less redundant designs, which keeps files readable and manageable. As with Netflix Chapter Select, I use a test-driven methodology to determine what I should build and prototype - I believe that it helps to acknowledge and highlight ambiguities early, while maintaining good project velocity.   

My prototyping process over time has changed, particularly since working at Halfbrick - while earlier projects (Better Habits Battle Royale and Rickety Spaceship Simulator especially) had lengthy prototyping and design periods, I have gradually adjusted, optimised and shortened this period to allow for quick, dirty prototypes, immediate testing, and an embracement of ambiguity - this allows for faster iteration times and ultimately, a better design process. This project took up around 20-30 hours of development, including a day for research and brainstorming, a few days of UI prototyping, and one day of interactive prototyping.
