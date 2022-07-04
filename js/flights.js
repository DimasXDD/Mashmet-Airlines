//округление границ кнопки с дродауном 1
let button = document.getElementsByClassName("dropdown-btn");
button[0].onclick = function dropdownShowContent0(){
    let dropdown = document.getElementsByClassName("dropdown-content");

    if(dropdown[0].style.display != "block"){
        dropdown[0].style.display = "block";
        button[0].style.borderBottomLeftRadius = "0%";
        button[0].style.borderBottomRightRadius = "0%";
    }
    else{
        dropdown[0].style.display = "none";
        button[0].style.borderBottomLeftRadius = "10%";
        button[0].style.borderBottomRightRadius = "10%";
    };

};

//округление границ кнопки с дропдауном 2 (втф)
button[1].onclick = function dropdownShowContent1(){
    let dropdown = document.getElementsByClassName("dropdown-content");

    if(dropdown[1].style.display != "block"){
        dropdown[1].style.display = "block";
        button[1].style.borderBottomLeftRadius = "0%";
        button[1].style.borderBottomRightRadius = "0%";
    }
    else{
        dropdown[1].style.display = "none";
        button[1].style.borderBottomLeftRadius = "10%";
        button[1].style.borderBottomRightRadius = "10%";
    };

};

//страшная смена текста в кнопке с дропдауном
let dropdownContent = document.getElementsByClassName("dropdown-content__text");
let buttonLocation = document.getElementsByClassName("dropdown-btn__location");
function dropdownContent0(){buttonLocation[0].innerHTML = dropdownContent[0].innerHTML};
function dropdownContent1(){buttonLocation[0].innerHTML = dropdownContent[1].innerHTML};
function dropdownContent2(){buttonLocation[0].innerHTML = dropdownContent[2].innerHTML};
function dropdownContent3(){buttonLocation[1].innerHTML = dropdownContent[3].innerHTML};
function dropdownContent4(){buttonLocation[1].innerHTML = dropdownContent[4].innerHTML};
function dropdownContent5(){buttonLocation[1].innerHTML = dropdownContent[5].innerHTML};

//прогрессивное назначение атрибута
let flight = document.getElementsByClassName("flight");
for(let i = 0; i < flight.length; i++){
    flight[i].setAttribute("onclick", "popupSummonFlight()");
};