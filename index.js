// resuable section

let mainContainer = document.querySelector('.main-container')


// topbar

const topbarContent = `
<div class="container">
<a href="index.html" class="logo-container">
  <img src="assets/datakrew-logo.png" class="logo" alt="logo" />
</a>
<div class="nav-items">
  <div class="item-container">
    <li class="item"><a href="index.html">HOME</a></li>
  </div>
  <div class="item-container">
    <li class="item"><a href="mads.html">MADS</a></li>
  </div>
  <div class="item-container">
    <li class="item">
      <span class="txt">CUSTOMERS</span>
    </li>
    <ul class="item-dropdown">
      <li class="item-drop-ele">
        <a href="applications.html">Applications</a>
      </li>
      <li class="item-drop-ele">
        <a href="solutions.html">Solutions</a>
      </li>
    </ul>
  </div>
  <div class="item-container">
    <li class="item"><span class="txt">COMPANY</span></li>
    <ul class="item-dropdown">
      <li class="item-drop-ele"><a href="about.html">About</a></li>
      <li class="item-drop-ele">
        <a href="about.html#team">Team</a>
      </li>
      <li class="item-drop-ele">
        <a href="about.html#partners">Partners</a>
      </li>
    </ul>
  </div>
  <div class="item-container">
    <li class="item"><a href="contact.html">CONTACT</a></li>
  </div>
</div>
<div class="res-menu">
  <img src="./assets/menu-white.png" class="menu" />
</div>
</div>
`

let topbarEle = document.createElement('nav')
topbarEle.classList.add('topbar')
topbarEle.innerHTML = topbarContent
mainContainer.prepend(topbarEle)

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
      <div class="sub-cust"><a href="solutions.html">SOLUTIONS</a></div>
      <div class="sub-cust"><a href="applications.html">APPLICATIONS</a></div>
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
      <div class="sub-comp"><a href="about.html">ABOUT</a></div>
      <div class="sub-comp"><a href="about.html#team">TEAM</a></div>
      <div class="sub-comp">
        <a href="about.html#partners">PARTNERS</a>
      </div>
      <li><a href="contact.html">CONTACT</a></li>
`

let navDropdownEle = document.createElement('ul')
navDropdownEle.classList.add('res-nav-items')
navDropdownEle.innerHTML = navDropdownCont
topbarEle.after(navDropdownEle)


// Footer

const footerContent = `
    <div class="container">
      <div class="left-content">
        <div class="brand-icon">
          <img src="./assets/datakrew-logo.png" alt="brand" />
        </div>
        <div class="txt">
          Pellentesque nuns, sit amet tempor justo odio blandir ex tincidunt
          tempus rutrum.
        </div>
        <div class="social">
          <div class="link">
            <img src="./assets/fb.svg" alt="twitter" />
          </div>
          <div class="link">
            <img src="./assets/twitter.png" alt="twitter" />
          </div>
          <div class="link">
            <img src="./assets/linkedin.png" alt="linkedin" />
          </div>
          <div class="link">
            <img src="./assets/github.png" alt="github" />
          </div>
        </div>
      </div>
      <div class="right-content">
        <div class="container">
          <div class="mini-section">
            <h3 class="title"><a href="index.html">HOME</a></h3>
          </div>
          <div class="mini-section">
            <h3 class="title"><a href="index.html">MADS</a></h3>
          </div>
          <div class="mini-section">
            <h3 class="title">CUSTOMERS</h3>
            <a href="applications.html" class="link">Applications</a>
            <a href="solutions.html" class="link">Solutions</a>
          </div>
          <div class="mini-section">
            <h3 class="title">COMPANY</h3>
            <a href="about.html" class="link">About</a>
            <a href="about.html#team" class="link">Team</a>
            <a href="about.html#partners" class="link">Partners</a>
          </div>
          <div class="mini-section">
            <h3 class="title"><a href="contact.html">CONTACT</a></h3>
          </div>
        </div>
      </div>
    </div>
`

let footerEle = document.createElement('footer')
footerEle.classList.add('main-footer')
footerEle.innerHTML = footerContent
mainContainer.appendChild(footerEle)


// nav dropdown
let dropDownOpen = false
let showSubDownOne = false
let showSubDownTwo = false
let resNavDropdown = document.querySelector('.main-container .res-nav-items')
let subdownOne = document.querySelector('.subdownOne')
let subdownTwo = document.querySelector('.subdownTwo')

document
  .querySelector('.topbar .container .res-menu')
  .addEventListener('click', () => {
    if (dropDownOpen) {
      resNavDropdown.classList.remove('block')
      resNavDropdown.classList.add('none')
      dropDownOpen = false
    } else {
      resNavDropdown.classList.remove('none')
      resNavDropdown.classList.add('block')
      dropDownOpen = true
    }
  })

subdownOne.addEventListener('click', () => {
  let subDownCustItem = document.querySelectorAll('.sub-cust')
  if (showSubDownOne) {
    subDownCustItem.forEach(item => {
      item.classList.remove('block')
      item.classList.add('none')
      document.querySelector('.cus-up').classList.remove('block')
      document.querySelector('.cus-up').classList.add('none')
      document.querySelector('.cus-down').classList.remove('none')
      document.querySelector('.cus-down').classList.add('block')
      showSubDownOne = false
    })
  } else {
    subDownCustItem.forEach(item => {
      item.classList.remove('none')
      item.classList.add('block')
      document.querySelector('.cus-up').classList.remove('none')
      document.querySelector('.cus-up').classList.add('block')
      document.querySelector('.cus-down').classList.remove('block')
      document.querySelector('.cus-down').classList.add('none')
      showSubDownOne = true
    })
  }
})

subdownTwo.addEventListener('click', () => {
  let subDownCompItem = document.querySelectorAll('.sub-comp')
  if (showSubDownTwo) {
    subDownCompItem.forEach(item => {
      item.classList.remove('block')
      item.classList.add('none')
      document.querySelector('.comp-up').classList.remove('block')
      document.querySelector('.comp-up').classList.add('none')
      document.querySelector('.comp-down').classList.remove('none')
      document.querySelector('.comp-down').classList.add('block')
      showSubDownTwo = false
    })
  } else {
    subDownCompItem.forEach(item => {
      item.classList.remove('none')
      item.classList.add('block')
      document.querySelector('.comp-up').classList.remove('none')
      document.querySelector('.comp-up').classList.add('block')
      document.querySelector('.comp-down').classList.remove('block')
      document.querySelector('.comp-down').classList.add('none')
      showSubDownTwo = true
    })
  }
})



