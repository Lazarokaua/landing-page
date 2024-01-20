const btn = document.querySelector('.btn');
const main = document.querySelector('.theme')

btn.onclick = function() {
    this.classList.toggle('ativado');
    main.classList.toggle('ativado');
}