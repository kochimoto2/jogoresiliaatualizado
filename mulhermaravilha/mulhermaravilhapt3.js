function fase3mulhermaravilha() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Você abandonada todos e segue o seu caminho sozinha \n2. Você continua com eles, pois juntos são mais fortes, e deixa tudo de lado"'
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
  