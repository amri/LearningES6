"use strict";
let funds = 50;

while(funds > 1 && funds < 100)
{
    //place bets
    let bets = {
        crown: 0,
        anchor: 0,
        heart: 0,
        spade: 0,
        club: 0,
        diamond: 0
    };
    let totalBet = rand(1, funds);
    if(totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        //distribute
    }
    funds = funds - totalBet;
    //roll dice
    //collect winnings
    console.log(funds);
    //funds--;
}

function rand(m,n)
{
    return m + Math.floor((n-m+1) * Math.random());
}

function randFace(){
    return ["crown","anchor","heart","spade","club","diamond"][rand(0,5)];
}