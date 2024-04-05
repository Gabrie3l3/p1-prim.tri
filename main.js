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
const tempoObjetivo1=new date("2024-11-5-05T00-08:00");

contadores[0].textContent =calculaTempo(tempoObjetivo1);


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
    return dias +" dias "+horas+" horas " + munitos+ "minutos"+segundos " segundos " + "segundos";
}
