const form = document.getElementById('simulador');
const resultado = document.getElementById('resultado');
const historialBtn = document.getElementById('ver-historial');
const filtroTipo = document.getElementById('filtro-tipo');
const listaTransacciones = document.getElementById('lista-transacciones');
const transacciones = JSON.parse(localStorage.getItem('transacciones')) || [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const tipoOperacion = document.getElementById('tipo-operacion').value;
  const cantidad = document.getElementById('cantidad').value;
  const transaccion = {
    tipoOperacion,
    cantidad,
    fecha: new Date().toLocaleString()
  };
  
  if (tipoOperacion === 'compra') {
    resultado.innerHTML = `Has comprado ${cantidad} criptomonedas.`;
  } else {
    resultado.innerHTML = `Has vendido ${cantidad} criptomonedas.`;
  }
  
  transacciones.push(transaccion);
  localStorage.setItem('transacciones', JSON.stringify(transacciones));
  
  document.getElementById('tipo-operacion').selectedIndex = 0;
  document.getElementById('cantidad').value = '';
  
  resultado.style.display = 'block';
});

historialBtn.addEventListener('click', () => {
  listaTransacciones.innerHTML = '';
  
  const filtro = filtroTipo.value;
  const transaccionesFiltradas = filtro === 'todos' ? transacciones : transacciones.filter(t => t.tipoOperacion === filtro);
  
  transaccionesFiltradas.forEach(t => {
    const li = document.createElement('li');
    li.innerHTML = `${t.tipoOperacion.toUpperCase()} - ${t.cantidad} - ${t.fecha}`;
    listaTransacciones.appendChild(li);
  });
});



