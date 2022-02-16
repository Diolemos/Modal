let openBtn = document.querySelector('.open-btn')
let modal = document.querySelector('.shield')
let closeBtn = document.querySelector('.modal-btn')








openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})