{class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato, mensagem) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
    }
}

function handleCPF(event) {
    let input = event.target;
    input.value = cpfMask(input.value);
}

function cpfMask(value) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value;
}
function handlePhone(event) {
    let input = event.target;
    input.value = phoneMask(input.value);
}

function phoneMask(value) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
}


function validarEnvio() {
    const termos = document.getElementById("termos");

    if (!termos.checked) {
        alert("Você precisa aceitar os Termos e Condições para continuar.");
        return false;
    }
    return true;
}
function Post(form) {

    const msg = document.getElementById("mensagem-form");
    msg.style.display = "none";
    msg.className = "mensagem-form";

    // 🔴 Validação dos campos
    if (
        !form.nome.value.trim() ||
        !form.sobrenome.value.trim() ||
        !form.email.value.trim() ||
        !form.cpf.value.trim() ||
        !form.telefone.value.trim() ||
        !form.contato.value ||
        !form.mensagem.value.trim()
    ) {
        msg.textContent = "Por favor, preencha todos os campos obrigatórios.";
        msg.classList.add("erro");
        msg.style.display = "block";
        return false;
    }

    // 🔴 Validação LGPD
    const termos = document.getElementById("termos");
    if (!termos.checked) {
        msg.textContent = "Você precisa aceitar os Termos e Condições para continuar.";
        msg.classList.add("erro");
        msg.style.display = "block";
        return false;
    }

    // ✅ Criação do objeto
    const data = new Contato(
        form.nome.value,
        form.sobrenome.value,
        form.email.value,
        form.cpf.value,
        form.telefone.value,
        form.contato.value,
        form.mensagem.value
    );

    console.log("Objeto enviado:", data);

    // ✅ Mensagem de sucesso
    msg.textContent =
        "Obrigado, " +
        data.nome +
        "! Seus dados foram enviados com sucesso.";

    msg.classList.add("sucesso");
    msg.style.display = "block";

    form.reset();
    document.getElementById("btnEnviar").disabled = true;

    return false;
}}