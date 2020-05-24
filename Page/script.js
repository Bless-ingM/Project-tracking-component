const ham =  document.querySelector('#hamb')
const { body } = document

ham.addEventListener('click', e =>{ 
    e.preventDefault()
    body.classList.toggle('show-nav')
})