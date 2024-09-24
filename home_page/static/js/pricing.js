const pricing_content = document.querySelector('.pricing-content');


window.addEventListener('scroll',reveal_pricing);


function reveal_pricing()
{
    if(pricing_content.getBoundingClientRect().top <= window_height)
    {
        pricing_content.classList.add('reveal');
        remove_reveal_prizing();
    }
}

function remove_reveal_prizing()
{
    window.removeEventListener('scroll',reveal_pricing);
}