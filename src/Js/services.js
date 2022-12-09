// tu budem pracovat jednoducho len s classami , ideckami a elementami co su v SERVICES sekcii

let service_Section = document.querySelector('.servicesSection');

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;

    if(scrollValue > 750){
        service_Section.style.backgroundColor = 'white';
    }
    else if(scrollValue < 850){
        service_Section.style.backgroundColor = '#0d1b36';
    }
});

// animation for scroll up/down

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');


hiddenElements.forEach((el) => observer.observe(el));