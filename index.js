const readlinesync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
console.log(chalk.bold.blue("----------------------LET US BEGIN-----------------------"));
var username = readlinesync.question("Please enter your good name: ");
console.log(chalk.red("Welcome " + username + " to DO YOU KNOW Sanskriti quiz play!"));
console.log("Here are some basic rules  of the game : ");
console.log(chalk.yellow("--------------------------------------------------------------------------------------------------------------------------------------"));
console.log("1. There will be ten questions about me that u have to answer.");
console.log("2. Each correct answer carries a point.");
console.log("3. You have to answer in the form of alphabet u think the correct answer is. Make sure that u answer the correct option alphabet.");
console.log(chalk.yellow(":)))))))))))))))))))))))))))))))))))))))))) ALL THE BEST :))))))))))))))))))))))))))))))))))))))))"));



function play(question,answer){
    var ans = readlinesync.question(question);
    
    if(ans===answer){
        console.log(chalk.green( "Hurray!! you are right"));
        score = score+1;
       
    }
    else{
        console.log(chalk.red( "Oops!! you are wrong"));
    }
    console.log("Your current score: "+score);
    console.log("------------------------------");
}
var qone={
    question : "Which is my fav colour:\n a:pink  \n b:black \n c:blue",
    answer : "c"
}
var qtwo={
    question : "From which city am i doing my studies:\n a:kashipur \n b:nainital \n c:dehradun ",
    answer : "b"
}
var qthree={
    question: "Which sport do i like to play: \n a:tennis \n b:cricket \n c:badminton ",
    answer: "c"
}
var qfour={
        question: "Which course does m i pursuing: \n a:btech \n b:bca \n c:bsc ",
        answer: "b"
}
var qfive={
    question: "Do you know my zodiac sign: \n a:leo \n b:virgo \n c:gemini ",
    answer: "c"
}
var qsix={
    question: "My favourite street food:\n a:springrolls \n b:pavbhaji \n c:momos ",
    answer: "a"
}
var qseven={
    question: "My favourite fruit: \n a:mango \n b:litchi \n c:apples ",
    answer: "b"
}
var qeight={
    question: "Do i like travelling: \n a:yes \n b:no ",
    answer: "a"
}
var qnine={
    question: "What do i prefer to watch more: \n a:movies\n b:webseries ",
    answer: "a"
}
var qten={
    question: "Am i a ?\n a:mountian person\n b:water person ",
    answer: "b"
}

var questions =[qone,qtwo,qthree,qfour,qfive,qsix,qseven,qeight,qnine,qten];
for( var i =0;i<questions.length;i++){
    play(questions[i].question, questions[i].answer)
}

console.log(chalk.bold.magenta("Your score: "+score));

console.log(chalk.bold.blue(" Thank you soo much!!!!!!!Hope you enjoyed it."));


