# Town Size Attack
An alternative way of attacking enemies

## How it works
By default, all military units are defending your town. When enemy building is 'inside of your town', then military units will go and destroy that building. How big is your town is determined by strategic number `town-size`. It's a number of tiles (radius) from your initial town center. When you increase your 'town-size' enough, it will include enemy buildings. And when this happen, then your military units will go 'defend' your territory.

## What you can find here
* Town_Size.html - a simple page that generates rules which can be then copied to AI .per files
* size_attack.per - a working example `.per` file that makes AI to attack via town size