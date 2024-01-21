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
    this.querySelectorAll('.layer').forEach(Layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)
        const y = (window.innerHeight - e.pageY*speed)

        layer.style.transform = 'translateX(${x}px) translateY(${y}px)'
    });
}