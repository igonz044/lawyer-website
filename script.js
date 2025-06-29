// This is a placeholder for your custom scripts. 

document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion-btn");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Handle dropdown menus on mobile
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        
        dropbtn.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Close mobile menu when window is resized to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}); 