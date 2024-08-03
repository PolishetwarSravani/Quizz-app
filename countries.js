const quizData=[
    {
        question:"Capital of Podgorica ",
        a:"Yemen",
        b:"Turkey",
        c:"Montenegro",
        d:"Delhi",
        correct_answer:"c",
    },
    {
        question:"Capital of France",
        a:"Berlin",
        b:"Paris",
        c:"Bissau",
        d:"Budapest",
        correct_answer:"b",
    },
    {
        question:"Capital of Bhutan",
        a:"Sofia",
        b:"Road town",
        c:"Thimpu",
        d:"Santiago",
        correct_answer:"c",
    },
    {
        question:"Capital of Morocco",
        a:"Oslo",
        b:"Lome",
        c:"Honiara",
        d:"Rabat",
        correct_answer:"d",
    },
    {
        question:"Capital of North Korea",
        a:"Pyngyang",
        b:"Kigali",
        c:"Basseterre",
        d:"Tashkent",
        correct_answer:"a",
    }
    ];
    const quiz=document.getElementById("quiz");
    const answerEls=document.querySelectorAll(".answer");
    const questionE1=document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const buttonEl=document.getElementById("submit");
    
    let currentQuiz=0;
    let score=0;
    
    loadQuiz();
    
    function loadQuiz()
    {
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        console.log(currentQuizData);
        questionE1.innerText=currentQuizData.question;
        a_text.innerText=currentQuizData.a;
        b_text.innerText=currentQuizData.b;
        c_text.innerText=currentQuizData.c;
        d_text.innerText=currentQuizData.d;
    
    }
    function getSelected(){
        let answer=undefined;
        answerEls.forEach((answerEl)=>{
            if(answerEl.checked){
                answer=answerEl.id;
            }
        });
        return answer;
    }
    function deselectAnswers(){
        answerEls.forEach((answerEl)=>{
            answerEl.checked=false;
        });
    }
    buttonEl.addEventListener("click",()=>{
        const answer=getSelected();
        if(answer){
            if(answer === quizData[currentQuiz].correct_answer)
            {
                score++;
            }
        currentQuiz++;
        if(currentQuiz<quizData.length)
        {
            loadQuiz();
        }
        else{
            quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions.<\h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
    });