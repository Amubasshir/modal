const btns = document.querySelectorAll('.btn');
const modal = document.querySelector('.modal');
const closeBTN = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

function modalOpen() {
  modal.style.opacity = 1;
  modal.style.visibility = 'visible';
}

function modalClose() {
  modal.style.opacity = 0;
  modal.style.visibility = 'hidden';
}
function overlayOpen() {
  overlay.style.opacity = 1;
  overlay.style.visibility = 'visible';
}
function overlayClose() {
  overlay.style.opacity = 0;
  overlay.style.visibility = 'hidden';
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    modalOpen();
    overlayOpen();
  });
}
closeBTN.addEventListener('click', function () {
  modalClose();
  overlayClose();
});
overlay.addEventListener('click', function () {
  modalClose();
  overlayClose();
});
