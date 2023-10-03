import React from "react"
import friends from "./friends"
import Friend from "./Friend"
//import Pet from "./Pet"

function App(){
    const friendList = friends.map((friend, index) => {
        return (
            <Friend
                key={index}    
                personsName={friend.name}
                age={friend.age}
                pets={friend.pets}
            />
        )
    })   
 
    return (
        <div>
            {friendList}
        </div>
    )

}

export default App;