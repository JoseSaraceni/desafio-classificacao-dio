function classHero() {
    // Captura os valores dos inputs somente quando o botão é clicado
    var nome = document.getElementById("nome").value;
    var xp = parseInt(document.getElementById("xp").value); // Converte XP para número
    var elo;

    // Verifica a classificação de acordo com o XP usando if/else ao invés de switch/case
    if (xp < 1000) {
        elo = "Ferro";
    } else if (xp >= 1000 && xp <= 2000) {
        elo = "Bronze";
    } else if (xp > 2000 && xp <= 5000) {
        elo = "Prata";
    } else if (xp > 5000 && xp <= 7000) {
        elo = "Ouro";
    } else if (xp > 7000 && xp <= 8000) {
        elo = "Platina";
    } else if (xp > 8000 && xp <= 9000) {
        elo = "Ascendente";
    } else if (xp > 9000 && xp <= 10000) {
        elo = "Imortal";
    } else if (xp > 10000) {
        elo = "Ascendente";
    }

    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = "O Herói " + nome + " é classificado como " + elo;
}