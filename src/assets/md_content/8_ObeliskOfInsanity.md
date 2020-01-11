# Obelisk of Insanity
### A short horror game made with Unreal Engine 4.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vuo2ENuqJ7w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Jordan Hunnicutt's development diary, where you can see the game in motion._

## Introduction

Obelisk of Insanity was a short prototype made in a week for a game development course at Purdue University. For this project, we were given a theme ("Don't look back"), and told to design around this theme. The idea that we came up with was a game in which enemies would spawn outside of the player's vision, and follow them around the level. As we were short on time and inexperienced with Unreal's AI capabilities, we decided that enemies would be invincible, and take the form of objects that the player couldn't look at. The thematic similarity with this mechanic and cosmic horror led us to create a cosmic horror-themed game. In this project, I handled the bulk of the level design, graphics, and player mechanics. The assets used in this project were from Epic Games' Infinity Blade, which are free on the Unreal Engine store.

## Design

<iframe width="560" height="315" src="https://www.youtube.com/embed/oXBs0PX0iU0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
_My dev diary, where I go into detail about the gameplay programming and level design._

I decided to create a linear level for this project. The first difficulty I encountered was to figure out how to make the level seem less like a single, long corridor, so I placed boulders and objects around to create a simple maze, using cursed objects as dead ends. I also used verticality to my advantage, allowing me to consider composition and environmental storytelling. I wanted to suggest that the curse objects had a purpose, so as the player progresses through the level, more and more mannequins appear until the player first sees the obelisk - the amount of debris also increases around the obelisk, and is intended to suggest that there was a failed attempt to contain its power. As such, the level had to work on several levels; to teach the player the game's mechanics, to tell the overarching story of the game, and to present this information in a natural, considered form, using the level's composition.

<iframe width="560" height="315" src="https://www.youtube.com/embed/09r1B9cVEQY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_For this project, I wanted to practice the techniques found in Naughty Dog level designer David Shaver and NYU professor Robert Yang's talk on composition and lighting._

## Development

In this project, I experimented with a bevy of visual effects to create an oppressive mood, such as volumetric fog, light shafts, camera post processing effects, and materials. The volumetric fog was especially important from both a visual and gameplay perspective, as the obstacles in the second half of the level are all light-based. The camera effect for looking at an object took the most time to perfect - I tied the strength of the effect to the user's parameters, and increased the effect based on the player's remaining health.

## Insights
This project marked my first major foray in considering level design from aesthetic and story perspectives, in addition to exploration and gameplay. I very much enjoyed looking at environmental storytelling and visual composition, as it was congruent to my previous hobbyist work in film and editing.
