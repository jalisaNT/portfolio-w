const nav_section = document.querySelector(".container-fluid");
const navToggle = document.getElementById("check");

console.log(nav_section);
console.log(window.innerWidth);
const links = document.querySelector(".top-links");
console.log(links);
navToggle.addEventListener("click",function(){

  links.classList.toggle("show-links")
  
})

//Homepage link fade in and out animation
const homepageLink = document.getElementById("homepage");
homepageLink.addEventListener("click", function (e) {
  e.preventDefault(); // Stop default jump
    
  document.body.classList.add("fade-out");
    
  setTimeout(() => {
    window.location.href = this.href; 
  }, 500); 
});
ScrollReveal().reveal('.container', { delay: 100 });
ScrollReveal().reveal(".row", {
  duration: 1000,
  scale: 0.85
});


/*
ULTILISE WORK WORK SECTION:  const observer = new IntersectionObserver(entries =>{
  
      console.log(entries);
     
    }); // takes in a callback and contains options how want to configure

    observer.observe(txt[1]);



$(function(){
  $(".container-fluid").load("shorthands/index.html", function() { // Load the js nav into before running html

    //Define
    const links = document.querySelector(".top-links");
    const navToggle = document.querySelector(".nav-toggle");
    const txt = document.querySelectorAll(".container");

   
    navToggle.addEventListener("click",function(){ // Toggle Display naviagtion 
      links.classList.toggle("show-links")
    })

    

  });
});

*/

    /* NOT WORKING CURRENTLY
    const observer = new IntersectionObserver(entries =>{
      console.log(entries); 
      entries.forEach(entry =>{
       if (entry.isIntersecting){
        ScrollReveal().reveal(entry, { delay: 300 });
       };
      });
     
    }, {threshold: 1}); 

    //observer.observe(txt[1]); because IO can only handle one input at a time
    txt.forEach(each_text =>{
      observer.observe(each_text);
    });
    */