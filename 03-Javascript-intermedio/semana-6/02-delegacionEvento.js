const lista = document.getElementById('lista')

lista.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log('Hiciste clic en: ', e.target.textContent)
    }
})