import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import Data from '../DATA.json';
import stringSimilarity from 'string-similarity';

const humburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');
const main = document.querySelector('main');
const hero = document.querySelector('.hero');

humburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

main.addEventListener('click', _ => {
    nav.classList.remove('open');
});

hero.addEventListener('click', _ => {
    nav.classList.remove('open');
});



const rList = document.querySelector('.restaurant-list .wrapper');
const empty = document.querySelector('.restaurant-list .empty');
const data = Object.values(Data)[0];

const render = data => {
    let html = '';
    if (data === undefined || data.length == 0) {
        html += `
            <img src="/images/no-data.png" alt="blank data image" class="blank-image" tabindex="0">
            <h3 tabindex="0" aria-label="Data is Not found">Data is Not found</h3>
        `;
        empty.innerHTML = html;
        rList.innerHTML = '';
    } else {
        data.map(value => {
            html +=
                `
                <article class="restaurant-item" id="${value.id}">
                    <div class="wrapper-img">
                        <img src="${value.pictureId}" alt="${value.name}'s image" tabindex="0">
                        <p class="city" aria-label="City:  ${value.city}" tabindex="0">Kota: ${value.city}</p>
                    </div>
                    <div class="restaurant-item-content">
                        <div id="rating" aria-label="Rating: ${value.rating}" tabindex="0">
                            <span class="text">Rating: ${value.rating}</span>
                            <div class="star" style="--rating: ${value.rating};" id="star" data-rating="${value.rating}">★★★★★</div>
                        </div>
                        <h3 aria-label="Restaurant Name: ${value.name}" tabindex="0">${value.name}</h3>
                        <p class="description" aria-label="Description: ${value.description}" tabindex="0">${value.description}</p>
                    </div>
                </article> 
                    `;
        });
        rList.innerHTML = html;
        empty.innerHTML = '';
    }
}

render(data);

// Search
const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('#search-input');

searchBtn.addEventListener('click', _ => {
    let search = searchInput.value.trim();
    if (search.length === 0 || !search) {
        render(data)
        return;
    }
    let resultByName = 0;
    let resultByCity = 0;
    const list = [];
    data.forEach(value => {
        resultByName = stringSimilarity.compareTwoStrings(value.name.toUpperCase(), search.toUpperCase());
        resultByCity = stringSimilarity.compareTwoStrings(value.city.toUpperCase(), search.toUpperCase());


        if (resultByName >= 0.4) {
            list.push(value.id);
        }

        if (resultByCity >= 0.4) {
            list.push(value.id);
        }

    });
    dataBySearch(list.unique());
});

const dataBySearch = id => {
    let result = [];
    id.map(value => data.find(row => row.id.toString() === value.toString() ? result.push(row) : ''));
    render(result);
}

Array.prototype.unique = function () {
    return this.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
}