let cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];

function chauchat(cargador) {
  let disparos = 0;

  for (let i = 0; i < cargador.length; i++) {
    if (Math.random() < 0.8) {
      console.log("Illo, me he quedao pillá!");
      break;
    }
    disparos++;
    if (disparos % 3 === 0) {
      console.log("");
    }
  }
}

chauchat(cargador);
