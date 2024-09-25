let lucro, pessoas = 1800, valor = 150, lucro_anterior = 0

// atual //
lucro  = (pessoas*valor) - 1000 //gasto fixo do evento

while(lucro > lucro_anterior){

    lucro_anterior = lucro
    //salva lucro anterior, antes de mudar os valores

    pessoas = pessoas + 50

    valor = valor - 10

    lucro = (pessoas*valor) - 1000
    //se der falso, alcamçou o lucro máximo possível

}

console.log(valor)