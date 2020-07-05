var bullet, wall, speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  bullet =  createSprite(50, 200, 30, 5);

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = rgb(80,80,80);

}

function draw() {
  background(255,255,255);

  bullet.velocityX = speed;

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
     var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

     if(damage > 10 ){
       wall.shapeColor = "red";
     }
     if(damage < 10){
       wall.shapeColor = "green";
     }
  }

  // drawing the sprites
  drawSprites();
}