const inputEl = document.querySelectorAll('input')
const btnMasuk = document.querySelector('.btn-masuk')

inputEl.forEach((e, idx) => {
    e.addEventListener('input', () => {
        if (inputEl[0].value !== "" && inputEl[1].value !== "") {
            btnMasuk.disabled = false
        } else {
            btnMasuk.disabled = true
        }
    })
})

