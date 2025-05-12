const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        setTimeout(() => {
            bar.style.width = bar.dataset.width + '%';
        }, 500);
    });
});

function animateImage(img) {
    img.style.transform = 'scale(1.2) rotate(360deg)';
    setTimeout(() => {
        img.style.transform = 'scale(1) rotate(0deg)';
    }, 1000);
}

function highlightSkill(element) {
    element.style.transform = 'scale(1.1)';
    element.style.background = 'rgba(127, 90, 240, 0.3)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
        element.style.background = 'rgba(127, 90, 240, 0.1)';
    }, 500);
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}