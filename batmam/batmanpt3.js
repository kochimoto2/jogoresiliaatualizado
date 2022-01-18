function fase3batman() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Você ataca o Super Homem, colocando um fim na parceira de vocês dois\n2. Você deixa isso pra lá, afinal era o melhor a se fazer naquelas condições?"'
      );
  
      if (question == 1) {
        window.location.href = "../superhomem/superhomemgameoverpt1.html";
        break;
      } else if (question == 2) {
        window.location.href = "../finalfeliz/finalfelizpt1.html";
        break;
      } else {
        alert("Faça uma escolha Sábia");
      }
    }
  }
  