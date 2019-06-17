/**
 * OOP and jQuery
 */


// Create shopping cart array
var shoppingCart = [];

// Check if shopping cart is empty
function isShoppingCartEmpty() {
    if (shoppingCart.length == 0) {
        return true;
    }

    return false;
}

// Check to see if the item being added is already in the shopping cart
function checkItemInShoppingCart(itemID) {
    for(var i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id == itemID) {
            return true;
        }
    }

    return false;
}

// Add quantity to the item in the shopping cart
function addQuantity(itemID) {
    for(var i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id == itemID) {
            shoppingCart[i].quantity = (shoppingCart[i].quantity + 1);
        }
    }
}

// Subtract quantity to the item in the shopping cart
function subtractQuantity(itemID) {
    for(var i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id == itemID & shoppingCart[i].quantity >= 1) {
            shoppingCart[i].quantity = (shoppingCart[i].quantity - 1);
        }

        if (shoppingCart[i].quantity == 0) {
            removeItem(shoppingCart[i].id);
        }
    }
}

// Add item to shopping cart
function addItem(itemObject) {
    shoppingCart.push(itemObject);
}

// Remove item in shopping cart
function removeItem(itemID) {
    for(var i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id == itemID) {
            // DO NOT CHANGE THE 1 HERE
            shoppingCart.splice(i, 1);
        }
    }
}

// Make table
function makeTable() {

    cart = null;

    for(var i = 0; i < shoppingCart.length; i++) {
        // Make row
        cart = cart + makeRow(shoppingCart[i]);
    }

    return cart;
}

// Generate row for each item for table
function makeRow(itemObject) {
    return '<tr id="' + itemObject.id + '">'+
                '<td>' + itemObject.name + '</td>'+
                '<td>' + itemObject.price + '</td>'+
                '<td>' + itemObject.quantity + '</td>'+
                '<td>' + itemObject.subTotal() + '</td>'+
                '<td>' +
                    '<button class="addQuantityButton" type="button">Add Quantity</button>'+
                    '<button class="subtractQuantityButton" type="button">Subtract Quantity</button>'+
                    '<button class="removeButton" type="button">Remove Item</button>'
                '</td>' +
            '</tr>';
}

// Get total price
function getTotal() {
    total = null;

    for(var i = 0; i < shoppingCart.length; i++) {
        total = (total + shoppingCart[i].subTotal());
    }

    return total;
}

// Add button
$('.addButton').on('click', function() {
    // Create new item object
    var item = new Object();

    item.id       = $(this).parent().find('[name="id"]').val();;
    item.name     = $(this).parent().find('[name="name"]').val();;
    item.price    = $(this).parent().find('[name="price"]').val();;
    item.quantity = 1;
    item.subTotal = function () {
        return (this.price * this.quantity);
    }

    if (isShoppingCartEmpty()) {
        addItem(item);
    } else if (checkItemInShoppingCart(item.id)) {
        addQuantity(item.id);
    } else {
        addItem(item);
    }

    $('#cart').html(makeTable());
    $('#total').html(getTotal());
});

// Add Quantity button
$('#cart').on('click', '.addQuantityButton', function() {
    addQuantity($(this).parent().parent().attr('id'));
    $('#cart').html(makeTable());
    $('#total').html(getTotal());
});


// Subtract Quantity button
$('#cart').on('click', '.subtractQuantityButton', function() {
    subtractQuantity($(this).parent().parent().attr('id'));
    $('#cart').html(makeTable());
    $('#total').html(getTotal());
});

// Remove button
$('#cart').on('click', '.removeButton', function() {
    removeItem($(this).parent().parent().attr('id'));
    $('#cart').html(makeTable());
    $('#total').html(getTotal());
});