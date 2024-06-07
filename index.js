let readlineSync = require("readline-sync");
let score = 0;

let kuler = require("kuler"); // to add colors
let userName = readlineSync.question("Enter your name: "); // to take input
console.log(kuler(`Hello ${userName} welcome to Quizify`, "#dc2626"))

console.log(kuler("Please select any option by typing either a/b/c/d", "#6d28d9"))

/**Creating Database */
const database = {
    data : [
        {
            question: `let a = {}, b = {} 
console.log(a == b) 
console.log(a ===b)`,
            options:{
                a: "false false",
                b: "false true", 
                c: "true false",
                d: "true true"
            },
            correctAnswer: "a"
        },
        {
            question: "Objct.assign(target, source) creates which type of copy?",
            options: {
                a: "Deep Copy",
                b: "Shallow Copy",
                c: "Nested Copy",
                d: " Create a new reference"
            },
            correctAnswer: "b"
        },
        {
            question: "Is method chaining possible with forEach?",
            options: {
                a: "Yes",
                b: "No"
            },
            correctAnswer: "b"
        }
    ]
}

/**Creating LeaderBoard */
const leaderBoard = {
    data: [
        {
            name: "Anya",
            score: 3
        },
        {
            name: "Sayali",
            score: 1
        },
        {
            name: "Prathamesh",
            score: 2
        },
        {
            name: "Jay",
            score: 3
        }

    ]
}

/**Creating Game Answer Checker */
function playGame(userAnswer, correctAnswer){
    if(userAnswer === correctAnswer){
        console.log(kuler("Correct Answer!", "#16a34a"));
        score++;
    }else{
        console.log(kuler("Wrong Answer!", "#b91c1c"));
        console.log(`Correct answer is ${correctAnswer}`);
    }
}

/**Print Question and the options and also take ans input */
function showQuestionOptions(database){
    for(let i=0; i<database.data.length; i++){
        console.log(kuler(`\nQ. ${i+1} - ${database.data[i].question}`, "#fde047"))
        for(let key in database.data[i].options){
            console.log(` ${key} - ${database.data[i].options[key]} `);
        }
        let userAnswer = readlineSync.question(kuler("\nEnter you answer: ", "#f9a8d4")).toLowerCase();
        playGame(userAnswer, database.data[i].correctAnswer);
    }
    
}

/**Show leaderboard */
function highScorer(leaderBoard){
    leaderBoard.data.push({name: userName, score: score})
    let sortedScoreList = leaderBoard.data.sort((a,b) => b.score - a.score)
    console.log(kuler("Check your position on the leaderboard!\n", "#06b6d4"))
    for(let leader of sortedScoreList)[
        console.log(kuler(`${leader.name} - Score: ${leader.score}`, "#ec4899"))
    ]
}

showQuestionOptions(database);
console.log(kuler(`\nGreat! You finished the test \nYour Score is: ${score}\n`, "#06b6d4"));
highScorer(leaderBoard);