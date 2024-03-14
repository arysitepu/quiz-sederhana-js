// Data
const DB_QUIZ = [
    {
        question: "Apa itu SK?.",
        answers: ['Sewa Kamar', 'Sekolah koding', 'Sayur ketupat', 'Sauce cabai']
    },
    {
        question: "SOP Dibalik?.",
        answers: ['Pos', 'Osp', 'Pso', 'Tumpah']
    },
    {
        question: "Programmer itu?.",
        answers: ['Wibu', 'Kuat', 'Lemah', 'Apa?']
    },
];

const CORRECT_ANSWER = [0,3,3];

// SETUP QUESTION
function startQuiz(){
    document.getElementById('opening_window').style.display = "none";
    document.getElementById('quiz_window').style.display = "block";
}


let current_q = 0;
let total_score = 0;
let save_answer = [];
document.addEventListener("DOMContentLoaded", function(event){
    setupQuestion();
});

function setupQuestion(){
    document.getElementById('question').innerText = DB_QUIZ[current_q]['question'];
    document.getElementById('choiceText0').innerText = DB_QUIZ[current_q]['answers'][0];
    document.getElementById('choiceText1').innerText = DB_QUIZ[current_q]['answers'][1];
    document.getElementById('choiceText2').innerText = DB_QUIZ[current_q]['answers'][2];
    document.getElementById('choiceText3').innerText = DB_QUIZ[current_q]['answers'][3];
    
}

function nextQuestion(){
    current_q++;
    saveAnswer();
    if(current_q > DB_QUIZ.length - 1){
        stopQuiz();
    }
    resetState();
    setupQuestion();
}

function resetState(){
    const chooseAnswer = document.querySelector('input[name="choices"]:checked');
    if(chooseAnswer != null){
        chooseAnswer.checked = false;
    }
}

function stopQuiz(){
    checkScore();
    document.getElementById('quiz_window').style.display = "none";
    document.getElementById('closing_window').style.display = "block";
    document.getElementById('scoreText').innerHTML = "Score Kamu"+" "+total_score+" "+"silahkan refresh halaman untuk kembali ke awal"
    return
}

function saveAnswer(){
    const answer = document.querySelector('input[name="choices"]:checked');
    if(answer != null){
        save_answer.push(parseInt(answer.getAttribute('data-id')));
    }else{
        save_answer.push(0);
    }
}

function checkScore(){
    for(i = 0; i < save_answer.length; i++ ){
        if(save_answer[i] == CORRECT_ANSWER[i]){
            total_score += 100;
        }
    }
}
