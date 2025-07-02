function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),
    btnApaga: document.querySelector(".btn-del"),
    btnIgual: document.querySelector(".btn-eq"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const evento = e.target;
        if (evento.classList.contains("btn-num")) {
          this.enviaParaDisplay(evento.innerText);
        }

        if (evento.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (evento.classList.contains("btn-del")) {
          this.limpaNum();
        }

        if (evento.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },

    enviaParaDisplay(valor) {
      this.display.value = this.display.value + valor;
    },

    clearDisplay() {
      this.display.value = "";
    },

    limpaNum() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta inválida");
          return;
        }
      } catch (e) {
        alert("Conta inválida");
        return;
      }
      this.display.value = conta;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
