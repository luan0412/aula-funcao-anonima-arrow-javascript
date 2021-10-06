let analiseIdade = function() {
    
    var aprovados = [
        {candidato : "Renata Soares", nota : 7.8, idade : 29},
        {candidato : "Marcos Teixeira", nota : 7.8, idade : 26},
        {candidato : "Priscila Gomes", nota : 7.8, idade : 30},
        {candidato : "João Oliveira", nota : 7.8, idade : 27},
        {candidato : "Adriana Telles", nota : 7.8, idade : 28}

    ];

    

    if(aprovados[0].idade >= 28 && aprovados[0].idade <= 30 ){

        console.log(aprovados[0])
    } else{
        console.log("Reprovado")
    }
    if(aprovados[1].idade >= 28 && aprovados[1].idade <= 30 ){

        console.log(aprovados[1])
    } else{
        console.log("Reprovado")
    }
    if(aprovados[2].idade >= 28 && aprovados[2].idade <= 30 ){

        console.log(aprovados[2])
    } else{
        console.log("Reprovado")
    }
    if(aprovados[3].idade >= 28 && aprovados[3].idade <= 30 ){

        console.log(aprovados[3])
    } else{
        console.log("Reprovado")
    }
    if(aprovados[4].idade >= 28 && aprovados[4].idade <= 30 ){

        console.log(aprovados[4])
    } else{
        console.log("Reprovado")
    }

}

analiseIdade()