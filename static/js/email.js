function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const attachment = document.getElementById('attachment').files[0]; // Capture the attached file

    console.log('Sending Email...');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('Message:', message);
    console.log('Attachment:', attachment ? attachment.name : 'No file attached');

    // After sending, you might want to clear the form or give feedback to the user
    document.getElementById('gmailForm').reset();
}