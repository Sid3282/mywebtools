:root {
    --primary: #4e54c8;
    --secondary: #8f94fb;
    --accent: #ff7e5f;
    --light: #f8f9fa;
    --dark: #343a40;
    --darker: #212529;
    --gray: #6c757d;
    --light-gray: #e9ecef;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --white: #ffffff;
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: var(--dark);
    line-height: 1.6;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    color: var(--primary);
    margin-bottom: 15px;
    font-weight: 600;
}

h1 {
    font-size: 2.5rem;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
    font-size: 2rem;
}

h3 {
    font-size: 1.5rem;
}

h4 {
    font-size: 1.2rem;
    color: var(--darker);
}

p {
    margin-bottom: 15px;
    color: var(--darker);
}

a {
    color: var(--primary);
    text-decoration: none;
    transition: var(--transition);
}

a:hover {
    color: var(--secondary);
    text-decoration: underline;
}

/* Header & Navigation */
header {
    text-align: center;
    margin-bottom: 30px;
    animation: fadeInDown 1s ease;
}

header p {
    font-size: 1.1rem;
    color: var(--dark);
    opacity: 0.8;
}

nav {
    background: var(--white);
    border-radius: 10px;
    box-shadow: var(--shadow);
    margin-bottom: 30px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
}

nav::-webkit-scrollbar {
    display: none;
}

.nav-container {
    display: inline-flex;
    padding: 10px 0;
    white-space: nowrap;
    transition: transform 0.3s ease;
}

nav ul {
    display: flex;
    list-style: none;
    flex-wrap: nowrap;
    padding: 0 15px;
}

nav li {
    margin: 0 5px;
}

nav a {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    color: var(--dark);
    font-weight: 500;
    border-radius: 8px;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

nav a:hover, nav a.active {
    background: linear-gradient(to right, var(--primary), var(--secondary));
    color: var(--white);
    text-decoration: none;
}

nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--primary);
    transform: scaleX(0);
    transform-origin: right;
    transition: var(--transition);
}

nav a:hover::after, nav a.active::after {
    transform: scaleX(1);
    transform-origin: left;
}

.nav-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    transition: filter 0.3s ease;
}

nav a.active .nav-icon, nav a:hover .nav-icon {
    filter: brightness(0) invert(1);
}

.nav-controls {
    display: none;
    justify-content: space-between;
    margin-bottom: 10px;
}

.nav-btn {
    background: var(--primary);
    color: var(--white);
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    transition: var(--transition);
}

.nav-btn:hover {
    background: var(--secondary);
}

/* Weather Info Container */
.weather-info-container {
    margin-bottom: 30px;
}

.language-toggle {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

.lang-btn {
    padding: 8px 20px;
    border: none;
    border-radius: 20px;
    background: var(--light-gray);
    color: var(--dark);
    cursor: pointer;
    transition: var(--transition);
    font-weight: 500;
}

.lang-btn.active {
    background: linear-gradient(to right, var(--primary), var(--secondary));
    color: var(--white);
}

/* Weather Info Sections */
.weather-info {
    background: var(--white);
    border-radius: 10px;
    box-shadow: var(--shadow);
    padding: 25px;
}

.info-section {
    display: none;
}

.info-section.active {
    display: block;
    animation: fadeIn 0.5s ease;
}

.info-section h3 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.info-section h3 i {
    color: var(--accent);
}

.weather-season {
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px dashed var(--light-gray);
}

.weather-season:last-child {
    border-bottom: none;
}

.weather-season h4 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.weather-season h4 i {
    color: var(--accent);
}

.info-section ul {
    margin-left: 20px;
    margin-bottom: 15px;
}

.info-section ul li {
    margin-bottom: 8px;
}

.info-section.ne {
    font-family: 'Poppins', sans-serif;
    direction: ltr;
    unicode-bidi: embed;
}

/* Tool Containers */
.tool-container {
    background: var(--white);
    border-radius: 15px;
    box-shadow: var(--shadow);
    padding: 30px;
    margin-bottom: 30px;
    transition: transform 0.3s ease;
}

.tool-container:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.tool-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--light-gray);
}

.tool-header-icon {
    width: 32px;
    height: 32px;
    margin-right: 15px;
}

.widget {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
}

/* Advertisement */
.ad-container {
    width: 100%;
    margin: 30px 0;
    text-align: center;
    background: var(--white);
    padding: 20px;
    border-radius: 10px;
    box-shadow: var(--shadow);
}

.ad-container h3 {
    margin-bottom: 15px;
    color: var(--dark);
    opacity: 0.7;
}

.ad-placeholder {
    background: linear-gradient(to right, #f5f7fa, #e4e8f0);
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: var(--dark);
    font-weight: 500;
    margin: 0 auto;
    max-width: 728px;
}

.ad-placeholder.large {
    height: 250px;
    max-width: 970px;
}

/* Breadcrumbs */
.breadcrumbs {
    padding: 10px 0;
    margin-bottom: 20px;
    font-size: 0.9rem;
}

.breadcrumbs a {
    color: var(--primary);
}

.breadcrumbs span {
    color: var(--dark);
    opacity: 0.7;
}

/* Contact & Footer */
.contact-info {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.contact-info a {
    color: var(--dark);
    font-size: 1.5rem;
    transition: var(--transition);
}

.contact-info a:hover {
    color: var(--primary);
    text-decoration: none;
}

footer {
    text-align: center;
    margin-top: auto;
    padding: 20px;
    color: var(--dark);
    opacity: 0.7;
    font-size: 0.9rem;
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Styles */
@media (max-width: 992px) {
    .container {
        padding: 15px;
    }
    
    h1 {
        font-size: 2.2rem;
    }
    
    h2 {
        font-size: 1.8rem;
    }
}

@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }
    
    .nav-controls {
        display: flex;
    }
    
    nav ul {
        padding: 0 5px;
    }
    
    nav a {
        padding: 8px 12px;
        font-size: 0.9rem;
    }
    
    .nav-icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
    
    .contact-info {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    
    .ad-placeholder.large {
        height: 180px;
    }
    
    .tool-container, .weather-info {
        padding: 20px;
    }
}

@media (max-width: 576px) {
    h1 {
        font-size: 1.8rem;
    }
    
    h2 {
        font-size: 1.5rem;
    }
    
    nav a {
        padding: 8px 10px;
    }
    
    .nav-icon {
        display: none;
    }
    
    .lang-btn {
        padding: 6px 15px;
        font-size: 0.9rem;
    }
}
