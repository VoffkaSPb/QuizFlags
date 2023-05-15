const questions = [
   
    {
        question: "1",
        optionA: "Грузия",
        optionB: "Азербайджан",
        optionC: "Армения",
        optionD: "Англия",
        correctOption: "optionA"
    },

    {
        question: "2",
        optionA: "Гренландия",
        optionB: "Финляндия",
        optionC: "Исландия",
        optionD: "Норвегия",
        correctOption: "optionB"
    },
    {
        question: "3",
        optionA: "Cловения",
        optionB: "Словакия",
        optionC: "Сербия",
        optionD: "Россия",
        correctOption: "optionC"
    },

    {
        question: "4",
        optionA: "Великобритания",
        optionB: "Германия",
        optionC: "Италия",
        optionD: "Бельгия",
        correctOption: "optionD"
    },
    {
        question: "5",
        optionA: "Люксембург",
        optionB: "Нидерланды",
        optionC: "Германия",
        optionD: "Бельгия",
        correctOption: "optionC"
    },

    {
        question: "6",
        optionA: "Уругвай",
        optionB: "Болгария",
        optionC: "Венгрия",
        optionD: "Боливия",
        correctOption: "optionB"
    },
    {
        question: "7",
        optionA: "Исландия",
        optionB: "Эстония",
        optionC: "Швеция",
        optionD: "Финляндия",
        correctOption: "optionC"
    },

    {
        question: "8",
        optionA: "Венгрия",
        optionB: "Италия",
        optionC: "Болгария",
        optionD: "Испания",
        correctOption: "optionB"
    },
    {
        question: "9",
        optionA: "Италия",
        optionB: "Португалия",
        optionC: "Испания",
        optionD: "Сан-Марино",
        correctOption: "optionC"
    },
    {
        question: "10",
        optionA: "Латвия",
        optionB: "Перу",
        optionC: "Монако",
        optionD: "Австрия",
        correctOption: "optionA"
    },
    
]

let shuffledQuestions = []

function handleQuestions() {
    
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1
let playerScore = 0
let indexNumber = 0

function NextQuestion(index) {
    handleQuestions()

    const images = [
        '2/1-medium.png',
        '2/2-medium.png',
        '2/3-medium.png',
        '2/4-medium.png',
        '2/5-medium.png',
        '2/6-medium.png',
        '2/7-medium.png',
        '2/8-medium.png',
        '2/9-medium.png',
        '2/10-medium.png',
    ];
        const currentQuestion = shuffledQuestions[index]
        const Image = document.getElementById('display-question');
        Image.setAttribute('src', '')
        gol = currentQuestion.question;
        switch (gol) {
        
            case "1":
                Image.setAttribute('src',  images[0])
                break;
            
            case "2":
                Image.setAttribute('src',  images[1])
                break;
            case "3":
                Image.setAttribute('src',  images[2])
                break;
                
            case "4":
                Image.setAttribute('src',  images[3])
                break;     
            case "5":
                Image.setAttribute('src',  images[4])
                break;
            
            case "6":
                Image.setAttribute('src',  images[5])
                break;    
            case "7":
                Image.setAttribute('src',  images[6])
                break;     
            case "8":
                Image.setAttribute('src',  images[7])
                break;
                
            case "9":
                Image.setAttribute('src',  images[8])
                break;    
            case "10":
                Image.setAttribute('src',  images[9])
                break;  
            default:
            
            break;
      }
      
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    options.forEach((option) => {

        document.getElementById("option-one").disabled = true;
        document.getElementById("option-two").disabled = true;
        document.getElementById("option-three").disabled = true;
        document.getElementById("option-four").disabled = true;
        
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "#92CD64"
            playerScore++
            indexNumber++
            setTimeout(() => {
                questionNumber++
                document.getElementById("option-one").disabled = false;
                document.getElementById("option-two").disabled = false;
                document.getElementById("option-three").disabled = false;
                document.getElementById("option-four").disabled = false;
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "#F25C3B"
            document.getElementById(correctOption).style.backgroundColor = "#92CD64"
            indexNumber++
            setTimeout(() => {
                document.getElementById("option-one").disabled=false;
                document.getElementById("option-two").disabled  =false;
                document.getElementById("option-three").disabled  =false;
                document.getElementById("option-four").disabled  =false;
                questionNumber++
            }, 1000)
        }
    })
}

function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

    if (playerScore <= 3) {
        remark = "Это никуда не годится... Тебе следует изучить материал и больше практиковаться!"
        remarkColor = "#F25C3B"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Неплохо, однако стоит немного подучить материал"
        remarkColor = "#D9DF63"
    }
    else if (playerScore >= 7) {
        remark = "Good job! Ты справился с вопросами, продолжай в том же духе!"
        remarkColor = "#92CD64"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('number-of-points').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}
        
const submit1 = document.getElementById("submit1");
submit1.addEventListener("click", function() {
    window.location.href = "Glavnaya.html";
});