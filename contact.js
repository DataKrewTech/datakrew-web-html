// Contact Form Validation

// Email Validator


function validateEmail(email) {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}

let name = document.querySelector('.name-in')
let email = document.querySelector('.email-in')
let mobile = document.querySelector('.mob-in')
let orgnisation = document.querySelector('.org-in')
let message = document.querySelector('.msg-in')
let submitBtn = document.querySelector('.submit-btn')
let nameErr = document.querySelector('.name-err')
let emailErr = document.querySelector('.email-err')
let mobErr = document.querySelector('.mob-err')
let orgErr = document.querySelector('.org-err')
let msgErr = document.querySelector('.msg-err')

let validateForm = () => {
  let errors = {
    nameErr: '',
    emailErr: '',
    mobErr: '',
    orgErr: '',
    msgErr: ''
  }

  let hasErr = false

  if (!name.value.length) {
    errors.nameErr = 'Name is Not Valid'
    hasErr = true
  }

  if (!validateEmail(email.value)) {
    errors.emailErr = 'Email is Not Valid'
    hasErr = true
  }

  if (!mobile.value.length) {
    errors.mobErr = 'Mobile no is Not Valid'
    hasErr = true
  }
  if (!orgnisation.value.length) {
    errors.orgErr = 'Please Enter Organisation'
    hasErr = true
  }
  

  if (message.value.length < 14) {
    errors.msgErr = 'Message Should be Atleast 15 Characters'
    hasErr = true
  }
  nameErr.innerHTML = errors.nameErr
  emailErr.innerHTML = errors.emailErr
  mobErr.innerHTML = errors.mobErr
  mobErr.innerHTML = errors.mobErr
  orgErr.innerHTML = errors.orgErr
  msgErr.innerHTML = errors.msgErr
  return hasErr
}

submitBtn.addEventListener('click', () => {
  if (!validateForm()) {
    nameErr.innerHTML = ''
    emailErr.innerHTML = ''
    mobErr.innerHTML = ''
    orgErr.innerHTML = ''
    msgErr.innerHTML = ''
    name.value = ''
    email.value = ''
    mobile.value = ''
    orgnisation.value = ''
    message.value = ''
    setTimeout(() => {
      swal('Submitted successfully! We will get back to you :)', {
        button: false,
        icon: 'success'
      })
    }, 100)
  }
})

// Map Related Code
var geocoder
var map

function initialize() {
  var map = new google.maps.Map(
    document.getElementsByClassName('map-cont')[0],
    {
      center: new google.maps.LatLng(1.355545, 103.692241),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  )
}
google.maps.event.addDomListener(window, 'load', initialize)



var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav").style.height = "60px";
    document.getElementById("logo").style.maxWidth = "100px";
  } else {
    document.getElementById("nav").style.height = "100px";
    document.getElementById("nav").classList.remove("fadeInUp")
    document.getElementById("logo").style.maxWidth = "150px";
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

