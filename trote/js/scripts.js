function calcular(){
    // vamos criar 2 variáveis
    // JS as variáveis não possuem tipo
    let mascote, homenagem
    // recupera o valor do mascote digitanddo pelo usuário
    mascote = document.getElementById("mascote").value
    alert(mascote)
    //recupera o valor da homenagem digitada pelo usuário
    homenagem = document.getElementById("homenagem").value
    alert(homenagem)
    // calcular a soma
    let soma= Number(mascote) + Number(homenagem)
    alert(soma)

}