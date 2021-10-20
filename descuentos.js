

// function calcularPrecioConDescuento(precio, descuento) {
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
//     return precioConDescuento;
// }

// function calcular() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = inputDiscount.value;

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

//     const resulP = document.getElementById("ResultPrice");
//     resulP.innerHTML = "El precio son: $" + precioConDescuento;
// }

const coupons = [
    {
        name: "Coupon1",
        discount: 15,
    },
    {
        name: "Coupon2",
        discount: 30,
    },
    {
        name: "Coupon3",
        discount: 25,
    },
];


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function calcular() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    // const precioConDescuento = calcularPrecioConDescuento(priceValue, couponValue);

    // const resulP = document.getElementById("ResultPrice");
    // resulP.innerHTML = "El precio son: $" + precioConDescuento;

    
    // alert(`EL cupon es ${couponValue}`);

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + userCoupon + " no es válido");
    }
    else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
        const resulP = document.getElementById("ResultPrice");
        resulP.innerHTML = "El precio son: $" + precioConDescuento;
    }
    
}

