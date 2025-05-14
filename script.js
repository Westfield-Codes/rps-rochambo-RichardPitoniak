/* Steps 
*  0. Refer to https://lucid.app/lucidchart/3da5e3b5-33fe-4823-875c-81fb61c9d84c/view
*  1. Create Documentation and stubs for each function. //
*  2. Unit Test each function:
*     a. Add pseudocode based on flowchart, picking version
*     b. Test with console.log using stubs
*     c. Commit when it works.
*     d. Move to next function
*  3. System Test finished version (does it work right in all conditions?)
*/

/* 
*lets the user select the number of rounds, runs the game in a while loop, displays the final score
@param: none
@return: none
*/
var u = ""
var c = ""
const score = [0,0]

function main(){
    let winner =""
    let rounds = setrounds()
    for (let round = 1; round <= rounds; round++){
    winner = rpsRound()
    score[winner]++
    }
    alert ("you have " + score[0] + " and I have " + score[1])
    if (score[0] > score [1]) alert ("you win!")
    else alert ("I win!")
}

/* rpsRound
*handles duplicates, calls findwinner to add points
*@param: none
*@return: winner
*/
function rpsRound(){
        uChoice = 0
        cChoice = 0
        if ( uChoice == cChoice) {
            uChoice = userTurn()
            cChoice = cpuTurn()
            if ( uChoice == cChoice) {
                alert ("we both chose " + uChoice)
            }
        }
    winner = findWinner(uChoice,cChoice)
    let players = ["You","I"]
    let win = players.indexOf(winner)
   return win
}

function setrounds(){
    let rounds = prompt ("how many rounds would you like to play?")
    if (rounds%2 == 0){
        alert (" the number of rounds must be odd")
        return setrounds()
    }
    return rounds
}

/* userTurn
*lets the user enter an r p or s to play their turn
*@param: none
*@return: choice
*/
function userTurn(){
    let moves = ["r","p","s"]
   let choice = prompt ("enter an r p or s")
   if (moves.includes(choice)){
    return choice 
   }
   else {
    alert ("you must choose R P or S")
    return userTurn()
   }
}

/* cpuTurn
*randomly generates a number between 0 and 2 that corresponds to a cpu turn
*@param: none
*@return: r,p, or s
*/
function cpuTurn(){
let moves = ["r","p","s"]
let choice = Math.floor(Math.random()*2)
return (moves[choice])
}

/*findWinner
*lists all possible outcomes in an array, alerts the winner 
*@param: u,c
*@return: winner
*/
function findWinner(uChoice,cChoice){
let winArray = [["r","p","I"],["r","s","You"],["p","s","I"],["p","r","You"],["s","r","I"],["s","p","You"]]
let moves = uChoice+cChoice
for ( let i = 0; i <= winArray.length; i++ ){
let match = winArray[i][0]+winArray[i][1]
if (moves == match) winner = winArray[i][2]
}
alert ("you chose " + uChoice + " I chose " + cChoice + " so " + winner + " won")
}
