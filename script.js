const interface = document.querySelector("#interface")



for(let i = 0; i< 16; i++){
    const row = document.createElement("div")
    for (let j = 0; j<16 ;j++){
        const grid = document.createElement("div")
        grid.classList.add("grid")
        row.appendChild(grid)  
    }
    interface.appendChild(row)
}


const squares = document.querySelectorAll(".grid")
squares.forEach((square)=>{
    square.addEventListener("mouseover", ()=>{changeGridColor(square)})
})

function changeGridColor(grid){
    console.log("abuneneh")
    grid.style.backgroundColor = "green"
}
