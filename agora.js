//  Guarda com SUCESSO!!!
//var guardar = [];
function add() {
  captar = document.getElementById("valor").value;
  if (captar == "") {
    alert("Digite um valor valido");
    return add;
  }

  const node = document.createElement("li");
  const textnode = document.createTextNode(captar);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}

// Ordenação com Sucesso :

function ordenar() {
  let inteiro = [];

  let x = document.getElementById("myList").children;
  var select = document.getElementById("mySelect");
  var valor = select.options[select.selectedIndex].value;

  for (const child of x) {
    inteiro.push(eval(child.innerHTML));
  }

  document.getElementById("demo0").innerHTML = x.children;
  document.getElementById("demo1").innerHTML = inteiro;
  document.getElementById("demo2").innerHTML = numeros;

  //Iniciio Função BlubbleSort:

  if (valor == 1) {
    var numeros = inteiro;

    alert(numeros);

    for (var i = 0; i <= numeros.length - 1; i++) {
      for (var j = 0; j < numeros.length - i - 1; j++) {
        if (numeros[j] > inteiro[j + 1]) {
          var temp = numeros[j];
          numeros[j] = numeros[j + 1];
          numeros[j + 1] = temp;
        }
      }
    }

    for (const node of numeros) {
      const node = document.createElement("li");
      const textnode = document.createTextNode(numeros);
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
    }
    // Trocar:
    let x = document.getElementById("myList").children;
    x.innerHTML = "brasil";
  }

  //Iniciio Função SelectionSort:
  if (valor == 2) {
    var numeros1 = inteiro;
    //function selectSort() {
    alert("Olá Select Sort");
    alert(numeros1);
    let n = numeros1.length;
    for (let i = 0; i < n; i++) {
      // Finding the smallest number in the subnumeros2
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (numeros1[j] < numeros1[min]) {
          min = j;
        }
      }
      if (min != i) {
        // Swapping the elements
        let tmp = numeros1[i];
        numeros1[i] = numeros1[min];
        numeros1[min] = tmp;
      }
    }
    alert(numeros1);
    document.getElementById("demo2").innerHTML = numeros1;
  }
  // Fim função SelectSort:

  // Inicio QUick Select:
  if (valor == 3) {
    alert("Olá Quick Sort");
    var numeros2 = inteiro;
    const quickSort = (numeros2) => {
      const list = [...numeros2];
      //6, 3, 1, 9, 7
      if (list.length < 2) {
        return list;
      }
      const pivot = list[0];
      const smaller = list.filter((item) => item < pivot);
      const bigger = list.filter((item) => item > pivot);
      return [...quickSort(smaller), pivot, ...quickSort(bigger)];
    };
    alert(quickSort(numeros2));
    document.getElementById("demo3").innerHTML = quickSort(numeros2);
  }
} // Fim da Função Ordenar:
