<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<!-- NOTE : 
    - Caroussel pour les entreprises et les membres de la team
    
    - Background de gris entre les section pour aider à les differencier
    - Change the font for the "Beyond the audit"
    - image à gauche puis text à droite, si image
    
 -->
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Beyond Audit - Professional Security Auditing Services" />
    <meta name="author" content="Beyond Audit" />
    <title>Beyond Audit - Security Reviews & Auditing</title>
    <link rel="icon" type="image/x-icon" href="assets/img/Fav.png" />
    <!-- Font Awesome icons -->
    <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
    <link href="https://fonts.cdnfonts.com/css/soviet-program" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet" />
    <!-- Custom CSS -->
    <link href="css/custom.css" rel="stylesheet" />
</head>
<body id="page-top">
    <!-- Masthead-->
    <!-- Add this right after your body tag -->
    <div class="floating-images" id="floatingImages"></div>
    <header class="masthead">
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <img src="assets/img/Beyondlogo.png" alt="Beyond Logo" class="hero-logo">
                <p class="hero-text"></p>
                <a href="#contact" class="btn-primary">Request a security review</a>
            </div>
        </section>
    </header>
    
<style>
/* Base & Layout */
:root {
    --bg-antra: #0a0a0f;
    --bg-card: rgba(255, 255, 255, 0.05);
    --text-white: #ffffff;
    --text-gray: rgba(156, 163, 175, 0.9);
    --primary: rgb(147, 51, 234);
    --bug: rgb(173, 4, 4);
    --success: #10b981;
    --warning: #eab308;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: var(--bg-antra);
    color: var(--text-white);
    line-height: 1.6;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.015em;
}
/* Update card typography */
.card-title {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    letter-spacing: -0.02em;
}
.card-description {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.011em;
}
/* Update team typography */
.team-name {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    letter-spacing: -0.02em;
}
.team-role {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    letter-spacing: -0.011em;
}
/* Update performance numbers */
.card-value {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600; /* Increase to get more bold */
    letter-spacing: -0.03em;
}
.card-label {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    letter-spacing: -0.011em;
}
    
.container {
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
}
/* Sections */
.section {
    padding: 4rem 0;
    background-color: rgba(255, 255, 255, 0.02) !important;
    overflow: hidden; /* Prevent horizontal scroll */
}

.section:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.02) !important;
}
    
.section-title {
    font-family: 'Soviet Program', sans-serif;
    font-style: italic;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: linear-gradient(
        to right,
        rgb(147, 51, 234) 0%,
        rgb(192, 132, 252) 100%,
        /*rgb(147, 51, 234) 100% */
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: shine 5s linear infinite;
}
@keyframes shine {
    0% {
        background-position: 0% center;
    }
    50% {
        background-position: 100% center;
    }
    100% {
        background-position: 0% center;
    }
}
    
@keyframes slideSeparator {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
    
.section:not(:first-of-type)::before,
.section::after,
.footer::before {
    display: none;
}
/* Keep only the animated separator */
.section-separator {
    width: 100%;
    height: 1px;
    margin: 0;
    padding: 0;
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(147, 51, 234, 0.2) 25%,
        rgba(147, 51, 234, 0.5) 50%,
        rgba(147, 51, 234, 0.2) 75%,
        transparent 100%
    );
    background-size: 200% 100%;
    animation: slideSeparator 5s linear infinite;
}
/* Grids */
.grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
}
@media (min-width: 768px) {
    .grid-4 {
        grid-template-columns: repeat(4, 1fr);
    }
    
    .grid-3 {
        grid-template-columns: repeat(3, 1fr);
    }
}
/* Cards */
.card {
    background-color: var(--bg-card);
    padding: 2rem;
    border-radius: 0.5rem;
    text-align: center;
    transition: transform 0.3s ease;
}
.card:hover {
    transform: translateY(-5px);
}
.card-icon {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}
.card-icon i {
    font-size: 2rem;
}
.card-value {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
}
.card-label {
    color: var(--text-gray);
    font-size: 1.1rem;
}
.card-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-white);
}
.card-description {
    color: var(--text-gray);
    line-height: 1.5;
}
/* Icons */
.icon-shield { color: var(--primary); }
.icon-activity { color: var(--success); }
.icon-alert { color: var(--warning); }
/* Expertise Section */
.expertise-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
}
@media (min-width: 768px) {
    .expertise-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
.expertise-logo {
    width: 80px;
    height: 80px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.expertise-card {
    background-color: var(--bg-card);
    padding: 2rem;
    border-radius: 0.5rem;
    text-align: center;
    transition: transform 0.3s ease;
}
.expertise-card:hover {
    transform: translateY(-5px);
}
.expertise-name {
    color: var(--text-white);
    font-weight: 600;
}
    
/* Contact Section */
.social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
}
.social-links a {
    color: var(--text-white);
    text-decoration: none;
    font-size: 1.5rem;
    transition: color 0.3s;
}
.social-links a:hover {
    color: var(--primary);
}
/* Footer */
.footer {
    padding: 2rem 0;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.02) !important;
    position: relative;
}
.footer .container {
    opacity: 0.5;
}
/* Responsive */
@media (max-width: 768px) {

    .hero-logo {
        max-width: 400px;
        width: 90%;
    }
    .expertise-grid,
    .grid {
        grid-template-columns: 1fr;
    }
}
  
