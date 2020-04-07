const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
    
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// LOGO IMAGE
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// ADDING 2 THINGS TO THE NAV AND NAMING NAV
const navSection = document.querySelector("nav");
let newLinka = document.createElement("a")
newLinka.textContent = "Enter"
let newLinkb = document.createElement("a")
newLinkb.textContent = "Exit"
navSection.prepend(newLinka);
navSection.appendChild(newLinkb);
let navTxt = document.querySelectorAll("a");


// NAV TEXT
navTxt[1].textContent = siteContent["nav"]["nav-item-1"]
navTxt[2].textContent = siteContent["nav"]["nav-item-2"]
navTxt[3].textContent = siteContent["nav"]["nav-item-3"]
navTxt[4].textContent = siteContent["nav"]["nav-item-4"]
navTxt[5].textContent = siteContent["nav"]["nav-item-5"]



// //HEADING WORDS
const word1 = document.querySelector('.cta-text h1');
word1.textContent = siteContent['cta']['h1'];

const word2 = document.querySelector('.cta-text button');
word2.textContent = siteContent['cta']['button'];


// CIRCLE IMAGE 
let front = document.getElementById("cta-img");
front.setAttribute("src", siteContent["cta"]["img-src"]);




//Featured Section 
let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerText = siteContent['main-content']['features-h4'];

let featuresContent = document.getElementsByTagName('p')[0];
featuresContent.innerText = siteContent['main-content']['features-content'];

let about_H4 = document.getElementsByTagName('h4')[1];
about_H4.innerText = siteContent['main-content']['about-h4'];

let aboutContent_1 = document.getElementsByTagName('p')[1];
aboutContent_1.innerText = siteContent['main-content']['about-content'];

// let aboutt = document.querySelector(".text-content h4");
// aboutt.textContent = siteContent["main-content"]["about-h4"];




//WIDE IMAGE
let wide = document.getElementById("middle-img");
wide.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


//FOOTER

// const footer = document.getElementsByClassName('contact h4');
// footer.textContent = siteContent['contact']['contact-h4'];



//COPYRIGHT