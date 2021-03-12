var startCalculating = document.getElementById('start'),
    resultTable = document.querySelectorAll('.result-table'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    expensesItems = document.getElementsByClassName('expenses-item'),
    submitFirst = document.getElementsByTagName('button')[0],
    submitSecond = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings input'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

setTimeout(function () {
    submitFirst.setAttribute("disabled", "disabled");
    submitSecond.setAttribute("disabled", "disabled");
    countBudgetBtn.setAttribute("disabled", "disabled");

    submitFirst.style.filter = "grayscale(100%)";
    submitSecond.style.filter = "grayscale(100%)";
    countBudgetBtn.style.filter = "grayscale(100%)";

    submitFirst.style.cursor = "default";
    submitSecond.style.cursor = "default";
    countBudgetBtn.style.cursor = "default";
    
    submitFirst.style.transition = "0.3s linear";
    submitSecond.style.transition = "0.3s linear";
    countBudgetBtn.style.transition = "0.3s linear";
}, 0);

startCalculating.addEventListener('click', function () {
    submitFirst.removeAttribute("disabled", "disabled");
    submitSecond.removeAttribute("disabled", "disabled");
    countBudgetBtn.removeAttribute("disabled", "disabled");

    submitFirst.style.filter = "none";
    submitSecond.style.filter = "none";
    countBudgetBtn.style.filter = "none";

    submitFirst.style.cursor = "pointer";
    submitSecond.style.cursor = "pointer";
    countBudgetBtn.style.cursor = "pointer";

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");    

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();    
});

submitFirst.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;

        if ((typeof (a)) === 'string' && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("Done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

submitSecond.addEventListener('click', function() {
    for (let i = 0; i < optionalexpensesItems.length; i++) {
        let opt = optionalexpensesItems[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }    
});

countBudgetBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {  
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;       

        if (appData.moneyPerDay < 100) {
            levelValue.textContent= "Минимальный уровень достака";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent= "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent= "Высокий уровень достатка";
        } else {
            levelValue.textContent= "Передан не тот тип данных";
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка!";
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(",");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function () {
    if(appData.savings == true) {
        let sum = +chooseSum.value,
        percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function () {
    if(appData.savings == true) {
        let sum = +chooseSum.value,
        percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};