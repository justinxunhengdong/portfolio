# Daylight Robberies
### Early Validation and Cowboy Development

Daylight Robberies is a project I started with an old colleague during a career break, and intended to be an independent game with monthly, publically released milestones, and a game scoped to complete development within a short amount of time.

<iframe width="560" height="315" src="https://www.youtube.com/embed/mm3TRs5-9zo?si=DzGQy9xkVsdkN2Bu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

_Daylight Robberies milestone 2.5 gameplay._

Daylight Robberies is an extraction game built using GTA-like mechanics, with a metaprogression layer driven through randomly generated characters, which would gain traits and grow as the player levels up. This idea came from the virality of Grand Theft Auto 6's 2022 leaks, and how individual short-from clips of the game were legible despite being blurry and clearly in-development. Secondly, I have vivid memories of passing an iPad around with GTAIII on it during a high school music concert, watching each person try get as far as they can before dying, and then passing it onto the next person. My belief was that the core wanted systems of Grand Theft Auto and similar games was one that could produce many meaningful stories from a single set of well-trodden mechanics, and visually be extremely legible.


I also wanted to make a run-based open world game, and have worked on or pitched many titles with similar ideas - such as the open-world, level gated hub of _Horizon Worlds: Survive_ or the mix of resource and interest-driven survival exploration of _Len's Island's underground._ I also had played both _Tomodachi Life_ and _Mewgenics_ religiously, having been drawn to the procedural character generation and the subsequent emotional investments of similar games.

Daylight Robberies is a combination of both of these ideas - to use the emergent sandbox of a crime game and merge it with the high-investment character extraction gameplay of Mewgenics. I also took inspiration from _The Binding of Isaac_, which was also developed within a 3-month time span and was incredibly economic with its mechanics. I wanted to aim at building a game within a similar amount of time - and crucially, to ensure constant validation and playtesting of mechanics and marketing strategy with itch.io's analytics.

![Navmesh Demo](./assets/img/md/daylight-robberies/navmesh-pipeline.png)  
_We had to rapidly figure out strong technical foundations for the game. This screenshot is from an initial test to apply navmesh surfaces per-road asset, and ensure the navmesh setup works at higher scales._

![Navmesh Demo](./assets/img/md/daylight-robberies/planning-month-1.png)  
_In Milestone 1, features were planned very broadly, and the information from this card was used as both feature spec and acceptance criteria._

![Navmesh Demo](./assets/img/md/daylight-robberies/planning-document.png)  
_After the base systems were developed, we did a short amount of work planning each week to ensure constant development momentum and minimum wasted time, while also balancing realistic workloads and expectations._

This meant that I had to flexibly, constantly context switch between different designs, make decisions on the fly, and prioritise each piece of work - having to ride a fine line between prototyping and polish. As a systems-driven game, it was difficult to test each part of the game in isolation - so the initial MVP aimed at testing the stealth and driving mechanics. For me, given my limited programming and art skills, I had to work towards my strengths and make clever scope decisions to avoid spending too much time on a feature, and slowly returning to it iteratively as I became more aware of what it required, and what the success conditions were. This also allowed me to iteratively improve upon a stable design base with each update.

<iframe width="560" height="315" src="https://www.youtube.com/embed/l1WhvpQYKFw?si=d_z7EBWJGKa2jjOd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

_Daylight Robberies milestone 1 gameplay. This was the original proof-of-concept for the game's conceit. This shows many initial versions of features that were updated, expanded or even removed after public playtesting._

This included the game's art - it was decided early on that we would use the bulk of our art from asset packs, but a concern was that using too many different asset packs would be difficult to manage and potentially incohesive from an art perspective. I sought the help of a former colleague and senior artist who helped me define the look of the game, using a master shader setup to keep them all manageable. This use of a single master shader allowed for the easy application of texture hue shifts, hit flashes and other effects, as well as a clear control point that could reduce potential visual bugs.

<iframe width="560" height="315" src="https://www.youtube.com/embed/vE2ZUiWFQvk?si=4krE7aonipg8U7OW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

_In-progress demo video for an updated map and vehicle system._

Daylight Robberies is currently under development and has also been submitted for financial grant consideration - I also wanted to use this as an opportunity to familiarise myself with the marketing, product and business side of game development, having only ever approached it from a designer's perspective.
