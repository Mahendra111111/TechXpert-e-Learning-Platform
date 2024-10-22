function showUPIForm() {
  document.getElementById('upi-form').classList.add('active');
  document.getElementById('card-form').classList.remove('active');
  document.getElementById('upi-logo').classList.add('active');
  document.getElementById('card-logo').classList.remove('active');
  document.getElementById('notification').style.display = 'none';
}

function showCardForm() {
  document.getElementById('upi-form').classList.remove('active');
  document.getElementById('card-form').classList.add('active');
  document.getElementById('upi-logo').classList.remove('active');
  document.getElementById('card-logo').classList.add('active');
  document.getElementById('notification').style.display = 'none';
}

// UPI ID format validation
function validateUPIID() {
  const upiID = document.getElementById('upi-id').value;
  const upiRegex = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;

  if (!upiRegex.test(upiID)) {
      document.getElementById('upi-id').style.border = "2px solid red";
  } else {
      document.getElementById('upi-id').style.border = "2px solid green";
  }
}

// Card type detection
function detectCardType() {
  const cardNumber = document.getElementById('card-number').value;
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const masterRegex = /^5[1-5][0-9]{14}$/;

  if (visaRegex.test(cardNumber)) {
      document.getElementById('card-logo').src = "https://pngimg.com/d/visa_PNG36.png";
  } else if (masterRegex.test(cardNumber)) {
      document.getElementById('card-logo').src = "https://pngimg.com/uploads/mastercard/mastercard_PNG28.png";
  } else {
      document.getElementById('card-logo').src = "https://pngimg.com/d/visa_PNG36.png"; // Default Visa Logo
  }
}

// Validate UPI form
function validateUPIForm() {
  const upiID = document.getElementById('upi-id').value;

  if (upiID === "") {
      showNotification();
  } else {
      processPayment();
  }
}

// Validate Credit Card form
function validateCardForm() {
  const cardNumber = document.getElementById('card-number').value;
  const expiry = document.getElementById('expiry').value;
  const cvv = document.getElementById('cvv').value;

  if (cardNumber === "" || expiry === "" || cvv === "") {
      showNotification();
  } else {
      processPayment();
  }
}

function showNotification() {
  document.getElementById('notification').style.display = 'block';
}

function processPayment() {
  // Simulate payment processing
  const successMessage = "Payment Successful!";
  document.getElementById('success-message').innerText = successMessage;
  document.getElementById('success-popup').style.display = 'block';
  setTimeout(() => {
      document.getElementById('success-popup').style.display = 'none';
      window.location.href = '/Course-play/Course-play.html';
  }, 3000);
}