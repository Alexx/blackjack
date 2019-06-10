$(document).ready(function(){

  var masterDeck = [];
  var dealtCards = []
  var scores =[];
  var suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
  var numbers = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];



  var numberValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  var playerCardCount = 3;

  console.log(numberValue);
  suits.forEach(function(input1) {
    numbers.forEach(function(input2) {
      masterDeck.push(input2 + " of " + input1);
    });
  });

  function generateRandomCard() {
    number = Math.floor(Math.random() * (masterDeck.length-0) + 0);
    return number;
  }

  $("#DEAL").click(function(event){
    console.log("DEAL ME BABY");

    // this picks cards from masterDeck based on a random number for each loop, and adds it to the dealtCards, then removes it from masterDeck
    for(i = 0; i < 4; i++) {
      var randomCardNumber = generateRandomCard();
      console.log(masterDeck[randomCardNumber]);
      dealtCards.push(masterDeck[randomCardNumber]);
      masterDeck.splice(randomCardNumber, 1);
      scores.push(numberValue[randomCardNumber]);
      console.log(masterDeck);
      console.log(dealtCards);
      console.log(scores);
    }

    $(".dealer-card-1").text(dealtCards[0]);
    $(".dealer-card-2").text(dealtCards[1]);
    $(".player-card-1").text(dealtCards[2]);
    $(".player-card-2").text(dealtCards[3]);


    event.preventDefault();


  });

  $("#HIT").click(function(event){
    event.preventDefault();
    var randomCardNumber = generateRandomCard();
    console.log(masterDeck[randomCardNumber]);
    scores.push(numberValue[randomCardNumber]);
    dealtCards.push(masterDeck[randomCardNumber]);
    masterDeck.splice(randomCardNumber, 1);
    console.log(masterDeck);
    console.log(dealtCards);
    console.log(scores);
    $(".player-hand").append('<div class="player-card-'+ playerCardCount + '"></div>');
    $(".player-card-" + playerCardCount).text(dealtCards[playerCardCount + 1]);
    playerCardCount++;
  });

  $("#HOLD").click(function(event){
    console.log("Hodling");
    event.preventDefault();
    $(".dealer-card-2").show();

  });

  function isJack(element){
    return element === "Jack";
  }

  $("#SCORE").click(function(event){
    event.preventDefault();

    var total = 0;
    for (var i = 0; i < scores.length; i++){
      total += scores[i] << 0;
    }

    var dealerTotal = scores[0] + scores[1];

    console.log("Dealer Score:" + dealerTotal);
    console.log("Player Score:" + (total-dealerTotal));

  });



});
