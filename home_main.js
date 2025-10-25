const nav_section = document.querySelector(".container-fluid");
const navToggle = document.getElementById("check");
const cursor = document.querySelector(".cursor");
const hover_cursor = document.querySelector(".select");
const scroll_nav_bar = document.querySelector(".custom-navbar");

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


//Navbar has background when reach a certain point
// window.addEventListener("scroll",function(){
//   const scrollNo = window.scrollY;
//   if(scrollNo > 100){
//    scroll_nav_bar.classList.add('additional')
   
//   }
//   else{
//     scroll_nav_bar.classList.remove('additional')
    
//   }
// });

//Cursor 
document.addEventListener("mousemove", (event) => {
  const {width, height} = cursor.getBoundingClientRect();
  cursor.style.left =`${event.clientX - width / 2}px`;
  cursor.style.top =`${event.clientY - height / 2}px`;
  hover_cursor.style.left =`${event.clientX - width / 2}px`;
  hover_cursor.style.top =`${event.clientY - height / 2}px`;
});


const clickableElements = document.querySelectorAll('a, button');

// Loop through them
clickableElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        //cursor.style.display = `none`
        console.log('Clicked:', this);
        cursor.style.display =`none`
         hover_cursor.style.display =`block`
    });

    element.addEventListener('mouseleave', function() {
        //cursor.style.display = `none`
        cursor.style.display =`block`
         hover_cursor.style.display =`none`
        
    });


   
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