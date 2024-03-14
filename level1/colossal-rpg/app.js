const readlineSync = require("readline-sync");
//Start the game with a while loop that call start function
//Ask the player what his name is?
//
let name = "Steve"
//player stats and inventory
let player = {
name: name,
hp: 50,
attackValue: Math.floor(Math.random() * 5 + 3),
inventory: []
// inventory: ["Health Potion", "Sword", "Shield"]
}

let monsterArray = [ 
  {
      name: "Demon", 
      hp: 10, 
      attackValue:Math.floor(Math.random() * 3)
      
  }, 
  {
      name: "Gorgon", 
      hp: 15, 
      attackValue:Math.floor(Math.random() * 5)
      
  },
  {
      name: "Minotaur", 
      hp: 25, 
      attackValue:Math.floor(Math.random() * 9)
      
  },
  {
      name: "Goblin Lord", 
      hp: 20, 
      attackValue:Math.floor(Math.random() * 7)
      
  },
  {
      name: "Moth Man", 
      hp: 20, 
      attackValue:Math.floor(Math.random() * 7)
      
  },
  {
      name: "Alien", 
      hp: 20, 
      attackValue:Math.floor(Math.random() * 7)
      
  },
  {
      name: "Sasquatch", 
      hp: 20, 
      attackValue:Math.floor(Math.random() * 7)
      
  }
]

      // Define items
      const items = ["Health Potion", "Sword", "Shield", "Health Potion", "Health Potion", "Health Potion", "Health Potion"];

    while(player.hp > 0){ 
      start()
    }

    function start(){
      while (player.hp > 0 && monsterArray.length > 0) {
        const playerActions = ["Walk", "Check Inventory"]; // Define player actions
        const index = readlineSync.keyInSelect(playerActions, "What will you do?");
    
        if (index === 0) {
          // 'Walk' option selected
          console.log("You begin to walk");
          encounter();
        } else if (index === 1) {
          // 'Check Inventory' option selected
          console.log("You check your inventory");
          checkInventory();
        } else {
          // Player exited the menu or pressed an invalid key
          console.log("Your journey awaits");
          // Do something...
        }
    
        // Check if all monsters are defeated
        if (monsterArray.length === 0) {
          console.log("Congratulations! You have defeated all the monsters. You win!");
          return; // Exit the function
        }
      }
    }
  
        function checkInventory(){
          console.log("Inventory:");
          player.inventory.forEach((item, index) => console.log((index + 1) + ". " + item));
        
          if(player.inventory.length === 0){
            console.log("Your inventory is empty.");
            return;
          }
        
          const selectedIndex = readlineSync.keyInSelect(player.inventory, "Choose an item to use:");
        
          if(selectedIndex === -1){
            console.log("You chose not to use any item.");
            return;
          }
        
          const selectedItem = player.inventory[selectedIndex];
        
          if(selectedItem === "Health Potion"){
            console.log("You use the Health Potion. It heals you for 20 HP.");
            player.hp += 20;
            console.log("Your HP is now: " + player.hp);
          } else if(selectedItem === "Sword"){
            console.log("You equip the Sword. Your attackValue is increased by 3.");
            player.attackValue += 3;
            console.log("Your attackValue is now: " + player.attackValue);
          } else if(selectedItem === "Shield"){
            console.log("You equip the Shield. It reduces damage from monster attacks by 2.");
            player.shieldEquipped = true;
          }
        
          // Remove the used item from the player's inventory
          player.inventory.splice(selectedIndex, 1);
        }

        function encounter(){
          console.log("This is the encounter function")
          
          var monster = monsterArray[Math.floor(Math.random() * monsterArray.length)];
          
          if (monster.name === "Demon"){
            console.log("You have encountered a DEMON.")
            
          } else if(monster.name === "Gorgon"){
            console.log("You have encountered a GORGON.")
            
          } else if(monster.name === "Minotaur"){
            console.log("You have encountered a MINOTAUR.")
            
          } else if(monster.name === "Goblin Lord"){
            console.log("You have encountered a GOBLIN LORD.")
            
          } else if(monster.name === "Moth Man"){
            console.log("You have encountered a MOTH MAN.")
            
          } else if(monster.name === "Alien"){
            console.log("You have encountered a ALIEN.")
            
          } else if(monster.name === "Sasquatch"){
            console.log("You have encountered a SASQUATCH.")
          }
          //Call the fightOrRun function
          fightOrRun(monster);
          // return monster    
        }
        
        function fightOrRun(monster){
          console.log("You have now entered the fightOrRun");
          let fightOptions = ["fight", "run"];
          let index = readlineSync.keyInSelect(fightOptions, "~~~ Will you fight or run? ~~~");
          console.log(index);
          
          if(index === 0){
            // Calculate monster and player hp
            console.log("You've selected fight");
            combat(monster); // Pass the monster object to combat function
          } else if(index === 1){
            console.log("You try to run");
            run(monster);
          }
        }

