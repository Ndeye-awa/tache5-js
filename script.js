// ---------------------Exercice 1-----------------------------

document.getElementById("bouton").addEventListener("click", function () {
  const input = document.getElementById("recherche").value.trim().toLowerCase();
  const resultat = document.getElementById("resultat");
  let definition = "";

  switch (input) {
    case "for":
      definition =
        "Une boucle for répète des instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée.";
      break;
    case "while":
      definition =
        "Une instruction while permet d'exécuter une instruction tant qu'une condition donnée est vérifiée.";
      break;
    case "do-while":
      definition =
        "L'instruction do-while permet de répéter un ensemble d'instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée.";
      break;
    default:
      definition =
        "ce type de boucle n'existe pas. Veuillez entrer 'for', 'while', ou 'do-while'.";
  }
  resultat.textContent = definition;
});

// ------------------------EXERCICE 2-------------------------

document.getElementById('formTable').addEventListener('submit', function(event) {
    event.preventDefault();
    let nombreEntier = document.getElementById('nombreEntier').value;
    let nombre = parseInt(nombreEntier);

    while (isNaN(nombre) || !Number.isInteger(nombre)) {
        nombreEntier = prompt('Veuillez entrer un nombre entier:');
        nombre = parseInt(nombreEntier);
    }

    let tableMultiplication = document.getElementById('tableMultiplication');
    tableMultiplication.innerHTML = '';

        let table = document.createElement('table');
        table.classList.add('multiplication-table');
        let caption = table.createCaption();
        caption.innerText = `Table de multiplication de ${nombre}`;
        for (let i = 1; i <= 10; i++){
            let row = table.insertRow();
            let cell = row.insertCell();
                cell.innerText = `${nombre} x ${i} = ${nombre * i}`;

        }
        tableMultiplication.appendChild(table);
    
})