function fase2batman() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Você ataca ataca sem nem pensar duas vezes, a oportunidade de sua vida está logo ali \n2. Você Escuta o Super Homem e bola um plano antes de atacar o assasino?"'
      );
  
      if (question == 1) {
        window.location.href = "../superhomem/superhomemgameoverpt1.html";
        break;
      } else if (question == 2) {
        window.location.href = "../batmam/batmanpt3.html";
        break;
      } else {
        alert("Faça uma escolha Sábia");
      }
    }
  }
  