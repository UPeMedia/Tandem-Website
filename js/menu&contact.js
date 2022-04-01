let btnContact = document.querySelector(".btn-contacto");
let contactSection = document.querySelector("#contactanos");

let section = document.querySelectorAll(".wrapper section");
let links = document.querySelectorAll(".nav-li a");


let outerWrapper = document.querySelector(".outer-wrapper");

outerWrapper.onscroll = () => {
    //console.log("Hola!");
    section.forEach(sec => {
        let top = window.scrollX;
        let offset = sec.offsetLeft;
        let width = sec.offsetWidth;
        let id = sec.getAttribute('id');

        /* Eh intentedo muchas maneras y no puede detectar en que id esta */

        if (top >= offset && top < offset + width) {
            links.forEach(link => {
                //console.log(link);
                //console.log(id);
                //console.log(document.querySelector(`header nav ul li a[href*='#${id}']`));
                link.classList.remove('link-active');
                /*document.querySelector('nav ul li a[href*=' + id + ']').classList.add('link-active');*/
            })
        }
    })
}

let hamburger = document.querySelector('.hamburger');
let navList = document.querySelector('.header-tandem .contenedor nav');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    navList.classList.toggle('showed');
});

/*window.onscroll = () => {
    console.log(screenX);
    section.forEach(sec => {
        let top = window.scrollX;
        let offset = sec.offsetLeft;
        let width = sec.offsetWidth;
        

        if (top >= offset && top < offset + width) {
            links.forEach(link => {
                link.classList.remove('link-active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('link-active');
            })
        }
    })
}*/
/*
links.forEach(link => {
    
    window.addEventListener("scroll", () => {
        if(id = tar)
        links.classList.remove("link-active");
        link.classList.add("link-active");
    });
}) */


btnContact.addEventListener("click", function () {
    // Toggle class "is-active"
    contactSection.classList.toggle("is-active");
    btnContact.classList.toggle("opened");
    // Do something else, like open/close menu
});