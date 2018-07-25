var PopupController = function() {
  this.format_check = document.getElementById('format');
  this.cpf_button = document.getElementById('cpf');
  this.cnpj_button = document.getElementById('cnpj');
  this.numero_field = document.getElementById('numero');
  this.mensagem = document.getElementById('msg');
  this.init();
  this.addListeners_();
};

PopupController.prototype = {
  init: function() {
    chrome.storage.sync.get('value', function(item) {
      if (!chrome.runtime.error) {
        if (item.value !== undefined) {
          document.getElementById('numero').value = item.value;
        }
      }
    });
  },
  addListeners_: function() {
    this.cpf_button.addEventListener('click', this.geraNumCpf.bind(this));
    this.cnpj_button.addEventListener('click', this.geraNumCnpj.bind(this));
  },
  geraNumCpf: function() {
    this.numero_field.value = this.format_check.checked === true ?
        geraCpf().comPonto :
        geraCpf().semPonto;
    this.copiaParaAreaDeTransferencia(this.numero_field.value);
    this.copiaParaMemoria(this.numero_field.value);
  },
  geraNumCnpj: function() {
    this.numero_field.value = this.format_check.checked === true ?
        geraCnpj().comPonto :
        geraCnpj().semPonto;
    this.copiaParaAreaDeTransferencia(this.numero_field.value);
    this.copiaParaMemoria(this.numero_field.value);
  },
  copiaParaAreaDeTransferencia: function() {
    this.numero_field.select();
    document.execCommand('copy');
    this.mensagem.textContent = 'Copiado para área de transferência';
    this.mensagem.setAttribute('class', 'label label-primary');
  },
  copiaParaMemoria: function(documento) {
    chrome.storage.sync.set({'value': documento}, function() {
      if (chrome.runtime.error) {
        console.log('Runtime error.');
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', function() {
  window.PC = new PopupController();
});