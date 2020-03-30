// Contact Form Validation

// Email Validator

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}

let name = document.querySelector('.name-in')
let email = document.querySelector('.email-in')
let subject = document.querySelector('.subj-in')
let message = document.querySelector('.msg-in')
let submitBtn = document.querySelector('.submit-btn')
let nameErr = document.querySelector('.name-err')
let emailErr = document.querySelector('.email-err')
let subjErr = document.querySelector('.subj-err')
let msgErr = document.querySelector('.msg-err')

let validateForm = () => {
  let errors = {
    nameErr: '',
    emailErr: '',
    subjErr: '',
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

  if (!subject.value.length) {
    errors.subjErr = 'Subject is Not Valid'
    hasErr = true
  }

  if (message.value.length < 14) {
    errors.msgErr = 'Message Should be Atleast 15 Characters'
    hasErr = true
  }
  nameErr.innerHTML = errors.nameErr
  emailErr.innerHTML = errors.emailErr
  subjErr.innerHTML = errors.subjErr
  msgErr.innerHTML = errors.msgErr
  return hasErr
}

submitBtn.addEventListener('click', () => {
  if (!validateForm()) {
    nameErr.innerHTML = ''
    emailErr.innerHTML = ''
    subjErr.innerHTML = ''
    msgErr.innerHTML = ''
    name.value = ''
    email.value = ''
    subject.value = ''
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
