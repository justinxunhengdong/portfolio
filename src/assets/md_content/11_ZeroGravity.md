# Zero Gravity
### A short puzzle-platforming game in zero gravity

[Itch.io page for Zero Gravity](https://jdong6.itch.io/zero-gravity)

![A screenshot of Zero Gravity](./assets/img/md/zerog/zerog-sc1.png) 

_A screenshot of Zero Gravity, highlighting an early puzzle._  


## Introduction
Zero Gravity was my submission to the 2021 GMTK Game Jam. The theme for the jam was "Joined Together", which I took in a literal sense. The game explores both the physical and emotional tether between two astronauts as they explore their destroyed space station, in search for an escape pod. The game took much inspiration from a famous scene from the film _Gravity_. As my first game jam, this was a great test of my game development skills, particularly as I had a lack of experience in programming and designing most of the core aspects of the game. The total development time for this game totalled around 25-30 hours for a 48-hour game jam.

## Design and Development
I spent a short amount of time brainstorming various ideas around the theme. I thought that the idea of two characters being joined together by a thread would be a common idea, so I was initially hesitant to explore it. Despite this, I found the idea of a game with thematic similarities as _Gravity_ would be unique - I thought that I could differentiate my submission from other games by:  

* Focus on narrative/exploration over arcade content.
* Having most of the challenge come from controlling the player (e.g in _QWOP_ or _Snake Pass_).  

![A screenshot of Zero Gravity](./assets/img/md/zerog/zerog-sc2.png) 

_In Zero Gravity, simple tasks are made difficult through the player's unique controls._  

I first prototyped the movement for the character. The most important aspects to creating the "Gravity" movement I wanted was a balance between control and helplessness. I added a mechanic of being able to pull the tether in, which gave me an interesting gameplay hook - the player moves faster if both astronauts are closer together, but due to the added angular velocity, they spin faster. On the other hand, increasing the tether length slows down the player, but is less reactive to control. This control over the player's momentum makes simple actions (such as moving two separate characters) much more difficult, which meant that I was able to create a high amount of challenge from fairly simple elements (e.g lasers, moving platforms, doors, and physics objects). 

There were ultimately several iterations and additions made to the player character, particularly surroudning the tether object in the game. While I did experiment with removing the tether (getting the physics simulation right was potentially a huge timesink), I found that the lack of a physical, simulated tether would hurt the game on both gameplay and thematic fronts.

Another core part of the game was the dialogue system. I decided to implement this for characterisation over creating more puzzles, adding an exploration/narrative pillar to the game. I wanted the player to become attached to the astronauts, so I used a similar character dynamic to the one used in _Gravity_. In order to prevent feature creep, I made one of the astronauts silent - this creates a dynamic in which the purple astronaut uses them as a confessional, and is also intended to create a teacher-student style relationship between the purple and yellow astronauts. 

The dialogue used here uses a mix of triggers and optional objects (a similar system to a previous project, _Metahuman_), which provide insight around other implied characters, and the purple astronaut's fears. The initial plan was to cut the tether at the end of the game (allowing the purple astronaut to die in space), much like _Gravity_ - however, I lacked the time, experience and narrative buildup to make this happen. The game culminates in a larger exploration-focused section towards the end of the game, where I took inspiration from Naughty Dog's wide-linear level design. On the way to the escape pod, the player explores the ruins of the space station's living quarters, providing additional backstory to other characters alluded to throughout the game.

I found that building this game was down to a balance of priorities - I had to polish elements up to an acceptable standard, and then decide whether or not to move on or add to the existing system. I would re-evaluate many of these priorities after running short playtests, which allowed me to make continuous improvements, while ironing out various lumps in the design. 

## Insights
I was more than satisfied with this as my first game jam project. While I have been practicing shorter development cycles to improve my agile development skills, I've never worked on a project within such a small timeframe, and often surprised myself with the speed in which I solved problems and discovered insights.