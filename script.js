// Loading Screen
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 1000);
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = navLinks.classList.contains('active') 
        ? 'rotate(45deg) translateY(8px)' 
        : 'rotate(0) translateY(0)';
    spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navLinks.classList.contains('active') 
        ? 'rotate(-45deg) translateY(-8px)' 
        : 'rotate(0) translateY(0)';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0) translateY(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translateY(0)';
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 3D Card Tilt Effect
const cards = document.querySelectorAll('.card-3d, .project-card, .skill-category, .education-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 700;
    }
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll('section, .card-3d, .project-card, .timeline-item, .skill-category, .education-card, .achievement-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Skill Bar Animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Create Floating Particles
function createParticles() {
    const particleCount = 50;
    const container = document.body;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        container.appendChild(particle);
    }
}

createParticles();

// Interactive 3D Shapes
const shapes = document.querySelectorAll('.shape');

shapes.forEach((shape, index) => {
    // Add mouse interaction to shapes
    shape.addEventListener('mouseenter', () => {
        shape.style.transform = `scale(1.2) rotateX(15deg) rotateY(15deg)`;
        shape.style.opacity = '0.3';
        shape.style.transition = 'all 0.3s ease';
    });
    
    shape.addEventListener('mouseleave', () => {
        shape.style.transform = '';
        shape.style.opacity = '0.1';
        shape.style.transition = 'all 0.3s ease';
    });
    
    // Add random movement on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const xPos = Math.sin(scrolled * 0.002 + index) * 50;
        const yPos = Math.cos(scrolled * 0.002 + index) * 30;
        
        shape.style.transform = `translate3d(${xPos}px, ${rate + yPos}px, 0) rotateX(${scrolled * 0.01}deg) rotateY(${scrolled * 0.02}deg)`;
    });
});

// Profile Image 3D Effect
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('mousemove', (e) => {
        const rect = profileImage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        profileImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    profileImage.addEventListener('mouseleave', () => {
        profileImage.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
}

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Typing Effect for Hero Subtitle
const subtitle = document.querySelector('.hero .subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 1500);
}

// Add Ripple Effect to Buttons
const buttons = document.querySelectorAll('.btn, .project-link');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .btn, .project-link {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-links a.active {
        color: var(--text-primary);
    }
    
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Counter Animation for Statistics
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Mouse Trail Effect
let mouseTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    mouseTrail.push({ x: e.clientX, y: e.clientY });
    
    if (mouseTrail.length > trailLength) {
        mouseTrail.shift();
    }
});

// Cursor Glow Effect
const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX - 10 + 'px';
    cursorGlow.style.top = e.clientY - 10 + 'px';
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .btn, .card-3d, .project-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorGlow.style.transform = 'scale(2)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorGlow.style.transform = 'scale(1)';
    });
});

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// Add Easter Egg - Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// Performance Optimization - Debounce Scroll Events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Scroll-dependent operations here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Console Message
console.log('%c👋 Hello Developer!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cWelcome to Akash Anuragi\'s Portfolio', 'font-size: 14px; color: #8b5cf6;');
console.log('%cBuilt with ❤️ using HTML, CSS, and JavaScript', 'font-size: 12px; color: #cbd5e1;');

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitButton = document.querySelector('.form-submit');
const submitText = document.querySelector('.submit-text');
const loadingText = document.querySelector('.loading-text');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Validate form
    if (!data.name || !data.email || !data.subject || !data.message) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Show loading state
    submitButton.classList.add('loading');
    submitText.style.display = 'none';
    loadingText.style.display = 'inline';
    
    try {
        // Send email using FormSubmit (free service)
        const response = await fetch('https://formsubmit.co/ajax/akashanuragi543@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
                _subject: `Portfolio Contact: ${data.subject}`, // Custom subject
                _template: 'table', // Better email formatting
                _captcha: 'false', // Disable captcha for now
                _next: 'https://akashanuragi.github.io/thank-you.html' // Redirect after submission
            })
        });
        
        if (response.ok) {
            // Success
            showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
            contactForm.reset();
            submitButton.classList.remove('loading');
            submitButton.classList.add('success');
            submitText.style.display = 'inline';
            loadingText.style.display = 'none';
            
            setTimeout(() => {
                submitButton.classList.remove('success');
            }, 3000);
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        // Error
        showMessage('Sorry, there was an error sending your message. Please try again or contact me directly at akashanuragi543@gmail.com', 'error');
        submitButton.classList.remove('loading');
        submitButton.classList.add('error');
        submitText.style.display = 'inline';
        loadingText.style.display = 'none';
        
        setTimeout(() => {
            submitButton.classList.remove('error');
        }, 3000);
    }
});

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type} show`;
    
    setTimeout(() => {
        formMessage.classList.remove('show');
    }, 5000);
}

// Add input validation styling
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() !== '') {
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
        }
    });
    
    input.addEventListener('focus', () => {
        input.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        input.classList.remove('focused');
    });
});

// Add smooth reveal animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});