$('#botao2').on('click', event => {
    event.preventDefault()
    
    let nome = document.querySelector('#nome')
    let field = document.querySelector('#email')
    let phone = document.querySelector('#telefone').value
    let evento = document.querySelector('#evento')
    let pessoas = document.querySelector('#pessoas')
    let data = document.querySelector('#data').value

        function verificaNome(){
            if(nome.value.length >= 3){
                    return true
                } else{
                    document.querySelector('#error').innerHTML = "Por favor, preencha o <strong>nome</strong> corretamente. &#128543;"
                    return false
                }
        }
        function verificaEmail(){
            usuario = field.value.substring(0, field.value.indexOf("@"));
            dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
            if((usuario.length >=1) &&
            (dominio.length >=3) && 
            (usuario.search("@")==-1) && 
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) && 
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&      
            (dominio.indexOf(".") >=1)&& 
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            return true
            }
            else{
                document.querySelector('#error').innerHTML = "Por favor, preencha o <strong>e-mail</strong> corretamente. &#128543;"
                return false
            }
        }
        function verificaTelefone(){
            if(isNaN(phone) || phone.length < 8 || phone.length > 13){
                document.querySelector('#error').innerHTML = "Por favor, preencha o <strong>telefone</strong> corretamente. &#128543;"
                return false
            }
            return true
        }
        function verificaEvento(){
            if(evento.value.length >= 3){
                    return true
                } else{
                    document.querySelector('#error').innerHTML = "Por favor, preencha o <strong>tipo de evento</strong>. &#128543;"
                    return false
                }
        }
        function verificaPessoas(){
            if(pessoas.value.length < 2){
                document.querySelector('#error').innerHTML = "Por favor, preencha a <strong>quantidade de pessoas</strong> corretamente. &#128543;"
                return false
            }
            return true
        }
        function verificaData(){
            if(data.length != 10){
                document.querySelector('#error').innerHTML = "Por favor, preencha a <strong>data</strong> corretamente. &#128543;"
                return false
            }
            return true
        }
    
    
    if(verificaNome() && verificaEmail() && verificaTelefone() && verificaEvento() && verificaPessoas() && verificaData()){
        let dados = $('form').serialize()
        $.ajax({
        type: 'GET',
        url: 'email.php',
        data: dados,
        success: dados => {
            if(dados == 'success'){
                $('input').val('')
                $('#botao2').val('Enviar')
                $('.modal-title').html('Mensagem enviada')
                $('.modal-body').html('Sua mensagem foi enviada com sucesso! Entraremos em contato. &#128515;')
                $('#button').html('Voltar').addClass('btn-success')
                $('#modalRegistraDespesa').modal('show')
            }
            if(dados == 'error'){
                $('.modal-title').html('Email não enviado')
                $('.modal-body').html('Por favor tente novamente.')
                $('#button').html('Voltar').addClass('btn-danger')
                $('#modalRegistraDespesa').modal('show')
            }
        },
        error: erro => {
            $('.modal-title').html('Email não enviado')
            $('.modal-body').html('Por favor tente novamente.')
            $('#button').html('Voltar').addClass('btn-danger')
            $('#modalRegistraDespesa').modal('show')
        }
        })
    }
})