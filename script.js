const Modal = {
  toogle() {
    document.querySelector(".modal-overlay").classList.toggle("active");
  },
};

const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];
  },

  set(transactions) {
    localStorage.setItem(
      "dev.finances:transactions",
      JSON.stringify(transactions)
    );
  },
};

const Transaction = {
  all: Storage.get(),  // ...existing code...
  
  // Conecta elementos do DOM aos handlers globais existentes (Modal / Form).
  document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-modal');
    const cancelBtn = document.getElementById('cancel-button');
    const overlay = document.getElementById('modal-overlay');
    const form = document.getElementById('transaction-form');
  
    const callModalToggle = (event) => {
      event?.preventDefault();
      // chama Modal.toogle se existir (mantém compatibilidade com seu código atual)
      if (window.Modal && typeof window.Modal.toogle === 'function') {
        window.Modal.toogle();
      } else if (window.Modal && typeof window.Modal.toggle === 'function') {
        window.Modal.toggle();
      }
    };
  
    if (openBtn) openBtn.addEventListener('click', callModalToggle);
    if (cancelBtn) cancelBtn.addEventListener('click', callModalToggle);
  
    // fechar modal ao clicar fora (opcional — chama o mesmo toogle)
    if (overlay) {
      overlay.addEventListener('click', (ev) => {
        if (ev.target === overlay) callModalToggle(ev);
      });
    }
  
    // Esc para fechar modal
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') callModalToggle(ev);
    });
  
    // Submissão do formulário: chama Form.submit se existir, senão previne comportamento padrão
    if (form) {
      form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        if (window.Form && typeof window.Form.submit === 'function') {
          window.Form.submit(ev);
        } else {
          // se não existir, apenas fecha modal como fallback
          callModalToggle(ev);
        }
      });
    }
  });  // ...existing code...
        <section id="transaction">
          <h2 class="sr-only">Transações</h2>
  
  -        <a onclick="Modal.toogle()" href="#" class="button new">+ Nova Transação</a>
  +        <button id="open-modal" type="button" class="button new" aria-haspopup="dialog" aria-controls="form">+ Nova Transação</button>
  
  -        <table id="data-table">
  -          <date>
  -          <thead>
  -              <th>Descrição</th>
  -              <th>Valor</th>
  -              <th>Data</th>
  -              <th></th>
  -            </tr>
  -          </thead>
  -
  -          <tbody>
  -          </tbody>
  -        </table>
  +        <table id="data-table" role="table" aria-label="Tabela de transações">
  +          <thead>
  +            <tr>
  +              <th scope="col">Descrição</th>
  +              <th scope="col">Valor</th>
  +              <th scope="col">Data</th>
  +              <th scope="col"></th>
  +            </tr>
  +          </thead>
  +          <tbody>
  +          </tbody>
  +        </table>
        </section>
      </main>
  // ...existing code...
  -    <div class="modal-overlay">
  -      <div class="modal">
  -        <div id="form">
  -          <h2>Nova Transação</h2>
  +    <div class="modal-overlay" id="modal-overlay" aria-hidden="true">
  +      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  +        <div id="form" role="document">
  +          <h2 id="modal-title">Nova Transação</h2>
  ...
  -          <form action="" onsubmit="Form.submit(event)" >
  +          <form id="transaction-form" action="" >
               <div class="input-group">
  -              <label class="sr-only" for="description"></label>
  -              <input
  -                type="text"
  -                name="description"
  -                id="description"
  -                placeholder="Descrição"
  -              />
  +              <label class="sr-only" for="description">Descrição</label>
  +              <input
  +                type="text"
  +                name="description"
  +                id="description"
  +                placeholder="Descrição"
  +                aria-label="Descrição"
  +                required
  +              />
               </div>
   
               <div class="input-group">
  -              <label class="sr-only" for="amount">Valor</label>
  -              <input
  -                type="number"
  -                step="0.01"
  -                name="amount"
  -                id="amount"
  -                placeholder="0,00"
  -              />
  +              <label class="sr-only" for="amount">Valor</label>
  +              <input
  +                type="text"
  +                inputmode="decimal"
  +                name="amount"
  +                id="amount"
  +                placeholder="0,00"
  +                aria-label="Valor"
  +                required
  +              />
                 <small class="help"
                   >Use o sinal - (negativo) para as despesas e , (vírgula) para
                   casas decimais
                 </small>
               </div>
   
               <div class="input-group">
  -              <label class="sr-only" for="date"></label>
  -              <input
  -                type="date"
  -                id="date"
  -                name="date"
  -                placeholder="01/01/2021"
  -              />
  +              <label class="sr-only" for="date">Data</label>
  +              <input
  +                type="date"
  +                id="date"
  +                name="date"
  +                placeholder="01/01/2021"
  +                aria-label="Data"
  +                required
  +              />
               </div>
   
               <div class="input-group actions">
  -              <a onclick="Modal.toogle()" href="#" class="button cancel">Cancelar</a>
  -              <button>Salvar</button>
  +              <button id="cancel-button" type="button" class="button cancel">Cancelar</button>
  +              <button id="save-button" type="submit">Salvar</button>
               </div>
             </form>
           </div>
         </div>
       </div>
  // ...existing code...
  -    <footer>
  +    <footer>
         <p>©FinanceiroFarm   e-mail - pachecoreidner@gmail.com </p>
       </footer>
   
  -    <script src="./script.js"></script>
  +    <script src="./script.js"></script>
     </body>
   </html>  // ...existing code...
        <section id="transaction">
          <h2 class="sr-only">Transações</h2>
  
  -        <a onclick="Modal.toogle()" href="#" class="button new">+ Nova Transação</a>
  +        <button id="open-modal" type="button" class="button new" aria-haspopup="dialog" aria-controls="form">+ Nova Transação</button>
  
  -        <table id="data-table">
  -          <date>
  -          <thead>
  -              <th>Descrição</th>
  -              <th>Valor</th>
  -              <th>Data</th>
  -              <th></th>
  -            </tr>
  -          </thead>
  -
  -          <tbody>
  -          </tbody>
  -        </table>
  +        <table id="data-table" role="table" aria-label="Tabela de transações">
  +          <thead>
  +            <tr>
  +              <th scope="col">Descrição</th>
  +              <th scope="col">Valor</th>
  +              <th scope="col">Data</th>
  +              <th scope="col"></th>
  +            </tr>
  +          </thead>
  +          <tbody>
  +          </tbody>
  +        </table>
        </section>
      </main>
  // ...existing code...
  -    <div class="modal-overlay">
  -      <div class="modal">
  -        <div id="form">
  -          <h2>Nova Transação</h2>
  +    <div class="modal-overlay" id="modal-overlay" aria-hidden="true">
  +      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  +        <div id="form" role="document">
  +          <h2 id="modal-title">Nova Transação</h2>
  ...
  -          <form action="" onsubmit="Form.submit(event)" >
  +          <form id="transaction-form" action="" >
               <div class="input-group">
  -              <label class="sr-only" for="description"></label>
  -              <input
  -                type="text"
  -                name="description"
  -                id="description"
  -                placeholder="Descrição"
  -              />
  +              <label class="sr-only" for="description">Descrição</label>
  +              <input
  +                type="text"
  +                name="description"
  +                id="description"
  +                placeholder="Descrição"
  +                aria-label="Descrição"
  +                required
  +              />
               </div>
   
               <div class="input-group">
  -              <label class="sr-only" for="amount">Valor</label>
  -              <input
  -                type="number"
  -                step="0.01"
  -                name="amount"
  -                id="amount"
  -                placeholder="0,00"
  -              />
  +              <label class="sr-only" for="amount">Valor</label>
  +              <input
  +                type="text"
  +                inputmode="decimal"
  +                name="amount"
  +                id="amount"
  +                placeholder="0,00"
  +                aria-label="Valor"
  +                required
  +              />
                 <small class="help"
                   >Use o sinal - (negativo) para as despesas e , (vírgula) para
                   casas decimais
                 </small>
               </div>
   
               <div class="input-group">
  -              <label class="sr-only" for="date"></label>
  -              <input
  -                type="date"
  -                id="date"
  -                name="date"
  -                placeholder="01/01/2021"
  -              />
  +              <label class="sr-only" for="date">Data</label>
  +              <input
  +                type="date"
  +                id="date"
  +                name="date"
  +                placeholder="01/01/2021"
  +                aria-label="Data"
  +                required
  +              />
               </div>
   
               <div class="input-group actions">
  -              <a onclick="Modal.toogle()" href="#" class="button cancel">Cancelar</a>
  -              <button>Salvar</button>
  +              <button id="cancel-button" type="button" class="button cancel">Cancelar</button>
  +              <button id="save-button" type="submit">Salvar</button>
               </div>
             </form>
           </div>
         </div>
       </div>
  // ...existing code...
  -    <footer>
  +    <footer>
         <p>©FinanceiroFarm   e-mail - pachecoreidner@gmail.com </p>
       </footer>
   
  -    <script src="./script.js"></script>
  +    <script src="./script.js"></script>
     </body>
   </html>

  add(transaction) {
    Transaction.all.push(transaction);

    App.reload();
  },

  remove(index) {
    Transaction.all.splice(index, 1);

    App.reload();
  },

  incomes() {
    let income = 0;

    Transaction.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    });

    return income;
  },

  expenses() {
    let expense = 0;

    Transaction.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    });

    return expense;
  },

  total() {
    return Transaction.incomes() + Transaction.expenses();
  },
};

