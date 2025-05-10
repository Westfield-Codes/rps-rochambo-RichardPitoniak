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
var u = ""
var c = ""
const score = [0,0]
function main(){
    let rounds = prompt ("how many rounds would you like to play?")
    if ( rounds%2 == 0) {
        alert ("the number of rounds has to be odd, try again")
        main()
    }
    let round = "1"
    while (round <= rounds /* && !checkHalf()*/){
        alert ("round " + round + " of " + rounds  +"." + " the score is " + score[0] + " to " + score[1])
        rpsRound()
        round++
    }
    if (score[0]>score[1]){
        alert ("you win! The final score was " + score[0] + " to " + score[1] )
    }
    else if (score[0]==score[1]) alert (" it's a tie! No one wins ")
    else alert ("the computer wins! The final score was "  + score[0] + " to " + score[1] )
}
function rpsRound(){
        u = userTurn()
        c = cpuTurn()
        if ( u == c) {
            alert ("we both chose " + c + " no one gets points")
        }
    winner = findWinner(u,c)
    alert (" you chose " + u + " I chose " + c + " and " + winner + " got a point")
}

/* function checkHalf(){
if (score[0] > rounds%2){ 
    winner = " you " 
    return winner
}
else if (score[1] > rounds%2){ 
    winner = " I "
    return winner
}
else rpsRound()
} */

function userTurn(){
   let choice = prompt ("enter an r p or s")
   if (choice !== "r" && choice !== "p" && choice !== "s"){
    alert ("invalid input")
    userTurn()
   }
   return choice
}

function cpuTurn(){
    let choice = Math.floor(Math.random()*2)
    if (choice == 0) return "r"
    else if (choice == 1) return "p"
    else return "s"
}

/* function findWinner(u,c){
    let combo = u+c
    let match = ""
    winner = ""
    const winArray = [ ["r","p","I"],["p","r","you"],["p","s","I"]["s","p","you"],["s","r","I"],["r","s","you"] ]
    for (let i = 0; i<winArray.length; i++){
        match = winArray[i][0] + winArray[i][1]
        if (match == combo){
            winner = winArray[i][2]
            break
        }
    }
    return winner
}
*/ 
 function findWinner(u,c){
    let combo = u+c
    switch(combo){
        case "rp":
        winner = "I"
        score[1]++
        break
        case "pr":
        winner = "you"
        score[0]++
        break
        case "ps":
        winner = "I"
        score[1]++
        break
        case "sp":
        winner = "you"
        score[0]++
        break
        case "sr":
        winner = "I"
        score[1]++
        break
        case "rs":
        winner = "you"
        score[0]++
        break
        case "rr":
        winner = "no one"
        break
        case "ss":
        winner = "no one"
        break
        case "pp":
        winner = "no one"
        break
    }
    return winner
} 