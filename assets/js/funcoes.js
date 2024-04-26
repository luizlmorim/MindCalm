function emocoes(valor) {

    let raiva_emoji = document.getElementById('raiva');
    let rv = raiva_emoji.value;

    let triste_emoji = document.getElementById('triste').value;
    let neutro_emoji = document.getElementById('neutro').value;
    let alegre_emoji = document.getElementById('alegre').value;

    let res = document.getElementById('res');

    

    switch (valor) {
        case "raiva":
            res.innerHTML = 'A <span style="color: red;">raiva</span>  é uma emoção intensa. Considere usar nosso <a href="diario.html">Diário de Emoções</a> para anotar o que está causando essa sensação.';
            break;
        case "triste":
            res.innerHTML = 'Às vezes, colocar os sentimentos no papel pode ajudar a aliviar a <span style="color: blue;">tristeza</span>. Use nosso <a href="diario.html">Diário de Emoções</a> para desabafar e refletir sobre o que está causando sua tristeza.';
            break;
        case "neutro":
            res.innerHTML = 'Quando você se sentir <span style="color: green;">apático</span> , não ignore seus sentimentos. Experimente usar nosso <a href="diario.html">Diário de Emoções</a> para se conectar consigo mesmo e encontrar maneiras de recarregar suas energias.';
            break;
        case "alegre":
            res.innerHTML = 'A <span style="color: orange ;">felicidade</span>  é para ser celebrada! Use nosso <a href="diario.html">Diário de Emoções</a> para capturar esses momentos de alegria e gratidão. Escreva sobre o que te faz sorrir e mantenha essas lembranças vivas.';
            break;
    }
}




