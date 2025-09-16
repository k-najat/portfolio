document.addEventListener('DOMContentLoaded', function() {
    text();
    icons();
});

/**
 * Animation du texte d'introduction avec un effet de frappe
 */
function text() {
    const introText = document.querySelector('h1');
    if (!introText) return;
    
    const originalText = introText.textContent;
    introText.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < originalText.length) {
            introText.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100);
}


function icons() {
    const icon = document.querySelectorAll('.fa-brands');
    
    icon.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

