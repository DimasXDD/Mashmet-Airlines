let popup = document.getElementsByClassName("popup");
let body = document.getElementsByTagName("body");
let text = document.getElementsByClassName("popup-mid__text");
let retryButton = document.getElementsByClassName("popup-bot__btn");
let header = document.getElementsByClassName("popup-top__header");

//вызов попапа
function popupSummonFlight(){
    popup[0].style.display = "flex";
    body[0].style.overflow = "hidden";
    text[0].innerHTML = "К сожалению, рейс не работает (у нас нет самолётов, йоу)."
    header[0].innerHTML = "Отмена рейса!";
};

//вызов для навбара
function popupSummonNavbar(){
    popup[0].style.display = "flex";
    body[0].style.overflow = "hidden";
    text[0].innerHTML = "Проблема с соединением (Поверь мне, пожалуйста). "
    header[0].innerHTML = "Упс!";
}

//вызов для акции
function popupSummonLowpriority(){
    popup[0].style.display = "flex";
    body[0].style.overflow = "hidden";
    text[0].innerHTML = "Мы бедные и акции теперь нет, а оставили текст чисто для стиля."
    header[0].innerHTML = "Нет пути! (Ноу вей!)";
}

//его закрытие
function popupCloseBtn(){
    popup[0].style.display = "none";
    body[0].style.overflow = "auto";
    eggCount = 0;
};

//пасхалочка с текстом
let eggCount = 0;
function popupEasterEgg(){
    eggCount = eggCount + 1;
    header[0].innerHTML = "У-у-у, пасхалочка"
    switch(eggCount){
        case 1: text[0].innerHTML = "Забей, это не работает, пожалуйста больше не пытайся."
        break;
        case 2: text[0].innerHTML = "Зачем?"
        break;
        case 3: text[0].innerHTML = "...." 
        break;
        case 4: text[0].innerHTML = "Окей, я не хочу дальше новые фразочки придумывать сюда, так что держи счётчик твоих попыток."
        break;
    }
    if (eggCount >= 4){
        text[0].innerHTML = "Ты кликнул: "+eggCount+" раз. Молодец.";
    }
}