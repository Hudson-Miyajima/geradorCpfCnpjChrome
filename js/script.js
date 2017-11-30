var PopupController = function () {
    this.formatacao_checkbox = document.getElementById('formatacao');
    this.cpf_button = document.getElementById('cpf');
    this.cnpj_button = document.getElementById('cnpj');
    this.numero_field = document.getElementById('numero');
    this.mensagem = document.getElementById('msg');
    this.teste = '';
    this.init();
    this.addListeners_();
};

PopupController.prototype = {
    init: function () {
        chrome.storage.sync.get("value", function (item) {
            if (!chrome.runtime.error) {
                console.log(item.value);
                if (item.value !== undefined) {
                    document.getElementById("numero").value = item.value;
                }
            }
        });
    },
    addListeners_: function () {
        this.cpf_button.addEventListener('click', this.geraNumeroDocumentoCpf.bind(this));
        this.cnpj_button.addEventListener('click', this.geraNumeroDocumentoCnpj.bind(this));
    },
    geraNumeroDocumentoCpf: function () {
        this.numero_field.value = geraCpf(this.formatacao_checkbox.checked);
<<<<<<< Updated upstream
        this.copiaParaAreaDeTransferencia();
    },
    geraNumeroDocumentoCnpj: function () {
        this.numero_field.value = geraCnpj(this.formatacao_checkbox.checked);
        this.copiaParaAreaDeTransferencia();
=======
        this.copiaParaAreaDeTransferencia(this.numero_field.value);
        this.copiaParaMemoria(this.numero_field.value);
    },
    geraNumeroDocumentoCnpj: function () {
        this.numero_field.value = geraCnpj(this.formatacao_checkbox.checked);
        this.copiaParaAreaDeTransferencia(this.numero_field.value);
        this.copiaParaMemoria(this.numero_field.value);
>>>>>>> Stashed changes
    },
    copiaParaAreaDeTransferencia: function () {
        this.numero_field.select();
        document.execCommand('copy');
        this.mensagem.textContent = 'Copiado para área de transferência';
        this.mensagem.setAttribute('class', 'label label-primary');
    },
    copiaParaMemoria: function (documento) {
        chrome.storage.sync.set({'value': documento}, function () {
            if (chrome.runtime.error) {
                console.log("Runtime error.");
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    window.PC = new PopupController();
});
