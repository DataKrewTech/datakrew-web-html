// resuable section

let mainContainer = document.querySelector(".main-container");

// topbar

const topbarContent = `
<div class="container">
<a href="index.html" class="logo-container">
  <img src="assets/datakrew-logo.png" class="logo" id="logo" alt="Datakrew" />
</a>
<div class="nav-items">
  <div class="item-container">
    <li class="item"><a href="index.html" class="act-tab index" name="home" id="act-tab" >HOME</a></li>
  </div>
  <div class="item-container">
    <li class="item"><a href="mads.html" class="act-tab mads" name="mads" id="act-tab">MADS</a></li>
  </div>
  <div class="item-container">
    <li class="item">
      <span class="act-tab customer txt" id="act-tab">CUSTOMERS</span>
    </li>
    <ul class="item-dropdown">
      <li class="item-drop-ele"><a class="item-drop-element" href="applications.html">Applications</a></li>
      <li class="item-drop-ele"><a class="item-drop-element" href="solutions.html">Solutions</a>
      </li>
    </ul>
  </div>
  <div class="item-container">
    <li class="item"><span class="act-tab company txt" id="act-tab">COMPANY</span></li>
    <ul class="item-dropdown">
      <li class="item-drop-ele"><a class="item-drop-element" href="company.html#about" >About</a></li>
      <li class="item-drop-ele"><a class="item-drop-element" href="company.html#team">Team</a> </li>
      <li class="item-drop-ele"><a class="item-drop-element" href="company.html#partners">Partners</a> </li>
    </ul>
  </div>
  <div class="item-container">
  <li class="item"><a href="contact.html" class="act-tab contact"  name="contact" id="act-tab">CONTACT</a> </li>
  </div>
  <div class="item-container" style="padding-left: 16px">
  <a href="#open-modal"><button id="req-demo-btn">REQUEST DEMO</button></a>
  </div>

  <div id="open-modal" class="modal-window">
  <div>
    <a href="#" title="Close" class="modal-close icon-close">
    <i class="fa fa-times" style="padding-right: 2px; position:relative;top:-44px"></i>
    </a>
    <div id="open-modal" class="fade">
  <form id="contact-form" class="contact-form"   action="https://formspree.io/mbjaebko"
  method="POST">
   <ul>

   <div class="input-data">
   <span class="span-icon"> <i class="fa fa-user-circle icon-1" aria-hidden="true"></i></span>

   <input type="text" class="input-name form-control" name="fullName" placeholder="Full Name" min-length="2" max-length="40" required />
   <span class="notification"></span>
   <span class="required"><strong><small><em> (required)</em></small></strong></span>
   <span class="char-counter"></span>
   </div>

   <div class="input-data">
   <span class="span-icon"><i class="fa fa-question-circle icon-2" aria-hidden="true"></i></span>

   <select name="canWeHelpYouWith"
           class="">
           <option value="help" class="" selected="selected">What can we help you with?</option>
           <option value="Request a Demo">Request a Demo</option>
           <option value="Licensing the Platform">Licensing the Platform</option>
           <option value="Pricing">Pricing</option>
          <option value="Solutions Information">Solutions Information</option>
           <option value="General Inquiry">General Inquiry</option>
            <option value="Press Inquiry">Press Inquiry</option>
            <option value="Other" >Other</option>
            
    </select>
    <span class="span-icon1"><i class="fa fas fa-angle-down icon-11"></i></span>
  
   
  
   </div>



   <div class="input-data">
   <span class="span-icon"><i class="fa fa-briefcase icon-3" aria-hidden="true"></i></span>
   <input type="text" class="input-name" name="companyName" placeholder="Company Name" min-length="2" max-length="40" required />
   <span class="notification"></span>
   <span class="required"><strong><small><em> (required)</em></small></strong></span>
   <span class="char-counter"></span>
   </div>


   <div class="input-data">
   <span class="span-icon"><i class="fa fa-question-circle icon-4" aria-hidden="true"></i>
   </span>

   <select name="productAreYouInterestedIn" 
           class="" aria-required="true" aria-invalid="false">
           <option value="interest" class="gf_placeholder">Which product are you interested in?</option>
           <option value="MADS Platform">MADS Platform</option>
           <option value="MADS Apps">MADS Apps</option>
           <option value="ITUS Secure Edge">ITUS Secure Edge</option>
           <option value="HULK USB Key">HULK USB Key</option>
                                   
    </select>
    <span class="span-icon1"><i class="fa fas fa-angle-down icon-12"></i> </span>
   </div>




   <div class="input-data">
   <span  class="span-icon"><i class="fa fa-envelope icon-5" aria-hidden="true"></i></span>


   <input type="email" class="input-name" name="workEmail" placeholder="Work Email" min-length="2" max-length="40" required />
   <span class="notification"></span>
   <span class="required"><strong><small><em> (required)</em></small></strong></span>
   <span class="char-counter"></span>
   </div>


   <div class="input-data">
   <span class="span-icon">
   <i class="fa fa-building  icon-6" aria-hidden="true"></i></span>

   <select name="BestDescribesYou" 
        class="" aria-required="true" aria-invalid="true">
        <option value="best" selected="selected" class="gf_placeholder">What best describes you?
        </option>
        <option value="Solutions Provider">Solutions Provider</option>
        <option value="System Integrator">System Integrator</option>
        <option value="Managed Service Provider">Managed Service Provider</option>
        <option value="Value Added Reseller (VAR)">Value Added Reseller (VAR)</option>
        <option value="IoT Device Manufacturer">IoT Device Manufacturer</option>
        <option value="Distributor">Distributor</option>
        <option value="Telco">Telco</option>
        <option value="Enterprise Customer">Enterprise Customer</option>
        <option value="Consultant">Consultant</option>
        <option value="Other">Other</option>

    </select>
   <span class="span-icon1"> <i class="fa fas fa-angle-down icon-13"></i> </span>
     </div>


   <div class="input-data">
   <span  class="span-icon"><i class="fa fa-phone icon-7" aria-hidden="true"></i></span>
   <input type="number" class="input-name" name="phoneNo" placeholder="Phone" min-length="2" max-length="40" required />
   <span class="notification"></span>
   <span class="required"><strong><small><em> (required)</em></small></strong></span>
   <span class="char-counter"></span>
   </div>

   <div class="input-data input-data1">
   <span class="span-icon span-icon11"><i class="fa fa-question-circle icon-8" aria-hidden="true"></i></span>
   <textarea name="message"
   class="textarea " placeholder="Message ..." aria-required="true"
   aria-invalid="true" rows="3" cols="20"></textarea>
   </div>

    </ul>
    <input type="hidden" name="_cc" value="roy@datakrew.com">
    <input type="hidden" name="_cc" value="sumanta@datakrew.com">
    <!-- Submit -->

    
    <div class="submit-btn-div">
      <input id="input-submit" class="input-submit" type="submit" value="Request" id="submit" />
    </div>
  
    <p id="my-form-status" style="text-align:center; margin-top:20px"></p>
  
  </form>
</div>

    </div>
    </div>





</div>
<div class="res-menu">
  <img src="./assets/menu-white.png" class="menu" />
</div>  
</div>
`;

