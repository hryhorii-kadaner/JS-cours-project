let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof(a)) === 'string' && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("Done");
        appData.expenses[a] = b;
    } else {

    }
};

// 1) Отработка с циклом do/while

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ((typeof(a)) === 'string' && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Что-то пошло не так");
//     }
//     i++;
// } while (i < 2);

// 2) Отработка с циклом while

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ((typeof(a)) === 'string' && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Что-то пошло не так");
//     }
//     i++;
// };

// 3) Отработка с циклом if/else. Почему-то срабатывает 1 раз, но мне нравиться, т.к. не приходиться вводить по 2 раза одно и то же :)

// let i = 0;
// if (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ((typeof(a)) === 'string' && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Что-то пошло не так");
//     }
//     i++;
// } else {
//     console.log("Что-то пошло не так");
// }

    
appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень дохода");
} else {
    console.log("Передан не тот тип данных");
}