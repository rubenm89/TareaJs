//1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero 
function piramide(num){
    
    let fila="";

    for (let i = 1; i <= num; i++) {
       
        fila = fila + i;

        console.log(fila)        
    }
}

piramide("6");

piramide("3");

/*2) Escribir una funcion que reciba 2 array y devuelva un array 
con todos los elementos que coinciden entre ellos */

function coinciden(listado1, listado2){
    const resultado = [];

    for (let i = 0; i < listado1.length; i++) {
        for (let j = 0; j < listado2.length; j++) {
            
            if (listado1[i] === listado2[j]) {
                resultado.push(listado1[i]);
                break;
            }
        }
    }
    console.log(resultado)
}

let Array1= ['rojo', 'azul', 'amarillo','negro','88']
let Array2= ['blanco', 'negro', 'rojo','88',true]

coinciden(Array1, Array2);

/*3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.*/

/*3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}*/

/*3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje
si el item ya existe “ya existe xxx con yyy unidades” */

class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio= precio
    }
}

class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }

    agregarProducto(nombre, precio, unidades) {
         
        let producto = { nombre, precio, unidades };        
        let productoExistente = this.productos.find(p => p.nombre === nombre);

        if (productoExistente) {
            console.log("Ya existe "+ productoExistente.nombre + " con " + productoExistente.unidades + " unidades.");
        } else {
            this.productos.push(producto);
            this.montoTotal = this.montoTotal + (precio * unidades);
        }        
    }

    calcularMontoTotal() {
        return this.montoTotal;
    }
}

let carrito = new Carrito();
carrito.agregarProducto("Leche", 10, 1);
carrito.agregarProducto("Azucar", 5, 2);
carrito.agregarProducto("Azucar", 5, 1);

console.log(carrito);