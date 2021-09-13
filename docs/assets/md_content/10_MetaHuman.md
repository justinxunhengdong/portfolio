# MetaHuman
### A surreal horror game made in Unreal Engine 4

<iframe width="560" height="315" src="https://www.youtube.com/embed/iVzQXp0TLa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

_An uncut video of MetaHuman, played through the Unreal Editor._

## Introduction
I had an idea for a short horror game involving Epic's Metahumans, and wanted to implement and test it during a short timeframe.
This was mainly because the Metahumans have an uncanny-valley-like quality to them, which I thought could be juxtaposed well against "asset flip" games, or the atmosphere of "Vignettepunk" games. I wanted to explore the idea of Metahumans being both incredibly lifelike and computer-generated, which led me onto creating a horror game.

I wanted to practice the following concepts with this prototype:
* Storytelling with short, understandable goals within a linear level.
* Lighting and visual composition.
* Agile level design process.
* Level scripting with triggers and volumes.
* Level streaming/basic level design optimisation.

## Design
The original metahuman idea came from the Metahuman trailer, where the Metahumans were characterised as both interchangeable and unique in appearance and identity. This fascinated me, as it aligned nicely with the cosmic/surrealist horror themes I've used a lot in much of my work in and out of game development. Other inspirations for this game included directors Charlie Kaufman and Jordan Peele's filmography, _Bioshock: Infinite_, _Doki Doki Literature Club_, and _Dr. Langeskov_.

I started by mapping out specific beats I wanted to hit during the level, as well as any core themes or ideas I wanted to get across to the player. Through this, I distilled core elements from my original ideas, and thought about how or why I found them interesting. This was:
* "Gaminess" of level design fundamentals.
* Sense of insignificance.
* Uncanniness of environment, characters and story.

I then compared this against my 70-hour timeframe and judged if this was feasible, as well as how important a given feature was to the development of the game, and brainstormed various ways I could demonstrate these themes. This scope-down allowed me to define an MVP and storyboard, which I find is extrememely helpful in level design.


![Signposting on beers.](./assets/img/md/mh/mh_beers.png)

_The use of obvious signposts, such as the spotlight, ended up adding to the surreal atmosphere of the game._  

Some poor time management on the metahuman creation, and a lack of experience in sizing the blocking/greyboxing process added some time to the level design process, meaning that I couldn't exceed my MVP too much. The suburban environment took the most time to develop - the blocking of the house interior was something I took from an asset pack, since I didn't want the final product to have any blocking elements. Working around limited art and time ended up working out thematically (e.g the use of furniture to block off areas, use of big, obvious spotlights), and was a trick I picked up from _Dr Langeskov_: the world can look and feel much bigger than it is through the use of locked doors and the implication of space.


![Initial sketches for neighbourhood.](./assets/img/md/mh/paper-1.png)

_The initial sketches for the neighbourhood revolved around a cul-de-sac. This was changed to a straighter path in the final game._  


![Final neighbourhood.](./assets/img/md/mh/mh_town.png)

_The neighbourhood as it appears in the final game. There were three distinct greybox iterations of the neighbourhood in total._  

The simplicity of the neighbourhood's layout, while great for memorability, also meant that I had to make good use of space and player movement - while the map is essentially a large corridor, the player is encouraged to explore the neighbourhood through the placement of NPCs and lighting. I wanted to make this path interesting by introducing turns, landmarks and backtracking, so the player had a stronger feeling of exploration.

Pacing of events and triggers was also an interesting challenge. The original idea was built from a series of interesting setpieces I had thought up of, but I knew that overdoing this would lessen the impact of each individual event. As such, there is only one "true" horror event during the game (talking to Glinda for the second coin), and the other, more explicit horror sequence is easily missable (it only occurs if the player jumps off the edge of the world).

## Development
I knew that the most unpredictable timesink that I would face would be my own perfectionist tendencies, as well as programming. I knew that I would have to learn or build the following:
* Use various previously unused systems like level loading/streaming, triggers and volumes.
* Work around the First Person Story template. 
* Create a simple dialogue (monologue) system.
* Make the game's events work with a central controller (i.e the level blueprint) to create a sense of story progression.


![Metahuman NPC actor](./assets/img/md/mh/mh_npc.png)

_The "monologue system" was an extremely simple state machine that would switch states based on events or settings on the dialogue spoken._  

The creation of the metahuman blueprints took by far the most amount of time. I had to retarget both the Generic NPC and Starter Content animations to work with metahumans, as well as make this system work with the First Person Story template, and create a dialogue system that worked on top of this. This is where my perfectionist tendencies ate time, as I tried to learn and create an animation blueprint to blend between poses, which had too many problems working with the metahumans. In the end, I reverted back to an earlier pose snapping system I had built to keep development moving. I also had to balance streamlining development with speed, for instance with creating and setting up new NPC metahumans. Essentially, this meant I had to practice "polishing where polishing was needed".

![Metahuman NPC actor](./assets/img/md/mh/mh_datatable.png)

_Dialogue was stored within a data table, which could hold audio, text and an animation._

## Insights
This was one of the first personal projects that I gave myself a specific timeframe to finish, since many of my previous personal projects would go unfinished. I wanted to practice iterating and testing upon designs, which was ingrained in me at my time in Halfbrick. I also wanted to practice quick and dirty development, since I have the tendency to fall down a "technical rabbithole" trying to find the most robust or "correct" solution to a problem. Despite a few hiccups with the second goal, particularly around animation blueprints and the use of the First Person Story Template, I was satisfied that I was able to complete it within my timeframe. I found that building this gave me lessons and experience that I could bring onto other projects, in terms of technology, design and planning.