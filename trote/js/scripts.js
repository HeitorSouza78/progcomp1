function calcular(){
    // vamos criar 2 variáveis
    // JS as variáveis não possuem tipo
    let mascote, homenagem, leite, kit, suplemento, soma, equipe
    // recupera o valor do mascote digitanddo pelo usuário
    mascote = Number(document.getElementById("mascote").value)
    //recupera o valor da homenagem digitada pelo usuário
    homenagem = Number(document.getElementById("homenagem").value)
  // calcular a soma
  leite = Number(document.getElementById("leite").value)
  //recupera a qtde avulsa de kits de alimentos
  kit= Number(document.getElementById("kit").value)
  suplemento = Number(document.getElementById("suplemento").value)
   
     soma=Number(mascote) + Number(homenagem) + (2 * (leite)) 
    //vamos calcular a pontuação considerando metas de kit e supl
     equipe = document.getElementById("equipe").value
    if(equipe== "Laranja"){
      if(kit >= 97) {
        soma + soma + 5000 + ((kit- 97) * 30)
      }
      else if(kit>= 78){
        soma = soma + 4000 + ((kit- 78) * 30)
      }
      else if(kit>=49){
        soma = soma + 2500 + ((kit-49) * 30)
      }
      else if(kit >=19){
        soma = soma + 1000 + ((kit-19) * 30)
      }
    }
    // retorna o valor ao HTML
    //template string
     
    document.getElementById ("soma").innerHTML = `A soma é ${soma}`
}