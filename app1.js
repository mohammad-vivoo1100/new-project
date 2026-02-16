const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

function toggleForm() {
    container.classList.toggle('active');
    container.classList.toggle('close');
}

const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();         
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        if (email === "" || password === "") {
            showNotification("Please fill in all fields! ❌");
        } else {
            showNotification("Welcome to VIVOO CAFE! ☕✨");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        }
    });
});

const socialIcons = document.querySelectorAll('.login a, .register a');
socialIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification("Social login coming soon... 🚀");
    });
});
const container = document.getElementById('container');
const toRegisterBtn = document.querySelector('.register-btn');
const toLoginBtn = document.querySelector('.login-btn');


if(toRegisterBtn) {
    toRegisterBtn.addEventListener('click', () => {
        container.classList.add('active');
        container.classList.remove('close');
    });
}

if(toLoginBtn) {
    toLoginBtn.addEventListener('click', () => {
        container.classList.add('close');
        container.classList.remove('active');
    });
}


const loginForm = document.querySelector('.login form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
   
    window.location.href = "index.html"; 
});