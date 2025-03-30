
window.onload = function() {

  let first = "Un ";
  let adj = ["dos cabezas ", "nuclear ", "enojada ", "solitaria ", "loca ", "brillante ", "hedionda ", "lenta ", "vieja "];
  let noun = ["corredor ", "mapache ", "perro ", "comerciante ", "taxista ", "comediante ", "ingeniero "];
  let action = ["se comio ", "tiro ", "grito a ", "pateo ", "robo ", "quemo ", "mordio ", "golpeo "];
  let possetion = ["mi dedo del pie ", "mi coche ", "mi reloj ", "mi zapato ", "mi billetera ", "mi camisa ", "mis llaves ", "mi computadora ", "mi telefono ", "mi sandwich "];
  let where = ["en la calle", "en mi casa", "en mi cochera", "delante de la oficina", "cerca del centro comercial", "cerca del baño", "en la parada del autobus"];

  // declaring random variables
  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML = first + noun[rdm2] + adj[rdm1] + action[rdm3] + possetion[rdm4] + where[rdm5];
  
};
