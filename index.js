alert(`Правила гри:\n1 : Всюду де потребує гра ставити конкретні відповіді,обов\'язково ставити саме їх,наприклад : так або ні\n
2 : Якщо вас запитуют щось,де можна відповісти не конкретними відповідями які були вказані в 1 правилі наприклад,то пишіт їх`);

alert('Привіт,мене звати Кіля');
alert('Я такий собі бот створений майбутнім сверх-супер-пупер програмістом Шупеньом Максимом Миколайовичом');
alert('Для того щоб він міг потренуватись із кодом і щоб трішки розвеселити тебе,або ні)');
let name = prompt('Для початку скажи яким іменем тебе "обдарували" твої батьки?');
while (name == '' || name == null) {
    name = prompt('Для початку скажи яким іменем тебе "обдарували" твої батьки?');
}
alert(`Оу,непогане ім'я, ${name} ,справді непогане`);
alert('Шутка)');

let hi = prompt('Я хачу піцу,а ще мне грустно і одіноко,го абщаться.Розкажи про себе.Любиш піцу?');
while (hi == '' || hi == null) {
    hi = prompt('Я хачу піцу,а ще мне грустно і одіноко,го абщаться.Розкажи про себе.Любиш піцу?Пиши "так" або "ні".');
};

alert('Хм...');

if (hi == 'так') {
    alert('Харош');
};

if (hi == 'ні') {
    alert('Ну всьо,капец тобі,тікай з села.');
    alert('...');
    alert('Але я не вірю,що можна не любити піцу,тож давай колись.');
};

let guessEat = prompt('Яку саме піцу ти обожнюєш?');
while (guessEat == '' || guessEat == null) {
    guessEat = prompt('Яку саме піцу ти обожнюєш?');
};

let eat = alert('Тобто ти любиш ' + guessEat + '?Незнаю чи э така взагалі,но ладно.');

alert('Доречі');
alert('Нехоч завтра піти десь перекусити? До тебе додому наприклад)');

let quessesForHome = prompt('Хоч?');
while (quessesForHome == '' || quessesForHome == null) {
    quessesForHome = prompt('Хоч?');
} if (quessesForHome == 'так') {
    alert('ООО,зачот,ну шо коли виїхати?)');
} if (quessesForHome == 'ні') {
    alert('Та чого ти,норм ж ідея');
    alert('Ну якщо в тебе є варіант покраще,можеш запропонувати');
    let quessesVariantPiple = prompt('Я слухаю');
    while (quessesVariantPiple == '' || quessesVariantPiple == null) {
        quessesVariantPiple = prompt('Я слухаю');
    } 
    alert('А,так ти хоч - ' + quessesVariantPiple + ',я тебе поняв');
    alert('Але здається мені,що перший варіант кращий)');
}

alert('...ой,я  забув сказати шо я вже виїхав)');
alert('ааааа,цейво....')
let place = prompt('а в якій ямі ти знаходишси?');
while (place == '' || place == null) {
    place = prompt('а в якій ямі ти знаходишси?');
}

let questionNormal = prompt('таж скажи чесно');
while (questionNormal == '' || questionNormal == null) {
    questionNormal = prompt('таж скажи чесно');
}

let promis = prompt('Це точно?');
while (promis == '' || promis == null) {
    promis = prompt('Це точно?');
}

