const boton = document.querySelector('#boton');

boton.addEventListener('click', (event) => {
    // Información del evento
    console.log('Tipo de evento:', event.type); // "click"
    
    // Elemento que disparó el evento
    console.log('Target:', event.target);
    
    // Elemento al que está adjunto el listener
    console.log('CurrentTarget:', event.currentTarget);
    
    // Coordenadas del mouse
    console.log('ClientX:', event.clientX); // Relativo al viewport
    console.log('ClientY:', event.clientY);
    console.log('PageX:', event.pageX);     // Relativo a la página
    console.log('PageY:', event.pageY);
    console.log('ScreenX:', event.screenX); // Relativo a la pantalla
    console.log('ScreenY:', event.screenY);
    
    // Teclas modificadoras
    console.log('Ctrl:', event.ctrlKey);
    console.log('Shift:', event.shiftKey);
    console.log('Alt:', event.altKey);
    console.log('Meta:', event.metaKey); // Cmd en Mac, Win en Windows
    
    // Timestamp
    console.log('Timestamp:', event.timeStamp);
});