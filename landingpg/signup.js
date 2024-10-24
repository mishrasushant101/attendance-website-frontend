document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const userTypeRadios = document.getElementsByName('userType');
    const userTypeText = document.getElementById('userTypeText');

    userTypeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            userTypeText.textContent = e.target.value === 'student' ? 'Student' : 'Teacher';
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userType = document.querySelector('input[name="userType"]:checked').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('Form submitted:', { userType, email, password });
        // Here you would typically send this data to your server
        alert(`Signed up as ${userType} with email: ${email}`);
    });
});