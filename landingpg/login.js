document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Here you would typically send the login data to a server
        // For this example, we'll just log it to the console
        console.log('Login attempt:', { email, password });

        // You could add validation here
        if (email && password) {
            alert('Login attempt successful! (This is a demo, no actual login occurred)');
        } else {
            alert('Please fill in all fields');
        }
    });
});