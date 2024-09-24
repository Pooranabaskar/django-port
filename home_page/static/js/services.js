const service_card= document.querySelector('.services-content');
let window_height = window.innerHeight;
window.addEventListener('scroll',animate_cards);

function animate_cards()
{
    if(service_card.getBoundingClientRect().top <= window_height)
    {
        service_card.classList.add('service-card-active');

    }

    else if(service_card.classList[1] == 'service-card-active')
    {
        remove_animate_cards();
    }

    

}


function remove_animate_cards()
{
    window.removeEventListener('scroll',animate_cards);

}
      


