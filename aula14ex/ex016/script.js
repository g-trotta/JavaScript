function contar() {
    let n1 = document.querySelector('input#txti')
    let n2 = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')
    if (n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar.'
        // alert('Faltam dados, por favor preencha corretamente!')
    } else {
        res.innerHTML = 'Contando... <br>'
        let ni = Number(n1.value)
        let nf = Number(n2.value)
        let np = Number(passo.value)
        if (np <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            np = 1
        }
        if (ni < nf)
        for (let c = ni; c <= nf; c += np) {
            res.innerHTML += ` ${c} \u{1F449}`
        } else {
            for (let c = ni; c >= nf; c-= np)
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
} 
