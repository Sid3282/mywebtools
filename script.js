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
            const scrollAmount = 200;
            
            navNext.addEventListener('click', function() {
                nav.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
            
            navPrev.addEventListener('click', function() {
                nav.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
    }
    
    // Language toggle functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    if (langButtons.length > 0) {
        langButtons.forEach(button => {
            button.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                const container = this.closest('.tool-container') || this.closest('.tool-description');
                
                // Update active button
                document.querySelectorAll('.lang-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                
                // Show/hide content
                const contents = container.querySelectorAll('.description-content');
                contents.forEach(content => {
                    content.classList.remove('active');
                    if (content.classList.contains(lang)) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }
    
    // Schema markup for SEO
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Nepali Tools",
        "url": "https://partex.com.np/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://partex.com.np/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    });
    document.head.appendChild(schemaScript);
});