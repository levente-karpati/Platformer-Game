
//GLOBAL VARIABLES

var phase = 0 //WHICH PHASE OF THE GAME?

//character
var characterX = 400;
var characterY = 375;
var characterWidth = 50;
var characterHeight = 70;
var characterSpeed = 4;

//platforms ------ LVL 0
var platform0X = 400;
var platform0Y = 200;
//platforms ------ LVL 1
var platform1X = 200;
var platform1Y = 150; 
var platform2X = 350;
var platform2Y = 300; 
var platform3X = 500;
var platform3Y = 150; 
var platformHeight = 40;
var platformWidth = 200;
//platforms ------ LVL 2
var platform4X = 200;
var platform4Y = 150; 
var platform5X = 350;
var platform5Y = 300; 
var platform6X = 500;
var platform6Y = 150; 
var platform7X = 660;
var platform7Y = 300;

//platform barrier ------ LVL 0
var barrierHeight = 20; 
var barrier0 = platform0Y+20
//platform barrier ------ LVL 1
var barrier1 = platform1Y+20; 
var barrier2 = platform2Y+20;
var barrier3 = platform3Y+20;
//platform barrier ------ LVL 2
var barrier4 = platform4Y+20; 
var barrier5 = platform5Y+20;
var barrier6 = platform6Y+20;
var barrier7 = platform7Y+20;

//collectables ------ LVL 0
var collectableWidth = 30;
var collectableHeight = 30;
var collectable0X = 480;
var collectable0Y = 370;
//collectables ------ LVL 1
var collectable1X = 505; 
var collectable1Y = 100;
var collectable2X = 325; 
var collectable2Y = 250;
var collectable3X = 375; 
var collectable3Y = 250;
var collectable4X = 200; 
var collectable4Y = 100;
//collectables ------ LVL 2
var collectable5X = 270;
var collectable5Y = 250;
var collectable6X = 675;
var collectable6Y = 250;
var collectable7X = 420;
var collectable7Y = 250;
var collectable8X = 180;
var collectable8Y = 110;
var collectable9X = 220;
var collectable9Y = 110;
var collectable10X = 500;
var collectable10Y = 110;

//enemy ------ LVL 0
var enemyWidth = 63;
var enemyHeight = 80;
var enemySpeed = 2; //how fast
var enemy0X = 400;
var enemy0Y = 160;
var enemy0Position = 400;
var enemy0Direction = 1; 
var enemy0Distance = 83; 
//enemy ------ LVL 1
var enemy1X = 210; //e1 for enemy
var enemy1Y = 100;
var enemy1Position = 200; //Center Position
var enemy1Direction = -1; //Left or Right?
var enemy1Distance = 70; //How much DISTANCE can enemies TRAVEL?
var enemy2X = 505; 
var enemy2Y = 100;
var enemy2Position = 505;
var enemy2Distance = 70; 
var enemy2Direction = 1; 
//enemy ------ LVL 2
var enemy3X = 510; 
var enemy3Y = 390;
var enemy3Position = 510;
var enemy3Distance = 100; 
var enemy3Direction = -1; 
var enemy4X = 350; 
var enemy4Y = 260;
var enemy4Position = 350;
var enemy4Distance = 70; 
var enemy4Direction = -1; 
var enemy5X = 500; 
var enemy5Y = 110;
var enemy5Position = 500;
var enemy5Distance = 50; 
var enemy5Direction = 1; 

//counters ------ LVL 0
var gameScore0 = 0;
var lives0 = 3; 
//counters ------ LVL 1
var gameScore = 0;
var lives = 3;
var totalTime;//total time
var splashScreenTime;
var gameTime;
var timeLimit = 99; 
//counters ------ LVL 2
var gameScore2 = 0;
var lives2 = 3;
var gameTime2; 
var timeLimit2 = 60;  

//gravity
var jump = false; //are we jumping?
var direction = 2; //the force of gravity in y direction
var speed = 10; // speed of character
var jumpStrength = 13; //strength of character jump
var fallingSpeed = 10; //equal to speed
var minimumHeight = 375; //height of ground
var maximumHeight = 50; //height of sky
var jumpTracker = 0; //keeps track of jumping