let topbarEle = document.createElement("nav");
topbarEle.classList.add("topbar");
topbarEle.setAttribute("id", "nav", "req-demo-btn");
topbarEle.innerHTML = topbarContent;
mainContainer.prepend(topbarEle);

// nav dropdown
const navDropdownCont = `
      <li><a href="index.html">HOME</a></li>
      <li><a href="mads.html">MADS</a></li>
      <li class="subdown subdownOne">
        <span>CUSTOMERS</span
        ><img
          class="cus-down block"
          src="https://img.icons8.com/android/24/000000/sort-down.png"
        />
        <img
          class="cus-up none"
          src="https://img.icons8.com/android/24/000000/sort-up.png"
        />
      </li>
      <div class="sub-cust"><a href="applications.html">APPLICATIONS</a></div>

      <div class="sub-cust"><a href="solutions.html">SOLUTIONS</a></div>
      <li class="subdown subdownTwo">
        <span>COMPANY</span
        ><img
          class="comp-down block"
          src="https://img.icons8.com/android/24/000000/sort-down.png"
        />
        <img
          class="comp-up none"
          src="https://img.icons8.com/android/24/000000/sort-up.png"
        />
      </li>
      <div class="sub-comp"><a href="company.html">ABOUT</a></div>
      <div class="sub-comp"><a href="company.html#team">TEAM</a></div>
      <div class="sub-comp">
        <a href="company.html#partners">PARTNERS</a>
      </div>
      <li><a href="contact.html">CONTACT</a></li>
`;

