//GAME SETUP
// Create the sprites
// set velocity for the obstacle and the target
var frog = createSprite(0, 200);
var obstacle = createSprite(300, 200);
var fly = createSprite(300, 100);


//create the variables
var score = 0;
var health = 100;

function draw()
  {
    // BACKGROUND
    // draw the ground and other background
    background("blue");

    // SPRITE INTERACTIONS
    // if the player touches the obstacle
    // the health goes down, and the obstacle turns
    frog.setAnimation("frog");
    obstacle.setAnimation("obstacle");
    fly.setAnimation("fly");
    
    if (frog.isTouching (obstacle))
    {
      health = health-20;
      obstacle.x=randomNumber(50, 350);
      obstacle.y = randomNumber (50, 350);
    }
    




    // if the frog touches the fly
    // the score goes up, the fly resets
    if (frog.isTouching (fly))
      {
        score = score+10;
        fly.x=randomNumber(50, 350);
        fly.y=randomNumber(50,350);
      }

  // JUMPING
  // if the player has reached the ground
  // stop moving down

  // if the player presses the up arrow
  // start moving up
  if (frog.x != 350)
    {
      if (keyDown("RIGHT_ARROW"))
      {
        frog.x=frog.x+5;
      }
    }

  if (frog.x != 50)
    {
      if (keyDown("LEFT_ARROW"))
      {
        frog.x=frog.x-5;
      }
    }
      if (keyDown("UP_ARROW"))
      {
        frog.y = frog.y-5;
      }  
    
      else if (frog.y != 350)
      {
      frog.y = frog.y+5;
      }
    
  // if the player reaches the top of the jump
  // start moving down

  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen
  if (obstacle.x-2)
    {
      obstacle.x+2;
    }

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("yellow");
  textSize(20);
  text("Health:", 280, 50);
  text (health, 350, 50);
  
  fill("yellow");
  textSize(20);
  text("Score:", 280, 30);
  text (score, 350, 30);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health == 0)
    {
      background("black");
      fill("green");
      textSize(50);
      text("Game Over!" , 40, 200);
      textSize(30);
      text("Final Score:" + score , 75, 250);
    }
}