//assets
var character;
var platform;
var backgroundImage;
var jumpingSound;
var font;
var collectable;
var collectableSound;
var enemy;
var lifeLostSound;
var backgroundMusic;

////////////////////////////////////////////////////////////SETUP
function setup() {
	createCanvas(800, 500); 
	rectMode(CENTER);
	textAlign(CENTER);
	imageMode(CENTER);
	
	//backgroundMusic setup
	backgroundMusic.play()
}
//close setup

////////////////////////////////////////////////////////////DRAW
function draw() {

	keyPressed();
	keyTyped();
	gravity();
	totalTime = millis(); //start timer
	
	if(phase == 0){
		splashScreen();
	}
	
	if(phase == 1){
		lvl0();
    }
    
    if(phase == 2){
		lvl1();
	}
	
	if(phase == 3){
		victoryScreen();
	}
	
	if(phase == 4){
		defeatScreen();
	}
	
	if(phase == 5){
        lvl2();
        
    
    
	}//close
    
    //CLICK TO START
	if(mouseIsPressed == true && phase != 4){
		phase = 1;
	}//click starts game
	
}//close draw

////////////////////////////////////////////////////////////SPLASH SCREEN
function splashScreen(){
	splashScreenTime = totalTime;
	
	background(150, 230, 240)
	image(backgroundImage, width/2, height/2, width, height); 
	
	//title
	textFont(font);
	fill(51, 255, 232);
	stroke(0);
	strokeWeight(10);
	textSize(100);
	text('LOST HOUNDS', width/2, 200);
	textSize(40);
	
	//instructions to play
	fill(255);
	text('HOW TO PLAY:', width/2, 280);
	text('MOVE WITH ARROW KEYS', width/2, 320);
	//text('JUMP ONTO PLATFORMS, COLLECT THE collectableS & AVOID THE ENEMY', width/2, 360);
	fill(244, 51, 297);
	text('CLICK TO START', width/2, 400);
}
////////////////////////////////////////////////////////////LEVEL 0
    function lvl0(){
	image(backgroundImage, width/2, height/2, width, height); 
	fill(250, 1, 243);
    text('NAVIGATE OVER PLATFORMS WHILST AVOIDING THE HOUNDS!', width/2, height/3.5);
	text('YOU MUST COLLECT ALL COINS TO ADVANCE!', width/2, height/2);
	fill(1, 250, 223);
	text('COMPLETE THE TUTORIAL - YOUR TIME IS TICKING!', width/2, height/1.6);
	noStroke()
	fill(85,107,47); //grass
	rect(width/2, 450, width, 100);
	
    ////////////////////////////////////////////////////////////SCORE BOARD - LEVEL 0
	//for gameScore
	textFont(font);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(30);
	text('SCORE:', 50, 50);
	text(gameScore0, 110, 50);
	
	//for lives
	textFont(font);
	fill(190, 28, 28);
	stroke(0);
	strokeWeight(10);
	textSize(30);
	text('LIVES:', 50, 100);
	text(lives0, 100, 100);
	
    ////////////////////////////////////////////////////////////TIMER - LEVEL 0
    splashScreenTime = splashScreenTime //stop splashScreen screen time wasted
	gameTime = int((totalTime-splashScreenTime)/1000); //conversion to seconds (integer)
	
	textFont(font);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(30);
	text('TIME REMAINING:', 600, 50);
	text(timeLimit-gameTime, 710, 50); 
	
    ////////////////////////////////////////////////////////////PLATFORMS - LEVEL 0
	image(platform, platform0X, platform0Y, platformWidth, platformHeight);
	if(characterX >= platform0X-platformWidth/2 && characterX <= platform0X+platformWidth/2 && characterY+characterHeight >= platform0Y-platformHeight/2 && characterY+characterHeight <= platform0Y+platformHeight/2 && jump == false){
		characterY = platform0Y-50;//dont fall thru
		speed = 0;//no speed when landed
		jumpTracker = 0; //allows re-jump
    }//close if 
    
    //platfrom 4 barrier
    if(characterX >= platform0X-platformWidth/2 && characterX <= platform0X+platformWidth/2 && characterY+characterHeight/2 >= barrier0-barrierHeight/2 && characterY+characterHeight/2 <= barrier0+barrierHeight/2){
        //hit barrier to fall
            jumpTracker = jumpStrength; //no more ability to jump 
            speed = fallingSpeed; //make character fall
    }
    
    ///////////////////////////////////////////////////////////ENEMIES - LEVEL 0
	//enemy 1
	image(enemy, enemy0X, enemy0Y, enemyWidth, enemyHeight);
	if(characterX >= enemy0X-enemyWidth/2 && characterX <= enemy0X+enemyWidth/2 && characterY >= enemy0Y-enemyHeight/2 && characterY <= enemy0Y+enemyHeight/2){
		//hitting enemy
		lives0 = lives0 -1; //lose a life
		lifeLostSound.play();
		characterX = 400; //respawn
		characterY = 375;
	}//close hit pos
	
	////////////////////////////////////////////////////////////ENEMY MOVEMENT - LEVEL 0
	enemy0X = enemy0X + (enemySpeed*enemy0Direction);
	if(enemy0X >= enemy0Position+enemy0Distance || enemy0X <= enemy0Position-enemy0Distance){
		//exceed allowed dstance
		enemy0Direction =  enemy0Direction*-1;
	}//CLOSE ENEMY LVL0
	
    ////////////////////////////////////////////////////////////COLLECTABLES+COLLISION - LEVEL 0 
    
    //collectable 5
	image(collectable, collectable0X, collectable0Y, collectableWidth, collectableHeight);
	if(characterX >= collectable0X-collectableWidth/2 && characterX <= collectable0X+collectableWidth/2 && characterY >= collectable0Y-collectableHeight/2 && characterY <= collectable0Y+collectableHeight/2){
		//collectable collision
		gameScore0 = gameScore0+1;
		collectable0X = -1000 //-
		collectableSound.play();
	}//close hit collectable
    
    /////////draw character
	stroke(0);
	fill(150, 0, 170); //purple
	//rect(characterX, characterY, characterWidth, characterHeight);
	image(character, characterX, characterY, characterWidth, characterHeight);
    
    ////////////////////////////////////////////////////////////GAME SCORE - LEVEL 0

    if(gameScore0 >= 1){
        winSound.play();
        //start of level position
        characterX = 400;
        characterY = 375;
		phase = 2;//trigger next level
	}
	
	if(lives0 <= 0){
		loseSound.play()
		phase = 4;
	}
	
	if(gameTime >= timeLimit){
		loseSound.play()
		phase = 4;
	}
}//close lvl0

