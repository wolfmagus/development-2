//Create a form object linked to addItem by name
const form = document.addItem

//Listen for submit event
form.addEventListener("submit", function(event){
    event.preventDefault()

    //Save the value entered. Then clear the value from box after entered.
    // Input box named title becomes a JS object.
    const inputBox = document.getElementById("title")
    //Variable todoText is equal to whatever value is entered into the input box.
    const todoText = inputBox.value
    
    addItemToList(todoText)
    form.title.value = ""
})

     //Adds an item to the list.
function addItemToList(item) {
    
    //Create a variable called grocery and give it a newly created li element.
    const list = document.getElementById("list")
    const grocery = document.createElement("li")
    const deleteButton = document.createElement("button")
    const editButton = document.createElement("button")
    
    //Assign the attribute value as the content of grocery. 
    grocery.textContent = item 
    list.className = "list";
    deleteButton.textContent = "Delete";
    deleteButton.id = "delete-button";
    editButton.textContent = "Edit";
    editButton.id = "edit-button";

    
    deleteButton.addEventListener("click", function(event) {
        event.preventDefault()
        removeItem()
    })

//=========================START HERE======================================
    editButton.addEventListener("click", function (event) {
        event.preventDefault();
        editItem()
    });

    function editItem() {
        // Part 1 - ELEMENT CREATION
        // Create input box, assign id
        const saveBox = document.createElement("input");
        saveBox.id = "save-box";
    
        // Create button, assign text, assign id
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.id = "save-button";
    
        // PART 2 - CONDITIONAL
        // Check if input box and button are already present
        const existingSaveBox = document.getElementById("save-box");
        const existingSaveButton = document.getElementById("save-button");
    
        // Create an input box if it doesn't exist
        if (!existingSaveBox) {
            document.getElementById("list").appendChild(saveBox);
        }
    
        // Create a button called save if it doesn't exist
        if (!existingSaveButton) {
            document.getElementById("list").appendChild(saveButton);
            // Add event listener for the save button
            saveButton.addEventListener("click", function (event) {
                event.preventDefault();
                // Replace the original value with the value in the save box
                grocery.textContent = saveBox.value;
                // Remove the save button and save box
                saveButton.remove();
                saveBox.remove();
                grocery.append(deleteButton);
                grocery.append(editButton);
            });
        }
    }

    //Get the element with the id add-todo and append li to the list in the DOM. 
    document.getElementById("list").appendChild(grocery)
    grocery.append(deleteButton)
    grocery.append(editButton)// Step 12

    function removeItem(){
        grocery.remove()
    }

}

// form.addEventListener("click", function(event){
//     event.preventDefault()
//     removeItem()
    
// })

//Version 1
    // editButton.addEventListener("click", function(event) {
    //     event.preventDefault()
    //     console.log("Edit button was clicked")
    // })

//Version 2
    // editButton.addEventListener("click", function(event) {
    //     event.preventDefault()
    //     const saveBox = document.getElementById("title")
    //     // const editText = saveBox.value

    //     const saveButton = document.createElement("button")
    //     saveButton.textContent = "Save";
    //     saveButton.id = "save-button";

    //     if(editButton){
    //         //conditionally render an input box
    //         //conditionally render a button called save
    //         saveBox
    //         saveButton

    //     } else(saveButton)
    // })

    //Version 3
    // editButton.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     const saveBox = document.createElement("input"); // Create an input box
    //     saveBox.id = "save-box";
    
    //     const saveButton = document.createElement("button");
    //     saveButton.textContent = "Save";
    //     saveButton.id = "save-button";
    
    //     if (!saveBox.parentNode) {
    //         // Conditionally render an input box if it doesn't exist
    //         document.getElementById("list").appendChild(saveBox);
    //     }
    
    //     if (!saveButton.parentNode) {
    //         // Conditionally render a button called save if it doesn't exist
    //         document.getElementById("list").appendChild(saveButton);
    //     }
    // });

    //Version 4
    // editButton.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     const saveBox = document.createElement("input"); // Create an input box
    //     saveBox.id = "save-box";
    //     const saveText = saveBox.value
    
    //     const saveButton = document.createElement("button");
    //     saveButton.textContent = "Save";
    //     saveButton.id = "save-button";
    
    //     if (!saveBox.parentNode) {
    //         // Conditionally render an input box if it doesn't exist
    //         document.getElementById("list").appendChild(saveBox);
    //     }
    
    //     if (!saveButton.parentNode) {
    //         // Conditionally render a button called save if it doesn't exist
    //         document.getElementById("list").appendChild(saveButton);
    //     }
    // });



