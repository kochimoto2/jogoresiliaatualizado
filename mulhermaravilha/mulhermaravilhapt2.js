function fase2mulhermaravilha() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Você vai na tal missão sozinha, afinal você é a mulher que tem que provar o seu valor \n2. Você não aceita, pois a missão é perigosa, poderia colocar sua vida em risco, e você não precisa provar nada para ninguém?"'
      );
  
      if (question == 1) {
        window.location.href = "../superhomem/superhomemgameoverpt1.html";
        break;
      } else if (question == 2) {
        window.location.href = "../mulhermaravilha/mulhermaravilhapt3.html";
        break;
      } else {
        alert("Faça uma escolha Sábia");
      }
    }
  }
  