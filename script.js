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
function main(){
    if ( u == c){
        u = userTurn()
        c = cpuTurn()
        if ( u == c) {
            alert ("we both chose " + c)
        }
    winner = findWinner(u,c)
    alert (" you chose " + u + " I chose " + c + " and " + winner + " won")
    }
}

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

function findWinner(u,c){
    let combo = u+c
    switch(combo){
        case "rp":
        winner = "I"
        break
        case "pr":
        winner = "you"
        break
        case "ps":
        winner = "I"
        break
        case "sp":
        winner = "you"
        break
        case "sr":
        winner = "I"
        break
        case "rs":
        winner = "you"
        break
    }
    return winner
}