var form,game,titleimg, bgimg, playbg;
var blueStreakimg,blueStreak
var hemioneimg1,hermioneimg2,harryimg1,harryimg2,ronimg1,ronimg2;
var voldemortimg1,voldemortimg2,bellatriximg1,bellatriximg2;
var item;
var titlesound, whooshsound;
var harry,hermione,ron,voldemort,bellatrix;
var gamestate=0;

function preload(){
titleimg=loadImage("title.png")
bgimg=loadImage("bg.jpg")
playbg=loadImage("fightbg.jpg")

hemioneimg1=loadImage("hermione1.png")
hermioneimg2=loadImage("hermione2.png")
harryimg1=loadImage("harry1.png")
harryimg2=loadImage("harry2.png")
ronimg1=loadImage("ron1.png")
ronimg2=loadImage("ron2.png")

voldemortimg1=loadImage("voldemort1.png")
voldemortimg2=loadImage("voldemort2.png")
bellatriximg1=loadImage("bellatrix1.png")
bellatriximg2=loadImage("bellatrix2.png")

titlesound=loadSound("Title Theme.mp3")
whooshsound=loadSound("Whoosh.wav")

blueStreakimg=loadImage("blueStreak.png")
}

function setup() {
  createCanvas(displayWidth-25,displayHeight-200);
  background(bgimg);
  game=new Game()
  game.start()
}

function draw(){
if(gamestate===1){
background(playbg)
game.play()
}
}