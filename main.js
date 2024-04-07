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

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1=new date("2020-11-05T00-08:00"); 
const tempoObjetivo2=new date("2023-12-05T00-08:00");
const tempoObjetivo3=new date("2023-12-30T00-08:00");
const tempoObjetivo4=new date("2024-11-02-01T00-08:00");    

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];
    function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos =math.floor(tempoFinal / 1000);
  let minuto=math.floor(segundos/60);
    let horas=math.floor(minutos/60);
    let dias=math.floor(horas/24);

    segundos%=60;
    minutos%=60;
    horas%=24;
        if (tempoFinal > 0){
    return[dias,horas, minutos, segundos];
} else {
    return "[0,0,0,0];
        }
        
}
function atualizaCronometro(){
    for (let i = 0; i < contadores.length; i++) {
        documet.geE1ementbyid("dias"+i).calcularTempo(tempo[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
}
   
    
funtion comecaCromometro(){
atualizaCronometro();  
    setInterval(atualizaCronometro,1000);
}  

    comecaCronometro();
