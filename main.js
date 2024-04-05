const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

//Código omitido
console.log(botoes);
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
       
   for(let j=0;<botoes.length;j++)     
  
       textos[j]. classlist.remove("ativo");
 texto[j].classlist.add("ativo");    
        botoes[i].classList.add("ativo");
    }
}

