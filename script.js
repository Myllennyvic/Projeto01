function verificarMulta(){
    const velocidade = document.querySelector("#velocidade").value
    const resultado = document.querySelector("#resultado")
    
    if(velocidade <= 60){
        resultado.innerHTML = "Você não foi multado!"
        resultado.className = "Verde"
    }else{
        resultado.innerHTML = "Voce foi multado!"
        resultado.className = "Vermelho"
    }

}