

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


// عندما يكون المنتجات كثيره سوف يتم عمل زرار لتظهر في كل ضعطه عدد معين من المنتجات 

let load_more = document.querySelector(".product .product_container .load_more")

let current_item = 3;

load_more.addEventListener("click", () => {
    let boxs = [...document.querySelectorAll(".product .box .card")]
    for (let i = current_item; i < current_item + 3; i++) {
        boxs[i].style.display = "flex";
    }
    current_item += 3;

    if (current_item >= boxs.length) {
        load_more.style.display = "none";
    } else {
        load_more.style.display = "flex";
    }
})

