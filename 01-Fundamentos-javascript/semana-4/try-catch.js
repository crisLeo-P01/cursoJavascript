try {
    let resultado = 10 / 0;
    console.log('Resultado:', resultado)
    let dato = JSON.parse('{mal json}')
    console.log(dato);
} catch (error) {
    console.error('Ocurrio un error: ', error.messagge)
}

// FINALLY
try {
    console.log('Intentando...')
    throw new Error('Algo falló') // el throw corta la ejecución del try y pasa al catch
} catch (e) {
    console.log('Error: ', e.messagge)
} finally {
    console.log('Esto es un mensaje que siempre se ejecuta')
}