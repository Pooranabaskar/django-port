
 import {wrapGrid}from "../node_modules/animate-css-grid/dist/main.module.js"

const gallery_links = document.querySelectorAll('.gallery-links button');
let prev_link = gallery_links[0];

const griditems = document.querySelector('.gallery-items');
console.log(griditems);
// wrapGrid(griditems, {duration : 600});
animateCSSGrid.wrapGrid(griditems,{duration:1000})

function animate_links()
{
    prev_link.classList.remove('btn-focus');
    this.classList.add('btn-focus');
    prev_link=this;
}


gallery_links.forEach(link=>{link.addEventListener('focus',animate_links);
    link.addEventListener('click',animate_cards);
});


const all_items = document.querySelectorAll('.item');
const Designing_items = [...document.querySelectorAll('.Designing')];
const Website_items = [...document.querySelectorAll('.Websites')];
const Graphic_items = [...document.querySelectorAll('.Graphic')];




function animate_cards(e)

{

    if(this.value == 'All')
    {
        all_items.forEach(itemm=>{itemm.classList.add('visible')});
    }
    else if(this.value == 'Designing')
    {
        let remove_items=Website_items.concat(Graphic_items);
        
        remove_items.forEach(item=>{item.classList.remove('visible')});

        Designing_items.forEach(itemm=>{itemm.classList.add('visible')});
    }


    else if(this.value == 'Websites')
    {
        let remove_items=Designing_items.concat(Graphic_items);
        remove_items.forEach(item=>{item.classList.remove('visible')});
        Website_items.forEach(itemm=>{itemm.classList.add('visible')});
    }

    else if(this.value == 'Graphic')
    {
        let remove_items=Designing_items.concat(Website_items);
        remove_items.forEach(item=>{item.classList.remove('visible')});
        Graphic_items.forEach(itemm=>{itemm.classList.add('visible')});
    }
}