if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}
const navLinks= document.getElementById("navLink")
function showMenu(){
  navLinks.style.right="0"
}
function hideMenu(){
navLinks.style.right="-200px"
}
//Home page 
var menu_sec = document.getElementById("menuSec");
var leftArrow = document.getElementById("left-arrow");
var rightArrow = document.getElementById("right-arrow");

rightArrow.addEventListener('click',()=>{
  menu_sec.scrollLeft +=115
});
leftArrow.addEventListener('click',()=>{
  menu_sec.scrollLeft -=115
});
//cart system

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName('food-item-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0 || input.value>=20) {
      input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement.parentElement
  var title = shopItem.getElementsByClassName('food-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('food-item-price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('food-item-image')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart if you want to add just click the quantity')
          return
      }
  }
  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="80" height="80">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('birr', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = total +'birr'
}


function check(){
    var email = document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var regex =/^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.]+)\.([a-zA-Z]{2,5})$/;
    var regex2 =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    var res = regex.test(email);
    var res2 = regex2.test(password);
    if(!res||!res2){
    if(!res)
    alert('plese enter valid email id');
    if(!res2)
    alert("your password must contain a capital letter and a number and must be greater than 8");
    return false;
    }
    else{
    alert('Thank You');
    return true;}

}
     
function check2(){
    var password1= document.getElementById("password1").value;
    var password2= document.getElementById("password2").value;
    var email = document.getElementById("email").value;
    var regex =/^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.]+)\.([a-zA-Z]{2,5})$/;
    var regex2 =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    var res = regex.test(email);
    var res2 = regex2.test(password1);
    if(!res||!res2){
    if(!res)
    {alert('plese enter valid email id');}
    if(!res2)
    {alert("your password must contain a capital letter and a number and must be greater than 8");}

    return false;
    }
    else if(password1!=password2){
      alert('password do not match');
      return false;}
    else
      return true;
}

     