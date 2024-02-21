document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
})

let senhaVisivel = false;

function mostrarSenha() {
    const olho = document.getElementById('olho');
    const input_senha = document.querySelector('#senha');
    senhaVisivel = !senhaVisivel;

    if(senhaVisivel) {
        input_senha.setAttribute('type', 'text');
        olho.setAttribute('class', 'fa-regular fa-eye-slash');
    } else {
        input_senha.setAttribute('type', 'password');
        olho.setAttribute('class', 'fa-regular fa-eye');
    }

}