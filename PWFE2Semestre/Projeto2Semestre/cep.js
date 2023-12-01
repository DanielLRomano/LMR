function consultarCEP() {
    var cep = $('#cep').val();

    // Verificar se o CEP possui formato válido (apenas números)
    if (/^\d{8}$/.test(cep)) {
        // Desativar o botão enquanto a solicitação está em andamento
        $('button').prop('disabled', true);

        // Consulta à API dos Correios
        $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function (data) {
            // Reativar o botão após a conclusão da solicitação
            $('button').prop('disabled', false);

            if (!("erro" in data)) {
                // Preencher os campos com as informações obtidas
                $('#logradouro').val(data.logradouro);
                $('#numero').val('');
                $('#complemento').val(data.complemento);
                $('#bairro').val(data.bairro);
                $('#resultadoCEP').html(''); // Limpar mensagem de erro

                // Atualizar a página após o preenchimento dos campos
                location.reload();
            } else {
                // Manter as informações preenchidas e exibir uma mensagem de erro
                $('#resultadoCEP').html('<p>CEP não encontrado</p>');
            }
        }).fail(function() {
            // Reativar o botão em caso de falha na solicitação
            $('button').prop('disabled', false);

            // Manter as informações preenchidas e exibir uma mensagem de erro
            $('#resultadoCEP').html('<p>Falha na consulta. Tente novamente.</p>');
        });
    } else {
        // Limpar todos os campos em caso de formato inválido
        $('#logradouro').val('');
        $('#numero').val('');
        $('#complemento').val('');
        $('#bairro').val('');
        $('#resultadoCEP').html('<p>Formato de CEP inválido</p>');
    }
}