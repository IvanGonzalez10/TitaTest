var contenedor = document.getElementById("data");
data.map((el, i) => {
  var item = document.createElement("div");
  item.className=`item item${i}`;
  var imagen = document.createElement("img");
  imagen.src=el.url;
  item.appendChild(imagen)
  contenedor.appendChild(item);
});
console.log(contenedor);
