# Lighthouse Game
### Scriping, pacing and storytelling in linear levels

<iframe width="560" height="315" src="https://www.youtube.com/embed/OdANYcmP6h4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_A work-in-progress playthrough of the prologue and Act 1._

## Introduction
I had the idea for this project after watching through Hong Kong film director Wong Kar-wai's filmography, having wanted to make a project centred around liminal spaces for quite some time. Wong Kar-wai's films are obsessed with liminality; often filled with heartbroken characters who are in transitory periods of their lives, and as someone who was in a transitory period of my own at the time, I wanted to reflect on my own experiences by building a game centred around this idea. The game focuses around the separation of desire and love, and would feature a heartbroken character as they traverse their memories - sometimes abstract, sometimes nostalgic. While the narrative focuses around romantic desire, I wanted the overall themes to be broader, and wanted to avoid making it autobiographical - the suspension of disbelief in many of Wong Kar-wai's films helps allow the themes to hit harder, after all. Having built ambitious, non-linear levels previously, I wanted this project to go back to basics and build levels exclusively around linear, simple navigation.


My goals for this project were to:
* Design linear, urban environments with a focus on simple navigation and architectural storytelling.
* Improve understanding of narrative pacing within linear level design.
* Improve narrative and cinematic design skills.
* Incorporate traditional blockmesh tools (Supergrid, Geometry Editor) into level design toolset.

## Design
### Pre-production, narrative and direction
I spent a while drawing from my own experiences and those of my friends, as well as plotting out the general character arc, tone and themes. I also thought about Wong Kar-wai's creative vision and how it could translate to both film and games, and any changes I would need to make - for instance, due to the interactive nature of games, I could lean into using architecture to communicate motifs and moods - claustrophobic, lonely, or comforting. I would lean further into abstraction since I knew the game wouldn't be very dialogue heavy, and I don't consider myself much of a writer. This focus on metaphor and abstraction would aid the game visually, because the characters are represented through colour and brightness, with each character in the game being both physically present and emotionally unknowable. The simple visuals of the game would also mean that the simplified blockmesh wouldn't necessarily take too much away from the game tonally.


![Train 2](./assets/img/md/lighthouse/act-1b-9.png)  
_Act 1 has several physical copies of the player, as they reflect upon their own memories. The game also switches between first and third person in the prologue/epilogue and acts._

The majority of the project's influence came mostly from the films Chungking Express, 2046 and In the Mood for Love, and I used similar architectural and visual influences from all three. I also initially intended for much of the game to be played in liminal spaces and backrooms inspired by The Stanley Parable, The Shining or Severance, though I later removed this as I found the urban environments more appropriate and interesting as levels.

![Act-1-1](./assets/img/md/lighthouse/act-1b-2.png)  
_My first challenge was to figure out how to create the feeling of an oppressive cities and alleyways - I used reference from Hong Kong and Taipei to block out much of the sky, and fill out the frame._


![Zoom out](./assets/img/md/lighthouse/act-1b-10.png)  
_Act 1 takes architectural inspiration from 2046. This can be seen in the game's use of walkways (which symbolise unattainable connections), as well as a everchanging directional light that shines from the bottom of the city._


![Train station](./assets/img/md/lighthouse/act-1b-8.png)  
_The final train station is designed to occlude the character of Yellow until the very end, although she can be seen in glimpses in other parts of the level. The lighting and architecture took inspiration from monorail systems in Taipei, as well as In the Mood For Love in how characters are occluded and framed._

### Level Design
I wanted to hone in on level layouts, pacing and scripting, which were skills that I felt were lacking after my previous level design-focused projects. I particularly wanted to make the player move in interesting ways - finding dead ends, moving in circles, or moving vertically. For inspiration, I played linear games like God of War (2018), Guardians of the Galaxy and Bioshock, to replicate the narrative pacing and navigation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/AKeUZVikPV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_I wanted to incorporate many of the techniques I had learnt in this video by Peter Field._

 As I progressed further along into the project, I began to use a progress similar to a storyboard or shot list in order to pace out dialogue triggers, scripted sequences, exploration, and the visibility of the environment. I usually like to block out spaces in the editor, but I used paper prototyping for planning levels, story structure and interiors.

![Storyboard](./assets/img/md/lighthouse/storyboarding.png)  
_My design process for these levels often included a "shot list" of beats I wanted to use. Doing this helped me visualise the pacing of the level while I was making it. Each level follows a simple 3-act structure, as does the game._

#### Prologue - "I find myself here again"
This level consists of a simple approach towards a lighthouse, some dialogue and visual text triggers, and a cutscene. I wanted a short level and environment to bookend the game, and I used the metaphor of a lighthouse (representing the perceived safety of nostalgia and memory, and the cyclical nature of the story). I iterated on this level quickly, and used it to familiarise myself with the Supergrid plugin. 

![Cutscene](./assets/img/md/lighthouse/lh-cutscene.png)  
_This cutscene was the first time I used sequencer, and is crucial in establishing the tone of the game. As this sequence reflects the character's imagination, it's played in first-person. Acts are played in third-person, used to represent memory. This was inspired by Gaspar Noe's Enter the Void._

#### Act 1 - "Nothing happens, nothing changes"
This level consists of three areas that slowly build up the character's backstory. It took inspiration from Chungking Express thematically and 2046 architecturally, and I learnt much about the relationship between architecture, composition and navigation in the process, as well as using AI and crowd systems with the NPCs.

![Act-1-2](./assets/img/md/lighthouse/act-1b-3.png)  
_Every area within this act hides the goal to the next area - first with a moving crowd, then with fences and geometry, and then finally with walls and interiors - the player has to explore to progress in the game._