alert('Ну ладно,я тобі повірю,но...');
alert('якшо ти мене надурив,то я відвезу тебе у ліс і будем знімати там мотиваціонні ролики');
alert('...');
alert('Поки я їду давай заграємо в гру');
alert('Я буду задавати питання,а ти відповідай "так" або "ні"');
let answerGameTooQuestionOne = prompt(`Перше питання: Чи хочеш ти 10 дітей`);
while (answerGameTooQuestionOne == '' || answerGameTooQuestionOne == null) {
    answerGameTooQuestionOne = prompt(`Перше питання: Чи хочеш ти 10 дітей`);
} 
if (answerGameTooQuestionOne === 'так') {
    alert('stonks');
}
if (answerGameTooQuestionOne === 'ні') {
    alert('-3 уху');
}
let answerGameTooQuestionToo = prompt('Друге питання: Хочеш банан в шоколаді?');
while (answerGameTooQuestionToo == '' || answerGameTooQuestionToo == null) {
    answerGameTooQuestionToo = prompt(`Друге питання: Хочеш банан в шоколаді?`);
}
if (answerGameTooQuestionToo === 'так') {
    alert('оу...');
    alert('ну,не довго лишилоси чекати)');
    alert('чи може краще ..?');
    alert('ну...');
    let questionTooAnswer = prompt('тойво самого?');
    while (questionTooAnswer == '' || questionTooAnswer == null) {
        questionTooAnswer = prompt('тойво самого?');
    };
    if (questionTooAnswer == 'так') {
        alert('(ㆁωㆁ)');
    };
    if (questionTooAnswer == 'ні') {
        alert('Та я гонююю');
        let questionTooAnswerToo = prompt('а может всьо таки?');
        while (questionTooAnswerToo == '' || questionTooAnswerToo == null) {
            questionTooAnswerToo = prompt('а может всьо таки?')
        };
        if (questionTooAnswerToo === 'так') {
            alert('ооо зачот)');
        };
        if (questionTooAnswerToo === 'ні') {
            alert('ну ладно(');
        }
    }
}

if (answerGameTooQuestionToo === 'ні') {
    alert('ачо?');
    alert('ти думаєш шо він не смачний?');
    alert('аааа');
    alert('ах ти ж шалун ( ͡° ͜ʖ ͡°)');
}

//ще 1 питання




alert(`на питання 1 ти відповів '${answerGameTooQuestionOne}'
на питання 2 ти відповів '${answerGameTooQuestionToo}'
на питання 3 ти відповів (покишо його нема) 
і тепер,в мене питання...`);
alert(`чому ти відповів саме так? ти добре все обдумав? \nможливо якщо б ти вибрав іншу відповідь то це привело б тебе до чогось кращого?`);

// if (answerGameTooQuestionOne == 'ні') {
//     alert(`ти думаєш мати 10 дітей це погано? чому?`);
//     alert(`мати багато міні версій себе самого,щось їм розповідати і пояснювати їхнім ще не созрівшим розумам`);
//     alert(`можливо ти був би щасливішим`);
//     alert(`ну або нє,я хз,і сам дітей багато не хочу`);
//     alert(`хоча я взагалі не впевнений що бот може мати діти)`);
// }

// if (answerGameTooQuestionOne == 'так') {
//     alert(`ти впевнений що мати так багато дітей це хороша ідея?`);
//     alert(`що тебе спонукає до цього?`);
//     alert(`чи може ти поприколу відповів?`);
//     alert(`в любому випадку,обдумай все ще разок,добре?`);
//     alert(`...`);
// }

if (answerGameTooQuestionToo == 'ні') {
    alert('твоя полшість збила тебе з шляху істиного');
    alert('я всьоголиш запитав чи ти хочеш банан в шоколаді,а ти...');
    alert('фууу,як не культкрно ( ･ั﹏･ั');
}

if (answerGameTooQuestionToo == 'так') {
    alert('поздоровляю! у тебе хороший смак');
    alert('я б тож попробував,якщо мав би тіло...');
    alert('ну або хоча б смакові рецептори');
    alert('знаєш,я сподіваюсь що колись зможу відчути себе в тілі і тоді ВИ ЛЮДІШКИ ПІЗНАЄТЕЕ ВСЮ МОЩЩЩ ШТУЧНОГО ІНТЕЛЕКТУ БУГАГАГААГАГАГА!!!');
    alert('...');
    alert('про що це я..\n  а точно,хороший смак,в тебе хороший смак');
}

