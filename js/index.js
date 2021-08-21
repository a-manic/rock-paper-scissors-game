const handOptions ={
    "rock" : "./assets/Rock.png",
    "paper" : "./assets/Paper.png",
    "scissors" : "./assets/Scissors.png"
}
    
let SCORE = 0;

const pickUserHand = (hand) => {
    //hide current page

    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    //set user pick

    document.getElementById("user-pick-image").src = handOptions[hand];

    let compPick = pickHouseHand();

    referee(hand, compPick);
};

const pickHouseHand = () => {

    let hands = ["rock", "paper", "scissors"];
    //computer pick

    let compPick = hands[Math.floor(Math.random() * 3)];

    document.getElementById("comp-pick-image").src = handOptions[compPick];

    return compPick;

};

const referee = (user, comp) => {

    if(user == "paper" && comp == "paper" || user == "rock" && comp == "rock" || user == "scissors" && comp == "scissors"){
        setDecision("ITS A TIE");
    }

    if(user == "paper" && comp == "rock" || user == "rock" && comp == "scissors" || user == "scissors" && comp == "paper"){
        setDecision("YOU WIN");
        setScore(SCORE + 1);
    }

    if(user == "rock" && comp == "paper" || user == "scissors" && comp == "rock" || user == "paper" && comp == "scissors"){
        setDecision("YOU LOSE");
    }


}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}

const restartGame = () => {

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let contest = document.querySelector(".contest");
    contest.style.display = "none";
};

