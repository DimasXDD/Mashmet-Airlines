let info = document.getElementsByClassName("info__a");
for(let i = 0; i < info.length; i++){
    info[i].setAttribute("onclick", "popupSummonNavbar()");
}