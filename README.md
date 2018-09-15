# Age-Of-Empires-AI-Scripts
Scripts for AI Bots that are used in Age Of Empires II (and HD edition). 

## Introduction
[Age of Empires II](https://en.wikipedia.org/wiki/Age_of_Empires_II) is a popular real-time strategy game which, apart from scenarios and skirmishes, offers ability to create your own scenarios and AIs. Our focus will be about AI part of the game, which is mostly about declarative scripts (rules), so don't expect neural networks nor advanced programming.  
I highly recommend reading [AI Scripting Guide](http://aok.heavengames.com/cgi-bin/forums/display.cgi?action=ct&f=26,29,,30) first, which is a solid introduction to writing bots for AoE.  

## What can you find here
* Functional bots that you can play with/against in a game. Each has its own folder and further description
* Documentation for Scripting, the `CPSB_AOK2.doc` which stands for `Computer Player Strategy Builder Guide`. It describes most of syntax and commands.
* Reusable modules, that can be copied when making a new AI or extending an existing one.
* My research, tools and findings that I've made while testing and figuring how the game and AI works

### Common Files
Collection of reusable `.per` files

### Forest Something
As an inspiration of [Forest](https://www.youtube.com/watch?v=CTRwNlRaw9Y) [Nothing](https://www.youtube.com/watch?v=3SFDDZAsXGQ) videos where whole map is just a forest and players have to cut their way through and manage their space, so I've decided to make an AI that would be able to play such map. After couple of tests I've found that AI is not willing to build Mill close to town center, so it greatly delays game progression.  

`Forest Something` map is an alternative to the `Forest Nothing` map. To create the Forest Something map, just generate any random map and remove everything except trees, town centers, villagers and scouts. Yes, not other resources, no gold, no food, not even wolfs nor relics.  

Featured Bots:  
* Forest_Something_Celt - first version aimed for Celts civilization