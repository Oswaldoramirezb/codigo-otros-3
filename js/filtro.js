// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "img/taco-negro.jpg" }, //Corregida la ruta relativa
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "img/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "img/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "img/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "img/zapato-rojo.jpg" }
]

const li = document.getElementById("lista-de-productos") // cambie de ByName  ById como aparecia en html
const $i = document.querySelector('input'); // Selecciona el input por etiqueta HTML (no necesita clase)

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre

  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)
  li.appendChild(d)
}

// displayProductos(productos) esta funcion np esta llamada en ningun lado
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")

    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti)
    d.appendChild(imagen)

    li.appendChild(d)
  }
}

//A pesar de que teniamos un filtro, no era muy funcional ya que una persona puede ingresar mayusculas o minusculas, puede manejar espacios, etc.
const filtrado = (productos = [], texto) => {
  // Si no hay texto de búsqueda, retornar todos los productos, asi por lo regular le hacen muchas paginas de busqueda como amazon, mercado libre, etc etc
  if (!texto || texto.trim() === '') {
    return productos;
  }

  // Convertir el texto de búsqueda a minúsculas y eliminar espacios extras, no siempre se le dará una guia de usuario al cliente y hay vceces que su celular pone mayusculas automatico o si esta en ordenador lo deja en miniscula
  const textoBusqueda = texto.toLowerCase().trim();

  // Filtrar productos que coincidan con el color o tipo
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(textoBusqueda) ||
    item.color.toLowerCase().includes(textoBusqueda)
  );
}  