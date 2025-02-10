document.addEventListener('DOMContentLoaded', function() {

    const menuLinks = document.querySelectorAll('.header-menu-link');


    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();


            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});