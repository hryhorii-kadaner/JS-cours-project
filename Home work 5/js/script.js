var menuItems = document.querySelectorAll('.menu .menu-item'),
    menu = document.querySelector('.menu'),
    title = document.getElementById('title'),
    div = document.querySelectorAll('div'),
    li = document.createElement('li'),
    promptDiv = document.getElementById('prompt');


li.classList.add('menu-item');
li.innerText = 'Пятый пункт';

console.log(menu);
console.log(menuItems);

menu.insertBefore(menuItems[2], menuItems[1]);
document.body.style.background = "url('img/apple_true.jpg') no-repeat";
div[3].style.display = 'none';
title.innerText = "Мы продаем только подлинную технику Apple";

menu.appendChild(li);

setTimeout(function () {
    function askingUser() {
        var question = prompt("Как вы относитесь к технике от Apple?", '');
        let user = {
            answer: question
        };
        promptDiv.innerText = user.answer;
    }
    askingUser();
}, 500);