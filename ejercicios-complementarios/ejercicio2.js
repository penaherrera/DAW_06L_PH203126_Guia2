const productos = [];
let totalVenta = 0;

function agregarProducto() {
    const productoInput = document.getElementById('producto');
    const precioInput = document.getElementById('precio');
    
    const producto = productoInput.value;
    const precio = parseFloat(precioInput.value);
    
    if (producto  && precio > 0) {
        productos.push({ producto, precio });
        
        const tabla = document.getElementById('tabla');
        const newRow = tabla.insertRow(-1);
        const productoCell = newRow.insertCell(0);
        const precioCell = newRow.insertCell(1);
        
        productoCell.textContent = producto;
        precioCell.textContent = precio.toFixed(2);
        
        totalVenta += precio;
        
        
        productoInput.value = '';
        precioInput.value = '';
        
        const continuar = confirm('¿Desea ingresar más productos?');
        if (!continuar) {
            document.getElementById('total').textContent = totalVenta.toFixed(2);
        }
    } else {
        alert('Ingrese un producto válido y un precio mayor a 0.');
    }
}