let menuLinkList = document.querySelector(".desktop-menu__list")
let menuLinks = menuLinkList.querySelectorAll(".desktop-menu__link")
menuLinkList.addEventListener("click", function(event)  {
    if (event.target.tagName=='A') {
        for (let link of menuLinks) {
            if (link.classList.contains("desktop-menu__link--active")) {
                link.classList.remove("desktop-menu__link--active")
                break;
            }
        }
        event.target.classList.add("desktop-menu__link--active")
    }
})



let portfolioImages = [
    {"src" : "assets/images/portfolio/img-1.png",
    "alt": "img 1"},
    {"src" : "assets/images/portfolio/img-2.png",
    "alt": "img 2"},
    {"src" : "assets/images/portfolio/img-3.png",
    "alt": "img 3"},
    {"src" : "assets/images/portfolio/img-4.png",
    "alt": "img 4"},
    {"src" : "assets/images/portfolio/img-5.png",
    "alt": "img 5"},
    {"src" : "assets/images/portfolio/img-6.png",
    "alt": "img 6"},
    {"src" : "assets/images/portfolio/img-7.png",
    "alt": "img 7"},
    {"src" : "assets/images/portfolio/img-8.png",
    "alt": "img 8"},
    {"src" : "assets/images/portfolio/img-9.png",
    "alt": "img 9"},
    {"src" : "assets/images/portfolio/img-10.png",
    "alt": "img 10"},
    {"src" : "assets/images/portfolio/img-11.png",
    "alt": "img 11"},
    {"src" : "assets/images/portfolio/img-12.png",
    "alt": "img 12"},
]

const  makeRandomArr = (a, b) => Math.random() - 0.5;
  

const createElement = (tagName,className,src,alt) => {
    let elem =  document.createElement(tagName)
     if (className) {
         elem.classList.add(className);
     }
     if (src) {
         elem.src=src
     }
     if (alt) {
         elem.alt=alt
     }
     return elem;
 }
 

let portfolioFilter = document.querySelector(".filter");
let portfolioGallery = document.querySelector(".gallery")
for (let img of portfolioImages) {
    portfolioGallery.append(createElement("img","gallery__img",img.src,img.alt))
}

portfolioFilter.addEventListener("click", function(event) {
    let items = portfolioFilter.querySelectorAll(".filter__item")
    if (event.target.tagName=="LI") {
        if (event.target.classList.contains("filter__item--active")) {
            return;
        }
    for (let item of items) {
        item.classList.remove("filter__item--active");

    }

        if (event.target.textContent=="All") {
            portfolioGallery.innerHTML="";
            for (let img of portfolioImages) {            
                portfolioGallery.append(createElement("img","gallery__img",img.src,img.alt))
            }
        }
        else {
            portfolioGallery.innerHTML="";
            for (let img of portfolioImages.slice().sort(makeRandomArr)) {
                
                portfolioGallery.append(createElement("img","gallery__img",img.src,img.alt))
            }
        }
        event.target.classList.add("filter__item--active")
    }
}
)













