// Получаем элементы страницы, которые будут использоваться для отображения вопросов и ответов
const questionElement = document.getElementById("question");
const imageElement = document.getElementById("image");
const optionsElement = document.getElementById("options");

// Создаем переменные для отслеживания текущего вопроса и общего количества вопросов
let currentQuestion = 0;
const totalQuestions = questions.length;

// Функция для отображения текущего вопроса и вариантов ответов
function showQuestion() {
    // Получаем текущий вопрос из массива объектов
    const current = questions[currentQuestion];

    // Отображаем вопрос и изображение на странице
    questionElement.textContent = current.question;
    imageElement.src = current.image;

    // Создаем HTML-элементы для каждого варианта ответа и добавляем их на страницу
    optionsElement.innerHTML = "";
    current.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        optionsElement.appendChild(button);
    });
}

// Функция для проверки ответа пользователя и перехода к следующему вопросу
function checkAnswer(event) {
    // Получаем выбранный пользователем вариант ответа
    const selectedOption = event.target.textContent;

    // Получаем правильный ответ на текущий вопрос из массива объектов
    const current = questions[currentQuestion];
    const correctAnswer = current.answer;

    // Проверяем, правильный ли ответ дал пользователь
    if (selectedOption === correctAnswer) {
        // Если ответ правильный, увеличиваем счетчик правильных ответов
        // и переходим к следующему вопросу
        currentQuestion++;
        if (currentQuestion < totalQuestions) {
            showQuestion();
        } else {
            // Если это был последний вопрос, выводим результаты
            alert("Вы ответили правильно на все вопросы!");
        }
    } else {
        // Если ответ неправильный, сообщаем об этом пользователю
        alert("Неправильный ответ. Попробуйте еще раз.");
    }
}

// Назначаем обработчики событий для кнопок с вариантами ответов
optionsElement.addEventListener("click", checkAnswer);

// Отображаем первый вопрос на странице
showQuestion();
const data = [
    {
        question: "Флаг какой страны изображен на рисунке?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101875404953890856/russian-flag-russian-flag-russia-flag-of-russia.png?width=913&height=670",
        answer: "Россия",
        options: 
        [
        "Россия",
        "Украина",
        "Беларусь",
        "Казахстан"
        ]
    },
        {
    question: "А это какая страна?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101875790020358164/FootageCrate-4K_Looping_Flag_China-prev-full.png?width=1191&height=670",
        answer: "Китай",
        options: 
        [
        "Вьетнам",
        "Япония",
        "Китай",
        "Южная Корея"
        ]
    },  
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101876244754219039/rabstol_net_flags_57.png?width=1072&height=670",
        answer: "США",
        options:
        [
        "США",
        "Иран",
        "Сирия",
        "Россия" 
            
        ]
    },
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101876555094962388/og_og_1578431288274113172.png?width=1280&height=670",
        answer: "Франция",
        options:
        [
        "Великобритания",
        "Германия",
        "Франция",
        "Италия" 
        ]
    },
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101877028023713902/756691574229649.png?width=975&height=670",
        answer: "Канада",
        options:
        [
        "كندا",
        "カナダ",
        "Canada",
        "Канада" 
        ]
    },
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101877958974648340/600f255bd00ce59850714f052f87b494.png?width=1041&height=670",
        answer: "Аргентина",
        options:
        [
        "Уругвай",
        "Аргентина",
        "Перу",
        "Боливия" 
        ]
    },
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101878317277270036/rabstol_net_flags_20.png?width=1072&height=670",
        answer: "Литва",
        options:
        [
        "Латвия",
        "Эстония",
        "Литва",
        "Германия" 
        ]
    },
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101878507287621674/6029010768.png?width=1192&height=670",
        answer: "Норвегия",
        options:
        [
        "Швеция",
        "Дания",
        "Исландия",
        "Норвегия" 
        ]
    },
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101878984725254206/0a59b8838e5cd390409506e693b03cfb.png?width=1005&height=670",
        answer: "Молдова",
        options:
        [
        "Молдова",
        "Андорра",
        "Сан-Марино",
        "Ватикан" 
        ]
    },
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101879690563686490/1644975858_2-fikiwiki-com-p-kartinki-flag-albanii-2.png?width=893&height=670",
        answer: "Албания",
        options:
        [
        "Чад",
        "Лихтенштейн",
        "Албания",
        "Доминиканская республика" 
        ]
    },
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101880389146005614/news-2019-02-17.png?width=1065&height=600",
        answer: "Словакия",
        options:
        [
        "Словения",
        "Хорватия",
        "Словакия",
        "Сербия" 
        ]
    },
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
        answer: "Индонезия",
        options:
        [
        "Сомали",
        "Монако",
        "Польша",
        "Индонезия" 
        ]
    },
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101881649865699479/1500px-Flag_of_Santo_TomC3A1s_28AtlC3A1ntico29.png?width=1005&height=670",
        answer: "Нигерия",
        options:
        [
        "Нигер",
        "Нигерия",
        "Сомали",
        "Центральная Африканская Республика" 
        ]
    },
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101882081589600276/ntf_608.png?width=1005&height=670",
        answer: "Австралия",
        options:
        [
        "Австралия",
        "Новая Зеландия",
        "Фиджи",
        "Штаты Микронезии" 
        ]
    },
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101884732188405800/1035px-Flag_of_Antigua_and_Barbuda_282000_World_Factbook29.png?width=1005&height=670",
        answer: "Антигуа и Барбуда",
        options:
        [
        "Сан-Томе и Принсипе",
        "Антигуа и Барбуда",
        "Маврикий",
        "Мадагаскар" 
        ]
    },
    {   
        question: "Какая страна изображена на флаге?",
        image: "https://media.discordapp.net/attachments/908317244629606430/1101884877634289695/AKln8AwF484.png?width=996&height=670",
        answer: "Антигуа и Барбуда",
        options:
        [
        "Сан-Томе и Принсипе",
        "Антигуа и Барбуда",
        "Маврикий",
        "Мадагаскар" 
        ]
    },
];
