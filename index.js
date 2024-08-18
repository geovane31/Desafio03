// Class heroi determinando o nome, idade e tipo
class Heroi {
    constructor(nome , idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    //Função com estrutura de decisão para o tipo.
    atacar(){
        let ataque;
        if (this.tipo === "mago"){
            ataque = "Magia"
        }
        else if (this.tipo === "guerreiro"){
            ataque = "Espada"
        }           
        else if (this.tipo === "monge"){
            ataque = "Artes marciais"
        }       
        else if (this.tipo === "ninja"){
            ataque = "Shuriken"
        }    
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}!`)
    }
}

let heroi1 = new Heroi ("Rei Arthur", 27, "guerreiro")
heroi1.atacar()