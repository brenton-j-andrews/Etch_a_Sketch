// "Constants" that can be changed by user.
// let count = Number(document.querySelector("#pixel_input").value);
let pixel_count = 16;
let pixel_width = 800 / pixel_count;
console.log(pixel_width);


let container = document.querySelector(".container");

// Initialize blank grid upon start and when "reset" button is pressed.
function createBlankGrid() {
    // Clear container elements before drawing / redrawing.
    container.innerHTML = "";
    for (let i = 0; i < pixel_count; i++) {
        for (let j = 0; j < pixel_count; j++) {
            let cell = document.createElement("div");
            cell.addEventListener("mouseover", function(event) {
                cell.classList.add("hovered");
            });
            cell.className = "cell";
            cell.style.width = pixel_width + "px";
            cell.style.height = pixel_width+ "px";
            container.appendChild(cell);
        }
    }
}

// function reset() clears the current sketch, prompts for new pixel count input and
// calls createBlankGrid().
function reset() {
    pixel_count = Number(prompt(`Enter pixel count, current is ${pixel_count}: `, pixel_count));
    pixel_width = 800 / pixel_count;
    console.log(pixel_count, pixel_width);
    createBlankGrid();
}

createBlankGrid();
let reset_button = document.querySelector("#reset_button");
reset_button.addEventListener("click", reset);

