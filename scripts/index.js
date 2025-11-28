tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: '#2563eb', // Royal Blue
                secondary: '#475569', // Slate
                surface: '#ffffff',
                background: '#f8fafc', // Very light blue-grey
            }
        }
    }
}

// Simple scroll animation for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Copy to clipboard functionality for later extension
function copyCitation(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show a toast or tooltip here
        console.log('Copied citation');
    });
}