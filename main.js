let contador = document.getElementById("contador")
contador.innerText = localStorage.getItem("contador") || "0";

function multiplicar() {
    contador.innerHTML = parseInt(contador.innerText) +1;
        salvarContador();
}
function subtrair() {
    contador.innerHTML = parseInt(contador.innerText) -1;
    salvarContador();
}
function zerar() {
    contador.innerHTML = "0";
    salvarContador();
}
function salvarContador() {
    localStorage.setItem("contador", contador.innerText)
}