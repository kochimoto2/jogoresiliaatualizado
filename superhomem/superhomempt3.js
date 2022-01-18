function fase3superhomem() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Sei que está blefando, eu e minha equipa não irá se segurar para ir pra cima de você! POW, POW, POW \n2. Sei o que guarda por debaixo dos panos, já me preparei para isso, irei colocar meu plano em ação. "Equipe Formação"'
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