let cartCount = 0;
const cartButtons = document.querySelectorAll('.btn-cart');
const navMenu = document.querySelector('.navbar-menu');

const cartBadge = document.createElement('span');
cartBadge.classList.add('cart-badge');
cartBadge.innerText = cartCount;
navMenu.appendChild(cartBadge);

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartBadge.innerText = cartCount;
        
        cartBadge.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartBadge.style.transform = 'scale(1)';
        }, 200);

        showNotification("Item added to cart! ☕");
    });
});

function showNotification(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast-msg');
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

const scrollBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const revealElements = document.querySelectorAll('.product-card, .info-grid');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    revealObserver.observe(el);
});
