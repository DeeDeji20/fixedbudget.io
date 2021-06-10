const loadingDisplay = document.querySelector(".preloader");
const Body = document.querySelector(".body");
const Header = document.querySelector("#header");
const balanceCon = document.querySelector(".balanceandtotalcontainer");
const Nav = document.querySelector(".navandbutton");
const addBtn = document.querySelector(".addbutton");
window.addEventListener("load", removeLoadingDisplay);
document.addEventListener("", () => {
  document.documentElement.requestFullscreen().catch((e) => {
    console.log(e);
  });
});

function removeLoadingDisplay() {
  loadingDisplay.style.animation =
    "fadeout 3s cubic-bezier(0.13, 0.07, 1, 1.32)";
}
function displayNavContainer() {
  if ((removeLoadingDisplay = true)) {
    Header.style.animation =
      "displayheader 3.5s cubic-bezier(0.42, 0.01, 1, 1)";
    Header.style.marginLeft = 0;

    setTimeout(() => {
      Nav.style.animation = "displaynav 2s cubic-bezier(0.42, 0.01, 1, 1)";
      Nav.style.marginBottom = 0;
    }, 3600);

    setTimeout(() => {
      balanceCon.style.animation =
        "displaybalanceandtotalcontainer 0.5s ease-in";
      balanceCon.style.opacity = 1;
    }, 3400);
  }
}
displayNavContainer();

function displayAddButton() {
  setTimeout(() => {
    addBtn.style.animation =
      "addbuttondisplay 0.8s  cubic-bezier(0.42, 0.01, 1, 1)";
    addBtn.style.marginBottom = "21vh";
  }, 6000);
}

displayAddButton();
