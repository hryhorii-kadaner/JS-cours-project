/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const ads = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        moviesList = document.querySelector(".promo__interactive-list"),
        form = document.querySelector('form.add'),
        formInput = form.querySelector('.adding__input'),
        checkbox = form.querySelector('[type="checkbox"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = formInput.value;
        const favorite = checkbox.checked;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }
            if (favorite) {
                console.log("Favorite film");
            }
            movieDB.movies.push(newFilm);
            sorting(movieDB.movies);
            createMovieList(movieDB.movies, moviesList);
        }
        
        e.target.reset();
    });

    const deleteAds = (arr) => {
        arr.forEach(ad => {
            ad.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "Драма";

        poster.style.backgroundImage = "url('./img/bg.jpg')";
    };
    
    const sorting = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sorting(films); 

        films.forEach((movie, i) => {
            moviesList.insertAdjacentHTML("beforeend",
                `<li class="promo__interactive-item">
                    ${i+1}) ${movie}
                    <div class="delete"></div>
                </li>`
            );
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i,1);
                createMovieList(films, parent);
            });
        });
    }
    
    makeChanges();
    deleteAds(ads);  
    createMovieList(movieDB.movies, moviesList);
});