////////////////////////////////////////////////////////////LEVEL 1 
function lvl1(){

//appearance
	background(150, 230, 240)
	image(backgroundImage, width/2, height/2, width, height); 

//grass
	noStroke()
	fill(85,107,47); //grass
	rect(width/2, 450, width, 100);

//window frame
	noFill();
	stroke(0);
	strokeWeight(15);
	rect(width/2, height/2, width, height);
	
//draw box (platform)
	stroke(0);
	strokeWeight(5); //orange
	fill(255, 120, 0);
//rect(platform1X, platform1Y, platformWidth, platformHeight);
	image(platform, platform1X, platform1Y, platformWidth, platformHeight);
	image(platform, platform2X, platform2Y, platformWidth, platformHeight);
	image(platform, platform3X, platform3Y, platformWidth, platformHeight);

	stroke(0);
	strokeWeight(10);
	textSize(30);
	fill(250, 1, 243)
	text('TUTORIAL', 355, 205);

//draw character
	stroke(0 );
	fill(150, 0, 170); 
	image(character, characterX, characterY, characterWidth, characterHeight);
	
////////////////////////////////////////////////////////////PLATFORM COLLISIONS + BARRIERS
	//platform 1
	if(characterX >= platform1X-platformWidth/2 && characterX <= platform1X+platformWidth/2 && characterY+characterHeight >= platform1Y-platformHeight/2 && characterY+characterHeight <= platform1Y+platformHeight/2 && jump == false){
		characterY = platform1Y-55;//dont fall thru
		speed = 0;//no speed when landed
		jumpTracker = 0; //allows re-jump
    }
    
    //platfrom 1 barrier
	if(characterX >= platform1X-platformWidth/2 && characterX <= platform1X+platformWidth/2 && characterY+characterHeight/2 >= barrier1-barrierHeight/2 && characterY+characterHeight/2 <= barrier1+barrierHeight/2){
    //hit barrier = fall
		jumpTracker = jumpStrength; //no more ability to jump 
		speed = fallingSpeed; //make character fall
	}
	//platform 2 
	if(characterX >= platform2X-platformWidth/2 && characterX <= platform2X+platformWidth/2 && characterY+characterHeight >= platform2Y-platformHeight/2 && characterY+characterHeight <= platform2Y+platformHeight/2 && jump == false){
		characterY = platform2Y-55;//dont fall thru
		speed = 0;//no speed when landed
		jumpTracker = 0; //allows re-jump
    }//close if
     
    //platfrom 2 barrier
    if(characterX >= platform2X-platformWidth/2 && characterX <= platform2X+platformWidth/2 && characterY+characterHeight/2 >= barrier2-barrierHeight/2 && characterY+characterHeight/2 <= barrier2+barrierHeight/2){
        //hit barrier = fall
            jumpTracker = jumpStrength; //no more ability to jump 
            speed = fallingSpeed; //make character fall
        }

	//platform 3
	if(characterX >= platform3X-platformWidth/2 && characterX <= platform3X+platformWidth/2 && characterY+characterHeight >= platform3Y-platformHeight/2 && characterY+characterHeight <= platform3Y+platformHeight/2 && jump == false){
		characterY = platform3Y-55;//dont fall thru
		speed = 0;//no speed when landed
		jumpTracker = 0; //allows re-jump
    }//close if
    
    //platfrom 3 barrier
    if(characterX >= platform3X-platformWidth/2 && characterX <= platform3X+platformWidth/2 && characterY+characterHeight/2 >= barrier3-barrierHeight/2 && characterY+characterHeight/2 <= barrier3+barrierHeight/2){
        //hit barrier = fall
            jumpTracker = jumpStrength; //no more ability to jump 
            speed = fallingSpeed; //make character fall
        }
    

	////////////////////////////////////////////////////////////COLLECTABLES
	//collectable 1
	image(collectable, collectable1X, collectable1Y, collectableWidth, collectableHeight);
	if(characterX >= collectable1X-collectableWidth/2 && characterX <= collectable1X+collectableWidth/2 && characterY >= collectable1Y-collectableHeight/2 && characterY <= collectable1Y+collectableHeight/2){
		//hits collectable
		gameScore = gameScore+1;
		collectable1X = -1000 //-
		collectableSound.play();
	}//close hit collectable
	//collectable 2
	image(collectable, collectable2X, collectable2Y, collectableWidth, collectableHeight);
	if(characterX >= collectable2X-collectableWidth/2 && characterX <= collectable2X+collectableWidth/2 && characterY >= collectable2Y-collectableHeight/2 && characterY <= collectable2Y+collectableHeight/2){
		//hits collectable
		gameScore = gameScore+1;
		collectable2X = -1000 //-
		collectableSound.play();
	}//close hit collectable
	//collectable 3
	image(collectable, collectable3X, collectable3Y, collectableWidth, collectableHeight);
	if(characterX >= collectable3X-collectableWidth/2 && characterX <= collectable3X+collectableWidth/2 && characterY >= collectable3Y-collectableHeight/2 && characterY <= collectable3Y+collectableHeight/2){
		//hits collectable
		gameScore = gameScore+1;
		collectable3X = -1000 //-
		collectableSound.play();
	}//close hit collectable
	//collectable 4
	image(collectable, collectable4X, collectable4Y, collectableWidth, collectableHeight);
	if(characterX >= collectable4X-collectableWidth/2 && characterX <= collectable4X+collectableWidth/2 && characterY >= collectable4Y-collectableHeight/2 && characterY <= collectable4Y+collectableHeight/2){
		//hits collectable
		gameScore = gameScore+1;
		collectable4X = -1000 //-
		collectableSound.play();
	}//close hit collectable
    ////////////////////////////////////////////////////////////ENEMY
    
    //enemy 1
	image(enemy, enemy1X, enemy1Y, enemyWidth, enemyHeight);
	if(characterX >= enemy1X-enemyWidth/2 && characterX <= enemy1X+enemyWidth/2 && characterY >= enemy1Y-enemyHeight/2 && characterY <= enemy1Y+enemyHeight/2){
		//hitting enemy
		lives = lives -1; //lose a life
		lifeLostSound.play();
		characterX = 400; //respawn
		characterY = 375;
	}//close hit pos
    
    //enemy 2
	image(enemy, enemy2X, enemy2Y, enemyWidth, enemyHeight);
	if(characterX >= enemy2X-enemyWidth/2 && characterX <= enemy2X+enemyWidth/2 && characterY >= enemy2Y-enemyHeight/2 && characterY <= enemy2Y+enemyHeight/2){
		//hitting enemy
		lives = lives -1; //lose a life
		lifeLostSound.play();
		characterX = 400; //respawn
		characterY = 375;
	}//close hit pos
	
	//moving enemy 1
	enemy1X = enemy1X + (enemySpeed*enemy1Direction);
	if(enemy1X >= enemy1Position+enemy1Distance || enemy1X <= enemy1Position-enemy1Distance){
		//exceed allowed dstance
		enemy1Direction =  enemy1Direction*-1;
	}
    
    //moving enemy 2
	enemy2X = enemy2X + (enemySpeed*enemy2Direction);
	if(enemy2X >= enemy2Position+enemy2Distance || enemy2X <= enemy2Position-enemy2Distance){
		//exceed allowed dstance
		enemy2Direction = enemy2Direction*-1;
	}
    ////////////////////////////////////////////////////////////SCORE BOARD
	//for gameScore
	textFont(font);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(30);
	text('SCORE:', 50, 50);
	text(gameScore, 110, 50);
	
	//for lives
	textFont(font);
	fill(190, 28, 28);
	stroke(0);
	strokeWeight(10);
	textSize(30);
	text('LIVES:', 50, 100);
	text(lives, 100, 100);
	
	gameTime = int((totalTime-splashScreenTime)/1000); //convert to seconds
	
	textFont(font);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(30);
	text('TIME REMAINING:', 600, 50);
	text(timeLimit-gameTime, 710, 50);
	
	
	//trigger win/lose screen
	if(gameScore >= 4){
        winSound.play();
        //start of level position
        characterX = 400;
        characterY = 375;
		phase = 5;//trigger lvl2
	}
	
	if(lives <= 0){
		loseSound.play()
		phase = 4;
	}
	
	if(gameTime >= timeLimit){
		loseSound.play()
		phase = 4;
	}
}//close lvl1

