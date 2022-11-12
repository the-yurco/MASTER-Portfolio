// tu budem pracovat jednoducho len s classami , ideckami a elementami co su v SERVICES sekcii

let TopSlider = document.querySelector('#top_slider');
let TopSlider2 = document.querySelector('#top_slider2');
let BottomSlider = document.querySelector('#bottom_slider');

let service_Section = document.querySelector('.servicesSection');
let h4 = document.querySelector('h4');
let h4_first_text = document.querySelector('#first_text_container');

// let h2_text = document.querySelector('.text_h2');
const h2_text = document.querySelector('.text_h2'), ease = 0.05 , start_position = h2_text.offsetTop;

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;

    if(scrollValue > 600){
        service_Section.style.backgroundColor = 'white';
        h2_text.classList.remove('text_h2')
        h2_text.classList.add('fixed');

        if(scrollValue < 850){
            service_Section.style.backgroundColor = '#0d1b36';
            h2_text.classList.remove('fixed');
            h2_text.classList.add('text_h2');
        }
    }

    if(scrollValue > 650){
        h4_first_text.style.color = 'green';
        h4_first_text.style.display = 'block';
        h4_first_text.style.position = 'fixed';
    }

    console.log(scrollValue);

});

