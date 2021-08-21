
//  function for extra cost 
function addExtraCost(product, price){
    const extraCost = document.getElementById(product + '-cost');
    extraCost.innerText = price;
}

// geting extra item cost  
function getExtraPrice(product){
    const  itemPrice = document.getElementById(product + '-cost');
    const itemCostAmount = parseInt(itemPrice.innerText);
    return itemCostAmount;
}


// Function for update total 
function updateTotalPrice (){
    const bestPrice = getExtraPrice('best');
    const memoryPrice = getExtraPrice('memory');
    const storagePrice = getExtraPrice ('storage');
    const deliveryPrice = getExtraPrice ('delivery')
    const totalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('total-price').innerText = totalPrice;

    // update total 
    const total = document.getElementById('total');
        total.innerText = totalPrice;
}

// handle event listener for memory cost
document.getElementById('memory-8').addEventListener('click', function(){
    addExtraCost('memory', 0);
    updateTotalPrice();
});

document.getElementById('memory-16').addEventListener('click', function(){
    addExtraCost('memory', 180);
    updateTotalPrice();
});



// handle event listener for Storage cost
document.getElementById('storage-1').addEventListener('click', function(){
    addExtraCost('storage', 0);
    updateTotalPrice();
});

document.getElementById('storage-2').addEventListener('click', function(){
    addExtraCost('storage', 100);
    updateTotalPrice();
});


document.getElementById('storage-3').addEventListener('click', function(){
    addExtraCost('storage', 180);
    updateTotalPrice();
});



// handle event listener for delivery cost
document.getElementById('free-delivery').addEventListener('click', function(){
    addExtraCost('delivery', 0);
    updateTotalPrice();
});


document.getElementById('charge-delivery').addEventListener('click', function(){
    addExtraCost('delivery', 20);
    updateTotalPrice();
});


//  apply promo code
document.getElementById('apply-btn').addEventListener('click', function(){
    const totalPrice = document.getElementById('total-price').innerText;
    const total = document.getElementById('total');
    const promoCode = document.getElementById('input-promo-code');
    const cuponCode =promoCode.value;
    if(cuponCode.toLowerCase() == 'stevekaku'){
        const discount = (totalPrice * 20) / 100;
        const priceAfterDiscount = totalPrice - discount;
        total.innerText = priceAfterDiscount;
    }
    else if (cuponCode.toLowerCase() != 'stevekaku'){
        alert('Invalid code. Please, Give the right promo code!!')
    }
    else {
        total.innerText = totalPrice;
    }
   promoCode.value = '';
});











