$(function(){
  $(".container-fluid").load("../shorthands/index.html", function() {

    //Define
    const links = document.querySelector(".top-links");
    const navToggle = document.getElementById("check");

    navToggle.addEventListener("click",function(){
      links.classList.toggle("show-links")
    })
  })
});