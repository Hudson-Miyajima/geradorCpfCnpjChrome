randomiza = function() {
  return Math.round(Math.random() * 9);
};

mod = function(dividendo, divisor) {
  return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
};

Numero = function(cpf) {
  return {
    n1: randomiza(),
    n2: randomiza(),
    n3: randomiza(),
    n4: randomiza(),
    n5: randomiza(),
    n6: randomiza(),
    n7: randomiza(),
    n8: randomiza(),
    n9: cpf === true ? randomiza() : 0,
    n10: 0,
    n11: 0,
    n12: 1
  };
};

geraCpf = function(comPonto) {
  var numero_ = new Numero(true);

  var d1 =
      numero_.n9 * 2 +
      numero_.n8 * 3 +
      numero_.n7 * 4 +
      numero_.n6 * 5 +
      numero_.n5 * 6 +
      numero_.n4 * 7 +
      numero_.n3 * 8 +
      numero_.n2 * 9 +
      numero_.n1 * 10;

  d1 = 11 - ( this.mod(d1, 11) );

  if (d1 >= 10) {
    d1 = 0;
  }

  var d2 =
      d1 * 2 +
      numero_.n9 * 3 +
      numero_.n8 * 4 +
      numero_.n7 * 5 +
      numero_.n6 * 6 +
      numero_.n5 * 7 +
      numero_.n4 * 8 +
      numero_.n3 * 9 +
      numero_.n2 * 10 +
      numero_.n1 * 11;

  d2 = 11 - ( this.mod(d2, 11) );

  if (d2 >= 10) {
    d2 = 0;
  }

  return {
    comPonto: '' + numero_.n1 + numero_.n2 + numero_.n3 + '.' + numero_.n4 +
    numero_.n5 + numero_.n6 + '.' + numero_.n7 + numero_.n8 + numero_.n9 +
    '-' + d1 + d2,
    semPonto: '' + numero_.n1 + numero_.n2 + numero_.n3 + numero_.n4 +
    numero_.n5 +
    numero_.n6 + numero_.n7 + numero_.n8 + numero_.n9 + d1 + d2
  };
};

geraCnpj = function(comPonto) {
  var numero_ = new Numero(false);
  console.log(numero_.n9);

  var d1 =
      numero_.n12 * 2 +
      numero_.n11 * 3 +
      numero_.n10 * 4 +
      numero_.n9 * 5 +
      numero_.n8 * 6 +
      numero_.n7 * 7 +
      numero_.n6 * 8 +
      numero_.n5 * 9 +
      numero_.n4 * 2 +
      numero_.n3 * 3 +
      numero_.n2 * 4 +
      numero_.n1 * 5;

  d1 = 11 - ( this.mod(d1, 11) );

  if (d1 >= 10) {
    d1 = 0;
  }

  var d2 =
      d1 * 2 +
      numero_.n12 * 3 +
      numero_.n11 * 4 +
      numero_.n10 * 5 +
      numero_.n9 * 6 +
      numero_.n8 * 7 +
      numero_.n7 * 8 +
      numero_.n6 * 9 +
      numero_.n5 * 2 +
      numero_.n4 * 3 +
      numero_.n3 * 4 +
      numero_.n2 * 5 +
      numero_.n1 * 6;

  d2 = 11 - (this.mod(d2, 11));

  if (d2 >= 10) {
    d2 = 0;
  }

  return {
    comPonto: '' + numero_.n1 + numero_.n2 +
    '.' + numero_.n3 + numero_.n4 + numero_.n5 +
    '.' + numero_.n6 + numero_.n7 + numero_.n8 +
    '/' + numero_.n9 + numero_.n10 + numero_.n11 + numero_.n12 + '-' + d1 +
    d2,
    semPonto: '' + numero_.n1 + numero_.n2 + numero_.n3 + numero_.n4 +
    numero_.n5 + numero_.n6 + numero_.n7 + numero_.n8 + numero_.n9 +
    numero_.n10 + numero_.n11 +
    numero_.n12 + d1 + d2
  };
};
