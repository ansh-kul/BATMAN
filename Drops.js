class Drops{
    constructor(x,y){
var options = {
    isStatic:false,
    friction:0.1,
    restitution: 0.1,
    density:1.0,}
  this.x = x;
  this.y = y;  
  this.body = Bodies.circle(x,y,4,options);
  this.radius=4;
  World.add(world,this.body);
    }
 reposition(){
    if(this.body.position.y> height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
    }
}
    display(){
        push();
        fill("blue");
      //  translate(this.body.position.x,this.body.position.y);
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
}