.expertise-logo {
    width: 60px;
    height: 60px;
    color: var(--text-white);
    margin: 0 auto;
}
.card .expertise-logo {
    margin-bottom: 1.5rem;
}
.card:hover .expertise-logo {
    color: var(--primary);
    transition: color 0.3s ease;
}
  
/* Contact Section Styles */
.contact-section {
    padding: 5rem 0;
}
.social {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
}
.social a {
    width: 3.5rem;
    height: 3.5rem;
    background: rgba(255, 255, 255, 0.02) !important;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.5) !important;
    font-size: 1.5rem;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid transparent;
}
.social a:hover {
    color: var(--primary);
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    border-color: var(--primary);
    box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
}
.social a:active {
    transform: translateY(0);
}
/* Add subtle animations for icons */
.social a i {
    transition: transform 0.3s ease;
}
.social a:hover i {
    transform: scale(1.1);
}
/* Custom colors for different platforms */
.social a:nth-child(1):hover { /* Email */
    color: #ea4335;
    border-color: #ea4335;
    box-shadow: 0 5px 15px rgba(234, 67, 53, 0.2);
}
.social a:nth-child(2):hover { /* Twitter */
    color: #1da1f2;
    border-color: #1da1f2;
    box-shadow: 0 5px 15px rgba(29, 161, 242, 0.2);
}
.social a:nth-child(3):hover { /* Discord */
    color: #7289da;
    border-color: #7289da;
    box-shadow: 0 5px 15px rgba(114, 137, 218, 0.2);
}
.social a:nth-child(4):hover { /* Telegram */
    color: #0088cc;
    border-color: #0088cc;
    box-shadow: 0 5px 15px rgba(0, 136, 204, 0.2);
}
/* Responsive adjustments */
@media (max-width: 768px) {
    .social {
        gap: 1rem;
    }
    .social a {
        width: 3rem;
        height: 3rem;
        font-size: 1.25rem;
    }
}
  
/* Team Section Styles */
.team-section {
    padding: 5rem 0;
}
.team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}
/* Center the last two items */
.team-grid .team-card:nth-last-child(-n+2) {
    transform: translateX(115%); /* Move to the right */
}
    
/* Grid layout based on number of children */
.team-grid:has(.team-card:nth-child(4):last-child) {
    grid-template-columns: repeat(4, 1fr); /* 4 items */
}
.team-grid:has(.team-card:nth-child(5):last-child) {
    grid-template-columns: repeat(3, 1fr); /* 5 items (3+2) */
}
.team-grid:has(.team-card:nth-child(5)) .team-card:nth-child(4),
.team-grid:has(.team-card:nth-child(5)) .team-card:nth-child(5) {
    margin-left: auto;
    margin-right: auto;
    grid-column: span 1.5;
}
.team-grid:has(.team-card:nth-child(6):last-child) {
    grid-template-columns: repeat(3, 1fr); /* 6 items (3+3) */
}
.team-grid:has(.team-card:nth-child(7):last-child) {
    grid-template-columns: repeat(4, 1fr); /* 7 items (4+3) */
}
.team-grid:has(.team-card:nth-child(7)) .team-card:nth-child(5),
.team-grid:has(.team-card:nth-child(7)) .team-card:nth-child(6),
.team-grid:has(.team-card:nth-child(7)) .team-card:nth-child(7) {
    margin-left: auto;
    margin-right: auto;
    grid-column: span 1.33;
}
/* Responsive adjustments */
@media (max-width: 1024px) {
    .team-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .team-grid .team-card:nth-last-child(-n+2) {
        transform: none;
    }
}
@media (max-width: 640px) {
    .team-grid {
        grid-template-columns: 1fr;
    }
}
    
