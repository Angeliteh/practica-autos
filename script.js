// Obtener referencias a los elementos
const marcaSlider = document.getElementById("marca-slider");
const modeloSlider = document.getElementById("modelo-slider");
const marcaTexto = document.getElementById("marca-texto");
const modeloTexto = document.getElementById("modelo-texto");
const anioTexto = document.getElementById("anio-texto");
const puertasTexto = document.getElementById("puertas-texto");
const precioDesdeTexto = document.getElementById("precio-desde-texto");
const precioHastaTexto = document.getElementById("precio-hasta-texto");
const carImage = document.getElementById("car-image");

// Datos de marcas, modelos e información adicional
const data = {
  0: { // Marca: Toyota
    name: "Toyota",
    modelos: [
      { name: "Corolla", anio: 2022, puertas: 4, precioDesde: 400000, precioHasta: 600000, image: "toyota_corolla.png" },
      { name: "Camry", anio: 2023, puertas: 4, precioDesde: 700000, precioHasta: 1200000, image: "toyota_camry.png" },
      { name: "RAV4", anio: 2023, puertas: 5, precioDesde: 800000, precioHasta: 1300000, image: "toyota_rav4.png" }
    ]
  },
  1: { // Marca: Ford
    name: "Ford",
    modelos: [
      { name: "Focus", anio: 2022, puertas: 4, precioDesde: 500000, precioHasta: 900000, image: "ford_focus.png" },
      { name: "Mustang", anio: 2023, puertas: 2, precioDesde: 1000000, precioHasta: 2000000, image: "ford_mustang.png" },
      { name: "Explorer", anio: 2023, puertas: 5, precioDesde: 1500000, precioHasta: 2500000, image: "ford_explorer.png" }
    ]
  },
  2: { // Marca: Honda
    name: "Honda",
    modelos: [
      { name: "Civic", anio: 2022, puertas: 4, precioDesde: 400000, precioHasta: 800000, image: "honda_civic.png" },
      { name: "Accord", anio: 2023, puertas: 4, precioDesde: 700000, precioHasta: 1100000, image: "honda_accord.png" },
      { name: "CR-V", anio: 2023, puertas: 5, precioDesde: 850000, precioHasta: 1400000, image: "honda_crv.png" }
    ]
  }
};

// Función para actualizar los valores dinámicamente
function updateUI() {
  const marcaIndex = marcaSlider.value;
  const modeloIndex = modeloSlider.value;

  // Obtener la marca y modelo seleccionados
  const selectedMarca = data[marcaIndex];
  const selectedModelo = selectedMarca.modelos[modeloIndex];

  // Actualizar textos
  marcaTexto.textContent = selectedMarca.name;
  modeloTexto.textContent = selectedModelo.name;
  anioTexto.textContent = selectedModelo.anio;
  puertasTexto.textContent = selectedModelo.puertas;
  precioDesdeTexto.textContent = selectedModelo.precioDesde.toLocaleString("es-MX");
  precioHastaTexto.textContent = selectedModelo.precioHasta.toLocaleString("es-MX");

  // Cambiar imagen del auto
  carImage.src = `images/${selectedModelo.image}`;
}

// Eventos para actualizar la interfaz cuando se mueven los sliders
marcaSlider.addEventListener("input", () => {
  modeloSlider.value = 0; // Resetear modelo al cambiar de marca
  updateUI();
});

modeloSlider.addEventListener("input", updateUI);

// Inicializar la UI
updateUI();
