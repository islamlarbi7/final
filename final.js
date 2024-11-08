function validateForm() {
        document.getElementById('nameError').innerText = '';
        document.getElementById('emailError').innerText = '';
        document.getElementById('phoneError').innerText = '';
        document.getElementById('messageError').innerText = '';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        let isValid = true;

        if (name === '') {
            document.getElementById('nameError').innerText = 'Please enter your name.';
            isValid = false;
        }
        if (email === '') {
            document.getElementById('emailError').innerText = 'Please enter your email.';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('emailError').innerText = 'Please enter a valid email address.';
            isValid = false;
        }
        if (phone === '') {
            document.getElementById('phoneError').innerText = 'Please enter your phone number.';
            isValid = false;
        }
        if (message === '') {
            document.getElementById('messageError').innerText = 'Please enter a message.';
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            document.getElementById("contactForm").submit();
        }
    }

    
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    