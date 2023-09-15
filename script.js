const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: " Hyper Text Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlink Technical Markup Language", correct: false },

        ]
    },

    {
        question: "The step by step procedure for solving a problem…",
        answers: [
            { text: "Programming", correct: false },
            { text: "Algorithm ", correct: true },
            { text: "Planing", correct: false },
            { text: "Flowchart", correct: false },
        ]
    },

    {
        question: "What is DBMS?",
        answers: [
            { text: "DBMS is a collection of queries.", correct: false },
            { text: "DBMS is a high-level language.", correct: false },
            { text: "DBMS is a programming language.", correct: false },
            { text: "DBMS stores, modifies and retrieves data.", correct: true },
        ]
    },

    {
        question: "What is the number of layers in the OSI model?",
        answers: [
            { text: "2 layers", correct: false },
            { text: "5 layers", correct: false },
            { text: "7 layers", correct: true },
            { text: "9 layers", correct: false },
        ]
    },

     {
        question: "Who invented Java Programming?",
        answers: [
            { text: "Tim Berners-Lee", correct: false },
            { text: "James Gosling", correct: true },
            { text: "Dennis Ritchie", correct: false },
            { text: "Bjarne Stroustrup", correct: false },
        ]
    },


    {
        question: "Which of the following is the correct way to add a comment in PHP code?",
        answers: [
            { text: "#", correct: false },
            { text: "//", correct: false },
            { text: "/* */", correct: false },
            { text: "All of the mentioned", correct: true },
        ]
    },


    {
        question: "Which number system has a base 16?",
        answers: [
            { text: "Hexadecimal", correct: true },
            { text: "Octal", correct: false },
            { text: "Binary", correct: false },
            { text: "Decimal", correct: false },
        ]
    },

    {
        question: "What is an operating system?",
        answers: [
            { text: "Interface between the hardware and application programs.", correct: true },
            { text: "Collection of programs that manages hardware resources.", correct: false },
            { text: "System service provider to the application programs.", correct: false },
            { text: "All of the mentioned.", correct: false },
        ]
    },

    {
        question: "Which of these is Mohit's favorite singer?",
        answers: [
            { text: "Atif Aslam", correct: false },
            { text: "Sonu Nigam", correct: false },
            { text: "Arijit Singh", correct: true },
            { text: "Jubin Nautiyal", correct: false },
        ]
    }


    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);


    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;

    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display="block";
}


function showScore(){

    resetState();
   

    if(score>0){
        questionElement.innerHTML = `Your scores ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }else{
        questionElement.innerHTML = `Your scores ${score} out of ${questions.length} And aapki halat bahut kharab hai😄!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{

    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
});
startQuiz();