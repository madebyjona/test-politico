const quests = [
  {
    title: "Pregunta 1: Libertad de expresión",
    id: "q1",
    image: "censura",
    label:
      "Algunos individuos y medios de comunicación difunden con facilidad opiniones equivocadas con objetivos cuestionables.",
    o1: "Debe prohibirse la difusión de opiniones equivocadas cuyo objetivo sea manipular y/o influir en los demás.",
    o2: "Debe prohibirse la realización de apologías de ideologías extremas.",
    o3: "No debe haber censura de opiniones por parte del Estado en ningún caso.",
  },
  {
    title: "Pregunta 2: Religión",
    id: "q2",
    image: "religion",
    label: "La Iglesia realiza ciertas labores de carácter social. Por ello...",
    o1: "El Estado debe contribuir a la financiación de la Iglesia, y tener en cuenta sus valores a la hora de legislar.",
    o2: "El Estado debe ser aconfesional, aunque puede contribuir a la financiación de la Iglesia para sostener su labor social en colegios concertados, centros de asistencia, etc…",
    o3: "La Iglesia debe autofinanciarse, y estar en igualdad de condiciones con cualquier otra asociación. El Estado debe permanecer laico.",
  },
  {
    title: "Pregunta 3: Servicio Militar",
    id: "q3",
    image: "ejercito",
    label:
      "La defensa del país corresponde a quienes prestan Servicio Militar en los ejércitos.",
    o1: "El Servicio Militar debe ser obligatorio como forma de contribuir al bien común y/o a la formación de los jóvenes.",
    o2: "El Servicio Militar debe ser voluntario. Es el mejor modo de tener un ejército profesional y preparado para defender nuestros intereses y compromisos en el exterior.",
    o3: "El Servicio Militar debería ser voluntario en caso de existir ejército, y de ser así, su naturaleza debería limitarse a sus funciones más esenciales de defensa.",
  },
  {
    title: "Pregunta 4: Sexo",
    id: "q4",
    image: "prostitucion",
    label:
      "Las relaciones sexuales entre adultos que consienten son un asunto de la esfera privada de las personas. Sin embargo…",
    o1: "Conductas como la homosexualidad, la poligamia o la prostitución deben prohibirse o estar fuertemente controladas. ",
    o2: "La prostitución debe prohibirse o estar fuertemente controlada. ",
    o3: "Las leyes no deben entrometerse en las relaciones sexuales entre adultos que consientan, en ningún caso.",
  },
  {
    title: "Pregunta 5: Drogas",
    id: "q5",
    image: "drogas",
    label: "Las drogas suponen un drama para muchas familias.",
    o1: "El Estado debería combatir el tráfico de drogas con más medios y de un modo más eficaz. ",
    o2: "El uso de algunas de las drogas prohibidas actualmente debería ser legal, aunque debería controlarse su distribución. ",
    o3: "Deberían legalizarse las drogas, despenalizando su uso y liberalizando su distribución.",
  },
  {
    title: "Pregunta 6: Seguridad",
    id: "q6",
    image: "seguridad",
    label:
      "La toma de medidas preventivas puede suponer una mejora de la seguridad ciudadana. Sin embargo, en muchos casos éstas chocan con algunos derechos individuales, como el derecho a la intimidad.",
    o1: "La seguridad de todos está por encima de los derechos de uno solo; Las fuerzas de seguridad del Estado no deben ver su función entorpecida porque un posible criminal se ampare en sus derechos individuales.",
    o2: "Las leyes y el poder judicial deben establecer en qué casos se puede anteponer el uso de medidas preventivas de seguridad a ciertos derechos individuales y en qué casos no.",
    o3: "El Estado no debe vulnerar ningún derecho individual por motivos de seguridad.",
  },
  {
    title: "Pregunta 7: Discriminación",
    id: "q7",
    image: "discriminacion",
    label:
      "En ciertas instituciones, grupos o profesiones, existe disparidad entre el número de hombres y mujeres, o entre distintas razas o grupos sociales.",
    o1: "Las cuotas obligatorias son el mejor instrumento para remediar las situaciones de discriminación histórica.",
    o2: "Las ayudas para la integración o los beneficios fiscales a los grupos menos representados son el mejor instrumento para paliar la discriminación.",
    o3: "Cualquier tipo de imposición o beneficio basado en criterios de sexo, raza o grupo social, viola el principio de igualdad ante la ley, y no debe ser impuesto por el Estado. ",
  },
  {
    title: "Pregunta 8: Inmigración",
    id: "q8",
    image: "inmigracion",
    label: "Las fronteras se utilizan para controlar la inmigración.",
    o1: "Hay que limitar decididamente la entrada de nuevos inmigrantes y/o expulsar a aquellos que no se integren.",
    o2: "El Estado debe regular la inmigración para permitir que los inmigrantes necesarios vengan de un modo legal.",
    o3: "No debe haber diferencias de derechos en función del lugar de nacimiento o nacionalidad.",
  },
  {
    title: "Pregunta 9: Nación",
    id: "q9",
    image: "nacion",
    label: "El Estado moderno suele ir aparejado al concepto de una nación.",
    o1: "El Estado debe promover el sentimiento patriótico y defender la identidad nacional, cultura e idioma que le son propios.",
    o2: "El Estado debe proteger y/o promover la cultura y el idioma que son propios de su nación.",
    o3: "El Estado no debe intervenir en cuestiones tan personales como la identidad o la cultura. Cada ciudadano debe tener la libertad de usar el idioma que considere.",
  },
  {
    title: "Pregunta 10: Medio Ambiente",
    id: "q10",
    image: "medio-ambiente",
    label:
      "Una de las mayores amenazas para la civilización es el deterioro del Medio Ambiente.",
    o1: "Las leyes deben obligar a contaminar menos imponiendo estrictas limitaciones de contaminantes.",
    o2: "Hay que promover las energías limpias mediante incentivos a aquellos que contaminen menos y cargas a los que contaminan más.",
    o3: "Se contaminaría menos si se estableciesen responsabilidades claras y derechos de propiedad bien definidos con respecto a la contaminación.",
  },
  {
    title: "Pregunta 11: Globalización",
    id: "q11",
    image: "globalizacion",
    label:
      "La importación de bienes del extranjero puede ser limitada por el Estado mediante diversos instrumentos, como los aranceles aduaneros, las prohibiciones, o ciertas regulaciones.",
    o1: "El Estado debe limitar la entrada de productos de otros países para favorecer a los productores nacionales.",
    o2: "El Estado debe limitar la entrada de productos del tercer mundo, ya que se producen con mano de obra barata.",
    o3: "El Estado no debe limitar el comercio internacional. Éste debe ser libre y los aranceles deben reducirse o eliminarse. ",
  },
  {
    title: "Pregunta 12: Impuestos",
    id: "q12",
    image: "impuestos",
    label: "La Iglesia realiza ciertas labores de carácter social. Por ello...",
    o1: "Los ricos deberían pagar más impuestos para aumentar las prestaciones y servicios del Estado.",
    o2: "Los impuestos no deberían subir. Deben ser los justos y necesarios para sufragar los gastos del Estado.",
    o3: "Los impuestos deberían reducirse, aunque para ello haya que recortar algunas prestaciones y servicios del Estado.",
  },
  {
    title: "Pregunta 13: Pensiones",
    id: "q13",
    image: "pensiones",
    label:
      "Las pensiones para la jubilación garantizan el bienestar cuando se llega a la tercera edad.",
    o1: "Las pensiones de jubilación deben ser gestionadas por el Estado con un sistema público de contribuciones obligatorias (Seguridad Social).",
    o2: "Las pensiones de jubilación deben estar garantizadas por el Estado, con algún tipo de modelo mixto que pueda conjugar un sistema público y planes privados.",
    o3: "Las pensiones de jubilación son un asunto de ahorro y planificación individual. El Estado no debe exigir contribuciones obligatorias a un sistema público. ",
  },
  {
    title: "Pregunta 14: Solidaridad",
    id: "q14",
    image: "solidaridad",
    label:
      "Los pobres y necesitados dependen de la solidaridad del resto de la sociedad.",
    o1: "El Estado debe encargarse de eliminar o reducir la desigualdad y la pobreza en la sociedad.",
    o2: "El Estado debe gestionar la ayuda y asistencia adecuada a los necesitados, independientemente de que las instituciones privadas de caridad puedan complementar voluntariamente.",
    o3: "Las instituciones privadas de caridad deben ser las principales canalizadoras de la solidaridad de la sociedad.",
  },
  {
    title: "Pregunta 15: Permisos",
    id: "q15",
    image: "permisos",
    label:
      "Algunas profesiones requieren una cierta cualificación para ejercerlas.",
    o1: "Los sectores profesionales tienen que estar regulados por las leyes. El ejercicio de las profesiones cualificadas debe requerir de las oportunas licencias y permisos otorgados en cada caso por el órgano competente del Estado.",
    o2: "Los sectores profesionales deben estar regulados por organismos independientes, como los colegios profesionales. Los profesionales cualificados deben colegiarse en ellos, ya que su supervisión garantiza la calidad de sus servicios.",
    o3: "Las licencias, permisos y colegios profesionales son trabas innecesarias. El ejercicio de cualquier profesión debe ser libre para cualquier persona cualificada.",
  },
  {
    title: "Pregunta 16: Sindicatos",
    id: "q16",
    image: "sindicatos",
    label: "Los sindicatos representan los intereses de los trabajadores.",
    o1: "Los sindicatos son esenciales para proteger los derechos de los trabajadores. El Estado debe proveerles financiación y atribuirles funciones especiales en la legislación laboral.",
    o2: "Los sindicatos, como representantes de los trabajadores, deben contar con ciertas funciones especiales en la legislación laboral, pero no deben ser financiados por el Estado.",
    o3: "Los sindicatos deben regirse por las normas aplicables a cualquier otra asociación, y no recibir financiación pública o atribuírseles funciones especiales. ",
  },
  {
    title: "Pregunta 17: Sanidad",
    id: "q17",
    image: "sanidad",
    label:
      "La cobertura médica es una necesidad eventual para todas las personas.",
    o1: "El Estado debe gestionar centros médicos de carácter público, y financiarlos mediante contribuciones a un seguro médico público de carácter obligatorio (Seguridad Social).",
    o2: "El Estado debe garantizar el acceso universal a la sanidad mediante centros con algún tipo de financiación pública, sean gestionados o no por el Estado.",
    o3: "Gestionar centros médicos no debe ser una función del Estado. Los centros médicos deben ser privados, y los ciudadanos ser libres de contratar el seguro médico que prefieran.",
  },
  {
    title: "Pregunta 18: Bancos",
    id: "q18",
    image: "bancos",
    label:
      "El Banco Central y el sistema bancario, formado por los bancos comerciales, son los que ponen en circulación el dinero de curso legal.",
    o1: "Tanto el Banco Central como los bancos comerciales deben ser públicos y atender a las necesidades sociales. ",
    o2: "El Banco Central tiene una función esencial regulando la economía, por lo que debe ser independiente y supervisar a los bancos comerciales.  ",
    o3: "El Banco Central debería reducir sus competencias, y los bancos comerciales ser todos de carácter privado.",
  },
  {
    title: "Pregunta 19: Grandes superficies",
    id: "q19",
    image: "grandes-superficies",
    label:
      "Las grandes superficies tienen ciertas ventajas competetitivas frente al pequeño comercio tradicional.",
    o1: "Algunas Grandes Superficies tienen prácticas de competencia abusivas. Deberían imponérseles condiciones más restrictivas de funcionamiento, o cerrarse. ",
    o2: "Se deben corregir algunas ventajas competitivas de las Grandes Superfies, regulando ciertas materias como sus horarios y días de apertura, o el descuento máximo que pueden aplicar.  ",
    o3: "Las Grandes Superficies son empresas como cualquier otra. Tienen derecho a competir libremente en el mercado, sin restricciones en sus horarios o precios.",
  },
  {
    title: "Pregunta 20: Mercado laboral",
    id: "q20",
    image: "mercado-laboral",
    label:
      "Los contratos laborales vinculan a empresarios y trabajadores en sus obligaciones.",
    o1: "La legislación sobre contratos laborales debería restringir más el despido, así como limitar más el empleo precario y garantizar una mayor protección al trabajador. ",
    o2: "La legislación sobre contratos laborales debe siempre mantener una protección especial al trabajador, protegiéndolo frente al despido y el empleo precario. ",
    o3: "Los contratos laborales deben gozar de más libertad de cláusulas entre las partes. La legislación debería interferir menos en materias puramente contractuales, como su duración o causas de rescisión. ",
  },
];

