//! Intialize starts
// AOS ANIMATION
AOS.init();

//mix it up
var mixer = mixitup('.container');

//! Intialize ends



// let CollectionQuantityIncriment, CollectionQuantityDecriment,CollectionQuantityResult;





 $(function(){

    // *Jquery code starts


    $('.banner__slider').slick({
     
     
      prevArrow:'.left__arrows',
      nextArrow:'.right__arrows',
      dots: true,
      dotsClass: " banner__dots"
    });



        // speacials settion
        new VenoBox({
            selector: ".speacial__img__links",
            share: true,
            spinner: 'spinner'
        });
//  collection section
        // new TypeIt("#collectionHeading", {
     
        //     speed: 100,
        //     startDelay: 500,
        //   }).go();

        $('.collection__cart__img').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.collection__slick__images'
        });
        $('.collection__slick__images').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.collection__cart__img',
          prevArrow:'.collec__right',
          nextArrow:'.collec__left',
          centerMode: true,
          focusOnSelect: true,
      
        });



//speacial
          // new TypeIt("#speacialHeading", {
          //   speed: 100,      
          // }).go();






//* Jquery code ends 
 })


 
let CollectionQuantityinecriment = document.querySelector('.collection__quantity .plus');

let CollectionQuantityDecriment = document.querySelector('.collection__quantity .minus');
let CollectionQuantityResult = document.querySelector('.collection__quantity .cart__result');



    CollectionQuantityinecriment.addEventListener('click', function(){
         CollectionQuantityResult.innerHTML++
    })

    CollectionQuantityDecriment.addEventListener('click', function(){
          if(CollectionQuantityResult.innerHTML> 1){
              CollectionQuantityResult.innerHTML--
          }
    })