.team-card {
    text-align: center;
    transition: transform 0.3s ease;
}
.team-card:hover {
    transform: translateY(-10px);
}
.team-image-wrapper {
    width: 160px;
    height: 160px;
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    padding: 5px;
    background: linear-gradient(
        45deg,
        rgba(var(--primary-rgb), 0.1),
        rgba(var(--primary-rgb), 0.3)
    );
    position: relative;
    transition: all 0.3s ease;
}
.team-card:hover .team-image-wrapper {
    background: linear-gradient(
        45deg,
        rgba(var(--primary-rgb), 0.2),
        rgba(var(--primary-rgb), 0.4)
    );
    transform: scale(1.05);
}
.team-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    filter: brightness(1.1) contrast(1.1);
    transition: all 0.3s ease;
}
/* Update the team name and role spacing */
.team-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-white);
    margin: 0 0 0.2rem 0; /* Reduced bottom margin */
}
.team-role {
    color: var(--text-gray);
    font-size: 0.95rem;
    margin: 0;
}
@media (max-width: 768px) {
    .hero-logo {
        max-width: 400px;
        width: 90%;
    }
}
@media (max-width: 480px) {
    .hero-logo {
        max-width: 320px;
    }
    
    .hero-text {
        font-size: 1rem;
    }
}
/* Hero section */
.hero {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
/* Background image */
.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/assets/img/7951379690780.jpg');
    background-size: cover;
    background-position: center;
    z-index: 1;
}
/* Gradient overlay */
.hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(18,18,24,0.4), rgba(18,18,24,1),rgba(255, 255, 255, 0.02) 105%);
    z-index: 3;
}
/* Floating images - now between background and gradient */
.floating-images {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    z-index: 2;
}
.floating-image {
    position: fixed; /* Change from absolute to fixed */
    opacity: 0.15;
    filter: none;
    transition: all 0.3s ease;
}
/* Hero content */
.hero-content {
    position: relative;
    z-index: 4; /* Above everything */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    margin-top: -15vh; /* This will move the logo up */
}
.hero-logo {
    max-width: 600px;
    width: 80%;
    margin-bottom: 6rem;
}
    
.btn-primary {
    background: linear-gradient(
        135deg,
        rgba(147, 51, 234, 0.8),
        rgba(192, 132, 252, 0.8)
    );
    color: var(--text-white);
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-transform: none;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(147, 51, 234, 0.2);
}
.btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.2) 50%,
        transparent 100%
    );
    transition: all 0.5s ease;
}
.btn-primary:hover {
    background: linear-gradient(
        135deg,
        rgba(162, 82, 234, 0.9),
        rgba(208, 156, 252, 0.9)
    );
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(147, 51, 234, 0.3);
}
.btn-primary:hover::before {
    left: 100%;
}
/* Responsive styles */
@media (max-width: 768px) {
    .hero-logo {
        max-width: 400px;
        width: 90%;
        margin-bottom: 2rem;
    }
}
@media (max-width: 480px) {
    .hero-logo {
        max-width: 320px;
        width: 90%;
        margin-bottom: 2rem;
    }
    
    .btn-primary {
        padding: 0.875rem 1.75rem;
        font-size: 0.9rem;
    }
}

section {
    position: relative;
    z-index: 5;
}
/* Logo Carousel Styles */
.logo-carousel {
    position: relative;
    width: 100%;
    padding: 4rem 0;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.02) !important;
}

.carousel-container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.02) !important;
}

.carousel-container,
.logo-carousel {
    background-color: rgba(255, 255, 255, 0.02) !important;
}
    
