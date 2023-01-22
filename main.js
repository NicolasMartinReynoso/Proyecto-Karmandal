
let carrito = []

let productos = [
  { nombre: "girasol", precio: 300, id: 1, categoria: "mandala", imgUrl: "/images/mandala13.jpeg" },
  { nombre: "girasolFuego", precio: 350, id: 2, categoria: "mandala", imgUrl: "/images/mandala11.jpeg" },
  { nombre: "girasolDoble", precio: 400, id: 3, categoria: "mandala", imgUrl: "/images/mandala10.jpeg" },
  { nombre: "girasol", precio: 300, id: 4, categoria: "mandala", imgUrl: "/images/mandala9.jpeg" },
  { nombre: "girasol", precio: 300, id: 5, categoria: "mandala", imgUrl: "/images/mandala4.jpeg" },
  { nombre: "girasol", precio: 300, id: 6, categoria: "mandala", imgUrl: "/images/mandala1.jpeg" },
  { nombre: "girasol", precio: 300, id: 7, categoria: "mandala", imgUrl: "/images/mandala7.jpeg" },
  { nombre: "girasol", precio: 300, id: 8, categoria: "mandala", imgUrl: "/images/mandala12.jpeg" },
  { nombre: "girasol", precio: 300, id: 9, categoria: "mandala", imgUrl: "/images/mandala5.jpeg" },
  { nombre: "girasol", precio: 300, id: 10, categoria: "mandala", imgUrl: "/images/mandala6.jpeg" },
  { nombre: "girasol", precio: 300, id: 11, categoria: "mandala", imgUrl: "/images/mandala8.jpeg" },
  { nombre: "girasol", precio: 300, id: 12, categoria: "mandala", imgUrl: "/images/mandala2.jpeg" },
  { nombre: "girasol", precio: 250, id: 13, categoria: "mandala", imgUrl: "/images/oferta1.jpeg" },
  { nombre: "girasol", precio: 300, id: 14, categoria: "mandala", imgUrl: "/images/mandala3.jpeg" },
  { nombre: "1", precio: 1400, id: 15, categoria: "funko", imgUrl: "/images/funko.jpeg" },
  { nombre: "2", precio: 1200, id: 16, categoria: "funko", imgUrl: "/images/funko1.jpeg" },
  { nombre: "3", precio: 1200, id: 17, categoria: "funko", imgUrl: "/images/funko2.jpeg" },
  { nombre: "4", precio: 1200, id: 18, categoria: "funko", imgUrl: "/images/funko3.jpeg" },
  { nombre: "5", precio: 1200, id: 19, categoria: "funko", imgUrl: "/images/funko4.jpeg" },
  { nombre: "dino", precio: 300, id: 20, categoria: "maceta", imgUrl: "/images/macetadino.jpeg" },
  { nombre: "groot", precio: 120, id: 21, categoria: "maceta", imgUrl: "/images/macetagroot.jpeg" },
  { nombre: "estrella", precio: 450, id: 22, categoria: "portaSahumerio", imgUrl: "/images/sahumerio2.jpeg" },
  { nombre: "gancho", precio: 450, id: 23, categoria: "portaSahumerio", imgUrl: "/images/sahumerio.jpeg" },
  { nombre: "basico", precio: 450, id: 24, categoria: "portaSahumerio", imgUrl: "/images/sahumerio1.jpeg" },
  { nombre: "cerdo", precio: 400, id: 25, categoria: "portaLapices", imgUrl: "/images/macetacerdo.jpeg" },
  { nombre: "cordero", precio: 400, id: 26, categoria: "portaLapices", imgUrl: "/images/macetacordero.jpeg" },
  { nombre: "pato", precio: 200, id: 27, categoria: "portaLapices", imgUrl: "/images/macetapollo.jpeg" },
  { nombre: "gato", precio: 400, id: 28, categoria: "portaLapices", imgUrl: "/images/macetagato.jpeg" },
  { nombre: "panda", precio: 400, id: 29, categoria: "portaLapices", imgUrl: "/images/macetapanda.jpeg" },
  { nombre: "unicornio", precio: 400, id: 30, categoria: "portaLapices", imgUrl: "/images/macetaunicornio.jpeg" },
]

let contenedorPadre = document.getElementById("catalogo")
let contenedorMenuCatalogo = document.getElementById("contenedorMenuCatalogo")
let tarjetaProducto
Renderizar(productos)
document.getElementById("botonCarrito").addEventListener("click",abrirCarrito)

let elementosCarrito = document.getElementById("elementosCarrito")
function Renderizar(productos) {
  for (const producto of productos) {
    tarjetaProducto = document.createElement("div")
    tarjetaProducto.innerHTML = `
     <img class="productoImg" src=${producto.imgUrl} alt="producto:${producto.categoria}" width="45%" height="auto" >`
    contenedorPadre.append(tarjetaProducto)
    tarjetaProducto.onclick = () => swal({
      title: producto.nombre,
      text: "Precio $" + producto.precio,
      closeOnClickOutside: false,
      buttons: ["Cerrar", "Añadir al carrito"]
    }).then((result) => {
      if (result) { 
        elementosCarrito.innerHTML=""
        carrito.push({precio:producto.precio,nombre:producto.nombre,id:producto.id})
        for (const elemento of carrito) {
         let unidadDeCarrito=document.createElement("div")
         unidadDeCarrito.innerHTML= `Producto: ${elemento.nombre}, Precio: $${elemento.precio}`
         elementosCarrito.append(unidadDeCarrito)
        }
      }
    })
  }
}



function limpiarPantalla() {
  contenedorPadre.innerHTML = ""
}
function abrirCarrito() {
  const total=carrito.reduce((acumulador,carrito)=> acumulador+ carrito.precio,0)
  swal({title:"El total es de $" +total,})
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

