$(document).ready(function(){
    $("#cpf_input").mask('000.000.000-00');

    $.validator.messages.required = "Este campo &eacute; obrigat&oacute;rio.";
    $("#myForm").validate({
        messages: {
            first_name: {
                minlength: "Nomes devem ter pelo menos 2 caracteres."
            },
            last_name: {
                minlength: "Sobrenomes devem ter pelo menos 2 caracteres."
            },
            cpf: {
                minlength: "Insira um CPF v&aacute;lido."
            }
        },
        onkeyup: function(element) {
            $(element).valid(); // faz a validação do campo quando o usuário digita
        },
        errorPlacement: function(error, element){
            error.insertAfter(element);
        },
    });
});



