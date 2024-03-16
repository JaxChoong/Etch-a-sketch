const interface = document.querySelector("#interface")


// Creates initial 16x16 grid
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
    grid.style.backgroundColor = "green"
}


// Creates new grid with user specified size
const gridButton = document.querySelector("#gridButton")
let gridSize = 0
gridButton.addEventListener("click",()=>{
    
    do{
        gridSize = prompt("What size grid do you want? (Max 100)")
    }
    while (gridSize > 100|| gridSize < 1)

    if (gridSize){
        interface.innerHTML = '';
        //Creates grid with user size
        for(let i = 0; i< gridSize; i++){
            const row = document.createElement("div")
            for (let j = 0; j<gridSize ;j++){
                const grid = document.createElement("div")
                grid.classList.add("grid")
                row.appendChild(grid)  
            }
            interface.appendChild(row)
        }
        //Adds event listeners to new squares
        const squares = document.querySelectorAll(".grid")
        squares.forEach((square)=>{
        square.addEventListener("mouseover", ()=>{changeGridColor(square)})
        })
    }
})


