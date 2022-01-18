function fase1batman() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Você vai atrás do vilão sozinho, afinal ele tirou  tudo de você \n2.Você investiga mais um pouco e espera por reforço, pois não sabe o que esperar?"'
      );
  
      if (question == 1) {
        window.location.href = "../superhomem/superhomemgameoverpt1.html";
        break;
      } else if (question == 2) {
        window.location.href = "../batmam/batmanpt2.html";
        break;
      } else {
        alert("Faça uma escolha Sábia");
      }
    }
  }
  