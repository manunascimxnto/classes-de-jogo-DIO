class Heroi {
    constructor(nome, idade, tipo) { 
        nome: nome;
        idade: idade;
        tipo: tipo {
            0: ["mago"]
            1: ["guerreiro"]
            2: ["monge"]
            3: ["ninja"]
       }; 
        
      
 }
 
 atacar() {
    let ataque;
    switch (this.tipo){
        case 'mago':
            ataque = " usou magia ";
            break;
        case 'guerreiro' :
            ataque = " usou espada ";
            break;
        case 'monge' :
            ataque = "usou artes marciais"
            break;
        case 'ninja' : 
            ataque=  "usou shuriken"
            break;
    }
        	return ` O ${this.tipo} atacou usando ${ataque} `;
    }     

