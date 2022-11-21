# Exploring Assassin's Creed
### Exploring the level design of Assassin's Creed

<iframe width="560" height="315" src="https://www.youtube.com/embed/GbOwQ5oKo-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_I updated this level while taking a course in level design - I found that my second attempt was far more confident than the first, and executed upon many of the ideas and techniques from the first with greater precision and intent._

## Introduction
The fantasy presented in Assassin's Creed has always fascinated me, but many of the earlier titles, especially _Unity_, failed to resonate with me due to the game's dated open-world design. The early-mid 2010s era of open worlds were often criticised for generic open-world design, and perhaps none so much as Ubisoft - in most titles from _Far Cry_ to _Watch Dogs_, the player would enter a world split up into districts, make their way to a tower to unlock the missions within the district, which would all appear as icons on the minimap. As a consequence, these worlds were often described as repetitive, formulaic, and devoid of true discovery and surprise, which ultimately led into a relaxation of this open-world template, likely due in no small part to the release of _Breath of the Wild_ and _The Witcher 3_.  

It was my frustration with _Unity_'s lack of readability in its level design and my annoyances with its lack of naturalism (i.e an abudance of abstractions) that drove me to explore its level design, and see if I could maintain the Assassin's Creed fantasy while moving away from the established Ubisoft template. While Ubisoft would relax the template of the series away from dense cities beginning with _Origins_, it is often said that the series lost much of its original appeal, particularly surrounding its focus on parkour and dense, crowded cities. I would describe this as a shift in focus away from the series' intention of making the player an _Assassin_ and towards a _Medjay_, demigod, or viking.  

