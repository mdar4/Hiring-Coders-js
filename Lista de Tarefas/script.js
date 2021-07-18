const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists = [];

newListForm.addEventListener('submit', function(e){
    // prevenção para que toda vez que a página atualizar  devido ao padrão do navegador para forms,a lista não seja perdida
    e.preventDefault()
    const listName = newListInput.value

    // verificação se o valor da lista está nulo ou vazio
    if( listName === null || listName === '') return

    // se a verificação não for verdadeira
    const list = createList(listName) // função criada

    // limpeza do input a cada item adicionado 
    newListInput.value = null

    // método para adicionar itens em uma lista(array)
    lists.push(list)
    render()
    
})

function render() {
    clearElement(listContainer) // função para não repetir elementos
    lists.forEach(function(list){
        // document.createElement cria um elemento dentro do html, neste caso uma li (lista)
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list
        // método para adicionar item na div fantasma
        listContainer.appendChild(item)
    }) // forEach exige função de retorno
}

function createList(name){
    return { id: Date.now().toString(), name: name }
}

// até aqui estava ocorrendo um evento de repetição de items

// função para limpar input e não repetir elementos

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}