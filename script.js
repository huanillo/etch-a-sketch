function createSquare(num){
    const grid = document.querySelector("#grid");
    clearGrid(); //clear the grid before adding new squares
    let squareSize = 960 / num; //adjust the size depending of the num of squares

    for (let i = 0; i < num * num ; i++){
        // create a new div element
        const div = document.createElement("div");
        div.className = "square";
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.style.backgroundColor = "black";
        div.style.opacity = "0"; // Starting opacity 0
        //add hover effect
        div.addEventListener("mouseover", () => {
            let currentOpacity = parseFloat(div.style.opacity) || 0; // If there is no opacity, starts in 0

            if (currentOpacity < 1) {
                div.style.opacity = currentOpacity + 0.1; // Increments 0.1
            }
        });
        grid.appendChild(div);
    }
}
document.querySelector("#askUser").addEventListener("click", () => {
    let squares = prompt("How many squares per side?");
    
    if (squares === null || isNaN(squares) || squares <= 0 || squares > 100) {
        alert("Please enter a valid number (1-100).");
        return;
    }
    // Call to the function passing it the number of squares
    createSquare(Number(squares)); 
});

function clearGrid() {
    const grid = document.querySelector("#grid");
    // Cleans until there is no more "child", so there are no more squares to clean
    while (grid.firstChild) { 
        grid.removeChild(grid.firstChild);
    }
}

createSquare(16); // Creates an initial 16x16 grid
