const inputEl = document.querySelectorAll('input')
const btnMasuk = document.querySelector('.btn-masuk')
const passwordInput = document.getElementById('password-input');
const showPasswordButton = document.getElementById('show-password');
inputEl.forEach((e, idx) => {
    e.addEventListener('input', () => {
        if (inputEl[0].value !== "" && inputEl[1].value !== "") {
            btnMasuk.disabled = false
            showPasswordButton.textContent = 'Tampilkan'
        } else {
            btnMasuk.disabled = true
            showPasswordButton.textContent = ''
        }
    })
})



showPasswordButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordButton.textContent = 'Sembunyikan';
    } else {
        passwordInput.type = 'password';
        showPasswordButton.textContent = 'Tampilkan';
    }
});