I initilly built a version of this level with a different narrative, although I scrapped it after feedback and rebuilt it. While it features some interesting themes that I reused in the subsequent version, I found from feedback that it could be incoherent and didn't hit the right narrative beats, and ultimately took focus away from the character's core conflicts.

<iframe width="560" height="315" src="https://www.youtube.com/embed/X4S18PZnIDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Dev Video 4 shows an early version of Act 1. I loved the cutscene used in this level, but cut it for the sake of the game. The ideas of the city, use of walkways, crowds and lighting were all expanded and edited in the updated version._

### Scripting
While previous projects' scripting rarely extended beyond dialogue triggers, I was interested to carry over my film editing experience into this project, which uses Unreal Engine's sequencer for more complex scenes involving sound, loading and camerawork. Fortunately, Unreal Engine's sequencer is simple enough to use, and works for both interactive and non-interactive sequences. I also edited the ALS blueprints to allow for AI scripting - most AI within the game follow predetermined paths. This control was important, as the game makes heavy use of crowds to manipulate tone - for instance, to be lonely or claustrophobic.

![Crowds](./assets/img/md/lighthouse/act-1b-1.png)  
_The game makes heavy use of crowd systems and AI scripting. NPCs initially weren't going to feature much in the game, but I found that having NPCs added to the tone of the story, and are used in Wong's films to emphasise themes of loneliness, space and connection. The amount of NPCs in the game also add an extra dimension to reading and navigating the spaces._

## Development
### Technology
I used Unreal Engine 5 for this project, which was mostly due to the Lumen featureset, and due to the preview update. In the past, using the World Partition features had produced corruption errors (for Metahuman and my Assassin's Creed project), so I was hesitant to use these features - I ended up using World Partition for the data layer featureset, which produced a few minor issues. Having faced these issues previously, I was able to largely avoid them for this project. I also used Supergrid assets for the bulk of the game, mostly to replace my previous BSP greyboxing process, which I found could be very volatile with UE5. I later used Unreal Engine 5's new modelling tools instead of the Supergrid meshes, as it gave me much more control over the stylised architecture of my levels.

### Planning and Process
Each of my projects usually focuses around a different skillset or technology, which can be a huge potential time sink. I first outlined the most crucial failure points, as well as the quickest ways to test and overcome them - for this project, it was scripting AI, the narrative delivery methods (subtitles, world text and vocal text) and using the sequencer. With this in mind, I timeboxed a few days in order to assimilate the AI scripting I needed with the Advanced Locomotion System, and another few days to test out the prologue cutscene. By proving out the technology early, I would be able to understand the possibilities and limits of my game. 

![Prologue](./assets/img/md/lighthouse/lh-frame.png)  
_The prologue was the first level I focused on. I usually light my own levels, as I find it to be important in establishing tone, especially for this kind of game._

I also time-boxed the production of each level, aiming to prove out thematic concepts as quickly as possible, and then stitch them to earlier levels to test holistically. While these would often start on paper, I prefer to avoid too much paper prototyping for narrative-driven projects as I believe it can't test and develop emotional affect easily, and I find it easier to iterate and edit on spaces that have an established foundation.


## Insights
This project allowed me to create simple levels with a fast production schedule, but also allowed me to branch out and incorporate some of my cinematic experience into the game. I also gained a greater appreciation for the design and pacing of levels of narrative-driven games like God Of War. It was a challenge to design levels that are linear but not boring - I referenced several talks by level designers on using composition and minor puzzles to create pockets of tension within each area. Building this game was also therapeutic - it explores ideas of self-image, desire, and the stories that you tell yourself - all of which are problems that I've struggled with before.


### Development Videos
<iframe width="560" height="315" src="https://www.youtube.com/embed/umfPC9mmvPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Dev video 1. This shows the initial Lighthouse and cutscene level. I used this as a proof-of-concept to decide if I should continue working on the project. It also shows my first approach to the game's visual text, which represent the character's intrusive thoughts. Wong's style of writing was something I iterated upon constantly, to find the right balance of poetic and relatable._

<iframe width="560" height="315" src="https://www.youtube.com/embed/8XCrqi8_MQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Dev video 2. This shows the lighthouse and Act 1. This version uses much of the backrooms influence that I later removed, as well as a preliminary cutscene where the main character's heart gets broken._

<iframe width="560" height="315" src="https://www.youtube.com/embed/jt5utupu6UY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Dev video 3. I changed the song and added detail to the Act 1 cutscene. While I loved the execution of this cutscene, it was taking focus away from the main character's core conflict by focusing on the Pink character._

<iframe width="560" height="315" src="https://www.youtube.com/embed/X4S18PZnIDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Dev video 4. I added to the level and fixed some bugs since the previous dev video._ 

<iframe width="560" height="315" src="https://www.youtube.com/embed/K3C2SSsStHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Dev video 5. This shows some areas from an updated Act 1, in early stages of production._

<iframe width="560" height="315" src="https://www.youtube.com/embed/dDdcnV4SELY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Dev video 6. This shows most of Act 1 with some additional visual changes, and I polished the crowd AI and scripting and level design._

<iframe width="560" height="315" src="https://www.youtube.com/embed/JPm5c4JZ9RA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

_Dev video 7. I polished some bugs from Dev video 6 and created a feature-complete version of the level, and adjusted the lighting of the first area to be reminiscent of Chungking Express._

<iframe width="560" height="315" src="https://www.youtube.com/embed/OdANYcmP6h4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

_Dev video 8. I stitched together the previous levels to ensure that the game could be played through._

<iframe width="560" height="315" src="https://www.youtube.com/embed/Er3ODVZURfY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Dev video 9. This was testing the scripting for Act 2_

<iframe width="560" height="315" src="https://www.youtube.com/embed/eauQoLgfAxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Dev video 10. Act 2 is playable, but still needs polish._