# A Cold Night
### An exploration of minimalist open world design

## Introduction
Open-world design has always been one of the most fascinating areas that I've wanted to explore, chiefly as a level designer, but also in other disciplines such as narrative and systems design. In fact, it was the popularisation and revolution of the open-world genre through exploration-focused games such as _Breath of the Wild_, the _Fallout_ series, and the modern _Assassin's Creed_ titles that first got me interested in level design. The development of _A Cold Night_ came a few months after the development of _Zero Gravity_ and _Metahuman_, after the early access build of Unreal Engine 5 was released. The chief creative inspiration for this game came after watching the Charlie Kaufman film _I'm Thinking of Ending Things_, where I found the idea of a surrealist open-world game with low visibility extremely interesting. In line with many of the other projects I've worked on (following a thread from various undocumented escape-the-room projects, _Obelisk of Insanity_, _Metahuman_, and _Zero Gravity_), the game intends to convey feelings of existential dread and loneliness with a healthy dose of absurdist humour. In order to limit the scope for the game, I also wanted to avoid relying on systems such as combat, dialogue choices or loot to drive gameplay, preferring to focus on a narrative-driven experience.  

![A scene from 'I'm Thinking of Ending Things'.](./assets/img/md/coldnight/thinking-of-ending-things.png)  

![The initial petrol station from A Cold Night.](./assets/img/md/coldnight/petrol-station.png) 

_The visual design from A Cold Night (bottom) was greatly inspired by I'm Thinking of Ending Things (top). Concessions for gameplay had to be made, such as the amount of darkness in the game._

My goals for this project were as follows:
* Practice using Unreal Engine 5's toolset, namely World Partition and Data Layers.
* Explore open-world design by distilling it to its most basic parts.
* Improve existing level design prototyping skills.
* Improve understanding of Unreal Engine by building upon the Metahuman codebase and the Story Adventure template.

## Design
### Open-world schools of design
With _A Cold Night_ I wanted to first establish the type of open-world game I wanted to create. Most open-world games are bolstered by a large amount of systems that would've easily expanded the scope of the game - for instance, Ubisoft's titles require a large amount of optional content, as well as a substantial map system. A Bethesda-style game would have required investment into loot and a surrounding economy. These all were unacceptable to me, so I looked at smaller titles to see where challenge and reward. Again, I looked towards many of the inspirations from _Metahuman_, considering it would share much of the same codebase, being _Gone Home_ and _Dr. Langeskov_. I also looked towards _A Short Hike_ to find how open-world quest design is adapted to in a non-violent game.   

Ultimately, the problem I was trying to solve was that of reward - how did these different games reward the player? How were these rewards valuable to the player? The game's open-world philsophy can be summed up as follows:  

#### "_Open-world is about rewarding discovery with unique rewards or experiences. Rewards should be mostly unpredictable, but relative to the effort exerted by the player._"  

Ultimately, I wanted to create the most minimalist open-world game possible. Through my various design experiences, I've found that initially aiming for minimalism in design provides a strong foundation that can be built upon later, and ensures that key learnings and insights are established early.

### Progression, linearity and quest design
Open-world titles often struggle between creating the non-linear, unstructured gameplay that the genre is known for, and linear gameplay that can control the player's sense of progression - this was one of _Breath of the Wild's_ most defining innovations. For me, this meant figuring out how to encourage non-linear exploration, while ensuring that challenge was increased from mission to mission. I wanted to avoid aggressively gating content based on quest stages, as is done in _Ghost of Tsushima_, for instance. The way I approached gating was by creating a "hierarchy of information" - this meant that most, if not all content was unlocked from the beginning of the game, allowing the player to enjoy non-linear gameplay, but they would likely find out these locations and information from NPCs, who had gating on when they would give the player information. In addition to this, challenge is created through the game's time system - this was inspired by the dragons in _Breath of the Wild_ as well as the encounters and mission requirements in _Red Dead Redemption 2_. As the game's progression is focused around a glorified treasure hunt, the game asks the player more and more information (for example, location, time and observation) in order to obtain an object. By doing this, I could keep unintended discoveries natural and 'fair', while still being able to provide useful information to the player from NPC sources.

### Level design
The main area I wanted to explore with _A Cold Night_ was that of level design within an open world. The most useful resource here was a CEDEC 2017 talk given by the _Breath of the Wild_ designers describing how compositional techniques can be used to drive discovery, in conjunction with classic level design composition popularised by _Naughty Dog_. A translation of the CEDEC talk can be found here: https://www.blog.radiator.debacle.us/2017/10/open-world-level-design-spatial.html  

![The initial blockout for the game's main town.](./assets/img/md/coldnight/blocking-iter-1.png) 
![An updated blockout for the game's main town.](./assets/img/md/coldnight/blocking-iter-2.png) 

_An example of how blockout detail changed between playtesting - the second iteration used more obvious building "shapes", floors, and directionality than the first, despite using a similar layout._  

![A shot of the main town in-game.](./assets/img/md/coldnight/main-city.png)  

_By adding a small amount of detail to the main town, I was able to greatly improve the readability of my level._

Given the snowy midwestern (i.e flat) setting of the game, I wasn't able to rely on the typical dense forests, mountains and ravines of open-world games to occlude or signpost discoveries - I looked towards _Fallout: New Vegas_ and _Fallout 3_ in order to understand how discoveries and sightlines work inside more wasteland-type environments. In addition to this, I didn't have to worry about too many distant landmarks, as the game's use of fog meant that a relatively small area was visible around the player at a time. However, when given my first playtests, I found two main issues: almost everything was visible to the player at once, meaning that there was no "thrill of discovery" so instrumental to an open world game, and because everything was visible to the player at once, player traversal was boring and the player would tire out easily getting from one known landmark to another. Within standard open-world games, this is mitigated through systems such as combat or resources just off the beaten path.  

![An example of an area within the game.](./assets/img/md/coldnight/forest.png) 

_An early change I made was to separate the ground from the hills in crucial areas, as the lack of contrast between the snow floor and snow hills would harm navigation._

I used the following terminology to try recreate this "thrill of discovery": "Weenies" and "Stumbles". This can be seen in the image below, and by considering the map as a whole, I could begin pacing out weenies and stumbles to create the feeling of discovery and unpredictability as outlined in my philosophy. 

![Weenies and Stumbles from a design document.](./assets/img/md/coldnight/weenies_stumbles.png)  

_An design document snippet describing the pacing of Weenies and Stumbles in the early-game._

I also analysed footage of various games to understand how traversal was kept interesting, and used this to inform future design decisions. This analysis of "navigation beats" gave me a better understanding of the density of the world I was building - I'd say the main change I made to the game after this was to decrease the amount of complication in the topography for a stronger overall mental model of a path or area, but to greatly increase the density of "stumbles" in order to create a greater feeling of unexpected discovery.


![Navigation beats of Fallout: New Vegas.](./assets/img/md/coldnight/navigation-beats-0.png) 
![Navigation beats of Fallout 3.](./assets/img/md/coldnight/navigation-beats-1.png)  

_A snippet of navigation beat analysis from the Fallout games. Other games analysed included Red Dead Redemption 2, Breath of the Wild, and Morrowind._

## Development
### Changing the Metahuman codebase
I adjusted the original Metahuman codebase in order to work with my new requirements, which saved me a lot of development time. This game reuses and expands upon the original "Monologue" system I built. I also intended to restructure much of my blueprint script code to allow for better modularity, meaning the use of scene and actor components - for instance, as this game would need many modern NPCs, I needed to reuse Metahumans, and moved all my dialogue scripts to use interchangeable and editable actor components. As scripting progression was reliant on a single level blueprint in Metahuman, I changed this system to be much more non-linear - an easily accessible script manages Quests and the game state, which is handled through Enums and events. In doing so, I greatly improved my own workflow to prevent redundant code.  

![Event documentation.](./assets/img/md/coldnight/quest-event-management.png)  

![Dialogue documentation.](./assets/img/md/coldnight/dialogue-management.png) 

_An example of simple documentation I used for events and dialogue, respectively. Dialogue was especially important to manage given the myriad NPCs littered around the world, as well as how the player would encounter them._

### Unreal Engine 5 and new technologies
I started this project by testing out various Unreal Engine features for the art direction, as the project's success would effectively hinge on the use of lighting as a tone-setter. In particular, I spent a long time tweaking and tuning various individual light settings, the ambient skylight and the directional lights in conjunction with the exponential height fog and post-process settings. In the type of open-world game I was creating, the lighting would effectively carry most of the visual navigation through silhouettes, so to dial this look in early was crucial - in fact, despite the shift to real-time global illumination and shadows in Unreal Engine 5, I still used unmotivated area lights, especially on NPCs and interiors, to accentuate silhouettes and provide visibility.  

![The mood and tone of the game was one of the first things I wanted to nail down.](./assets/img/md/coldnight/lights-gif.gif) 

_The mood and tone of the game was one of the first things I wanted to nail down. The flickering lampposts are actually programmed to flicker within a certain distance of the player, and the length and rhythm of the flicker is highly customisable. This is used to guide the player through the critical paths of the game._

![An example of the lighting used in the game (NPC Silhouette).](./assets/img/md/coldnight/lighting-0.png)  
![An example of the lighting used in the game (Interior).](./assets/img/md/coldnight/lighting-1.png)  
![An example of the lighting used in the game (Motel).](./assets/img/md/coldnight/motel.png) 

_The darkness of the game gave me a great opportunity to use lighting artistically in the game. While I'm far from a lighting artist, the use of light within the game is extremely important to let the player know where to go._

Another goal of mine during development was to use best practices in Unreal Engine 5, to ensure that I was using the technology as intended. I referenced the following GDC video by the Coalition to understand how development from UE4 to UE5 would differ, especially with the benefits and limitations of Nanite. I experimented with various newer systems of Unreal Engine, such as runtime virtual texturing to try merge my various Megascans assets into the scene, though this was later removed. I also initially used Landmass brushes to carve out my terrain, but this was too volatile in the early access UE5 build, so I reverted back to painting directly onto the heightmap - I also changed my blockout workflow to use static meshes instead of BSP brushes for the same reason. I eventually moved part of my workflow to Blender, a program that I was unfamiliar with, having only previously used Autodesk Maya - this was used to create more complex meshes such as bookshelves, ladders, or windows. I initially also planned to kitbash my scene together in a similar way to the _Valley of the Ancients_ tech demo, but decided against this due to my extremely limited art skills, lack of storage space, and specific art and design requirements.

<iframe width="560" height="315" src="https://www.youtube.com/embed/X2FBFFBDJf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

While the decision to use Unreal Engine 5 was driven by technologies such as Lumen's real-time lighting and Nanite's automatic LOD management, as well as a general curiousity for the next generation of game development, the cincher was the introduction of World Partition, which, in theory, would allow me to use a single level file and manage all my actors at once. In practice, I found that World Partition could be extremely unreliable, especially with foliage actors and BSP brushes. I also used the data layers system to manage various areas and interiors, though I found that using the system this way didn't give me much more control over the object hierarchy.  


## Insights
I really enjoyed working on this project, as it felt like one of the first projects I had that had a clear direction from the outset, as well as very achievable outcomes. While I'm still working on it, I thought that I'd document many of the findings I made along the way, as non-linear design is one of the main topics that made me interested in level design in the first place. What surprised me most with open-world design was the fact that understanding linear design practices are still incredibly important to creating a satisfying open world, to create directionality and a satisfying sense of exploration. I also found exploring open-world game systems incredibly interesting - this gave me a renewed appreciation for the history, difficulty and progression of open-world design. 