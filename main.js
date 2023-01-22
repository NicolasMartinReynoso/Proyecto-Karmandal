fetch("/productos.json")
  .then(response => response.json())
  .then(productos => {
  
    let carrito = []
    let contenedorPadre = document.getElementById("catalogo")
    let contenedorMenuCatalogo = document.getElementById("contenedorMenuCatalogo")
    let tarjetaProducto
    Renderizar(productos)
    document.getElementById("botonCarrito").addEventListener("click", abrirCarrito)

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
            elementosCarrito.innerHTML = ""
            carrito.push({ precio: producto.precio, nombre: producto.nombre, id: producto.id })
            for (const elemento of carrito) {
              let unidadDeCarrito = document.createElement("div")
              unidadDeCarrito.innerHTML = `Producto: ${elemento.nombre}, Precio: $${elemento.precio}`
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
      const total = carrito.reduce((acumulador, carrito) => acumulador + carrito.precio, 0)
      swal({ title: "El total es de $" + total, })
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
  })
