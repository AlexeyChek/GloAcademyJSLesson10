'use strict';

const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');

books.prepend(book[1]);
book[3].before(book[4]);
books.append(book[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

const title = book[4].querySelector('a');
title.textContent = 'Книга 3. this и Прототипы Объектов';

const adv = document.querySelector('.adv');
adv.remove();

const chaptersBook2 = book[0].querySelectorAll('li');
const chaptersBook5 = book[5].querySelectorAll('li');
const chaptersBook6 = book[2].querySelectorAll('li');

chaptersBook2[3].after(chaptersBook2[6]);
chaptersBook2[4].before(chaptersBook2[8]);
chaptersBook2[10].before(chaptersBook2[2]);

chaptersBook5[1].after(chaptersBook5[9]);
chaptersBook5[4].after(chaptersBook5[2]);
chaptersBook5[8].before(chaptersBook5[5]);

chaptersBook6[9].insertAdjacentHTML('beforebegin', '<li>Глава 8: За пределами ES6</li>');

