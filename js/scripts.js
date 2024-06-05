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
    
    
    const darkmode=document.querySelector('.darkmode');
    
    // Function to update the mode and save it to local storage
    function updateMode(isDarkMode) {
        const toggled=document.body.classList.toggle('dark-mode', isDarkMode);
        const Change=toggled?darkmode.innerHTML='LIGHT <i class="fa fa-lightbulb"></i>':darkmode.innerHTML='DARK <i class="fa fa-moon"></i>';
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    }

    // Event listener for dark mode toggle
    darkmode.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        updateMode(isDarkMode);
    });
    
    // On page load, apply the saved mode
    window.addEventListener('load', () => {
        const savedMode = localStorage.getItem('darkMode');
        const isDarkMode = savedMode === 'enabled';
        updateMode(isDarkMode);
    });
});


