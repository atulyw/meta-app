document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }

  // Dummy only — show alert instead of submitting
  alert('This is a demo page. No login request is made.\n\nYou entered:\nEmail: ' + email + '\nPassword: [hidden]');
});

document.querySelector('.forgot-password').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Demo: Forgot password link — no action taken.');
});

document.querySelector('.btn-create').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Demo: Create account — no action taken.');
});
