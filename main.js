const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '13 / 02 / 2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 1000000,
        date: '06 / 02 / 2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -10000,
        date: '10 / 02 / 2021',
    },
    {
        id: 4,
        description: 'App',
        amount: 600000,
        date: '12 / 02 / 2021',
    },
]

//Sempre se organizar com a sequencia de processos

//Somar as entradas
//Somar as saidas
//Calcular as entradas pelas as saidas e trazer o total

const transaction = {
    income() {
        //Somar as entradas
    },
    expenses() {
        //Somar as saidas
    },
    total() {
        //Entradas - saidas
    }
}

//Necessario pegar as transações do objeto no JavaScript e colocar no HTML

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        // const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <tr>
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover transação">
        </td>
        </tr>
        `

        return html
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})

