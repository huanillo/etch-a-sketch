function createSquare(num){
    const grid = document.querySelector("#grid");
    clearGrid(); //clear the grid before adding new squares
    let squareSize = 960 / num;

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
    
    if (squares === null || isNaN(squares) || squares <= 0) {
        alert("Please enter a valid number.");
        return;
    }
    
    createSquare(Number(squares)); // Call to the function passing it the number of squares
});

function clearGrid() {
    const grid = document.querySelector("#grid");

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}
document.querySelectorAll(".square").forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.background = "rgb(59, 59, 59)";
    });
});
