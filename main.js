function errorMessageFunc(errorMsg) {
  let errorMessage = document.getElementById('error-message');
  errorMessage.removeAttribute('style', true);

  let errorMessageText = document.getElementById('error-message-text');
  errorMessageText.innerText = `${errorMsg}`;

  document
    .getElementById('error-message-close')
    .addEventListener('click', () => {
      let errorMessageClose = document.getElementById('error-message');
      errorMessageClose.style.display = 'none';
    });

  let successMessageClose = document.getElementById('success-message');
  successMessageClose.style.display = 'none';
}

document.getElementById('login-btn').addEventListener('click', e => {
  e.preventDefault();

  let phone = 'im.com';
  let pass = '609012';

  let phoneInput = document.getElementById('phone-input').value;
  phoneInput.value = '';
  let passInput = document.getElementById('pass-input').value;
  passInput.value = '';

  if (phone === phoneInput && pass === passInput) {
    window.location.href = './home/home.html';
  } else {
    errorMessageFunc('Invalid username or wrong password');
  }
});
