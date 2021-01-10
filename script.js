const menu = document.querySelector('.nav-container');
const burgerButton = document.querySelector('#burger-button');

burgerButton.addEventListener('click', hideMenu)

function hideMenu() {
  if (menu.classList.contains('is-active')){
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
  }
}

function traer() {
  fetch(
    "https://raw.githubusercontent.com/IvanGonzalez10/TitaTest/master/db.json"
  )
    .then((res) => res.json())
    .then((data) => {
      var contenedor = document.getElementById("data");
      data.map((el, i) => {
        var item = document.createElement("div");
        item.className = `item item${i}`;
        var imagen = document.createElement("img");
        imagen.src = el.url;
        item.appendChild(imagen);
        contenedor.appendChild(item);
      });
    });
}

traer();
