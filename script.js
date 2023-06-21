const button = document.querySelector('#active')
const result = document.querySelector('#result')
const span = document.querySelector('#span')

button.addEventListener('click', generateNumber)

function generateNumber() {
    const min = Math.ceil(document.querySelector('#min').value)
    const max = Math.floor(document.querySelector('#max').value)

    const randon = Math.floor(Math.random() * (max - min + 1)) + min

    if( randon >= 100) {
        result.style.fontSize = '50px'
    } else {
        result.style.fontSize = '60px'
    }
    if (min >= max) {
        span.style.visibility = 'hidden'

        alert("Numero inicial deve ser Menor e diferente do que o Numero final ")
        
    } else {
        span.style.visibility = 'visible'
        result.innerHTML = `${randon}`
    }

    

}

