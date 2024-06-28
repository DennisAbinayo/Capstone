const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const closeBtn = document.querySelector("#deactivate");

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('activate')
    })
};

if (closeBtn) {
    closeBtn.addEventListener('click', () =>{
        nav.classList.remove('activate')
    })
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('submit');

    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Validate the form fields
        if (validateForm()) {
            alert('Form validated successfully!'); 
            form.reset(); 
        }
    });

    // Function to validate form fields
    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        
        if (name.trim() === '') {
            alert('Please enter your name.');
            return false;
        }
        
        if (email.trim() === '') {
            alert('Please enter your email.');
            return false;
        } else if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        
        if (message.trim() === '') {
            alert('Please enter your message.');
            return false;
        }
        
        return true; 
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

