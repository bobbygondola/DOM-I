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
const nav = document.querySelectorAll("nav a");
//Color the NAV
nav.forEach(element => element.style.color = "green");

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




//Featured Section/ Middle Sec
const sectionHeaders = document.querySelectorAll(".main-content h4");
sectionHeaders[0].textContent = siteContent["main-content"]["features-h4"]
sectionHeaders[1].textContent = siteContent["main-content"]["about-h4"]
sectionHeaders[2].textContent = siteContent["main-content"]["services-h4"]
sectionHeaders[3].textContent = siteContent["main-content"]["product-h4"]
sectionHeaders[4].textContent = siteContent["main-content"]["vision-h4"]


//WIDE IMAGE
let wide = document.getElementById("middle-img");
wide.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Features Section Bottom
const sectionContent = document.querySelectorAll(".main-content p");
sectionContent[0].textContent = siteContent["main-content"]["features-content"];
sectionContent[1].textContent = siteContent["main-content"]["about-content"];
sectionContent[2].textContent = siteContent["main-content"]["services-content"];
sectionContent[3].textContent = siteContent["main-content"]["product-content"];
sectionContent[4].textContent = siteContent["main-content"]["vision-content"];


//Contact

const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];

const contactContent = document.querySelectorAll(".contact p");
contactContent[0].textContent = siteContent.contact["address"];
contactContent[1].textContent = siteContent.contact["phone"];
contactContent[2].textContent = siteContent.contact["email"];

//footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent.footer["copyright"];

