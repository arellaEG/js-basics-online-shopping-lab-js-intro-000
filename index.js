var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var curItem={'itemName':item, 'itemPrice':Math.floor(Math.random()*100)}
 cart.push(curItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length===0){
    return 'Your shopping cart is empty.'
  }
  else {
    var str=`In your cart, you have`;
    for (let i=0; i<cart.length; i++){
      str=str + `${cart.i['itemName']} at ${cart.i['itemPrice']}, `}
    str=str+`and ${cart.cart.length+1['itemName']} at ${cart.(cart.length+1)['itemPrice']}.`
    return str
  }

  }


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
