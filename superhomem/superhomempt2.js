function fase2superhomem() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Eu sou o homem mais forte do Mundo, não preciso reunir minha equipe, posso lidar com isso sozinho! TSC \n2. Prefiro chamar minha equipe do que perder novos reféns, pois daria a minha vida para salvar os habitantes da terra1'
      );
  
      if (question == 1) {
        window.location.href = "../superhomem/superhomemgameoverpt1.html";
        break;
      } else if (question == 2) {
        window.location.href = "../superhomem/superhomempt3.html";
        break;
      } else {
        alert("Faça uma escolha Sábia");
      }
    }
  }