function combat(currentMonster){
  console.log("You have entered the combat loop");

  while(player.hp > 0 && currentMonster.hp > 0){
    console.log("YOU ATTACK THE " + currentMonster.name);
    var newMonsterHp = currentMonster.hp - player.attackValue;
    currentMonster.hp = newMonsterHp;
    console.log("~ The " + currentMonster.name + "'s hp is now " + currentMonster.hp + " ~");

    if (currentMonster.hp <= 0) {
      console.log("The " + currentMonster.name + " has been defeated!");
      assignItem(currentMonster);
      removeMonster(currentMonster);
      break;
    }

    console.log("THE " + currentMonster.name + " ATTACKS YOU");
    var newPlayerHp = player.hp - currentMonster.attackValue;
    player.hp = newPlayerHp;
    console.log("* Your hp is now " + player.hp + " *");

    if (player.hp <= 0) {
      console.log("You have been defeated by the " + currentMonster.name + "!");
      break;
    }
  }
}

function assignItem(defeatedMonster){
  // Get a random item
  const randomIndex = Math.floor(Math.random() * items.length);
  const selectedItem = items[randomIndex];

  // Assign the item to the defeated monster
  defeatedMonster.item = selectedItem;

  console.log("You found a " + selectedItem + " after defeating the " + defeatedMonster.name + "!");

  // Remove the assigned item from the items array
  items.splice(randomIndex, 1);

  // Add the item to the player's inventory
  player.inventory.push(selectedItem);
}


function removeMonster(defeatedMonster){
  // Find the index of the defeated monster
  const index = monsterArray.findIndex(monster => monster.name === defeatedMonster.name);
  if (index !== -1) {
    // Remove the defeated monster from the monsterArray
    monsterArray.splice(index, 1);
  }
}
        
        function run(currentMonster){
          var runDiceRoll = Math.floor(Math.random() * 2)
          console.log(runDiceRoll)
          
          if (runDiceRoll === 0 ){
            console.log("You have successfully escaped")
            
          } else if (runDiceRoll === 1){
            console.log("You have failed to escaped")
            
            combat(currentMonster)
            
          }
        }

// function start(){
    //   while (player.hp > 0) {
    //     const playerActions = ["Walk", "Check Inventory"]; // Define player actions
    //     const index = readlineSync.keyInSelect(playerActions, "What will you do?");
    
    //     if (index === 0) {
    //       // 'Walk' option selected
    //       console.log("You begin to walk");
    //       encounter();
    //     } else if (index === 1) {
    //       // 'Check Inventory' option selected
    //       console.log("You check your inventory");
    //       checkInventory();
    //     } else {
    //       // Player exited the menu or pressed an invalid key
    //       console.log("Your journey awaits");
    //       // Do something...
    //     }
    
    //     // Check if all monsters are defeated
    //     if (monsterArray.length === 0) {
    //       console.log("Congratulations! You have defeated all the monsters. You win!");
    //       break; // Exit the loop
    //     }
    //   }
    // }
    
    

    // function start(){
    //       const playerActions = ["Walk", "Check Inventory"]; // Define player actions
    //       const index = readlineSync.keyInSelect(playerActions, "What will you do?");
        
    //       if (index === 0) {
    //         // 'Walk' option selected
    //         console.log("You begin to walk");
    //         encounter();
    //       } else if (index === 1) {
    //         // 'Check Inventory' option selected
    //         console.log("You check your inventory");
    //         checkInventory();
    //       } else {
    //         // Player exited the menu or pressed an invalid key
    //         console.log("Your journey awaits");
    //         // Do something...
    //       }
    //     }

  // function assignItem(defeatedMonster){
//   // Get a random item
//   const randomIndex = Math.floor(Math.random() * items.length);
//   const selectedItem = items[randomIndex];

//   // Assign the item to the defeated monster
//   defeatedMonster.item = selectedItem;

//   console.log("You found a " + selectedItem + " after defeating the " + defeatedMonster.name + "!");

