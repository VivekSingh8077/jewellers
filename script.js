function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Here you would typically send the data to your server
    alert(`Login attempted with Username: ${username} and Password: ${password}`);
}

function signup() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Here you would typically send the data to your server
    alert(`Signup attempted with Username: ${username}, Email: ${email} and Password: ${password}`);
}