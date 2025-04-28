$(function(){
  $(".container-fluid").load("../shorthands/nav.html", function() {

    //Define
    const links = document.querySelector(".top-links");
    const navToggle = document.querySelector(".nav-toggle");
    const placement = document.querySelector(".container-fluid");
    let profile_card = document.querySelector(".card");

    navToggle.addEventListener("click",function(){
      links.classList.toggle("show-links")
    })
    /* CODE REFERENCE : https://gist.github.com/bright-spark/ca9512850d105b6b4ae668266d591a9d */
    //Globals
    var $topCard,
      //deltaThreshold is the swipe distance from the initial place of the card
      deltaThreshold = 100,
      deltaX = 0;

    function swipeEnded(event, direction, $card) {
      var  directionFactor,
          transform;
      //If the event has a type, then it is triggered from a button and has a given direction
      if (event.type === 'click') {
        directionFactor = direction === 'right' ? -1 : 1;
      }
      //If the event has a deltaX, then it is triggered from a gesture and has a calculated direction
      else if (event.deltaX) {
        directionFactor = event.deltaX >= 0 ? -1 : 1;
      }
      
      //If the threshold is reached or a trigger clicked, the card is thrown on a side and then disappear
      if ( event.deltaX && deltaX > deltaThreshold || event.deltaX && deltaX < -1 * deltaThreshold || direction) {
        transform = 'translate(' + directionFactor * -100 + 'vw, 0) rotate(' + directionFactor * -10 + 'deg)';

        var $repeat = $card.clone().removeClass('done'); //clones the card prior swiping

        $card
          .delay(200)
          .queue(function () { 
            $(this).css('transform', transform);
            $(this).addClass('done').remove(); 
          });
          
        //Do something
        /*console.log('Swipe done. \nCard:', $card, '\nDirection:', directionFactor); */


        //Card returns after 5 seconds and reattach the hammer so slide effect works 
        open_email("Get in Touch")
        setTimeout(function () {
          $repeat
            .css({
              transform: 'translate(0, 0) rotate(0)',
            })
            .removeClass('done')
            .appendTo('.container');
            doing();
        }, 3000);
        

      }
      //If the threshold isn't reached, the card goes back to its initial place
      else {
        transform = 'translate(0, 0) rotate(0)';
        $card.css({
          'transform': transform,
        });
      }
    }

    function swipeLeft(event, $card) {
      var transform;
      deltaX = event.deltaX;
      
      transform = 'translate(' + deltaX * 0.8 + 'px, 0) rotate(-25deg)';
      //translate the card on swipe
      $card.css({
        'transform': transform,
      });
      
    }

    function swipeRight(event, $card) {
      var transform;
      deltaX = event.deltaX;
      transform = 'translate(' + deltaX * 0.8 + 'px, 0) rotate(25deg)';
      //translate the card on swipe
      $card.css({
        'transform': transform,
      });
    }

    //Events
    function doing(){
      $('.swipe-effect').each(function(index, element) {
        var $card = $(element),
          //Add hammer events on element
          hammertime = new Hammer(element);
        
        //Mobile gesture
        hammertime.on('panleft swipeleft', function(event) {
          swipeLeft(event, $card);
        });
        hammertime.on('panright swiperight', function(event) {
          swipeRight(event, $card);
        });
        hammertime.on('panend', function(event) {
          swipeEnded(event, false, $card);
        });
      });
      
      //Btn controls
      $('.js-left-trigger').off('click').on('click', function(event) { //Detach event listeners no doubles on click events . Remove click handle before add new ones
        var $topCard= $('.swipe-effect').last();
        open_email("You thought you had a choice ... Get in Touch Still")
        swipeEnded(event, 'left', $topCard);
      });
      $('.js-right-trigger').off('click').on('click', function(event) {
        var $topCard = $('.swipe-effect').last();
        open_email("Get in Touch")
        swipeEnded(event, 'right', $topCard);
      });
    };

    function open_email(txt){
      window.location.href = `mailto:jalisaabeid44@gmail.com?subject=${txt}`;
    };
    doing();

    })
});

