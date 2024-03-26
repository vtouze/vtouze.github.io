/**
 * Place correct dimensions
 * @param {Element} slider 
 * @param {Number} ratio eg. 16 / 9
 */
function setDimensions(slider, ratio) {

    const newHeight = slider.offsetWidth / ratio;

    slider.style.height = `${newHeight}px`;
}


function updateSlidersHeight() {
    const sliders = document.getElementsByClassName("slider");
    if (sliders.length === 0) {
        return;
    }

    for (let i = 0; i < sliders.length; i++) {
        setDimensions(sliders[i], 16 / 9);
    }
}

let refreshInterval = null;



window.addEventListener("resize", () => {
    updateSlidersHeight();
    reloadSlider();
})

window.addEventListener("load", () => {

    updateSlidersHeight();

    let slider = document.querySelector('.slider .slider-list');
    let items = document.querySelectorAll('.slider .slider-list .slider-item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.slider .dots li');

    let lengthItems = items.length - 1;
    let active = 0;
    next.onclick = function() {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }
    prev.onclick = function() {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    }

    refreshInterval = setInterval(() => {
        next.click()
    }, 6000);


    function reloadSlider() {

    
        slider.style.left = -items[active].offsetLeft + 'px';
        let last_active_dot = document.querySelector('.slider .dots li.active');
        last_active_dot.classList.remove('active');
        dots[active].classList.add('active');
    
        if (refreshInterval !== null) {
            clearInterval(refreshInterval);
        }
        refreshInterval = setInterval(() => {
            next.click()
        }, 6 * 1000);   
    }




    dots.forEach((li, key) => {
        li.addEventListener('click', ()=>{
            active = key;
            reloadSlider();
        })
    })
});