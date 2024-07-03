$(document).ready(function() {

    $('#contactForm').submit(function(event){
        
        //Impede o envio padrão do formulario
        event.preventDefault();

        // Validacao simples
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name === '' || email === '' || message === '') {
            alert('Por favor, preencha todos os campos do formulario');
            return;
        }

    //Simulação de envio bem-sucedido
    alert('Formulario enviado com sucesso!\nNome: ' + name + '\nemail: ' + email + '\nMensagem: ' + message);


    //Limpa os campos apos envio
    $('#name', '#email', '#message').val('');
    });
});
