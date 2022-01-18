function fase1superhomem() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Você ataca o vilão sem pensar na tentativa de salvar todos os reféns \n2. "Você tem cautela para atacar o vilão, mas sacrifica a vida de alguns reféns para salvar a terra?"'
      );
  
      if (question == 1) {
        window.location.href = "../superhomem/superhomemgameoverpt1.html";
        break;
      } else if (question == 2) {
        window.location.href = "../superhomem/superhomempt2.html";
        break;
      } else {
        alert("Faça uma escolha Sábia");
      }
    }
  }
  