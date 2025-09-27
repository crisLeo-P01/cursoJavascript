// setTimeout: ejecuta una sola vez despúes de un tiempo
setTimeout(() => {
    console.log('Mensaje mostrado despúes de 2 segundos')
  }, 2000);
  
  // setInterval: ejecuta cada cierto tiempo
  let contador = 0
  const intervalo = setInterval(() => {
    contador++;
    console.log(`Contador: ${contador}`);
    if(contador === 5) {
      clearInterval(intervalo); // detiene el intervalo
    }
  }, 2000)
  
  // callback con setTimeout
  function saludarDespues(nombre, tiempo, callback) {
    setTimeout(() => {
      callback(`Hola ${nombre}`)
    }, tiempo)
  }
  
  saludarDespues('Cristian', 3000, mensaje => console.log(mensaje))