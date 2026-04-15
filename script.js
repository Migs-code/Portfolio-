window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Simple animation trigger for progress bars
const progressBars = document.querySelectorAll('.progress');
window.addEventListener('scroll', () => {
    progressBars.forEach(bar => {
        const speed = 2;
        const target = bar.getBoundingClientRect().top;
        if(target < window.innerHeight) {
            // In a real app, you'd trigger the CSS width transition here
        }
    });
});
