const botoes = document.querySelectorAll(".accordion");
const paneis = document.querySelectorAll(".panel");

for (let i = 0; i < botoes.length; i++) {

    let numero = i;

    botoes[numero].onclick = function() {
        if(paneis[numero].style.display == "block") {
           paneis[numero].style.display = "none";
        } else {
            paneis[numero].style.display = "block"
        }
    }
}