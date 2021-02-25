document.addEventListener('DOMContentLoaded',function(){
  const $menuButton = document.getElementById("menuButton");
  const $slide      = document.getElementById("slide");
  const $mask       = document.getElementById("mask");
  const $list     = document.getElementById("slideList");

  
  document.getElementById("menuButton").addEventListener("click",function(){
    $menuButton.classList.toggle("active");
    $slide.classList.toggle("active");
    $mask.classList.toggle("active"); 
  })
  
  document.getElementById("mask").addEventListener("click",function(){
    $menuButton.classList.toggle("active");
    $mask.classList.toggle("active");
    $slide.classList.toggle("active");
  
  })

  document.getElementById("slideList").addEventListener("click",function(){
    $menuButton.classList.toggle("active");
    $mask.classList.toggle("active");
    $slide.classList.toggle("active");
    
  })


    const targetElement = document.querySelectorAll(".js-text");
    document.addEventListener("scroll", function(){
    for (let i = 0; i<targetElement.length; i++){
    const getElementDistance =targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .9
       if(window.innerHeight > getElementDistance){
       targetElement[i].classList.add("show");
        }
      }
    })


    const targetElement2 = document.querySelectorAll(".js-sub");
    document.addEventListener("scroll", function(){
    for (let i = 0; i<targetElement2.length; i++){
    const getElementDistance =targetElement2[i].
    getBoundingClientRect().top + targetElement2[i].clientHeight * .9
       if(window.innerHeight > getElementDistance){
       targetElement2[i].classList.add("show");
        }
      }
    })




})


