# Rock_Paper_Scissors
---------------------

A Game of Rock, Paper, Scissors designed with the help of Odin Project

**Table of Contents**

[Mechanics of Game](#Mechanics-of-Game)<br />




## Mechanics of Game
--------------------

The first step that was taken in this project was creating the game itself in the javascript side of things 

The 'weapons' are defined as an array of 3 different strings, but they could be numbers if you prefer. 
As long as each element of the array is different it doesn't matter. 
I went with strings that described the 'weapons' in the war of the memulation.
Here's the code snippet below showing this process.

`const weapon = ["rock","paper","scissors"];`

The game can be seperated into 3 different functions
1. [Computer Move](#Computer-Move)
2. [A Single Round of Play](#A-Single-Round-of-Play)
3. [The Loop of the Game](#The-Loop-of-the-Game)


### Computer Move
It's a really simple function. A random number from 1 to 3 is generated.
This is done by using Math.random() method to generate a random number between 0 & 1.
This is then multiplied by 3 so that a number between 0 & 3 can be spawned. 
All of this is rounded to the nearest integer rounded down using the Math.floor() mehtod.
Having generated a random integer between 0-2, these integers can
This can be seen below.

```
const computerPlay = () => weapon[Math.floor(Math.random() * 3)];
```

### A Single Round of Play
The next step was creating a single round of rock, paper, scissors (RPS).
This function requires two parameters obviously, player input and the computer's input.
I've already created the computer's input 
