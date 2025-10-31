// Este é o conteúdo para o seu arquivo 'js/script.js'

// 1. SCROLL PROGRESS BAR
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
});

// 2. HEADER SCROLL EFFECT
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 3. SMOOTH SCROLLING (Links âncora)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 4. ADD TO CART & NOTIFICATION
document.querySelectorAll('.add-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Cria a notificação flutuante de "Adicionado!"
        const notification = document.createElement('div');
        notification.textContent = '✓ Adicionado!';
        
        notification.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ff4444, #ff6b6b); color: white; 
            padding: 20px 40px; border-radius: 50px; font-weight: 600; 
            z-index: 10000; box-shadow: 0 10px 40px rgba(255, 68, 68, 0.4);
            animation: popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        `;
        document.body.appendChild(notification);
        
        // Remove a notificação após o tempo
        setTimeout(() => {
            notification.style.animation = 'popOut 0.3s ease-in forwards';
            setTimeout(() => notification.remove(), 300);
        }, 1500);
    });
});

// 5. LOAD MORE FUNCTIONALITY (Botão "Carregar mais sabores")
document.querySelector('.load-more button').addEventListener('click', function() {
    this.textContent = 'Carregando...';
    this.style.opacity = '0.6';
    
    setTimeout(() => {
        this.textContent = 'Carregar mais sabores';
        this.style.opacity = '1';
        
        // Notificação de "Mais pizzas em breve!"
        const notification = document.createElement('div');
        notification.textContent = 'Mais pizzas em breve! 🍕';
        notification.style.cssText = `
            position: fixed; bottom: 30px; right: 30px; background: white; 
            color: #333; padding: 15px 30px; border-radius: 30px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.2); z-index: 10000;
            animation: slideInRight 0.5s ease-out;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease-in forwards';
            setTimeout(() => notification.remove(), 500);
        }, 2500);
    }, 1000);
});


// 6. DELIVERY OPTIONS INTERACTION (IFOOD/WPP/FIXO)
document.querySelectorAll('.delivery-option').forEach(option => {
    option.addEventListener('click', function() {
        // Pega o texto do botão (ex: IFOOD, WHATSAPP)
        const service = this.textContent.trim(); 
        const messages = {
            'IFOOD': 'Redirecionando para o iFood...',
            'WHATSAPP': 'Abrindo WhatsApp...', 
            'TELEFONE': 'Número: (11) 1234-5678' 
        };
        
        const notification = document.createElement('div');
        notification.textContent = messages[service] || 'Carregando...';
        
        notification.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: white; color: #333; padding: 25px 50px; border-radius: 15px; 
            box-shadow: 0 20px 60px rgba(0,0,0,0.3); z-index: 10000; font-weight: 600;
            animation: popIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'popOut 0.3s ease-in forwards';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    });
});

// 7. INTERSECTION OBSERVER (Animação de entrada dos elementos)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.about-content, .menu-header').forEach(el => {
    observer.observe(el);
});

// 8. ADD ANIMATION STYLES (Injeta os @keyframes necessários)
const style = document.createElement('style');
style.textContent = `
    @keyframes popIn {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    @keyframes popOut {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    }
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// 9. CONSOLE EASTER EGG (Opcional, mas divertido)
console.log('%c🍕 Pizzaria Santa Massa', 'font-size: 24px; font-weight: bold; color: #ff4444;');
console.log('%cPeça já a sua pizza! 🔥', 'font-size: 14px; color: #ff4444;');
