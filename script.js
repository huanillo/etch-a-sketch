function createSquare(num){
    const grid = document.querySelector("#grid");
    for (let i = 0; i < num; i++){
        // create a new div element
        const div = document.createElement("div");
        div.className = "square";
        grid.appendChild(div);
    }
}
document.querySelector("#askUser").addEventListener("click", () => {
    let squares = prompt("How many squares?");
    
    if (squares === null || isNaN(squares) || squares <= 0) {
        alert("Please enter a valid number.");
        return;
    }
    
    createSquare(Number(squares)); // Llamamos a la función pasando el número
});

