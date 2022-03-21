var hypnoticBall, database;
var position;


function setup(){
  console.log(database);
  createCanvas(500,500);
  database = firebase.database()
  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";
  NAME = ["mother","father","sister","soul","me"]
  NAME1 = random(NAME)
  
  console.log(NAME1); 
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
    database.ref('/').set({
      // 'x':hypnoticBall.x + x,
      // 'y':hypnoticBall.y + y
      'name':NAME1
     })
     
    database.ref("name").on("value",readdata)
}
//function writePosition(x,y){
//hypnoticBall.x = hypnoticBall.x + x;
//hypnoticBall.y = hypnoticBall.y + y;


function readdata(data){
var pos = data.val()
//console.log (pos)

//NAME1 = data.val()
console.log(NAME1)

hypnoticBall.x = pos.x
hypnoticBall.y = pos.y
}