////////////////////////////////////////////////////////////LEVEL 2 

function lvl2(){
	image(backgroundImage, width/2, height/2, width, height); 
	noStroke()
	fill(85,107,47); //grass
	rect(width/2, 450, width, 100);
	
    ////////////////////////////////////////////////////////////SCORE BOARD - LEVEL 2 
	//for gameScore
	textFont(font);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(30);
	text('SCORE:', 50, 50);
	text(gameScore2, 110, 50);
	
	//for lives
	textFont(font);
	fill(190, 28, 28);
	stroke(0);
	strokeWeight(10);
	textSize(30);
	text('LIVES:', 50, 100);
	text(lives2, 100, 100);

	fill(250, 1, 243)
	text('LEVEL 1', 350, 260);

	////////////////////////////////////////////////////////////TIMER - LEVEL 2 
	gameTime = gameTime //stop splashScreen screen time wasted
	gameTime2 = int((totalTime-splashScreenTime-(gameTime*1000))/1000); //conversion to seconds (integer)
	
	textFont(font);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(30);
	text('TIME REMAINING:', 600, 50);
	text(timeLimit2-gameTime2, 710, 50); 
	
    ////////////////////////////////////////////////////////////PLATFORMS - LEVEL 2 
	image(platform, platform4X, platform4Y, platformWidth, platformHeight);
	if(characterX >= platform4X-platformWidth/2 && characterX <= platform4X+platformWidth/2 && characterY+characterHeight >= platform4Y-platformHeight/2 && characterY+characterHeight <= platform4Y+platformHeight/2 && jump == false){
		characterY = platform4Y-50;//dont fall thru
		speed = 0;//no speed when landed
		jumpTracker = 0; //allows re-jump
    }//close if 
    
    //platfrom 4 barrier
    if(characterX >= platform4X-platformWidth/2 && characterX <= platform4X+platformWidth/2 && characterY+characterHeight/2 >= barrier4-barrierHeight/2 && characterY+characterHeight/2 <= barrier4+barrierHeight/2){
        //hit barrier to fall
            jumpTracker = jumpStrength; //no more ability to jump 
            speed = fallingSpeed; //make character fall
    }
	
	image(platform, platform5X, platform5Y, platformWidth, platformHeight);
	if(characterX >= platform5X-platformWidth/2 && characterX <= platform5X+platformWidth/2 && characterY+characterHeight >= platform5Y-platformHeight/2 && characterY+characterHeight <= platform5Y+platformHeight/2 && jump == false){
		characterY = platform5Y-50;//dont fall thru
		speed = 0;//no speed when landed
		jumpTracker = 0; //allows re-jump
    }//close if 
    
    //platfrom 5 barrier
    if(characterX >= platform5X-platformWidth/2 && characterX <= platform5X+platformWidth/2 && characterY+characterHeight/2 >= barrier5-barrierHeight/2 && characterY+characterHeight/2 <= barrier5+barrierHeight/2){
            //hit barrier to fall
            jumpTracker = jumpStrength; //no more ability to jump 
            speed = fallingSpeed; //make character fall
    }
	
	image(platform, platform6X, platform6Y, platformWidth, platformHeight);
	if(characterX >= platform6X-platformWidth/2 && characterX <= platform6X+platformWidth/2 && characterY+characterHeight >= platform6Y-platformHeight/2 && characterY+characterHeight <= platform6Y+platformHeight/2 && jump == false){
		characterY = platform6Y-50;//dont fall thru
		speed = 0;//no speed when landed
		jumpTracker = 0; //allows re-jump
    }//close if 
    
    //platfrom 6 barrier
    if(characterX >= platform6X-platformWidth/2 && characterX <= platform6X+platformWidth/2 && characterY+characterHeight/2 >= barrier6-barrierHeight/2 && characterY+characterHeight/2 <= barrier6+barrierHeight/2){
            //hit barrier to fall
            jumpTracker = jumpStrength; //no more ability to jump 
            speed = fallingSpeed; //make character fall
        }
	
	image(platform, platform7X, platform7Y, platformWidth, platformHeight);
	if(characterX >= platform7X-platformWidth/2 && characterX <= platform7X+platformWidth/2 && characterY+characterHeight >= platform7Y-platformHeight/2 && characterY+characterHeight <= platform7Y+platformHeight/2 && jump == false){
		characterY = platform7Y-50;//dont fall thru
		speed = 0;//no speed when landed
		jumpTracker = 0; //allows re-jump
    }//close if
    
        //platfrom 3 barrier
    if(characterX >= platform7X-platformWidth/2 && characterX <= platform7X+platformWidth/2 && characterY+characterHeight/2 >= barrier7-barrierHeight/2 && characterY+characterHeight/2 <= barrier7+barrierHeight/2){
            //hit barrier to fall
            jumpTracker = jumpStrength; //no more ability to jump 
            speed = fallingSpeed; //make character fall
        }
    
    
    ////////////////////////////////////////////////////////////ENEMIES - LEVEL 2 
	//enemy 1
	image(enemy, enemy3X, enemy3Y, enemyWidth, enemyHeight);
	if(characterX >= enemy3X-enemyWidth/2 && characterX <= enemy3X+enemyWidth/2 && characterY >= enemy3Y-enemyHeight/2 && characterY <= enemy3Y+enemyHeight/2){
		//hitting enemy
		lives2 = lives2 -1; //lose a life
		lifeLostSound.play();
		characterX = 400; //respawn
		characterY = 375;
	}//close hit pos
	
	//enemy 2
	image(enemy, enemy4X, enemy4Y, enemyWidth, enemyHeight);
	if(characterX >= enemy4X-enemyWidth/2 && characterX <= enemy4X+enemyWidth/2 && characterY >= enemy4Y-enemyHeight/2 && characterY <= enemy4Y+enemyHeight/2){
		//hitting enemy
		lives2 = lives2 -1; //lose a life
		lifeLostSound.play();
		characterX = 400; //respawn
		characterY = 375;
	}//close hit pos
	
	image(enemy, enemy5X, enemy5Y, enemyWidth, enemyHeight);
	if(characterX >= enemy5X-enemyWidth/2 && characterX <= enemy5X+enemyWidth/2 && characterY >= enemy5Y-enemyHeight/2 && characterY <= enemy5Y+enemyHeight/2){
		//hitting enemy
		lives2 = lives2 -1; //lose a life
		lifeLostSound.play();
		characterX = 400; //respawn
		characterY = 375;
	}//close hit pos
	
    ////////////////////////////////////////////////////////////ENEMY MOVEMENT - LEVEL 2 
	enemy3X = enemy3X + (enemySpeed*enemy3Direction);
	if(enemy3X >= enemy3Position+enemy3Distance || enemy3X <= enemy3Position-enemy3Distance){
		//exceed allowed dstance
		enemy3Direction =  enemy3Direction*-1;
	}
		
	enemy4X = enemy4X + (enemySpeed*enemy4Direction);
	if(enemy4X >= enemy4Position+enemy4Distance || enemy4X <= enemy4Position-enemy4Distance){
		//exceed allowed dstance
		enemy4Direction = enemy4Direction*-1;
	}
	
	enemy5X = enemy5X + (enemySpeed*enemy5Direction);
	if(enemy5X >= enemy5Position+enemy5Distance || enemy5X <= enemy5Position-enemy5Distance){
		//exceed allowed dstance
		enemy5Direction = enemy5Direction*-1;
	}//CLOSE ENEMY LVL2
	
    ////////////////////////////////////////////////////////////COLLECTABLES+COLLISION - LEVEL 2 
    
    //collectable 5
	image(collectable, collectable5X, collectable5Y, collectableWidth, collectableHeight);
	if(characterX >= collectable5X-collectableWidth/2 && characterX <= collectable5X+collectableWidth/2 && characterY >= collectable5Y-collectableHeight/2 && characterY <= collectable5Y+collectableHeight/2){
		//collectable collision
		gameScore2 = gameScore2+1;
		collectable5X = -1000 //-
		collectableSound.play();
	}//close hit collectable
    
    //collectable 6
	image(collectable, collectable6X, collectable6Y, collectableWidth, collectableHeight);
	if(characterX >= collectable6X-collectableWidth/2 && characterX <= collectable6X+collectableWidth/2 && characterY >= collectable6Y-collectableHeight/2 && characterY <= collectable6Y+collectableHeight/2){
		//collectable collision
		gameScore2 = gameScore2+1;
		collectable6X = -1000 //-
		collectableSound.play();
    }//close hit collectable
    
    //collectable 7
	image(collectable, collectable7X, collectable7Y, collectableWidth, collectableHeight);
	if(characterX >= collectable7X-collectableWidth/2 && characterX <= collectable7X+collectableWidth/2 && characterY >= collectable7Y-collectableHeight/2 && characterY <= collectable7Y+collectableHeight/2){
		//collectable collision
		gameScore2 = gameScore2+1;
		collectable7X = -1000 //-
		collectableSound.play();
	}//close hit collectable
    
    //collectable 8
	image(collectable, collectable8X, collectable8Y, collectableWidth, collectableHeight);
	if(characterX >= collectable8X-collectableWidth/2 && characterX <= collectable8X+collectableWidth/2 && characterY >= collectable8Y-collectableHeight/2 && characterY <= collectable8Y+collectableHeight/2){
		//collectable collision
		gameScore2 = gameScore2+1;
		collectable8X = -1000 //-
		collectableSound.play();
    }//close hit collectable

    //collectable 9
    image(collectable, collectable9X, collectable9Y, collectableWidth, collectableHeight);
	if(characterX >= collectable9X-collectableWidth/2 && characterX <= collectable9X+collectableWidth/2 && characterY >= collectable9Y-collectableHeight/2 && characterY <= collectable9Y+collectableHeight/2){
		//collectable collision
		gameScore2 = gameScore2+1;
		collectable9X = -1000 
		collectableSound.play();
    }//close hit collectable

    //collectable 10
    image(collectable, collectable10X, collectable10Y, collectableWidth, collectableHeight);
	if(characterX >= collectable10X-collectableWidth/2 && characterX <= collectable10X+collectableWidth/2 && characterY >= collectable10Y-collectableHeight/2 && characterY <= collectable10Y+collectableHeight/2){
		//collectable collision
		gameScore2 = gameScore2+1;
		collectable10X = -1000 
		collectableSound.play();
	}
	
	/////////draw character
	stroke(0 );
	fill(150, 0, 170); //purple
	//rect(characterX, characterY, characterWidth, characterHeight);
	image(character, characterX, characterY, characterWidth, characterHeight);
    
    ////////////////////////////////////////////////////////////gameScore - LEVEL 2 

    if(gameScore2 >= 6){
		winSound.play();
		phase = 3;//trigger win screen
	}
	
	if(lives2 <= 0){
		loseSound.play()
		phase = 4;
	}
	
	if(gameTime2 >= timeLimit){
		loseSound.play()
		phase = 4;
	}
}////////////////////////////////////////////////////////////CLOSE LEVEL 2 

