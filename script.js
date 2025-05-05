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
var u =""
var c =""
function main(){
    if (u == c){
        u = userTurn()
        c = cpuTurn()
        if (u == c) {
            alert ("we both chose " + c)
        }
    }
    winner = findWinner(u,c)
    alert ("you chose " + u + " I chose " + c + " and " + winner + " won")
}
function userTurn(){
    let choice = prompt (" enter r p or s")
    if (choice == "r" || choice == "p" || choice == "s" ){
        return choice
    }
    alert ("invalid input")
    return userTurn()
}
function cpuTurn(){
    let choice = Math.floor(Math.random()*2)
    switch(choice){
        case 0:
            return "r"
        case 1: 
            return "p"
        default: 
        return "s"
    }
}
function findWinner(){
    let combo = u+c
    switch(combo){
        case "rp": {
            winner = "I"
            break
        }
        case "pr": {
            winner = "you"
            break
        }
        case "sp": {
            winner = "you"
            break
        }
        case "ps": {
            winner = " I "
            break
        }
        case "rs": {
            winner = "you"
            break
        }
        case "sr": {
            winner = "I"
            break
        }
        case "rr": {
            winner = "no one"
            break
        }
        case "pp": {
            winner = "no one"
            break
        }
        case "ss": {
            winner = "no one"
            break
        }
    }
    return winner 
}