class contato {
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

function Post(form) {
    let data = new contato(
        form.nome.value,
        form.sobrenome.value,
        form.email.value,
        form.cpf.value,
        form.telefone.value,
        form.contato.value,
        form.mensagem.value 
    );

    let lista = JSON.parse(localStorage.getItem("contatos")) || [];
    lista.push(data);

    localStorage.setItem("contatos", JSON.stringify(lista));

    console.table(lista);

    alert("Obrigado Sr(a), " + data.nome + " " + data.sobrenome + "! Seus dados foram enviados com sucesso.");
    form.reset();
    return false;
}