/*menu-list */


const menu = document.querySelector('.ic-menu');
const menu_list = document.querySelector('.menu-list');
let main_menu = document.querySelector('.main-title-information');

menu.addEventListener('click', function() {


    menu_list.style.display = 'flex';


});







/*gallery*/
let gallery = document.getElementById('gallery-title');
const img = document.getElementById('gall-img');
const second_img = document.getElementById('img-2');
const third_img = document.getElementById('img-3');
const fourth_img = document.getElementById('img-4');
const fifth_img = document.getElementById('img-5');
const sixth_img = document.getElementById('img-6');
const seventh_img = document.getElementById('img-7');
const eigth_img = document.getElementById('img-8');
const ninth_img = document.getElementById('img-9');
const tenth_img = document.getElementById('img-10');
const eleventh_img = document.getElementById('img-11');
let paint = document.getElementById('painting-description');



function closePainting() {
    let back = document.createElement('img');
    back.src = "img/back.jpg";
    paint.appendChild(back);
    back.classList.add("close-btn");
    back.addEventListener('click', function() {
        gallery.hidden = false;

        paint.innerText = "";
    });

};





img.addEventListener('click', function() {
    gallery.hidden = true;

    closePainting();


    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-2.jpg";
    paint.appendChild(img1);
    img1.classList.add('my-img');
    let block = document.createElement('div');
    paint.appendChild(block);
    block.classList.add("img-description");
    let text = document.createElement('h1');
    block.appendChild(text);
    text.classList.add("first-img-title");

    let description = document.createElement('p');
    block.appendChild(description);
    text.innerText = "Свята Анна, Мадонна з немовлям і ягням";

    description.innerHTML = "Ця картина належить до пізнього періоду творчості Леонардо. Зараз картина знаходиться у великій галереї Лувру. Да Вінчі використав непопулярний на той час сюжет для Італії під назвою «Анна-тріо». Свята Марія, що сидить навколішки у матері, тримає на руках Немовля Ісуса. Леонардо зробив безліч замальовок до цієї історії, але не завершив роботу. Саму картину майстер писав приблизно десять років, але багато деталей у ній так і залишилися незавершеними."

});
second_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-3.jpg";
    paint.appendChild(img1);
    img1.classList.add('my-img');
    let block = document.createElement('div');
    paint.appendChild(block);
    block.classList.add("img-description");
    let text = document.createElement('h1');
    block.appendChild(text);
    text.classList.add("first-img-title");

    let description = document.createElement('p');
    block.appendChild(description);
    text.innerText = "Мадонна Літта";


    description.innerHTML = "Картина написана талановитим да Вінчі на початку 90-х 15 століття. Розмір картини складає 42х33 см. Матеріали - дерево та темпера. Мадонна Літа яскраво відображає елементи нового мистецтва епохи Високого Відродження. Полотно зберігається у галереї Ермітажу у місті Санкт-Петербург."

});
third_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-8.jpg";
    paint.appendChild(img1);
    img1.classList.add('my-img');
    let block = document.createElement('div');
    paint.appendChild(block);
    block.classList.add("img-description");
    let text = document.createElement('h1');
    block.appendChild(text);
    text.classList.add("first-img-title");

    let description = document.createElement('p');
    block.appendChild(description);
    text.innerText = "Мадонна в скелях";

    description.innerHTML = "Витвір видатного Леонардо, окрім численних малюнків, існує у двох варіантах. Одна з картин (1483-1486) знаходиться в музеї Лувру в Парижі. Друге полотно, яке написане пізніше, у період 1494-1508 років, знаходиться у Лондонській галереї. Основою для композиції картини послужив маловідомий сюжет із тексту \"Життя Іоанна за Серапіоном\"."

});
fourth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-5.jpg";
    paint.appendChild(img1);
    img1.classList.add('my-img');
    let block = document.createElement('div');
    paint.appendChild(block);
    block.classList.add("img-description");
    let text = document.createElement('h1');
    block.appendChild(text);
    text.classList.add("first-img-title");

    let description = document.createElement('p');
    block.appendChild(description);
    text.innerText = "Мадонна Бенуа або Мадонна з квітами";


    description.innerHTML = "Ця картина вважається однією з перших та незавершених робіт Леонардо. 1914 року її придбав у свою колекцію Імператорський Ермітаж. Картину галереї продала дружина придворного архітектора Бенуа – Марія Олександрівна. У роботі над цим твором художником була використана техніка олійного живопису."
});
fifth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-6.jpg";
    paint.appendChild(img1);
    img1.classList.add('my-img');
    let block = document.createElement('div');
    paint.appendChild(block);
    block.classList.add("img-description");
    let text = document.createElement('h1');
    block.appendChild(text);
    text.classList.add("first-img-title");

    let description = document.createElement('p');
    block.appendChild(description);
    text.innerText = "Пані з горностаєм";

    description.innerHTML = "Картина була створена у 1489-1490 роки. Більшість мистецтвознавців схильні стверджувати, що на полотні зображено коханку Лодовіко Сфорца. Жінку звали Чечілія Галлерані. Розміри картини 54×40 см. Нині картина мешкає у Національному музеї Кракова."
});
sixth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-7.jpg";
    paint.appendChild(img1);
    img1.classList.add('my-img');
    let block = document.createElement('div');
    paint.appendChild(block);
    block.classList.add("img-description");
    let text = document.createElement('h1');
    block.appendChild(text);
    text.classList.add("first-img-title");

    let description = document.createElement('p');
    block.appendChild(description);
    text.innerText = "Мона Ліза";

    description.innerHTML = "Одна з найвідоміших та загадкових картин величного Леонардо да Вінчі. Імовірно, картина, написана в 1503 - 1505 роки. Зараз картина знаходиться у Луврі. На думку мистецтвознавців, на картині художник зобразив дружину продавця шовку - Франческо дель Джокондо з Флоренції. Але присутні і інші версії викриття особистості цієї чарівної пані. Одні називають цю гарну панночку - матір’ю Леонардо, інші - Катериною Сфорца."
});
seventh_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-1.jpg";
    paint.appendChild(img1);
    img1.classList.add('my-img');
    let block = document.createElement('div');
    paint.appendChild(block);
    block.classList.add("img-description");
    let text = document.createElement('h1');
    block.appendChild(text);
    text.classList.add("first-img-title");

    let description = document.createElement('p');
    block.appendChild(description);
    text.innerText = "Портрет Джиневри де Бенчі";

    description.innerHTML = "Одна з ранніх картин да Вінчі. Картина була написана приблизно 1474 - 1476 роки. Полотно можна назвати прикладом флорентійського портретного живопису Раннього Відродження. Це портрет жінки, флорентійської поетеси 15 століття– Джиневри д\ 'Амеріго де Бенчі. Поетеса була платонічним коханням Бернардо Бембо, Він найімовірніше і замовив цей портрет у майстра."
});
eigth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-4.jpg";
    paint.appendChild(img1);
    img1.classList.add('my-img');
    let block = document.createElement('div');
    paint.appendChild(block);
    block.classList.add("img-description");
    let text = document.createElement('h1');
    block.appendChild(text);
    text.classList.add("first-img-title");

    let description = document.createElement('p');
    block.appendChild(description);
    text.innerText = "Іоанн Хреститель";

    description.innerHTML = "Картина відноситься до пізнього етапу творчості Леонардо да Вінчі. Полотно було написано 1514-1516 роки. Підбір темного фону та композиції характеризують твір як яскравий приклад живопису епохи Відродження. По центру бачимо портрет святого - Іоанна Хрестителя."
});
ninth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-9.jpg";
    paint.appendChild(img1);
    img1.classList.add('my-img');
    let block = document.createElement('div');
    paint.appendChild(block);
    block.classList.add("img-description");
    let text = document.createElement('h1');
    block.appendChild(text);
    text.classList.add("first-img-title");

    let description = document.createElement('p');
    block.appendChild(description);
    text.innerText = "Прекрасна Ферроньєра";

    description.innerHTML = "Картина зображає портрет невідомої жінки. Ймовірно, цією жінкою є міланська дама - Лукреція Кривеллі, улюблениця герцога Лодовіко Моро. Інші вважають, що цією дамою могла бути дружина Моро - Беатріче д'Есте. Картина знаходиться у Луврі. Твір був написаний у 1490 році. Авторство цієї картини, крім Леонардо, приписують різним учням та Вінчі."
});
tenth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-10.jpg";
    paint.appendChild(img1);
    img1.classList.add('my-img');
    let block = document.createElement('div');
    paint.appendChild(block);
    block.classList.add("img-description");
    let text = document.createElement('h1');
    block.appendChild(text);
    text.classList.add("first-img-title");

    let description = document.createElement('p');
    block.appendChild(description);
    text.innerText = "Мадонна з гвоздикою";

    description.innerHTML = "Картина була створена в молоді роки Леонардо, коли він був учнем Верроккіо. На передньому плані художник зобразив Святу Марію та малюка Ісуса. Марія уособлює спокій та мудрість. На відміну від спокійної Мадонни, немовля знаходиться в енергійному русі. Малюк намагається схопити червону гвоздику, яку його мати тримає у витонченій руці."
});
eleventh_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-12.jpg";
    paint.appendChild(img1);
    img1.classList.add('my-img');
    let block = document.createElement('div');
    paint.appendChild(block);
    block.classList.add("img-description");
    let text = document.createElement('h1');
    block.appendChild(text);
    text.classList.add("first-img-title");

    let description = document.createElement('p');
    block.appendChild(description);
    text.innerText = "Портрет музиканта";

    description.innerHTML = "Одна із незакінчених робіт художника. Сильно переписана пізніше. Полотно зберігається в міланській Пінакотеці Амброзіяну. Твір розпочато художником наприкінці 90-х 15 століття. У 19 столітті вважалося, що на портреті зображено міланського герцога Лодовіко Моро."
});







/*feedback-page */

const form = document.getElementsByClassName('form');
let username = document.getElementById('author-name');
let surname = document.getElementById('author-surname');
let text = document.getElementById('text');
let email = document.getElementById('author-email');
let message = document.getElementById('message-1');
let user = document.getElementById('author');
let author_text = document.getElementById('author-text');
const btn = document.getElementById('form-btn');



function showText() {



    alert("Ваш отзыв принят");

    user.innerText = `${username.value} ${surname.value}`;
    author_text.innerText = text.value;
    username.value = "";
    surname.value = "";
    text.value = "";
    email.value = "";
};
btn.addEventListener('click', showText);