function calculate(){
    'use strict';
    var total = 0;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;

    var total = quantity * price;
    // var calculate = document.getElementById('submit')
    
    tax = tax / 100;
    tax = tax + 1;
    total = total * tax;
    total -= discount;

    document.getElementById('total').value = total;


    return false
}

function init(){
    // 'use strict'
    var theForm = document.getElementById('theForm');
    // theForm.style.background = "black";
    theForm.submit = calculate;
    console.log(calculate)
}
window.onload = init;