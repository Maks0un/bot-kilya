let hi = prompt('Добий день,я хачу піцу,а ще мне грустно і одіноко,го абщаться.Розкажи про себе.Любиш піцу?Пиши "Так" або "ні".');
while (hi == '' || hi == null) {
    hi = prompt('Добий день,я хачу піцу,а ще мне грустно і одіноко,го абщаться.Розкажи про себе.Любиш піцу?Пиши "Так" або "ні".');
};

alert('Хм...');

if (hi == 'Так') {
    alert('Харош');
};

if (hi == 'Ні') {
    alert('Ну всьо,капец тобі,тікай з села.');
    alert('...');
    alert('Але я не вірю,що можна не любити піцу,тож давай колись.');
};

let guessEat = prompt('Яку саме піцу ти обожнюєш?');
while (guessEat == '' || guessEat == null) {
    guessEat = prompt('Яку саме піцу ти обожнюєш?');
};

let eat = prompt('Тобто ти любиш ' + guessEat + '?Незнаю чи э така взагалі,но ладно.');

alert('Доречі');
alert('Нехоч завтра піти десь перекусити? До тебе додому наприклад)');

let quessesForHome = prompt('Хоч?');
while (quessesForHome == '' || quessesForHome == null) {
    quessesForHome = prompt('Хоч?');
} if (quessesForHome == 'Так') {
    alert('ООО,зачот,ну шо коли виїхати?)');
} if (quessesForHome == 'Ні') {
    alert('Та чого ти,норм ж ідея');
    alert('Ну якщо в тебе є варіант покраще,можеш запропонувати');
    let quessesVariantPiple = prompt('Я слухаю');
    while (quessesVariantPiple == '' || quessesVariantPiple == null) {
        quessesVariantPiple = prompt('Я слухаю');
    } 
    alert('А,так ти хоч ' + quessesVariantPiple + ',поняв');
    alert('Але здається мені,що перший варіант кращий)');
}








