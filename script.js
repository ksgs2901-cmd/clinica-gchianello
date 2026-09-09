// Scroll Suave - Menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            closeMenu();
        }
    });
});

// Menu Hambúrguer
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

function closeMenu() {
    if (navMenu) {
        navMenu.classList.remove('active');
    }
    if (hamburger) {
        hamburger.classList.remove('active');
    }
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Scroll reveal para elementos
const revealElements = () => {
    const reveals = document.querySelectorAll('.scroll-reveal:not(.reveal)');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('reveal');
        }
    });
};

// Adicionar classe scroll-reveal a elementos quando a página carrega
window.addEventListener('load', () => {
    // Adicionar scroll-reveal aos serviços
    document.querySelectorAll('.servico-card').forEach(card => {
        if (!card.classList.contains('scroll-reveal')) {
            card.classList.add('scroll-reveal');
        }
    });

    // Adicionar scroll-reveal aos depoimentos
    document.querySelectorAll('.depoimento-card').forEach(card => {
        if (!card.classList.contains('scroll-reveal')) {
            card.classList.add('scroll-reveal');
        }
    });

    revealElements();
});

window.addEventListener('scroll', revealElements);

// Formulário de contato
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Pegar valores do formulário
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        
        // Validação básica
        if (!name || !email || !phone || !message) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        // Criar mensagem para WhatsApp
        const whatsappMessage = encodeURIComponent(
            `Olá! Meu nome é ${name}.\n` +
            `Email: ${email}\n` +
            `Telefone: ${phone}\n\n` +
            `Mensagem: ${message}`
        );
        
        // Abrir WhatsApp
        window.open(`https://wa.me/5512988606134?text=${whatsappMessage}`, '_blank');
        
        // Limpar formulário
        this.reset();
        alert('Sua mensagem será enviada via WhatsApp. Obrigado!');
    });
}

// Animação do header ao scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Contador animado (Statistics)
const animateCounter = () => {
    const stats = document.querySelectorAll('.stat-item h3');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const finalValue = element.textContent;
                const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                let currentValue = 0;
                
                if (numericValue > 0) {
                    const increment = numericValue / 30;
                    const counter = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            element.textContent = finalValue;
                            clearInterval(counter);
                        } else {
                            element.textContent = Math.floor(currentValue) + (finalValue.includes('K') ? 'K' : '');
                        }
                    }, 30);
                }
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
};

window.addEventListener('load', animateCounter);

// Inicializar ao carregar
window.addEventListener('load', () => {
    console.log('Clínica Odontológica - Site carregado com sucesso!');
    revealElements();
});
