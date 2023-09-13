


for(let i= 0; i < 7; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick)
}

function handleClick(onClick) {
    alert("i got clicked")
}