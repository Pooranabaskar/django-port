const girls_slider = document.querySelector('.testimonials-content .wrapper .slider');

const first_girl_card = girls_slider.children[0];
const last_girl_card = girls_slider.children[2];

let girl_index=0;
const first_clone_girl_card = first_girl_card.cloneNode(true);
const last_clone_girl_card = last_girl_card.cloneNode(true);

let prev_girl_index=0;

girls_slider.appendChild(first_clone_girl_card);
girls_slider.insertBefore(last_clone_girl_card,first_girl_card);

const slider_indicator=[...document.querySelectorAll('.slider-indicator span')];
// console.log(slider_indicator.length);
let start_girl_X=0,is_dragging=false;



function girl_dragstart(e)
{
    start_girl_X=e.pageX;
    is_dragging=true;
    clearInterval(girl_autoplay);

}

let translate_value=100;

function girl_dragstop(e)
{
    if(is_dragging)
    {
     
       if(start_girl_X>e.pageX)
       {
          translate_value+=100;
          if(translate_value == 400)
          {
            this.style.translate=`-${translate_value}% 0%`;

            setTimeout(()=>{
                    this.style.transition="all 0s ease-in-out";
                    this.style.translate="-100% 0%";
                    setTimeout(()=>{this.style.transition='all 0.5s ease-in-out'},50);
                    translate_value=100;
                    slider_indicator[girl_index].classList.remove('show');
                    girl_index=0;
                    slider_indicator[girl_index].classList.add('show');
            },500);
          }

          else
          {

          
          this.style.translate=`-${translate_value}% 0%`;
    
          slider_indicator[girl_index].classList.remove('show');
          girl_index+=1;
          slider_indicator[girl_index].classList.add('show');
          }
          is_dragging=false;
       }
       else
       {
        translate_value-=100;
        if(translate_value == 0)
        {
            this.style.translate=`-${translate_value}% 0%`;
            
            setTimeout(()=>{
                this.style.transition='all 0s ease-in-out';
                this.style.translate='-300% 0%';
                translate_value=300;
              try
              {
                slider_indicator[girl_index].classList.remove('show');
                girl_index=2;
                slider_indicator[girl_index].classList.add('show');
              }

              catch(err)
              {
                console.log(girl_index);
              }
                setTimeout(()=>{ this.style.transition='all 0.5s ease-in-out';},50);
            },500);
        }
        else
        {
         this.style.translate=`-${translate_value}% 0%`;
         slider_indicator[girl_index].classList.remove('show');
        if(girl_index != 0)
       {   
         girl_index-=1;
       }
        try
        {
         
         slider_indicator[girl_index].classList.add('show');
        }
         catch(err)
         {
            console.log(girl_index);
         }

        }
        is_dragging=false;
       }
      
    }

    else
    {
        return 0;
    }

    girl_autoplay=setInterval(girl_card_play,2000);
}



girls_slider.addEventListener('mousedown',girl_dragstart);
girls_slider.addEventListener('mouseup',girl_dragstop);



let girl_autoplay = setInterval(girl_card_play,2000); 

 function girl_card_play()
 {
    translate_value+=100;
    if(translate_value == 400)
        {
          girls_slider.style.translate=`-${translate_value}% 0%`;

          setTimeout(()=>{
                  girls_slider.style.transition="all 0s ease-in-out";
                  girls_slider.style.translate="-100% 0%";
                  setTimeout(()=>{girls_slider.style.transition='all 0.5s ease-in-out'},50);
                  translate_value=100;
                  slider_indicator[girl_index].classList.remove('show');
                  girl_index=0;
                  slider_indicator[girl_index].classList.add('show');
          },500);
        }

        else
        {

        
        girls_slider.style.translate=`-${translate_value}% 0%`;
  
        slider_indicator[girl_index].classList.remove('show');
        girl_index+=1;
        slider_indicator[girl_index].classList.add('show');
        }


 }