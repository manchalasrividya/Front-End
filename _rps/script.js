const computerHands =['rock','papper','scissors']
let display= document.getElementById("display")


const shoot = (hand) => {
    let randNo =Math.floor(Math.random() * 3)
    let computerHand =computerHands[randNo]


    if (hand=== computerHand) {
        display.innerHTML ="Draw"

    }else if(
        hand=== "rock" && computerHand ==="scissors" ||
        hand=== "papper" && computerHand ==="rock" ||
        hand=== "scissors" && computerHand ==="papper" 

    ){
        display.innerHTML ="you won"
    }else {
        display.innerHTML ="computer won"
    }

}