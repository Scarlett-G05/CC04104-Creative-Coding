let play1;
let bckgImg;
let bubble;
let play2;
let d1;
let d2;
let score1;
let score2;
let bubs = []
function preload(){
  bckgImg = loadImage('bacground.jpg')
}
function setup() {
  createCanvas(600, 500);
  
  
  score1 = 0
  score2 = 0
  play1 = new Player1()
  bubble = new bubbles()
  play2 = new Player2()
  
  //d1 = dist(bubble.x,bubble.y,play1.x,play1.y)
  //d2 = dist(bubble.x,bubble.y,play2.x,play2.y)
}


//game idea
//2 player
//side moving game. Players have to jump up to randomly generated bubbles and collect points. player with the most points at end of 60 seconds wins
function keyPressed(){
  if (key =='w'){
    play1.jump()
  }
  if(key=='a'){
    play1.move_L()
  }
  if(key=='d'){
    play1.move_R()
  }
  if (key =='h'){
    play2.jump()
  }
  if(key=='b'){
    play2.move_L()
  }
  if(key=='m'){
    play2.move_R()
  }
}

//maybe put bubbles in a  list


function draw() {
  background(bckgImg)
  fill(255,120,120)
  play1.show();
  push()
  fill(0,100,255)
  play1.move();
  play2.show();
  pop()
  play2.move();
  
  
  
  if (random(1)<0.01){
    bubs.push(new bubbles())
  }
  
  for(let b of bubs){
    b.show()
  }
  

  if (play1.x == bubbles.x) {
    if(play1.y == bubbles.y);{
      score1+=1
    }
  }  
  if (play2.x == bubbles.x) {
    if(play2.y == bubbles.y);{
      score2+=1
    }
  }
  
  textSize(40)
  text(score1,40,40)
  text(score2,430,40)
  //if player collides with bubble add a point to the count
  //pop bubs from list when colided with
  //show points in rect on side of screen
  //put 60 second count down in
  if(second> 60){
    if(score1>score2){
      text('congrats player 1 won!',200,200)
    }
    else if(score2>score1){
      text('congrats player 2 won!' ,200,200)
    }
    else{
      text('it was a draw',200,200)
    }
  }
 
}