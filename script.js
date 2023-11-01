function pesquisar() {
    const consulta = document.getElementById("consultaInput").value;
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRjVt_E3urPlxsUzznawEgySBt08oBIfuf_qhgFmiSpx5Xu8FN1EJExvVVnfAv_hx4CBbjpNybR6Ibc/pub?output=csv";

    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Analise os dados do arquivo CSV
            const linhas = data.split('\n');
            const resultados = [];

            linhas.forEach(linha => {
                const colunas = linha.split(',');
                // Supondo que a coluna que você deseja pesquisar seja a primeira (índice 0)
                const valorColuna = colunas[0];

                if (valorColuna.toLowerCase().includes(consulta.toLowerCase())) {
                    resultados.push(colunas.join(', '));
                }
            });

            // Exiba os resultados na página
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = resultados.join("<br>");
        })
        .catch(error => {
            console.error("Erro ao consultar o arquivo CSV: " + error);
        });
}
