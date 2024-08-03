const quizData=[
    {
        question:"National flower of India ",
        a:"Lotus",
        b:"Rose",
        c:"Jasmine",
        d:"Marigold",
        correct_answer:"a",
    },
    {
        question:"In which year india got independence ",
        a:"1949",
        b:"1974",
        c:"1947",
        d:"1969",
        correct_answer:"c",
    },
    {
        question:"Who is the first president of India ",
        a:"Jawaharlal Nehru",
        b:"Dr. Rajendra Prasad",
        c:"Mahatma Gandhi",
        d:"Dr. B. R. ambedkar",
        correct_answer:"b",
    },
    {
        question:"Capital city of India ",
        a:"Hyderabad",
        b:"Delhi",
        c:"Kolkata",
        d:"Mumbai",
        correct_answer:"b",
    },
    {
        question:"Who is the prime minister of India in 2024",
        a:"Man mohan singh",
        b:"Rahul gandhi",
        c:"Narendra modi",
        d:"Jawaharlal Nehru",
        correct_answer:"c",
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