.carousel-track:hover {
    animation-play-state: running;
}
.carousel-track {
    display: flex;
    animation: scroll 20s linear infinite;
    gap: 4rem; /* You have a 4rem gap */
}
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        /* 250px (slide width) * 4 (unique slides) + (4rem gap * 3) */
        transform: translateX(calc(-250px * 4 - 4rem * 4));
    }
}
.carousel-slide {
    flex: 0 0 250px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: none !important;
    border: none !important;
    box-shadow: none !important;
}
.logo-container {
    background: none;
    box-shadow: none;
    border: none;
}
.language-logo {
    width: 100px; /* Fixed size for all logos */
    height: 100px; /* Fixed size for all logos */
    object-fit: contain;
    margin-bottom: 1.5rem;
    filter: brightness(0) invert(1); /* Makes black logos white */
    transition: transform 0.3s ease;
    background: transparent;
}
/* Container to enforce aspect ratio */
.logo-container {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}
.carousel-slide:hover .language-logo {
    transform: scale(1.1);
}
.logo-title {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
}
/* Gradient fade effect on sides */
.logo-carousel::before,
.logo-carousel::after {
    content: '';
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
}
.logo-carousel::before {
    left: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.02) 0%, transparent 100%);
}
.logo-carousel::after {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.02) 0%, transparent 100%);
}
/* Responsive adjustments */
@media (max-width: 768px) {
    .section-title {
        font-size: 2rem; /* Slightly smaller on mobile */
        margin-bottom: 3rem;
    }
    
    .card {
        margin: 0 auto; /* Center cards on mobile */
        max-width: 100%; /* Full width on mobile */
    }
    
    .grid {
        gap: 2rem; /* Smaller gap on mobile */
    }    
    
    .carousel-slide {
        flex: 0 0 200px;
        height: 180px;
    }
    
    .logo-container {
        width: 70px;
        height: 70px;
    }
    
    .language-logo {
        width: 70px;
        height: 70px;
    }
    
    .logo-title {
        font-size: 1.125rem;
    }
}
/* Update icon colors */
.icon-shield { color: var(--primary); }
.icon-activity { color: var(--success); }
.icon-bug { color: var(--bug); } /* New color for bug icon */
.icon-code { color: var(--warning); }
/* Match card value colors with icons */
.card:nth-child(1) .card-value { color: var(--primary); }
.card:nth-child(2) .card-value { color: var(--success); }
.card:nth-child(3) .card-value { color: var(--bug); }
.card:nth-child(4) .card-value { color: var(--warning); }
html {
    scroll-behavior: smooth;
}
</style>
    <!-- Loading Animation -->
    <div class="loading">
        <img src="assets/img/Beyondlogo.png" alt="Loading..." style="width: 150px;">
    </div>
    
<div class="section-separator"></div>
<section class="section">
    <div class="container">
        <h2 class="section-title">PERFORMANCE</h2>
        <div class="grid grid-4">
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-project-diagram icon-shield"></i>
                </div>
                <div class="card-value">25+</div>
                <div class="card-label">Projects audited</div>
            </div>
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-lock icon-activity"></i>
                </div>
                <div class="card-value">$500M+</div>
                <div class="card-label">TVL secured</div>
            </div>
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-bug icon-bug"></i>
                </div>
                <div class="card-value">40+</div>
                <div class="card-label">High/Medium</div>
            </div>
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-code icon-alert"></i>
                </div>
                <div class="card-value">30K+</div>
                <div class="card-label">Lines of code covered</div>
            </div>
        </div>
    </div>
</section>
<!-- Services Section -->
<div class="section-separator"></div>
<section class="section">
    <div class="container">
        <h2 class="section-title">SERVICES</h2>
        <div class="grid grid-3">
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-shield-alt icon-shield"></i>
                </div>
                <h3 class="card-title">Security Review</h3>
                <p class="card-description">Comprehensive smart contract audits tailored to your needs with security recommendations strategies.</p>
            </div>
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-chart-line icon-activity"></i>
                </div>
                <h3 class="card-title">Risk Analysis</h3>
                <p class="card-description">Advanced risk analysis solutions for protocols focusing on identifying and mitigating potential security threats, thereby ensuring the security and stability of your operations.</p>
            </div>
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-exclamation-triangle icon-alert"></i>
                </div>
                <h3 class="card-title">Crisis Management</h3>
                <p class="card-description">Robust crisis management solutions to address issues, minimize damage, and maintain user trust.</p>
            </div>
        </div>
    </div>
</section>
      
