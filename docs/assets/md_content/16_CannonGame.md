# Cannon Game
### A mobile arcade game

[Itch.io page for Cannon Game](https://jdong6.itch.io/cannon-game)

<iframe width="560" height="315" src="https://www.youtube.com/embed/EwxHwvh5HsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_The most recent update for Cannon Game following demo and playtest feedback._

## Introduction
I often switch projects if I feel like one is stalling, and Cannon Game gave me the opportunity to test and develop a simple arcade game without too much of a time investment. I also felt like my portfolio projects had drifted away from gameplay design and so I used this project as an opportunity to:

* Refamiliarise myself with Unity.
* Build a project that used 3D vector maths and physics.
* Build an arcade game for mobile.
* Reapply some of the design philosophies I had learnt over the year.

Coding most of these things was outside my comfort zone, so while I used techniques that I had picked up from my previous Unity projects, I knew that the project's delivery would be slowed down by having to both code and design the game's rules.


![The game scene](./assets/img/md/cannongame/scene.png)  

## Core Gameplay


<iframe width="560" height="315" src="https://www.youtube.com/embed/zmVQ0U8G58Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Cannon Game prototype gameplay, after around a day and a half of development. This version still uses keyboard controls as opposed to touch controls._

The initial concept of the game involved shooting a cannon ball at enemies from a castle, and was intended to be more of a idle sandbox experience, rather than the arcade experience that it ends up with. While I thought of this as a hypercasual experience, there were many avenues that I was considering that would allow a stronger sense of progression.  

I programmed the cannon and physics behaviour of the cannonball, and then progressively iterated upon the effects and juice in order to make the act of shooting and destroying enemies satisfying, which involved using the particle editor, sounds, and animator, which I had little experience of. Many core features expanded from this process, such as a burn mark that would appear on a missed shot (which also acts as an indicator for lining up the next shot), an AOE blast that expands from the point of impact, and the combo system, which rewards consecutive hits. 


![The cannonball prefab](./assets/img/md/cannongame/cannonball.png)  
_The perspective of the camera posed some challenges with the cannonball - I played around with the cannonball's physical hitbox in order to prevent some frustration with flying enemies._

There were also other ideas that didn't make it into the demo, such as weapon switching and looting enemies. The weapon switching was intended to be the core motivator of the game - the player would shoot enemies siegeing the castle, collect coins from destroying enemies and combos, and then use this money to buy more elaborate cannon types, as the enemies would also increase in difficulty and complexity. However, as the game took shape, it became clear to me that the act of destroying enemies and shooting the cannon was the main draw, so I pivoted directions to try create a cohesive arcade experience.

## Enemies
While I prototyped 6-7 different enemy types, such as strafing enemies and support enemies, I only used three for the demo because the other enemies didn't feel fun enough to fight without investing more time into them, and their movements were often hard to read due to the perspective of the camera. The development of these went hand in hand with the spawner, and from testing the spawner, I found that having more than 2-3 enemy types onscreen at once could get confusing. Because of this, I limited the scope of enemy development for the demo.

The spawner was one of the biggest ambiguities in terms of complexity - having done parameter design on a few in the past, I know how difficult and complex they can be, but I also wanted something that wouldn't bloat easily. I found that having huge swarms of fast enemies on-screen at once wasn't that fun - the player would just mindlessly fire at the horde, and enemies would get lost in the multitude of explosions, and I wanted the gameplay to be more methodical. This change was one of the reasons why the main gamemode changed from survival to score-chasing, where the penalty of getting hit by an enemy doesn't end the game.


![The spawner's inspector settings](./assets/img/md/cannongame/spawner.png)  
_The spawner that exists in the demo acts on two timers, one which spawns basic enemies, and one that spawns rarer enemies. These are also gated - new enemies only get added to the pool based on the elapsed time._

## Reflection
As someone who can find it difficult to complete projects, I was proud of myself that I stepped outside my comfort zone to practice my coding and design skills for a simple game. I found programming the touch controls in particular extremely difficult - they're still a part of the game that I need to tune and tweak, and will likely be a major factor in the enjoyment of the player. I believe I spent around 5-7 days developing this project, so while I don't think it was the fastest or most productive dev cycle, I learnt a lot by persevering through the more difficult programming problems.


<iframe width="560" height="315" src="https://www.youtube.com/embed/eUOA_rHXhgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

_Cannon Game demo gameplay._

![The game scene](./assets/img/md/cannongame/cannon-game-promo.png) 

![The game scene](./assets/img/md/cannongame/cannon-game-promo-2.png) 

![The game scene](./assets/img/md/cannongame/cannon-game-promo-3.png) 
