function setup() {
  createCanvas(500, 500);
  background(0);
  let bar = rect(25,400,450,80, 200);

  let navTouch = false;
  let brushChosen = 1;
  


}



function navBar(){
  rect(25,400,450,80, 100);
  
  
  //you need 4 icons on navbar for each brush type
  //1.paint brush
  //2.spray can
  //3.lines
  //4.transparent brush
  fill(255)
  ellipse(75,440,25,25)
  
  ellipse(160,440,6,6)
  ellipse(160-4,440+6,6,6)
  ellipse(160+8,440-5,6,6)
  ellipse(160+2,440+12,6,6)
  ellipse(160+3,440-10,6,6)
  ellipse(160-8,440+10,6,6)
  ellipse(160-12,440-10,6,6)
  ellipse(160-11,440-3,6,6)
  
  rect(240,435,15,15)
  
  rect(320,437,8,12)
  rect(326,433,12,6)
  rect(323,435,14,10)
  
  
  //allow user to interact with each brush type
  
   
}

//function brush1(){
  //fill(0)
  //ellipse(55,440,20,20)
  
//}
let brushChosen = 1;

//create functions for each brush
//create shapes for each brush

function paint(){
  if (brushChosen == 1){
    ellipse(mouseX, mouseY,25,25) 
  }
  if (brushChosen == 2){
    ellipse(mouseX,mouseY,6,6)
    ellipse(mouseX-4,mouseY+6,6,6)
    ellipse(mouseX+8,mouseY-5,6,6)
    ellipse(mouseX+2,mouseY+12,6,6)
    ellipse(mouseX+3,mouseY-10,6,6)
    ellipse(mouseX-8,mouseY+10,6,6)
    ellipse(mouseX-12,mouseY-10,6,6)
    ellipse(mouseX-11,mouseY-3,6,6) 
  }
  if (brushChosen == 3){
    rect(mouseX,mouseY, 15,15) 
  }
  if(brushChosen == 4){
    //create random shape generator
    //find out how to do random function and put it in a rect
    rect(mouseX,mouseY,random(16),random(16))
  }
}
//dist for all brushes and stuff



//function brushSelection(){

  //if ((distance1<10)&&(mouseIsPressed)){
    //brushChosen = 1
  //}
  //if ((distance2<10)&&(mouseIsPressed)){
    //brushChosen = 2
  //}
  //if ((distance3<10)&&(mouseIsPressed)){
    //brushChosen = 3
  //}
  //if ((distance4<10)&&(mouseIsPressed)){
    //brushChosen = 4
  //}
//}


function brush(){
  if ((mouseIsPressed)&&(navTouch == false)){
    paint()
  }
}



function draw() {
  //brushSelection()
  if (mouseY<350){
    navTouch = false
  }  
  else{
    navTouch = true
    
  }
  noStroke();

  fill(100,200,100)
  brush()
  
  fill(100)
  navBar()
  //the problem is the distances
  let distance1 = dist(mouseX,mouseY,75,440);
  let distance2 = dist(mouseX,mouseY,160,440);
  let distance3 = dist(mouseX,mouseY,240,440);
  let distance4 = dist(mouseX,mouseY,323,440);
  //for some reason it thinks distances are undefined
  //maybe im not allowed multiple distances
  

  
  if ((distance1<15)&&(mouseIsPressed)){
    brushChosen = 1
  }
  if ((distance2<12)&&(mouseIsPressed)){
    brushChosen = 2
  }
  if ((distance3<15)&&(mouseIsPressed)){
    brushChosen = 3
  }
  if ((distance4<15)&&(mouseIsPressed)){
    brushChosen = 4}

  
  

}