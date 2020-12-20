var readLine = require('readline-sync'); 

var sharks = [
  {
    name: "megalodon",
    extinct: "yes",
    size: "18 meters",
    biteForce: 186000
  }, 
  {
    name: "great white shark",
    extinct: "no",
    size: "5 meters",
    biteForce: 17800
  }, 
  {
    name: "hammerhead",
    extinct: "no",
    size: "6 meters",
    biteForce: 2130
  }];

var questions = [
  {
    question : "Which Shark is the Biggest? ",
    answer : "megalodon"
  }, 
  {
    question : "which shark is the smallest? ",
    answer : "hammerhead"
  }, 
  {
    question : "which shark has a color in its name? ",
    answer : "greatWhite"
  }];

var score = 0;

console.log("HOW WELL DO YOU KNOW SHARKS?");
console.log("Answer by entering :");  
console.log("megalodon, greatWhite or hammerhead ");
console.log("");

function play(question, answer) {
  var userAnswer = readLine.question(question);



  if(userAnswer === answer) {
    console.log("Good job!")
    score = score + 1;
  } else {
    console.log("Oops! Wrong answer :(")
  }

  console.log("");
}

for(var i=0; i<questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log("");
console.log("Good job!");
console.log("You scored : ", score);