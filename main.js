document.addEventListener('DOMContentLoaded',function(){
  const $menuButton = document.getElementById("menuButton");
  const $slide      = document.getElementById("slide");
  const $mask       = document.getElementById("mask");
  const $topBar     = document.getElementById("topBar");
  const $list     = document.getElementById("slideList");

  
  document.getElementById("menuButton").addEventListener("click",function(){
    $menuButton.classList.toggle("active");
    $slide.classList.toggle("active");
    $mask.classList.toggle("active"); 
    $topBar.classList.toggle("active"); 
  })
  
  document.getElementById("mask").addEventListener("click",function(){
    $menuButton.classList.toggle("active");
    $topBar.classList.toggle("active");
    $mask.classList.toggle("active");
    $slide.classList.toggle("active");
  
  })

  document.getElementById("slideList").addEventListener("click",function(){
    $menuButton.classList.toggle("active");
    $topBar.classList.toggle("active");
    $mask.classList.toggle("active");
    $slide.classList.toggle("active");
    
  })


    const targetElement = document.querySelectorAll(".js-target");
    document.addEventListener("scroll", function(){
    for (let i = 0; i<targetElement.length; i++){
    const getElementDistance =targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .8
       if(window.innerHeight > getElementDistance){
       targetElement[i].classList.add("show");
        }
      }
    })




})


