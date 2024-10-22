  // Function to auto-focus on the next input box
  function moveToNext(current, nextFieldID) {
    if (current.value.length === 1 && nextFieldID !== '') {
        document.getElementById(nextFieldID).focus();
    }
}

// Function to verify OTP and redirect if valid
function verifyOTP() {
    let otp = '';
    for (let i = 1; i <= 6; i++) {
        otp += document.getElementById('otp' + i).value;
    }

    if (otp.length === 6) {
        alert('OTP Verified: ' + otp);
        // Redirect to the main page after OTP verification
        window.location.href = '/main.html'; // Replace 'main.html' with your main page URL
    } else {
        alert('Please enter a 6-digit OTP.');
    }
}

// Function to resend OTP
function resendOTP() {
    alert('A new OTP has been sent!');
}