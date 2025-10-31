// Função para abrir e fechar o menu hambúrguer
function setupHamburgerMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    if (!hamburgerBtn || !navMenu) return;

    // 1. ABRIR / FECHAR ao clicar no BOTÃO
    hamburgerBtn.addEventListener('click', (e) => {
        // Impedimos que o clique no botão se propague para o evento do 'document' (evita que ele feche imediatamente)
        e.stopPropagation(); 
        
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll', navMenu.classList.contains('active'));
    });
    
    // 2. FECHAR ao clicar em um LINK
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Pequeno delay para permitir que o Smooth Scroll comece antes de fechar o menu
            setTimeout(() => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }, 50); 
        });
    });

    // 3. 🟢 FECHAR ao clicar FORA DO MENU (NOVO BLOCO)
    document.addEventListener('click', (e) => {
        // Verifica se o menu está aberto E se o clique não foi no botão OU no próprio menu
        const isMenuOpen = navMenu.classList.contains('active');
        const clickedOutsideNav = !navMenu.contains(e.target);
        const clickedOutsideButton = !hamburgerBtn.contains(e.target);

        if (isMenuOpen && clickedOutsideNav && clickedOutsideButton) {
            // Fecha o menu
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
}

// Chame a função para iniciar o menu
setupHamburgerMenu();