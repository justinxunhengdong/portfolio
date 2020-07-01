# A Very Small Open World
## An exploration of open-world level design within Unreal Engine 4

## Introduction
As part of my level design portfolio, I wanted to create something that always fascinated me: an open world game. I also wanted to integrate several things into my pipeline:
* Greyboxing and blocking
* Topography through heightmaps
* Megascans assets, and other pre-built asset packs
* Natural environments

These core tenets also grew to include several other technologies during development, such as:
* Runtime virtual texturing
* Weight-blended paint layers using Brushify
* Procedural foliage generation
* Volumetric clouds and post-process volumes
* Environmental storytelling

## Design
As a project in development, this is all subject to change.  

The first thing I wanted to nail down was having a strong mental map of the world. The world's topography is built in such a way that the main landmarks are all visible from the opening area, and landmarks of differing levels of gravity help guide the player along - particularly through the elctrical towers, which lead the eye towards the horizon. The electrical tower is also intended to serve as a main hub that the player can return to if disoriented - think Cinderalla's Castle in Disneyland or Hyrule Castle in Breath of the Wild. Smaller landmarks such as the lakehouse and ruins serve almost as points on a graph, broken up by forests - which can be effectively used as blocking volumes. The three other corners of the map are intended to house hubs of content, such as a small town, a mine, and ruins.

In terms of sections that are mostly complete, this includes the opening area and the lakehouse forest.