const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),

  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction, index);
    tr.dataset.index = index;

    DOM.transactionsContainer.appendChild(tr);
  },

  innerHTMLTransaction(transaction, index) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense";
    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
      <td class="description">${transaction.description}</td>
      <td class="${CSSclass}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação" />
      </td>
    `;

    return html;
  },

  updateBalance() {
    document.getElementById("incomeDisplay").innerHTML = Utils.formatCurrency(
      Transaction.incomes()
    );

    document.getElementById("expenseDisplay").innerHTML = Utils.formatCurrency(
      Transaction.expenses()
    );

    document.getElementById("totalDisplay").innerHTML = Utils.formatCurrency(
      Transaction.total()
    );
  },

  clearTransactions() {
    DOM.transactionsContainer.innerHTML = "";
  },
};

const Utils = {
  formatAmount(value) {
    value = Number(value.replace(/\,\./g, "")) * 100;

    return value;
  },

  formatDate(date) {
    const splittedDate = date.split("-");

    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
  },

  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";

    // Na expressão regular o \D é tudo que não é número.
    // O g depois da expressão regular é para indicar que a busca será global.
    value = String(value).replace(/\D/g, "");

    value = Number(value) / 100;

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return signal + value;
  },
};

const Form = {
  description: document.querySelector("#description"),
  amount: document.querySelector("#amount"),
  date: document.querySelector("#date"),

  getValues() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value,
    };
  },

  formatValues() {
    let { description, amount, date } = Form.getValues();

    amount = Utils.formatAmount(amount);
    date = Utils.formatDate(date);

    return {
      description,
      amount,
      date,
    };
  },

  validateFields() {
    const { description, amount, date } = Form.getValues();

    if (
      description.trim() === "" ||
      amount.trim() === "" ||
      date.trim() === ""
    ) {
      throw new Error("Por favor preencha todos os campos.");
    }
  },

  clearFields() {
    Form.description.value = "";
    Form.amount.value = "";
    Form.date.value = "";
  },

  submit(event) {
    event.preventDefault();

    try {
      Form.validateFields();
      const transaction = Form.formatValues();
      Transaction.add(transaction);
      Form.clearFields();
      Modal.toogle();
    } catch (error) {
      alert(error.message);
    }
  },
};

const App = {
  init() {
    Transaction.all.forEach(DOM.addTransaction);

    DOM.updateBalance();

    Storage.set(Transaction.all);
  },

  reload() {
    DOM.clearTransactions();
    App.init();
  },
};

App.init();

// Conecta elementos do DOM aos handlers globais existentes (Modal / Form).
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-modal');
  const cancelBtn = document.getElementById('cancel-button');
  const overlay = document.getElementById('modal-overlay');
  const form = document.getElementById('transaction-form');

  const callModalToggle = (event) => {
    event?.preventDefault();
    // chama Modal.toogle se existir (mantém compatibilidade com seu código atual)
    if (window.Modal && typeof window.Modal.toogle === 'function') {
      window.Modal.toogle();
    } else if (window.Modal && typeof window.Modal.toggle === 'function') {
      window.Modal.toggle();
    }
  };

  if (openBtn) openBtn.addEventListener('click', callModalToggle);
  if (cancelBtn) cancelBtn.addEventListener('click', callModalToggle);

  // fechar modal ao clicar fora (opcional — chama o mesmo toogle)
  if (overlay) {
    overlay.addEventListener('click', (ev) => {
      if (ev.target === overlay) callModalToggle(ev);
    });
  }

  // Esc para fechar modal
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') callModalToggle(ev);
  });

  // Submissão do formulário: chama Form.submit se existir, senão previne comportamento padrão
  if (form) {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      if (window.Form && typeof window.Form.submit === 'function') {
        window.Form.submit(ev);
      } else {
        // se não existir, apenas fecha modal como fallback
        callModalToggle(ev);
      }
    });
  }
});
