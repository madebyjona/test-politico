function verBanderas(banderas) {
  const politicsFlags = document.querySelector("#politics-flags");
  const buttonFlags = document.querySelector("#button-flags");
  if (buttonFlags.value == "ver") {
    politicsFlags.style.display = "block";
    buttonFlags.value = "ocultar";
    buttonFlags.innerHTML = "Ocultar en diagrama";
  } else {
    politicsFlags.style.display = "none";
    buttonFlags.value = "ver";
    buttonFlags.innerHTML = "Mostrar en diagrama";
  }
}

document.querySelectorAll(".quest-option").forEach((item) => {
  item.addEventListener("click", (event) => {
    var checked = document.querySelectorAll("input:checked");
    const progressBar = document.querySelector("#progress-bar");
    const progressPorcent = document.querySelector("#progress-porcent");
    let progress = checked.length * 5 + "%";
    progressBar.style.width = progress;
    progressPorcent.innerHTML = progress;
  });
});

function verResultado() {
  const partidos = [
    {
      id: pn,
      nombre: "Partido Nacional",
      imagen: "pn",
      economic: 63,
      social: 77,
      dif: 0,
    },
    {
      id: fa,
      nombre: "Frente amplio",
      imagen: "fa",
      economic: 23,
      social: 69,
      dif: 0,
    },
    {
      id: pc,
      nombre: "Partido Colorado",
      imagen: "pc",
      economic: 55,
      social: 48,
      dif: 0,
    },
    {
      id: ca,
      nombre: "Cabildo Abierto",
      imagen: "ca",
      economic: 37,
      social: 23,
      dif: 0,
    },
    {
      id: pi,
      nombre: "Partido Independiente",
      imagen: "pi",
      economic: 42,
      social: 67,
      dif: 0,
    },
  ];


  const inputs = Array.from(document.querySelectorAll('input[type="radio"]'));

  preguntas = []

  const respuestas = [];

  inputs.forEach((input) => {
    pregunta = {
      id: "",
      value: 0,
      checked: false
    }
    this.pregunta.id = input.id
    this.pregunta.value = input.value
    this.pregunta.checked = input.checked
    preguntas.push(pregunta)
    if (input.checked == true) {
      respuestas.push(input.labels[0].innerHTML)
    }
  })


  console.log(respuestas)

  const respuestasText = document.querySelector("#text-resp")

  respuestas.forEach((respuesta) => {
    respuestasText.innerHTML += `
    <li>
      ${respuesta}
    </li>
  `;
  });



  const inputsX = preguntas.slice(0, 30);
  const inputsY = preguntas.slice(30, 60);

  const respuestasX = [];
  const respuestasY = [];

  inputsX.forEach((pregunta) => {
    if (pregunta.checked == true) {
      respuestasX.push(pregunta.value)
    }
  })

  inputsY.forEach((input) => {
    if (input.checked == true) {
      respuestasY.push(input.value)
    }
  })

  const xA = respuestasX.filter((element) => element == "a");
  const xC = respuestasX.filter((element) => element == "c");

  const yA = respuestasY.filter((element) => element == "a");
  const yC = respuestasY.filter((element) => element == "c");

  let social = 50;
  let economic = 50;

  if (respuestasX.length != 0) {
    social = Math.round(
      (xC.length - xA.length + respuestasX.length) *
      (100 / (respuestasX.length * 2)));
  }

  if (respuestasY.length != 0) {
    economic = Math.round(
      (yC.length - yA.length + respuestasY.length) *
      (100 / (respuestasY.length * 2)));
  }

  const ideologias = [];

  const totalitarista = [
    "Totalitarista",
    "Los totalitarios creen que el Estado debe regir sobre todas o casi todas las cuestiones, anteponiendo siempre el bien común al individual.",
  ];
  const conservador = [
    "Conservador",
    "Los conservadores piensan que el Estado debe garantizar un cierto orden social a la vez que la economía debe dsifrutar de poca regulación.",
  ];
  const progresista = [
    "Progresista",
    "Los progresistas creen que el Estado debe corregir los defectos de la economía y avanzar hacia una sociedad con menos restricciones morales.",
  ];
  const liberal = [
    "Liberal",
    "Los liberales creen que el Estado debe tener unas funciones limitadas, anteponiendo la libertad individual tanto en lo económico como en lo concerniente a las libertades personales.",
  ];
  const centro = [
    "Centro",
    "Los centristas comparten características con otras ideologías, prefiriendo una combinación equilibrada entre Estado y libertad individual.",
  ];

  if ((economic <= 50) & (social <= 50) & (economic + social <= 70)) {
    ideologias.push(totalitarista);
  }

  if (
    economic >= 50 &&
    (100 - social >= 50) & (economic + (100 - social) >= 130)
  ) {
    ideologias.push(conservador);
  }

  if (
    economic <= 50 &&
    (100 - social <= 50) & (economic + (100 - social) <= 70)
  ) {
    ideologias.push(progresista);
  }

  if ((economic >= 50) & (social >= 50) & (economic + social >= 130)) {
    ideologias.push(liberal);
  }

  if (
    (economic >= 20 && economic <= 80 && social == 50) ||
    (economic >= 25 && economic <= 75 && social >= 45 && social >= 55) ||
    (economic >= 30 && economic <= 70 && social >= 40 && social >= 60) ||
    (economic >= 35 && economic <= 65 && social >= 35 && social >= 65) ||
    (economic >= 40 && economic <= 60 && social >= 30 && social >= 70) ||
    (economic >= 45 && economic <= 55 && social >= 25 && social >= 75) ||
    (economic == 50 && social >= 20 && social <= 80)
  ) {
    ideologias.push(centro);
  }

  const ideologiasTitles = [];
  const ideologiasDescs = [];

  ideologias.forEach((ideologia) => {
    ideologiasTitles.push(ideologia[0]);
    ideologiasDescs.push(ideologia[1]);
  });

  const ideologiaTitle = document.querySelector("#ideologia-title");
  const ideologiaDesc = document.querySelector("#ideologia-desc");

  ideologiasTitles.forEach((itemTitle) => {
    ideologiaTitle.innerHTML += `
      <span>${itemTitle}</span>
    `;
  });

  ideologiasDescs.forEach((itemDesc) => {
    ideologiaDesc.innerHTML += `
      <p>${itemDesc}</p>
    `;
  });

  const politics = document.querySelector("#politics");

  partidos.forEach((partido) => {
    const idPartido = partido.id;
    idPartido.style.left = partido.social + "%";
    idPartido.style.top = partido.economic + "%";
    partido.dif =
    Math.round(Math.abs(partido.economic - economic) + Math.abs(partido.social - social)) / 2;
  });

  partidos.sort((a, b) => a.dif - b.dif);

  partidos.forEach((partido) => {
    politics.innerHTML += `
    <div>
      <img src="../src/images/${partido.imagen}.png">
      <p> ${partido.nombre} (a ${partido.dif}%).</p>
    </div>
  `;
  });

  const ecoPor = economic + "%";
  const socPor = social + "%";

  const target = document.querySelector("#target");

  target.style.left = socPor;
  target.style.top = ecoPor;

  const arrowLeft = document.querySelector("#arrow-left");
  const arrowTop = document.querySelector("#arrow-top");

  arrowLeft.style.left = socPor;
  arrowTop.style.top = ecoPor;

  const barSocial = document.querySelector("#barSocial");
  const barEconomic = document.querySelector("#barEconomic");

  barSocial.style.width = socPor;
  barEconomic.style.width = ecoPor;

  document.querySelector("#percentSocial").textContent = socPor;
  document.querySelector("#percentEconomic").textContent = ecoPor;

  const quest = document.querySelector("#quest");
  const result = document.querySelector("#result");

  quest.style.display = "none";
  result.style.display = "grid";
}
