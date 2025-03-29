<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        // Navigation scroll functionality
        const nav = document.querySelector('nav');
        const navContainer = document.querySelector('.nav-container');
        const navUl = document.querySelector('nav ul');
        const navItems = document.querySelectorAll('nav li');
        const navPrev = document.querySelector('.nav-prev');
        const navNext = document.querySelector('.nav-next');
        
        if (nav && navContainer && navUl && navItems.length > 0) {
            // Calculate total width needed for all nav items
            let totalWidth = 0;
            navItems.forEach(item => {
                totalWidth += item.offsetWidth + 10; // Include margin
            });
            
            // Add scroll buttons if content overflows
            function checkNavOverflow() {
                if (navUl.scrollWidth > nav.offsetWidth) {
                    document.querySelector('.nav-controls').style.display = 'flex';
                } else {
                    document.querySelector('.nav-controls').style.display = 'none';
                }
            }
            
            // Initialize check
            checkNavOverflow();
            window.addEventListener('resize', checkNavOverflow);
            
            // Scroll navigation
            if (navPrev && navNext) {
                const scrollAmount = 200; // Adjust as needed
                
                navNext.addEventListener('click', function() {
                    nav.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                });
                
                navPrev.addEventListener('click', function() {
                    nav.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                });
            }
        }
    });
</script>