const questions = document.querySelector("#questions");

questions.innerHTML += `
  <li>
    <div><h3>Comienzo</h3></div>
    <div>
      <p>Por favor, responda a las 20 preguntas.</p>
      <ul>
        <li>Las 10 primeras preguntas le posicionarán en cuestiones sociales.</li>
        <li>Las últimas 10 preguntas le posicionarán en cuestiones económicas.</li>
      </ul>
      <button id="start-button" type="button">Comenzar</button>
    </div>
  </li>
`;

quests.forEach((quest) => {
  questions.innerHTML += `
    <li>
      <div><h3>${quest.title}</h3></div>
      <div>
        <div class="quest-image"><img src="../src/images/${quest.image}.jpg" /></div>
        <div class="quest-text">
          <label class="quest-intro" for="${quest.id}">${quest.label}</label>
          <div class="quest-option"><input name="${quest.id}" id="${quest.id}a" type="radio" value="a"><label class="text-option" for="${quest.id}a">${quest.o1}</label></input></div>
          <div class="quest-option"><input name="${quest.id}" id="${quest.id}b" type="radio" value="b"><label class="text-option" for="${quest.id}b">${quest.o2}</label></input></div>
          <div class="quest-option"><input name="${quest.id}" id="${quest.id}c" type="radio" value="c"><label class="text-option" for="${quest.id}c">${quest.o3}</label></input></div>
        </div>
      </div>
    </li>
  `;
});

questions.innerHTML += `
  <li>
    <div><h3>Final</h3></div>
    <div>
      <p>Si desea cambiar alguna de sus respuestas haga click sobre el título y proceda a seleccionar otra opción.</p>
      <p>Una vez que esté seguro de sus respuestas, vuelva a esta sección y pulse en Enviar te</p>
      <button type="button" onclick="verResultado()">Ver Resultado</button>
    </div>
  </li>
`;
