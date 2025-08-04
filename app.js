let nome = "";
function salvarNome() {
   nome = document.getElementById("nome").value;
        listaDeAmigos.push(nome);
        document.getElementById("nome").value = "";
        atualizarLista();
}


let listaDeAmigos = [];


function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
        listaDeAmigos.push(nomeAmigo);
        document.getElementById("amigo").value ="";
        atualizarLista();
}

function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaDeAmigos[i];
        listaAtualizada.appendChild(itemLista);
    }
}

function sortearAmigo() {
   
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeSorteado = listaDeAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;

}

function novoSorteio(){
    location.reload()
}
