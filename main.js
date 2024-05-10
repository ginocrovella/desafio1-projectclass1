// - DESTRUCTURING DE OBJETOS
const persona1 = {
    nombre : "Gino",
    apellido : "Crovella",
    edad: 24,
    estadoCivil: "soltero",
    nacionalidad: "argentino"
}

/* const {nombre} = persona1;
console.log(nombre); */

// En terminal usamos node main.js y me sale el console.log directamente en terminal. "Gino"


// DESTRUCTUTING DE ARRAYS
const personajes = ["nautilus","amumu","master yi","ryze","kyle"]
// console.log(personajes[1]);

const [primerPersonaje, segundoPersonaje, tercerPersonaje, ...restoPersonajes] = personajes;
// console.log(segundoPersonaje);
// console.log(restoPersonajes);


// SPREAD OPERATOR - muy util cuando tenemos que hacer una copia
const persona2= {
    ...persona1,
    nombre: "Jose",
    sueldo: '23K USD'
}

const personajesCopia= [...personajes]
console.log(persona2);


// // FUNCION MAP, FIND
// const personajesProcesados = personajes.map(personajes => {
//     return <p>$(personaje)</p>
// })
// console.log(personajesProcesados); 