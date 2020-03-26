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
  console.log(subDownCustItem, 'lolo')
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
