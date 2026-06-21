const container = document.querySelector("#container");
const button = document.querySelector("#new-grid");



function createGrid(size) {
    for(let i= 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.interactions = 0;
        square.classList.add("square");
        square.style.width = `${960/size}px` ;
        square.style.height = `${960/size}px`;
        
        container.appendChild(square);
        square.addEventListener("mouseenter", () => {
            if (square.interactions < 10) {
                square.interactions++;
            }
            //const r = Math.floor(Math.random() * 256);
            //const g = Math.floor(Math.random() * 256);
            //const b = Math.floor(Math.random() * 256);

            const opacity = square.interactions / 10;

            square.style.backgroundColor = "black";
            square.style.opacity = opacity;
            //square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            
        });
    }
}

button.addEventListener("click", () => {
    const size = Number(prompt("Ingrese el tamaño de la grilla:"));
    
    if (size > 0 && size <= 100) {
        container.innerHTML = "";
        createGrid(size);
    } else {
        alert("error ingrese un numero valido")
    }
});

createGrid(16);