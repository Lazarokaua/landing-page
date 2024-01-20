 // validar dados
    const validarNome = (nome) => {
        if (nome === '' || nome === null || nome.length < 3) {
            document.querySelector('.erro__nome').textContent = 'O nome é obrigatório e precisa ter no mínimo três caracteres'
            return false
        } else {
            document.querySelector('.erro__nome').textContent = ''
            return true
        }

    }

    const validarEmail = (email) => {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,6}$/

        if (!emailRegex.test(email)) {
            document.querySelector('.erro__email').textContent = 'O email é obrigatório e precisa ser válido'
            return false
        } else {
            document.querySelector('.erro__email').textContent = ''
            return true
        }
    }


const pegarDados = () => {
    // pegar dados

    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value

    // Validar dados
    const nomeValido = validarNome(nome);
    const emailValido = validarEmail(email);


   
    // retorna resultado
    if (nomeValido && emailValido) {
        const cadastro = { nome, email};
        console.log(cadastro);
        // limpar o formulario
        limpaForm(); 
        return 'sucesso'
    } else {
        return 'erro'
    }

}

const limpaForm = () =>{
    document.querySelector('#nome').value = ''
    document.querySelector('#email').value = ''
}

const mostrarModal = (situacao) => {
    // formatação condicional do modal

    if (situacao === 'sucesso') {
        document.querySelector('#msg__erro').style.display = 'none';
        document.querySelector('#msg__sucesso').style.display = 'block'
        document.querySelector('.btn__fechar').classList.add('bg__sucesso');
        document.querySelector('.btn__fechar').classList.remove('bg__erro');
    }else if (situacao === 'erro') {
        document.querySelector('#msg__sucesso').style.display = 'none';
        document.querySelector('#msg__erro').style.display = 'block';
        document.querySelector('.btn__fechar').classList.add('bg__erro');
        document.querySelector('.btn__fechar').classList.remove('bg__sucesso');
    }

    document.querySelector('.modal__enviar').showModal();


}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn__send').addEventListener('click', () => {
        const resultado = pegarDados();
        mostrarModal(resultado);
    });

    document.querySelector('.btn__fechar').addEventListener('click', () => {
        document.querySelector('.modal__enviar').close();
    })
})