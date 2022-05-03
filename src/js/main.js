
function verBanderas() {
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

  const paises = [
    uruguay = {
      partidos : [
        {
          id: "pn-uy",
          nombre: "Partido Nacional",
          economic: 63,
          social: 77,
          dif: 0,
        },
        {
          id: "fa-uy",
          nombre: "Frente amplio",
          economic: 23,
          social: 69,
          dif: 0,
        },
        {
          id: "pc-uy",
          nombre: "Partido Colorado",
          economic: 55,
          social: 48,
          dif: 0,
        },
        {
          id: "ca-uy",
          nombre: "Cabildo Abierto",
          economic: 37,
          social: 33,
          dif: 0,
        },
        {
          id: "pi-uy",
          nombre: "Partido Independiente",
          economic: 42,
          social: 67,
          dif: 0,
        },
      ],
      checked : document.querySelector("#uruguay").checked
    },
    argentina = {
      partidos : [
        {
          id: "fdt-ar",
          nombre: "Frente de Todos",
          economic: 28,
          social: 52,
          dif: 0,
        },
        {
          id: "jxc-ar",
          nombre: "Juntos por el Cambio",
          economic: 71,
          social: 53,
          dif: 0,
        },
        {
          id: "cf-ar",
          nombre: "Consenso Federal",
          economic: 46,
          social: 42,
          dif: 0,
        },
        {
          id: "fitu-ar",
          nombre: "Frente de Izquierda",
          economic: 13,
          social: 76,
          dif: 0,
        },
        {
          id: "nos-ar",
          nombre: "Nos",
          economic: 86,
          social: 29,
          dif: 0,
        },
    
      ],
      checked : document.querySelector("#argentina").checked
    },
    chile = {
      partidos : [
        {
          id: "udi-ch",
          nombre: "Union Democrata Indpendiente",
          economic: 89,
          social: 32,
          dif: 0,
        },
        {
          id: "rn-ch",
          nombre: "Renovación Nacional",
          economic: 78,
          social: 50,
          dif: 0,
        },
        {
          id: "ps-ch",
          nombre: "Partido Socialista de Chile",
          economic: 22,
          social: 62,
          dif: 0,
        },
        {
          id: "pdc-ch",
          nombre: "Partido Demócrata Cristiano",
          economic: 52,
          social: 44,
          dif: 0,
        },
        {
          id: "ppd-ch",
          nombre: "Partido por la Democracia",
          economic: 36,
          social: 64,
          dif: 0,
        },
        {
          id: "evop-ch",
          nombre: "Evolución Política",
          economic: 87,
          social: 62,
          dif: 0,
        },
        {
          id: "pcch-ch",
          nombre: "Partido Comunista de Chile",
          economic: 8,
          social: 53,
          dif: 0,
        },
        {
          id: "frvs-ch",
          nombre: "Federación Regionalista Verde Social",
          economic: 37,
          social: 86,
          dif: 0,
        },
        {
          id: "plr-ch",
          nombre: "Partido Republicano de Chile",
          economic: 82,
          social: 11,
          dif: 0,
        },

       
      ],
      checked : document.querySelector("#chile").checked
    },
    mexico = {
      partidos : [
        {
          id: "pan-mx",
          nombre: "Partido Acción Nacional",
          economic: 86,
          social: 23,
          dif: 0,
        },
        {
          id: "pri-mx",
          nombre: "Partido Revolucionario Institucional",
          economic: 69,
          social: 41,
          dif: 0,
        },
        {
          id: "prd-mx",
          nombre: "Partido de la Revolución Democrática ",
          economic: 32,
          social: 87,
          dif: 0,
        },
        {
          id: "pt-mx",
          nombre: " Partido del Trabajo",
          economic: 12,
          social: 77,
          dif: 0,
        },
        {
          id: "pve-mx",
          nombre: "Partido Verde Ecologista de México ",
          economic: 63,
          social: 39,
          dif: 0,
        },
        {
          id: "mc-mx",
          nombre: "Movimiento Ciudadano ",
          economic: 41,
          social: 67,
          dif: 0,
        },
        {
          id: "morena-mx",
          nombre: "Movimiento de Regeneración Nacional",
          economic: 27,
          social: 54,
          dif: 0,
        },
       
      ],
      checked : document.querySelector("#mexico").checked
    },
    colombia = {
      partidos : [
        {
          id: "av-co",
          nombre: "Alianza Verde",
          economic: 32,
          social: 79,
          dif: 0,
        },
        {
          id: "polo-co",
          nombre: "Partido Revolucionario Institucional",
          economic: 12,
          social: 79,
          dif: 0,
        },
        {
          id: "up-co",
          nombre: "Unión Patriotica",
          economic: 8,
          social: 52,
          dif: 0,
        },
        {
          id: "plc-co",
          nombre: "Partido Liberal Colombiano",
          economic: 36,
          social: 52,
          dif: 0,
        },
        {
          id: "mira-co",
          nombre: "Movimiento Independiente de Renovación Absoluta",
          economic: 38,
          social: 14,
          dif: 0,
        },
        {
          id: "pcc-co",
          nombre: "Partido Conservador Colombiano ",
          economic: 53,
          social: 18,
          dif: 0,
        },
        {
          id: "cd-co",
          nombre: "Centro Democrático",
          economic: 67,
          social: 6,
          dif: 0,
        },
        {
          id: "cr-co",
          nombre: "Partido Cambio Radical",
          economic: 69,
          social: 22,
          dif: 0,
        },
        {
          id: "u-co",
          nombre: "Partido de la Unión por la Gente",
          economic: 73,
          social: 39,
          dif: 0,
        },
       
      ],
      checked : document.querySelector("#colombia").checked
    }
  ]

  let partidos = []

  paises.forEach((pais) => {
    if (pais.checked == true) {
      partidos = pais.partidos
    }
  })

  console.log(paises)
  console.log(partidos)
 
  const politicsFlags = document.querySelector("#politics-flags");
  
  partidos.forEach((partido) => {
    politicsFlags.innerHTML += `
    <img id=${partido.id} src="src/images/partidos/${partido.id}.png" />
  `;
  });
  
  const inputs = Array.from(document.querySelectorAll('.quest-input'));

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
    const pId = ("#" + partido.id);
    const idPartido = document.querySelector(pId);
    idPartido.style.left = partido.social + "%";
    idPartido.style.top = partido.economic + "%";
    partido.dif =
    Math.round(Math.abs(partido.economic - economic) + Math.abs(partido.social - social)) / 2;
  });

  partidos.sort((a, b) => a.dif - b.dif);

  partidos.forEach((partido) => {
    politics.innerHTML += `
    <div>
      <img id=${partido.id} src="src/images/partidos/${partido.id}.png">
      <div class="name-partido">
        <p> ${partido.nombre} (a ${partido.dif}%).</p>
      </div>
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
