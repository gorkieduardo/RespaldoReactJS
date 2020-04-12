export function nCalcularTotal(cantidad, tasa, plazo, modelo) {
  let nModelo;

  switch (modelo) {
    case 1:
      nModelo = cantidad * tasa * plazo;
      break;
    case 2:
      nModelo = cantidad * Math.pow(tasa / 100 + 1, plazo);
      break;
    //(cantidad/(Math.pow((tasa*100+1),plazo)));
    case 3:
      nModelo = cantidad / Math.pow(tasa / 100 + 1, plazo);
      break;
    case 4:
      nModelo =
        (Math.pow(tasa / 100 + 1, plazo) - 1) * 100 +
        "  Este valor corresponde a la tasa efectiva";
      break;
    default:
      break;
  }
  return nModelo;
}
