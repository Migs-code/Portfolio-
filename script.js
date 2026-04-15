const nameText = "Miggy Demapitan";
let index = 0;

function typeName() {
    const typewriterEl = document.getElementById("typewriter");
    if (typewriterEl && index < nameText.length) {
        typewriterEl.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeName, 150);
    }
}

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);

window.onload = () => {
    const greeting = document.getElementById("dynamic-greeting");
    const hr = new Date().getHours();
    
    if (greeting) {
        if (hr < 12) greeting.innerText = "AM_INIT";
        else if (hr < 18) greeting.innerText = "SYS_ACTIVE";
        else greeting.innerText = "NIGHT_MODE";
    }

    reveal();
    typeName(); 
};

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Connection Established. Message Sent to Miggy.");
        e.target.reset();
    });
}
