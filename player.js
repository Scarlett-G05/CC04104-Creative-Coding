class Player{
  constructor(hello){
    this.r = 40
    this.x = this.r
    this.y = height-50
    this.vy = 0;
    this.gravity = 0.25;
    this.speed = 25
  }
  jump(){
    this.vy = -9;
  }
  move(){
    this.y += this.vy
    this.vy+=this.gravity
    this.y = constrain(this.y,0,height-this.r)
  }
  move_R(){
    this.x += this.speed
    this.x = constrain(this.x,0,width-this.r)
  }
  move_L(){
    this.x -= this.speed
    this.x = constrain(this.x,0,width-this.r)
  }
  
  
}

class Player1 extends Player{
  constructor(hello){
    super(hello)
  }
  show(){
    rect(this.x,this.y,this.r,this.r)
  }
}


class Player2 extends Player{
  constructor(hello){
    super(hello)
  }
  show(){
    rect(this.x+450,this.y,this.r,this.r)
  }
}
