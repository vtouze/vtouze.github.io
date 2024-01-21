/* Up Arrow */

const goTopBtn = document.querySelector('.go-top-btn');
window.addEventListener('scroll', checkHeight)

function checkHeight()
{
    if(window.scrollY > 1000)
    {
        goTopBtn.style.display = 'flex'
    }
    else
    {
        goTopBtn.style.display = 'none'
    }
}

goTopBtn.addEventListener('click', () => {window.scrollTo({top:0, behavior:'smooth'})})

/* Parralax */

document.addEventListener('mousemove', parallax);
function parallax(e)
{
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)
        const y = (window.innerHeight - e.pageY*speed)

        layer.style.transform = 'translateX(${x}px) translateY(${y}px)';
    });
}

/* Animations */

window.onload = () => {
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
                console.log(e);
                if(anchor.target == "_blank"){
                    window.open(target);
                    transition_el.classList.remove('is-active');
                } else {
                    window.location.href = target;
                }
            }, 500);
        });
    }
}