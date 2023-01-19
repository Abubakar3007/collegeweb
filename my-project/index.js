var humberger = document.getElementById('humberger')
var cancel = document.getElementById('cancel')
var list = document.getElementById('list')
humberger.addEventListener('click', humfun);
function humfun() {
    this.style.display = 'none'
    list.style.display = 'block'
    cancel.style.display = 'block'

}
cancel.addEventListener('click', cancelfun);
function cancelfun() {
    this.style.display = 'none'
    humberger.style.display = 'block'
    list.style.display = 'none'
}
let full = document.querySelector('.full');
let ticon = document.getElementById("t-icon");
full.addEventListener("click", fullFun)
function fullFun() {
    console.log("hiii")
}

// slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("image");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
let icon = document.getElementById("icon");
let fa = document.getElementById("fa");
for (var i = 0; i < icon.length; i++) {
    icon[i].addEventListener("mouseover", iconFun);
    function iconFun() {
        fa.style.color = "#fff"
    }

    icon[i].addEventListener("mouseleave", iconfunle);
    function iconfunle() {
        fa.style.color = "black";
    }
}



// timer


$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    })
})

// slider end

// course slider



// end course slider
// let con=document.getElementById("conn");
// con.addEventListener("click",confun);
// let btn=document.getElementById("btn");
// btn.addEventListener("mouseover",confun)

// function confun(){
//    con.style.display="block"
// }
// btn.addEventListener("mouseleave",confunl);
// function confunl(){
//     con.style.display="none"
//  }
// let hoverlist=document.getElementById("hover");
// let hoverli=document.getElementById("hoverli");
// hoverlist.addEventListener("mouseover",hoverFun);
// function hoverFun(){
//     hoverli.style.display="block"
// }
// hoverlist.addEventListener("mouseout",hoverfuno);
// function hoverfuno(){

// hoverli.style.display="none"
// }
// counter 
// card slider
// $(".slider").owlCarousel({
//     loop:true,
//     autoplay:true,
//     autoplayTimeout:2000,
//     autoplayHoverPause:true
// })
// fixed btn
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



$(".slider").owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
})

// const galleryBox=document.getElementsByClassName("gallery-box")
// galleryIcon=document.getElementsByClassName("icon1");
// for(let i=0;i<galleryIcon.length;i++){
//     galleryIcon[i].addEventListener("click",function(){
//         console.log("clicked",i)
//     })
//     // console.log(galleryIcon[i])
// }
// console.log(galleryIcon.length)
// const gallery = document.querySelectorAll(".gallery .image");
// previewBox = document.querySelector(".preview-box");
// previewImg = previewBox.querySelector("img");
// closeIcon = document.querySelector(".icon");
// currentImg = previewBox.querySelector(".current-img");
// totalImg = previewBox.querySelector(".total-img");
// window.onload = () => {
//     for (let i = 0; i < gallery.length; i++) {
//         totalImg.textContent = gallery.length;
//         let newIndex = i;
//         let clickImgIndex;
//         gallery[i].onclick = () => {

//             clickImgIndex = newIndex;
//             function preview() {
//                 currentImg.textContent = newIndex + 1;
//                 let selectedImgUrl = gallery[newIndex].querySelector("img").src;
//                 previewImg.src = selectedImgUrl;
//             }
//             const prevBtn = document.querySelector(".prev");
//             const nextBtn = document.querySelector(".next");
//             if (newIndex == 0) {
//                 prevBtn.style.display = "none";
//             }
//             if (newIndex >= gallery.length - 1) {
//                 nextBtn.style.display = "none";
//             }
//             prevBtn.onclick = () => {
//                 newIndex--;
//                 if (newIndex == 0) {
//                     preview();
//                     prevBtn.style.display = "none";
//                 }
//                 else {
//                     preview();
//                     prevBtn.style.display = "block";
//                 }
//             }
//             nextBtn.onclick = () => {
//                 newIndex++;
//                 if (newIndex >= gallery.length - 1) {
//                     preview();
//                     nextBtn.style.display = "none";
//                 }
//                 else {
//                     preview();
//                     nextBtn.style.display = "block";
//                 }
//             }
//             preview();
//             previewBox.classList.add("show");
//             closeIcon.onclick = () => {
//                 newIndex = clickImgIndex;
//                 prevBtn.style.display = "block";
//                 nextBtn.style.display = "block";
//                 previewBox.classList.remove("show");
//             }
//         }
//     }
// }