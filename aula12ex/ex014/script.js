function carregar () {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas.<br> Bom dia!`
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora} horas.<br>Boa tarde!`
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML = `Agora são ${hora} horas.<br> Boa noite!`
        img.src = 'noite.jpg'
        document.body.style.background = '#28272D'
    }
}   