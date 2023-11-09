var conteudos = [
  {
    titulo: "recebimento e baixa de boletos",
    texto: "Você pode receber os pagamentos dos seus boletos diretamente na sua conta bancária pelo app. Você também pode dar baixa manualmente nos boletos que foram pagos em outros meios, como dinheiro ou cheque.",
    imagem: "img/indicador.png"
  },
  {
    titulo: "notificações e lembretes",
    texto: "Você pode receber notificações e lembretes pelo app sobre os seus boletos, como confirmação de envio, aviso de vencimento, confirmação de pagamento e alerta de inadimplência.",
    imagem: "img/indicador (1).png"
  },
  {
    titulo: "interação com o sistema web",
    texto: "Você pode sincronizar os seus dados entre o app e o sistema online, mantendo as suas informações atualizadas em ambos os dispositivos. Você também pode acessar o seu painel de controle, os seus relatórios e gráficos pelo web.",
    imagem: "img/indicador (2).png"
  }
];

var index = 0;

function atualizarConteudo() {
  
  document.getElementById("title").textContent = conteudos[index].titulo;
  document.getElementById("text").textContent = conteudos[index].texto;
  document.getElementById("imagem").src = conteudos[index].imagem;

  index = (index + 1) % conteudos.length;
}

setInterval(atualizarConteudo, 5000);

const controls = document.querySelectorAll(".botoes");
let currentItem = 0;
const items = document.querySelectorAll(".avaliador");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }


    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      inline: "center",
      behavior: "smooth"
    });

    items[currentItem].classList.add("current-item");
  });
});

function mostrarTexto1() {
  var paragrafo = document.getElementById("resposta-1");
  paragrafo.textContent = 'Não! Você pode cancelar a hora que quiser e sem custo adicional nenhum. E se decidir voltar a futuramente, sua conta estará exatamente como você deixou.';
}

function remove1(){
  var paragrafo = document.getElementById("resposta-1");
  paragrafo.textContent = '';
}

function mostrarTexto2() {
  var paragrafo = document.getElementById("resposta-2");
  paragrafo.textContent = 'Explicação super importante e resumida sobre a duvida também importante mas que não sabemos qual é. Se souber, insira ela aqui!';
}

function remove2(){
  var paragrafo = document.getElementById("resposta-2");
  paragrafo.textContent = '';
}

function mostrarTexto3() {
  var paragrafo = document.getElementById("resposta-3");
  paragrafo.textContent = 'Explicação super importante e resumida sobre a duvida também importante mas que não sabemos qual é. Se souber, insira ela aqui!';
}

function remove3(){
  var paragrafo = document.getElementById("resposta-3");
  paragrafo.textContent = '';
}
