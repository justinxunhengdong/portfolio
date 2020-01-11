# Kinesus
### A puzzling adventure

<iframe width="560" height="315" src="https://www.youtube.com/embed/y_wDLzVKIa4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_The trailer for Kinesus, edited by Paul Hamela._

## Introduction
Kinesus was a vertical slice created for a game development course at Purdue University. This project was a culmination of all I had learnt throughout the semester, and was implemented using Unreal Engine 4. I was in a team of two other people, and worked on the level design. The game's mechanics were based off work done in previous assignments, and used a grappling hook and a telekinesis ability. To merge these two mechanics together, I created a Zelda inspired dungeon that demonstrated the character's abilities. I used Epic's free Infinity Blade assets to create the dungeon, and certain elements, such as the interactable items, were created by a separate group member.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QVOpfYaTJ9M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_My dev diary for Kinesus' game and level design._

## Design
As we would only have a short window to demonstrate the breadth of our gameplay, I needed to create an easily understandable environment with clear goals to showcase the character's abilities. I considered a single theme to do this, which was "recontextualisation". By focusing on this theme, I aimed to demonstrate how Kinesus could use its two abilities for interesting and novel puzzles, and empower the player through the conquering of its obstacles. This can be seen in how the bomb spawner can be picked up and used to solve a puzzle, a slope can be picked up to reach a higher area, and the boulders that terrorise the player on Floor 3 can later be picked up to finish the game.

I also aimed to make the dungeon puzzles as interlocking as possible, which meant that elements from one puzzle could be used for others, and that puzzles would often span floors. This includes the main puzzle, which involves stacking a series of objects so a gap can be crossed to reach the exit, providing a clear goal and throughline for the player.

Finally, I considered designing against exploitation and failure, by creating blocking and respawn volumes, to prevent the bypassing of certain puzzles, as well as implemented features to signpost game events, such as camera switching.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oakKay9t52k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_My dev diary for Kinesus' gameplay programming._

## Development
Much like many other game development projects, I handled the programming of environmental objects, including all of the interactable objects found in the game, such as the bomb spawner, boulder spawner, elevators, switches and pickups. To speed up the development time, I made use of best practices, such as inheritance and parameterisation, so changes and objects could be placed easily in the scene. Many of the difficulties in this project came with vector maths, which was very new to me. This included things such as the inability to rotate an object, and Unreal's physics system, which often created unexpected bugs.

## Insights
While the core design of Kinesus was not as elegant as I would have liked it to be, I learnt a lot about Unreal Engine and its capabilities, and was given an environment to practice my level design skills. 
