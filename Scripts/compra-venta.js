const form = document.getElementById('simulador');
const resultado = document.getElementById('resultado');
const historialBtn = document.getElementById('ver-historial');
const filtroTipo = document.getElementById('filtro-tipo');
const listaTransacciones = document.getElementById('lista-transacciones');
const transacciones = JSON.parse(localStorage.getItem('transacciones')) || [];

// Llamar a la función para obtener los precios al cargar la página

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const tipoOperacion = document.getElementById('tipo-operacion').value;
  const moneda = document.getElementById('filtro-moneda').value;
  const cantidad = parseFloat(document.getElementById('cantidad').value);

  // Obtener el precio de la moneda seleccionada en USD
  let precioMoneda;
  switch (moneda) {
    case 'btc':
      precioMoneda = parseFloat(btc.innerHTML);
      break;
    case 'eth':
      precioMoneda = parseFloat(eth.innerHTML);
      break;
    case 'bnb':
      precioMoneda = parseFloat(bnb.innerHTML);
      break;
    case 'doge':
      precioMoneda = parseFloat(doge.innerHTML);
      break;
    default:
      precioMoneda = 0;
  }

  // Calcular el equivalente en USD
  const equivalenteUSD = precioMoneda * cantidad;

  const transaccion = {
    tipoOperacion,
    moneda,
    cantidad,
    equivalenteUSD,
    fecha: new Date().toLocaleString()
  };

  if (tipoOperacion === 'compra') {
    Swal.fire({
      title: '¡Compra exitosa!',
      html: `Has comprado ${cantidad} ${moneda.toUpperCase()}.<br>Equivalente en USD: $${equivalenteUSD.toFixed(2)}`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'mi-estilo-boton'
      }
    });
  } else {
    Swal.fire({
      title: '¡Venta exitosa!',
      html: `Has vendido ${cantidad} ${moneda.toUpperCase()}.<br>Equivalente en USD: $${equivalenteUSD.toFixed(2)}`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'mi-estilo-boton'
      }
    });
  }
  

  transacciones.push(transaccion);
  localStorage.setItem('transacciones', JSON.stringify(transacciones));

  document.getElementById('tipo-operacion').selectedIndex = 0;
  document.getElementById('cantidad').value = '';

});

historialBtn.addEventListener('click', () => {
  listaTransacciones.innerHTML = '';

  const filtroTipo = document.getElementById('filtro-tipo').value;
  const filtroMoneda = document.getElementById('filtro-moneda').value;

  const transaccionesFiltradas = transacciones.filter(t => {
    if (filtroTipo === 'todos' && filtroMoneda === 'todos') {
      return true;
    } else if (filtroTipo === 'todos') {
      return t.moneda === filtroMoneda;
    } else if (filtroMoneda === 'todos') {
      return t.tipoOperacion === filtroTipo;
    } else {
      return t.tipoOperacion === filtroTipo && t.moneda === filtroMoneda;
    }
  });

  transaccionesFiltradas.forEach(t => {
    const li = document.createElement('li');
    li.innerHTML = `${t.tipoOperacion.toUpperCase()} - ${t.cantidad} - ${t.moneda} - ${t.fecha}`;
    listaTransacciones.appendChild(li);
  });
});