let navDropdownEle = document.createElement("ul");
navDropdownEle.classList.add("res-nav-items");
navDropdownEle.innerHTML = navDropdownCont;
topbarEle.after(navDropdownEle);

// Footer

const footerContent = `
    <div class="container">
      <div class="left-content">
        <div class="brand-icon">
          <img src="./assets/datakrew-logo.png" alt="Datakrew" />
        </div>
        <div class="txt">
          <b>Datakrew</b> is a deep tech startup with strong roots 
          in IoT, AI & data security – we are a spin-off from NTU 
          Singapore, supported by Enterprise Singapore.
        </div>
        <div class="social">
          <div class="link">
            <span class="social-icon"><a href="https://www.facebook.com/DataKrewTech" target="_blank">
            <i class="fa fa-facebook"></i></a></span> 

          </div>
          <div class="link">
            <span class="social-icon"><a href="https://twitter.com/DataKrew" target="_blank">
            <i class="fa fa-twitter"></i></a></span> 

          </div>
          <div class="link">
            <span class="social-icon"><a href="https://linkedin.com/company/datakrew" target="_blank">
            <i class="fa fa-linkedin"></i></a></span> 

          </div>
          <div class="link">
            <span class="social-icon"><a href="https://github.com/datakrewtech" target="_blank">
            <i class="fa fa-github"></i></a></span> 

          </div>
        </div>
      </div>
      <div class="right-content">
        <div class="container">
          <div class="mini-section">
            <h3 class="title"><a class="index" href="index.html">HOME</a></h3>
          </div>
          <div class="mini-section">
            <h3 class="title"><a class="mads" href="mads.html">MADS</a></h3>
          </div>
          <div class="mini-section">
            <h3 class="customer title">CUSTOMERS</h3>
            <a href="applications.html" class="link">Applications</a>
            <a href="solutions.html" class="link">Solutions</a>
          </div>
          <div class="mini-section">
            <h3 class="title"><a class="company" href="company.html">COMPANY</a></h3>
            <a href="company.html#about" class="link">About</a>
            <a href="company.html#team" class="link">Team</a>
            <a href="company.html#partners" class="link">Partners</a>
          </div>
          <div class="mini-section">
            <h3 class="title"><a class="contact" href="contact.html">CONTACT</a></h3>
          </div>
        </div>
      </div>
    </div>
`;

let footerEle = document.createElement("footer");
footerEle.classList.add("main-footer");
footerEle.innerHTML = footerContent;
mainContainer.appendChild(footerEle);

// nav dropdown
let dropDownOpen = false;
let showSubDownOne = false;
let showSubDownTwo = false;
let resNavDropdown = document.querySelector(".main-container .res-nav-items");
let subdownOne = document.querySelector(".subdownOne");
let subdownTwo = document.querySelector(".subdownTwo");

document
  .querySelector(".topbar .container .res-menu")
  .addEventListener("click", () => {
    if (dropDownOpen) {
      resNavDropdown.classList.remove("block");
      resNavDropdown.classList.add("none");
      dropDownOpen = false;
    } else {
      resNavDropdown.classList.remove("none");
      resNavDropdown.classList.add("block");
      dropDownOpen = true;
    }
  });

