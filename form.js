class Form{
constructor(){
this.heroes=createSelect()
}
display(){
image(titleimg,500,10,500,200)
this.heroes.position(50,350)
this.heroes.option("Select Your Wizard/Witch")
this.heroes.option("Harry Potter");
this.heroes.changed(()=>{
var heroname=this.heroes.value();
fill("white")
    textSize(25)
text(heroname , 100,500)
})

var spells=createSelect()
spells.position(700,350)
spells.option("Select Your Weapon & Potion")
spells.option("Phoenix Feather Wand");
spells.changed(()=>{
    var spellname=spells.value();
    fill("white")
    textSize(25)
    text("Will Be Using "+spellname , 500,500)
    })

var villians=createSelect()
villians.position(1300,350)
villians.option("Select Your Villian")
villians.option("Draco Malfoy");
villians.changed(()=>{
    var villiansname=villians.value();
    fill("white")
    textSize(25)
    text("To Fight " + villiansname , 1000,500)
    })

var fight=createButton("FIGHT")
fight.position(750,600)
fight.mousePressed(()=>{
gamestate=1
background(playbg)
this.heroes.hide()
spells.hide()
villians.hide()
fight.hide()
titlesound.stop()
game.play()
})

}
}