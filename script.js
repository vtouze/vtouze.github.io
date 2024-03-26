
/* Up Arrow */

const goTopBtn = document.querySelector('.go-top-btn');
window.addEventListener('scroll', checkHeight)

function checkHeight() {

    if (window.scrollY > 1000) {
        goTopBtn.style.display = 'flex';
    } else {
        goTopBtn.style.display = 'none';
    }
}

goTopBtn.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'})
});

/* Parralax */

document.addEventListener('mousemove', parallax);

function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed);
        const y = (window.innerHeight - e.pageY * speed);

        // layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}


const burgerButton = document.getElementById("menu-icon");
let showMobileMenu = false;

burgerButton.onclick = (e) => {
    e.preventDefault();

    showMobileMenu = !showMobileMenu;
    
    const mobileNavbar = document.getElementById("mobile-navbar");
    if (!mobileNavbar) {
        return;
    }

    if (showMobileMenu) {
        mobileNavbar.classList.add("mobile-navbar-show");
        burgerButton.children.item(0).classList.remove( "fa-bars");
        burgerButton.children.item(0).classList.add("fa-times");
    } else {
        mobileNavbar.classList.remove("mobile-navbar-show");
        burgerButton.children.item(0).classList.remove("fa-times");
        burgerButton.children.item(0).classList.add("fa-bars");
    }

}

/**
 * Returns the id you should activate
 * @param {String} path Uri (eg. /school/depth_scape.html)
 */
function highlightMobileNavLink(path) {

    if (path.startsWith("/school/")) {
        return "link-school";
    } else if (path === "/" || path === "/index.html") {
        return "link-home";
    } else if (path === "/about.html") {
        return "link-about";
    } else if (path.startsWith("/perso/")) {
        return "link-perso";
    } else if (path.startsWith("/professional/")) {
        return "link-pro";
    } else if (path === "/misc/EnglishResume.pdf") {
        return "link-resume";
    }
}

/**
 * Returns the id you should activate
 * @param {String} path Uri (eg. /school/depth_scape.html)
 */
function highlightDesktopNavLink(path) {

    if (path.startsWith("/school/")) {
        return "link-desktop-school";
    } else if (path === "/" || path === "/index.html") {
        return "link-desktop-home";
    } else if (path === "/about.html") {
        return "link-desktop-about";
    } else if (path.startsWith("/perso/")) {
        return "link-desktop-perso";
    } else if (path.startsWith("/professional/")) {
        return "link-desktop-pro";
    } else if (path === "/misc/EnglishResume.pdf") {
        return "link-desktop-resume";
    }
}

/* Animations */

window.onload = () => {

    const body = document.getElementsByTagName("body");
    if (body.length === 0) {
        return;
    }
    importHTMLCompnent("/components/mobile_navbar_links.html", body.item(0)).then(() => {
        const idToHighlight = highlightMobileNavLink(window.location.pathname);

        const elemToHighlight = document.getElementById(idToHighlight);
        if (elemToHighlight) {
            elemToHighlight.classList.add("active");
        }
    });


    const navbar = document.getElementsByTagName("nav")

    importHTMLCompnent("/components/desktop_navbar_links.html", navbar.item(0)).then(() => {
        const idToHighlight = highlightDesktopNavLink(window.location.pathname);

        const elemToHighlight = document.getElementById(idToHighlight);
        if (elemToHighlight) {
            elemToHighlight.classList.add("active");
        }
    });

    


    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a')

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);

    for (let i = 0; i < anchors.length; i++){
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = anchor.href;

            transition_el.classList.add("is-active");

            setTimeout(() => {

                if (anchor.target == "_blank"){
                    window.open(target);
                    transition_el.classList.remove('is-active');
                } else {
                    window.location.href = target;
                }
            }, 500);
        });
    }
}