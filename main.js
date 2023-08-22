const form  = document.getElementById('form-agenda');
const imgSalvo= '<img src="./imagens/checkmark.png" alt="checkmark" />';

const nomes = [];
const numeros =[];


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumContato = document.getElementById('numero-contato');
    
    if(nomes.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumContato.value));
    
        let linha = '<tr>';
        linha +=`<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumContato.value}</td>`;
        linha += `<td>${inputNumContato.value =  imgSalvo }</td>`;
        linha += '</tr>';
        linhas += linha;
    }
    
    inputNomeContato.value = '';
    inputNumContato.value = '';
}
function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

