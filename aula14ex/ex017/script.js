function tabuada() {
    let n1 = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')
    if (n1.value.length == 0) {
        window.alert ('Digite um número')
    } else {
        let n = Number(n1.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}