
let text_content=document.querySelectorAll('.txt-container h4');
let text_container=document.querySelector(".txt-container");



function text_change()
{
   text_content.forEach((text)=>{text.classList.toggle("is_visible")});
   setInterval(()=>{text_content.forEach((text)=>{text.classList.toggle("is_visible")});
   }
   ,2000);
}

setTimeout(()=>{text_change()},3000)
