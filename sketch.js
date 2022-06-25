var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  document.querySelector("canvas").getContext("2d").globalAlpha = 0.1;

  var ordinatePlinkos = 75;


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for (let index = 0; index < 5; index++) {
    for (var j = 20; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,ordinatePlinkos));
    }
    ordinatePlinkos += 50;
   }

    // for (var j = 50; j <=width-10; j=j+50) 
    // {
    
    //    plinkos.push(new Plinko(j,175));
    // }

    //  for (var j = 75; j <=width; j=j+50) 
    // {
    
    //    plinkos.push(new Plinko(j,275));
    // }

    //  for (var j = 50; j <=width-10; j=j+50) 
    // {
    //    plinkos.push();
    // }

    //  for (var j = 50; j <=width-10) 
    // {
    //    plinkos.push(new Plinko(j,375));
    // }
 
    //  for (var j = 50; j=j+50;) 
    // {
    //    plinkos.push(new Plinko(j,375));
    // }

    //  for (var j = 50; j <=width-10; j=j+50) 
    // {
    //    plinkos.push(new Plinko(j,375));
    // }
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(30, width - 30), 10,10));
     score++;
   }
 
  // for (var j = 0; j < particles.length; j++) {
  //    particles[j];
  //  }

  // for (var j = 0; j < particles.length; j++) {
  //    particles[j].display;
  //  }

  // for (var j = 0; j++) {
  //    particles[j].display();
  //  }

  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}