var money, time;

money = prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце", ""),
    secondAnswer = prompt("Во сколько обойдется?", ""),
    thirdAnswer = prompt("Введите обязательную статью расходов в этом месяце", ""),
    fourthAnswer = prompt("Во сколько обойдется?", "");

appData.expenses.firstAnswer = secondAnswer;
appData.expenses.thirdAnswer = fourthAnswer;

alert(appData.budget / 30);