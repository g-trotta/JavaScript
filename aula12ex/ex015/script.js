function verificar() {
    var data = new Date ()
    var ano = data.getFullYear ()
    var fano = document.querySelector('input#txtano')
    var anoN = Number(fano.value)
    var res = document.querySelector('div#res')
    if (anoN == '0' || anoN > ano) {
        window.alert ('Verifique os Dados digitados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - anoN
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                //Criança     
                img.setAttribute('src', '1 male-child.jpg')           
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', '2 male-teen.jpg')   
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', '3 male-adult.jpg')   
            } else {
                //Idoso
                img.setAttribute('src', '4 male-old.jpg')   
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 10) {
                //Criança   
                img.setAttribute('src', '1 female-child.jpg')                  
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', '2 female-teen.jpg')     
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', '3 female-adult.jpg') 
            } else {
                //Idoso
                img.setAttribute('src', '4 female-old.jpg') 
            }
        }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.append(img)
    }
}