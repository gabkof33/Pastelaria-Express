document.addEventListener("DOMContentLoaded", function () {
    // Capturar o evento de clique no botão
    document.getElementById("enviar-whatsapp").addEventListener("click", function () {
        // Capturar os dados do formulário
        const tamanho = document.getElementById("tamanho").value;
        const sabor = document.getElementById("sabor").value;
        const bebida = document.getElementById("bebida").value;

        // Capturar extras selecionados
        const extras = [];
        document.querySelectorAll("input[name='extras']:checked").forEach(extra => {
            extras.push(extra.value);
        });

        // Montar mensagem
        let mensagem = `Olá! Gostaria de fazer um pedido:\n\n`;
        mensagem += `📏 Tamanho do pastel: ${tamanho}\n`;
        mensagem += `🍴 Sabor: ${sabor}\n`;
        if (extras.length > 0) {
            mensagem += `🧀 Extras: ${extras.join(", ")}\n`;
        }
        mensagem += `🥤 Bebida: ${bebida}\n`;

        // Número do WhatsApp do vendedor
        const numeroWhatsApp = "554892113727"; // Substitua pelo número real

        // Criar URL para o WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        // Redirecionar para o WhatsApp
        window.open(urlWhatsApp, "_blank");
    });
});
