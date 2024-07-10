var tablinks = document.getElementsByClassName("tabLinks");
var tabContents = document.getElementsByClassName("tabContents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("activeLink");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("activeTab");
    }
    event.currentTarget.classList.add("activeLink");
    document.getElementById(tabname).classList.add("activeTab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right ="0";
}
function closemenu(){
    sidemenu.style.right ="-200px";
}