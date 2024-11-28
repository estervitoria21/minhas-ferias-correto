<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Praias do Brasil</title>
    <link rel="stylesheet" href="style.css">
    <script>
        function saudacao() {
            const saudacaoElement = document.getElementById("saudacao");
            const horas = new Date().getHours();
            let mensagem = "";

            if (horas < 12) {
                mensagem = "Bom dia! Aproveite as praias!";
            } else if (horas < 18) {
                mensagem = "Boa tarde! Que tal uma caminhada na praia?";
            } else {
                mensagem = "Boa noite! O som das ondas é relaxante à noite!";
            }

            saudacaoElement.innerHTML = mensagem;
        }

        window.onload = saudacao;
    </script>
</head>
<body>
    <header>
        <h1>Bem-vindo às Praias do Brasil-Copacabana-rj</h1>
        <p id="saudacao"></p>
    </header>
    
    <section id="praias">
        <article class="praia">
            <h2>Praia de Copacabana</h2>
            <img src="copacabana.jpg" alt="Praia de Copacabana">
            <p>A famosa praia do Rio de Janeiro.</p>
        </article>
    </section>
    
    <footer>
        <p>&copy; 2024 Praias do Brasil</p>
    </footer>
</body>
</html>
