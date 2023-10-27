const details = document.querySelector('.details');
const summary = document.querySelector('.details_summary');
const dropdown = document.querySelector('.details_dropdown');

summary.addEventListener('click', event=>
    {
        if(details.hasAttribute('open'))
        {
            event.preventDefault();
            dropdown.classList.add('details_anim_close');
        }
        else
        {
            dropdown.classList.add('details_anim_open');
        }
    }
) 

dropdown.addEventListener('animationend', ()=>
    {
        if (dropdown.classList.contains('details_anim_close'))
        {
            dropdown.classList.remove('details_anim_close');
            details.removeAttribute('open');
        }
        else
        {
            dropdown.classList.remove('details_anim_open');
        }
    }
)
