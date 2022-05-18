# Netflix Chapter Select
### Applying prototyping skills to an established UI

## Introduction
I was looking for a personal project to brush up on my UX design skills, as well as one that could consolidate the lessons I learnt in game development with my UX background. I decided to design a feature around a pet peeve that I had with the Netflix apps on PS4 and on Smart TVs - the ability to skip to a certain part of a film without manually fast-forwarding through the video timeline. The problem appealed to me from an interaction design standpoint, as it's a problem specific to this version of the Netflix app, constrained through its remote. I was also interested in designing an interface that doesn't rely on a cursor input, and more specifically, how valid testing would be given the scope and time constraints of Adobe XD, the program I used to prototype it.

![Selection prototypes](./assets/img/md/netflix/9_selection_modes.png)  
_I prototyped several selection types, including grids and rows, as well as prototyped the user's interactions through the grid using a controller._


## Design
I began by breaking down my problem and its domain - most versions of the Netflix app allow the user to skip to any given point of the timeline with ease, and as a result do not necessitate a chapter select function. The need for a chapter select feature would be specific to interaction methods that lack cursor input - such as the Netflix app on Apple TV, Smart TVs, or the PS4 (all of which share the same layout and features). While the PS4 does include a feature to fast forward through the timeline faster through use of the triggers, I realised that a solution would need to be platform agnostic - while there are shortcuts specific to each platform (a universal "back" button being a common one), all solutions would have to be navigable and usable through the simplest of controls - four directional buttons and a select button. Understanding why and how the Netflix app works around these interaction constraints would be crucial to designing my own solution on top of it.


I also looked at other applications that were available to me - YouTube's TV app faces similar challenges to the Netflix app, where everything must be navigable through five buttons - while the UI is more cluttered, and doesn't follow all the same conventions, there is a chapter select function integrated inside YouTube that I considered when building my own options.

## Prototype

I started by drawing my ideas on paper, and then quickly converted them to a digital format with Adobe XD - I spent a few hours analysing the colours, icons and design systems of the Netflix web app. I was limited by my ability to recreate the PS4 app due to the inability to take screenshots, but I analysed the application to replicate the main features that I needed - namely the layout of the existing fast-forward UI.

![Blocking out the UI elements in order to build my own](./assets/img/md/netflix/0_ui_blockout.png)  
_I started by analysing the layout,typography and iconography of the existing app in order to recreate it._

The three options I had were as follows:
### Option A:   
A chapter select screen integrated into the pre-video/description screen. Including this allows for repeat users to quickly skip to a given point in the video before viewing it. From a hierarchical standpoint it follows the same conventions as Netflix's TV shows, and VHS/DVD, where the chapter select feature originates. This option is based on an assumption that the user has already seen the video, and that adding a button to the description screen doesn't add too much clutter.


![A chapter select option within the description screen](./assets/img/md/netflix/1_descriptionscreen.png)  
_A chapter select option within the description screen._


### Option B:  
A chapter select panel integrated within the video playback screen. This keeps in line with the UI pattern used for TV series, and is an explicit option that doesn't add much clutter to the existing UI. This is a far less discrete option than Option A, but allows the user to change chapters without exiting the app.


![A play screen option](./assets/img/md/netflix/2_play_screen.png)   
_A chapter select button as a discrete button in the play screen._


![More play screen options](./assets/img/md/netflix/3_play_screen_prototyping.png)  
_I also built out limited functionality for the rest of the play screen, for testing purposes._


### Option C:  
A chapter select option integrated within the fast-forward option, and follows the design of the YouTube app. While it's a clever solution, it runs the risk of introducing extra error handling and being missed as an option entirely. This option works under the assumption that a Netflix TV user is closer to a Youtube user where they want to skip scenes readily and quickly, and that a chapter select functionality isn't frequently used.


![An integrated option](./assets/img/md/netflix/4_integrated.png)  
_An integrated option that has similarities with the Youtube chapter select function._


![Keeping in mind the visual design of the overall app, I prototyped two different select buttons](./assets/img/md/netflix/8_integrated_button_type.png)  
_I prototyped two distinct select buttons based on the visual design of the app - one with an arrow and one without._


![The integrated chapter select](./assets/img/md/netflix/5_integrated_row.png)  
_The integrated option's chapter select functionality._



## Insights
I found it an interesting challenge to analyse and break down the design of a TV app, as it doesn't use typical pointer interaction methods, but still needs to convey options such as the user's position and the status of the application, as well as build out new UI options that followed the existing conventions of the app. I also considered my limitations and test plan - I believe that the ultimate solution would be a hybrid of multiple options (e.g A and B can exist in the same flow), but for the purposes of testing it would likely be better to test each part individually. This also led me to build out more interactions and prototypes that could be switched in and out during testing, allowing for more atomised testing data.


![The integrated option as a grid](./assets/img/md/netflix/6_integrated_grid.png)   
_I also prototyped other options, such as a grid option within the Option C (integrated select)._


![Grid select](./assets/img/md/netflix/7_integrated_grid_row.png)  
_As the Netflix TV app doesn't make much use of grids, I also prototyped one that aligns more closely with the home screen - that is, one that is more row-based._
