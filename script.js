document.addEventListener('DOMContentLoaded', () => {

   const questions = [
        {
            question: "Який велосипед часто називають «Ашанбайком» через характерний дешевий двопідвісний дизайн та продаж у супермаркетах?",
            image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=500",
            answers: ["Залізний двопідвіс TopRider / Crosser", "Шосейний карбоновий Trek", "Гревел Pride Rocx", "BMX BSD"],
            correct: 0
        },
        {
            question: "До якого типу брендів належить Rockrider, що масово продається у спортивних супермаркетах Decathlon?",
            image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=500",
            answers: ["Елітні кастомні велосипеди", "Якісний та доступний бренд великої мережі супермаркетів", "Професійні трекові велосипеди", "Китайські підробки найгіршої якості"],
            correct: 1
        },
        {
            question: "Яка головна небезпека покупки супер-дешевого велосипеда «з коробки» у звичайному продуктовому супермаркеті?",
            image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=500",
            answers: ["Він занадто швидкий", "Неякісна збірка, слабкі компоненти та ризик поломки на ходу", "Він має дуже велику гарантію", "На ньому заборонено їздити парками"],
            correct: 1
        },
        {
            question: "Який тип велосипеда найкраще підходить для швидкої їзди по рівному асфальту?",
            image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=500",
            answers: ["Гірський (MTB)", "Шосейний", "Тріальний", "Фетбайк"],
            correct: 1
        },
        {
            question: "Подивіться на велосипед з дуже товстими покришками. Як називається цей тип?",
            image: "https://images.unsplash.com/photo-1511994298241-608e28f14f66?q=80&w=500",
            answers: ["Фетбайк (Fatbike)", "Гревел (Gravel)", "Міський (Citybike)", "Фікс (Fixed Gear)"],
            correct: 0
        },
        {
            question: "Який відомий український бренд велосипедів славиться своєю лінійкою гревелів «Rocx»?",
            image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=500",
            answers: ["Pride", "Cannondale", "Specialized", "Shimano"],
            correct: 0
        },
        {
            question: "Для чого призначений тип велосипедів без амортизаторів, але з кермом «баран» (гревел)?",
            image: "https://images.unsplash.com/photo-1501147233991-6c57d7a3e074?q=80&w=500",
            answers: ["Для стрибків з трамплінів", "Для швидкої їзди по асфальту та гравію на великі відстані", "Для перевезення важких вантажів", "Для даунхілу (швидкісного спуску з гір)"],
            correct: 1
        },
        {
            question: "Що означає, якщо на велосипеді написано «Cannondale» або «Trek»?",
            image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=500",
            answers: ["Це найдешевші велосипеди з Ашану", "Це відомі світові преміум-бренди з якісними рамами та компонентами", "Це назви деталей гальмівної системи", "Це маркування електровелосипедів"],
            correct: 1
        },
        {
            question: "Який амортизатор має класичний гірський велосипед типу «хардтейл»?",
            image: "https://images.unsplash.com/photo-1444492417251-a58132afe69e?q=80&w=500",
            answers: ["Тільки задній", "Тільки передню амортизаційну вилку", "І передній, і задній", "Взагалі не має амортизаторів"],
            correct: 1
        },
        {
            question: "Для чого використовують маленький трюковий велосипед з низькою рамою та 20-дюймовими колесами?",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=500",
            answers: ["Для поїздок за продуктами", "Для трюків та стрибків у скейтпарках (BMX)", "Для швидкісних перегонів", "Для їзди по глибокому снігу"],
            correct: 1
        },
        {
            question: "Який бренд є лідером у виробництві систем перемикання передач (трансмісій) для більшості велосипедів?",
            image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=500",
            answers: ["Shimano", "Ferrari", "Apple", "Total"],
            correct: 0
        },
        {
            question: "Як називається велосипед, який має лише одну фіксовану передачу і педалі крутяться завжди, коли котиться колесо?",
            image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=500",
            answers: ["Гірський", "Фікс (Fixed gear)", "Двопідвіс", "Електробайк"],
            correct: 1
        },
        {
            question: "Що з переліченого є обов'язковим елементом безпеки при їзді на будь-кому велосипеді?",
            image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=500",
            answers: ["Велосипедний шолом", "Стильні кросівки", "Рюкзак", "Сонцезахисні окуляри"],
            correct: 0
        },
        {
            question: "Подивіться на міський круїзер з кошиком. Для чого він підходить найкраще?",
            image: "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?q=80&w=500",
            answers: ["Для комфортних неспішних поїздок містом та парками", "Для професійного даунхілу", "Для стрибків через колоди", "Для встановлення рекордів швидкості"],
            correct: 0
        },
        {
            question: "Які гальма вважаються найбільш ефективними для гірського велосипеда у брудну чи дощову погоду?",
            image: "https://images.unsplash.com/photo-1444492417251-a58132afe69e?q=80&w=500",
            answers: ["Ободні (V-brake)", "Дискові (гідравлічні або механічні)", "Ножні (назад педалями)", "Гальмування підошвою об асфальт"],
            correct: 1
        },
        {
            question: "Що зазвичай знаходиться на кермі сучасного спортивного велосипеда, окрім ручок (гріпсів)?",
            image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=500",
            answers: ["Гальмівні ручки та манетки (перемикачі)", "Pedali", "Ланцюг", "Задній перемикач"],
            correct: 0
        },
        {
            question: "Який матеріал рами є найлегшим та найдорожчим у професійних велосипедах?",
            image: "https://images.unsplash.com/photo-1501147233991-6c57d7a3e074?q=80&w=500",
            answers: ["Сталь (хайтен)", "Чавун", "Карбон (вуглепластик)", "Дерево"],
            correct: 2
        },
        {
            question: "Як називається стиль їзди в горах, що включає швидкісний спуск по складних трасах з трамплінами?",
            image: "https://images.unsplash.com/photo-1511994298241-608e28f14f66?q=80&w=500",
            answers: ["Даунхіл (Downhill)", "Шосе", "Тріатлон", "Урбан бревет"],
            correct: 0
        },
        {
            question: "Чому не варто купувати найдешевший важкий двопідвіс в супермаркеті за дуже низьку ціну?",
            image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=500",
            answers: ["Він занадто легкий", "Дешеві амортизатори не працюють як треба, додають купу ваги та швидко ламаються", "На ньому не можна поставити дзвіночок", "Він пофарбований поганою фарбою"],
            correct: 1
        },
        {
            question: "Який тип велосипеда має мотор, акумулятор і допомагає крутити педалі на підйомах?",
            image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=500",
            answers: ["Нітробайк", "Електровелосипед (E-bike)", "Скутер", "Карбоновий фікс"],
            correct: 1
        }
    ];

    // Створення елементів
    const startScreen = document.querySelector('#start-screen');
    const quizScreen = document.querySelector('#quiz-screen');
    const resultScreen = document.querySelector('#result-screen');
    const startBtn = document.querySelector('#start-btn');
    const restartBtn = document.querySelector('#restart-btn');
    const resultText = document.querySelector('#result-text');
    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');

    let questionIndex = 0;
    let score = 0;
    let timer = 15; // Таймер на 15 секунд
    const timerDisplay = document.querySelector('#timer');
    let interval; // Змінна для зберігання інтервалу

    // Функція для відображення запитання
    function showQuestion(question) {

        clearInterval(interval); // Скидаємо таймер
        startTimer();

        answersContainer.innerHTML = '';
        questionText.innerText = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement('button');
            button.innerText = question.answers[i];
            button.classList.add('answer-btn');
            button.addEventListener('click', () => checkAnswer(button, i));
            answersContainer.appendChild(button);

        }
    }
    showQuestion(questions[questionIndex]);
    // Завдання 5 - Функція для переходу до наступного запитання
    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion(questions[questionIndex]);
        } else {
            showResult();
        }
    }
    // Завдання 4 - Перевірка відповіді
    function checkAnswer(button, i) {
        if (i == questions[questionIndex].correct) {
            score++;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
        // Відключення кнопок після вибору відповіді
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;
        })
        // Таймер на 1 секунду
        setTimeout(nextQuestion, 1000);
    }


    // Завдання 7 - Відображення результату і статистики
    function showResult() {
        const accuracy = Math.round((score / questions.length) * 100);
        resultText.innerText = `Твій результат: ${score}/${questions.length} (${accuracy}%)`;
        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');
        const finalScore = document.querySelector('#final-score');
        finalScore.innerText = score;
    }
    // Завдання 3 - Керування екранами (JS)
    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }

    startBtn.addEventListener('click', startGame);


    // Завдання 6 - Таймер
    function startTimer() {
        timer = 15;
        timerDisplay.innerText = `Час: ${timer}`;
        interval = setInterval(() => {
            timer--;
            timerDisplay.innerText = `Час: ${timer}`;
            if (timer <= 0) {
                clearInterval(interval);
                nextQuestion();
            }
        }, 1000);
    }

    restartBtn.addEventListener('click', () => {
        startGame();
        resultScreen.classList.add('hide');
    });

});
