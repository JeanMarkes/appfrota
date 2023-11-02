import cgi
import pandas as pd

# Obtenha a placa da solicitação
form = cgi.FieldStorage()
placa_pesquisada = form.getvalue("placa")

# URL público da planilha no formato CSV
url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRul4T7a8YGSZ5OONIujRqCV-ro-pZtGpLd-dEmmnxBQ7YMEfBV8I2Xssawiv4fLHKkilZd2YEBHx5R/pub?output=csv"

# Carregue a planilha como um DataFrame do pandas
df = pd.read_csv(url)

# Verifique se a placa existe na coluna "placa"
if placa_pesquisada in df["placa"].values:
    # Obtém a linha onde a placa foi encontrada
    linha = df[df["placa"] == placa_pesquisada]

    # Acesse as informações relacionadas nas colunas adjacentes
    informacoes = linha.iloc[0]  # Pode variar dependendo da estrutura da sua planilha

    # Agora você pode acessar as informações como um dicionário
    unidade = informacoes["unidade"]
    chassi = informacoes["chassi"]
    renavam = informacoes["renavam"]

    # Imprima as informações para exibição na página HTML
    print(f"Informações do veículo com placa {placa_pesquisada}:")
    print(f"Unidade: {unidade}")
    print(f"Chassi: {chassi}")
    print(f"Renavam: {renavam}")
else:
    print(f"A placa {placa_pesquisada} não foi encontrada na planilha.")
