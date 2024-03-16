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
    square.addEventListener("mouseover", ()=>{
        
        changeGridColor(square)
    })
})


function darkenColor(color) {
    // Remove "rgb(" and ")" from the color string
    const rgbValues = color.substring(4, color.length - 1).split(",");

    // Change rgb values to integers
    let r = parseInt(rgbValues[0]);
    let g = parseInt(rgbValues[1]);
    let b = parseInt(rgbValues[2]);
    
    // Darken each color by 10% (so it only takes 10 times before it turns black)
    r = Math.max(0, Math.floor(r * 0.9));
    g = Math.max(0, Math.floor(g * 0.9));
    b = Math.max(0, Math.floor(b * 0.9));
    
    // Construct and return the new color string
    return `rgb(${r}, ${g}, ${b})`;
}

function changeGridColor(grid){
    if(!grid.style.backgroundColor){
        const r =  Math.floor(Math.random() * 256);
        const g =  Math.floor(Math.random() * 256)
        const b =  Math.floor(Math.random() * 256)

        grid.style.backgroundColor = `rgb(${r},${g},${b})`
    }
    else{
        grid.style.backgroundColor = darkenColor(grid.style.backgroundColor)
        console.log(`${grid.style.backgroundColor}`)
    }
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
        square.addEventListener("mouseover", ()=>{
            changeGridColor(square)})
        })
    }
})


