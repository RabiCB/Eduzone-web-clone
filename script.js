function sidebarshow() {
    if(sidebar.style.left==="-300px"){
       sidebar.style.left="0"
       btn.style.left="234px";
    }
    else{
       sidebar.style.left="-300px"
       btn.style.left="16px";
       btn.style.transition="right 0.2s"
    }
   }
const hovereffect = document.querySelector(".hovered");
document.querySelector(".share").addEventListener("mouseover", function () {
  hovereffect.style.display = "flex";
  
});
document.querySelector(".share").addEventListener("mouseout", function () {
  hovereffect.style.display = "none";
  console.log("hello");
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

const sidenav=document.querySelector(".side-bar-nav")
const menu=document.querySelector(".bars")

menu.addEventListener("click",function(){
    if(sidenav.style.left==="-300px"){
        sidenav.style.left="0"
    
    }
    else{
        sidenav.style.left="-300px"
    }
})



var nav = document.querySelector('.navbar-bottom');
window.addEventListener('scroll', function(event) { 
    event.preventDefault();

    if (window.scrollY <= 150) { 
        nav.style.backgroundColor = 'transparent'; 
    } else {
        nav.style.backgroundColor = '#07294d';
        nav.style.top="0";
        nav.style.transition="top 0.6s"
    }
})
const btn = document.querySelector(".setting");
const sidebar = document.querySelector(".sidebar");


let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector(".left"),
  arrowRight = document.querySelector(".right"),
  current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
  
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}
  
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
  
// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});
  
// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});
  
startSlide();

