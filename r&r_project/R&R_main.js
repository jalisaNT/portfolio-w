$(function(){
  $(".container-fluid").load("../shorthands/index.html", function() {

    //Define
    const links = document.querySelector(".top-links");
    const navToggle = document.querySelector(".nav-toggle");

    navToggle.addEventListener("click",function(){
      links.classList.toggle("show-links")
    })
  })
});