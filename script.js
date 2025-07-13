const checkboxes = document.querySelectorAll('.ramo');
const porcentaje = document.getElementById('porcentaje');

function actualizarPorcentaje() {
  const total = checkboxes.length;
  const completados = Array.from(checkboxes).filter(cb => cb.checked).length;
  const avance = Math.round((completados / total) * 100);
  porcentaje.textContent = `${avance}%`;
}

checkboxes.forEach(cb => {
  cb.addEventListener('change', actualizarPorcentaje);
});

actualizarPorcentaje(); // Al cargar la página
