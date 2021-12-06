// "Constants" that can be changed by user.
let count = Number(document.querySelector("#pixel_input").value);
console.log(typeof(count));
let pixel_count = count;
let pixel_width = 800 / pixel_count;
console.log(pixel_width);


let container = document.querySelector(".container");
for (let i = 0; i < pixel_count; i++) {
    for (let j = 0; j < pixel_count; j++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = pixel_width + "px";
        cell.style.height = pixel_width+ "px";
        cell.textContent = "a";
        container.appendChild(cell);
    }
}