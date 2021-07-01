//Create variables here 

var dog,dogImg,dogImg1; 
var database; 
var foodStack,foodS; 


function preload() 
{ 
  dogImg=loadImage("images/dogImg.png"); 
  dogImg1=loadImage("images/dogImg1.png");
	//load images here
}

function setup() { 
  database=firebase.database();  
	createCanvas(500, 500); 
  
  dog=createSprite(250,300,150,150); 
  dog.addImage(dogImg); 
  dog.scale=0.15;  

  foodStack=database.ref("Food");
  foodStack.on("value",readStack); 

  
}


function draw() {  
background("aqua"); 
  drawSprites();
  //add styles here 

  text("Food remaining:"+foodS,170,200); 

} 

function readStack(data){
foodS=data.val()
}



