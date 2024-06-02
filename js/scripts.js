window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
            navbarCollapsible.classList.remove('bg-primary')

        } else {
            navbarCollapsible.classList.add('navbar-shrink');
            navbarCollapsible.classList.add('bg-primary')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }

        });
    });
    navbarToggler.addEventListener('click',()=>{
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (window.scrollY === 0) {
            navbarCollapsible.classList.toggle('bg-primary')

        } else {
            navbarCollapsible.classList.add('bg-primary')
        }

    });

});

let currentIndex = 0;
const services = document.querySelectorAll('.service');
const prevBtn = document.getElementById('left');
const nextBtn = document.getElementById('right');

prevBtn.addEventListener('click', () => {
    showService(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showService(currentIndex + 1);
});

function showService(index) {
    services[currentIndex].classList.remove('active');
    services[currentIndex].classList.remove('next');
    let nextIndex = (index + 1 + services.length) % services.length;
    currentIndex = (index + services.length) % services.length;
    services.forEach(service => {
        service.classList.remove('active');
        service.classList.remove('next');
    });
    services[currentIndex].classList.add('active');
    services[nextIndex].classList.add('next');
}

const darkmode=document.querySelector('.darkmode');

darkmode.addEventListener('click',()=>{
    const toggled=document.body.classList.toggle('dark-mode');
    const Change=toggled?darkmode.innerHTML='<i class="fa fa-sun"></i>':darkmode.innerHTML='<i class="fa fa-moon"></i>';
    
});