// Contact Form Validation

// Email Validator

$(document).ready(function() {
	$('#btn-submit').click(function() {
		$('.error').hide();
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var emailblockReg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;

		// var emailaddressVal = $('#UserEmail').val();
		// if (emailaddressVal == '') {
		// 	$('#UserEmail').after('<span class="error err">Please enter your email address.</span>');
		// 	hasError = true;
		// } else if (!emailReg.test(emailaddressVal)) {
		// 	$('#UserEmail').after('<span class="error err">Enter a valid email address.</span>');
		// 	hasError = true;
		// } else if (!emailblockReg.test(emailaddressVal)) {
		// 	$('#UserEmail').after('<span class="error err">Enter a valid email address.</span>');
		// 	hasError = true;
		// }

		if (hasError == true) {
			return false;
		}
	});
});
// </script>

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

let name = document.querySelector('.name-in');
let email = document.querySelector('.email-in');
let email1 = document.querySelector('.email-in1');

let mobile = document.querySelector('.mob-in');
let mobile1 = document.querySelector('.mob-in1');

let orgnisation = document.querySelector('.org-in');
let message = document.querySelector('.msg-in');
let submitBtn = document.querySelector('.submit-btn');
let nameErr = document.querySelector('.name-err');
let emailErr = document.querySelector('.email-err');
let mobErr = document.querySelector('.mob-err');
let mobErr1 = document.querySelector('.mob-err1');

let orgErr = document.querySelector('.org-err');
let msgErr = document.querySelector('.msg-err');
let validateForm = () => {
	let errors = {
		nameErr: '',
		emailErr: '',
		mobErr: '',
		mobErr1: '',

		orgErr: '',
		msgErr: ''
	};

	let hasErr = false;

	if (!name.value.length) {
		errors.nameErr = 'Name is Not Valid';
		hasErr = true;
	}

	if (!validateEmail(email.value)) {
		errors.emailErr = 'Email is Not Valid';
		hasErr = true;
	}

	if (!orgnisation.value.length) {
		errors.orgErr = 'Enter Organisation';
		hasErr = true;
	}

	if (mobErr1.innerText != '') {
		mobErr1.classList.remove('hide');
		errors.mobErr1 = 'Please enter a valid number';
		hasErr = true;
	}

	nameErr.innerHTML = errors.nameErr;
	emailErr.innerHTML = errors.emailErr;
	mobErr.innerHTML = errors.mobErr;
	mobErr.innerHTML = errors.mobErr;
	mobErr1.innerHTML = errors.mobErr1;

	orgErr.innerHTML = errors.orgErr;
	msgErr.innerHTML = errors.msgErr;
	return hasErr;
};

submitBtn.addEventListener('click', () => {
	// console.log('sss');
	if (!validateForm()) {
		nameErr.innerHTML = '';
		emailErr.innerHTML = '';
		mobErr.innerHTML = '';
		mobErr1.innerHTML = '';

		orgErr.innerHTML = '';
		msgErr.innerHTML = '';
		name.value = '';
		// UserEmail.value = '';
		mobile.value = '';
		orgnisation.value = '';
		message.value = '';
		setTimeout(() => {
			swal('Submitted successfully! We will get back to you :)', {
				button: false,
				icon: 'success'
			});
		}, 100);
	}
});

// Map Related Code
var geocoder;
var map;

function initialize() {
	var map = new google.maps.Map(document.getElementsByClassName('map-cont')[0], {
		center: new google.maps.LatLng(1.355545, 103.692241),
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
}

google.maps.event.addDomListener(window, 'load', initialize);

var mybutton = document.getElementById('myBtn');
window.onscroll = function() {
	scrollFunction();
};
function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		document.getElementById('nav').style.boxShadow = '0 7px 12px -12px #666';
		document.getElementById('nav').style.transition = '0.8s';
		// document.getElementById("nav").style.height = "60px";
		// document.getElementById("logo").style.maxWidth = "100px";
		document.getElementById('req-demo-btn').style.color = '#000000';
		document.getElementById('req-demo-btn').style.borderColor = '#000000';
		document.getElementById('nav').style.backgroundColor = '#FFFFFF';

		for (let i = 0; i <= 1; i++) {
			document.getElementsByClassName('item-dropdown')[i].style.backgroundColor = '#fff';
		}
		for (let i = 0; i <= 5; i++) {
			let actTab = document.getElementsByClassName('act-tab')[i];
			if (actTab) {
				actTab.style.color = '#000';
			}
			if (document.getElementsByClassName('item-drop-element')[i]) {
				document.getElementsByClassName('item-drop-element')[i].style.color = '#000';
			}
		}
		document.getElementsByClassName('menu')[0].setAttribute('src', './assets/menu-black.png');
	} else {
		// document.getElementById("nav").style.height = "100px";
		// document.getElementById("nav").classList.remove("fadeInUp")
		// document.getElementById("logo").style.maxWidth = "150px";
		document.getElementById('nav').style.backgroundColor = '#000';
		document.getElementById('req-demo-btn').style.color = '#ffffff';
		document.getElementById('req-demo-btn').style.borderColor = '#ffffff';
		document.getElementById('nav').style.transition = '0.8s';
		for (let i = 0; i <= 1; i++) {
			document.getElementsByClassName('item-dropdown')[i].style.backgroundColor = '#000';
		}
		for (let i = 0; i <= 5; i++) {
			let actTab = document.getElementsByClassName('act-tab')[i];
			if (actTab) {
				actTab.style.color = '#fff';
			}
			if (document.getElementsByClassName('item-drop-element')[i]) {
				document.getElementsByClassName('item-drop-element')[i].style.color = '#fff';
			}
		}
		document.getElementsByClassName('menu')[0].setAttribute('src', './assets/menu-white.png');
	}
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
