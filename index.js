// let hi = prompt('Добий день,я хачу піцу,а ще мне грустно і одіноко,го абщаться.Розкажи про себе.Любиш піцу?Пиши "так" або "ні".');
// while (hi == '' || hi == null) {
//     hi = prompt('Добий день,я хачу піцу,а ще мне грустно і одіноко,го абщаться.Розкажи про себе.Любиш піцу?Пиши "так" або "ні".');
// };

// alert('Хм...');

// if (hi == 'так') {
//     alert('Харош');
// };

// if (hi == 'ні') {
//     alert('Ну всьо,капец тобі,тікай з села.');
//     alert('...');
//     alert('Але я не вірю,що можна не любити піцу,тож давай колись.');
// };

// let guessEat = prompt('Яку саме піцу ти обожнюєш?');
// while (guessEat == '' || guessEat == null) {
//     guessEat = prompt('Яку саме піцу ти обожнюєш?');
// };

// let eat = alert('Тобто ти любиш ' + guessEat + '?Незнаю чи э така взагалі,но ладно.');

// alert('Доречі');
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







// function asksPrompt(ask) {
//     prompt(ask)
//     while (ask == '' || ask == null) {
//         prompt(ask)
//     }
// }

// function asksAlert(ask) {
//     let a = ask;
//     if (a == '' || a == null) {
//         return alert(a);
//     }
// }