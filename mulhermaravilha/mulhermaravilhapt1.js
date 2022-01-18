function fase1mulhermaravilha() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Você aceita e sai da Super liga, deixando tudo para trás \n2. Você não aceita e vai contra tudo e todos, e tenta mostrar o seu valor?"'
      );
  
      if (question == 1) {
        window.location.href = "../superhomem/superhomemgameoverpt1.html";
        break;
      } else if (question == 2) {
        window.location.href = "../mulhermaravilha/mulhermaravilhapt2.html";
        break;
      } else {
        alert("Faça uma escolha Sábia");
      }
    }
  }
  