![E3 2014 gameplay of Assassin's Creed Unity](./assets/img/md/ac/unity-e3.png)  

_I wanted to find a more natural way of displaying abstracted minimap information, as is shown in this screenshot._

My intention for starting this project was also to approach open-world design from a different angle - the nature of sprawling natural landscapes allows for the use of negative space and clearer landmarks, and is what I've explored in various projects including _A Cold Night_. Cities are far denser, and require different techniques to be able to navigate them. I wanted to explore these techniques using a series of theories I had from travelling in various cities, and research from urban planning.

![A CEDEC 2017 slide describing compositional techniques in Zelda](./assets/img/md/ac/rectangles-zelda.png)  
_As shown in this slide from CEDEC describing the design of Breath of the Wild, rectangles are often used to hide objects from sight - a city is essentially full of these._

## Design


<iframe width="560" height="315" src="https://www.youtube.com/embed/xzCEdSKMkdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_I wanted to capture a similar sort of fantasy to the one advertised in this E3 2014 trailer of Unity._

My goal was simple - how would I navigate an Assassin's Creed city visually? I also expanded upon this by describing the "Assassin's Creed Experience" - essentially, what I wanted my exploration loop to feel like, and how I would remain faithful to the established Assassin's Creed fantasy. I created a simple description of how I wanted my exploration loop to look:

##### _"The assassin starts off in a busy street, full of civilians. They parkour up to a tall building and survey the city for where they want to go. They find one that interests them, and then parkour across the many rooftops to reach their destination."_  

I also extrapolated a few rules to describe how the Assassin's Creed fantasy would feel from a traversal standpoint.

* The rooftops should feel readable and largely quiet.
* The player should not be traversing the city at ground level.
* Content should be mostly kept to a ground level, so players should intentionally descend to reach it.
* Content should be hidden inside buildings and alcoves.
* It should be considerably harder to discover things from the ground because of NPCs and clutter - however it should still make rooftop access easy to find.
* The player should feel like a bird of prey (where combat is concerned).
* The player should be able to run around most of the rooftops without needing to touch the ground, if they are creative enough.

### Memorability : The city from afar

The one thing I found in most memorable cities is that their layouts can be described fairly easily. Using UX terminology, it means that they have simple conceptual models that would map easily onto mental models. 

For instance, Paris can be easily described relative to the Arc de Triomphe and the areas arranged radially around it. Breaking this down further, I used a system of describing and designing areas from "close, medium and far" ranges to ensure a simple and digestible concept.

![I described several cities with this close-medium-far terminology to understand how to build cities.](./assets/img/md/ac/paris-mental-model.png)  

My initial plan was to make heavy use of gestalt theory to organise and create blocks and districts (applying gestalt theory to urban planning is far from an unknown concept), but I found this much less useful for creating a small level such as this. While I did apply gestalt theory to group my districts and blocks, I found that it didn't really apply at a ground level and only really applied at a birds-eye view, so refrained from doggedly sticking to grouping districts this way. Researching urban planning led me onto PENDL (Paths, Edges, Districts, Nodes, Landmarks), which has already seen applications within game design. I found applying this theory to my level far more useful - in this case, the PENDL system would describe the rooftops more than the ground, as that is the intended mode of traversal.

![The buildings within the level from a birds-eye view.](./assets/img/md/ac/birds-eye.png)   

_I paid close attention to the paths and edges were created within districts. In this district, most players are funnelled towards the central building due to its height and the natural parkour paths._

I also explored the idea of throughlines, that could group districts together or make sections of the map feel cohesive. Examples of this in real life include rivers, the Chicago loop, and cities built on hills. Areas can then be described as "towards the top/bottom of the hill" , "north/south of the river", or "north/south/inside of the Loop".

![Chicago districts](./assets/img/md/ac/chicago-loop.png)  

_Chicago can be described relative to its iconic Loop - its districts are also strengthened by natural edges such as rivers and parks._

The term I used to describe the different mental model scales was Micro and Macro-topography - I've brought this same thinking into much of my level design work, aiming to create strong directionality and orientation for players.

![Micro and macro topography](./assets/img/md/ac/micro-macro-topog-annotated.png)  
_Micro and macrotopography used in the project. The average height of buildings left of the district edge is markedly taller than those to the right, again to differentiate their identities. This is also an application of PENDL, where the two districts have a clear and distinct separation._


### Visual Landmarks and the Exploration Loop : The city at a glance

While _Breath of the Wild_'s innovations and achievements within the open-world genre have been frequently documented, my favourite is its level design. I wanted to recreate the loop of reaching a district, finding a tower, and visually targeting and navigating towards points of interest - while this is incredibly similar to Ubisoft's formula, the difference is in its minor details - a tower doesn't reveal all content on a map, the content is often ambiguous, and the player finds content visually, rather than it given to them through the minimap. In order to do this, _Breath of the Wild_ establishes a strong visual language - towers and shrines all have a trademark glow that allows them to be seen from far distances, stables have a distinctive horse-head silhouette, all campfires have tall smoke plumes reaching far into the sky, not to mention the variety of unique mountains and zones, each with distinct colour palettes and silhouettes. My first aim was to establish similar visual patterns for the Assassin's Creed series.

![Zelda vs AC visual design](./assets/img/md/ac/silhouettes-ac-zelda.png)  
_I wanted to replicate the strong visual language used in Zelda within a more realistic setting._

In the AC series (not including later titles such as _Origins_ that bucked the design template), icons can be described as either being missions, shops, sidequests or collectibles. In order to replace these icons, I decided to create a hub that the player could treat as a safe haven, where they would shop or find most missions, as I thought that this would emphasise the swashbuckling, ranger type character that Assassins are typically portrayed as. Taking a page out of _Breath of the Wild's_ book, I decided to give them a strong visual signature - they would all have red roofing that contrasted against other roof colours, and any building populated with NPCs would have smoke billowing out of chimneys, much like in other open world games. These taverns also have skylights and balconies, as players would likely not be approaching them from ground level. I leaned away from creating stylised silhouettes (e.g giant horse-head roof) as is used in _Breath of the Wild_ - the AC series is still grounded in reality.

![Tavern in gameplay](./assets/img/md/ac/gameplay.png)   

_The tavern's smoke plumes and red roof can be seen in the distance._

I kept the idea of towers, but their implementation is much more similar to those in _Breath of the Wild_ - they simply provide an obvious vantage point (I also didn't create a map or fast-travel system for this project). Their inclusion also was due to them working incredibly well within the aforementioned Assassin's Creed fantasy, and also make sense for a dense city as the first place a player would go when reaching a district.

Ultimately, building and placing landmarks was the crux of this project's success - it was the size and placement of landmarks that also determined the design and height of the buildings between them, which would create the thrill of traversal.

### Traversal : The city in detail

A drawback of dense cities is that readability of points of interest is heavily diminished - I'd wager this is why the Assassin's Creed series has such a focus on icons in the first place. By the time I reached the design of individual buildings within my level, I had gained a greater appreciation of the existing design of Assassin's Creed and the minutiae of its buildings, despite my gripes with it. I found [this article](
https://iuliu-cosmin-oniscu.medium.com/a-level-design-look-at-parkour-rooftop-connectivity-in-assassins-creed-urban-spaces-767d116bdb17) by Ubisoft Massive designer Iuliu-Cosmin Oniscu extremely useful to give me a head start as to the existing level design of the series, and the types of affordances and structures used in it. 

![Birds-eye annotated view of gameplay](./assets/img/md/ac/birds-eye-annotated.png)   

_An annotated view of the first district I built- highways refer to rooftop paths, ladders are transitions to rooftops, and crossings are jumps that can be failed by the player. Colour variance in the rooftops can be seen to differentiate one building or challenge from another - this also applies to the sides of buildings, which would help in creating depth to the image._

My main goal with the buildings and rooftops was that of directionality. As it's an open-world game, I had to ensure that districts were able to be traversed easily regardless of direction - the challenge then became balancing the consequences of failing jumps with allowing districts to be open enough to traverse. I did this by sneaking in traditional valves that would punish failed jumps, but allowing players to reach their destination through alternative routes. The process of this was me running around districts from every direction, from every building, and iteratively layering on new paths and walkways to create a fun parkour experience. I also paid close attention to the colour contrast of climbable areas, making liberal use of affordances such as ramps, stairs and ladders to ensure quick readability of the environment - as this was one of my major gripes with the AC games' parkour. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/2Ju3mZinUYk?start=100" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_I took inspiration from Uncharted 3's rooftop chase scene to create exciting parkour gameplay. This was toned down a bit to suit the level's non-linearity._

![Affordances](./assets/img/md/ac/affordances.png)   

_I made liberal use of affordances to show when/if jumps should be performed._

The rooftops also did the bulk of heavy lifting for leading lines and composition - this was why I added a variety of slanted roofs to the game, as I found an overabundance of flat roofs were unexciting and lacked directionality - this was an application of my theory of micro-topography as described earlier. This meant that blocks of buildings often either increased or decreased gradually in height, which I found created a more exciting gameplay experience - not only are players moving laterally, but they move vertically as well, creating a greater sense of progression and change. Expanding upon this, I started creating small tunnels and paths inside buildings, allowing them to run through half-constructed buildings and alleyways - this improved the perceived density of the city, strongly added to the Assassin's Creed fantasy, and made traversal far more interesting. While the speed of the player is intended to be maintained for stretches throughout the game, I also added places where the player was forced to slow down - for example, balance beams need to be crouch-walked on, and is used to break up more open areas of the level.

![Railings](./assets/img/md/ac/railings.png)   

_Balancing beams help slow down the player, as they are often crouched on to prevent falling off. This takes advantage of a condition in the code where the player cannot walk off a ledge while crouched._

![Inside a roof](./assets/img/md/ac/roof-inside.png)   

_Interiors are used to further vary traversal - I took a page of this from Uncharted 3._

By creating variance within the verticality, speed and openness within the areas that the player parkours through, I believe I was able to create a traversal experience that harkens back to the old AC games while remaining readable.

![Microtopography](./assets/img/md/ac/fall-penalty-annotated.png)   

_An example of micro-topography and its relation to challenge and level design. I toned down many of the penalties (by adding more ladders) as I wanted to shift the punishment of failing a jump away from frustration and towards problem-solving (i.e finding alternate routes)._

## Development/Process

I used the popular Advanced Locomotion System as a base for my character, initially starting in Unreal Engine 4 due to the volatility of Unreal Engine 5. This was because the ALS had a built-in mantle system, which I spent the first day or two of development tweaking for responsiveness, and exploring traversal opportunities.I built a small map to test out various traversal opportunities and to hash out metrics such as door heights, building height, mantle height, roof angles and scales using BSP brushes, then converted these to static meshes to build out my level on.  

![Assembly-Crowds](./assets/img/md/ac/assembly-1.png)   

_I tested out mechanics such as crowds within my test level (ALS had an AI controller that I made use of). I tweaked some of this code so that the player could push them out of the way or knock them over, which was very fun._

Ultimately, the level design of Assassin's Creed is made more interesting with its far more sophisticated parkour system, so I had to build my level with the limitations of ALS in mind. I found that the mantle system didn't work well with ledges, so I moved away from the vertical climbs in Assassin's Creed and towards ledges and railings for my "ladders", or transitions between road and roof. These limitations also meant that I couldn't create windows to jump through, but I found workarounds to create interiors.

![Assassin's Creed Revelations](./assets/img/md/ac/ac-revelations.png)   
_I couldn't use complete vertical climbs as is shown in this screenshot from AC Revelations._

![Assembly](./assets/img/md/ac/assembly-0.png)   
_An image of the assembly level I used - I locked down the scale and density within the limitations of my character as soon as possible._

After building out static meshes, I made the switch to Unreal Engine 5 for its open-world features. I moved away from the BSP workflow into a static-mesh oriented one after my troubles with _A Cold Night_. This was also due to the much higher density of objects compared to _A Cold Night_, which did the bulk of its organisation through folders and data layers. With Assassin's Creed I used the Level Instance system instead, which made the iterations of individual buildings far simpler. I did run into issues with packed level instances, which resulted in a significant setback where several buildings were deleted, and I had to remake the main map file.  

I had initially intended to also keep a lean visual design, using simple colours as is common in blockmesh. This would've resulted in a clean visual image much like _Mirror's Edge_, but I didn't think this was an accurate test of how my composition and visuals would be read. I opted to use realistic textures and lighting, based off the visual design of _Unity_, to get a better understanding of how my geometry would be read within a level. Thankfully, the efficacy of Lumen made this an easy transition. As my confidence in creating buildings improved, I began to play more artistically with my blockmeshes, adding small flourishes such as supporting beams to make my level more visually interesting, stepping away from a rigid grid to use more angles and curves, as well as building out more elaborate structures.

![Shops Structure](./assets/img/md/ac/upmarket-shop.png)   
_I began to explore different types of structures, such as the one shown here._

## Insights
This was a project that I had been planning to explore for years, so I was grateful for the opportunity to finally work on it. I also was surprised about the amount that my initial design (that being, naturalistic traversal of an Assassin's Creed city) changed - I moved away from many of the stylised trappings of my original thoughts, and challenged many of the assumptions I originally had with research and experimentation (such as the efficacy of applying gestalt theory). My experience with previous projects allowed me to have a relatively efficient development process, both from a technical and design perspective.


<iframe width="560" height="315" src="https://www.youtube.com/embed/qGI0rnHjLHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

_A work-in-progress video of the level after around a week of development time._

<iframe width="560" height="315" src="https://www.youtube.com/embed/5mn0L-ccPS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_I redid the map in a newer version of Unreal Engine for the CGMA Level Design for Games course. I used many of the learnings from the original map for my blockout and design process._

<iframe width="560" height="315" src="https://www.youtube.com/embed/GbOwQ5oKo-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_An updated version of the map built for CGMA - this time focused around implementing PENDL and re-integrating parkour gameplay_

