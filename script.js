function pesquisar() {
    const consulta = document.getElementById("consultaInput").value.toUpperCase(); // Converte a consulta para maiúsculas
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRjVt_E3urPlxsUzznawEgySBt08oBIfuf_qhgFmiSpx5Xu8FN1EJExvVVnfAv_hx4CBbjpNybR6Ibc/pubhtml"; // Substitua pelo URL da sua planilha compartilhada

    fetch(url)
        .then(response => response.text())
        .then(data => {
            const linhas = data.split('\n');
            const resultados = [];

            for (let i = 1; i < linhas.length; i++) { // Começa em 1 para pular o cabeçalho
                const colunas = linhas[i].split(',');
                const empresa = colunas[0].trim(); // Coluna "Empresa"
                const placa = colunas[1].trim().toUpperCase(); // Coluna "Placa"

                if (placa === consulta) {
                    resultados.push(`Empresa: ${empresa}, Placa: ${placa}`);
                }
            }

            const resultado = document.getElementById("resultado");
            if (resultados.length > 0) {
                resultado.innerHTML = "Resultado da pesquisa:<br>" + resultados.join("<br>");
            } else {
                resultado.innerHTML = "Nenhum resultado encontrado para a placa informada.";
            }
        })
        .catch(error => {
            console.error("Erro ao consultar a planilha: " + error);
        });
}
