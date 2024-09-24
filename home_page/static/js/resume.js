
var resume_card_container = document.querySelectorAll('.card-container')

const first_resume_card = document.querySelectorAll('.card-container .card:first-child ');

const last_resume_card = document.querySelectorAll('.card-container .card:last-child');

let resume_card_width = resume_card_container[0].offsetWidth+15;


window.addEventListener('resize',()=>{
    // window.location.reload(true);
    // $('#resume').load(window.location.href + "#resume");
    resume_card_width=resume_card_container[0].offsetWidth;
    

  
});


resume_card_container.forEach(e=>{
    e.classList.add('no-transition');
    e.scrollLeft=resume_card_width;
    e.classList.remove('no-transition');
});



let i=0;

for(i;i<2;i++)
{
 
    let first_clone_node = first_resume_card[i].cloneNode(true);
    let last_clone_node = last_resume_card[i].cloneNode(true);

    resume_card_container[i].insertAdjacentElement('afterbegin',last_clone_node);
    resume_card_container[i].insertAdjacentElement('beforeend',first_clone_node);

}

let isdragging=false,start_X;

function dragstart(e)
{
   
   isdragging=true;
   start_X=e.pageX;
   clearInterval(autoplay_interval);
}



function dragstop(e)
{
  
    if(isdragging)
        {
         if(((e.pageX - start_X)+this.scrollLeft) > this.scrollLeft)
         {
             
             this.scrollLeft-=resume_card_width;
             isdragging=false;
             autoplay_interval=setInterval(autoplay,2000);

         
         }
         else 
         {
             this.scrollLeft+=resume_card_width;
             isdragging=false;
             autoplay_interval=setInterval(autoplay,2000);
          
         }
     
        }
     
        else
        {
          return;
        }
   
}


resume_card_container.forEach(e=>
{
    e.addEventListener('mousedown',dragstart);
    // e.addEventListener('mousemove',dragging);
    e.addEventListener('mouseup',dragstop);
})



function infinite_slider()
{
    if(this.scrollLeft == 0)
    {
        
        this.classList.add('no-transition');
        this.scrollLeft=Math.round(this.scrollWidth-2*(this.offsetWidth+15));
        this.classList.remove('no-transition');


    }

    else if (this.scrollWidth == Math.round(this.scrollLeft+this.offsetWidth)+1 || this.scrollWidth == Math.round(this.scrollLeft+this.offsetWidth) )
    {
        this.classList.add('no-transition');
        this.scrollLeft=this.offsetWidth+15;
        this.classList.remove('no-transition');
        
    }
   
}

resume_card_container.forEach(e=>{
      e.addEventListener('scroll',infinite_slider);
})


let autoplay_interval=setInterval(autoplay,2000);

function autoplay()
{
    resume_card_container.forEach(e=>{e.scrollLeft+=resume_card_width;});
}


const fact_content = document.querySelector('.resume-skills');
const fact_card_1=document.querySelector('.fact-h2-1');
const fact_card_2=document.querySelector('.fact-h2-2');
const fact_card_3=document.querySelector('.fact-h2-3');
const fact_card_4=document.querySelector('.fact-h2-4');



function number_counter()
{
    let fact_card_1_start=0,fact_card_2_start=0,fact_card_3_start=0,fact_card_4_start=0;
    
    
    if(fact_content.getBoundingClientRect().top <= window_height)
    {
       fact_card_1_counter=setInterval(()=>{fact_card_1_start=fact_card_1_start+1;fact_card_1.innerText=fact_card_1_start;if(fact_card_1_start == 1245){clearInterval(fact_card_1_counter)}},10);
       fact_card_2_counter=setInterval(()=>{fact_card_2_start=fact_card_2_start+1;fact_card_2.innerText=fact_card_2_start;if(fact_card_2_start == 249){
        clearInterval(fact_card_2_counter);}},10);
       fact_card_3_counter=setInterval(()=>{fact_card_3_start=fact_card_3_start+1;fact_card_3.innerText=fact_card_3_start;if(fact_card_3_start == 1245){clearInterval(fact_card_3_counter)}},10);
       fact_card_4_counter=setInterval(()=>{fact_card_4_start=fact_card_4_start+5;fact_card_4.innerText=fact_card_4_start;if(fact_card_4_start == 6025){clearInterval(fact_card_4_counter)}},10);
       remove_counter();
    }
}


window.addEventListener('scroll',number_counter);

function remove_counter()
{
    
    window.removeEventListener('scroll',number_counter);
}