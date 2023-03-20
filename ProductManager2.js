class ProductManager {
    constructor(products = []) {
        this.products = products;
        this.idActual = 1;
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log("Error: Todos los campos son obligatorios.");
            return;
        }

        // title (nombre del producto)
        // description (descripción del producto)
        // price (precio)
        // thumbnail (ruta de imagen)
        // code (código identificador)
        // stock (número de piezas disponibles)

        const productoExistente = this.products.find(p => p.code === product.code);
        if (productoExistente) {
            console.log(`Error: El producto con el código ${product.code} ya existe en esta base de datos.`);
            return;
        }

        product.id = this.idActual++;
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.log(`Not found id: ${id} no encontrado`);
        }
        return product;
    }
}

// Testing:
// Se creará una instancia de la clase “ProductManager”
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
// Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

const productos = new ProductManager();
console.log(productos.getProducts()); // []

productos.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
});

console.log(productos.getProducts());

productos.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
});

console.log(productos.getProductById(1)); 
console.log(productos.getProductById(8)); 

