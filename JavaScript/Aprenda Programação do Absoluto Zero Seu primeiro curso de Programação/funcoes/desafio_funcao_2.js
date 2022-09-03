function conceitoNota(nota) {
  let conceito = "";
  switch (Math.ceil(nota)) {
    case 10:
      conceito = "A+";
      break;
    case 9:
      conceito = "A";
      break;
    case 8:
      conceito = "B+";
      break;
    case 7:
      conceito = "B";
      break;
    case 6:
      conceito = "C+";
      break;
    case 5:
      conceito = "C";
      break;
    case 4:
      conceito = "D+";
      break;
    case 3:
      conceito = "D";
      break;
    case 2:
      conceito = "E+";
      break;
    case 1:
      conceito = "E";
      break;
    case 0:
      conceito = "F";
      break;
    default:
      conceito = null;
  }
  return conceito;
}

console.log(conceitoNota(6.4));
