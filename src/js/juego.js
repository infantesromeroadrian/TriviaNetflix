// Creamos un nuevo Json con nuevas preguntas acerca de netflix separandolas por categorias de series o peliculas

const preguntas = [
    {
        id: 1,
        categoria: "series",
        titulo: "¿Cuál es el nombre del personaje principal en la serie 'Stranger Things'?",
        opcionA: "Mike Wheeler",
        opcionB: "Eleven",
        opcionC: "Dustin Henderson",
        opcionD: "Will Byers",
        correcta: "b"
    },
    {
        id: 2,
        categoria: "series",
        titulo: "¿Quién interpreta a Frank Underwood en la serie 'House of Cards'?",
        opcionA: "Kevin Spacey",
        opcionB: "Robin Wright",
        opcionC: "Michael Kelly",
        opcionD: "Kate Mara",
        correcta: "a"
    },
    {
        id: 3,
        categoria: "series",
        titulo: "¿Qué serie documental de crímenes reales se hizo famosa por su episodio titulado 'Making a Murderer'?",
        opcionA: "The Keepers",
        opcionB: "The Jinx",
        opcionC: "Making a Murderer",
        opcionD: "The Staircase",
        correcta: "c"
    },
    {
        id: 4,
        categoria: "series",
        titulo: "¿Cuál es el título de la serie sobre el nacimiento de la música hip-hop en Nueva York en los años 70 y 80?",
        opcionA: "The Get Down",
        opcionB: "Hip-Hop Evolution",
        opcionC: "Rhythm + Flow",
        opcionD: "Empire",
        correcta: "a"
    },
    {
        id: 5,
        categoria: "series",
        titulo: "¿Quién es el creador de la serie 'Black Mirror'?",
        opcionA: "Charlie Brooker",
        opcionB: "Dan Harmon",
        opcionC: "David Benioff",
        opcionD: "D.B. Weiss",
        correcta: "a"
    },
    {
        id: 6,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película sobre la vida de Barack Obama, protagonizada por Devon Terrell?",
        opcionA: "Barry",
        opcionB: "The Obama Effect",
        opcionC: "Southside with You",
        opcionD: "My Name Is My Name",
        correcta: "c"
    },
    {
        id: 7,
        categoria: "peliculas",
        titulo: "¿En qué película original de Netflix, dirigida por Ava DuVernay, se narra la historia de cinco jóvenes acusados injustamente de un crimen en Central Park?",
        opcionA: "When They See Us",
        opcionB: "13th",
        opcionC: "Mudbound",
        opcionD: "Fruitvale Station",
        correcta: "a"
    },
    {
        id: 8,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película protagonizada por Sandra Bullock, donde un grupo de personas debe sobrevivir con los ojos vendados para no ser afectados por una fuerza misteriosa que hace que las personas se suiciden?",
        opcionA: "Bird Box",
        opcionB: "A Quiet Place",
        opcionC: "The Silence",
        opcionD: "The Happening",
        correcta: "a"
    },
    {
        id: 9,
        categoria: "peliculas",
        titulo: "¿Quién dirigió la película de ciencia ficción 'Aniquilación', protagonizada por Natalie Portman?",
        opcionA: "Denis Villeneuve",
        opcionB: "Alfonso Cuarón",
        opcionC: "Alex Garland",
        opcionD: "David Cronenberg",
        correcta: "c"
    },
    {
        id: 10,
        categoria: "peliculas",
        titulo: "¿Qué actor interpreta al personaje principal en la película 'El irlandés', dirigida por Martin Scorsese?",
        opcionA: "Robert De Niro",
        opcionB: "Al Pacino",
        opcionC: "Joe Pesci",
        opcionD: "Harvey Keitel",
        correcta: "a"
    },
    {
        id: 11,
        categoria: "series",
        titulo: "¿Cuál es el título de la serie sobre un misterioso pueblo en Oregón donde suceden fenómenos paranormales, creada por Alex Hirsch?",
        opcionA: "Gravity Falls",
        opcionB: "Twin Peaks",
        opcionC: "Stranger Things",
        opcionD: "Dark",
        correcta: "a"
    },
    {
        id: 12,
        categoria: "series",
        titulo: "¿Qué serie de animación para adultos sigue las aventuras de BoJack Horseman, un caballo que fue estrella de una exitosa serie de los 90?",
        opcionA: "Rick and Morty",
        opcionB: "Archer",
        opcionC: "Family Guy",
        opcionD: "BoJack Horseman",
        correcta: "d"
    },
    {
        id: 13,
        categoria: "series",
        titulo: "¿En qué serie de Netflix se muestra la vida del narcotraficante colombiano Pablo Escobar?",
        opcionA: "Breaking Bad",
        opcionB: "Narcos",
        opcionC: "El Chapo",
        opcionD: "La Reina del Sur",
        correcta: "b"
    },
    {
        id: 14,
        categoria: "series",
        titulo: "¿Cuál es el nombre del personaje principal en la serie 'La Casa de Papel'?",
        opcionA: "El Profesor",
        opcionB: "Tokio",
        opcionC: "Berlín",
        opcionD: "Río",
        correcta: "a"
    },
    {
        id: 15,
        categoria: "series",
        titulo: "¿Quién interpreta a Geralt de Rivia en la serie 'The Witcher'?",
        opcionA: "Henry Cavill",
        opcionB: "Jason Momoa",
        opcionC: "Kit Harington",
        opcionD: "Tom Hardy",
        correcta: "a"
    },
    {
        id: 16,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de ciencia ficción dirigida por Christopher Nolan, donde los sueños son el centro de la trama?",
        opcionA: "Inception",
        opcionB: "Interstellar",
        opcionC: "The Matrix",
        opcionD: "Eternal Sunshine of the Spotless Mind",
        correcta: "a"
    },
    {
        id: 17,
        categoria: "peliculas",
        titulo: "¿Qué película de Netflix cuenta la historia de un joven músico que busca cumplir su sueño de convertirse en una estrella de la música country?",
        opcionA: "The Highwaymen",
        opcionB: "Dolemite Is My Name",
        opcionC: "A Futile and Stupid Gesture",
        opcionD: "A Star Is Born",
        correcta: "b"
    },
    {
        id: 18,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película original de Netflix protagonizada por Sandra Bullock, donde debe llevar a dos niños a un lugar seguro en medio de un apocalipsis?",
        opcionA: "A Quiet Place",
        opcionB: "Bird Box",
        opcionC: "The Silence",
        opcionD: "Train to Busan",
        correcta: "b"
    },
    {
        id: 19,
        categoria: "peliculas",
        titulo: "¿Quién dirigió la película de suspenso 'El Hoyo', donde los prisioneros están encerrados en una torre con diferentes niveles?",
        opcionA: "Álex de la Iglesia",
        opcionB: "Jaume Collet-Serra",
        opcionC: "Pedro Almodóvar",
        opcionD: "Galder Gaztelu-Urrutia",
        correcta: "d"
    },
    {
        id: 20,
        categoria: "peliculas",
        titulo: "¿Qué actor interpreta a Sherlock Holmes en la película 'Enola Holmes'?",
        opcionA: "Robert Downey Jr.",
        opcionB: "Jude Law",
        opcionC: "Henry Cavill",
        opcionD: "Benedict Cumberbatch",
        correcta: "c"
    },
    {
        id: 21,
        categoria: "series",
        titulo: "¿Cuál es el título de la serie de comedia que sigue la vida de una familia adinerada que pierde su fortuna y debe mudarse a un pueblo pequeño?",
        opcionA: "The Good Place",
        opcionB: "Arrested Development",
        opcionC: "Schitt's Creek",
        opcionD: "Parks and Recreation",
        correcta: "c"
    },
    {
        id: 22,
        categoria: "series",
        titulo: "¿Qué serie de drama sigue la vida de una familia mafiosa en Birmingham, Inglaterra, después de la Primera Guerra Mundial?",
        opcionA: "The Crown",
        opcionB: "Peaky Blinders",
        opcionC: "Boardwalk Empire",
        opcionD: "The Sopranos",
        correcta: "b"
    },
    {
        id: 23,
        categoria: "series",
        titulo: "¿En qué serie de Netflix un grupo de jóvenes rebeldes crean una banda de música para luchar contra una corporación malvada?",
        opcionA: "The Umbrella Academy",
        opcionB: "GLOW",
        opcionC: "Teenage Bounty Hunters",
        opcionD: "Julie and the Phantoms",
        correcta: "d"
    },
    {
        id: 24,
        categoria: "series",
        titulo: "¿Quién es el creador de la serie de terror 'Hill House', basada en la novela homónima de Shirley Jackson?",
        opcionA: "Mike Flanagan",
        opcionB: "Ryan Murphy",
        opcionC: "David Lynch",
        opcionD: "Stephen King",
        correcta: "a"
    },
    {
        id: 25,
        categoria: "series",
        titulo: "¿Cuál es el título de la serie británica que sigue la vida de una familia aristocrática en el periodo de entreguerras?",
        opcionA: "Peaky Blinders",
        opcionB: "Downton Abbey",
        opcionC: "The Crown",
        opcionD: "The Marvelous Mrs. Maisel",
        correcta: "b"
    },
    {
        id: 26,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de ciencia ficción protagonizada por Natalie Portman, donde un equipo de mujeres investiga una misteriosa área conocida como 'La Zona'?",
        opcionA: "Annihilation",
        opcionB: "Ex Machina",
        opcionC: "Arrival",
        opcionD: "Interstellar",
        correcta: "a"
    },
    {
        id: 27,
        categoria: "peliculas",
        titulo: "¿En qué película original de Netflix un joven se infiltra en una pandilla de carretera en Los Ángeles para investigar la desaparición de su hermano?",
        opcionA: "Imperial Dreams",
        opcionB: "Beasts of No Nation",
        opcionC: "Mudbound",
        opcionD: "Lost Bullet",
        correcta: "a"
    },
    {
        id: 28,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de terror sobrenatural donde una familia debe sobrevivir a una serie de fenómenos paranormales en su nueva casa?",
        opcionA: "The Conjuring",
        opcionB: "Sinister",
        opcionC: "Insidious",
        opcionD: "The Haunting of Hill House",
        correcta: "a"
    },
    {
        id: 29,
        categoria: "peliculas",
        titulo: "¿Quién dirigió la película 'El Ritual', donde un grupo de amigos enfrenta a una entidad sobrenatural en un bosque sueco?",
        opcionA: "Ari Aster",
        opcionB: "Mike Flanagan",
        opcionC: "David Bruckner",
        opcionD: "Jordan Peele",
        correcta: "c"
    },
    {
        id: 30,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de comedia protagonizada por Adam Sandler, donde interpreta a un joyero de Nueva York con problemas de juego?",
        opcionA: "Uncut Gems",
        opcionB: "The Meyerowitz Stories",
        opcionC: "Punch-Drunk Love",
        opcionD: "Spanglish",
        correcta: "a"
    },
    {
        id: 31,
        categoria: "series",
        titulo: "¿Cuál es el título de la serie de ciencia ficción que sigue a un grupo de androides que luchan por su libertad en un parque temático de robots?",
        opcionA: "Westworld",
        opcionB: "Humans",
        opcionC: "Black Mirror",
        opcionD: "Altered Carbon",
        correcta: "a"
    },
    {
        id: 32,
        categoria: "series",
        titulo: "¿Qué serie documental de Netflix narra la historia de Steven Avery, quien fue injustamente condenado por un crimen que no cometió?",
        opcionA: "Making a Murderer",
        opcionB: "The Keepers",
        opcionC: "The Staircase",
        opcionD: "Evil Genius",
        correcta: "a"
    },
    {
        id: 33,
        categoria: "series",
        titulo: "¿Quién interpreta a Eleven en la serie 'Stranger Things'?",
        opcionA: "Millie Bobby Brown",
        opcionB: "Winona Ryder",
        opcionC: "Finn Wolfhard",
        opcionD: "David Harbour",
        correcta: "a"
    },
    {
        id: 34,
        categoria: "series",
        titulo: "¿Cuál es el título de la serie animada que sigue las aventuras de un científico loco y su nieto aventurero?",
        opcionA: "Futurama",
        opcionB: "The Simpsons",
        opcionC: "Rick and Morty",
        opcionD: "Archer",
        correcta: "c"
    },
    {
        id: 35,
        categoria: "series",
        titulo: "¿En qué serie de Netflix un grupo de jóvenes usa la tecnología para viajar en el tiempo y prevenir la catástrofe?",
        opcionA: "Dark",
        opcionB: "Stranger Things",
        opcionC: "Travelers",
        opcionD: "Altered Carbon",
        correcta: "a"
    },
    {
        id: 36,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película protagonizada por Will Smith, donde interpreta a un agente del gobierno que lucha contra una invasión alienígena?",
        opcionA: "Independence Day",
        opcionB: "Men in Black",
        opcionC: "I Am Legend",
        opcionD: "After Earth",
        correcta: "a"
    },
    {
        id: 37,
        categoria: "peliculas",
        titulo: "¿Qué película de Netflix sigue la historia de un ingeniero que lucha por la supervivencia en Marte después de ser abandonado por su tripulación?",
        opcionA: "Interstellar",
        opcionB: "The Martian",
        opcionC: "Gravity",
        opcionD: "Moon",
        correcta: "b"
    },
    {
        id: 38,
        categoria: "peliculas",
        titulo: "¿Quién dirigió la película de terror 'It Follows', donde una joven es perseguida por una entidad sobrenatural después de un encuentro sexual?",
        opcionA: "Jordan Peele",
        opcionB: "Robert Eggers",
        opcionC: "David Robert Mitchell",
        opcionD: "Ari Aster",
        correcta: "c"
    },
    {
        id: 39,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de comedia protagonizada por Bill Murray, donde revive una y otra vez el mismo día?",
        opcionA: "Groundhog Day",
        opcionB: "Palm Springs",
        opcionC: "Happy Death Day",
        opcionD: "Edge of Tomorrow",
        correcta: "a"
    },
    {
        id: 40,
        categoria: "peliculas",
        titulo: "¿En qué película una joven es perseguida por un hombre con una máscara blanca después de jugar a un juego misterioso?",
        opcionA: "Scream",
        opcionB: "The Strangers",
        opcionC: "Hush",
        opcionD: "The Babadook",
        correcta: "c"
    },
    {
        id: 41,
        categoria: "series",
        titulo: "¿Cuál es el título de la serie de comedia protagonizada por Steve Carell que sigue la vida cotidiana en una oficina de Scranton, Pennsylvania?",
        opcionA: "Brooklyn Nine-Nine",
        opcionB: "The Office",
        opcionC: "Parks and Recreation",
        opcionD: "It's Always Sunny in Philadelphia",
        correcta: "b"
    },
    {
        id: 42,
        categoria: "series",
        titulo: "¿En qué serie un hombre comienza a recibir cartas de amor y consejos de su yo del futuro, lo que afecta su vida amorosa y profesional?",
        opcionA: "The Flash",
        opcionB: "Arrow",
        opcionC: "Lucifer",
        opcionD: "You",
        correcta: "d"
    },
    {
        id: 43,
        categoria: "series",
        titulo: "¿Quién interpreta a Carrie Bradshaw en la serie 'Sex and the City'?",
        opcionA: "Sarah Jessica Parker",
        opcionB: "Kristin Davis",
        opcionC: "Cynthia Nixon",
        opcionD: "Kim Cattrall",
        correcta: "a"
    },
    {
        id: 44,
        categoria: "series",
        titulo: "¿En qué serie una joven regresa a su pueblo natal después de escapar de un culto religioso?",
        opcionA: "The Leftovers",
        opcionB: "The OA",
        opcionC: "Sharp Objects",
        opcionD: "Big Little Lies",
        correcta: "b"
    },
    {
        id: 45,
        categoria: "series",
        titulo: "¿Cuál es el título de la serie británica que sigue las vidas entrelazadas de personajes en el suburbio de Manchester?",
        opcionA: "Derry Girls",
        opcionB: "Misfits",
        opcionC: "Skins",
        opcionD: "Shameless",
        correcta: "d"
    },
    {
        id: 46,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película protagonizada por Tom Hanks, donde interpreta a un hombre atrapado en un aeropuerto debido a problemas de visado?",
        opcionA: "Cast Away",
        opcionB: "The Terminal",
        opcionC: "Catch Me If You Can",
        opcionD: "Sully",
        correcta: "b"
    },
    {
        id: 47,
        categoria: "peliculas",
        titulo: "¿Qué película sigue la historia de un hombre que es encarcelado injustamente durante años y busca venganza contra quienes lo traicionaron?",
        opcionA: "The Count of Monte Cristo",
        opcionB: "Prisoners",
        opcionC: "The Shawshank Redemption",
        opcionD: "Escape from Alcatraz",
        correcta: "c"
    },
    {
        id: 48,
        categoria: "peliculas",
        titulo: "¿Quién dirigió la película de terror 'Hereditary', donde una familia es atormentada por fuerzas malignas después de la muerte de su abuela?",
        opcionA: "Jordan Peele",
        opcionB: "Ari Aster",
        opcionC: "David Robert Mitchell",
        opcionD: "Jennifer Kent",
        correcta: "b"
    },
    {
        id: 49,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de suspenso protagonizada por Jake Gyllenhaal, donde interpreta a un hombre que se obsesiona con un crimen después de presenciarlo en un tren?",
        opcionA: "Nightcrawler",
        opcionB: "Enemy",
        opcionC: "Zodiac",
        opcionD: "Prisoners",
        correcta: "a"
    },
    {
        id: 50,
        categoria: "peliculas",
        titulo: "¿En qué película un hombre lucha por sobrevivir en el océano después de que su bote es atacado por un tiburón?",
        opcionA: "Open Water",
        opcionB: "The Meg",
        opcionC: "Jaws",
        opcionD: "The Shallows",
        correcta: "c"
    }
];


//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=4){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 6){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    
})