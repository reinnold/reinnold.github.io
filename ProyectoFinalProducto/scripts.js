let products =[];
let total = 0;

function add(product, precio){
    console.log(product, precio);
    total= total + precio;
    document.getElementById('checkout').innerHTML = 'Pagar $ ' + total;
    
}

function pay() {
    alert("TOTAL A PAGAR=     "+total);
    window.alert(products.join(", \n"));
    
}