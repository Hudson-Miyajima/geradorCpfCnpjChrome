var PopupController = function () {
    this.formatacao_checkbox = document.getElementById('formatacao');
    this.cpf_button = document.getElementById('cpf');
    this.cnpj_button = document.getElementById('cnpj');
    this.numero_field = document.getElementById('numero');
    this.mensagem = document.getElementById('msg');
    this.addListeners_();
};

PopupController.prototype = {

    addListeners_: function () {
        this.cpf_button.addEventListener('click', this.geraNumeroDocumentoCpf.bind(this));
        this.cnpj_button.addEventListener('click', this.geraNumeroDocumentoCnpj.bind(this));
    },
    geraNumeroDocumentoCpf: function () {
        this.numero_field.value = geraCpf(this.formatacao_checkbox.checked);
        this.copiaParaAreaDeTransferencia();
    },
    geraNumeroDocumentoCnpj: function () {
        this.numero_field.value = geraCnpj(this.formatacao_checkbox.checked);
        this.copiaParaAreaDeTransferencia();
    },
    copiaParaAreaDeTransferencia: function () {
        this.numero_field.select();
        document.execCommand('copy');
        this.mensagem.textContent = 'Copiado para área de transferência';
        this.mensagem.setAttribute('class', 'label label-primary');
    }
};

document.addEventListener('DOMContentLoaded', function () {
    window.PC = new PopupController();
});
