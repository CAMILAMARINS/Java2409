let i, n = 21
var conta_atual = 0 ,conta_antiga = 0

for( i = 1 ; i < n; i++ ){

    conta_atual= (conta_atual * 2) + 1 

    console.log(conta_atual)

    conta_antiga += conta_atual
    //conta_antiga = conta_antiga + conta_atual

}

    console.log(conta_antiga)