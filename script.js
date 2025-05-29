/* UI */
// hide start button after click 
// add input box
// add current value: enter odd number of rounds 
// add submit button
// submit calls setrounds 
//setrounds needs to get value from input box

/* Global Variables */
let score = [0,0];

function playRPS(){
  let start=document.getElementById("start")
  start.remove()
  let paragraph = document.createElement("p")
  paragraph.id="paragraph"
  paragraph.innerHTML="enter an odd number of rounds to play"
  document.body.appendChild(paragraph)
  let input = document.createElement("input")
  input.id="input"
  document.body.appendChild(input)
 let enter = document.createElement("button")
  enter.id="enter"
  enter.innerHTML="Confirm"
  enter.style.margin="10px"
  enter.addEventListener("click", getRounds)
  document.body.appendChild(enter)
  // let winner = "";
  // let rounds = setRounds();
  // for (let round = 1; round <= rounds; round++){
  //   winner = rpsRound();
  //   score[winner]++;
  //   if (score[0] > rounds/2 || score[1] > rounds/2 ) round = rounds 
  // }
  // let gameWinner = "I"
  // if (score[0] > score[1]) gameWinner = "you"
  // alert("You have "+score[0]+" and I have "+ score[1] + " so " + gameWinner + " won!");
}

function getRounds(){
let rounds = document.getElementById("input")
rounds = rounds.value
parseInt(rounds)
if (rounds%2 == 0) alert ("must be odd, try again")
else {
  let input = document.getElementById("input")
  let enter = document.getElementById("enter")
  let paragraph = document.getElementById("paragraph")
  input.remove()
  enter.remove()
  paragraph.remove()
   let choice = document.createElement("p")
  choice.id="choice"
  choice.innerHTML="rock paper or scissors?"
  document.body.appendChild(choice)

  let rock = document.createElement("button")
  rock.id="rock"
  rock.innerHTML="Rock"
  rock.style.margin="10px"
  rock.style.backgroundColor="#e27272"
  rock.style.borderRadius="3px"
  // rock.addEventListener()
  document.body.appendChild(rock)
  let paper = document.createElement("button")
  paper.id="paper"
  paper.innerHTML="Paper"
  paper.style.margin="10px"
  paper.style.backgroundColor="#86e272"
  paper.style.borderRadius="3px"
  // paper.addEventListener()
  document.body.appendChild(paper)
    let scissors = document.createElement("button")
  scissors.id="scissors"
  scissors.innerHTML="Scissors"
  scissors.style.margin="10px"
  scissors.style.backgroundColor="#72d5e2"
  scissors.style.borderRadius="3px"
  // scissors.addEventListener()
  document.body.appendChild(scissors)
}
}


function setup(){
  let start = document.createElement("button");
  start.innerHTML="Play RPS"
  start.addEventListener("click", playRPS)
  start.id="start"
  document.body.appendChild(start)
}

function setRounds() {
  //  let rounds = prompt("Number of rounds?");
   if (rounds % 2 == 0) {
    // alert("must be odd, try again");
    return setRounds();
   }
   return rounds;
}

/* RPS Round
 * Plays a round of RPS and tells the winner ("I" or "You") won.
 * Returns the index (0,1) in score for the winner.
 * @param: none
 * @return: winner (0 or 1)
 */
function rpsRound() {
    let u = "";
    let c ="";
    while (u == c) {
        u = userTurn();
        c = cpuTurn();
        if (u ==c) {
            // alert("We both chose "  + c);
        }
  }
  winner = findWinner(u,c);
  let winValues = ["you", "I"];
  winnerWord = winValues[winner];
  // alert("You chose " + u + " and I chose "+ c +  " so " + winnerWord  +  " won"); 
  return winner; 
}

/* userturn
 * user can choose r, p, or s.
 * if bad Input, give new choice
 * @param:none
 * @return:choice
 */
function userTurn() {
    // let choice = prompt("enter r, p, or s");
    const turn = ["r","p","s"];
    if (!turn.includes(choice)) {
        // alert("Invalid Input");
        return userTurn();
    }
    return choice;
}

/* cpuTurn
 * computer choose between r, p, or s
 * @param:none
 * @return: choice
 */
function cpuTurn() {
    let choice = Math.floor(Math.random()*3);
    let moves = ["r","p","s"];
    return moves[choice];
}

/* findWinner
 * takes user and computer turn
 * decides who the winner is
 * returns winner
 * @param:u,c
 * @return: winner
 */
function findWinner(u,c) {
  let combo = u + c;
  let match = "";
  let winner = "";
  let winArray = [["r","p",0],["r","s",1],["s","r",0],["s","p",1],["p","s",0],["p","r",1]];
  for (let i =0;i < winArray.length;i++) {
    match = winArray[i][0]+winArray[i][1];
    if (match == combo) {
      winner = winArray[i][2];
      break;
    }
  }
  return winner;
}