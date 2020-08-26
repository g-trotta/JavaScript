let valores = [8, 1, 7, 4, 2, 9, 1, 1, 2, 3]
valores.sort()
/*for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(valores)
for (pos in valores) {
    console.log(`A posição ${pos} é ${valores[pos]}`)
}*/
let cont = valores.indexOf(15)
if (cont == -1)
    console.log(`O valor não foi encontrado!`)
else {
console.log(`O valor 7 está na posição ${cont}`)
}