//   // Remove the assigned item from the items array
//   items.splice(randomIndex, 1);
// }   

        // function combat(currentMonster){
        //   console.log("You have entered the combat loop");
          
        //   while(player.hp > 0 && currentMonster.hp > 0){
        //     console.log("YOU ATTACK THE " + currentMonster.name);
        //     var newMonsterHp = currentMonster.hp - player.attackValue;
        //     currentMonster.hp = newMonsterHp;
        //     console.log("~ The " + currentMonster.name + "'s hp is now " + currentMonster.hp + " ~");
            
        //     if (currentMonster.hp <= 0) {
        //       console.log("The " + currentMonster.name + " has been defeated!");
        //       break;
        //     }
            
        //     console.log("THE " + currentMonster.name + " ATTACKS YOU");
        //     var newPlayerHp = player.hp - currentMonster.attackValue;
        //     player.hp = newPlayerHp;
        //     console.log("* Your hp is now " + player.hp + " *");
            
        //     if (player.hp <= 0) {
        //       console.log("You have been defeated by the " + currentMonster.name + "!");
        //       break;
        //     }
        //   }
        // }

        // function checkInventory(){
        //   console.log("Inventory:");
        //   player.inventory.forEach(item => console.log("- " + item));
        
        //   if(player.inventory.length === 0){
        //     console.log("Your inventory is empty.");
        //     return;
        //   }
        
        //   const selectedIndex = readlineSync.keyInSelect(player.inventory, "Choose an item to use:");
        
        //   if(selectedIndex === -1){
        //     console.log("You chose not to use any item.");
        //     return;
        //   }
        
        //   const selectedItem = player.inventory[selectedIndex];
        
        //   if(selectedItem === "Health Potion"){
        //     console.log("You use the Health Potion. It heals you for 20 HP.");
        //     player.hp += 20;
        //     console.log("Your HP is now: " + player.hp);
        //   } else if(selectedItem === "Sword"){
        //     console.log("You equip the Sword. Your attackValue is increased by 3.");
        //     player.attackValue += 3;
        //     console.log("Your attackValue is now: " + player.attackValue);
        //   } else if(selectedItem === "Shield"){
        //     console.log("You equip the Shield. It reduces damage from monster attacks by 2.");
        //     player.shieldEquipped = true;
        //   }
        // }

        // function combat(currentMonster){
        //   console.log("You have entered the combat loop");
        
        //   while(player.hp > 0 && currentMonster.hp > 0){
        //     console.log("YOU ATTACK THE " + currentMonster.name);
        //     var newMonsterHp = currentMonster.hp - player.attackValue;
        //     currentMonster.hp = newMonsterHp;
        //     console.log("~ The " + currentMonster.name + "'s hp is now " + currentMonster.hp + " ~");
        
        //     if (currentMonster.hp <= 0) {
        //       console.log("The " + currentMonster.name + " has been defeated!");
        //       // Find the index of the defeated monster
        //       const index = monsterArray.findIndex(monster => monster.name === currentMonster.name);
        //       if (index !== -1) {
        //         // Remove the defeated monster from the monsterArray
        //         monsterArray.splice(index, 1);
        //       }
        //       break;
        //     }
        
        //     console.log("THE " + currentMonster.name + " ATTACKS YOU");
        //     var newPlayerHp = player.hp - currentMonster.attackValue;
        //     player.hp = newPlayerHp;
        //     console.log("* Your hp is now " + player.hp + " *");
        
        //     if (player.hp <= 0) {
        //       console.log("You have been defeated by the " + currentMonster.name + "!");
        //       break;
        //     }
        //   }
        // }

          // function checkInventory(){
            //console.log("Inventory:");
            //player.inventory.forEach(item => console.log("- " + item));
        // }

        // function start(){
         
        //     if (readlineSync.keyInYN('Hello Slayer. Will you walk?')) {
        //         // 'Y' key was pressed.
        //         console.log("You begin to walk");
        //         encounter()
        //       } else {
        //         // Another key was pressed.
        //         console.log("Your journey awaits");
        //         //Change this to check your pack
        //         // Do something...
        //       }
        //     }
        
        
        // function combat(currentMonster){
          //   console.log("You have entered the combat loop")
          
        //   currentMonster = encounter()
      
        //   while(player.hp > 0 && currentMonster.hp > 0){
                      
        //           console.log("YOU ATTACK THE " + currentMonster.name)
        //           var newGoblinHp = currentMonster.hp - player.attackValue
        //           currentMonster.hp = newGoblinHp
        //           console.log("~ The goblin's hp is now " + currentMonster.hp + " ~")
                              
        //           console.log("THE " + currentMonster.name + " ATTACKS YOU")
        //           var newPlayerHp = player.hp - currentMonster.attackValue
        //           player.hp = newPlayerHp  
        //           console.log("* Your hp is now " + newPlayerHp + " *")
              
        //           // itemEffects()
                     
        //   }
        // }  

         //     function fightOrRun(){
    //       console.log("You have now entered the fightOrRun")
    //       let fightOptions = ["fight", "run"]
    //       let index = readlineSync.keyInSelect(fightOptions, "~~~ Will you fight or run? ~~~");
    //       console.log(index)
      
    //       if(index === 0){
    //           // Calculate monster and player hp
    //           console.log("You've selected fight")
    //           combat()
                  
    //       } else if(index === 1){
    //           console.log("You try to run")
    //           run()
    //       }
    // }


























