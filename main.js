const botoes = document.querySelectorAll(".botao");
console.log(botoes);
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
       
   for(let j=0;<botoes.length;j++)     
    botoes[j]. classlist.remove("ativo");
    }
        
        botoes[i].classList.add("ativo");
    }
}

