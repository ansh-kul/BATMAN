const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world,canvas,rand,drops=[];
var thunderframe = 0,thunder1,thunder2,thunder3,thunder4,thunder;
var maxDrops = 200;
function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){

engine = Engine.create();
world = engine.world;

canvas = createCanvas(400,600);
umbrella = new Umbrella(200,450);
if (frameCount % 120 === 0){
    for( var i =0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400),random(0,50)));
    }
}
Engine.run(engine);
}

function draw(){
Engine.update(engine);
background(0);
rand = Math.round(random(1,4));
    if(frameCount % 20 === 0){
        thunderframe = frameCount;
        thunder = createSprite(random(10,350),10,10,20);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2:thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4:thunder.addImage(thunder4);
            default: break;
        }    
        thunder.scale = random(0.5,0.8);
    }
    if(thunderframe+10 === frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();
    
    for(var i = 0; i<maxDrops ;i++){
        drops[i].display();
        drops[i].reposition();
    }
    drawSprites();
}
