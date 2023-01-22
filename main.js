
let carrito = []

let productos = [
  { nombre: "girasol", precio: 300, stock: 10, categoria: "mandala", imgUrl: "/images/mandala13.jpeg" },
  { nombre: "girasolFuego", precio: 350, stock: 10, categoria: "mandala", imgUrl: "/images/mandala11.jpeg" },
  { nombre: "girasolDoble", precio: 400, stock: 10, categoria: "mandala", imgUrl: "/images/mandala10.jpeg" },
  { nombre: "girasol", precio: 300, stock: 10, categoria: "mandala", imgUrl: "/images/mandala9.jpeg" },
  { nombre: "girasol", precio: 300, stock: 10, categoria: "mandala", imgUrl: "/images/mandala4.jpeg" },
  { nombre: "girasol", precio: 300, stock: 10, categoria: "mandala", imgUrl: "/images/mandala1.jpeg" },
  { nombre: "girasol", precio: 300, stock: 10, categoria: "mandala", imgUrl: "/images/mandala7.jpeg" },
  { nombre: "girasol", precio: 300, stock: 10, categoria: "mandala", imgUrl: "/images/mandala12.jpeg" },
  { nombre: "girasol", precio: 300, stock: 10, categoria: "mandala", imgUrl: "/images/mandala5.jpeg" },
  { nombre: "girasol", precio: 300, stock: 10, categoria: "mandala", imgUrl: "/images/mandala6.jpeg" },
  { nombre: "girasol", precio: 300, stock: 10, categoria: "mandala", imgUrl: "/images/mandala8.jpeg" },
  { nombre: "girasol", precio: 300, stock: 10, categoria: "mandala", imgUrl: "/images/mandala2.jpeg" },
  { nombre: "girasol", precio: 250, stock: 10, categoria: "mandala", imgUrl: "/images/oferta1.jpeg" },
  { nombre: "girasol", precio: 300, stock: 10, categoria: "mandala", imgUrl: "/images/mandala3.jpeg" },
  { nombre: "1", precio: 1400, stock: 10, categoria: "funko", imgUrl: "/images/funko.jpeg" },
  { nombre: "2", precio: 1200, stock: 10, categoria: "funko", imgUrl: "/images/funko1.jpeg" },
  { nombre: "3", precio: 1200, stock: 10, categoria: "funko", imgUrl: "/images/funko2.jpeg" },
  { nombre: "4", precio: 1200, stock: 10, categoria: "funko", imgUrl: "/images/funko3.jpeg" },
  { nombre: "5", precio: 1200, stock: 10, categoria: "funko", imgUrl: "/images/funko4.jpeg" },
  { nombre: "dino", precio: 300, stock: 10, categoria: "maceta", imgUrl: "/images/macetadino.jpeg" },
  { nombre: "groot", precio: 120, stock: 10, categoria: "maceta", imgUrl: "/images/macetagroot.jpeg" },
  { nombre: "estrella", precio: 450, stock: 10, categoria: "portaSahumerio", imgUrl: "/images/sahumerio2.jpeg" },
  { nombre: "gancho", precio: 450, stock: 10, categoria: "portaSahumerio", imgUrl: "/images/sahumerio.jpeg" },
  { nombre: "basico", precio: 450, stock: 10, categoria: "portaSahumerio", imgUrl: "/images/sahumerio1.jpeg" },
  { nombre: "cerdo", precio: 400, stock: 10, categoria: "portaLapices", imgUrl: "/images/macetacerdo.jpeg" },
  { nombre: "cordero", precio: 400, stock: 10, categoria: "portaLapices", imgUrl: "/images/macetacordero.jpeg" },
  { nombre: "pato", precio: 200, stock: 10, categoria: "portaLapices", imgUrl: "/images/macetapollo.jpeg" },
  { nombre: "gato", precio: 400, stock: 10, categoria: "portaLapices", imgUrl: "/images/macetagato.jpeg" },
  { nombre: "panda", precio: 400, stock: 10, categoria: "portaLapices", imgUrl: "/images/macetapanda.jpeg" },
  { nombre: "unicornio", precio: 400, stock: 10, categoria: "portaLapices", imgUrl: "/images/macetaunicornio.jpeg" },
]

let contenedorPadre = document.getElementById("catalogo")
let contenedorMenuCatalogo = document.getElementById("contenedorMenuCatalogo")
let tarjetaProducto
Renderizar(productos)

function Renderizar(productos) {
  for (const producto of productos) {
    tarjetaProducto = document.createElement("div")
    tarjetaProducto.innerHTML = `
  <img class="productoImg" src=${producto.imgUrl} alt="producto:${producto.categoria}" width="45%" height="auto" >`
    contenedorPadre.append(tarjetaProducto)
    tarjetaProducto.onclick = () => (swal({title:"Precio",}))
  }
}


function limpiarPantalla() {
  contenedorPadre.innerHTML = ""
}

let filtroMayor = document.getElementById("filtroMayor")
let filtroMenor = document.getElementById("filtroMenor")
filtroMayor.addEventListener("change", filtrarPrecio)
filtroMenor.addEventListener("change", filtrarPrecio)
let filtroMandalas = document.getElementById("filtroMandalas")
let filtrofunkos = document.getElementById("filtroFunkos")
let filtroSahumerios = document.getElementById("filtroSahumerios")
let filtroMacetas = document.getElementById("filtroMacetas")
let filtroLapices = document.getElementById("filtroLapices")
filtroMandalas.addEventListener("change", filtrarCategoria)
filtrofunkos.addEventListener("change", filtrarCategoria)
filtroSahumerios.addEventListener("change", filtrarCategoria)
filtroMacetas.addEventListener("change", filtrarCategoria)
filtroLapices.addEventListener("change", filtrarCategoria)


function filtrarCategoria() {
  limpiarPantalla()
  if (filtroMandalas.checked) {
    let productosFiltrados = productos.filter((e) => e.categoria === "mandala")
    Renderizar(productosFiltrados)
  }
  if (filtroFunkos.checked) {
    let productosFiltrados = productos.filter((e) => e.categoria === "funko")
    Renderizar(productosFiltrados)
  }
  if (filtroSahumerios.checked) {
    let productosFiltrados = productos.filter((e) => e.categoria === "portaSahumerio")
    Renderizar(productosFiltrados)
  }
  if (filtroMacetas.checked) {
    let productosFiltrados = productos.filter((e) => e.categoria === "maceta")
    Renderizar(productosFiltrados)
  }
  if (filtroLapices.checked) {
    let productosFiltrados = productos.filter((e) => e.categoria === "portaLapices")
    Renderizar(productosFiltrados)
  }


}
function filtrarPrecio() {
  if (filtroMayor.checked) {
    productos.sort((a, b) => b.precio - a.precio);
    limpiarPantalla()
    Renderizar(productos)
  }
  if (filtroMenor.checked) {
    productos.sort((a, b) => a.precio - b.precio);
    limpiarPantalla()
    Renderizar(productos)
  }
}


