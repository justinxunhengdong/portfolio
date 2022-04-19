# Netflix Chapter Select
### Applying prototyping skills to an established UI

# Introduction
I was looking for a personal project to brush up on my UX design skills, as well as one that could consolidate the lessons I learnt in game development with my UX background. I decided to design a feature around a pet peeve that I had with the Netflix apps on PS4 and on Smart TVs - the ability to skip to a certain part of a film without manually fast-forwarding through the video timeline. The problem appealed to me from an interaction design standpoint, as it's a problem specific to this version of the Netflix app, constrained through its remote. I was also interested in designing an interface that doesn't rely on a cursor input, and more specifically, how valid testing would be given the scope and time constraints of Adobe XD, the program I used to prototype it.

# Design
I began by breaking down my problem and its domain - most versions of the Netflix app allow the user to skip to any given point of the timeline with ease, and as a result do not necessitate a chapter select function. The need for a chapter select feature would be specific to interaction methods that lack cursor input - such as the Netflix app on Apple TV, Smart TVs, or the PS4 (all of which share the same layout and features). While the PS4 does include a feature to fast forward through the timeline faster through use of the triggers, I realised that a solution would need to be platform agnostic - while there are shortcuts specific to each platform (a universal "back" button being a common one), all solutions would have to be navigable and usable through the simplest of controls - four directional buttons and a select button. Understanding why and how the Netflix app works around these interaction constraints would be crucial to designing my own solution on top of it.

I also looked at other applications that were available to me - YouTube's TV app faces similar challenges to the Netflix app, where everything must be navigable through five buttons - while the UI is more cluttered, and doesn't follow all the same conventions, there is a chapter select function integrated inside YouTube that I considered when building my own options.

# Prototype
I started by drawing my ideas on paper, and then quickly converted them to a digital format with Adobe XD - I spent a few hours analysing the colours, icons and design systems of the Netflix web app. I was limited by my ability to recreate the PS4 app due to the inability to take screenshots, but I analysed the application to replicate the main features that I needed - namely the layout of the existing fast-forward UI. 

I was also conscious of potential timesinks and the limitations of my process. I asked myself the following questions that determined my testing process, and hence what I would have to develop.

- What can/should I test?
	- Layouts and interactions have the highest priority - ensuring that the interface is both readable and navigable for the applications users, as well as cohesive with the rest of the application's design language. As such, this should be the focus of the prototype.
- How accurate will these tests be?
	- Interaction and layout tests are Adobe XD's bread and butter - testing interactions may be a little limited as I cannot test on the native platform, but I can simulate it using keyboard controls.
	- Accuracy of tests will be improved if I am able to simulate a few features outside of the test, and allow for error handling. It is important that I avoid a completely linear test.
- What won't I be able to test accurately?
	- Interactions such as button holds would be difficult to do with Adobe XD. Reliance on motion design will also be difficult, despite XD's support for it.
	- Interactions such as navigating through a grid or a timeline will be difficult given the limitations of the program. Testing the specific chapter select functionality will be difficult, but testing and simulating the navigation to and from this feature will not.
	- In order to test the validity of each solution, I will aim to make each solution as distinct and atomised from the next. A likely final solution would be to incorporate redundancies and elements of each solution, but as an initial test it would be better to avoid this.
- What can I do to reduce ambiguity in areas that I cannot test with Adobe XD?
	- I can do targeted tests using paper or hi-fi prototypes, and use questionnaires to measure appeal and usability.
- What are my personal limitations?
	- I will avoid detailled testing outside of Adobe XD, given the short timeframe I want to give myself.
	- I will avoid testing graphic-design focused areas like iconography, as this can be a notorious time sink and is not the focus of my prototype.
	- Testing a final "perfect" design will be difficult due to the lack of testers on hand and my limited timeframe.

A major reason why I wanted to lock down scope and limitations as quickly as possible was because I wanted to try multiple options at the same time (A/B testing), and avoid getting attached to a single solution. This was something I had adopted from my experiences at Halfbrick and game design - an area of design that is high in ambiguity and neccessitates a very time-aware and scope-aware mindset.

The three options I had were as follows:
Option A: a chapter select screen integrated into the pre-video screen. Including this allows for repeat users to quickly skip to a given point in the video before viewing it. From a hierarchical standpoint it follows the same conventions as Netflix's TV shows, and VHS/DVD, where the chapter select feature originates.

Option B: a chapter select panel integrated within the video playback screen. This keeps in line with the UI pattern used for TV series, and is an explicit option that doesn't add much clutter to the existing UI.

Option C: a chapter select option integrated within the fast-forward option, and follows the design of the YouTube app. While it's a clever solution, it runs the risk of introducing extra error handling and being missed as an option entirely.

# Testing and iterations