<!-- Languages Section -->
<div class="section-separator"></div>
<section class="section">
    <div class="container">
        <h2 class="section-title">LANGUAGES</h2>
        <div class="logo-carousel">
            <div class="carousel-container">
                <div class="carousel-track">
                    <!-- First set -->
                    <div class="carousel-slide">
                        <div class="logo-container">
                            <img src="assets/img/solidity.png" alt="Solidity" class="language-logo">
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <div class="logo-container">
                            <img src="assets/img/vyper.png" alt="Vyper" class="language-logo">
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <div class="logo-container">
                            <img src="assets/img/rust.png" alt="Rust" class="language-logo">
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <div class="logo-container">
                            <img src="assets/img/cairo.png" alt="Cairo" class="language-logo">
                        </div>
                    </div>
                    <!-- Duplicate set for smooth infinite scroll -->
                    <div class="carousel-slide">
                        <div class="logo-container">
                            <img src="assets/img/solidity.png" alt="Solidity" class="language-logo">
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <div class="logo-container">
                            <img src="assets/img/vyper.png" alt="Vyper" class="language-logo">
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <div class="logo-container">
                            <img src="assets/img/rust.png" alt="Rust" class="language-logo">
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <div class="logo-container">
                            <img src="assets/img/cairo.png" alt="Cairo" class="language-logo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>    
    
<!-- Team Section -->
<div class="section-separator"></div>
<section class="section">
    <div class="container">
        <h2 class="section-title">TEAM</h2>
        <div class="team-grid">
            <div class="team-card">
                <a href="https://linktr.ee/xmikb" target="_blank" class="team-link">                
                    <div class="team-image-wrapper">
                        <img src="assets/img/mikbpp.png" alt="Mikb" class="team-image">
                    </div>
                </a>
                <h3 class="team-name">Mikb</h3>
                <p class="team-role">Head of Operations</p>
            </div>
            <div class="team-card">
                <a href="https://audits.sherlock.xyz/watson/greed" target="_blank" class="team-link">
                    <div class="team-image-wrapper">
                        <img src="assets/img/GreedPP.png" alt="Greed" class="team-image">
                    </div>
                </a>
                <h3 class="team-name">Greed</h3>
                <p class="team-role">Security Researcher</p>
            </div>
            <div class="team-card">
                <a href="https://audits.sherlock.xyz/watson/m4k2" target="_blank" class="team-link">                
                    <div class="team-image-wrapper">
                        <img src="assets/img/mkpp.jpg" alt="m4k2" class="team-image">
                    </div>
                </a>
                <h3 class="team-name">m4k2</h3>
                <p class="team-role">Security Researcher</p>
            </div>
            <div class="team-card">
                <a href="https://x.com/Icarus_xB" target="_blank" class="team-link">
                    <div class="team-image-wrapper">
                        <img src="assets/img/icaruspp.png" alt="Banc" class="team-image">
                    </div>
                </a>
                <h3 class="team-name">Icarus</h3>
                <p class="team-role">Security Researcher</p>
            </div>
            <div class="team-card">
                <div class="team-image-wrapper">
                    <img src="assets/img/remspp.jpg" alt="Rems" class="team-image">
                </div>
                <h3 class="team-name">Le_Rems</h3>
                <p class="team-role">Intern</p>
            </div>
        </div>
    </div>
</section>
<!-- Contact Section -->
<div class="section-separator"></div>
<section class="section" id="contact">
    <div class="container">
        <h2 class="section-title">CONTACT</h2>
        <div class="social">
            <a href="mailto:beyondaudit0@gmail.com" aria-label="Email">
                <i class="fas fa-envelope"></i>
            </a>
            <a href="https://x.com/beyondsec" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://discord.gg/KZsKH8Ja9C" aria-label="Discord">
                <i class="fab fa-discord"></i>
            </a>
            <a href="https://t.me/xMikb" aria-label="Telegram">
                <i class="fab fa-telegram"></i>
            </a>
        </div>
    </div>
</section>
  
  <!-- Footer-->
    <footer class="footer bg-black small text-center text-white-50">
        <div class="container px-4 px-lg-5">
            Copyright &copy; Beyond Audit <span class="copyright-year"></span>
        </div>
    </footer>
    <!-- Bootstrap core JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Core theme JS-->
    <script src="js/scripts.js"></script>
    <!-- Custom JS -->
    <script src="js/custom.js"></script>
</body>
    
<script>
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = track.getElementsByClassName('carousel-slide');
    const originalSlideCount = slides.length / 2; // This accounts for your duplicates
});                          
</script>
    
</html>
