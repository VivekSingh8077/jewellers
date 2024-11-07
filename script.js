document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Basic validation
    if (email === '' || password === '') {
        message.textContent = 'Please fill in all fields.';
        return;
    }

    // Simulate a login process (replace this with actual authentication logic)
    if (email === 'user@example.com' && password === 'password') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        // Redirect to a different page or perform another action
        // window.location.href = 'dashboard.html';
    } else {
        message.textContent = 'Invalid email or password.';
    }
});
function sahil(){
    alert("Signed Up For Newsletters");
}
function applied(){
    alert("applied");
}
