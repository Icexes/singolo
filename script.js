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

let menuLinkList = document.querySelector(".desktop-menu__list")
let menuLinks = menuLinkList.querySelectorAll(".desktop-menu__link")
let categories = document.querySelectorAll("main > *")

document.addEventListener("scroll", function () {
    let currentPosition = window.scrollY

    categories.forEach(category => {

        if (category.offsetTop <= currentPosition + 94 && category.offsetTop + category.offsetHeight > currentPosition) {
            menuLinks.forEach(link => {
                link.classList.remove("desktop-menu__link--active")
                if (link.getAttribute("href").slice(1) == category.getAttribute("id")) {
                    link.classList.add("desktop-menu__link--active")
                }
            })
        }
        if (document.documentElement.scrollHeight - document.documentElement.clientHeight <= currentPosition) {

            menuLinks[menuLinks.length - 2].classList.remove("desktop-menu__link--active")
            menuLinks[menuLinks.length - 1].classList.add("desktop-menu__link--active")
        }
    }
    )

})

const shuffle = arr => {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

const createElement = (tagName, classNames, src, alt) => {
    let elem = document.createElement(tagName)
    if (classNames) {
        for (let className of classNames.split(","))
            elem.classList.add(className.replace(/\s/g, ""));
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
        for (let img of shuffle(portfolioImages)) {

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


    if (event.target.closest(".slider__arrow-right")) {
        if (isEnabled) {
            nextSlide(currentSlide);
        }
    }
    if (event.target.closest(".slider__arrow-left")) {
        if (isEnabled) {
            previousSlide(currentSlide);
        }
    }

})

let currentSlide = 0;
let isEnabled = true;

const previousSlide = n => {
    hideItem('to-right');
    changecurrentSlide(n - 1);
    showSlide('from-left');
}

const nextSlide = n => {
    hideItem('to-left');
    changecurrentSlide(n + 1);
    showSlide('from-right');
}
const changecurrentSlide = n => currentSlide = (n + slides.length) % slides.length;

function hideItem(direction) {
    isEnabled = false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend', function () {
        this.classList.remove('slide--active', direction);
    });
}

function showSlide(direction) {
    slides[currentSlide].classList.add('slide--next', direction);
    slides[currentSlide].addEventListener('animationend', function () {
        this.classList.remove('slide--next', direction);
        this.classList.add('slide--active');
        isEnabled = true;
    });
}

let popup = document.querySelector(".popup")
let contactForm = document.querySelector(".contact-form")
contactForm.addEventListener("submit", event => {
    event.preventDefault()
    let subject = contactForm.querySelector(".contact-form__subject").value.trim() == '' ? 'Without subject' : "Subject:<br>" + contactForm.querySelector(".contact-form__subject").value.trim()
    let details = contactForm.querySelector(".contact-form__details").value.trim() == '' ? 'Without description' : 'Description:<br>' + contactForm.querySelector(".contact-form__details").value.trim()
    popup.classList.toggle("display-none")
    popup.querySelector(".popup__subject").innerHTML = subject;
    popup.querySelector(".popup__details").innerHTML = details;
    let submit = popup.querySelector(".popup__submit");
    submit.addEventListener("click", evt => {
        evt.preventDefault;
        contactForm.reset()
        popup.classList.add("display-none")
    })

})

