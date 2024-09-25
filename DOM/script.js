// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

let frase = [];
frase[0] = 'O sol brilha intensamente no céu azul.';
frase[1] = 'A brisa suave toca o rosto feliz.';
frase[2] = 'As flores no jardim estão em botão.';
frase[3] = 'Ele adora ler livros à noite tranquila.';
frase[4] = 'Crianças brincando no parque trazem alegria pura.';
frase[5] = 'A chuva caiu, deixando a cidade molhada.';
frase[6] = 'Amanhã é um novo dia para sonhar.';
frase[7] = 'A música tocava, animando a festa inteira.';
frase[8] = 'O cachorro correu livre pela praia ensolarada.';
frase[9] = 'Ela escreveu uma carta cheia de amor.';
frase[10] = 'O filme emocionante fez todos chorarem juntos.';
frase[11] = 'Amizades verdadeiras são preciosas e duradouras sempre.';
frase[12] = 'O café quente aqueceu suas mãos frias.';
frase[13] = 'Os pássaros cantavam alegremente na manhã fresca.';
frase[14] = 'Ele viajou pelo mundo em busca de aventuras.';

let mm1 = window.document.getElementById('m1');
let mm2 = window.document.getElementById('m2');
let mm3 = window.document.getElementById('m3');

let a = 0;
let b = 1;
let c = 2
function mudamuda(){
   
    mm1.innerText = frase[a];
    mm2.innerText = frase[b];
    mm3.innerText = frase[c];
    a++;
    b++;
    c++;
    if(a>15){
        a=0;
    }
    if(b>15){
        b=0;
    }
    if(c>15){
        c=0;
    }
}