class Umbrella{
    constructor(x,y){
        var options = {
            isStatic: true,
    }
//this.x = x;
//this.y = y;
this.image1 = loadImage("walking_1.png");
this.image2 = loadImage("walking_2.png");
this.image3 = loadImage("walking_3.png");
this.image4 = loadImage("walking_4.png");
this.image5 = loadImage("walking_5.png");
this.image6 = loadImage("walking_6.png");
this.image7 = loadImage("walking_7.png");
this.u = Bodies.circle(x,y,50,options);
this.radius = 50;
World.add(world,this.u)
}
display(){
    var l=0;
   // if(frameCount% 60 ===0){
var ran = Math.round(random(1,7));
for(var i=1; i<8;i++){
l++;
console.log(l);
}
//translate(this.u.position.x,this.u.position.y);
imageMode(CENTER);
switch(rand){
    case 1: image(this.image1,this.u.position.x,this.u.position.y+70,200,300);
    break; 
    case 2: image(this.image2,this.u.position.x,this.u.position.y+70,200,300)
    break;
    case 3: image(this.image3,this.u.position.x,this.u.position.y+70,200,300);
    break;
    case 4: image(this.image4,this.u.position.x,this.u.position.y+70,200,300);
    break;
    case 5: image(this.image5,this.u.position.x,this.u.position.y+70,200,300);
    break;
    case 6: image(this.image6,this.u.position.x,this.u.position.y+70,200,300);
    break;
    case 7: image(this.image7,this.u.position.x,this.u.position.y+70,200,300);
default: break;
}

    //}
}
}