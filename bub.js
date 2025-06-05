class bubbles{
  constructor(){
    this.r = 50
    this.x = random(50,450)
    this.y = random(100,400)
  }
  show(){
    
    ellipse(this.x,this.y,this.r,this.r)
    
  }
}
