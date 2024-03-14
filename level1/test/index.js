const readlineSync = require('readline-sync');

const operation = readlineSync.question("You there! Yes, you! I have a quest for you! Do you accept? Yes or No? ")
if (operation === "no"){
    console.log("To bad you're going anyway!")
}else if(operation === "yes"){
    console.log("Ah! Wonderful thank you!")
}

const playerName = readlineSync.question("Now that that's settled, what is your name? ")
console.log(`Well, ${playerName}, let me give you some things to help on your quest`)

let isGameRunning = true;

class Character{
    constructor(name, healthPoints, attackPoints, inventory){
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
    this.inventory = inventory;
}
printInventory(){
    console.log(`Inventory: ${this.inventory}`);
}
}

let playerInventory = ["sword", "taser", "bow", "string cheese"]


 const hero = new Character(playerName, 100, 5, playerInventory)
 const enemy1 = new Character('Goob', 16, 2, ['4 gold', 'cool hat']);
 const enemy2 = new Character('Hank', 25, 3, ['propane', 'beer']);
 const enemy3 = new Character('Coffee The Destroyer', 32, 4, ['empty cafe giftcard', 'string']);


let enemies = [enemy1, enemy2, enemy3]

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

while(isGameRunning){
   let action = readlineSync.question("Press [i] for your inventory, [w] to walk, or [q] to quit.", {limit: ["w", "i", "q"]})
    if (action === "w"){
        console.log("You chose walk")

        let enemyChance = getRandomNumber(1,4)
        console.log(enemyChance)

        if(enemyChance === 3){
            let randomEnemyIndex = getRandomNumber(0, enemies.length -1)
            let currEnemy = enemies[randomEnemyIndex]
            console.log("You there! How dare you walk up to me like that! Your time has come!!");
            console.log(`${currEnemy.name} has appeared!`);

            const options = ["fight", "run"];
            let fightOrRun = readlineSync.keyInSelect(options, "Do you want to fight or run?");
            console.log(options[fightOrRun])
            if(options[fightOrRun] === "fight"){
                fight(currEnemy);
            } else if(options[fightOrRun] === "run"){
                run(currEnemy);
            }
        } 
    } else if (action === "i"){
      hero.printInventory()
    } else if (action === "q"){
        console.log("Hey! Where are you going?!")
       isGameRunning = false 
    }
}

function fight(currEnemy){
    console.log(`${hero.name} VS ${currEnemy.name}`)
    while(hero.healthPoints > 0 && currEnemy.healthPoints > 0){
        currEnemy.healthPoints -= hero.attackPoints
        console.log(`You did ${hero.attackPoints} damage! ${currEnemy.name} is now at ${currEnemy.healthPoints} health!`)
        hero.healthPoints -= currEnemy.attackPoints
        console.log(`${currEnemy.name} dealt ${currEnemy.attackPoints} damage! ${hero.name} you are now at ${hero.healthPoints} health!`)

        if(hero.healthPoints <= 0){
            console.log(`Uh oh! YOU DIED`)
            isGameRunning = false;
        } if(currEnemy.healthPoints <= 0){
            hero.healthPoints += 4
            hero.inventory.push(currEnemy.inventory)
            console.log(`You have slain ${currEnemy.name}!!`)   
        }
    }
}

function run(currEnemy){
    console.log(`You think you can run away from me ${hero.name}?!`)
    let runChance = getRandomNumber(1,2)
    if(runChance === 1){
        console.log(`Ah! You can!`)
    } else if(runChance === 2){
        console.log(`Well Guess again ${hero.name}!`)
        
        fight(currEnemy)
    }
}