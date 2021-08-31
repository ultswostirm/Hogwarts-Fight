class Game{
constructor(){}
start(){
if(gamestate===0){
form=new Form()
form.display()
}
harry=createSprite(200,200,50,50)
harry.addImage(harryimg1)
harry.addImage(harryimg2)
voldemort=createSprite(800,200,50,50)
voldemort.addImage(voldemortimg1)
voldemort.addImage(voldemortimg2)
}
play(){
textSize(30)
fill(rgb(255,0,0))
var stupefy=createButton("STUPEFY")
stupefy.position(100,200)
var expelliarmus=createButton("EXPELLIARMUS")
expelliarmus.position(100,250)
var protego=createButton("PROTEGO")
protego.position(100,300)

stupefy.mousePressed(()=>{
    blueStreak=createSprite(100,100,100,100)
    blueStreak.addImage(blueStreakimg)
    blueStreak.velocityX=5
    
})
expelliarmus.mousePressed(()=>{
blueStreak=createSprite(100,100,100,100)
blueStreak.addImage(blueStreakimg)
blueStreak.velocityX=5
})
protego.mousePressed(()=>{
blueStreak=createSprite(100,100,100,100)
blueStreak.addImage(blueStreakimg)
blueStreak.velocityX=5
})
drawSprites()
}
}