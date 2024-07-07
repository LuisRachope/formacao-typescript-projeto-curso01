let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor")
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form")
elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
});