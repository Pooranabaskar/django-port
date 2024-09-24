
const team_member_content = document.querySelector('.team-members-content');
window_height=window_height-100;

window.addEventListener('scroll',team_member_reveal);

function team_member_reveal()
{
    if(team_member_content.getBoundingClientRect().top <= window_height )
    {
         team_member_content.classList.add('reveal');

         remove_reveal();
    }
}


function remove_reveal()
{
    
    window.removeEventListener('scroll',team_member_reveal);
}