const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeImg = document.querySelector("#qr-code img");
const qrCodeInput = document.querySelector("#qr-form input")

// Eventos 
// função para o evento de enter 
function generateQrCode() {

    // pegar valor do input
    const qrCodeInputValue = qrCodeInput.value;

    // validação - se não estiver preenchido, não gera código
    if (!qrCodeInputValue) return;

    // enquanto tá esperando a resposta do API - gerando o código...
    qrCodeBtn.innerHTML = "Gerando código...";

    // usar API - mudar o atributo src para a API
    qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    // ativar 
    container.classList.add("active");

    // para ele não demorar para mudar de qr-code, ele só vai aparecer o qr-code quando for gerado
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        // mudar o botão 
        qrCodeBtn.innerHTML = "Código criado!";
    })

}
// evento de clicar 
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

// Enviar o formulário com o botão enter
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        generateQrCode();
    }
});

// Limpar área do QR Code - quando o usuário limpa o input
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
})
