const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const closeBtn = document.querySelector("#deactivate");

// Hamburger Menu
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

// Form Validation
const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const emailFrom = document.querySelector("#email");
const phone = document.querySelector("#phone");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

function sendEmail() {
    const name = fullName.value.trim();
    const email = emailFrom.value.trim();
    const phoneNumber = phone.value.trim();
    const subjectText = subject.value.trim();
    const messageText = message.value.trim();
    
    if (name === '') {
        alert('Please enter your name.');
        return;
    }
    
    if (email === '') {
        alert('Please enter your email.');
        return;
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    if (phoneNumber === '') {
        alert('Please enter your phone number.');
        return;
    }
    
    if (subjectText === '') {
        alert('Please enter your subject.');
        return;
    }
    
    if (messageText === '') {
        alert('Please enter your message.');
        return;
    }
    
    const bodyMessage = `Full Name: ${name}<br> Email: ${email}<br> Phone Number: ${phoneNumber} <br> Message: ${messageText}`;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "capstonejs2024@gmail.com",
        Password : "1C7287328CB1A4784C4E9CBA0A9DEAC61266",
        To : 'capstonejs2024@gmail.com',
        From : "capstonejs2024@gmail.com",
        Subject : subjectText.toUpperCase(),
        Body : bodyMessage
    }).then(
        message =>{
            if (message === "OK") {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Error, Message not sent!");
            }
        }
    );
};

function isValidEmail(emailTo) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailTo);
};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});
