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
        //add hover effect
        div.addEventListener("mouseover", () => {
        div.style.background = "rgb(59, 59, 59)";
        });
        grid.appendChild(div);
    }
}
document.querySelector("#askUser").addEventListener("click", () => {
    let squares = prompt("How many squares?");
    
    if (squares === null || isNaN(squares) || squares <= 0 || squares >= 100) {
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
document.querySelectorAll(".square").forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.background = "rgb(59, 59, 59)";
    });
});