subdownOne.addEventListener("click", () => {
  let subDownCustItem = document.querySelectorAll(".sub-cust");
  if (showSubDownOne) {
    subDownCustItem.forEach((item) => {
      item.classList.remove("block");
      item.classList.add("none");
      document.querySelector(".cus-up").classList.remove("block");
      document.querySelector(".cus-up").classList.add("none");
      document.querySelector(".cus-down").classList.remove("none");
      document.querySelector(".cus-down").classList.add("block");
      showSubDownOne = false;
    });
  } else {
    subDownCustItem.forEach((item) => {
      item.classList.remove("none");
      item.classList.add("block");
      document.querySelector(".cus-up").classList.remove("none");
      document.querySelector(".cus-up").classList.add("block");
      document.querySelector(".cus-down").classList.remove("block");
      document.querySelector(".cus-down").classList.add("none");
      showSubDownOne = true;
    });
  }
});

subdownTwo.addEventListener("click", () => {
  let subDownCompItem = document.querySelectorAll(".sub-comp");
  if (showSubDownTwo) {
    subDownCompItem.forEach((item) => {
      item.classList.remove("block");
      item.classList.add("none");
      document.querySelector(".comp-up").classList.remove("block");
      document.querySelector(".comp-up").classList.add("none");
      document.querySelector(".comp-down").classList.remove("none");
      document.querySelector(".comp-down").classList.add("block");
      showSubDownTwo = false;
    });
  } else {
    subDownCompItem.forEach((item) => {
      item.classList.remove("none");
      item.classList.add("block");
      document.querySelector(".comp-up").classList.remove("none");
      document.querySelector(".comp-up").classList.add("block");
      document.querySelector(".comp-down").classList.remove("block");
      document.querySelector(".comp-down").classList.add("none");
      showSubDownTwo = true;
    });
  }
});

var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("nav").style.boxShadow = "0 7px 12px -12px #666";
    document.getElementById("nav").style.transition = "0.8s";
    // document.getElementById("nav").style.height = "60px";
    // document.getElementById("logo").style.maxWidth = "100px";
    document.getElementById("req-demo-btn").style.color = "#000000";
    document.getElementById("req-demo-btn").style.borderColor = "#000000";
    document.getElementById("nav").style.backgroundColor = "#FFFFFF";

    for (let i = 0; i <= 1; i++) {
      document.getElementsByClassName("item-dropdown")[
        i
      ].style.backgroundColor = "#fff";
    }
    for (let i = 0; i <= 5; i++) {
      let actTab = document.getElementsByClassName("act-tab")[i];
      if (actTab) {
        actTab.style.color = "#000";
      }
      if (document.getElementsByClassName("item-drop-element")[i]) {
        document.getElementsByClassName("item-drop-element")[i].style.color =
          "#000";
      }
    }
    document
      .getElementsByClassName("menu")[0]
      .setAttribute("src", "./assets/menu-black.png");
  } else {
    // document.getElementById("nav").style.height = "100px";
    // document.getElementById("nav").classList.remove("fadeInUp")
    // document.getElementById("logo").style.maxWidth = "150px";
    document.getElementById("nav").style.backgroundColor = "#000";
    document.getElementById("req-demo-btn").style.color = "#ffffff";
    document.getElementById("req-demo-btn").style.borderColor = "#ffffff";
    document.getElementById("nav").style.transition = "0.8s";
    for (let i = 0; i <= 1; i++) {
      document.getElementsByClassName("item-dropdown")[
        i
      ].style.backgroundColor = "#000";
    }
    for (let i = 0; i <= 5; i++) {
      let actTab = document.getElementsByClassName("act-tab")[i];
      if (actTab) {
        actTab.style.color = "#fff";
      }
      if (document.getElementsByClassName("item-drop-element")[i]) {
        document.getElementsByClassName("item-drop-element")[i].style.color =
          "#fff";
      }
    }
    document
      .getElementsByClassName("menu")[0]
      .setAttribute("src", "./assets/menu-white.png");
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

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above
  var form = document.getElementById("contact-form");
  var button = document.getElementById("input-submit");
  var status = document.getElementById("my-form-status");
  // Success and Error functions for after the form is submitted
  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks!";
  }
  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }
  // handle the form submission event
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});
// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
