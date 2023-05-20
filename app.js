const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const copyIcon = document.querySelector('.fa-copy');
const alertCopiedText = document.querySelector('.alert-container');

// Create password
btn.addEventListener('click', () => {
  const chars =
    '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const passwordLength = 14;
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  input.value = password;
});

// Show copied text
copyIcon.addEventListener('click', () => {
  alertCopiedText.classList.remove('active');
  alertCopiedText.textContent = input.value + ' copied!';
  if (input.value == '') {
    alertCopiedText.textContent = 'Nothing to copy!';
  }
  setTimeout(() => {
    alertCopiedText.classList.add('active');
  }, 2000);
  copyPassword();
});

// Copy to clipboard
function copyPassword() {
  input.select();
  input.setSelectionRange(0, 14);
  navigator.clipboard.writeText(input.value);
}
