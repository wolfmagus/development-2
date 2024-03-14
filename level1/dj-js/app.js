var box = document.getElementById('box')

box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "blue"
}) 

box.addEventListener("mousedown", function(){
    box.style.backgroundColor = "red"
})

box.addEventListener("click", function(){
    box.style.backgroundColor = "yellow"
})

box.addEventListener("dblclick", function(){
    box.style.backgroundColor = "green"
})

box.addEventListener("mouseout", function(){
    box.style.backgroundColor = "orange"
})

//removed .which
window.addEventListener("keydown", function(event){
    let keyPressed = event.key
    if(keyPressed === "b"){
        box.style.backgroundColor = "blue"
    } else if(keyPressed === "r"){
        box.style.backgroundColor = "red"
    } else if(keyPressed === "y"){
        box.style.backgroundColor = "yellow"
    } else if(keyPressed === "g"){
        box.style.backgroundColor = "green"
    }else if(keyPressed === "o"){
        box.style.backgroundColor = "orange"
    }
})