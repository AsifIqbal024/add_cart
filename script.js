function showMenu() {
    document.querySelector('.menubar').classList.toggle('active');
    document.querySelector('.toggle-btn-menu').classList.toggle('active');
}

function showCart() {
    document.querySelector('.cart-page').classList.toggle('active');
    document.querySelector('.toggle-btn-cart').classList.toggle('active');
}


let val = 0 ;
function cartAdd(){
    val=val+1;
    document.querySelector('.cart-total-items').innerHTML=val;
    document.querySelector('.cartItemTotal').innerHTML = `<p>Your Cart Has ${val} Items</p>`
    document.querySelector('.cart-product-info').innerHTML = `` 
}

