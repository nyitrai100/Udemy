
const drums = document.querySelectorAll(".drum").length;

for(let i= 0; i < drums ; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick)
}

function handleClick(onClick) {
   const audio = new Audio("./sounds/tom-1.mp3");
   audio.play();
}