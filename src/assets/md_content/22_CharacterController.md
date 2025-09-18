# Third-Person Character Controller
### A side-project made to test my limits

<iframe width="560" height="315" src="https://www.youtube.com/embed/XVopc-cvi3w?si=GPuhkBYNjhAs67X6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  

_A general demo of the character controller._

I built a third-person character controller in around 3 weeks to test my technical ability and sharpen my programming skills. I aimed to incorporate many of the experiences I had learned on _Len's Island_, and built a character controller that was easily extendable, well-architected, and modular enough to slot into future projects. I learnt a lot from this project, and I programmed, tuned, and discovered many of the minor details that make a third-person camera controller work, such as:

![Editor Screenshot](./assets/img/md/character-controller/0-gizmos.png)  

* Camera positioning for a third-person shooter,
* Input handling and buffers to make the controls more responsive,
* Scriptable Object parameterisation and best practices,
* A modular state machine to add and handle new behaviours like jumping and rolling,
* Animation trees, blending and layering, using animations from _Mixamo_,
* Using animation curves for adjusting interpolation speeds,
* Using the same character controller as an interface for simple enemy AI, 
* "Juice" improvements such as crosshair animations, effects appearance and timing, camera shake, and recoil

<iframe width="560" height="315" src="https://www.youtube.com/embed/hEP3VfDtrXw?si=HW2cCymGH_0N2vlo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  

_An earlier demo of the character controller, demonstrating the combat roll. This used the state machine to keep behaviours and code simple._

I found the programming and parameter design portion of this project fulfilling - it had always been one of the most daunting and difficult parts of game development for me, so being able to prove my own ability by developing this from scratch gave me much more confidence and experience for technical design, and was a healthy challenge for my own self-reliance, initiative, passion and problem solving. Additionally, I was conveniently able to extend it for my design test at Playside Studios, which was relatively simple given the modularity of the architecture.
