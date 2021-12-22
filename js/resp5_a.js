var clubes = [];

function adicionarClubes() {
  var inClube = document.getElementById("inClube");
  var nomeClube = inClube.value;

  if (nomeClube == "") {
    alert("Informe o nome do clube");
    inClube.focus();
    return;
  }

  clubes.push(nomeClube);

  listarClubes();

  inClube.value = "";
  inClube.focus();

}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClubes);

function listarClubes() {
  
  if (clubes.length == 0){
    alert("Não há clubes na lista");
    inClube.focus();
    return;
  }

  var lista = "";

  for (i = 0; i < clubes.length; i++) {
    lista += (i + 1) + ". " + clubes[i] + "\n";
  }

  document.getElementById("outLista").textContent = lista;
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarClubes);

function montarTabela() {

  if (clubes.length == 0 || (clubes.length % 2 == 1)){
    alert("O número de clubes não pode ser ímpar");
    inClube.focus();
    return;
  }
  var tabela = "";

  for(i = 0; i < clubes.length/2; i++) {
    tabela += clubes[i] + " x " + (clubes[clubes.length - i - 1]) + "\n";
  }

  
  document.getElementById("outLista").textContent = tabela;
}

var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarTabela);


