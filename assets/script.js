function openAbacaxi() {
    var leftPos = (screen.width - 400) / 2;
    var topPos = (screen.height - 600) / 2;
    var popup = window.open('abacaxi.html', 'popup', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=400, height=600, top=' + topPos + ', left=' + leftPos);
  }
  
  function openMaracuja() {
    var leftPos = (screen.width - 400) / 2;
    var topPos = (screen.height - 600) / 2;
    var popup = window.open('maracuja.html', 'popup', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=400, height=600, top=' + topPos + ', left=' + leftPos);
  }
  function openMorango() {
    var leftPos = (screen.width - 400) / 2;
    var topPos = (screen.height - 600) / 2;
    var popup = window.open('morango.html', 'popup', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=400, height=600, top=' + topPos + ', left=' + leftPos);
  }
  // Seleciona o botão e o cartão
const cardButton = document.querySelector(".card-button");
const card = document.querySelector(".card");

// Adiciona um ouvinte de evento de clique ao botão
cardButton.addEventListener("click", function() {
  // Torna o cartão visível
  card.style.display = "block";
});
