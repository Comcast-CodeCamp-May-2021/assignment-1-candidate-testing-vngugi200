const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = [
"Who was the first American woman in space? ", 
"True or false: 5 kilometer == 5000 meters. ",
"5 + 3)/2 * 10 = ? ", 
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2 ",
"What is the minimum crew size for the ISS? "  ]

let correctAnswers =[
"Sally Ride",
"true",
"40",
"Trajectory",
"3"
];
let candidateAnswers = [];

let numberOfCorrectAnswers = 0

let totalQuestions = questions.length;

function askForName() {
  //let message = 

  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("what is your name? ");
console.log(candidateName)
}

function askQuestion() { 
//     return message;
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  console.log("\n")
  for(let i=0; i < questions.length; i++){
     candidateAnswer = input.question(`${i+1}). ${questions[i]}`);//${i+1}adds the numbers on side of the question eg 1) start at the number that the question starts at and not 0
     console.log(candidateAnswer) 
     console.log("\n")
     candidateAnswers.push(candidateAnswer);
    }

} 



function gradeQuiz(candidateAnswers) {

 
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

for(let i=0; i < questions.length; i++){
//console.log(candidateAnswers[i]);// we dont need this line as it prints an additonal set of answers that we dont need.

if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase())
{//changes all answers to lower case to make sure the answer is not case sensitive

numberOfCorrectAnswers = numberOfCorrectAnswers +1;//automatically calculates the number of correct answer and adds one. it compares what the candidate provides to the correct answer
} 

console.log(`${questions[i]}\nyour answer: ${candidateAnswers[i]}\ncorrect answer:${correctAnswers[i]}\n`)//this line prints the question then on a new line it prints the word your answer then the answer and then a new line the word correct answer and the answer the candidate provided.
}
  let grade =(numberOfCorrectAnswers/totalQuestions*100)
console.log(`>>>>Overall Grade:${grade}% (${numberOfCorrectAnswers} of ${totalQuestions} responses correct) <<<<`)// this takes grade and calculates it and then calculates the number of questions correct that we get back from line nuber 63
if(grade >= 60){
  console.log(">>>>>>> Status: PASSED <<<<<<<")
} else {
  console.log(">>>>>>> Status: FAILED <<<<<")
}
  return grade;

}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello ${candidateName}`);

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};