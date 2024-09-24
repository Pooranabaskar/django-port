
const header_links = document.querySelectorAll('.header nav ul li a');
var prev_header_link=true;
header_links.forEach((link)=>
              {    
                    link.addEventListener('click',()=>{

                    if(window.innerWidth <= 1000)
                            {
                                
                                navigation_bar.classList.toggle('nav_open');
                            }    

                  else
                  {

                  
                    
                    if(prev_header_link == true)
                    {
                        header_links[0].style.color='white';
                        link.style.color='rgb(245, 94, 97)'; 
                        prev_header_link=link;
                    }

                   

                   

                    else
                    {

                    prev_header_link.style.color='white';           
                    link.style.color='rgb(245, 94, 97)'; 
                    prev_header_link=link;
                
                    }
                }
                }
                                                     
                )
              }
              
)

let navigation_bar = document.querySelector(".header nav")
let menu=document.querySelector(".menu-icon")
menu.addEventListener('click',()=>{navigation_bar.classList.toggle('nav_open');});