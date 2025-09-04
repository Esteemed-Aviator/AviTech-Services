// Add an event listener to the form submission
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if form has already been submitted to prevent resending on page reload
    if (localStorage.getItem('formSubmitted') === 'true') {
        alert('Message has already been sent.');
        return;
    }

    // Send the email using EmailJS
    emailjs.send('service_7r4l4kf', 'template_jxsur3m', {
        name: name,
        email: email,
        message: message
    }).then(function (response) {
        // Store submission status in localStorage
        localStorage.setItem('formSubmitted', 'true');

        // Clear form inputs after successful message submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        alert('Message sent successfully!');
        console.log('Success:', response);
    }, function (error) {
        alert('Failed to send message. Try again later.');
        console.log('Error:', error);
    });
});

// Optional: Clear the localStorage when the user manually reloads the page (if needed)
// You can remove the `formSubmitted` flag on page load if you want the form to be resubmitted after a manual reload
window.addEventListener('beforeunload', function () {
    localStorage.removeItem('formSubmitted');
});
