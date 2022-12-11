# Open World Western
### Open Worlds, challenge, and agency

<iframe width="560" height="315" src="https://www.youtube.com/embed/J4hREdh65Lg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

_Gameplay of a section from At the Edge of the West._

## Introduction

![Town](./assets/img/md/eotw-open-world/town.png)  
_A large combat encounter in At the Edge of the West, centered around a shop, church and saloon._

I built this level as part of a course in level design for CGMA, also allowing myself to expand upon the direction and theming of one of my first games, a tabletop RPG called _At the Edge of the West_.

My goals for this project were to:
* Develop my understanding of open world design.
* Use the open world structure to build compelling encounters.

## Design
I used many of the insights from my previous attempts at making open world games to drive the direction of this one. A year had passed since my previous attempt, and within that time, I believe that I gained enough skill and knowledge as a level designer to attempt it again. The open-world philosophy for this game was as follows:

#### "_Open-world is about rewarding discovery with unique rewards or experiences. Rewards should be mostly unpredictable, but relative to the effort exerted by the player._"  

![Open World](./assets/img/md/eotw-open-world/mesa-transition.png)  
_There are various large and small landmarks that signpost both content and reward, which can range from rare ammo to new weapons._

I essentially wanted to create an open world map that would naturally guide the player to tangible rewards, yet be surprising and fulfilling. I also considered many of the lessons I had learnt about structuring challenges from my Assassin's Creed project, as well as multiple concepts I had learnt and practiced throughout the CGMA course - such as building cities, layouts and traversal. I also looked at similar games, in particular _Elden Ring_ and _Skyrim_, to understand how challenges and level layouts were placed.


![Challenge Structure](./assets/img/md/eotw-open-world/district.png)  
_The opening to the game primarily pushes the player towards a single direction, although opportunities to approach obstacles and explore widen as the player moves along the path._

<iframe width="560" height="315" src="https://www.youtube.com/embed/kSAvzeopPC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

_I studied the map topography and pacing of Ghost of Tsushima's E3 trailer to build the opening section._

While open worlds are often billed as non-linear, this is not to say they don't have structure - for me, the appeal of non-linearity within an open world comes from the ability to break this structure, allowing for freedom of approach and failure. As such, the open world area I built has an intended path that is encouraged by rewards (new and more powerful weapons), but also allows the player to forego it entirely, to run from encounters, and to follow their own natural curiosity - I took a page from Elden Ring and placed minor difficulty spikes within the early levels to underline this point. The translation of this concept to gameplay manifested itself in building far less strict barriers between encounters and areas - for instance, encounters easily bleed into each other, which can result in exciting emergent moments. 


![Encounter Design](./assets/img/md/eotw-open-world/combat-0.png)  
_The design of combat encounters was heavily dictated by the rules and limitations of the base project I was using._

Combat was also a big factor in the design of the map. Luckily, I had a great base to work off of, which was an enhanced version of the popular Advanced Locomotion System for Unreal Engine. Due to the lethality of AI and lack of responsiveness of the player, I built slower-paced combat encounters and designed the level's progression and rewards around picking up new weapons and ammo, as well as scrounging weapons from enemies. The limited inventory and ammo systems of the game added desperation to the combat encounters, and had an effect of making the game easier to balance, as there are a finite amount of ammo and weapons in each area. 


![Encounter Design](./assets/img/md/eotw-open-world/combat-2.png)  
_I constantly challenged myself to build more excting and dynamic combat encounters - for instance this building provides a strong vantage point to fire upon enemies below._ 

This map was also my first experience in designing cover-based combat spaces - I was able to work off the feedback of the course's instructor and my own playtesting to polish and iterate those spaces. I was able to practice and learn many fundamentals of combat design, as well as use my own knowledge and experience to incorporate into these levels - mostly surrounding frustration, sightlines, architecture and segmenting challenges.

## Development

Due to the quick turnover time needed to polish and build this assignment, it was important for me to have a reliable working process. This being said, the volatility of various Unreal Engine features used to build this game made made it difficult to develop. I used a system of multiple heightmaps and level instances to build each district, allowing me to work and separate areas modularly and not relying on a single map file as was the case previously. I also built each district and area to be performant through Unreal Engine's HLODs, as well as adjusted navmesh generation to avoid putting too much strain on my computer - this eye on reducing tech debt helped alleviate the pain of the constant crashing and build errors from trying to load in multiple parts of the map at once.  

![Saving Time](./assets/img/md/eotw-open-world/mesa-transition-combat.png)  
_I made use of prebuilt meshes and relied on reusing assets to create short and simple open world combat encounters._

The short turnaround time also meant that I had to be very discerning as to what I would spend my time designing and modelling. I used Megascans and other marketplace assets for many environmental meshes, as it would be time-consuming to build detailed meshes with belivable silhouettes and scales, and also used them to ground objects like cover into the world, and to provide context. 

## Insights

Open world and non-linear maps have fascinated me to the point where I keep circling back to building them - I think that there's an appeal to creating structured challenges designed for unstructured play and the allure of organic exploration and excitement that surpasses what's possible in linear level design. This level was also a culmination of many of the techniques and foundations I had learnt in the course, which I both practiced and frequently challenged within development.