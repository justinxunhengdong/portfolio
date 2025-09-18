	# Rickety Spaceship Simulator
### An asymmetric multiplayer team-building game

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZGRqfbvwY6k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_I directed, shot and edited this informational video in Premiere Pro and After Effects._

## Synopsis
_Rickety Spaceship Simulator_ was an asymmetric multiplayer game built for a Physical Computing subject. This game attempted to apply concepts in team-building and team formation by creating a shared experience. It aimed to primarily implement Tuckman's group development theory, creating cycles of forming, norming, storming and performing by relying on the interplay between the four distinct roles, using the physical space along with a variety of different controllers to emphasise their differences. The game was built in Unity, and was an Xbox 360 Kinect, a Wii Fit Balance Board, two separate monitors and three Arduino boards.


![Rickety Spaceship Simulator](./assets/img/md/rss/cinematic.png) 

_Rickety Spaceship Simulator's cinematic camera._


## Design


![Gunner](./assets/img/md/rss/gunner.png) 

_The Gunner role was designed around an Xbox 360 Kinect. This screen was shared with the Pilot, who would effectively control the camera._

I helped flesh out the original design by specifying player roles, paying special attention to the "wants" of each role and walking through the interaction flows with the team to figure out how the game would play. I focused particularly on mental models, a common topic in User Experience design - for example, the Balance Board was chosen as it worked as an accessible metaphor for controlling three axes of the spaceship at once. We looked at many other possible avenues for describing the abilities of roles, including binaural audio, head-tracking and a motion-controlled shovel.

I also paid close attention to the overall social experience that the game provided - I aimed to design failure such that it wasn't the fault of a single player, and as such, promoted a positive atmosphere regardless of player success. I also conducted the academic research that influenced the design of the game as a team-building activity, and analysed other asymmetric multiplayer games to find patterns that could be used to define our game.


![Dreadnought](./assets/img/md/rss/dreadnought.png) 

_I designed the Dreadnought's appearance around its silhouette - its direction had to be visible from all angles._

In an attempt to add rising tension throughout a game session, I also designed and developed a boss character, the Dreadnought. This slow-moving ship would net the players a large amount of points, and would require tight co-ordination among the team members to destroy it.

## Development
I developed many of mechanics and elements in the game, including the procedural generation of asteroids, UI, enemy AI and the different roles. I also handled technical art, and was able to optimise the game using LOD transitions to the point that I was able to triple the amount of detail in a scene.

<iframe width="560" height="315" src="https://www.youtube.com/embed/GZ9RK1UGRQ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Rickety Spaceship Simulator was exhibited at the Edge in June 2019._

## Insights
Despite the success of the product at exhibition and academically, it was clear that there were several design flaws that impacted the project and the game. Several of these were gameplay-related; the Engineer role was badly balanced to the point of exclusion from the rest of the team, and the "wants" of different roles often failed to justify the existence of others. Much of the project also fell victim to tunnel vision - the design of the game began to lose focus from its purpose as a team-building experience.

Ultimately, while much of the project could have been improved, I learnt much about design, development, teamwork and physical computing that I have brought to my other projects with much success. Our experience designing _Rickety Spaceship Simulator_ went on to define much of my work designing _Crimey Boyz_, which led to a much smoother development experience. I believe that, had we focused on delivering a more design featuring less complexity, more natural interactions, and a stronger focus on team-building, this project would have yielded greater results.
