let images = ["images/sov1.jpg", "images/sov2.jpg", "images/sov3.jpg"];

let ind = 1;
let isChanging = false;

function changeBackground() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
}

function changeBackgroundConstant() {
  if (isChanging) {
    // Остановить изменение фона
    clearInterval(colorInterval);
    isChanging = false;
  } else {
    // Начать постоянное изменение фона
    colorInterval = setInterval(changeBackground, 300); // Изменять каждый 1 секунду
    isChanging = true;
  }
}

function nextImage() {
  // Переход к следующему изображению
  ind = (ind + 1) % images.length;
  document.getElementById("image").src = images[ind];
}

function prevImage() {
  // Переход к предыдущему изображению
  ind = (ind - 1 + images.length) % images.length;
  document.getElementById("image").src = images[ind];
}
