// Iphone condition for phone-video-full
const phoneVideoFull = document.querySelector('.phone-video')
const a = navigator.vendor.includes("Apple") || navigator.vendor.includes("apple")
if(a) {
    console.log('Apple')
    console.log(navigator.vendor)
} else {
    console.log('Not Apple')
    console.log(navigator.vendor)
    phoneVideoFull.style = 'border: none'
}


// PRELOADER
window.onload = function () {
    document.body.classList.add('loaded_hiding');
}