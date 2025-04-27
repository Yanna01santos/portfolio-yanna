// Quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o EmailJS com sua Public Key
    emailjs.init("ARyA_-332jWL32QZr");

    // Seleciona o formulário e adiciona o evento de envio
    const form = document.getElementById('formulario');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o recarregamento da página

        const nome = document.getElementById('nome').value;
        const mensagem = document.getElementById('mensagem').value;

        const params = {
            nome: nome,
            mensagem: mensagem
        };

        emailjs.send('service_y39n5tq', 'template_w419tzk', params)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);

                const mensagemSucesso = document.getElementById('mensagem-enviada');
                mensagemSucesso.style.display = 'block';
                form.reset();

                setTimeout(() => {
                    mensagemSucesso.style.display = 'none';
                }, 5000);
            }, function (error) {
                console.log('FAILED...', error);
                alert('❌ Erro ao enviar. Por favor, tente novamente.');
            });
    });
});
