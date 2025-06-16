$(function(){
  $(".container-fluid").load("../shorthands/index.html", function() {

    //Define
    const links = document.querySelector(".top-links");
    const navToggle = document.getElementById("check");

    navToggle.addEventListener("click",function(){
      links.classList.toggle("show-links")
    })

    document.querySelectorAll('.image-grid figure').forEach(figure => {
      figure.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (this.classList.contains('expanded')) {
          this.classList.remove('expanded');
          img.style.maxHeight = '500px';
          this.style.gridColumn = '';
        } else {
          this.classList.add('expanded');
          img.style.maxHeight = '1500px';
          this.style.gridColumn = '1 / -1';
        }
      });
    });
  })
});