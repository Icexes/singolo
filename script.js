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
