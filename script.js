const containerDiv =document.querySelector("#container");

const generateRandomHexColor=() =>{
  const maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.floor(Math.random() * maxVal);
  let hexColor = randomNumber.toString(16);
  // Pad with leading zeros if the hex string is shorter than 6 characters
  return `#${hexColor.padStart(6, '0').toUpperCase()}`;
}

const grids =()=>{
    let size=prompt("Enter number of squares per side for your sketch",16);
    return Number(size)

}


const inputButton = document.querySelector("#inputButton")
inputButton.textContent="Click to Play"

const createGrid =(gridSize)=>{
    const totalSquares =gridSize*gridSize;
    containerDiv.innerHTML=""

    const itemWidth =100/gridSize

    for(let i=0;i<totalSquares;i++){
        const gridItem = document.createElement("div")
        gridItem.classList.add("grid-item")

        gridItem.style.flexBasis =`${itemWidth}%`

        gridItem.addEventListener("mouseover", function() {
                gridItem.style.backgroundColor = generateRandomHexColor();
            });


        containerDiv.appendChild(gridItem)
    }

}

inputButton.addEventListener("click",()=>{
    const gridSize =grids();
    let para =document.createElement("p")
    para.textContent="Move mouse inside square to play"
    document.body.appendChild(para)

    createGrid(gridSize)
})

