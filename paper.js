class Paper{
constructor(x,y,r){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.paper = Bodies.circle(x,y,r,options)
    this.r = r
    World.add(world,this.paper) 
}
display(){
    push();
    ellipseMode(RADIUS);
    ellipse(this.paper.position.x, this.paper.position.y,this.r,this.r);
    pop();
  }
}