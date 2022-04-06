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



let contactClose = document.querySelector('#contact-close');

btnContact.addEventListener("click", function () {
    // Toggle class "is-active"
    contactSection.classList.toggle("is-active");
    btnContact.classList.toggle("opened");
    //contactClose.classList.toggle('actived');
});


let closeArt = document.querySelectorAll(".closeBox");
let logoClient = document.querySelectorAll(".clientBox h2");
let artBox = document.querySelectorAll(".artbox");


logoClient.forEach(logo => {
    logo.addEventListener('click', () => {
        artBox.forEach(artb => {
            if (logo.getAttribute('id') == "artbox1") {
                document.querySelector('#box1').classList.add("appear")
            }
            if (logo.getAttribute('id') == "artbox2") {
                document.querySelector('#box2').classList.add("appear")
            }
            if (logo.getAttribute('id') == "artbox3") {
                document.querySelector('#box3').classList.add("appear")
            }

            if (logo.getAttribute('id') == "artbox4") {
                document.querySelector('#box4').classList.add("appear")
            }
            else {
                artb.classList.remove('appear');
            }
        })
    })
})


closeArt.forEach(closeX => {
    closeX.addEventListener('click', () => {
        artBox.forEach(artb => {
            artb.classList.remove('appear');
        })
    })
})