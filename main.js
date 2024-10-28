let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const palpites = document.querySelector('.palpites');
    const ultimoResultado = document.querySelector('.ultimoResultado');
    const baixoOuAlto = document.querySelector('.baixoOuAlto');
    const envioPalpite = document.querySelector('.envioPalpite');
    const campoPalpite = document.querySelector('.campoPalpite');
    let contagemPalpites = 1;
    let botaoReiniciar;

    function verificarPalpite() {
        const palpiteUsuario = Number(campoPalpite.value);
        if (contagemPalpites === 1) {
          palpites.textContent = "Palpites anteriores: ";
}

    palpites.textContent += palpiteUsuario + " ";

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabéns! Você acertou!";
        ultimoResultado.style.backgroudColor = "green";
        baixoOuAlto.textContent = "";
        finalizarjogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = "FIM DE JOGO!!!";
        baixoOuAlto.textContent = "";
        finalizarjogo();
    } else {
        ultimoResultado.textContent = "Errado";
        ultimoResultado.style.backgroudColor = "red";
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = "O ultimo palpite foi muito baixo";
    } else if (palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent =  "O ultimo palpite foi muito alto";
    }
} 

contagemPalpites++;
campoPalpite.value = "";
campoPalpite.focus();
    }

envioPalpite.addEventListener('click', verificarPalpite);

function finalizarjogo() {
    campoPalpite.disable = true;
    envioPalpite.disable = true;
    botaoReiniciar = document.createElement('button');
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.addEventListener('click', reiniciarJogo);
}


function reiniciarJogo() {
    contagemPalpites = 1;
    const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultado p');
    for (const paragrafoReiniciar of paragrafoReiniciar) {
        paragrafoReiniciar.textContent = "";
}

botaoReiniciar.parentNode.removeChild(botaoReiniciar);
campoPalpite.disable = false;
envioPalpite = false;
campoPalpite.value = "";
campoPalpite.focus();
ultimoResultado.style.backgroudColor = 'white';
numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}