window.onload = function() {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class ",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // Generador de índices aleatorios
  const indiceWho = Math.floor(Math.random() * who.length);
  const indiceAction = Math.floor(Math.random() * action.length);
  const indiceWhat = Math.floor(Math.random() * what.length);
  const indiceWhen = Math.floor(Math.random() * when.length);

  // Constructor de excusa aleatoria
  const excusa = `${who[indiceWho]} ${action[indiceAction]} ${what[indiceWhat]} ${when[indiceWhen]}`;

  // Establece la excusa en el innerHTML del elemento con id "excuse"
  document.getElementById("excuse").innerHTML = excusa;
};
