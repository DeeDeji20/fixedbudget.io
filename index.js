const loadingDisplay = document.querySelector(".preloader");
const Body = document.querySelector(".body");
const Nav = document.querySelector(".nav");
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
function displayItemsUniquely() {
  if ((removeLoadingDisplay = true)) {
    Nav.style.animation = "displaynav 4.1s cubic-bezier(0.42, 0.01, 1, 1)";
  }
}
displayItemsUniquely();
function displayAddButton() {
  setTimeout(() => {
    addBtn.style.animation =
      "addbuttondisplay 1s  cubic-bezier(0.42, 0.01, 1, 1)";
    addBtn.style.marginBottom = "5px";
  }, 4100);
}

displayAddButton();
