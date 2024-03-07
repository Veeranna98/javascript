// Add this script inside a <script> tag or in a separate .js file
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
