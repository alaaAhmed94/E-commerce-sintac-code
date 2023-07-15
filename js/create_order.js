

// start meun
let meun = document.querySelector(".meun");
let alaa = document.querySelector(".alaa");

meun.addEventListener("click", () => {
    if (alaa.style.display == "flex") {
        alaa.style.display = "none"
    } else {
        alaa.style.display = "flex"
    }
})

// end meun


// start popup
let cart = document.querySelector(".cart")
let popup = document.querySelector(".popup")
let close = document.querySelector(".close")
let cart_pc = document.querySelector(".cart_pc")
cart.addEventListener("click", () => popup.classList.toggle("popup_open"))
cart_pc.addEventListener("click", () => popup.classList.toggle("popup_open"))


close.addEventListener("click", () => popup.classList.remove("popup_open"))
// end popup 

// الجزاء الخاص بصفحه create_order popup

let create = document.querySelector(".btn_create")
let popup_create_order = document.querySelector(".popup_create_order")
let close_create_order = document.querySelector(".close_create_order")

create.addEventListener("click", () => popup_create_order.classList.toggle("popup_open_create_order"))
console.log(create);
console.log(popup_create_order);
console.log(close_create_order);
close_create_order.addEventListener("click", () => popup_create_order.classList.remove("popup_open_create_order"))
