let cartas, i , num

cartas= Number (prompt("Quantas cartas você deseja virar de um baralho?: "))

for( i = 0 ; i < cartas; i++ ){

        var naipe = Math.round(Math.random() * 3) 

        if(naipe == 0){
            naipe = "copas"
        }

            if(naipe == 1){
                naipe = "paus"
            }

                if(naipe == 2){
                    naipe = "espada"
                }

                    if(naipe == 3){
                        naipe = "ouro"
                    }
        
        

        num = Math.round(Math.random() * 9 + 1)
        console.log(i + ' - ' + num + ' de ' + naipe)

}