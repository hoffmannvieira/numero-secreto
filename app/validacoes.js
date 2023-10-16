function verificacaoChuteValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
       elementoChute.innerHTML += '<div> Valor Inválido </div>'
       return
    }

    if (numeroMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += `<div> Valor inválido, o valor deve estar entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1>Você Acertou!</h1>
        <h3>O número secreto era ${numeroSecreto} !</h3>
        <button id="jogar-novamente" class="btn-play">Jogar Novamente</button>
        `
    } else if (numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }
}

function chuteForInvalido(chute) {
    return Number.isNaN(chute)
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})