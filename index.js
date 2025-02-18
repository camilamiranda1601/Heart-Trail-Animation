const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.pageX; // Usa pageX y pageY para capturar la posición correcta
    const yPos = event.pageY;

    const spanEl = document.createElement("span");

    const size = Math.random() * 100 + 30; // Tamaño entre 30px y 80px
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px"; // Agrega el mismo tamaño a la altura

    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    bodyEl.appendChild(spanEl);

    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
