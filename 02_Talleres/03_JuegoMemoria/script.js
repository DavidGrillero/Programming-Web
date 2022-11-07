// Inicialización variables
let tarjetasDestapadas = 0;
let tarjeta1 = null; // La declaro para tomar el primer botón pinchado
let tarjeta2 = null; // lo hago para tomar el segundo botón pinchado ... posteriormente me llevo el id de cada btn
let primerResultado = null; // Null porque desconozco el resultado
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 60;
let timerInicial = 60;
let tiempoRegresivoId = null; // Funciona como id de Set Interval

// Sección que apunta a Documentos HTML
let mostrarMovimientos = document.getElementById('movimientos'); // Selecciono lo que en el html se llama movimientos que es el h2
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

let numeros = ["&#x1f981", "&#x1f981", "&#x1f984", "&#x1f984", "&#x1f989", "&#x1f989", "&#x1f98a", "&#x1f98a", "&#x1f98c", "&#x1f98c", "&#x1f98d", "&#x1f98d",
  "&#x1f98e", "&#x1f98e", "&#x1f991", "&#x1f991", "&#x1f992", "&#x1f992", "&#x1f993", "&#x1f993", "&#x1f995", "&#x1f995", "&#x1f405", "&#x1f405",
  "&#x1f996", "&#x1f996", "&#x1f99c", "&#x1f99c", "&#x1f99a", "&#x1f99a", "&#x1f9a7", "&#x1f9a7", "&#x1f409", "&#x1f409", "&#x1f413", "&#x1f413"]
/* Math random me genera números aleatorios, le resto 0.5 para que vaya desde -0.5 hasta * 0.5, obteniendo números positivos y negativos*/
/* Sort me ordena los elementos de acuerdo a una fn */
numeros = numeros.sort(() => { return Math.random()-0.5}) /* ME retorna números aleatorios */
console.log(numeros);

// Fns
function contarTiempo() {
  tiempoRegresivoId = setInterval(() => {  // Lo hago para que el tiempo vaya hacia atrás
    timer--;
    mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos ⏱`;
    if (timer == 0) {
      clearInterval(tiempoRegresivoId) // acá detengo el valor o el contador
      // bloquear tarjetas
      bloquearTarjetas();
      document.getElementById("mensaje").innerHTML = `❌❌❌ ${"&#x1f613"} Tu tiempo se ha agotado. Perdiste !!! ${"&#x1f613"} ❌❌❌`;
    }
  }, 1000);
}

function bloquearTarjetas() { // Lo hago para mostrar las tarjetas y sus números
  for (let i = 0; i <= 35; i++) {
    let tarjetaBloqueada = document.getElementById(i); // Ahí llevo los elementos de 0 a 15
    tarjetaBloqueada.innerHTML = numeros[i]; // Acá escribe lo que lleva elvalor y lo pinta en el html
    tarjetaBloqueada.disabled = true; // Y por último lo bloqueo
    // Se ejecuta 16 veces
  }
}

// Fn ppal
function destapar(id) { // dentro llevo el id o parámetro id de cada número

  if (temporizador == false) {
    contarTiempo();
    temporizador = true; // Lo hago para que me llame la fn una sola vez
  }

  tarjetasDestapadas++; // Cuenta los números de veces que destapo la tarjeta
  if (tarjetasDestapadas == 1) {
    // Mostrar primer número -- Lo mostramos trayéndonos el id para saber en cuál he pinchado
    tarjeta1 = document.getElementById(id); // Guardo el id de cada botón presionado
    primerResultado = numeros[id] // lo guardo para poder hacer comparaciones con el segundo resultado -- Guardo acá el id del btn que he presionado
    tarjeta1.innerHTML = numeros[id]; // Acá estoy asociando el id del getElement con el id del array y voy y lo pinto

    // Deshabilito el primer btn
    tarjeta1.disable = true 
   
  } else if (tarjetasDestapadas == 2) {
    // Mostrar segundo número
    tarjeta2 =  document.getElementById(id); 
    segundoResultado = numeros[id] 
    tarjeta2.innerHTML = numeros[id]; 
    tarjeta2.disable = true 

    // Incrementar movimientos
    // Los movimientos son cada vez que se destapan dos tarjetas, por eso se hace acá en la segunda condición
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} ⛹`;  // Acá muestro la cantidad de movimientos

    if (primerResultado == segundoResultado) {
      // Si son iguales, debemos encerrar contador de tarjetas destapadas 
      tarjetasDestapadas = 0; // Así permito que puedan volver a seguir destapando tarjetas e ingreso un acierto

      // Aumentar aciertos
      aciertos++;
      mostrarAciertos.innerHTML = `Aciertos: ${aciertos} ✅`;

      if (aciertos == 18) {
        clearInterval(tiempoRegresivoId); // Detengo el tiempo
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos} ✅😄✅`
        mostrarTiempo.innerHTML = `Genial, solo tardaste ${timerInicial - timer} ⏳😀⏳`
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 🏃🏃🏃`
        document.getElementById("mensaje").innerHTML = `🏆🏅🏆 Felicitaciones, has ganado 🏆🏅🏆`;
      }

    } else {
      // Mostrar valores momentaneamente y volver a mostrar -- Lo hago con un temporizador
      setTimeout(() => {
        tarjeta1.innerHTML = ' ';   // Selecciono tarjeta y escribo espacio, para que haga el efecto de borrado
        tarjeta2.innerHTML = ' ';
        tarjeta1.disabled = false; // Y habilito el btn de nuevo para seleccionarlo después
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0; // Para que pueda seleccionar 2 tarjetas mas
      }, 900);
    }
  }
}
