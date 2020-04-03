let categories = [
  {
    name: 'Core',
    img:
      'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/39A46530-F7FF-4990-98FF-4C3075E225BA.svg',
    apps: [
      {
        name: 'CALCULATOR',
        brand: 'Rey',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/85E72143-FBD4-409F-B484-052D065F74C7.png'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/1B5B2F6C-1719-4289-A20C-25B35A8B97C8.png'
      },
      {
        name: 'Sasha Morse Code',
        brand: 'Sashalab',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/3923DC37-CA51-4AF7-BB39-AFD7BA03A1D6.png'
      },
      {
        name: 'CALCULATOR',
        brand: 'Christian Waadt',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/B22D70E8-6156-407A-88A7-54964DD47F69.png'
      }
    ]
  },
  {
    name: 'Productivity',
    img:
      'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/2852DB3D-8EF6-4307-B173-F9A5C52A9552.svg',
    apps: [
      {
        name: 'CALCULATOR',
        brand: 'Rey',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/85E72143-FBD4-409F-B484-052D065F74C7.png'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/1B5B2F6C-1719-4289-A20C-25B35A8B97C8.png'
      },
      {
        name: 'Sasha Morse Code',
        brand: 'Sashalab',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/3923DC37-CA51-4AF7-BB39-AFD7BA03A1D6.png'
      }
    ]
  },
  {
    name: 'Management',
    img:
      'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/9905D2E9-21E3-4209-94AC-8B130DCBDA94.svg',
    apps: [
      {
        name: 'CALCULATOR',
        brand: 'Rey',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/85E72143-FBD4-409F-B484-052D065F74C7.png'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/1B5B2F6C-1719-4289-A20C-25B35A8B97C8.png'
      }
    ]
  },
  {
    name: 'Analytics',
    img:
      'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/1E2076A5-30E5-4CF8-BF47-4D30F7894FE5.svg',
    apps: [
      {
        name: 'CALCULATOR',
        brand: 'Rey',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/85E72143-FBD4-409F-B484-052D065F74C7.png'
      }
    ]
  },
  {
    name: 'Security',
    img:
      'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/DCC72D89-A0DF-44F7-8E7F-8407F6CD5F3A.svg',
    apps: [
      {
        name: 'CALCULATOR',
        brand: 'Rey',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/85E72143-FBD4-409F-B484-052D065F74C7.png'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/1B5B2F6C-1719-4289-A20C-25B35A8B97C8.png'
      },
      {
        name: 'Sasha Morse Code',
        brand: 'Sashalab',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/3923DC37-CA51-4AF7-BB39-AFD7BA03A1D6.png'
      }
    ]
  },
  {
    name: 'General',
    img:
      'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/D8F3B1C6-2324-4093-90B0-2E8416AAEE13.svg',
    apps: [
      {
        name: 'CALCULATOR',
        brand: 'Rey',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/85E72143-FBD4-409F-B484-052D065F74C7.png'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
          'https://cdn.zeplin.io/5e6a432713239d166440621b/assets/1B5B2F6C-1719-4289-A20C-25B35A8B97C8.png'
      }
    ]
  }
]

let catContainer = document.querySelector(
  '.apps .container .apps-details .wrapper .categories'
)

let appsContainer = document.querySelector(
  '.apps .container .apps-details .category-apps'
)

let selectedAppCatIndex = 1

// render categories

const renderCategories = () => {
  for (let i = 0; i < categories.length; i++) {
    let indiCat = document.createElement('div')
    indiCat.classList.add('indi-cat')
    indiCat.innerHTML = `
    <div class="wrapper ${selectedAppCatIndex === i ? 'active-cat' : ''}">
    <div class="cat-icon-container">
      <img
        src=${categories[i].img}
        alt="cat-icon"
        class="cat-icon"
      />
    </div>
  </div>
  <div class="cat-name">${categories[i].name}</div>
  <div class="apps-count ${
    selectedAppCatIndex === i ? 'apps-count-active' : ''
  }">
    ${categories[i].apps.length} ${
      categories[i].apps.length > 1 ? 'Apps' : 'App'
    }
  </div>
    `
    indiCat.addEventListener('click', () => {
      selectedAppCatIndex = i
      catContainer.innerHTML = null
      appsContainer.innerHTML = null
      renderCategories()
      renderApps()
    })

    catContainer.appendChild(indiCat)
  }
}

renderCategories()

// render apps of a particular category

const renderApps = () => {
  for (let i = 0; i < categories[selectedAppCatIndex].apps.length; i++) {
    let indiApp = document.createElement('div')
    indiApp.classList.add('app-detail')
    indiApp.classList.add('wow')
    indiApp.classList.add('bounceInRight')
    indiApp.classList.add('slow')
    indiApp.innerHTML = `
            <div class="upper">
                <div class="app-icon">
                <img
                    src=${categories[selectedAppCatIndex].apps[i].icon}
                    class="icon"
                    alt="icon"
                />
                </div>
                <div class="main-details">
                <h4 class="cat-name">
                  ${categories[selectedAppCatIndex].name}
                </h4>
                <h4 class="app-name">${categories[selectedAppCatIndex].apps[i].name}</h4>
                <div class="company-name">${categories[selectedAppCatIndex].apps[i].brand}</div>
                </div>
            </div>
            <p class="detail">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
            </p>
        `

    appsContainer.appendChild(indiApp)
  }
}

renderApps()

// carousel
let leftClick = document.querySelector(
  '.apps .container .apps-details .wrapper .left'
)

let rightClick = document.querySelector(
  '.apps .container .apps-details .wrapper .right'
)

leftClick.addEventListener('click', () => {
  let newArr = []
  for (let i = 0; i < categories.length; i++) {
    if (i === categories.length - 1) {
      newArr[0] = categories[i]
    } else {
      newArr[i + 1] = categories[i]
    }
  }
  categories = newArr
  catContainer.innerHTML = null
  appsContainer.innerHTML = null
  renderCategories()
  renderApps()
})

rightClick.addEventListener('click', () => {
  let newArr = []
  for (let i = 0; i < categories.length; i++) {
    if (i === 0) {
      newArr[categories.length - 1] = categories[i]
    } else {
      newArr[i - 1] = categories[i]
    }
  }

  categories = newArr
  catContainer.innerHTML = null
  appsContainer.innerHTML = null
  renderCategories()
  renderApps()
})

// $(document).ready(function(){
//   $(document).on('mouseover', '.app-detail', function () {
//   });
//   $(document).on('mouseout', '.app-detail', function () {
//   });
// });