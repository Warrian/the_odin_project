This repository is meant to contain exercises and projects made in The Odin Project curriculum.

# Project #1: ROCK PAPER SCISSORS

- Create a blank HTML document with a script tag. This game is going to be played completely from the console, so don’t worry about putting anything else in there.

- Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

- Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock".

- Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
  
- Preview:
  ![Rock Paper Scissors](https://github.com/Warrian/the_odin_project/blob/master/screenshots/rock_paper_scissors.png)
  
# Project #2: ETCH A SKETCH

- Create a webpage with a 16x16 grid of square divs

- Create the divs using JavaScript… don’t try making them by hand with copy and pasting in your html file!

- There are several different ways to make the divs appear as a grid (versus just one on each line) feel free to use any or play with each of them:
  - float/clear
  - inline-block
  - flexbox
  - CSS Grid

- Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

- Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad.

- You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used

- (Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

- Preview:
![ETCH A SKETCH](https://github.com/Warrian/the_odin_project/blob/master/screenshots/etch_a_sketch.png)

# Project #3: CALCULATOR

- Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
  - add
  - subtract
  - multiply
  - divide
  
- Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

- Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.

- There should also be a display for the calculator, go ahead and fill it with some dummy numbers so you can get it looking right.

- Add a “clear” button.

- This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. 

- Gotchas: watch out for and fix these bugs if they show up in your code:
  - Users should be able to string together several operations and get the right answer: 12 + 7 - 5 * 3 etc.
  - You should round answers with long decimals so that they don’t overflow the screen.
  - Pressing = before entering all of the numbers or an operator could cause problems!
  - Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
  
- EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)

- EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. At least make the operations a different color from the keypad buttons.

- EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.

- EXTRA CREDIT: Add keyboard support!

- Preview:
  ![CALCULATOR](https://github.com/Warrian/the_odin_project/blob/master/screenshots/calculator.png)
