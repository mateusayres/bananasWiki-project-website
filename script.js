//Função Mudar de cor o fundo da pagina contato
function alterarCor(cor) {
    const corpoPagina = document.body;
    corpoPagina.style.background = 'none';
    corpoPagina.style.background = `linear-gradient(to right, ${cor}, ${cor})`;
}

//-------Pisca-Pisca todos cabeçalhos
function changeColor() {
    const box = document.getElementById('led-box');
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const alpha = Math.random();

    box.style.boxShadow = `0px 10px 15px rgba(${r}, ${g}, ${b}, ${alpha})`;

    setTimeout(changeColor, 1000); // Chama a função novamente após 1 segundo
}
// Inicia a animação do pisca-pisca
changeColor()

//OnClickHamburguer
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");

    var logoImg = document.querySelector(".logo_header2 img");
    if (logoImg) {
        if (logoImg.style.display === 'none') {
            logoImg.style.display = 'flex';
        } else {
            logoImg.style.display = 'none';
        }
    }
}

/*Função para validar umas coisas.
(Estava com problema do logo do cabeçalho sumir na hora errada, e aparecer na hora errada, e bugar com a troca
do @media screen and (max-width: 955px), essa foi a unica solução que deu certo.)*/
function validacao() {
    //Verificar e reverte as classes do hamburguer para sempre fechado pós redimencionar e carregar pagina
    var menuBar = document.getElementById("menu-bar");
    var nav = document.getElementById("nav");
    var menuBg = document.getElementById("menu-bg");

    if (menuBar.classList.contains("change")) {
        menuBar.classList.remove("change");
    }

    if (nav.classList.contains("change")) {
        nav.classList.remove("change");
    }

    if (menuBg.classList.contains("change-bg")) {
        menuBg.classList.remove("change-bg");
    }

    //Se Largura > 955px então .logo_header2 img:: display = none
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var logoElement = document.querySelector('.logo_header2 img');

    if (larguraTela > 955) {
        if (logoElement) {
            logoElement.style.display = 'none';
        }
    } else {
        if (logoElement) {
            logoElement.style.display = 'flex';
        }
    }
}
// Chama a função quando a página carregar e for redimencionada
window.onload = validacao;
window.onresize = validacao;

//Validação localStorage/DarkMod
//Função para alternar o modo escuro e salvar o estado no localStorage
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Verifica se o modo escuro está ativo e salva no localStorage
    const isDarkMode = element.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

// Verifica se há um estado salvo no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem("darkMode");

    if (isDarkMode === "true") {
        // Ativa o modo escuro se estiver salvo como "true"
        document.body.classList.add("dark-mode");
        // Ativa a Checkbox se o cookie estiver definido como "enabled"
        var checkbox = document.querySelector('.switch input[type="checkbox"]');
        checkbox.checked = true;
    }
});