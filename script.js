let menuLinkList = document.querySelector(".desktop-menu__list")
let menuLinks = menuLinkList.querySelectorAll(".desktop-menu__link")
menuLinkList.addEventListener("click", event => {
    if (event.target.tagName == 'A') {
        for (let link of menuLinks) {
            if (link.classList.contains("desktop-menu__link--active")) {
                link.classList.remove("desktop-menu__link--active")
                break;
            }
        }
        event.target.classList.add("desktop-menu__link--active")
    }
})



let portfolioImages = [{
    "src": "assets/images/portfolio/img-1.png",
    "alt": "img 1"
},
{
    "src": "assets/images/portfolio/img-2.png",
    "alt": "img 2"
},
{
    "src": "assets/images/portfolio/img-3.png",
    "alt": "img 3"
},
{
    "src": "assets/images/portfolio/img-4.png",
    "alt": "img 4"
},
{
    "src": "assets/images/portfolio/img-5.png",
    "alt": "img 5"
},
{
    "src": "assets/images/portfolio/img-6.png",
    "alt": "img 6"
},
{
    "src": "assets/images/portfolio/img-7.png",
    "alt": "img 7"
},
{
    "src": "assets/images/portfolio/img-8.png",
    "alt": "img 8"
},
{
    "src": "assets/images/portfolio/img-9.png",
    "alt": "img 9"
},
{
    "src": "assets/images/portfolio/img-10.png",
    "alt": "img 10"
},
{
    "src": "assets/images/portfolio/img-11.png",
    "alt": "img 11"
},
{
    "src": "assets/images/portfolio/img-12.png",
    "alt": "img 12"
},
]

const makeRandomArr = (a, b) => Math.random() - 0.5;


const createElement = (tagName, classNames, src, alt) => {
    let elem = document.createElement(tagName)
    if (classNames) {  
        for (let className of classNames.split(","))
        elem.classList.add(className.replace(/\s/g,""));
    }
    if (src) {
        elem.src = src
    }
    if (alt) {
        elem.alt = alt
    }
    return elem;
}


let portfolioFilter = document.querySelector(".filter");
let portfolioGallery = document.querySelector(".gallery")
for (let img of portfolioImages) {
    portfolioGallery.append(createElement("img", "gallery__img", img.src, img.alt))
}

portfolioFilter.addEventListener("click", event => {
    let items = portfolioFilter.querySelectorAll(".filter__item")
    if (event.target.tagName == "LI") {
        if (event.target.classList.contains("filter__item--active")) {
            return;
        }
        for (let item of items) {

            item.classList.remove("filter__item--active");

        }
        portfolioGallery.innerHTML = "";
        for (let img of portfolioImages.slice().sort(makeRandomArr)) {

            portfolioGallery.append(createElement("img", "gallery__img", img.src, img.alt))
        }

        event.target.classList.add("filter__item--active")
    }
})

portfolioGallery.addEventListener("click", event => {
    let images = portfolioGallery.querySelectorAll("img")
    if (event.target.tagName == "IMG") {
        for (let img of images) {
            if (img.classList.contains("gallery__img--active")) {
                img.classList.remove("gallery__img--active");
                break;
            }
        }
        event.target.classList.add("gallery__img--active");

    }
})

let sliderContent = document.querySelector(".slider__content")
let slides = sliderContent.querySelectorAll(".slide")
let arrows = sliderContent.querySelectorAll(".arrow")
sliderContent.addEventListener("click", event => {

    if (event.target.closest(".phone-horizontal__base")) {
        sliderContent.querySelector(".phone-horizontal__screen").classList.toggle("display-none")
        return;
    }
    if (event.target.closest(".phone-vertical__base")) {
        sliderContent.querySelector(".phone-vertical__screen").classList.toggle("display-none")
        return;
    }

    //For slider 

    if (event.target.closest(".slider__arrow-right")) {
        moveSlide(1);
    }
    if (event.target.closest(".slider__arrow-left")) {
        moveSlide(-1);
    }

})

const moveSlide = key => {
    key == 1 ? showSlide(slideIndex += 1) : showSlide(slideIndex -= 1);
    sliderContent.classList.toggle("background-blue");
    sliderContent.classList.add("background-delay-visible")
}

const showSlide = position => {
    let slides = document.querySelectorAll(".slide");
    if (position > slides.length) {
        slideIndex = 1;
    }
    if (position < 1) {
        slideIndex = slides.length;
    }
    Array.from(slides).map(el => el.classList.add("display-none"))
    slides[slideIndex - 1].classList.remove("display-none");
}

let slideIndex = 1;
showSlide(slideIndex);



let popup = document.querySelector(".popup")
let contactForm = document.querySelector(".contact-form")
let contactFormSubmit = contactForm.querySelector(".contact-form__submit");
let requiredFields = Array.from(contactForm.querySelectorAll("input[required]"))
const validateField = elem => elem.checkValidity();
contactFormSubmit.addEventListener("click", event => {
    if (requiredFields.every(validateField)) {
        event.preventDefault()
        let subject = contactForm.querySelector(".contact-form__subject").value.trim() == '' ? 'Without subject' : "Subject:<br>" + contactForm.querySelector(".contact-form__subject").value.trim()
        let details = contactForm.querySelector(".contact-form__details").value.trim() == '' ? 'Without description' : 'Description:<br>' + contactForm.querySelector(".contact-form__details").value.trim()
        popup.classList.toggle("display-none")
        popup.querySelector(".popup__subject").innerHTML = subject;
        popup.querySelector(".popup__details").innerHTML = details;
        let submit = popup.querySelector(".popup__submit");
        submit.addEventListener("click", evt => {
            evt.preventDefault;
            popup.classList.add("display-none")
        })
    }
})

