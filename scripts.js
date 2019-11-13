const API_URL = 'https://apis.is/company?name=';

/**
 * Leit að fyrirtækjum á Íslandi gegnum apis.is
 */
const program = (() => {
  let inputValue = '';

  function init() {
    const input = document.querySelector('input');
    input.addEventListener('keydown', onKeydown);
    const button = document.querySelector('button');
    button.addEventListener('click', onSubmit);
  }

  function onKeydown(e) {
    inputValue = this.value;
    console.log(inputValue);
  }

  function onSubmit(e) {
    e.preventDefault();

    if (inputValue !== '') {
      console.log();
    } else {
      console.log('Lén verður að vera strengur');
    }
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  program.init();
});