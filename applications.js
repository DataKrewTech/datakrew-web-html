
// let madsLaptopImg = document.querySelector('.mads-laptop-img'
// )

// madsLaptopImg.addEventListener('mouseover', () => {
//   madsLaptopImg.classList.add('pulse')
// })
// madsLaptopImg.addEventListener('mouseout', () => {
//   madsLaptopImg.classList.remove('pulse')
// })

window.addEventListener('scroll', function() {  
  var animationElements = document.querySelectorAll('.application-animation')
  animationElements.forEach(function(element) {
    let position = element.getBoundingClientRect();
    let parentDiv = element.getElementsByClassName("indi-application");
    let parentLeng = parentDiv.length;
    if(position.top < window.innerHeight && position.bottom >= 0) {
      for(i = 0; i< parentLeng; i++){
        parentDiv[i].classList.add('bounceInRight');
      }
    }else{
      for(i = 0; i< parentLeng; i++){
        parentDiv[i].classList.remove('bounceInRight');
      }
    }
  })

  var leftApplicationElements = document.querySelectorAll('.application-ani-left')
  var RightApplicationElements = document.querySelectorAll('.application-ani-right')
  leftApplicationElements.forEach(function(element) {
    var position = element.getBoundingClientRect();
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('bounceInRight');
    }else{
        element.classList.remove('bounceInRight');
    }
  })

  RightApplicationElements.forEach(function(element) {
    var position = element.getBoundingClientRect();
    if(position.top < window.innerHeight && position.bottom >= 0) {
    // if(position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('bounceInLeft');
    }else{
        element.classList.remove('bounceInLeft');
    }
  })
});