////////////////////////////////////////////////////////////WIN SCREEN 
function victoryScreen(){
	image(backgroundImage, width/2, height/2, width, height); 
	textFont(font);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(200);
	text('VICTORY', width/2, height/2);
}
///////////////////////////////////////////////////////////LOSE SCREEN 
function defeatScreen(){
	image(backgroundImage, width/2, height/2, width, height); 
	textFont(font);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(150);
	text('GAME OVER', width/2, height/2);
}
////////////////////////////////////////////////////////////GRAVITY 
function gravity(){
	
	if(characterY >= minimumHeight && jump == false){
		//fall to ground
		characterY = characterY;//do not fall
		jumpTracker = 0;//reset jumpTracker upon landing
	}
	else{
		characterY = characterY + (direction*speed); //makes gravity work
	}
	
	if(jump == true){
		if(characterY <= maximumHeight || jumpTracker >= jumpStrength){
			if(characterY >= minimumHeight){
				characterY = minimumHeight;
			}
			else{
				speed = fallingSpeed;
			}//fall at maximum
		}
		else{
			jumpingSound.play(); 
		  speed = -jumpStrength;//jump
			jumpTracker = jumpTracker+1;//add to tracker
		}
	}
	else{
		speed = fallingSpeed;
    }
	
	////side barrier
    //right
    if(characterX+characterWidth/2 >= width){
        characterX = characterX-5; //gone past right
    }

    //left
    if(characterX-characterWidth/2 <= 0){
        characterX = characterX+5; //gone past left
    }
}
////////////////////////////////////////////////////////////CONTROLS
function keyPressed(){
    if(keyIsDown(LEFT_ARROW)){
		characterX = characterX-characterSpeed; //move left
		lookingLeft = true;
	}
	else{
		lookingLeft = false;
	}
	
	if(keyIsDown(RIGHT_ARROW)){
		characterX = characterX+characterSpeed; //move right
		lookingRight = true;
	}
	else{
		lookingRight = false;
	}
}

function keyTyped(){
	if(keyIsDown(UP_ARROW)){
		jump = true;
	}
	else{
		jump = false;
	}
}
////////////////////////////////////////////////////////////ASSETS
function preload(){

	character = loadImage('assets/character_right1.png');
	characterLeft = loadImage('assets/character_left1.png');
	platform = loadImage('assets/woodenplanks.png');
	backgroundImage = loadImage('assets/background.jpg');
	jumpingSound = loadSound('assets/boing.mp3');
	font = loadFont('assets/ThaleahFat.ttf');	
	collectable = loadImage('assets/coin.png');
	collectableSound = loadSound('assets/coin.mp3');
	enemy = loadImage('assets/enemy1.png'); 
	lifeLostSound = loadSound('assets/grunt.mp3');
	winSound = loadSound('assets/victory.mp3');
	loseSound = loadSound('assets/defeat.mp3');
	backgroundMusic = loadSound('assets/bensound-epic.mp3')
}