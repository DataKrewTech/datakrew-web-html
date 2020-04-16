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
        './assets/mads/1-Core-1-AppStore.svg'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
        './assets/mads/1-Core-2-Settings.svg'
      },
      {
        name: 'Sasha Morse Code',
        brand: 'Sashalab',
        icon:
        './assets/mads/1-Core-3-Support.svg'
      },
      {
        name: 'CALCULATOR',
        brand: 'Christian Waadt',
        icon:
        './assets/mads/1-Core-4-HeyMADS.svg'
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
        './assets/mads/2-Productivity-1-Dashboards.svg'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
        './assets/mads/2-Productivity-2-Digital-Twin.svg'
      },
      {
        name: 'Sasha Morse Code',
        brand: 'Sashalab',
        icon:
        './assets/mads/2-Productivity-3-Task-Organiser.svg'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
        './assets/mads/2-Productivity-4-Report-Wizard.svg'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
        './assets/mads/2-Productivity-5-Alerts-Reminders.svg'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
        './assets/mads/2-Productivity-6-Madsbook.svg'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
        './assets/mads/2-Productivity-7-VR-Simulator.svg'
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
        './assets/mads/3-Management-1-File-Manager.svg'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
        './assets/mads/3-Management-2-IoT-Manager.svg'
      },
      {
        name: 'CALCULATOR',
        brand: 'Rey',
        icon:
        './assets/mads/3-Management-3-Role-Manager.svg'
      },
      {
        name: 'CALCULATOR',
        brand: 'Rey',
        icon:
        './assets/mads/3-Management-4-Entity-Manager.svg'
      },
      {
        name: 'CALCULATOR',
        brand: 'Rey',
        icon:
        './assets/mads/3-Management-5-Tool-Manager.svg'

      },
      {
        name: 'CALCULATOR',
        brand: 'Rey',
        icon:
        './assets/mads/3-Management-6-Widget-Manager.svg'

      },

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
        './assets/mads/4-Analytics-1-Data-Cruncher.svg'
      },
      {
        name: 'CALCULATOR',
        brand: 'Rey',
        icon:
        './assets/mads/4-Analytics-2-AI-Engine.svg'
      },
      {
        name: 'CALCULATOR',
        brand: 'Rey',
        icon:
        './assets/mads/4-Analytics-3-Usage-Analyser.svg'
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
        './assets/mads/5-Smart-1-MADS-Secure.svg'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
        './assets/mads/5-Smart-2-Login-Tracker.svg'
      },
      {
        name: 'Sasha Morse Code',
        brand: 'Sashalab',
        icon:
        './assets/mads/5-Smart-3-Network-Analyser.svg'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
        './assets/mads/5-Smart-4-Secure-Share.svg'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
        './assets/mads/5-Smart-5-App-Locker.svg'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
        './assets/mads/5-Smart-6-Password-Manager.svg'

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
        './assets/mads/6-General-1-Calendar.svg'
      },
      {
        name: 'PDF Reader',
        brand: 'N4no.com',
        icon:
        './assets/mads/6-General-2-Calculator.svg'
      },
      {
        name: 'CALCULATOR',
        brand: 'Rey',
        icon:
          './assets/mads/6-General-3-Chat-App.svg'
      },
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
  <div class="cat-name  ${selectedAppCatIndex === i ? 'apps-count-active' : ''}">${categories[i].name}</div>
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
    indiApp.classList.add('bounceInUp')
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

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    // document.getElementById("nav").style.height = "60px";
    // document.getElementById("logo").style.maxWidth = "100px";
    document.getElementById("nav").style.boxShadow = "0 7px 12px -12px #666";
    document.getElementById("nav").style.transition = "0.8s";
    document.getElementById("nav").style.backgroundColor = "#FFFFFF";
    for (let i = 0; i <= 1; i++) {
      document.getElementsByClassName("item-dropdown")[i].style.backgroundColor = "#fff";
    }
    for (let i = 0; i <= 5; i++) {
      let actTab = document.getElementsByClassName("act-tab")[i]
      if(actTab){
        actTab.style.color = "#000";
      }
      if (document.getElementsByClassName("item-drop-element")[i]) {
        document.getElementsByClassName("item-drop-element")[i].style.color = "#000";
      }
    }
    document.getElementsByClassName("menu")[0].setAttribute("src", "./assets/menu-black.png");
  } else {
    // document.getElementById("nav").style.height = "100px";
    // document.getElementById("nav").classList.remove("fadeInUp")
    // document.getElementById("logo").style.maxWidth = "150px";
    document.getElementById("nav").style.backgroundColor = "#000";
    document.getElementById("nav").style.transition = "0.8s";
    for (let i = 0; i <= 1; i++) {
      document.getElementsByClassName("item-dropdown")[i].style.backgroundColor = "#000";
    }
    for (let i = 0; i <= 5; i++) {
      let actTab = document.getElementsByClassName("act-tab")[i]
      if(actTab){
        actTab.style.color = "#fff";
      }
      if (document.getElementsByClassName("item-drop-element")[i]) {
        document.getElementsByClassName("item-drop-element")[i].style.color = "#fff";
      }
    }  
    document.getElementsByClassName("menu")[0].setAttribute("src", "./assets/menu-white.png");
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
