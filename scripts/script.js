//Top Nav Bar Constants
const NAVLIST = document.querySelectorAll("li");
const HEADER = document.querySelector(".header");

//Forms for different market
const NSWFORM = document.querySelector("#nsw");


//to set the active class for background color and pointer
function setActive(tabToActivate){
  for(var i=0;i<NAVLIST.length;i++)
  {
    if(NAVLIST[i] == tabToActivate){
      NAVLIST[i].classList.add("active");
    }
    else {
      NAVLIST[i].classList.remove("active");
    }

  }
}

//to display Header or not
function contentDisplay(activeTab){
  if(activeTab.classList.item(0) == "home"){
    HEADER.style.visibility = "visible";
  }
  else {
    HEADER.style.visibility = "hidden";
  }
  if(activeTab.classList.item(0) == "nsw"){
    NSWFORM.style.visibility = "visible";
  }
  else {
    NSWFORM.style.visibility = "hidden";
  }
}


window.onload=function() {
  for (var i = 0; i < NAVLIST.length; i++) {
      NAVLIST[i].onclick = function() {
    setActive(this);
    contentDisplay(this); }
  }
}
