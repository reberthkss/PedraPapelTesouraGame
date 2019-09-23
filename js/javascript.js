let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const placar_div = document.querySelector(".placar");
const result_div = document.getElementById("resMessage");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const usuarioLetter = "(você)".fontsize(3).sub();
const computadorLetter = "(computador)".fontsize(3).sub();

function compChoice(){
  const choices = ['r','p','s'];
  const indexopt = Math.floor(Math.random() * 3);

  return choices[indexopt];
}


function convert(letra){

  if(letra=='r') return "Pedra";
  if(letra=='p') return "Papel";
  if(letra=='s') return "Tesoura";

}


function win(optplay,optcomp){
    user_id=document.getElementById(optplay);
    userScore++;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML = `Boa escolha jovem! ${convert(optplay)}${usuarioLetter}  ganha de  ${convert(optcomp)}${computadorLetter} . Você Venceu!`;
    document.getElementById(optplay).classList.add('verde-win');
    setTimeout(() => user_id.classList.remove('verde-win'),500);

    console.log(userScore);
}

function lose(optplay,optcomp){
    user_id=document.getElementById(optplay);
    compScore++;
    compScore_span.innerHTML=compScore;
    result_div.innerHTML = `Escolha errada jovem! ${convert(optplay)}${usuarioLetter}  é destruida pela ${convert(optcomp)}${computadorLetter} . Você perdeu!`;
    console.log(userScore);
    document.getElementById(optplay).classList.add('vermelho-lose');
    setTimeout(() => user_id.classList.remove('vermelho-lose'),500);
}

function draw(optplay,optcomp){
  user_id = document.getElementById(optplay);
  result_div.innerHTML = `Vish! ${convert(optplay)}${usuarioLetter}  neutraliza ${convert(optcomp)}${computadorLetter} . Aconteceu um empate!`;
  document.getElementById(optplay).classList.add('cinza-empate');
  setTimeout(() => user_id.classList.remove('cinza-empate'),500);
    console.log("empate");
}


function game(optplay){

const optcomp = compChoice();


  switch(optplay + optcomp)
  {
    case "rs":
    case "pr":
    case "sp":
        win(optplay,optcomp);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(optplay,optcomp);
        break;
    case "rr":
    case "ss":
    case "pp":
        draw(optplay,optcomp);
        break;
  }
}
function main(){
    rock_div.addEventListener('click',() => game('r'));

    paper_div.addEventListener('click',() => game('p'));

    scissors_div.addEventListener('click',() => game('s'));
}

main();
